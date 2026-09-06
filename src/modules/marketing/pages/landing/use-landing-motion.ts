import { useEffect, useRef } from "react";

/**
 * The prototype eases wheel input rather than letting the browser scroll
 * natively. Flip this to false to hand scrolling back to the browser.
 */
export const SMOOTH_WHEEL = true;

/** Matches the prototype's `scrollSpeed` design prop. */
export const SCROLL_SPEED = 0.65;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  !!window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function scrollToId(id: string, offset = 0) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - offset,
    behavior: "smooth",
  });
}

export function scrollToSignup() {
  const form = document.querySelector("[data-signup]");
  if (!form) return;
  window.scrollTo({
    top: form.getBoundingClientRect().top + window.scrollY - 120,
    behavior: "smooth",
  });
  setTimeout(() => {
    const input = form.querySelector("input");
    if (input) input.focus();
  }, 700);
}

/**
 * Drives every scroll-linked effect on the page: hero fragments drifting off,
 * the sticky phone's scale, which walkthrough beat is active, the fanning
 * feature cards, the zoom-in section intros and the generic reveals.
 */
export function useLandingMotion(onBeatChange: (beat: number) => void) {
  const beatRef = useRef(0);
  const rafRef = useRef(0);
  const onBeatRef = useRef(onBeatChange);
  onBeatRef.current = onBeatChange;

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        const reduce = prefersReducedMotion();
        const vh = window.innerHeight;

        const hero = document.querySelector("[data-hero]");
        if (hero) {
          const r = hero.getBoundingClientRect();
          const p = Math.min(1, Math.max(0, -r.top / (r.height * 0.6)));
          document.querySelectorAll<HTMLElement>("[data-frag]").forEach((el) => {
            const dir = el.getAttribute("data-frag") === "left" ? -1 : 1;
            el.style.setProperty("--sx", (reduce ? 0 : dir * p * 720) + "px");
            el.style.opacity = String(Math.max(0, 1 - p * 1.2));
          });
        }

        const grid = document.querySelector<HTMLElement>("[data-howgrid]");
        if (grid) {
          grid.style.setProperty(
            "--ps",
            String(
              window.innerWidth <= 820
                ? Math.min((vh * 0.46) / 928, (grid.clientWidth - 40) / 440)
                : Math.min(1, (vh - 48) / 928, (grid.clientWidth - 40) / 440)
            )
          );
        }

        const beats = document.querySelectorAll("[data-beat]");
        if (beats.length) {
          let active = 0;
          const line = window.innerWidth <= 820 ? vh * 0.72 : vh * 0.5;
          beats.forEach((el, i) => {
            if (el.getBoundingClientRect().top < line) active = i;
          });
          if (active !== beatRef.current) {
            beatRef.current = active;
            onBeatRef.current(active);
          }
        }

        document.querySelectorAll<HTMLElement>("[data-panel]").forEach((el) => {
          el.style.setProperty(
            "--fit",
            String(Math.min(1.15, (el.clientWidth - 40) / 420))
          );
        });

        document.querySelectorAll<HTMLElement>("[data-fanwrap]").forEach((fw) => {
          const r = fw.getBoundingClientRect();
          const t = Math.min(1, Math.max(0, (vh * 0.95 - r.top) / (vh * 0.7)));
          const e = 1 - Math.pow(1 - t, 3);
          const mobile = window.innerWidth <= 820;
          const w = mobile ? 0 : r.width / 3;
          fw.querySelectorAll<HTMLElement>("[data-fan]").forEach((el) => {
            const i = Number(el.getAttribute("data-fan"));
            const off = mobile ? 0 : (1 - i) * (w + 20) * (1 - e);
            const rot = mobile ? 0 : (i - 1) * 6 * (1 - e);
            const lift = mobile ? 60 * (1 - e) : 120 * (1 - e) + i * 24 * (1 - e);
            el.style.transform = `translate(${off}px, ${lift}px) rotate(${rot}deg) scale(${
              0.92 + 0.08 * e
            })`;
            el.style.zIndex = String(i === 1 ? 3 : 2 - Math.abs(i - 1));
            el.style.opacity = String(0.4 + 0.6 * e);
          });
        });

        document.querySelectorAll<HTMLElement>("[data-art]").forEach((el) => {
          const card = el.closest<HTMLElement>("[data-fan]");
          if (card) {
            el.style.setProperty(
              "--fit",
              String(Math.min(1.2, (card.clientWidth - 40) / 320))
            );
          }
        });

        document.querySelectorAll<HTMLElement>("[data-zoom]").forEach((el) => {
          const r = el.getBoundingClientRect();
          const c = r.top + r.height / 2;
          const t = Math.min(1, Math.max(0, 1 - (c - vh * 0.5) / (vh * 0.55)));
          const ease = 1 - Math.pow(1 - t, 3);
          el.style.opacity = String(ease);
          el.style.transform = `scale(${0.6 + 0.4 * ease})`;

          const lock = el.parentElement?.querySelector<HTMLElement>("[data-lock]");
          if (lock) {
            lock.style.opacity = String(ease);
            lock.style.transform = `scale(${0.7 + 0.3 * ease})`;
            const lt = Math.min(1, Math.max(0, (t - 0.45) / 0.45));
            const le = 1 - Math.pow(1 - lt, 3);
            const shackle = lock.querySelector<HTMLElement>("[data-shackle]");
            if (shackle) {
              shackle.style.transform = `translateY(${-34 * (1 - le)}px) rotate(${
                -16 * (1 - le)
              }deg)`;
            }
            const keyhole = lock.querySelector<HTMLElement>("[data-keyhole]");
            if (keyhole) keyhole.style.background = lt >= 1 ? "#1F6B4A" : "#FBF8F2";
            const keyslot = lock.querySelector<HTMLElement>("[data-keyslot]");
            if (keyslot) keyslot.style.background = lt >= 1 ? "#1F6B4A" : "#FBF8F2";
          }
        });

        document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
          const on = el.getBoundingClientRect().top < vh * 0.88;
          el.style.opacity = on ? "1" : "0";
          el.style.transform = on
            ? "none"
            : el.getAttribute("data-reveal") === "pop"
              ? "translateY(30px) scale(0.6)"
              : "translateY(40px)";
        });
      });
    };

    document.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    onScroll();
    const settle = setTimeout(onScroll, 300);

    return () => {
      document.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
      clearTimeout(settle);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      // Must clear, or the guard above blocks every later frame on remount.
      rafRef.current = 0;
    };
  }, []);
}

/** Eases wheel input into `window.scrollTo`, as the prototype does. */
export function useSmoothWheel() {
  useEffect(() => {
    if (!SMOOTH_WHEEL || prefersReducedMotion()) return;

    let target = window.scrollY;
    let running = false;

    const maxTop = () =>
      document.documentElement.scrollHeight - window.innerHeight;

    const tick = () => {
      const cur = window.scrollY;
      if (Math.abs(target - cur) < 0.5) {
        running = false;
        window.scrollTo(0, target);
        return;
      }
      window.scrollTo(0, cur + (target - cur) * 0.12);
      requestAnimationFrame(tick);
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      if (!running) target = window.scrollY;
      const d = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
      target = Math.max(0, Math.min(maxTop(), target + d * SCROLL_SPEED));
      if (!running) {
        running = true;
        requestAnimationFrame(tick);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);
}
