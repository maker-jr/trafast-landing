import LegalPage, { type LegalSection } from "./legal-page";

/**
 * Section 01 describes this website as it actually is today, and was written
 * against the code rather than from the design handoff: a waitlist form that
 * posts one email address to Resend, cookieless analytics, and a language
 * preference kept on the visitor's own device.
 *
 * Sections 02 onwards describe the app, and take effect when it launches.
 * They came from the handoff and still need a lawyer's eye before then.
 */
const SECTIONS: LegalSection[] = [
  {
    id: "site",
    title: "This website, today",
    paras: [
      "The Trafast app has not launched. Right now this site does one thing: it takes an email address so we can tell you when it does. That is worth separating from everything below, which describes the app.",
      "We use no cookies, so there is no banner to dismiss. Nothing here follows you to another site.",
    ],
    items: [
      "Your email address, if you join the waitlist. It is held by Resend, our email provider, so we can send you one announcement on launch day. Every email we send carries an unsubscribe link, and leaving the list deletes the address.",
      "Anonymous usage statistics, through Umami: which sections of the page people reach, which language they choose, whether they open the waitlist. No cookies, no device fingerprint, nothing that can be traced back to a person.",
      "Your language choice, saved in your browser on your own device. It never reaches us.",
      "Standard server records kept by Netlify, who host the site, including the IP address a request came from. Your IP is also used for a moment to rate-limit the signup form, and is not stored by us.",
    ],
  },
  {
    id: "processors",
    title: "Who processes it, and where",
    paras: [
      "Three companies handle data on our behalf for this website. All three are outside Nigeria, which the Nigeria Data Protection Act permits provided we tell you, so here it is.",
    ],
    items: [
      "Resend, in the United States, holds the waitlist email addresses.",
      "Umami, in the European Union, receives the anonymous usage statistics.",
      "Netlify, in the United States, hosts the site and keeps the server records.",
    ],
  },
  {
    id: "what",
    title: "What the app will collect",
    paras: [
      "Everything from here on describes the Trafast app, and applies once it launches. None of it is collected by this website.",
      "Only what a licensed payment service is required to hold, or what the app cannot work without. Nothing collected “just in case”.",
    ],
    items: [
      "Who you are: your name, date of birth, phone number, email and the ID document your tier requires. Nigerian law requires this of every financial service.",
      "What you pay: the amount, the date, and who was on the other side. This is your statement, and you can see every line of it in the app.",
      "Your phone: the device model and a security key your phone generates. We use this to confirm the same phone is still yours.",
    ],
  },
  {
    id: "whatnot",
    title: "What we do not collect",
    paras: ["Some things people expect us to take, that we do not."],
    items: [
      "Your face or fingerprint. Your phone checks it and tells us yes or no. The biometric never reaches us.",
      "Your contacts, unless you ask us to find a payee in them, and then only the one you pick.",
      "Your location, beyond the country your phone reports for fraud checks. We do not track where you are.",
      "What you buy. We see that you paid a person or a business, not what was in the bag.",
    ],
  },
  {
    id: "offline",
    title: "Offline payments",
    paras: [
      "This is the part that is specific to Trafast, so it deserves its own section.",
      "When you pay with no network, the payment is agreed directly between two phones. Nothing travels to us at that moment, because nothing can. The record is written on both phones at once, and that record is what makes it final.",
      "When either phone next has a network, it sends us the record so your statement and balance are up to date. If you were offline for two days, we learn about those payments two days late. That does not change whether they happened. They were already final.",
    ],
  },
  {
    id: "why",
    title: "Why we hold it",
    paras: ["Every piece of data has a reason. If a reason ends, so does the holding."],
    items: [
      "To move your money and show you an honest record of it.",
      "To keep the account yours, by spotting a phone that is not yours, a pattern that is not you.",
      "To satisfy the CBN, the NDPC and the law we operate under. Some records we must keep even if you ask us not to.",
      "To answer you when you contact us, and to fix the app when it breaks.",
    ],
  },
  {
    id: "share",
    title: "Who else sees it",
    paras: ["A short list, and it does not include advertisers."],
    items: [
      "Our partner financial institution, which holds and insures your balance.",
      "The banks and payment networks on the other side of a transfer, which need the name and the amount to accept it.",
      "Identity and fraud services, to check that your ID is real and your account is not being taken over.",
      "Regulators and courts, when the law requires it. We tell you when we are allowed to.",
    ],
  },
  {
    id: "keep",
    title: "How long we keep it",
    paras: [
      "A waitlist email is kept until you unsubscribe or we launch and you decide not to join us.",
      "Account data lives as long as your account does. When you close it, we delete what we can and keep only what the law makes us keep. For financial records in Nigeria, that is seven years from your last payment.",
      "Support conversations are deleted after two years. Device security keys are deleted the moment you sign that phone out.",
    ],
  },
  {
    id: "rights",
    title: "What you can do",
    paras: [
      "These are rights under the Nigeria Data Protection Act, and you do not need to give a reason. They apply to the waitlist as much as to an account.",
    ],
    items: [
      "See everything we hold about you, as a file you can download.",
      "Correct anything that is wrong.",
      "Delete your account and everything we are not legally required to keep.",
      "Object to how we use something, and get a human answer rather than an automated one.",
      "Complain to the Nigeria Data Protection Commission if we let you down.",
    ],
  },
  {
    id: "changes",
    title: "When this changes",
    paras: [
      "If we change something that matters, you will see it in the app before it takes effect, not buried in an email. The date at the top of this page is always the version you are reading.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      kind="Privacy"
      effective="8 September 2026"
      headline={
        <>
          Your money is
          <br />
          yours. So is
          <br />
          your data.
        </>
      }
      intro="This is the plain-language version, and it is the real policy. If a line here is unclear, that is our failure, not yours. Write to us and we will fix the wording."
      highlights={[
        {
          title: "We never sell your data.",
          body: "Not to advertisers, not to data brokers, not to anyone. There is no version of Trafast where we do.",
        },
        {
          title: "Offline payments stay on your phone.",
          body: "When you pay with no network, the record lives on both phones. We only see it once you reconnect.",
        },
        {
          title: "Your face and fingerprint never leave your phone.",
          body: "Your phone tells us you passed. It never sends us the biometric itself.",
        },
      ]}
      sections={SECTIONS}
      contact={{
        heading: "Ask us anything.",
        body: "A real person answers. Tell us what you want deleted, corrected or explained and we will do it.",
        secondaryLabel: "Read the terms",
        secondaryTo: "/terms",
      }}
    />
  );
}
