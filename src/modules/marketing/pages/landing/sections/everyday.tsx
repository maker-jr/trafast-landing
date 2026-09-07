import type { CSSProperties } from "react";
import logo from "@/assets/images/logo-primary.png";
import { STORY_ADVANTAGES, type Advantage } from "../landing.data";
import FanArt from "./fan-art";
import { fanCardStyle, fanHeading, fanWrap } from "./fan-card";

const CARD_HEIGHT = "clamp(300px, 48vh, 640px)";
const CARD_PADDING = "40px 36px";

const TONES: Record<Advantage["tone"], CSSProperties> = {
  plain: {
    background: "#FFFFFF",
    border: "1px solid #EFE8DB",
    color: "#2A211B",
    boxShadow: "0 24px 60px rgba(42,33,27,0.12)",
  },
  green: {
    background: "#1F6B4A",
    color: "#FBF8F2",
    boxShadow: "0 24px 60px rgba(31,107,74,0.28)",
  },
  amber: {
    background: "#F5B32C",
    color: "#2A211B",
    boxShadow: "0 24px 60px rgba(42,33,27,0.14)",
  },
};

/**
 * A 480vh scroll story on a sticky stage: the three cards fan in, then the two
 * familiar bank-app cards slide away so the offline card can hold the stage
 * while the advantages fan out beside it. See `driveStory` in
 * use-landing-motion.ts for the choreography.
 */
