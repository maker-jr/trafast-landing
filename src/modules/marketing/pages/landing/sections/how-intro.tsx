import { HOW_INTRO_LINES } from "../landing.data";

/**
 * "Wait! / How does that even work? / Glad you asked." — three headlines that
 * hand over to each other across 340vh of scroll on a sticky stage. The last
 * one stays up and leads into the walkthrough.
 */
export default function HowIntro() {
  return (
    <section style={{ background: "#FBF8F2", color: "#2A211B" }}>
      <div data-seqstory="" style={{ position: "relative", height: "340vh" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
          {HOW_INTRO_LINES.map((line, i) => (
            <div
              key={line.text}
              data-seq={i}
              style={{
                position: "absolute",
                left: 40,
                right: 40,
                top: "50%",
                transform: "translateY(-50%)",
                textAlign: "center",
                fontSize: line.size,
                lineHeight: 0.94,
                letterSpacing: "-0.05em",
                fontWeight: 900,
                textWrap: "balance",
                color: line.color,
                opacity: 0,
                willChange: "opacity, transform",
              }}
            >
              {line.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
