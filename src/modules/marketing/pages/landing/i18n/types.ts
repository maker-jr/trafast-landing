/** Shape shared by every locale. `en.ts` is the reference; the rest must match. */

export type StepKey = "ready" | "holding" | "pending" | "done";

export type AudienceDict = {
  /** Headline, split so the second half can take the muted colour. */
  a: string;
  b: string;
  sub: string;
  /** Call to action once the apps are live. */
  cta: string;
  nav: string;
  /** Call to action while still pre-launch. */
  wait: string;
  who: string;
  meta: string;
  amount: string;
  labels: Record<StepKey, string>;
  notes: Record<StepKey, string>;
};

export type Dict = {
  /** Endonym, shown in the language switcher. */
  name: string;
  nav: {
    personal: string;
    business: string;
    how: string;
    security: string;
    early: string;
  };
  hero: {
    personal: AudienceDict;
    business: AudienceDict;
    noSignal: string;
    worksOffline: string;
  };
  rec: {
    know: string;
    b1: string;
    b2: string;
    b3: string;
    we: string;
    transfer: string;
    to: string;
    processing: string;
    failed: string;
    retry: string;
    wait: string;
  };
  every: {
    head: string;
    sub: string;
    f0: string;
    f1: string;
    f2: string;
    line: string;
    a0: string;
    a1: string;
    a2: string;
    a3: string;
    a4: string;
  };
  seq: { s0: string; s1: string; s2: string };
  how: { head: string; sub: string; beats: [string, string][] };
  safe: {
    head: string;
    sub: string;
    h1: string;
    b1: string;
    h2: string;
    b2: string;
    h3: string;
    b3: string;
  };
  biz: {
    eyebrow: string;
    run: string;
    runSub: string;
    never: string;
    neverSub: string;
    h0: string;
    b0: string;
    h1: string;
    b1: string;
    h2: string;
    b2: string;
    add: string;
    talk: string;
  };
  faq: { head: string; sub: string; items: [string, string][] };
  close: {
    pay: string;
    any: string;
    get: string;
    getSub: string;
    soonSub: string;
    email: string;
    early: string;
    onList: string;
    /** Contains a literal {email} placeholder. */
    willEmail: string;
    live: string;
    soon: string;
    product: string;
    help: string;
    follow: string;
    terms: string;
    privacy: string;
    copy: string;
  };
  top: { back: string; over: string; rewind: string };
};
