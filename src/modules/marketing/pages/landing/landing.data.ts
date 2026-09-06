export type Audience = "personal" | "business";

export type Step = "ready" | "holding" | "pending" | "done";

export const STEPS: Step[] = ["ready", "holding", "pending", "done"];

/** How long the hero pay-button sits in each step before advancing. */
export const STEP_DURATIONS = [2400, 1400, 1600, 3600];

export type AudienceCopy = {
  eyebrow: string;
  headlineA: string;
  headlineB: string;
  sub: string;
  primaryCta: string;
  navCta: string;
  counterparty: string;
  meta: string;
  amountLabel: string;
  labels: Record<Step, string>;
  notes: Record<Step, string>;
  initials: string;
  avatar: string;
};

export const AUDIENCE_COPY: Record<Audience, AudienceCopy> = {
  personal: {
    eyebrow: "Payments that work offline",
    headlineA: "The everyday",
    headlineB: "money app.",
    sub: "Pay and get paid in seconds. On bad network, or none at all.",
    primaryCta: "Get the app",
    navCta: "Get the app",
    counterparty: "To Mama Nkechi",
    meta: "Oyingbo Market",
    amountLabel: "Sending",
    labels: {
      ready: "Hold to send",
      holding: "Keep holding…",
      pending: "Sending offline",
      done: "Sent",
    },
    notes: {
      ready: "Hold, don’t tap",
      holding: "No accidental sends",
      pending: "Phone to phone",
      done: "Mama Nkechi has it now",
    },
    initials: "MN",
    avatar: "#B85C38",
  },
  business: {
    eyebrow: "Trafast for Business",
    headlineA: "The money app",
    headlineB: "for your business.",
    sub: "Take payments in seconds. On bad network, or none at all.",
    primaryCta: "Start accepting",
    navCta: "Get started",
    counterparty: "From Tunde A.",
    meta: "At your counter",
    amountLabel: "Incoming",
    labels: {
      ready: "Waiting for payment",
      holding: "Customer confirming",
      pending: "Receiving offline",
      done: "Received",
    },
    notes: {
      ready: "No data on either phone",
      holding: "They hold, you wait",
      pending: "Phone to phone",
      done: "Settles when you reconnect",
    },
    initials: "TA",
    avatar: "#1F6B4A",
  },
};

/** The five scroll-driven beats of the "How it works" walkthrough. */
export const BEAT_COPY: [string, string][] = [
  [
    "Some money is set aside on your phone.",
    "While you’re online, Trafast securely reserves a small amount on the device itself, so it’s ready before you ever need it.",
  ],
  [
    "Then the network goes. Your money doesn’t.",
    "What’s reserved is already here. No signal, no data, nothing to wait for.",
  ],
  [
    "Pay the person in front of you.",
    "Your phone talks directly to theirs. No internet in between.",
  ],
  [
    "Hold to pay. It was always going to go through.",
    "Cleared on your phone, in a second. Both of you see it.",
  ],
  [
    "Back online, everything squares itself.",
    "Your ledger syncs and the reserve refills. You never have to think about it.",
  ],
];

/** Delays, in ms, from entering a beat to each of its later phases. */
export const BEAT_PLAN: Record<number, number[]> = {
  0: [1800],
  2: [2000],
  3: [950],
  4: [1600],
};

export const FAQ_DATA: [string, string][] = [
  [
    "Does the other person need Trafast too?",
    "For an offline payment, yes. Both phones need the app so they can talk to each other directly. When you’re online, you can send to any bank account in Nigeria as usual.",
  ],
  [
    "How does it work with no internet at all?",
    "While you’re online, Trafast keeps a small amount ready on your phone. When the network goes, you pay with that. Your phone and theirs confirm it between themselves, and it settles the moment either of you reconnects.",
  ],
  [
    "Does it need Bluetooth or data?",
    "No data. Payments pass phone to phone using your phone’s short-range connection, or by scanning a code. You don’t have to set anything up.",
  ],
  [
    "What if I lose my phone?",
    "Nobody can pay from it. Every payment needs your face or fingerprint, and you can freeze your account from any other phone or by calling us.",
  ],
  [
    "Is the money on my phone safe?",
    "Yes. It’s held by a licensed, insured financial institution and protected by the strongest security your phone has. Trafast checks your phone every time before it’s allowed to pay offline.",
  ],
  [
    "Is there a fee?",
    "Offline payments between Trafast users are free. Transfers to other banks follow the standard bank charge, which we always show you before you send.",
  ],
];
