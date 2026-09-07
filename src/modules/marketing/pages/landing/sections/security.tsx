import type { CSSProperties, ReactNode } from "react";
import logo from "@/assets/images/logo-primary.png";
import { useT } from "../i18n/use-language";

const revealHeading = (delay: string): CSSProperties => ({
  fontSize: "clamp(40px, 4vw, 64px)",
  lineHeight: 1.02,
  letterSpacing: "-0.04em",
  fontWeight: 900,
  textWrap: "balance",
  opacity: 0,
  transform: "translateY(40px)",
  transition: `opacity 0.9s ${delay} cubic-bezier(0.22,1,0.36,1), transform 0.9s ${delay} cubic-bezier(0.22,1,0.36,1)`,
});

const revealBody = (delay: string): CSSProperties => ({
  fontSize: "clamp(18px, 1.5vw, 22px)",
  lineHeight: 1.5,
  fontWeight: 600,
  color: "#6E6459",
  textWrap: "pretty",
  opacity: 0,
  transform: "translateY(40px)",
  transition: `opacity 0.9s ${delay} cubic-bezier(0.22,1,0.36,1), transform 0.9s ${delay} cubic-bezier(0.22,1,0.36,1)`,
});

function Point({
  art,
  artOrder,
  heading,
  body,
}: {
  art: ReactNode;
  artOrder: 1 | 2;
  heading: string;
  body: string;
}) {
  return (
    <div
      data-m="point"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: 80,
        alignItems: "center",
        minHeight: "60vh",
      }}
    >
      <div
        data-reveal=""
        data-panel=""
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 440,
          borderRadius: 44,
          background: "#F3EDE2",
          overflow: "hidden",
          order: artOrder,
          opacity: 0,
          transform: "translateY(40px)",
          transition:
            "opacity 0.9s 0s cubic-bezier(0.22,1,0.36,1), transform 0.9s 0s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {art}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
          maxWidth: 480,
          order: artOrder === 1 ? 2 : 1,
          justifySelf: artOrder === 2 ? "end" : undefined,
        }}
      >
        <div data-reveal="" style={revealHeading("0.1s")}>
          {heading}
        </div>
        <div data-reveal="" style={revealBody("0.2s")}>
          {body}
        </div>
      </div>
    </div>
  );
}

/** The same receipt, on both phones, at the same second. */
function TwoPhonesArt() {
  const receipt = (
    label: string,
    state: string,
    stateColor: string,
    rotate: string
  ) => (
    <div style={{ transform: `rotate(${rotate})` }}>
      <div
        style={{
          width: 158,
          boxSizing: "border-box",
          padding: "16px 16px 14px",
          borderRadius: 22,
          background: "#FFFFFF",
          border: "1px solid #EFE8DB",
          boxShadow: "0 24px 60px rgba(42,33,27,0.12)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#8C8177" }}>{label}</span>
          <span
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              background: "#1F6B4A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FBF8F2"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m5 13 4.5 4.5L19 7" />
            </svg>
          </span>
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, color: stateColor }}>{state}</div>
        <div
          style={{
            fontSize: 30,
            fontWeight: 900,
            letterSpacing: "-1.5px",
            lineHeight: 1,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          ₦4,500
        </div>
        <div style={{ fontSize: 11.5, fontWeight: 600, color: "#8C8177" }}>9:41:07 · Final</div>
      </div>
    </div>
  );

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
        width: 406,
        flex: "none",
        transform: "scale(var(--fit, 1))",
      }}
    >
      {receipt("Your phone", "Sent", "#2A211B", "-4deg")}
      <span
        style={{
          width: 44,
          height: 44,
          borderRadius: 22,
          background: "#2A211B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "none",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FBF8F2"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 8h10M13 4l4 4-4 4M17 16H7M11 12l-4 4 4 4" />
        </svg>
      </span>
      {receipt("Their phone", "Received", "#1F6B4A", "4deg")}
    </div>
  );
}

