/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Umami website id. Blank disables analytics. */
  readonly VITE_UMAMI_WEBSITE_ID?: string;
  readonly VITE_UMAMI_SCRIPT_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
