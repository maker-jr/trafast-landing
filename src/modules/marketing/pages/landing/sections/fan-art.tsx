import type { ReactNode } from "react";

/** The 300x320 illustration well pinned to the bottom of a fan card. */
export default function FanArt({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 380,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        data-art=""
        style={{
          position: "relative",
          width: 300,
          height: 320,
          flex: "none",
          transform: "scale(var(--fit, 1))",
        }}
      >
        {children}
      </div>
    </div>
  );
}