function BiometricArt() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        width: 406,
        flex: "none",
        transform: "scale(var(--fit, 1))",
      }}
    >
      <div
        style={{
          position: "relative",
          width: 200,
          height: 330,
          marginTop: 70,
          borderRadius: "34px 34px 0 0",
          padding: "8px 8px 0",
          boxSizing: "border-box",
          background: "linear-gradient(150deg, #6E6A64, #2C2A28 32%, #1A1918 68%, #55514B)",
          boxShadow: "0 30px 60px rgba(42,33,27,0.18)",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "27px 27px 0 0",
            background: "#2A211B",
            color: "#FBF8F2",
            overflow: "hidden",
            padding: "40px 14px 0",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 8,
              left: "50%",
              transform: "translateX(-50%)",
              width: 60,
              height: 18,
              borderRadius: 10,
              background: "#0A0A0A",
            }}
          />
          <div
            style={{
              position: "relative",
              width: 96,
              height: 96,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
              stroke="#FBF8F2"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ position: "absolute", inset: 0, animation: "tf-faceFrame 6s ease-in-out infinite" }}
            >
              <path d="M8 30V18a10 10 0 0 1 10-10h12M66 8h12a10 10 0 0 1 10 10v12M8 66v12a10 10 0 0 0 10 10h12M66 88h12a10 10 0 0 0 10-10V66" />
            </svg>
            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
              stroke="#FBF8F2"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ position: "absolute", inset: 0, animation: "tf-faceIn 6s ease-in-out infinite" }}
            >
              <path d="M34 40v6M62 40v6M48 40v14h-5" />
              <path d="M35 62c3.5 4 8 6 13 6s9.5-2 13-6" />
            </svg>
            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
              stroke="#1F6B4A"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                position: "absolute",
                inset: 0,
                animation: "tf-tickIn 6s cubic-bezier(0.22,1,0.36,1) infinite",
              }}
            >
              <circle cx="48" cy="48" r="34" fill="#1F6B4A" stroke="none" />
              <path d="m34 49 9 9 19-20" stroke="#FBF8F2" />
            </svg>
            <span
              style={{
                position: "absolute",
                left: 6,
                right: 6,
                height: 3,
                borderRadius: 2,
                background: "#F5B32C",
                boxShadow: "0 0 14px rgba(245,179,44,0.8)",
                display: "block",
                animation: "tf-faceScan 6s ease-in-out infinite",
              }}
            />
          </div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "rgba(251,248,242,0.7)",
              textAlign: "center",
              height: 18,
              position: "relative",
              width: "100%",
            }}
          >
            <span style={{ position: "absolute", inset: 0, animation: "tf-lblA 6s ease-in-out infinite" }}>
              Confirm it’s you
            </span>
            <span
              style={{
                position: "absolute",
                inset: 0,
                color: "#C6DCCE",
                animation: "tf-lblB 6s ease-in-out infinite",
              }}
            >
              It’s you
            </span>
          </div>
          <div
            style={{
              marginTop: "auto",
              marginBottom: 18,
              width: "100%",
              height: 50,
              borderRadius: 999,
              position: "relative",
              overflow: "hidden",
              background: "rgba(251,248,242,0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              fontWeight: 700,
              color: "#2A211B",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                background: "#1F6B4A",
                display: "block",
                animation: "tf-holdFill 6s linear infinite",
              }}
            />
            <span style={{ position: "relative", animation: "tf-holdLbl 6s ease-in-out infinite" }}>
              Hold to pay
            </span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 16px",
            borderRadius: 999,
            background: "#FFFFFF",
            border: "1px solid #EFE8DB",
            fontSize: 13,
            fontWeight: 700,
            boxShadow: "0 12px 30px rgba(42,33,27,0.08)",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2A211B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 11a6 6 0 0 1 12 0v2c0 3-1 5.5-2.5 7.5" />
            <path d="M9 11a3 3 0 0 1 6 0v3c0 2.2-.6 4-1.6 5.6" />
            <path d="M12 11v3c0 1.5-.3 3-1 4.3" />
            <path d="M4 9a8 8 0 0 1 16 0" />
          </svg>
          Fingerprint
        </span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 16px",
            borderRadius: 999,
            background: "#FFFFFF",
            border: "1px solid #EFE8DB",
            fontSize: 13,
            fontWeight: 700,
            boxShadow: "0 12px 30px rgba(42,33,27,0.08)",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2A211B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M4 16v2a2 2 0 0 0 2 2h2M16 20h2a2 2 0 0 0 2-2v-2" />
            <path d="M9 10h.01M15 10h.01M9 15c.8.8 1.8 1.2 3 1.2s2.2-.4 3-1.2" />
          </svg>
          Face
        </span>
      </div>
    </div>
  );
}

