import LegalPage, { type LegalSection } from "./legal-page";

/**
 * Section 01 was added against the code: the app is not live, so what these
 * terms actually govern today is the waitlist. Everything after it came from
 * the design handoff and describes the app at launch.
 *
 * The specifics below — eligibility, the tier limits, retention periods,
 * notice periods, the CBN escalation route — are business and legal facts that
 * cannot be checked against this repository. They need a lawyer's sign-off
 * before launch.
 */
const SECTIONS: LegalSection[] = [
  {
    id: "now",
    title: "What this covers today",
    paras: [
      "The Trafast app has not launched. Today this site offers one thing: a waitlist. Giving us your email means you are asking to hear from us on launch day, and nothing more. You can leave the list from any email we send.",
      "The sections below are the agreement for the app itself. They take effect when it launches and you open an account, not before.",
    ],
  },
  {
    id: "who",
    title: "Who we are",
    paras: [
      "Trafast is operated by Trafast Technologies Ltd, registered in Abuja, Nigeria. We are a payment service, not a bank. Your balance is held and insured by our licensed partner institution, which means it is protected under the same rules that protect money in a Nigerian bank.",
      "Using the app means you accept these terms. If you do not accept them, do not use the app, and tell us why, because that is useful to us.",
    ],
  },
  {
    id: "account",
    title: "Your account",
    paras: [
      "You need to be 18 or older and resident in Nigeria, and you need to be who you say you are.",
    ],
    items: [
      "One account per person. Not one per phone, and not one per business you run.",
      "Your account is yours alone. Do not open one for someone else or let anyone else use yours.",
      "Your details must be true and current. If your phone number or ID changes, update it. We may have to freeze an account we cannot verify.",
      "We may ask for more identification as your limits rise. That is a legal requirement, not a preference.",
    ],
  },
  {
    id: "paying",
    title: "Paying and getting paid",
    paras: [
      "The rule that matters most: a completed payment cannot be reversed. When the other side accepts, the money is theirs. This is deliberate. It is what makes Trafast work like cash, and what makes an offline payment trustworthy at a counter.",
      "So check the name and the amount before you approve. We show you both, every time, and once you approve, only the person you paid can send it back.",
      "You are responsible for what you pay for. If a seller does not deliver, that is a matter between you and the seller, the same as if you had paid in notes. We will give you the record of the payment to help.",
    ],
  },
  {
    id: "limits",
    title: "Limits",
    paras: [
      "Limits exist to protect you, and they apply to everyone.",
      "These are the Tier 2 limits. You can raise them in the app by completing a Tier 3 upgrade. We may lower a limit temporarily if something about an account looks wrong, and you will see it in the app when we do.",
    ],
    limits: [
      { label: "Each offline session", value: "₦30,000", accent: true },
      { label: "Each day, online and off", value: "₦100,000" },
    ],
  },
  {
    id: "offline",
    title: "Offline payments",
    paras: [
      "While you are online, we run a security check on your phone and clear it to pay up to a safe limit without a network. Nothing is moved or set aside. Your balance stays one balance.",
      "When you pay with no network, the payment is agreed directly between two phones and recorded on both at the same moment. That record is what makes it final. When either phone reconnects, we update your statement.",
      "One thing to know: if you spend your balance online while an offline payment has not yet reached us, we honour the offline payment. It happened first, and the person who accepted it already has the money.",
    ],
  },
  {
    id: "security",
    title: "Keeping it safe",
    paras: ["Security is shared. We do our part; these are yours."],
    items: [
      "Keep your PIN to yourself. Not your spouse, not your staff, not someone claiming to be from Trafast. We will never ask for it.",
      "Use your own face or fingerprint, and no one else’s, on the phone you pay with.",
      "Tell us immediately if your phone is lost or stolen, or if you see a payment you did not make. You can lock the account yourself from another device.",
      "A payment approved with your PIN or your biometric is treated as yours. If you shared them, we may not be able to recover the money.",
    ],
  },
  {
    id: "fees",
    title: "Fees",
    paras: [
      "In-person Trafast payments are free, offline or online.",
      "Transfers to other banks carry the standard interbank charge, which we show you before you send, never after. If we ever introduce a new fee, you will see it in the app before it applies, never as a surprise on a statement.",
    ],
  },
  {
    id: "stop",
    title: "When we can stop an account",
    paras: ["We would rather not, and we will tell you why whenever we are allowed to."],
    items: [
      "If we are required to by a regulator, a court, or Nigerian law.",
      "If we have good reason to believe the account is being used for fraud or crime.",
      "If the account is not the person it claims to be, or the same person holds several.",
      "If we cannot verify your identity when the law requires us to.",
    ],
  },
  {
    id: "closing",
    title: "Closing your account",
    paras: [
      "You can close it at any time in the app. Withdraw your balance first. If any remains, we will return it to a bank account in your name.",
      "If we close the service down entirely, your money is unaffected. It is held at our partner institution and it remains yours; we will give you at least 30 days’ notice and a way to move it out.",
    ],
  },
  {
    id: "complaints",
    title: "If we get it wrong",
    paras: [
      "Write to us first. Most things are fixed the same day. If we cannot resolve it within 14 days, you can escalate to the Central Bank of Nigeria’s consumer protection department, and nothing in these terms takes that right away.",
      "Nigerian law governs this agreement, and Nigerian courts have jurisdiction.",
    ],
  },
  {
    id: "changes",
    title: "When these change",
    paras: [
      "If we change something that affects you, you will see it in the app before it takes effect, with at least 14 days’ notice for anything material. The date at the top of this page is always the version you are agreeing to.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      kind="Terms"
      effective="8 September 2026"
      headline={
        <>
          What you can
          <br />
          expect of us.
          <br />
          And us of you.
        </>
      }
      intro="The agreement between you and Trafast, written to be read. It is the whole agreement. There is no denser version behind it."
      sections={SECTIONS}
      contact={{
        heading: "Something unclear?",
        body: "Ask before you agree, not after. A real person answers, and if a line reads badly we rewrite it.",
        secondaryLabel: "Read the privacy policy",
        secondaryTo: "/privacy",
      }}
    />
  );
}
