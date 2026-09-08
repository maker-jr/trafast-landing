import { useLayoutEffect, useState } from "react";
import { useLanguage } from "../i18n/use-language";
import { track } from "../analytics/analytics";

type Width = { text: number; full: number };

/**
 * Each closed question shrinks to hug its own text, so the column reads as a
 * ragged stack rather than a list of full-width bars. That needs a real
 * measurement of the question at its rendered font.
 */
function useFaqWidths(lang: string) {
  const [widths, setWidths] = useState<Record<number, Width>>({});

  useLayoutEffect(() => {
    // A new language means new question lengths, so drop the old measurements
    // rather than letting the pills keep the previous language's widths.
    setWidths({});

    const measure = () => {
      const next: Record<number, Width> = {};
      document.querySelectorAll<HTMLElement>("[data-faqq]").forEach((el, i) => {
        const probe = document.createElement("span");
        probe.textContent = el.textContent;
        const cs = getComputedStyle(el);
        probe.style.cssText = `position:absolute;visibility:hidden;white-space:nowrap;font:${cs.font};letter-spacing:${cs.letterSpacing};`;
        document.body.appendChild(probe);
        const textW = Math.ceil(probe.getBoundingClientRect().width) + 60;
        probe.remove();
        const row = el.closest<HTMLElement>("[data-faqrow]");
        const full = row ? row.clientWidth - 72 - 14 : 0;
        next[i] = { text: Math.min(textW, full || textW), full };
      });
      setWidths(next);
    };

    // Wait for the webfont to settle before measuring.
    const initial = setTimeout(measure, 600);
    if (document.fonts?.ready) document.fonts.ready.then(measure);

    const onResize = () => {
      setWidths({});
      setTimeout(measure, 50);
    };
    // Re-measure once the swapped-in text has been laid out.
    const afterSwap = setTimeout(measure, 120);

    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(initial);
      clearTimeout(afterSwap);
      window.removeEventListener("resize", onResize);
    };
  }, [lang]);

  return widths;
}

export default function Faq() {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(0);
  const [hover, setHover] = useState(-1);
  const widths = useFaqWidths(lang);

  return (
    <section id="faq" style={{ background: "#FBF8F2", color: "#2A211B" }}>
      <div
        style={{
          maxWidth: 1560,
          width: "100%",
          margin: "0 auto",
          padding: "160px 40px 180px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 22,
          }}
        >
          <div
            data-reveal=""
            style={{
              fontSize: "clamp(52px, 6.6vw, 108px)",
              lineHeight: 0.94,
              letterSpacing: "-0.048em",
              fontWeight: 900,
              textWrap: "balance",
              opacity: 0,
              transform: "translateY(40px)",
              transition:
                "opacity 0.9s 0s cubic-bezier(0.22,1,0.36,1), transform 0.9s 0s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {t.faq.head}
          </div>
          <div
            data-reveal=""
            style={{
              fontSize: "clamp(19px, 1.7vw, 25px)",
              lineHeight: 1.45,
              fontWeight: 600,
              color: "#6E6459",
              maxWidth: 520,
              textWrap: "balance",
              opacity: 0,
              transform: "translateY(40px)",
              transition:
                "opacity 0.9s 0.1s cubic-bezier(0.22,1,0.36,1), transform 0.9s 0.1s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {t.faq.sub}
          </div>
        </div>

        <div
          data-reveal=""
          style={{
            width: "100%",
            maxWidth: 1100,
            display: "flex",
            flexDirection: "column",
            gap: 14,
            opacity: 0,
            transform: "translateY(40px)",
            transition:
              "opacity 0.9s 0.1s cubic-bezier(0.22,1,0.36,1), transform 0.9s 0.1s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {t.faq.items.map(([question, answer], i) => {
            const isOpen = open === i;
            const isHover = hover === i;
            const measured = widths[i];
            const width = measured
              ? `${isOpen || isHover ? measured.full : measured.text}px`
              : isOpen || isHover
                ? "100%"
                : "auto";

            return (
              <div
                key={question}
                data-faqrow=""
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(-1)}
                onClick={() => {
                  // Outside the updater: React may call an updater twice, and
                  // a side effect in there fires twice with it.
                  if (open !== i) track("faq_opened", { index: i });
                  setOpen((cur) => (cur === i ? -1 : i));
                }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1fr) 72px",
                  gap: 14,
                  alignItems: "start",
                  cursor: "pointer",
                }}
              >
                <button
                  aria-expanded={isOpen}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 0,
                    border: "none",
                    padding: 0,
                    margin: 0,
                    background: "transparent",
                    fontFamily: "inherit",
                    textAlign: "left",
                    cursor: "pointer",
                    color: "#2A211B",
                    justifySelf: "start",
                    maxWidth: "100%",
                    transition: "width 0.45s cubic-bezier(0.22,1,0.36,1)",
                    width,
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      width: "100%",
                      boxSizing: "border-box",
                      borderRadius: 26,
                      padding: "24px 30px",
                      transition: "background 0.35s",
                      background: isOpen ? "#E9E1D2" : isHover ? "#EBE4D6" : "#F0EADE",
                    }}
                  >
                    <span
                      data-m="faqq"
                      data-faqq=""
                      style={{
                        display: "block",
                        fontSize: "clamp(20px, 1.7vw, 26px)",
                        lineHeight: 1.25,
                        letterSpacing: "-0.02em",
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {question}
                    </span>
                    <span
                      style={{
                        display: "grid",
                        width: 0,
                        minWidth: "100%",
                        transition: "grid-template-rows 0.45s cubic-bezier(0.22,1,0.36,1)",
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                      }}
                    >
                      <span style={{ overflow: "hidden", display: "block" }}>
                        <span
                          style={{
                            display: "block",
                            paddingTop: 18,
                            fontSize: 18,
                            lineHeight: 1.55,
                            fontWeight: 600,
                            color: "#6E6459",
                            textWrap: "pretty",
                            whiteSpace: "normal",
                          }}
                        >
                          {answer}
                        </span>
                      </span>
                    </span>
                  </span>
                </button>

                <button
                  aria-label="Toggle answer"
                  tabIndex={-1}
                  style={{
                    width: 72,
                    height: 72,
                    border: "none",
                    borderRadius: 26,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "background 0.3s, color 0.3s",
                    background: isOpen ? "#2A211B" : "#F0EADE",
                    color: isOpen ? "#FBF8F2" : "#2A211B",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    style={{
                      transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
