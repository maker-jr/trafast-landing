import { useEffect, useRef } from "react";
import { useT } from "../i18n/use-language";
import { useWaitlist } from "../waitlist";

/**
 * A receipt printing out of a slot. Same signup as the footer form — the
 * shared provider means joining here also settles the form at the bottom of
 * the page.
 */

/**
 * The torn bottom edge: 57 points alternating between the top and bottom of a
 * 15px strip. The zero needs no unit but the hundred does, or the whole
 * polygon is invalid and the edge comes out flat.
 */
const TEETH = Array.from({ length: 57 }, (_, i) => {
  const x = ((i * 100) / 56).toFixed(2);
  return `${x}% ${i % 2 === 0 ? "0" : "100%"}`;
}).join(", ");

const dashedRule = {
  height: 2,
  background:
    "repeating-linear-gradient(to right, #E2D9C9 0 8px, transparent 8px 15px)",
} as const;

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function WaitlistSheet({ open, onClose }: Props) {
  const t = useT();
  const { email, onEmailChange, status, error, onSubmit, honeypotRef } = useWaitlist();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    // The page behind must not scroll while the receipt is up.
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus the field, but only once the sheet has finished printing.
    const focus = setTimeout(() => inputRef.current?.focus(), 500);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
      clearTimeout(focus);
    };
  }, [open, onClose]);

  if (!open) return null;

  const submitted = status === "done";

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t.close.first}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 90,
        background: "rgba(42,33,27,0.62)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0 24px 32px",
        overflowY: "auto",
        overscrollBehavior: "contain",
        animation: "tf-fadeUp 0.3s cubic-bezier(0.22,1,0.36,1) both",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 640,
          flex: "none",
          paddingTop: 44,
        }}
      >
        <form
          data-sheet=""
          onSubmit={onSubmit}
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            maxHeight: "calc(100dvh - 120px)",
            transformOrigin: "50% 0",
            animation:
              "tf-printOut 1.05s cubic-bezier(0.16,0.9,0.2,1) both, tf-sway 5.5s 1.1s ease-in-out infinite alternate",
            filter: "drop-shadow(0 34px 50px rgba(0,0,0,0.4))",
          }}
        >
          <div
            data-m="sheetscroll"
            style={{
              background: "#FBF8F2",
              color: "#2A211B",
              overflowY: "auto",
              overscrollBehavior: "contain",
            }}
          >
            <div data-m="sheetpad" style={{ padding: "34px 52px 40px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  fontSize: 13.5,
                  fontWeight: 800,
                  letterSpacing: "2.2px",
                  textTransform: "uppercase",
                  color: "#8C8177",
                }}
              >
                <span>Trafast · Abuja</span>
                <span style={{ color: "#8A5233" }}>{t.close.soon}</span>
              </div>
              <div style={{ ...dashedRule, margin: "18px 0 0" }} />

              {submitted ? (
                <div role="status">
                  <div
                    data-m="sheethead"
                    style={{
                      marginTop: 30,
                      fontSize: "clamp(40px, 5.2vw, 68px)",
                      lineHeight: 0.9,
                      letterSpacing: "-0.05em",
                      fontWeight: 900,
                      textWrap: "balance",
                    }}
                  >
                    {t.close.onList}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 18,
                      marginTop: 26,
                    }}
                  >
                    <span
                      style={{
                        width: 68,
                        height: 68,
                        flex: "none",
                        borderRadius: 999,
                        background: "#F5B32C",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#2A211B"
                        strokeWidth="2.6"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                      >
                        <path d="M4 12.5l5 5L20 6.5" />
                      </svg>
                    </span>
                    <span
                      style={{
                        fontSize: 21,
                        lineHeight: 1.4,
                        fontWeight: 600,
                        color: "#6E6459",
                      }}
                    >
                      {t.close.willEmail.replace("{email}", email)}
                    </span>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    data-m="sheethead"
                    style={{
                      marginTop: 30,
                      fontSize: "clamp(40px, 5.2vw, 68px)",
                      lineHeight: 0.9,
                      letterSpacing: "-0.05em",
                      fontWeight: 900,
                      textWrap: "balance",
                    }}
                  >
                    {t.close.first}
                  </div>
                  <div
                    data-m="sheetsub"
                    style={{
                      marginTop: 20,
                      fontSize: 21,
                      lineHeight: 1.4,
                      fontWeight: 600,
                      color: "#6E6459",
                      maxWidth: 460,
                      textWrap: "pretty",
                    }}
                  >
                    {t.close.waitSub}
                  </div>

                  {/* Hidden from people, irresistible to form bots. */}
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

                  <div
                    data-m="sheetfield"
                    style={{
                      marginTop: 32,
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      height: 84,
                      padding: "0 10px 0 28px",
                      background: "#FFFFFF",
                      border: "1.5px solid #EFE8DB",
                      borderRadius: 999,
                    }}
                  >
                    <input
                      ref={inputRef}
                      type="email"
                      required
                      value={email}
                      onChange={(e) => onEmailChange(e.target.value)}
                      placeholder={t.close.email}
                      aria-label="Email address"
                      aria-invalid={status === "error"}
                      aria-describedby={status === "error" ? "sheet-error" : undefined}
                      style={{
                        flex: 1,
                        minWidth: 0,
                        border: "none",
                        outline: "none",
                        background: "transparent",
                        color: "#2A211B",
                        fontFamily: "inherit",
                        fontSize: 22,
                        fontWeight: 600,
                      }}
                    />
                    <button
                      type="submit"
                      aria-label={t.close.early}
                      disabled={status === "pending"}
                      className="tf-sheetsend"
                      style={{
                        width: 64,
                        height: 64,
                        flex: "none",
                        border: "none",
                        borderRadius: 999,
                        background: "#2A211B",
                        color: "#FBF8F2",
                        cursor: status === "pending" ? "progress" : "pointer",
                        opacity: status === "pending" ? 0.6 : 1,
                        transition: "background 0.25s, opacity 0.25s",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {status === "pending" ? (
                        <span
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: 999,
                            border: "2.4px solid rgba(251,248,242,0.35)",
                            borderTopColor: "#FBF8F2",
                            display: "block",
                            animation: "tf-spin 0.8s linear infinite",
                          }}
                        />
                      ) : (
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                        >
                          <path d="M4 12h15" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {status === "error" && (
                    <div
                      id="sheet-error"
                      role="alert"
                      style={{
                        marginTop: 14,
                        fontSize: 17,
                        fontWeight: 600,
                        color: "#C8402F",
                      }}
                    >
                      {error}
                    </div>
                  )}
                </div>
              )}

              <div data-m="rule2" style={{ ...dashedRule, margin: "34px 0 0" }} />
              <div
                data-m="sheetfoot"
                style={{
                  marginTop: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 700, color: "#8C8177" }}>
                  {t.close.nospam}
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="tf-tearoff"
                  style={{
                    border: "none",
                    background: "none",
                    padding: 0,
                    fontFamily: "inherit",
                    fontSize: 16,
                    fontWeight: 800,
                    letterSpacing: "1.4px",
                    textTransform: "uppercase",
                    color: "#6E6459",
                    cursor: "pointer",
                    transition: "color 0.25s",
                  }}
                >
                  Tear off
                </button>
              </div>
            </div>
          </div>

          {/* The torn-off bottom edge of the receipt. */}
          <span
            style={{
              display: "block",
              height: 15,
              flex: "none",
              background: "#FBF8F2",
              clipPath: `polygon(${TEETH})`,
            }}
          />
        </form>

        {/* The printer slot the receipt emerges from. */}
        <div
          style={{
            position: "absolute",
            left: -18,
            right: -18,
            top: 0,
            height: 46,
            zIndex: 3,
            borderRadius: "4px 4px 20px 20px",
            background: "linear-gradient(#3A302A, #241D18)",
            boxShadow: "0 14px 30px rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: 9,
          }}
        >
          <span
            style={{
              display: "block",
              width: "66%",
              height: 5,
              borderRadius: 3,
              background: "#100D0B",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.8)",
            }}
          />
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="tf-sheetclose"
          style={{
            position: "absolute",
            right: -6,
            top: 4,
            zIndex: 4,
            width: 44,
            height: 44,
            border: "none",
            borderRadius: 999,
            background: "#F0EADE",
            color: "#2A211B",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 16px rgba(0,0,0,0.35)",
            transition: "background 0.25s",
          }}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="butt"
            strokeLinejoin="miter"
          >
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}
