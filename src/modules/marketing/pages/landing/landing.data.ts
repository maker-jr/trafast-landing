/**
 * Presentation metadata for the landing page. All prose lives in `i18n/`;
 * what stays here is layout that does not change between languages.
 */

export type Audience = "personal" | "business";

export type Step = "ready" | "holding" | "pending" | "done";

export const STEPS: Step[] = ["ready", "holding", "pending", "done"];

/** How long the hero pay-button sits in each step before advancing. */
export const STEP_DURATIONS = [2400, 1400, 1600, 3600];

/** Avatar and tag treatment per audience; the words come from the dictionary. */
export const AUDIENCE_VISUALS: Record<
  Audience,
  { initials: string; avatar: string; qrTag: string }
> = {
  personal: { initials: "MN", avatar: "#B85C38", qrTag: "@mamankechi" },
  business: { initials: "TA", avatar: "#1F6B4A", qrTag: "@yourshop" },
};

/** Delays, in ms, from entering a walkthrough beat to each of its later phases. */
export const BEAT_PLAN: Record<number, number[]> = {
  0: [1800],
  2: [2000],
  3: [950],
  4: [1600],
};

/**
 * Where each claim sits around the held card in the "Your bank app. Only
 * better." story. `key` selects its text from the dictionary's `every` block.
 */
export type Advantage = {
  key: "a0" | "a1" | "a2" | "a3" | "a4";
  side: "left" | "right";
  rotate: string;
  top: string;
  tone: "plain" | "green" | "amber";
  maxWidth: number;
};

export const STORY_ADVANTAGES: Advantage[] = [
  { key: "a0", side: "left", rotate: "-3deg", top: "20%", tone: "plain", maxWidth: 340 },
  { key: "a1", side: "right", rotate: "2.5deg", top: "24%", tone: "green", maxWidth: 340 },
  { key: "a2", side: "left", rotate: "2deg", top: "46%", tone: "plain", maxWidth: 340 },
  { key: "a3", side: "right", rotate: "-2deg", top: "52%", tone: "amber", maxWidth: 340 },
  { key: "a4", side: "left", rotate: "-1.5deg", top: "70%", tone: "plain", maxWidth: 360 },
];

/** Type sizes for the "Wait! / How does that even work? / Glad you asked." beat. */
export const HOW_INTRO_LINES: {
  key: "s0" | "s1" | "s2";
  size: string;
  color: string;
}[] = [
  { key: "s0", size: "clamp(96px, 18vw, 300px)", color: "#2A211B" },
  { key: "s1", size: "clamp(56px, 8.6vw, 148px)", color: "#2A211B" },
  { key: "s2", size: "clamp(56px, 8.6vw, 148px)", color: "#8C8177" },
];
