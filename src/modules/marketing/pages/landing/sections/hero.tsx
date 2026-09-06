import type { CSSProperties, MouseEvent } from "react";
import type { AudienceCopy, Step } from "../landing.data";

/** The decorative QR block in the floating hero card. b = ink, l = light, a = amber. */
const QR_CELLS = [
  "b2", "l", "b", "l", "b2", "b", "l", "b", "l", "b", "a", "b", "l", "b",
  "b", "l", "b", "l", "b2", "l", "b", "l", "b", "b", "l", "b", "l", "b",
];

const QR_COLORS: Record<string, string> = {
  b: "#2A211B",
  l: "#EFE8DB",
  a: "#F5B32C",
};

const signalBar = (height: number, background: string): CSSProperties => ({
  width: 4,
  height,
  borderRadius: 1.5,
  background,
  display: "block",
});

type Props = {
  copy: AudienceCopy;
  step: Step;
  primaryCta: string;
  qrTag: string;
  onCta: (e: MouseEvent) => void;
};

export default function Hero({ copy, step, primaryCta, qrTag, onCta }: Props) {
  const done = step === "done";
  const pending = step === "pending";
  const holding = step === "holding";

  return (
    <section
      id="top"
      data-hero=""
      data-m="hero"
      style={{
        flex: 1,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 1720,
        width: "100%",
        margin: "0 auto",
        padding: "72px 40px 120px",
        boxSizing: "border-box",
        minHeight: 760,
      }}
    >
      <div
        data-m="herocopy"
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 32,
          maxWidth: 1040,
          animation: "tf-fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(64px, 10vw, 168px)",
            lineHeight: 0.94,
            letterSpacing: "-0.045em",
            fontWeight: 900,
            textWrap: "balance",
          }}
        >
          {copy.headlineA}
          <br data-m="hbr" />
          <span style={{ color: "#8C8177" }}> {copy.headlineB}</span>
        </h1>
        <div data-m="herobottom" style={{ display: "contents" }}>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(20px, 1.9vw, 27px)",
              lineHeight: 1.35,
              fontWeight: 600,
              color: "#6E6459",
              maxWidth: 640,
              textWrap: "balance",
              letterSpacing: "-0.01em",
            }}
          >
            {copy.sub}
          </p>
          <a
            href="#signup"
            onClick={onCta}
            className="tf-cta-dark"
            style={{
              height: 68,
              padding: "0 38px",
              marginTop: 8,
              borderRadius: 999,
              background: "#2A211B",
              color: "#FBF8F2",
              fontSize: 19,
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            {primaryCta}
          </a>
        </div>
      </div>

      {/* No signal pill */}
      <div
        data-m="frag0"
        style={{
          position: "absolute",
          left: "9%",
          top: "6%",
          zIndex: 1,
          animation: "tf-fadeUp 0.7s 0.15s cubic-bezier(0.22,1,0.36,1) both",
        }}
      >
        <div
          data-frag="left"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            height: 68,
            padding: "0 28px 0 24px",
            borderRadius: 999,
            background: "#FFFFFF",
            border: "1px solid #EFE8DB",
            boxShadow: "0 24px 60px rgba(42,33,27,0.10)",
            fontSize: 20,
            fontWeight: 700,
            color: "#6E6459",
            animation: "tf-driftA 7s ease-in-out infinite",
          }}
        >
          <span style={{ display: "inline-flex", alignItems: "flex-end", gap: 3, height: 18 }}>
            <span style={signalBar(7, "#C8402F")} />
            <span style={signalBar(11, "#E2D9C9")} />
            <span style={signalBar(15, "#E2D9C9")} />
            <span style={signalBar(18, "#E2D9C9")} />
          </span>
          No signal
        </div>
      </div>

      {/* Frosted QR card */}
      <div
        data-m="frag1"
        style={{
          position: "absolute",
          right: "7%",
          top: "4%",
          zIndex: 1,
          animation: "tf-fadeUp 0.7s 0.25s cubic-bezier(0.22,1,0.36,1) both",
        }}
      >
        <div
          data-frag="right"
          style={{
            width: 232,
            padding: "18px 18px 20px",
            borderRadius: 34,
            background: "rgba(255,255,255,0.42)",
            backdropFilter: "blur(22px) saturate(1.2)",
            WebkitBackdropFilter: "blur(22px) saturate(1.2)",
            border: "1px solid rgba(255,255,255,0.7)",
            boxShadow: "0 32px 80px rgba(42,33,27,0.14), inset 0 1px 0 rgba(255,255,255,0.8)",
            animation: "tf-driftB 8s ease-in-out infinite",
          }}
        >
          <div
            style={{
              borderRadius: 22,
              background: "rgba(251,248,242,0.55)",
              padding: 16,
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gridAutoRows: "1fr",
              gap: 5,
              aspectRatio: 1,
            }}
          >
            {QR_CELLS.map((cell, i) => {
              const span = cell.endsWith("2");
              return (
                <span
                  key={i}
                  style={{
                    background: QR_COLORS[cell[0]],
                    borderRadius: 4,
                    gridColumn: span ? "span 2" : undefined,
                    gridRow: span ? "span 2" : undefined,
                  }}
                />
              );
            })}
          </div>
          <div
            style={{
              marginTop: 16,
              textAlign: "center",
              fontSize: 18,
              fontWeight: 700,
              color: "#2A211B",
              letterSpacing: "-0.3px",
            }}
          >
            {qrTag}
          </div>
          <div
            style={{
              marginTop: 4,
              textAlign: "center",
              fontSize: 13.5,
              fontWeight: 600,
              color: "#6E6459",
            }}
          >
            Works offline
          </div>
        </div>
      </div>

      {/* Counterparty card */}
      <div
        data-m="frag2"
        style={{
          position: "absolute",
          left: "3%",
          bottom: "8%",
          zIndex: 1,
          animation: "tf-fadeUp 0.7s 0.35s cubic-bezier(0.22,1,0.36,1) both",
        }}
      >
        <div
          data-frag="left"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            width: 360,
            padding: "22px 26px",
            borderRadius: 32,
            background: "#FFFFFF",
            border: "1px solid #EFE8DB",
            boxShadow: "0 32px 80px rgba(42,33,27,0.12)",
            animation: "tf-driftC 9s ease-in-out infinite",
          }}
        >
          <span
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              color: "#FBF8F2",
              fontSize: 21,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "none",
              background: copy.avatar,
            }}
          >
            {copy.initials}
          </span>
          <span style={{ flex: 1, minWidth: 0 }}>
            <span
              style={{
                display: "block",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "-0.3px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {copy.counterparty}
            </span>
            <span
              style={{
                display: "block",
                fontSize: 17,
                fontWeight: 600,
                color: "#8C8177",
                marginTop: 4,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {copy.meta}
            </span>
          </span>
        </div>
      </div>

      {/* Amount card */}
      <div
        data-m="frag3"
        style={{
          position: "absolute",
          left: "5%",
          top: "34%",
          zIndex: 1,
          animation: "tf-fadeUp 0.7s 0.3s cubic-bezier(0.22,1,0.36,1) both",
        }}
      >
        <div
          data-frag="left"
          style={{
            padding: "24px 34px 22px",
            borderRadius: 32,
            background: "#FFFFFF",
            border: "1px solid #EFE8DB",
            boxShadow: "0 32px 80px rgba(42,33,27,0.12)",
            animation: "tf-driftD 8.5s ease-in-out infinite",
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 700, color: "#8C8177" }}>
            {copy.amountLabel}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 3,
              letterSpacing: "-3px",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
              marginTop: 8,
            }}
          >
            <span
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "#8C8177",
                letterSpacing: "-0.8px",
                paddingBottom: 8,
              }}
            >
              ₦
            </span>
            <span style={{ fontSize: 68, fontWeight: 700 }}>4,500</span>
          </div>
        </div>
      </div>

      {/* Hold-to-pay button */}
      <div
        data-m="frag4"
        style={{
          position: "absolute",
          right: "6%",
          bottom: "18%",
          zIndex: 1,
          animation: "tf-fadeUp 0.7s 0.45s cubic-bezier(0.22,1,0.36,1) both",
        }}
      >
        <div data-frag="right" style={{ animation: "tf-driftA 7.5s 1s ease-in-out infinite" }}>
          <div
            style={{
              width: 330,
              height: 80,
              borderRadius: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              fontSize: 21,
              fontWeight: 700,
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 28px 70px rgba(42,33,27,0.16)",
              transition: "background 0.5s, color 0.5s",
              background: done ? "#1F6B4A" : pending ? "#2A211B" : "#F5B32C",
              color: done || pending ? "#FBF8F2" : "#2A211B",
            }}
          >
            {holding && (
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(42,33,27,0.14)",
                  animation: "tf-fill 1.4s linear both",
                  display: "block",
                }}
              />
            )}
            {pending && (
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  background: "currentColor",
                  display: "inline-block",
                  animation: "tf-pulse 1s ease-in-out infinite",
                }}
              />
            )}
            {done && (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m5 13 4.5 4.5L19 7" />
              </svg>
            )}
            <span style={{ position: "relative" }}>{copy.labels[step]}</span>
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: 600,
              color: "#8C8177",
              marginTop: 14,
              minHeight: 22,
              whiteSpace: "nowrap",
            }}
          >
            {copy.notes[step]}
          </div>
        </div>
      </div>
    </section>
  );
}
