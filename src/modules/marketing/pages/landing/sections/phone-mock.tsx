import type { CSSProperties } from "react";

export type PhoneVals = {
  home: boolean;
  nearby: boolean;
  success: boolean;
  offline: boolean;
  sig1: string;
  sig2: string;
  syncing: boolean;
  synced: boolean;
  balance: string;
  readyBg: string;
  readyMuted: string;
  readyTitle: string;
  readySub: string;
  bars: [string, string, string, string];
  link: boolean;
  confirm: boolean;
  nearTitle: string;
  nearSub: string;
  nearFoot: string;
  holdWidth: string;
  holdColor: string;
  holdLabel: string;
};

function StatusBar({ color, sig1, sig2 }: { color: string; sig1: string; sig2: string }) {
  const bar = (height: number, background: string): CSSProperties => ({
    width: 3,
    height,
    borderRadius: 1,
    display: "block",
    background,
  });
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 34px",
        zIndex: 20,
        color,
      }}
    >
      <span
        style={{ width: 84, fontSize: 16, fontWeight: 700, textAlign: "center", paddingTop: 6 }}
      >
        9:41
      </span>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
          width: 84,
          justifyContent: "flex-end",
          paddingTop: 6,
        }}
      >
        <span style={{ display: "inline-flex", alignItems: "flex-end", gap: 2, height: 12 }}>
          <span style={bar(4, sig1)} />
          <span style={bar(6.5, sig2)} />
          <span style={bar(9, sig2)} />
          <span style={bar(12, sig2)} />
        </span>
        <span
          style={{
            width: 23,
            height: 12,
            border: "1.4px solid currentColor",
            opacity: 0.9,
            borderRadius: 4,
            padding: 1.5,
            display: "block",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              display: "block",
              width: "62%",
              height: "100%",
              background: "currentColor",
              borderRadius: 2,
            }}
          />
        </span>
      </span>
    </div>
  );
}

function ActivityRow({
  initials,
  avatar,
  name,
  meta,
  amount,
  amountColor,
}: {
  initials: string;
  avatar: string;
  name: string;
  meta: string;
  amount: string;
  amountColor: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 13,
        padding: "12px 10px",
        borderRadius: 18,
      }}
    >
      <span
        style={{
          width: 42,
          height: 42,
          borderRadius: 21,
          color: "#FBF8F2",
          fontSize: 14,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "none",
          background: avatar,
        }}
      >
        {initials}
      </span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: "block", fontSize: 15, fontWeight: 700 }}>{name}</span>
        <span
          style={{
            display: "block",
            fontSize: 13,
            fontWeight: 600,
            color: "#8C8177",
            marginTop: 2,
          }}
        >
          {meta}
        </span>
      </span>
      <span
        style={{
          fontSize: 15,
          fontWeight: 700,
          fontVariantNumeric: "tabular-nums",
          color: amountColor,
        }}
      >
        {amount}
      </span>
    </div>
  );
}

