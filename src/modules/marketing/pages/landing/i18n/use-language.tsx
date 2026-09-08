import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { track } from "../analytics/analytics";
import {
  en,
  loadDict,
  readStoredLang,
  storeLang,
  type Dict,
  type Lang,
} from "./index";

type LanguageValue = {
  lang: Lang;
  t: Dict;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageValue>({
  lang: "en",
  t: en,
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang);
  const [t, setT] = useState<Dict>(en);

  useEffect(() => {
    document.documentElement.lang = lang;

    if (lang === "en") {
      setT(en);
      return;
    }

    // Keep the current copy on screen until the new dictionary arrives, rather
    // than flashing English in between.
    let current = true;
    loadDict(lang).then((dict) => {
      if (current) setT(dict);
    });
    return () => {
      current = false;
    };
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    storeLang(next);
    track("language_changed", { to: next });
  }, []);

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t, setLang]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);

/** Shorthand for the common case of only needing the strings. */
// eslint-disable-next-line react-refresh/only-export-components
export const useT = () => useContext(LanguageContext).t;
