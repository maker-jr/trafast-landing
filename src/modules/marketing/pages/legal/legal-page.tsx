import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../landing/landing.css";

/**
 * Shared shell for Terms and Privacy: sticky nav, hero, a sticky table of
 * contents on wide screens, numbered sections, and a dark contact block.
 */

export type LegalSection = {
  id: string;
  title: string;
  paras: string[];
  items?: string[];
  /** Terms only: the two limit tiles sit inside one section. */
  limits?: { label: string; value: string; accent?: boolean }[];
};

type Props = {
  kind: "Terms" | "Privacy";
  effective: string;
  headline: React.ReactNode;
  intro: string;
  /** Optional row of reassurances between the hero and the body. */
  highlights?: { title: string; body: string }[];
  sections: LegalSection[];
  contact: { heading: string; body: string; secondaryLabel: string; secondaryTo: string };
};

const HELP_EMAIL = "hello@trafast.co";

export default function LegalPage({
  kind,
  effective,
  headline,
  intro,
  highlights,
  sections,
  contact,
}: Props) {
  useEffect(() => {
    document.title = `Trafast | ${kind}`;
  }, [kind]);

  return (
    <div
      className="tf-landing tf-legal-page"
      style={{ minHeight: "100vh", background: "#FBF8F2", color: "#2A211B" }}
    >
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          padding: "20px 40px",
          background: "rgba(251,248,242,0.86)",
          backdropFilter: "saturate(1.4) blur(14px)",
          WebkitBackdropFilter: "saturate(1.4) blur(14px)",
          borderBottom: "1px solid #EFE8DB",
        }}
      >
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            fontSize: 21,
            fontWeight: 900,
            letterSpacing: "-0.6px",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2A211B"
            strokeWidth="2.4"
            strokeLinecap="butt"
            strokeLinejoin="miter"
          >
            <path d="M19 12H5" />
            <path d="M12 5l-7 7 7 7" />
          </svg>
          Trafast
        </Link>
        <span
          style={{
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: "1.4px",
            textTransform: "uppercase",
            color: "#8C8177",
          }}
        >
          {kind}
        </span>
      </nav>

      <div
        data-m="hero"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "92px 40px 68px" }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 11,
            height: 42,
            padding: "0 20px",
            borderRadius: 999,
            background: "#F0EADE",
            fontSize: 14.5,
            fontWeight: 800,
            letterSpacing: "1.2px",
            textTransform: "uppercase",
            color: "#6E6459",
          }}
        >
          <span
            style={{ width: 8, height: 8, borderRadius: 999, background: "#1F6B4A", display: "block" }}
          />
          In effect {effective}
        </div>
        <h1
          style={{
            margin: "30px 0 0",
            fontSize: "clamp(46px, 7.4vw, 108px)",
            lineHeight: 0.88,
            letterSpacing: "-0.05em",
            fontWeight: 900,
            textWrap: "balance",
          }}
        >
          {headline}
        </h1>
        <p
          style={{
            margin: "28px 0 0",
            maxWidth: 620,
            fontSize: "clamp(19px, 1.7vw, 25px)",
            lineHeight: 1.42,
            fontWeight: 600,
            color: "#6E6459",
            textWrap: "pretty",
          }}
        >
          {intro}
        </p>
      </div>

      {highlights && (
        <div
          style={{
            borderTop: "1px solid #EFE8DB",
            borderBottom: "1px solid #EFE8DB",
            background: "#F6F1E7",
          }}
        >
          <div
            data-m="pad"
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "44px 40px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
              gap: 32,
            }}
          >
            {highlights.map((h) => (
              <div key={h.title}>
                <div style={{ fontSize: 21, fontWeight: 900, letterSpacing: "-0.5px" }}>
                  {h.title}
                </div>
                <div
                  style={{
                    marginTop: 8,
                    fontSize: 17,
                    lineHeight: 1.45,
                    fontWeight: 600,
                    color: "#6E6459",
                  }}
                >
                  {h.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div
        data-m="grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "250px minmax(0, 1fr)",
          gap: 64,
          alignItems: "start",
        }}
      >
        <div
          data-m="toc"
          style={{
            position: "sticky",
            top: 108,
            padding: "68px 0 0",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <span
            style={{
              fontSize: 13.5,
              fontWeight: 800,
              letterSpacing: "1.6px",
              textTransform: "uppercase",
              color: "#A79E93",
              padding: "0 0 12px",
            }}
          >
            Contents
          </span>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="tf-toclink"
              style={{
                fontSize: 16.5,
                fontWeight: 700,
                color: "#6E6459",
                padding: "9px 0",
                borderTop: "1px solid #EFE8DB",
                transition: "color 0.2s",
              }}
            >
              {s.title}
            </a>
          ))}
        </div>

        <div style={{ padding: "68px 0 40px", display: "flex", flexDirection: "column" }}>
          {sections.map((s, i) => (
            <section id={s.id} key={s.id} style={{ padding: "0 0 52px", scrollMarginTop: 108 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 18 }}>
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    letterSpacing: "1.2px",
                    color: "#C6BEB0",
                    fontVariantNumeric: "tabular-nums",
                    flex: "none",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2
                  style={{
                    margin: 0,
                    fontSize: "clamp(30px, 3.4vw, 46px)",
                    lineHeight: 0.98,
                    letterSpacing: "-0.04em",
                    fontWeight: 900,
                    textWrap: "balance",
                  }}
                >
                  {s.title}
                </h2>
              </div>
              <div style={{ paddingLeft: 33 }}>
                {s.paras.map((text) => (
                  <p
                    key={text}
                    style={{
                      margin: "18px 0 0",
                      fontSize: 19,
                      lineHeight: 1.55,
                      fontWeight: 500,
                      color: "#4A4038",
                      maxWidth: 720,
                      textWrap: "pretty",
                    }}
                  >
                    {text}
                  </p>
                ))}

                {s.items && s.items.length > 0 && (
                  <div
                    style={{
                      marginTop: 22,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      maxWidth: 720,
                    }}
                  >
                    {s.items.map((text) => (
                      <div
                        key={text}
                        style={{
                          display: "flex",
                          gap: 16,
                          padding: "16px 0",
                          borderTop: "1px solid #EFE8DB",
                        }}
                      >
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            marginTop: 9,
                            flex: "none",
                            borderRadius: 999,
                            background: "#C0663C",
                            display: "block",
                          }}
                        />
                        <span
                          style={{
                            fontSize: 18,
                            lineHeight: 1.5,
                            fontWeight: 600,
                            color: "#4A4038",
                          }}
                        >
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {s.limits && (
                  <div
                    style={{
                      marginTop: 24,
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))",
                      gap: 14,
                      maxWidth: 720,
                    }}
                  >
                    {s.limits.map((l) => (
                      <div
                        key={l.label}
                        style={{
                          boxSizing: "border-box",
                          borderRadius: 28,
                          background: "#FFFFFF",
                          border: "1.5px solid #EFE8DB",
                          padding: "26px 28px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 13.5,
                            fontWeight: 800,
                            letterSpacing: "1.3px",
                            textTransform: "uppercase",
                            color: l.accent ? "#8A5233" : "#6E6459",
                          }}
                        >
                          {l.label}
                        </div>
                        <div
                          style={{
                            marginTop: 12,
                            fontSize: 40,
                            fontWeight: 900,
                            letterSpacing: "-1.6px",
                            fontVariantNumeric: "tabular-nums",
                          }}
                        >
                          {l.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}

          <div
            style={{
              borderRadius: 40,
              background: "#2A211B",
              color: "#FBF8F2",
              padding: "48px 48px 44px",
              maxWidth: 760,
            }}
          >
            <div
              style={{
                fontSize: "clamp(30px, 3.2vw, 44px)",
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                fontWeight: 900,
              }}
            >
              {contact.heading}
            </div>
            <div
              style={{
                marginTop: 16,
                fontSize: 19,
                lineHeight: 1.5,
                fontWeight: 600,
                color: "rgba(251,248,242,0.7)",
                maxWidth: 520,
              }}
            >
              {contact.body}
            </div>
            <div
              style={{
                marginTop: 32,
                display: "flex",
                alignItems: "center",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <a
                href={`mailto:${HELP_EMAIL}`}
                className="tf-cta-amber"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  height: 66,
                  padding: "0 30px",
                  borderRadius: 999,
                  background: "#F5B32C",
                  color: "#2A211B",
                  fontSize: 18,
                  fontWeight: 800,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2A211B"
                  strokeWidth="2.2"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                >
                  <path d="M4 6h16v12H4z" />
                  <path d="M4 7l8 6 8-6" />
                </svg>
                {HELP_EMAIL}
              </a>
              <Link
                to={contact.secondaryTo}
                className="tf-textlink"
                style={{ fontSize: 18, fontWeight: 700, color: "#FBF8F2" }}
              >
                {contact.secondaryLabel}
              </Link>
            </div>
          </div>

          <div
            style={{
              marginTop: 40,
              paddingTop: 26,
              borderTop: "1px solid #EFE8DB",
              fontSize: 16,
              fontWeight: 600,
              color: "#8C8177",
            }}
          >
            Trafast Technologies Ltd · Abuja, Nigeria. Funds held at a licensed
            partner bank.
          </div>
        </div>
      </div>
    </div>
  );
}
