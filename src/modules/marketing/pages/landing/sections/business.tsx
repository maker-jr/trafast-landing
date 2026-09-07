import type { CSSProperties } from "react";
import FanArt from "./fan-art";
import { useT } from "../i18n/use-language";
import { fanBody, fanCardStyle, fanHeading, fanWrap } from "./fan-card";

const TRANSFERS = [
  { avatar: "#8C6A3F", when: "Just now", amount: "+₦12,000" },
  { avatar: "#4A5B52", when: "3 min ago", amount: "+₦3,500" },
  { avatar: "#2A211B", when: "9 min ago", amount: "+₦8,200" },
];

const deadBar = (height: number, background: string): CSSProperties => ({
  width: 3.5,
  height,
  borderRadius: 1,
  background,
  display: "block",
});

export function BusinessIntro() {
  const t = useT();

  return (
    <section id="business" data-business="" style={{ background: "#2A211B", color: "#FBF8F2" }}>
      <div
        data-m="intro"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 30,
          padding: "140px 40px",
          boxSizing: "border-box",
        }}
      >
        <div
          data-zoom=""
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 26,
            transformOrigin: "50% 60%",
            willChange: "transform, opacity",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 20px",
              borderRadius: 999,
              background: "rgba(251,248,242,0.1)",
              fontSize: 16,
              fontWeight: 700,
              color: "#F5B32C",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                background: "#F5B32C",
                display: "inline-block",
              }}
            />
            {t.biz.eyebrow}
          </span>
          <div
            style={{
              fontSize: "clamp(64px, 10vw, 168px)",
              lineHeight: 0.92,
              letterSpacing: "-0.05em",
              fontWeight: 900,
              textWrap: "balance",
              maxWidth: 1200,
            }}
          >
            {t.biz.run}
          </div>
        </div>
        <div
          data-reveal=""
          style={{
            fontSize: "clamp(22px, 2.1vw, 32px)",
            lineHeight: 1.35,
            fontWeight: 600,
            color: "rgba(251,248,242,0.65)",
            maxWidth: 720,
            textWrap: "balance",
            opacity: 0,
            transform: "translateY(40px)",
            transition:
              "opacity 0.9s 0.2s cubic-bezier(0.22,1,0.36,1), transform 0.9s 0.2s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {t.biz.runSub}
        </div>
      </div>
    </section>
  );
}

type Props = {
  bizTotal: string;
  bizCount: string;
  bizOfflineCount: string;
  bizSyncLabel: string;
};

