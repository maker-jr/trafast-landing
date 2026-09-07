import { en } from "./en";
import type { Dict } from "./types";

export type { Dict, AudienceDict, StepKey } from "./types";
export { en };

/** Order the switcher lists them in. */
export const LANG_ORDER = ["en", "pcm", "ha", "yo", "ig"] as const;

export type Lang = (typeof LANG_ORDER)[number];

/**
 * Endonyms, duplicated from each dictionary's `name` so the switcher can label
 * every option without downloading all five. If you add or rename a locale,
 * keep this in step with that locale's `name`.
 */
export const LANG_NAMES: Record<Lang, string> = {
  en: "English",
  pcm: "Pidgin",
  ha: "Hausa",
  yo: "Yorùbá",
  ig: "Igbo",
};

/**
 * English ships in the main bundle so the first paint is never wrong. The other
 * four are split out — most visitors never load them, and this is a product for
 * people on bad networks.
 */
const LOADERS: Record<Lang, () => Promise<Dict>> = {
  en: () => Promise.resolve(en),
  pcm: () => import("./pcm").then((m) => m.pcm),
  ha: () => import("./ha").then((m) => m.ha),
  yo: () => import("./yo").then((m) => m.yo),
  ig: () => import("./ig").then((m) => m.ig),
};

export const loadDict = (lang: Lang) => LOADERS[lang]();

export const STORAGE_KEY = "trafast.lang";

const isLang = (v: unknown): v is Lang =>
  typeof v === "string" && (LANG_ORDER as readonly string[]).includes(v);

/** The visitor's last choice, or English. Storage can throw in private mode. */
export function readStoredLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    // Ignore — an unreadable store just means the default.
  }
  return "en";
}

export function storeLang(lang: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Ignore — the choice still applies for this visit.
  }
}
