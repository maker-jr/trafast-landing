import { BEAT_COPY } from "../landing.data";
import PhoneMock, { type PhoneVals } from "./phone-mock";

type Props = {
  beat: number;
  phone: PhoneVals;
};

export default function HowItWorks({ beat, phone }: Props) {
  return (
    <section id="how-it-works" style={{ background: "#FBF8F2", color: "#2A211B" }}>
      <div
        data-howgrid=""
        data-m="how"
        style={{
          display: "grid",
          gridTemplateColumns: "calc(440px * var(--ps, 1)) minmax(0, 1fr)",
          gap: 96,
          alignItems: "start",
          maxWidth: 1560,
          width: "100%",
          margin: "0 auto",
          padding: "120px 48px 0",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: "max(24px, calc(50vh - 464px * var(--ps, 1)))",
            width: "calc(440px * var(--ps, 1))",
            height: "calc(928px * var(--ps, 1))",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 400,
              height: 844,
              transform: "scale(calc(var(--ps, 1) * 1.1))",
              transformOrigin: "0 0",
              padding: 10,
              boxSizing: "border-box",
              borderRadius: 60,
              background:
                "linear-gradient(150deg, #6E6A64, #2C2A28 32%, #1A1918 68%, #55514B)",
              boxShadow: "0 40px 100px rgba(26,25,24,0.35)",
            }}
          >
            <PhoneMock v={phone} />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, padding: "6vh 0 38vh" }}>
          {BEAT_COPY.map(([head, sub], i) => {
            const on = i === beat;
            return (
              <div
                key={head}
                data-beat={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "56px minmax(0, 1fr)",
                  gap: 22,
                  alignItems: "start",
                  padding: "34px 36px 36px 30px",
                  borderRadius: 32,
                  border: "1px solid #EFE8DB",
                  transition:
                    "background 0.5s, box-shadow 0.5s, opacity 0.5s, transform 0.5s",
                  background: on ? "#FFFFFF" : "#F6F1E8",
                  boxShadow: on ? "0 30px 70px rgba(42,33,27,0.10)" : "none",
                  opacity: on ? 1 : 0.55,
                  transform: on ? "scale(1)" : "scale(0.985)",
                }}
              >
                <span
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 15,
                    fontWeight: 700,
                    fontVariantNumeric: "tabular-nums",
                    transition: "background 0.5s, color 0.5s",
                    background: on ? "#2A211B" : "#EFE8DB",
                    color: on ? "#FBF8F2" : "#8C8177",
                  }}
                >
                  {"0" + (i + 1)}
                </span>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    paddingTop: 4,
                  }}
                >
                  <span
                    style={{
                      fontSize: "clamp(28px, 2.6vw, 38px)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.035em",
                      fontWeight: 900,
                      textWrap: "balance",
                    }}
                  >
                    {head}
                  </span>
                  <span
                    style={{
                      fontSize: 18,
                      lineHeight: 1.5,
                      fontWeight: 600,
                      color: "#6E6459",
                      textWrap: "pretty",
                    }}
                  >
                    {sub}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
