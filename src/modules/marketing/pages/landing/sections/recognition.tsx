import type { CSSProperties } from "react";

const BUBBLES: { text: string; align: "flex-start" | "flex-end"; bg: string; size: string; radius: string; delay: string }[] = [
  {
    text: "Kai! Which kind network be dis?",
    align: "flex-start",
    bg: "#FBF8F2",
    size: "clamp(34px, 3.6vw, 56px)",
    radius: "36px 36px 36px 10px",
    delay: "0.05s",
  },
  {
    text: "Mtsew. Dis network sef.",
    align: "flex-end",
    bg: "#EFE8DB",
    size: "clamp(30px, 3.1vw, 48px)",
    radius: "36px 36px 10px 36px",
    delay: "0.2s",
  },
  {
    text: "E don debit me o!",
    align: "flex-start",
    bg: "#F5B32C",
    size: "clamp(30px, 3.1vw, 48px)",
    radius: "36px 36px 36px 10px",
    delay: "0.35s",
  },
];

const smallBar = (height: number, background: string): CSSProperties => ({
  width: 3.5,
  height,
  borderRadius: 1,
  background,
  display: "block",
});

type Props = {
  stallTimer: string;
  stallLabel: string;
  stallTone: string;
  stallBtnLabel: string;
  stallBtnBg: string;
  stallBtnColor: string;
};

export default function Recognition({
  stallTimer,
  stallLabel,
  stallTone,
  stallBtnLabel,
  stallBtnBg,
  stallBtnColor,
}: Props) {
  return (
    <section style={{ background: "#2A211B", color: "#FBF8F2" }}>
      <div
        data-m="grid2"
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
          gridTemplateRows: "auto auto",
          alignItems: "center",
          gap: "40px 64px",
          maxWidth: 1720,
          width: "100%",
          margin: "0 auto",
          padding: "160px 40px 180px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 36,
            gridColumn: 1,
            gridRow: 1,
            alignSelf: "end",
          }}
        >
          <div
            data-reveal=""
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "rgba(251,248,242,0.55)",
              opacity: 0,
              transform: "translateY(40px)",
              transition:
                "opacity 0.9s 0s cubic-bezier(0.22,1,0.36,1), transform 0.9s 0s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            You know this moment.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 680 }}>
            {BUBBLES.map((b) => (
              <div
                key={b.text}
                data-reveal="pop"
                style={{
                  alignSelf: b.align,
                  position: "relative",
                  padding: b.align === "flex-start" && b.bg === "#FBF8F2" ? "26px 34px" : "24px 32px",
                  borderRadius: b.radius,
                  background: b.bg,
                  color: "#2A211B",
                  fontSize: b.size,
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                  fontWeight: 900,
                  textWrap: "balance",
                  transformOrigin: b.align === "flex-start" ? "0% 100%" : "100% 100%",
                  opacity: 0,
                  transform: "translateY(30px) scale(0.6)",
                  transition: `opacity 0.5s ${b.delay} ease-out, transform 0.8s ${b.delay} cubic-bezier(0.34,1.56,0.64,1)`,
                }}
              >
                {b.text}
              </div>
            ))}
          </div>
        </div>

        <div
          data-reveal=""
          data-m="recart"
          style={{
            display: "flex",
            justifyContent: "center",
            gridRow: "1 / span 2",
            gridColumn: 2,
            opacity: 0,
            transform: "translateY(40px)",
            transition:
              "opacity 0.9s 0.25s cubic-bezier(0.22,1,0.36,1), transform 0.9s 0.25s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 420,
              transform: "rotate(-3deg)",
              animation: "tf-driftC 9s ease-in-out infinite",
            }}
          >
            <div
              style={{
                borderRadius: 36,
                background: "#FFFFFF",
                color: "#2A211B",
                boxShadow: "0 50px 120px rgba(0,0,0,0.45)",
                padding: "34px 32px 30px",
                display: "flex",
                flexDirection: "column",
                gap: 30,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#8C8177" }}>Transfer</span>
                <span
                  style={{ display: "inline-flex", alignItems: "flex-end", gap: 2.5, height: 14 }}
                >
                  <span style={smallBar(5, "#C8402F")} />
                  <span style={smallBar(8, "#E2D9C9")} />
                  <span style={smallBar(11, "#E2D9C9")} />
                  <span style={smallBar(14, "#E2D9C9")} />
                </span>
              </div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 700, color: "#6E6459" }}>To Mama Nkechi</div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 3,
                    letterSpacing: "-3px",
                    lineHeight: 1,
                    fontVariantNumeric: "tabular-nums",
                    marginTop: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 30,
                      fontWeight: 700,
                      color: "#8C8177",
                      letterSpacing: "-0.8px",
                      paddingBottom: 8,
                    }}
                  >
                    ₦
                  </span>
                  <span style={{ fontSize: 64, fontWeight: 900 }}>4,500</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 18,
                  padding: "26px 0 8px",
                  borderTop: "1px solid #F1EBE0",
                }}
              >
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9BEAA"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  style={{ animation: "tf-spin 1.6s linear infinite" }}
                >
                  <path d="M20 12a8 8 0 1 1-3.2-6.4" />
                </svg>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#6E6459" }}>{stallLabel}</div>
                <div
                  style={{
                    fontSize: 44,
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                    fontVariantNumeric: "tabular-nums",
                    lineHeight: 1,
                    color: stallTone,
                  }}
                >
                  {stallTimer}
                </div>
              </div>
              <div
                style={{
                  height: 64,
                  borderRadius: 999,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 17,
                  fontWeight: 700,
                  transition: "background 0.4s, color 0.4s",
                  background: stallBtnBg,
                  color: stallBtnColor,
                }}
              >
                {stallBtnLabel}
              </div>
            </div>
          </div>
        </div>

        <div
          data-reveal=""
          data-m="recclose"
          style={{
            gridColumn: 1,
            gridRow: 2,
            alignSelf: "start",
            fontSize: "clamp(22px, 2.2vw, 30px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "rgba(251,248,242,0.85)",
            opacity: 0,
            transform: "translateY(40px)",
            transition:
              "opacity 0.9s 0.15s cubic-bezier(0.22,1,0.36,1), transform 0.9s 0.15s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          We know. We built Trafast for this.
        </div>
      </div>
    </section>
  );
}
