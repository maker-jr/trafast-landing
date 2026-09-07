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
    "Your phone passes a security check.",
    "While you’re online, Trafast automatically puts your phone through a strict security check. Once it passes, it’s cleared to pay up to a safe limit, even with no network at all.",
  ],
  [
    "When the network is weak, or gone.",
    "Not a problem. Your phone was already cleared, so you were always ready. Payments go through as fast as ever, even with no network at all.",
  ],
  [
    "Pay like cash. Without the cash.",
    "Hand over your payment the way you’d hand over notes: right there, from your phone to theirs. No transfer to wait on, no change to find.",
  ],
  [
    "Instant. Final. No take-backs.",
    "The moment they accept, it’s done, on both phones. Nothing to confirm, nothing to reverse, no alert to doubt. Cash never disappointed you. Neither will this.",
  ],
  [
    "Back online? Nothing to do.",
    "Your payment was final the moment it happened. Trafast simply tidies up your history and makes sure your phone is ready for next time.",
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
    "Is this a separate wallet I have to fund?",
    "No. You have one balance, like any bank app. Nothing is moved or set aside. Trafast simply clears your phone to pay from that balance when there’s no network.",
  ],
  [
    "How does it work with no internet at all?",
    "While you’re online, Trafast runs a security check on your phone and clears it to pay up to a safe limit. When the network goes, you pay from your phone to theirs directly. No internet is needed at that moment.",
  ],
  [
    "Does the other person need Trafast too?",
    "For an in-person payment, yes. Both phones need the app so they can talk to each other directly. When you’re online, you can still send to any bank account in Nigeria as usual.",
  ],
  [
    "Can a payment be reversed?",
    "No. The moment they accept, it’s final on both phones. No fake alerts, no “debited but not credited”, no reversals after you’ve been given what you paid for.",
  ],
  [
    "Do I need to do anything to be ready?",
    "Nothing. Trafast handles the security check quietly in the background whenever you’re online, so your phone is ready before you need it.",
  ],
  [
    "What if I lose my phone?",
    "Nobody can pay from it. Every payment needs your face or fingerprint, and you can lock your account from another device the moment you notice.",
  ],
  [
    "Is my money safe?",
    "Yes. It’s held and insured by a licensed financial institution, and every payment is protected by the strongest security built into your phone.",
  ],
  [
    "Is there a fee?",
    "In-person payments between Trafast users are free. Transfers to other banks follow the standard bank charge, which we always show you before you send.",
  ],
];

/**
 * The claims that fan out around the held card in the "Your bank app. Only
 * better." story. `side` decides which gutter they sit in; the motion hook
 * pins them relative to the centre card at runtime.
 */
export type Advantage = {
  text: string;
  side: "left" | "right";
  rotate: string;
  top: string;
  tone: "plain" | "green" | "amber";
  maxWidth: number;
};

export const STORY_ADVANTAGES: Advantage[] = [
  {
    text: "No more walking around looking for network.",
    side: "left",
    rotate: "-3deg",
    top: "20%",
    tone: "plain",
    maxWidth: 340,
  },
  {
    text: "No more fake alerts. If it says paid, it’s paid.",
    side: "right",
    rotate: "2.5deg",
    top: "24%",
    tone: "green",
    maxWidth: 340,
  },
  {
    text: "No more “debited but not credited”.",
    side: "left",
    rotate: "2deg",
    top: "46%",
    tone: "plain",
    maxWidth: 340,
  },
  {
    text: "No more “my data is finished”.",
    side: "right",
    rotate: "-2deg",
    top: "52%",
    tone: "amber",
    maxWidth: 340,
  },
  {
    text: "No more holding up the queue while a spinner thinks.",
    side: "left",
    rotate: "-1.5deg",
    top: "70%",
    tone: "plain",
    maxWidth: 360,
  },
];

/** The three lines of the "Wait! / How does that even work? / Glad you asked." beat. */
export const HOW_INTRO_LINES: { text: string; size: string; color: string }[] = [
  { text: "Wait!", size: "clamp(96px, 18vw, 300px)", color: "#2A211B" },
  { text: "How does that even work?", size: "clamp(56px, 8.6vw, 148px)", color: "#2A211B" },
  { text: "Glad you asked.", size: "clamp(56px, 8.6vw, 148px)", color: "#8C8177" },
];
