/**
 * A thin, typed layer over whatever analytics vendor we happen to use. Every
 * event on the site goes through `track`, so swapping vendors means editing
 * this file and the script tag in index.html, nothing else.
 *
 * Two rules, both load-bearing:
 *   - Never pass anything that identifies a person. No email addresses, ever.
 *   - Never throw. A blocked or missing tracker must not break the page.
 */

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, string | number | boolean>) => void;
    };
  }
}

/** The sections worth knowing someone reached. Fewer than the page has, on purpose. */
export type TrackedSection =
  | "everyday"
  | "how_it_works"
  | "business"
  | "footer";

export type AnalyticsEvent =
  | { name: "section_reached"; props: { section: TrackedSection } }
  | { name: "waitlist_opened"; props: { trigger: "nav" | "hero" | "business" } }
  | { name: "waitlist_submitted"; props?: never }
  | { name: "waitlist_failed"; props: { reason: "network" | "validation" | "server" } }
  | { name: "language_changed"; props: { to: string } }
  | { name: "audience_switched"; props: { to: "personal" | "business" } }
  | { name: "faq_opened"; props: { index: number } }
  | { name: "back_to_top_used"; props?: never }
  | { name: "engaged_time"; props: { seconds: number } };

/**
 * Off unless a website id is configured, which keeps local work and preview
 * builds out of the numbers.
 */
export const ANALYTICS_ENABLED = Boolean(import.meta.env.VITE_UMAMI_WEBSITE_ID);

/**
 * Injects the tracker, once, only when configured. Done here rather than with a
 * tag in index.html because Vite leaves `%VITE_*%` placeholders in place when a
 * variable is unset, which would fire a 404 on every page load.
 */
export function loadAnalytics(): void {
  if (!ANALYTICS_ENABLED) return;
  if (document.querySelector("script[data-website-id]")) return;

  const src = import.meta.env.VITE_UMAMI_SCRIPT_URL;
  if (!src) return;

  const el = document.createElement("script");
  el.async = true;
  el.src = src;
  // Umami reads its configuration off its own script element.
  el.dataset.websiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID as string;
  document.head.appendChild(el);
}

export function track<E extends AnalyticsEvent>(
  name: E["name"],
  props?: E extends { props: infer P } ? P : never
): void {
  if (!ANALYTICS_ENABLED) return;
  try {
    window.umami?.track(name, props as Record<string, string | number | boolean>);
  } catch {
    // Analytics is never worth an exception on the page.
  }
}

/**
 * Fires an event at most once per page load. Section milestones would
 * otherwise fire every time someone scrolls back past them.
 */
export function createOnceTracker() {
  const seen = new Set<string>();
  return function trackOnce<E extends AnalyticsEvent>(
    name: E["name"],
    props?: E extends { props: infer P } ? P : never
  ) {
    const key = props ? `${name}:${Object.values(props).join(",")}` : name;
    if (seen.has(key)) return;
    seen.add(key);
    track(name, props);
  };
}
