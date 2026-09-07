import { useEffect, useRef, useState } from "react";
import { LANG_NAMES, LANG_ORDER } from "../i18n";
import { useLanguage } from "../i18n/use-language";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onDocumentClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("click", onDocumentClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocumentClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} style={{ position: "relative" }}>
      <button
        data-m="langbtn"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        aria-haspopup="listbox"
        aria-expanded={open}
        className="tf-langbtn"
        style={{
          height: 60,
          padding: "0 20px 0 16px",
          border: "none",
          borderRadius: 999,
          background: "#F0EADE",
          color: "#2A211B",
          fontFamily: "inherit",
          fontSize: 16,
          fontWeight: 700,
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          transition: "background 0.25s",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
        <span data-m="langname">{LANG_NAMES[lang]}</span>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Language"
          style={{
            position: "absolute",
            right: 0,
            top: "calc(100% + 10px)",
            minWidth: 200,
            padding: 8,
            borderRadius: 24,
            background: "#FFFFFF",
            border: "1px solid #EFE8DB",
            boxShadow: "0 24px 60px rgba(42,33,27,0.16)",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            zIndex: 50,
            animation: "tf-fadeUp 0.25s cubic-bezier(0.22,1,0.36,1) both",
          }}
        >
          {LANG_ORDER.map((code) => {
            const selected = code === lang;
            return (
              <button
                key={code}
                role="option"
                aria-selected={selected}
                onClick={() => {
                  setLang(code);
                  setOpen(false);
                }}
                className="tf-langopt"
                style={{
                  height: 48,
                  padding: "0 16px",
                  border: "none",
                  borderRadius: 16,
                  fontFamily: "inherit",
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  textAlign: "left",
                  background: selected ? "#F0EADE" : "transparent",
                  color: selected ? "#2A211B" : "#6E6459",
                  transition: "background 0.2s",
                }}
              >
                <span>{LANG_NAMES[code]}</span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    color: "#8C8177",
                  }}
                >
                  {code}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