/** The 380x824 screen that sits inside the sticky device frame. */
export default function PhoneMock({ v }: { v: PhoneVals }) {
  return (
    <div
      style={{
        position: "relative",
        width: 380,
        height: 824,
        overflow: "hidden",
        borderRadius: 50,
        background: "#FBF8F2",
        color: "#2A211B",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 12,
          left: "50%",
          transform: "translateX(-50%)",
          width: 112,
          height: 32,
          borderRadius: 18,
          background: "#0A0A0A",
          zIndex: 30,
        }}
      />

      {v.home && (
        <div style={{ position: "absolute", inset: 0 }}>
          <StatusBar color="#2A211B" sig1={v.sig1} sig2={v.sig2} />

          {v.offline && (
            <div
              style={{
                position: "absolute",
                top: 56,
                left: 0,
                right: 0,
                zIndex: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                height: 28,
                background: "#EDF4EF",
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
                  display: "inline-block",
                }}
              />
              Offline mode
            </div>
          )}

          <div style={{ position: "absolute", inset: 0, padding: "92px 0 0" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 22px",
              }}
            >
              <div style={{ fontSize: 14, fontWeight: 700, color: "#8C8177" }}>Good day, Amara</div>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 19,
                  background: "#2A211B",
                  color: "#FBF8F2",
                  fontSize: 15,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                A
              </div>
            </div>

            <div style={{ padding: "24px 22px 0" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 2,
                  letterSpacing: "-2.4px",
                  lineHeight: 1,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                <span
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#8C8177",
                    letterSpacing: "-1px",
                    paddingBottom: 6,
                  }}
                >
                  ₦
                </span>
                <span style={{ fontSize: 50, fontWeight: 900 }}>{v.balance}</span>
                <span
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#8C8177",
                    letterSpacing: "-0.5px",
                    paddingBottom: 5,
                  }}
                >
                  .15
                </span>
              </div>
              {v.syncing && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 14,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#8C8177",
                  }}
                >
                  <span
                    style={{
                      width: 13,
                      height: 13,
                      borderRadius: 7,
                      border: "2px solid #E2D9C9",
                      borderTopColor: "#8C8177",
                      display: "block",
                      animation: "tf-spin 0.8s linear infinite",
                    }}
                  />
                  Syncing activity
                </div>
              )}
              {v.synced && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 14,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#57705F",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1F6B4A"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 13 4.5 4.5L19 7" />
                  </svg>
                  Up to date
                </div>
              )}
            </div>

            <div style={{ padding: "26px 22px 0" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 18px 14px 22px",
                  borderRadius: 999,
                  transition: "background 0.5s",
                  background: v.readyBg,
                }}
              >
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ display: "block", fontSize: 14.5, fontWeight: 700 }}>
                    {v.readyTitle}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontSize: 12.5,
                      fontWeight: 600,
                      marginTop: 3,
                      transition: "color 0.5s",
                      color: v.readyMuted,
                    }}
                  >
                    {v.readySub}
                  </span>
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 3,
                    flex: "none",
                    height: 26,
                  }}
                >
                  {[12, 17, 21, 26].map((h, i) => (
                    <span
                      key={h}
                      style={{
                        width: 6,
                        height: h,
                        borderRadius: 3,
                        display: "block",
                        transition: `background 0.4s ${i * 0.1}s`,
                        background: v.bars[i],
                      }}
                    />
                  ))}
                </span>
              </div>
            </div>

            <div
              style={{
                padding: "26px 22px 6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.4px" }}>
                Activity
              </span>
              <span
                style={{
                  fontSize: 13.5,
                  fontWeight: 700,
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                }}
              >
                All
              </span>
            </div>

            <div style={{ padding: "0 12px" }}>
              {v.synced && (
                <div style={{ animation: "tf-fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) both" }}>
                  <ActivityRow
                    initials="AO"
                    avatar="#8C6A3F"
                    name="Ada Obi"
                    meta="Today, 9:41 · Offline"
                    amount="−₦5,000"
                    amountColor="#2A211B"
                  />
                </div>
              )}
              <ActivityRow
                initials="NB"
                avatar="#1F6B4A"
                name="Ngozi Bala"
                meta="2h ago"
                amount="+₦4,000"
                amountColor="#1F6B4A"
              />
              <ActivityRow
                initials="MB"
                avatar="#4A5B52"
                name="Musa Bello"
                meta="Today, 11:05 am"
                amount="−₦6,400"
                amountColor="#2A211B"
              />
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "18px 18px 26px",
              background: "linear-gradient(rgba(251,248,242,0), #FBF8F2 40%)",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                flex: 1,
                height: 56,
                borderRadius: 999,
                background: "#FFFFFF",
                border: "1px solid #E4DCCC",
                boxShadow: "0 6px 20px rgba(42,33,27,0.08)",
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "0 18px",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2A211B"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.6-3.6" />
              </svg>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#6E6459" }}>Pay anyone</span>
            </div>
            <div
              style={{
                width: 56,
                height: 56,
                flex: "none",
                borderRadius: 28,
                background: "#F5B32C",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 22px rgba(245,179,44,0.34)",
              }}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2A211B"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <rect x="3.5" y="3.5" width="7" height="7" rx="1.6" />
                <rect x="13.5" y="3.5" width="7" height="7" rx="1.6" />
                <rect x="3.5" y="13.5" width="7" height="7" rx="1.6" />
                <path d="M14 14h2m4 0h-1m-5 4h1m4 0h1m-3 3h-2" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {v.nearby && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#2A211B",
            color: "#FBF8F2",
            animation: "tf-fadeUp 0.4s cubic-bezier(0.22,1,0.36,1) both",
          }}
        >
          <StatusBar color="#FBF8F2" sig1={v.sig1} sig2={v.sig2} />
          <div
            style={{
              position: "absolute",
              inset: "56px 0 0",
              display: "flex",
              flexDirection: "column",
              padding: "14px 22px 30px",
            }}
          >
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "center",
                padding: "28px 0 24px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div
                  style={{
                    position: "relative",
                    width: 90,
                    height: 90,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {v.link &&
                    [0, 0.6, 1.2].map((delay) => (
                      <span
                        key={delay}
                        style={{
                          position: "absolute",
                          inset: -24,
                          borderRadius: 999,
                          border: "2px solid rgba(251,248,242,0.22)",
                          animation: `tf-halo 1.8s ${delay}s ease-out infinite`,
                          display: "block",
                        }}
                      />
                    ))}
                  <span
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 45,
                      background: "#8C6A3F",
                      color: "#FBF8F2",
                      fontSize: 29,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    AO
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 23,
                    fontWeight: 700,
                    letterSpacing: "-0.6px",
                    marginTop: 22,
                  }}
                >
                  {v.nearTitle}
                </div>
                <div
                  style={{
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: "#B4A895",
                    marginTop: 6,
                    maxWidth: 250,
                    lineHeight: 1.5,
                    textWrap: "pretty",
                  }}
                >
                  {v.nearSub}
                </div>
                {v.confirm && (
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      marginTop: 14,
                      padding: "7px 12px",
                      borderRadius: 999,
                      background: "rgba(251,248,242,0.1)",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#C6DCCE",
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
                    Nearby
                  </span>
                )}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 12.5,
                    fontWeight: 700,
                    letterSpacing: "0.3px",
                    textTransform: "uppercase",
                    color: "#B4A895",
                  }}
                >
                  Paying
                </div>
                <div
                  style={{
                    fontSize: 60,
                    fontWeight: 900,
                    letterSpacing: "-3px",
                    marginTop: 6,
                    fontVariantNumeric: "tabular-nums",
                    lineHeight: 1,
                  }}
                >
                  ₦5,000
                </div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#B4A895" }}>{v.nearFoot}</div>
            </div>

            {v.link && (
              <div
                style={{
                  flex: "none",
                  height: 58,
                  borderRadius: 999,
                  background: "rgba(251,248,242,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 15.5,
                  fontWeight: 700,
                }}
              >
                Cancel
              </div>
            )}
            {v.confirm && (
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  flex: "none",
                  height: 58,
                  borderRadius: 999,
                  background: "rgba(251,248,242,0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    background: "#1F6B4A",
                    transition: "width 0.85s linear",
                    width: v.holdWidth,
                  }}
                />
                <span
                  style={{
                    position: "relative",
                    fontSize: 16,
                    fontWeight: 700,
                    letterSpacing: "-0.2px",
                    transition: "color 0.3s",
                    color: v.holdColor,
                  }}
                >
                  {v.holdLabel}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {v.success && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#1F6B4A",
            color: "#FBF8F2",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 24px",
            animation: "tf-fadeUp 0.4s cubic-bezier(0.22,1,0.36,1) both",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                position: "relative",
                width: 120,
                height: 120,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 999,
                  background: "rgba(251,248,242,0.1)",
                  animation: "tf-pop 0.5s cubic-bezier(0.22,1,0.36,1) both",
                  display: "block",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  inset: 19,
                  borderRadius: 999,
                  background: "rgba(251,248,242,0.14)",
                  animation: "tf-pop 0.5s 0.05s cubic-bezier(0.22,1,0.36,1) both",
                  display: "block",
                }}
              />
              <span
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: 999,
                  background: "#FBF8F2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "tf-pop 0.42s 0.12s cubic-bezier(0.22,1,0.36,1) both",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1F6B4A"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m5 13 4.5 4.5L19 7" />
                </svg>
              </span>
            </div>
            <div
              style={{
                fontSize: 14.5,
                fontWeight: 700,
                color: "rgba(251,248,242,0.72)",
                marginTop: 28,
              }}
            >
              Sent
            </div>
            <div
              style={{
                fontSize: 46,
                fontWeight: 900,
                letterSpacing: "-2px",
                marginTop: 4,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              ₦5,000
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginTop: 28,
                padding: "11px 18px 11px 11px",
                borderRadius: 999,
                background: "rgba(251,248,242,0.12)",
              }}
            >
              <span
                style={{
                  width: 36,
                  height: 36,
                  flex: "none",
                  borderRadius: 999,
                  background: "rgba(251,248,242,0.9)",
                  color: "#1F6B4A",
                  fontSize: 14,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                AO
              </span>
              <span>
                <span style={{ display: "block", fontSize: 14, fontWeight: 700 }}>Ada Obi</span>
                <span
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "rgba(251,248,242,0.66)",
                    marginTop: 1,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  8106 4420 31
                </span>
              </span>
            </div>
            <div
              style={{
                fontSize: 13.5,
                fontWeight: 600,
                color: "rgba(251,248,242,0.66)",
                marginTop: 24,
              }}
            >
              Today, 9:41 · Instant · Final
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              paddingBottom: 36,
            }}
          >
            <div
              style={{
                height: 52,
                borderRadius: 999,
                background: "rgba(251,248,242,0.14)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 15,
                fontWeight: 700,
              }}
            >
              Share receipt
            </div>
            <div
              style={{
                height: 58,
                borderRadius: 999,
                background: "#FBF8F2",
                color: "#1F6B4A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              Done
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
