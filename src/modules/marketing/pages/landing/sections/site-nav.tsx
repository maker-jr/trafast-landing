import type { CSSProperties, MouseEvent } from "react";
import logo from "@/assets/images/logo-primary.png";
import type { Audience } from "../landing.data";
import { useT } from "../i18n/use-language";
import LanguageSwitcher from "./language-switcher";

const tabBase: CSSProperties = {
  height: 52,
  padding: "0 24px",
  border: "none",
  borderRadius: 999,
  fontFamily: "inherit",
  fontSize: 17,
  fontWeight: 700,
  cursor: "pointer",
  transition: "background 0.25s, color 0.25s, box-shadow 0.25s",
};

const ON = { bg: "#FFFFFF", color: "#2A211B", shadow: "0 2px 6px rgba(42,33,27,0.08)" };
const OFF = { bg: "transparent", color: "#6E6459", shadow: "none" };

const navLink: CSSProperties = {
  flex: "none",
  height: 52,
  padding: "0 14px",
  display: "inline-flex",
  alignItems: "center",
  borderRadius: 999,
  fontSize: 17,
  fontWeight: 600,
  color: "#6E6459",
};

type Props = {
  audience: Audience;
  navCta: string;
  onPersonal: () => void;
  onBusiness: () => void;
  onHow: (e: MouseEvent) => void;
  onSecurity: (e: MouseEvent) => void;
  onCta: (e: MouseEvent) => void;
};

export default function SiteNav({
  audience,
  navCta,
  onPersonal,
  onBusiness,
  onHow,
  onSecurity,
  onCta,
}: Props) {
  const t = useT();
  const personal = audience === "business" ? OFF : ON;
  const business = audience === "business" ? ON : OFF;

  return (
    <nav
      data-m="nav"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
        whiteSpace: "nowrap",
        minWidth: 0,
        padding: "28px 40px",
        maxWidth: 1720,
        width: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
        position: "relative",
        zIndex: 5,
      }}
    >
      <a
        href="#top"
        style={{ display: "flex", alignItems: "center", gap: 12, flex: "none" }}
      >
        <img src={logo} alt="Trafast" style={{ width: 44, height: 44, display: "block" }} />
        <span
          data-m="brand"
          style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.6px" }}
        >
          Trafast
        </span>
      </a>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          height: 64,
          padding: "0 8px 0 6px",
          borderRadius: 999,
          background: "#F0EADE",
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        <div role="tablist" style={{ display: "flex", gap: 2 }}>
          <button
            role="tab"
            aria-selected={audience === "personal"}
            onClick={onPersonal}
            style={{
              ...tabBase,
              background: personal.bg,
              color: personal.color,
              boxShadow: personal.shadow,
            }}
          >
            {t.nav.personal}
          </button>
          <button
            role="tab"
            aria-selected={audience === "business"}
            onClick={onBusiness}
            style={{
              ...tabBase,
              background: business.bg,
              color: business.color,
              boxShadow: business.shadow,
            }}
          >
            {t.nav.business}
          </button>
        </div>
        <span
          data-m="hide"
          style={{
            width: 1,
            height: 26,
            background: "#DDD3C2",
            display: "block",
            margin: "0 8px",
          }}
        />
        <a href="#how-it-works" onClick={onHow} data-m="hide" className="tf-navlink" style={navLink}>
          {t.nav.how}
        </a>
        <a href="#security" onClick={onSecurity} data-m="hide" className="tf-navlink" style={navLink}>
          {t.nav.security}
        </a>
      </div>

      <div
        data-m="navcta"
        style={{ display: "flex", alignItems: "center", gap: 10, flex: "none" }}
      >
        <LanguageSwitcher />
        <a
          data-m="navctalink"
          href="#signup"
          onClick={onCta}
          className="tf-cta-amber"
          style={{
            flex: "none",
            height: 60,
            padding: "0 26px",
            borderRadius: 999,
            background: "#F5B32C",
            color: "#2A211B",
            fontSize: 17,
            fontWeight: 700,
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          {navCta}
        </a>
      </div>
    </nav>
  );
}
