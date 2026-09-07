import type { CSSProperties } from "react";

export const fanCardStyle = (
  index: number,
  background: string,
  color: string,
  shadow: string,
  gap: number,
  height: number | string = 680,
  padding = "44px 40px"
): CSSProperties => ({
  position: "relative",
  height,
  borderRadius: 40,
  padding,
  boxSizing: "border-box",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  gap,
  background,
  color,
  boxShadow: shadow,
  willChange: "transform, opacity",
  transformOrigin: "50% 100%",
  zIndex: index === 1 ? 3 : 2 - Math.abs(index - 1),
});

export const fanHeading: CSSProperties = {
  fontSize: "clamp(28px, 2.4vw, 38px)",
  lineHeight: 1.12,
  letterSpacing: "-0.035em",
  fontWeight: 900,
  textWrap: "balance",
};

export const fanBody: CSSProperties = {
  fontSize: 20,
  lineHeight: 1.45,
  fontWeight: 600,
  opacity: 0.72,
  textWrap: "pretty",
  maxWidth: 400,
};

export const fanWrap: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: 20,
};