export default function Business({ bizTotal, bizCount, bizOfflineCount, bizSyncLabel }: Props) {
  const t = useT();

  return (
    <section style={{ background: "#2A211B", color: "#FBF8F2" }}>
      <div
        style={{
          maxWidth: 1560,
          width: "100%",
          margin: "0 auto",
          padding: "40px 40px 180px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 24,
          }}
        >
          <div
            data-reveal=""
            style={{
              fontSize: "clamp(56px, 7.6vw, 128px)",
              lineHeight: 0.94,
              letterSpacing: "-0.048em",
              fontWeight: 900,
              textWrap: "balance",
              maxWidth: 1100,
              opacity: 0,
              transform: "translateY(40px)",
              transition:
                "opacity 0.9s 0s cubic-bezier(0.22,1,0.36,1), transform 0.9s 0s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {t.biz.never}
          </div>
          <div
            data-reveal=""
            style={{
              fontSize: "clamp(19px, 1.7vw, 25px)",
              lineHeight: 1.45,
              fontWeight: 600,
              color: "rgba(251,248,242,0.65)",
              maxWidth: 640,
              textWrap: "balance",
              opacity: 0,
              transform: "translateY(40px)",
              transition:
                "opacity 0.9s 0.1s cubic-bezier(0.22,1,0.36,1), transform 0.9s 0.1s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {t.biz.neverSub}
          </div>
        </div>

        <div data-fanwrap="" data-m="fan" style={fanWrap}>
          {/* Transfers, as usual */}
          <div
            data-fan="0"
            style={fanCardStyle(0, "#F3EDE2", "#2A211B", "0 40px 90px rgba(0,0,0,0.35)", 14)}
          >
            <div style={{ ...fanHeading, marginBottom: 4 }}>{t.biz.h0}</div>
            <div style={fanBody}>{t.biz.b0}</div>
            <FanArt>
              <div
                style={{
                  position: "absolute",
                  left: 10,
                  right: 10,
                  top: 40,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  transform: "rotate(-3deg)",
                }}
              >
                {TRANSFERS.map((t) => (
                  <div
                    key={t.when}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "12px 14px",
                      borderRadius: 16,
                      background: "rgba(255,255,255,0.7)",
                    }}
                  >
                    <span
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 18,
                        color: "#FBF8F2",
                        fontSize: 12.5,
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flex: "none",
                        background: t.avatar,
                      }}
                    >
                      BT
                    </span>
                    <span style={{ flex: 1, minWidth: 0 }}>
                      <span style={{ display: "block", fontSize: 14, fontWeight: 700 }}>
                        Bank transfer
                      </span>
                      <span
                        style={{
                          display: "block",
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#8C8177",
                          marginTop: 1,
                        }}
                      >
                        {t.when}
                      </span>
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        fontVariantNumeric: "tabular-nums",
                        color: "#1F6B4A",
                      }}
                    >
                      {t.amount}
                    </span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 44,
                  padding: "10px 14px",
                  borderRadius: 999,
                  background: "#2A211B",
                  color: "#FBF8F2",
                  fontSize: 13,
                  fontWeight: 700,
                  transform: "rotate(4deg)",
                  boxShadow: "0 16px 36px rgba(42,33,27,0.2)",
                }}
              >
                Instant, as always
              </div>
            </FanArt>
          </div>

          {/* Network dies? Still paid. */}
          <div
            data-fan="1"
            style={fanCardStyle(1, "#1F1813", "#FBF8F2", "0 40px 90px rgba(0,0,0,0.35)", 14)}
          >
            <div style={{ ...fanHeading, marginBottom: 4 }}>{t.biz.h1}</div>
            <div style={fanBody}>{t.biz.b1}</div>
            <FanArt>
              <div
                style={{
                  position: "absolute",
                  left: 14,
                  top: 34,
                  width: 200,
                  padding: "16px 18px",
                  borderRadius: 22,
                  background: "rgba(251,248,242,0.1)",
                  border: "1px solid rgba(251,248,242,0.14)",
                  transform: "rotate(-6deg)",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  opacity: 0.85,
                }}
              >
                <span
                  style={{ display: "inline-flex", alignItems: "flex-end", gap: 2.5, height: 14 }}
                >
                  <span style={deadBar(5, "#C8402F")} />
                  <span style={deadBar(8, "rgba(251,248,242,0.25)")} />
                  <span style={deadBar(11, "rgba(251,248,242,0.25)")} />
                  <span style={deadBar(14, "rgba(251,248,242,0.25)")} />
                </span>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    textDecoration: "line-through",
                    textDecorationColor: "#C8402F",
                    opacity: 0.7,
                  }}
                >
                  Transfer pending…
                </span>
              </div>
              <div
                style={{
                  position: "absolute",
                  right: 6,
                  top: 110,
                  width: 230,
                  padding: "22px 24px",
                  borderRadius: 28,
                  background: "#1F6B4A",
                  color: "#FBF8F2",
                  transform: "rotate(3deg)",
                  boxShadow: "0 30px 70px rgba(0,0,0,0.4)",
                  animation: "tf-bizPop 7s cubic-bezier(0.22,1,0.36,1) infinite",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "rgba(251,248,242,0.75)",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FBF8F2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 13 4.5 4.5L19 7" />
                  </svg>
                  Received · Offline
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 2,
                    letterSpacing: "-2px",
                    lineHeight: 1,
                    fontVariantNumeric: "tabular-nums",
                    marginTop: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      paddingBottom: 5,
                      opacity: 0.75,
                      letterSpacing: "-0.5px",
                    }}
                  >
                    ₦
                  </span>
                  <span style={{ fontSize: 46, fontWeight: 900 }}>4,500</span>
                </div>
                <div
                  style={{
                    marginTop: 10,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "rgba(251,248,242,0.75)",
                  }}
                >
                  From Tunde A. · Just now
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  left: 20,
                  bottom: 30,
                  padding: "10px 14px",
                  borderRadius: 999,
                  background: "#F5B32C",
                  color: "#2A211B",
                  fontSize: 13,
                  fontWeight: 700,
                  transform: "rotate(-4deg)",
                  boxShadow: "0 16px 36px rgba(0,0,0,0.3)",
                }}
              >
                Sale done
              </div>
            </FanArt>
          </div>

          {/* One record. Your bank. */}
          <div
            data-fan="2"
            style={fanCardStyle(2, "#F5B32C", "#2A211B", "0 40px 90px rgba(0,0,0,0.35)", 14)}
          >
            <div style={{ ...fanHeading, marginBottom: 4 }}>{t.biz.h2}</div>
            <div style={fanBody}>{t.biz.b2}</div>
            <FanArt>
              <div
                style={{
                  position: "absolute",
                  left: 10,
                  right: 10,
                  top: 40,
                  padding: "22px 24px",
                  borderRadius: 28,
                  background: "#FBF8F2",
                  color: "#2A211B",
                  transform: "rotate(-3deg)",
                  boxShadow: "0 30px 70px rgba(42,33,27,0.25)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: "#8C8177" }}>
                    Today’s sales
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: "#1F6B4A",
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
                    {bizSyncLabel}
                  </span>
                </div>
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
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#8C8177",
                      paddingBottom: 5,
                      letterSpacing: "-0.5px",
                    }}
                  >
                    ₦
                  </span>
                  <span style={{ fontSize: 44, fontWeight: 900 }}>{bizTotal}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 12,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#8C8177",
                  }}
                >
                  <span>{bizCount} payments</span>
                  <span>{bizOfflineCount} while offline</span>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  right: 14,
                  bottom: 40,
                  padding: "10px 14px",
                  borderRadius: 999,
                  background: "#2A211B",
                  color: "#FBF8F2",
                  fontSize: 13,
                  fontWeight: 700,
                  transform: "rotate(4deg)",
                  boxShadow: "0 16px 36px rgba(0,0,0,0.3)",
                }}
              >
                Straight to your bank
              </div>
            </FanArt>
          </div>
        </div>

        <div
          data-reveal=""
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 18,
            flexWrap: "wrap",
            opacity: 0,
            transform: "translateY(40px)",
            transition:
              "opacity 0.9s 0.2s cubic-bezier(0.22,1,0.36,1), transform 0.9s 0.2s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <a
            href="mailto:hello@trafast.app?subject=Trafast%20for%20my%20counter"
            className="tf-cta-amber"
            style={{
              height: 64,
              padding: "0 34px",
              borderRadius: 999,
              background: "#F5B32C",
              color: "#2A211B",
              fontSize: 18,
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            {t.biz.add}
          </a>
          <a
            href="mailto:hello@trafast.app"
            className="tf-textlink"
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#FBF8F2",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            {t.biz.talk} <span style={{ display: "inline-block" }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