function VaultArt() {
  return (
    <div
      style={{
        position: "relative",
        width: 406,
        height: 300,
        flex: "none",
        transform: "scale(var(--fit, 1))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: 300,
          height: 300,
          borderRadius: 40,
          background: "#2A211B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 40px 90px rgba(42,33,27,0.22)",
        }}
      >
        <span
          style={{
            position: "absolute",
            inset: 14,
            borderRadius: 30,
            border: "1.5px solid rgba(251,248,242,0.12)",
            display: "block",
          }}
        />
        <div
          style={{
            position: "relative",
            width: 196,
            height: 196,
            borderRadius: 999,
            background: "#1F1813",
            border: "6px solid #3A2F27",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "inset 0 10px 30px rgba(0,0,0,0.5)",
          }}
        >
          <span
            style={{
              position: "absolute",
              inset: 22,
              borderRadius: 999,
              border: "1.5px solid rgba(251,248,242,0.14)",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              animation: "tf-dial 8s cubic-bezier(0.6,0,0.2,1) infinite",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: "50%",
                top: 14,
                width: 4,
                height: 20,
                marginLeft: -2,
                borderRadius: 2,
                background: "#F5B32C",
                display: "block",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: "50%",
                bottom: 14,
                width: 4,
                height: 12,
                marginLeft: -2,
                borderRadius: 2,
                background: "rgba(251,248,242,0.3)",
                display: "block",
              }}
            />
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: 14,
                width: 12,
                height: 4,
                marginTop: -2,
                borderRadius: 2,
                background: "rgba(251,248,242,0.3)",
                display: "block",
              }}
            />
            <span
              style={{
                position: "absolute",
                top: "50%",
                right: 14,
                width: 12,
                height: 4,
                marginTop: -2,
                borderRadius: 2,
                background: "rgba(251,248,242,0.3)",
                display: "block",
              }}
            />
          </div>
          <div
            style={{
              position: "relative",
              width: 108,
              height: 108,
              borderRadius: 999,
              background: "#2A211B",
              border: "4px solid #4A3D33",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={logo} alt="" style={{ width: 52, height: 52, display: "block", opacity: 0.95 }} />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: -26,
            transform: "translateX(-50%)",
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            padding: "12px 18px 12px 14px",
            borderRadius: 999,
            background: "#1F6B4A",
            color: "#FBF8F2",
            fontSize: 14,
            fontWeight: 700,
            whiteSpace: "nowrap",
            boxShadow: "0 16px 36px rgba(31,107,74,0.35)",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FBF8F2"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" />
            <path d="m9 12 2 2 4-4.5" />
          </svg>
          Insured deposits
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: 8,
          top: 22,
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 18px",
          borderRadius: 999,
          background: "#FFFFFF",
          border: "1px solid #EFE8DB",
          fontSize: 13.5,
          fontWeight: 700,
          boxShadow: "0 16px 36px rgba(42,33,27,0.10)",
          transform: "rotate(4deg)",
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
          strokeLinejoin="round"
        >
          <path d="M3 10 12 4l9 6M5 10v9M19 10v9M9 10v9M15 10v9M3 19h18" />
        </svg>
        Licensed bank
      </div>
    </div>
  );
}

export default function Security() {
  const t = useT();

  return (
    <section id="security" style={{ background: "#FBF8F2", color: "#2A211B" }}>
      <div
        data-m="intro"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 28,
          padding: "120px 40px",
          boxSizing: "border-box",
        }}
      >
        <div
          data-lock=""
          style={{
            position: "relative",
            width: 120,
            height: 154,
            marginBottom: 12,
            willChange: "transform, opacity",
          }}
        >
          <span
            data-shackle=""
            style={{
              position: "absolute",
              left: 27,
              top: 0,
              width: 66,
              height: 78,
              boxSizing: "border-box",
              border: "13px solid #2A211B",
              borderBottom: "none",
              borderRadius: "33px 33px 0 0",
              display: "block",
              transformOrigin: "100% 100%",
              willChange: "transform",
            }}
          />
          <span
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: 120,
              height: 84,
              borderRadius: 24,
              background: "#2A211B",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 0,
            }}
          >
            <span
              data-keyhole=""
              style={{
                width: 16,
                height: 16,
                borderRadius: 8,
                display: "block",
                transition: "background 0.4s",
                background: "#FBF8F2",
              }}
            />
            <span
              data-keyslot=""
              style={{
                width: 6,
                height: 14,
                borderRadius: "0 0 3px 3px",
                marginTop: -2,
                display: "block",
                transition: "background 0.4s",
                background: "#FBF8F2",
              }}
            />
          </span>
        </div>
        <div
          data-zoom=""
          style={{
            fontSize: "clamp(64px, 10vw, 168px)",
            lineHeight: 0.92,
            letterSpacing: "-0.05em",
            fontWeight: 900,
            textWrap: "balance",
            maxWidth: 1100,
            transformOrigin: "50% 60%",
            willChange: "transform, opacity",
          }}
        >
          {t.safe.head}
        </div>
        <div
          data-reveal=""
          style={{
            fontSize: "clamp(20px, 1.9vw, 28px)",
            lineHeight: 1.4,
            fontWeight: 600,
            color: "#6E6459",
            maxWidth: 640,
            textWrap: "balance",
            opacity: 0,
            transform: "translateY(40px)",
            transition:
              "opacity 0.9s 0.2s cubic-bezier(0.22,1,0.36,1), transform 0.9s 0.2s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {t.safe.sub}
        </div>
      </div>

      <div
        style={{
          maxWidth: 1560,
          width: "100%",
          margin: "0 auto",
          padding: "40px 40px 160px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: 40,
        }}
      >
        <Point
          art={<TwoPhonesArt />}
          artOrder={2}
          heading={t.safe.h1}
          body={t.safe.b1}
        />
        <Point
          art={<BiometricArt />}
          artOrder={1}
          heading={t.safe.h2}
          body={t.safe.b2}
        />
        <Point
          art={<VaultArt />}
          artOrder={2}
          heading={t.safe.h3}
          body={t.safe.b3}
        />
      </div>
    </section>
  );
}
