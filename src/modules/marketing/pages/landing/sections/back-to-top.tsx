import { useState } from "react";
import { useT } from "../i18n/use-language";
import { rewindToTop } from "../use-landing-motion";
import { track } from "../analytics/analytics";

/** Circumference of the r=15.5 progress ring, to the design's precision. */
const RING = 97.4;

type Props = {
  /** 0 at the top of the page, 1 at the bottom. */
  progress: number;
  /** Whether the visitor has scrolled far enough for the button to appear. */
  visible: boolean;
};

export default function BackToTop({ progress, visible }: Props) {
  const t = useT();
  const [rewinding, setRewinding] = useState(false);

  const label = rewinding
    ? t.top.rewind
    : progress > 0.97
      ? t.top.over
      : t.top.back;

  return (
    <button
      onClick={() => {
        track("back_to_top_used");
        setRewinding(true);
        rewindToTop(() => setRewinding(false));
      }}
      // Hidden is not the same as gone: without this the button keeps eating
      // clicks in the corner while invisible.
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      style={{
        position: "fixed",
        right: 28,
        bottom: 28,
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        gap: 12,
        height: 56,
        padding: "0 20px 0 10px",
        border: "none",
        borderRadius: 999,
        background: "#2A211B",
        color: "#FBF8F2",
        fontFamily: "inherit",
        fontSize: 15,
        fontWeight: 700,
        letterSpacing: "-0.2px",
        cursor: "pointer",
        boxShadow: "0 12px 30px rgba(42,33,27,0.28)",
        opacity: visible ? 1 : 0,
        translate: visible ? "0" : "0 18px",
        pointerEvents: visible ? "auto" : "none",
        transition:
          "opacity 0.45s cubic-bezier(0.2,0.8,0.2,1), translate 0.45s cubic-bezier(0.2,0.8,0.2,1), background 0.25s",
      }}
      className="tf-totop"
    >
      <span
        style={{
          position: "relative",
          width: 36,
          height: 36,
          flex: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          style={{ position: "absolute", inset: 0, transform: "rotate(-90deg)" }}
        >
          <circle
            cx="18"
            cy="18"
            r="15.5"
            fill="none"
            stroke="rgba(251,248,242,0.18)"
            strokeWidth="2.5"
          />
          <circle
            cx="18"
            cy="18"
            r="15.5"
            fill="none"
            stroke="#F5B32C"
            strokeWidth="2.5"
            strokeLinecap="butt"
            strokeDasharray={RING}
            strokeDashoffset={(RING * (1 - progress)).toFixed(1)}
            style={{ transition: "stroke-dashoffset 0.12s linear" }}
          />
        </svg>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FBF8F2"
          strokeWidth="2.4"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          style={{
            translate: rewinding ? "0 -2px" : "0",
            transition: "translate 0.3s cubic-bezier(0.2,0.8,0.2,1)",
          }}
        >
          <path d="M12 20V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </span>
      <span>{label}</span>
    </button>
  );
}