export default function Everyday() {
  return (
    <section style={{ background: "#FBF8F2", color: "#2A211B" }}>
      <div data-story="" style={{ position: "relative", height: "480vh" }}>
        <div
          data-stage=""
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            minHeight: 640,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "clamp(20px, 3vh, 40px)",
            maxWidth: 1560,
            width: "100%",
            margin: "0 auto",
            padding: "0 40px",
            boxSizing: "border-box",
          }}
        >
          <div
            data-storyhead=""
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 20,
              willChange: "opacity, transform",
            }}
          >
            <div
              style={{
                fontSize: "clamp(40px, min(5.8vw, 9vh), 100px)",
                lineHeight: 0.94,
                letterSpacing: "-0.048em",
                fontWeight: 900,
                textWrap: "balance",
                maxWidth: 1100,
              }}
            >
              Your bank app. Only better.
            </div>
            <div
              style={{
                fontSize: "clamp(19px, 1.6vw, 24px)",
                lineHeight: 1.45,
                fontWeight: 600,
                color: "#6E6459",
                maxWidth: 560,
                textWrap: "balance",
              }}
            >
              Send, receive and pay bills like always. Then pay anyone in person,
              instantly, with no network at all.
            </div>
          </div>

          <div data-fanwrap="" data-m="fan" style={fanWrap}>
            {/* Send and receive */}
            <div
              data-fan="0"
              style={fanCardStyle(
                0,
                "#F3EDE2",
                "#2A211B",
                "0 40px 90px rgba(42,33,27,0.14)",
                24,
                CARD_HEIGHT,
                CARD_PADDING
              )}
            >
              <div style={fanHeading}>Send to any bank. Receive from anyone.</div>
              <FanArt>
                <div
                  style={{
                    position: "absolute",
                    left: 24,
                    top: 60,
                    width: 220,
                    padding: "18px 20px",
                    borderRadius: 22,
                    background: "#FFFFFF",
                    color: "#2A211B",
                    border: "1px solid #EFE8DB",
                    transform: "rotate(-7deg)",
                    boxShadow: "0 24px 60px rgba(42,33,27,0.14)",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <span
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: "#2A211B",
                      color: "#FBF8F2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FBF8F2"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                  <span>
                    <span style={{ display: "block", fontSize: 16, fontWeight: 700 }}>Send</span>
                    <span
                      style={{
                        display: "block",
                        fontSize: 12.5,
                        fontWeight: 600,
                        color: "#8C8177",
                        marginTop: 2,
                      }}
                    >
                      To anyone, any bank
                    </span>
                  </span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: 56,
                    top: 150,
                    width: 220,
                    padding: "18px 20px",
                    borderRadius: 22,
                    background: "#FFFFFF",
                    color: "#2A211B",
                    border: "1px solid #EFE8DB",
                    transform: "rotate(4deg)",
                    boxShadow: "0 24px 60px rgba(42,33,27,0.14)",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <span
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: "#1F6B4A",
                      color: "#FBF8F2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FBF8F2"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 12H5M11 6l-6 6 6 6" />
                    </svg>
                  </span>
                  <span>
                    <span style={{ display: "block", fontSize: 16, fontWeight: 700 }}>Receive</span>
                    <span
                      style={{
                        display: "block",
                        fontSize: 12.5,
                        fontWeight: 600,
                        color: "#8C8177",
                        marginTop: 2,
                      }}
                    >
                      Your code or your tag
                    </span>
                  </span>
                </div>
                <span
                  style={{
                    position: "absolute",
                    right: 6,
                    bottom: 26,
                    width: 92,
                    height: 92,
                    borderRadius: 999,
                    background: "#F5B32C",
                    color: "#2A211B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 40,
                    fontWeight: 900,
                    letterSpacing: "-2px",
                    boxShadow: "0 20px 44px rgba(42,33,27,0.2)",
                    transform: "rotate(-10deg)",
                  }}
                >
                  ₦
                </span>
              </FanArt>
            </div>

            {/* Bills, airtime, QR */}
            <div
              data-fan="1"
              style={fanCardStyle(
                1,
                "#F5B32C",
                "#2A211B",
                "0 40px 90px rgba(42,33,27,0.14)",
                24,
                CARD_HEIGHT,
                CARD_PADDING
              )}
            >
              <div style={fanHeading}>Bills, airtime, any QR. As usual.</div>
              <FanArt>
                <div
                  style={{
                    position: "absolute",
                    left: 20,
                    top: 70,
                    width: 260,
                    height: 160,
                    borderRadius: 22,
                    background: "#2A211B",
                    color: "#FBF8F2",
                    transform: "rotate(-8deg)",
                    boxShadow: "0 30px 70px rgba(42,33,27,0.3)",
                    padding: "20px 22px",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                  >
                    <img src={logo} alt="" style={{ width: 28, height: 28, display: "block" }} />
                    <span style={{ fontSize: 12, fontWeight: 700, opacity: 0.7 }}>Trafast</span>
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      fontVariantNumeric: "tabular-nums",
                      opacity: 0.85,
                    }}
                  >
                    •••• 4420
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    right: 8,
                    top: 34,
                    padding: "10px 14px",
                    borderRadius: 999,
                    background: "#FFFFFF",
                    color: "#2A211B",
                    fontSize: 13,
                    fontWeight: 700,
                    transform: "rotate(6deg)",
                    boxShadow: "0 16px 36px rgba(42,33,27,0.14)",
                  }}
                >
                  Airtime
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 60,
                    padding: "10px 14px",
                    borderRadius: 999,
                    background: "#FFFFFF",
                    color: "#2A211B",
                    fontSize: 13,
                    fontWeight: 700,
                    transform: "rotate(-5deg)",
                    boxShadow: "0 16px 36px rgba(42,33,27,0.14)",
                  }}
                >
                  Bills
                </div>
                <div
                  style={{
                    position: "absolute",
                    right: 30,
                    bottom: 30,
                    padding: "10px 14px",
                    borderRadius: 999,
                    background: "#1F6B4A",
                    color: "#FBF8F2",
                    fontSize: 13,
                    fontWeight: 700,
                    transform: "rotate(3deg)",
                    boxShadow: "0 16px 36px rgba(31,107,74,0.3)",
                  }}
                >
                  Any QR
                </div>
              </FanArt>
            </div>

            {/* The card that holds the stage */}
            <div
              data-fan="2"
              style={fanCardStyle(
                2,
                "#2A211B",
                "#FBF8F2",
                "0 40px 90px rgba(42,33,27,0.14)",
                24,
                CARD_HEIGHT,
                CARD_PADDING
              )}
            >
              <div style={fanHeading}>Pay in person. Instant. Final. No network needed.</div>
              <FanArt>
                <span
                  style={{
                    position: "absolute",
                    left: 20,
                    top: 40,
                    width: 260,
                    height: 260,
                    borderRadius: 999,
                    background: "rgba(251,248,242,0.08)",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 30,
                    top: 96,
                    width: 240,
                    padding: "22px 24px",
                    borderRadius: 28,
                    background: "rgba(251,248,242,0.16)",
                    backdropFilter: "blur(18px)",
                    WebkitBackdropFilter: "blur(18px)",
                    border: "1px solid rgba(251,248,242,0.25)",
                    transform: "rotate(-4deg)",
                    boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 700, opacity: 0.75 }}>My balance</div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      gap: 2,
                      letterSpacing: "-2px",
                      lineHeight: 1,
                      fontVariantNumeric: "tabular-nums",
                      marginTop: 8,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 20,
                        fontWeight: 700,
                        paddingBottom: 5,
                        letterSpacing: "-0.5px",
                        opacity: 0.75,
                      }}
                    >
                      ₦
                    </span>
                    <span style={{ fontSize: 40, fontWeight: 900, color: "#F5B32C" }}>4,964,544</span>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    right: 8,
                    bottom: 34,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 14px",
                    borderRadius: 999,
                    background: "#F5B32C",
                    color: "#2A211B",
                    fontSize: 13,
                    fontWeight: 700,
                    transform: "rotate(6deg)",
                    boxShadow: "0 16px 36px rgba(0,0,0,0.25)",
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: 4,
                      background: "#1F6B4A",
                      display: "block",
                    }}
                  />
                  Works offline
                </div>
              </FanArt>
            </div>
          </div>

          <div
            data-storyline=""
            style={{
              textAlign: "center",
              fontSize: "clamp(20px, 1.8vw, 28px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#6E6459",
              willChange: "opacity, transform",
            }}
          >
            Here’s what better looks like.
          </div>

          <div
            data-advwrap=""
            style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
          >
            {STORY_ADVANTAGES.map((a, i) => (
              <div
                key={a.text}
                data-adv={i}
                data-rot={a.rotate}
                data-maxw={a.maxWidth}
                {...(a.side === "left" ? { "data-left": "" } : {})}
                style={{
                  position: "absolute",
                  top: a.top,
                  [a.side]: "6%",
                  maxWidth: a.maxWidth,
                  padding: "18px 24px",
                  borderRadius:
                    a.side === "left" ? "24px 24px 24px 8px" : "24px 24px 8px 24px",
                  fontSize: 22,
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                  fontWeight: 700,
                  transform: `rotate(${a.rotate})`,
                  opacity: 0,
                  willChange: "transform, opacity",
                  ...TONES[a.tone],
                }}
              >
                {a.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
