import { useRef, useState } from "react";
import type { FormEvent } from "react";

export type WaitlistStatus = "idle" | "pending" | "error" | "done";

type Outcome = { ok: true } | { ok: false; message: string };

const GENERIC_FAILURE = "We couldn’t save your email just now. Please try again.";

/**
 * Posts to our own path rather than a vendor directly, so moving the waitlist
 * behind the Trafast backend later is a routing change, not a UI change.
 */
async function postWaitlist(input: {
  email: string;
  company: string;
  elapsedMs: number;
}): Promise<Outcome> {
  let response: Response;
  try {
    response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(input),
    });
  } catch {
    return { ok: false, message: "No connection. Check your network and try again." };
  }

  if (response.ok) return { ok: true };

  const body = (await response.json().catch(() => null)) as { message?: string } | null;
  return { ok: false, message: body?.message ?? GENERIC_FAILURE };
}

export function useWaitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<WaitlistStatus>("idle");
  const [error, setError] = useState("");

  const honeypotRef = useRef<HTMLInputElement>(null);
  const openedAt = useRef(Date.now());

  const onEmailChange = (value: string) => {
    setEmail(value);
    // Clear a stale failure as soon as they start correcting it.
    if (status === "error") {
      setStatus("idle");
      setError("");
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "pending") return;

    setStatus("pending");
    setError("");

    const outcome = await postWaitlist({
      email: email.trim(),
      company: honeypotRef.current?.value ?? "",
      elapsedMs: Date.now() - openedAt.current,
    });

    if (outcome.ok) {
      setStatus("done");
    } else {
      setStatus("error");
      setError(outcome.message);
    }
  };

  return { email, onEmailChange, status, error, onSubmit, honeypotRef };
}
