import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo-primary.png";
import { useWaitlist } from "../waitlist";
import { useT } from "../i18n/use-language";

const footLink = { fontSize: 19, fontWeight: 600, color: "#FBF8F2" } as const;
const colHead = { fontSize: 17, fontWeight: 700, color: "rgba(251,248,242,0.5)" } as const;

type Props = {
  live: boolean;
  goPersonal: (e: MouseEvent) => void;
  goBusiness: (e: MouseEvent) => void;
  goHow: (e: MouseEvent) => void;
  goSecurity: (e: MouseEvent) => void;
  goFaq: (e: MouseEvent) => void;
};

export default function SiteFooter({
  live,
  goPersonal,
  goBusiness,
  goHow,
  goSecurity,
  goFaq,
}: Props) {
  const t = useT();
  const { email, onEmailChange, status, error, onSubmit, honeypotRef } = useWaitlist();

  return (
    <section
      data-m="close"
      style={{
        background: "#FBF8F2",
        color: "#2A211B",
        padding: "120px 40px 40px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: 1720, width: "100%", margin: "0 auto" }}>
        <div
          data-reveal=""
          data-m="foot"
          style={{
            borderRadius: 48,
            background: "#2A211B",
            color: "#FBF8F2",
            padding: 64,
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.6fr)",
            gap: 64,
            opacity: 0,
            transform: "translateY(40px)",
            transition:
              "opacity 0.9s 0s cubic-bezier(0.22,1,0.36,1), transform 0.9s 0s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 48,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <img src={logo} alt="Trafast" style={{ width: 80, height: 80, display: "block" }} />
              <div
                style={{
                  fontSize: "clamp(48px, 4.6vw, 80px)",
                  lineHeight: 0.96,
                  letterSpacing: "-0.045em",
                  fontWeight: 900,
                  textWrap: "balance",
                }}
              >
                {t.close.pay}
                <br />
                <span style={{ color: "rgba(251,248,242,0.45)" }}>{t.close.any}</span>
              </div>
            </div>
            <div
              style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                alignItems: "center",
                gap: 10,
                padding: "14px 20px",
                borderRadius: 999,
                background: "rgba(251,248,242,0.08)",
                fontSize: 16,
                fontWeight: 700,
                color: "rgba(251,248,242,0.8)",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  display: "block",
                  background: live ? "#1F6B4A" : "#F5B32C",
                }}
              />
              {live ? t.close.live : t.close.soon}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 72 }}>
            {live ? (
              <div
                id="signup"
                data-m="panel"
                style={{
                  borderRadius: 32,
                  background: "rgba(251,248,242,0.08)",
                  padding: "44px 48px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 32,
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(40px, 4.4vw, 72px)",
                    lineHeight: 0.96,
                    letterSpacing: "-0.045em",
                    fontWeight: 900,
                  }}
                >
                  {t.close.get}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 24,
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      fontSize: 20,
                      lineHeight: 1.4,
                      fontWeight: 600,
                      color: "rgba(251,248,242,0.7)",
                      maxWidth: 480,
                      textWrap: "balance",
                    }}
                  >
                    {t.close.getSub}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                    <a
                      href="#"
                      className="tf-cta-cream"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 14,
                        height: 72,
                        padding: "0 28px 0 22px",
                        borderRadius: 999,
                        background: "#FBF8F2",
                        color: "#2A211B",
                      }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="#2A211B">
                        <path d="M16.6 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.9-.9-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.5.8 1.1 1.7 2.4 3 2.4 1.2 0 1.6-.8 3.1-.8s1.8.8 3.1.8c1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.7-1-2.7-4.1zM14.3 5.7c.6-.8 1.1-1.9 1-3-.9 0-2.1.6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1 .1 2.1-.5 2.7-1.3z" />
                      </svg>
                      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
                        <span style={{ fontSize: 12.5, fontWeight: 700, color: "#8C8177" }}>
                          Download on the
                        </span>
                        <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.3px" }}>
                          App Store
                        </span>
                      </span>
                    </a>
                    <a
                      href="#"
                      className="tf-cta-cream"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 14,
                        height: 72,
                        padding: "0 28px 0 22px",
                        borderRadius: 999,
                        background: "#FBF8F2",
                        color: "#2A211B",
                      }}
                    >
                      <svg width="26" height="28" viewBox="0 0 22 24" fill="none">
                        <path
                          d="M1.5 1.4v21.2c0 .8.9 1.3 1.6.9l10-5.3L1.5 1.4Z"
                          fill="#2A211B"
                        />
                        <path
                          d="M13.1 18.2 17 16.1c.9-.5.9-1.7 0-2.2l-3.9-2.1L9 12l4.1 6.2Z"
                          fill="#2A211B"
                          opacity="0.75"
                        />
                        <path
                          d="M1.5 1.4 13.1 11.8l3.9-2.1L3.1.5c-.7-.4-1.6.1-1.6.9Z"
                          fill="#2A211B"
                          opacity="0.55"
                        />
                      </svg>
                      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
                        <span style={{ fontSize: 12.5, fontWeight: 700, color: "#8C8177" }}>
                          Get it on
                        </span>
                        <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.3px" }}>
                          Google Play
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <form
                id="signup"
                data-signup=""
                onSubmit={onSubmit}
                data-m="panel"
                style={{
                  borderRadius: 32,
                  background: "rgba(251,248,242,0.08)",
                  padding: "44px 48px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 32,
                  margin: 0,
                }}
              >
                {status === "done" ? (
                  <div role="status" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                    <div
                      style={{
                        fontSize: "clamp(40px, 4.4vw, 72px)",
                        lineHeight: 0.96,
                        letterSpacing: "-0.045em",
                        fontWeight: 900,
                        color: "#F5B32C",
                      }}
                    >
                      {t.close.onList}
                    </div>
                    <div
                      style={{
                        fontSize: 20,
                        lineHeight: 1.4,
                        fontWeight: 600,
                        color: "rgba(251,248,242,0.7)",
                        maxWidth: 560,
                      }}
                    >
                      {t.close.willEmail.replace("{email}", email)}
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Honeypot: hidden from people, irresistible to form bots. */}
                    <input
                      ref={honeypotRef}
                      type="text"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        width: 1,
                        height: 1,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0 0 0 0)",
                        whiteSpace: "nowrap",
                        border: 0,
                      }}
                    />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => onEmailChange(e.target.value)}
                      placeholder={t.close.email}
                      aria-label="Email address"
                      aria-invalid={status === "error"}
                      aria-describedby={status === "error" ? "waitlist-error" : undefined}
                      style={{
                        width: "100%",
                        border: "none",
                        outline: "none",
                        background: "transparent",
                        color: "#FBF8F2",
                        fontFamily: "inherit",
                        fontSize: "clamp(40px, 4.4vw, 72px)",
                        lineHeight: 0.96,
                        letterSpacing: "-0.045em",
                        fontWeight: 900,
                        padding: 0,
                        margin: 0,
                        boxSizing: "border-box",
                        caretColor: "#F5B32C",
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 24,
                        flexWrap: "wrap",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 20,
                          lineHeight: 1.4,
                          fontWeight: 600,
                          color: "rgba(251,248,242,0.7)",
                          maxWidth: 560,
                          textWrap: "balance",
                        }}
                      >
                        {t.close.soonSub}
                      </div>
                      <button
                        type="submit"
                        className="tf-cta-cream"
                        disabled={status === "pending"}
                        style={{
                          height: 68,
                          padding: "0 34px",
                          border: "none",
                          borderRadius: 999,
                          background: "#FBF8F2",
                          color: "#2A211B",
                          fontFamily: "inherit",
                          fontSize: 18,
                          fontWeight: 700,
                          cursor: status === "pending" ? "progress" : "pointer",
                          opacity: status === "pending" ? 0.65 : 1,
                          transition: "opacity 0.25s",
                          flex: "none",
                        }}
                      >
                        {status === "pending" ? "Joining…" : t.close.early}
                      </button>
                    </div>
                    {status === "error" && (
                      <div
                        id="waitlist-error"
                        role="alert"
                        style={{
                          marginTop: -18,
                          fontSize: 17,
                          fontWeight: 600,
                          /* #C8402F, lifted so it reads on the dark panel. */
                          color: "#E8836F",
                        }}
                      >
                        {error}
                      </div>
                    )}
                    <div
                      style={{
                        marginTop: -14,
                        fontSize: 15,
                        lineHeight: 1.45,
                        fontWeight: 600,
                        color: "rgba(251,248,242,0.45)",
                        maxWidth: 560,
                      }}
                    >
                      By joining you agree to receive launch updates from Trafast. No spam,
                      and you can unsubscribe from any email.
                    </div>
                  </>
                )}
              </form>
            )}

            <div
              data-m="cols"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "32px 24px",
                padding: "0 24px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <span style={colHead}>{t.close.product}</span>
                <a href="#top" onClick={goPersonal} className="tf-footlink" style={footLink}>
                  {t.nav.personal}
                </a>
                <a href="#business" onClick={goBusiness} className="tf-footlink" style={footLink}>
                  {t.nav.business}
                </a>
                <a href="#how-it-works" onClick={goHow} className="tf-footlink" style={footLink}>
                  {t.nav.how}
                </a>
                <a href="#security" onClick={goSecurity} className="tf-footlink" style={footLink}>
                  {t.nav.security}
                </a>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <span style={colHead}>{t.close.help}</span>
                <a href="#faq" onClick={goFaq} className="tf-footlink" style={footLink}>
                  FAQ
                </a>
                <a href="mailto:hello@trafast.co" className="tf-footlink" style={footLink}>
                  hello@trafast.co
                </a>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <span style={colHead}>{t.close.follow}</span>
                <a href="#" className="tf-footlink" style={footLink}>
                  X
                </a>
                <a href="#" className="tf-footlink" style={footLink}>
                  Instagram
                </a>
                <a href="#" className="tf-footlink" style={footLink}>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
            // Clears the fixed back-to-top button, which used to cover these links.
            padding: "28px 8px 112px",
            fontSize: 16,
            fontWeight: 600,
            color: "#8C8177",
          }}
        >
          <span>{t.close.copy}</span>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <Link to="/terms" className="tf-legal" style={{ color: "#8C8177" }}>
              {t.close.terms}
            </Link>
            <Link to="/privacy" className="tf-legal" style={{ color: "#8C8177" }}>
              {t.close.privacy}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
