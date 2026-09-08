import { useEffect, useRef } from "react";
import { track, type TrackedSection } from "./analytics";

/** Sections we report on, and the DOM hook that identifies each one. */
const SECTION_SELECTORS: { section: TrackedSection; selector: string }[] = [
  { section: "everyday", selector: "[data-story]" },
  { section: "how_it_works", selector: "#how-it-works" },
  { section: "business", selector: "#business" },
  { section: "footer", selector: "[data-m='close']" },
];

/**
 * Reports how far down the page someone actually got. Percentage depth is
 * meaningless on a page this tall; which section they reached is a decision
 * you can act on.
 */
export function useSectionTracking() {
  useEffect(() => {
    const pending = new Map<Element, TrackedSection>();
    for (const { section, selector } of SECTION_SELECTORS) {
      const el = document.querySelector(selector);
      if (el) pending.set(el, section);
    }
    if (!pending.size) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const section = pending.get(entry.target);
          if (!section) continue;
          track("section_reached", { section });
          // Once is enough; scrolling back up is not new information.
          pending.delete(entry.target);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    pending.forEach((_, el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/** Counted as engaged only while the tab is visible and the person is doing something. */
const IDLE_AFTER_MS = 30_000;
const TICK_MS = 5_000;

/**
 * Time on page is close to useless by itself — an abandoned tab looks like
 * rapt attention. This counts only seconds where the tab was visible and
 * there was input within the last half minute, and reports once on the way out.
 */
export function useEngagementTime() {
  const seconds = useRef(0);
  const lastActivity = useRef(Date.now());

  useEffect(() => {
    const bump = () => {
      lastActivity.current = Date.now();
    };
    const events = ["pointerdown", "keydown", "scroll", "wheel", "touchstart"] as const;
    events.forEach((e) => window.addEventListener(e, bump, { passive: true }));

    const timer = window.setInterval(() => {
      const active =
        document.visibilityState === "visible" &&
        Date.now() - lastActivity.current < IDLE_AFTER_MS;
      if (active) seconds.current += TICK_MS / 1000;
    }, TICK_MS);

    const report = () => {
      if (seconds.current > 0) {
        track("engaged_time", { seconds: Math.round(seconds.current) });
        seconds.current = 0;
      }
    };
    // pagehide is the one that survives the bfcache and mobile tab switching.
    window.addEventListener("pagehide", report);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") report();
    });

    return () => {
      events.forEach((e) => window.removeEventListener(e, bump));
      clearInterval(timer);
      window.removeEventListener("pagehide", report);
      report();
    };
  }, []);
}
