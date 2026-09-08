import type { Config, Context } from "@netlify/functions";

/**
 * Adds an email to the Resend audience that the launch announcement will be
 * sent from. Deliberately independent of the main Trafast backend: the landing
 * site ships before it, and a mailing list has no business living next to the
 * banking core.
 */

/** Bots fill hidden fields, and they submit faster than a human can type. */
const MIN_FILL_MS = 1500;

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

/**
 * Per-instance only — Netlify may run several, so this blunts naive floods
 * rather than stopping a determined one. See the README for the upgrade path.
 */
const recentByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (recentByIp.get(ip) ?? []).filter(
    (at) => now - at < RATE_LIMIT_WINDOW_MS
  );
  recent.push(now);
  recentByIp.set(ip, recent);

  // Keep the map from growing without bound on a long-lived instance.
  if (recentByIp.size > 5000) {
    for (const [key, times] of recentByIp) {
      if (times.every((at) => now - at >= RATE_LIMIT_WINDOW_MS)) {
        recentByIp.delete(key);
      }
    }
  }
  return recent.length > RATE_LIMIT_MAX;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const GENERIC_FAILURE =
  "We couldn’t save your email just now. Please try again shortly.";

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

export default async (req: Request, context: Context): Promise<Response> => {
  if (req.method !== "POST") {
    return json({ message: "Method not allowed." }, 405);
  }

  // Trimmed: a value pasted into the Netlify UI can carry a trailing newline
  // or wrapping quotes, which reach Resend as part of the path and 404.
  const apiKey = process.env.RESEND_API_KEY?.trim().replace(/^["']|["']$/g, "");
  const audienceId = process.env.RESEND_AUDIENCE_ID?.trim().replace(
    /^["']|["']$/g,
    ""
  );

  if (!apiKey || !audienceId) {
    console.error(
      "waitlist: RESEND_API_KEY and/or RESEND_AUDIENCE_ID are not configured"
    );
    return json({ message: GENERIC_FAILURE }, 500);
  }

  // Resend audience ids are UUIDs. Catching a malformed one here turns an
  // opaque "Audience not found" into something that names the actual problem.
  if (!UUID_PATTERN.test(audienceId)) {
    console.error(
      `waitlist: RESEND_AUDIENCE_ID is not a UUID (got ${JSON.stringify(audienceId)}). ` +
        "Copy the id from the audience's page in the Resend dashboard, not its name."
    );
    return json({ message: GENERIC_FAILURE }, 500);
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return json({ message: "Invalid request." }, 400);
  }

  const { email, company, elapsedMs } = (payload ?? {}) as {
    email?: unknown;
    company?: unknown;
    elapsedMs?: unknown;
  };

  // Honeypot and timing failures get a success response — telling a bot why it
  // was rejected just helps it try again. The flag below lets the page know not
  // to count it as a signup, without telling the caller anything useful.
  if (typeof company === "string" && company.trim() !== "") {
    return json({ ok: true, stored: false }, 200);
  }
  if (typeof elapsedMs === "number" && elapsedMs < MIN_FILL_MS) {
    return json({ ok: true, stored: false }, 200);
  }

  const address = typeof email === "string" ? email.trim().toLowerCase() : "";
  if (address.length > 254 || !EMAIL_PATTERN.test(address)) {
    return json({ message: "That email doesn’t look right." }, 400);
  }

  const ip =
    context.ip || req.headers.get("x-nf-client-connection-ip") || "unknown";
  if (isRateLimited(ip)) {
    return json({ message: "Too many attempts. Try again in a minute." }, 429);
  }

  let response: Response;
  try {
    response = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${apiKey}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: address, unsubscribed: false }),
      }
    );
  } catch (cause) {
    console.error("waitlist: could not reach Resend", cause);
    return json({ message: GENERIC_FAILURE }, 502);
  }

  // 409 means they are already on the list, which is a success from here.
  if (!response.ok && response.status !== 409) {
    const detail = await response.text().catch(() => "<unreadable body>");

    if (response.status === 404) {
      console.error(
        `waitlist: Resend has no audience ${audienceId} for this API key. ` +
          "Check RESEND_AUDIENCE_ID against the Audiences page, and that the key " +
          "belongs to the same Resend team as the audience."
      );
      return json({ message: GENERIC_FAILURE }, 500);
    }

    console.error("waitlist: Resend rejected the contact", response.status, detail);
    return json({ message: GENERIC_FAILURE }, 502);
  }

  return json({ ok: true, stored: true }, 200);
};

export const config: Config = { path: "/api/waitlist" };
