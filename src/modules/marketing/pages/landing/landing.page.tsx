import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

import "./landing.css";
import {
  AUDIENCE_COPY,
  BEAT_PLAN,
  STEPS,
  STEP_DURATIONS,
  type Audience,
} from "./landing.data";
import {
  scrollToId,
  scrollToSignup,
  useLandingMotion,
  useSmoothWheel,
} from "./use-landing-motion";
import SiteNav from "./sections/site-nav";
import Hero from "./sections/hero";
import Recognition from "./sections/recognition";
import HowItWorks from "./sections/how-it-works";
import Security from "./sections/security";
import Everyday from "./sections/everyday";
import Business, { BusinessIntro } from "./sections/business";
import Faq from "./sections/faq";
import SiteFooter from "./sections/site-footer";
import type { PhoneVals } from "./sections/phone-mock";

/** Flip to true once the apps are in the stores; swaps the waitlist for store links. */
const LIVE = false;

const prefersReducedMotion = () =>
  !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Derives everything the sticky phone shows from the current beat and phase. */
function phoneVals(beat: number, phase: number): PhoneVals {
  const offline = beat === 1 || beat === 2 || beat === 3;
  const ready = beat !== 0 || phase >= 1;
  const synced = beat === 4 && phase >= 1;
  const home = beat === 0 || beat === 1 || beat === 4;
  const nearby = beat === 2 || (beat === 3 && phase === 0);
  const confirm = (beat === 2 && phase >= 1) || (beat === 3 && phase === 0);
  const holding = beat === 3 && phase === 0;
  const bar = ready ? "#1F6B4A" : "#C6DCCE";

  return {
    home,
    nearby,
    success: beat === 3 && phase >= 1,
    offline: offline && home,
    sig1: offline ? "#C8402F" : "currentColor",
    sig2: offline ? "rgba(42,33,27,0.22)" : "currentColor",
    syncing: (beat === 0 && phase === 0) || (beat === 4 && phase === 0),
    synced,
    balance: synced ? "4,959,544" : "4,964,544",
    readyBg: offline ? "#FAEFE8" : "#EDF4EF",
    readyMuted: offline ? "#8A5233" : "#57705F",
    readyTitle: offline ? "Paying without data" : ready ? "Pay without data" : "Getting ready",
    readySub: offline
      ? "₦30,000 left"
      : ready
        ? "Up to ₦30,000, no internet needed"
        : "Setting money aside on this phone",
    bars: [bar, bar, bar, bar],
    link: beat === 2 && phase === 0,
    confirm,
    nearTitle: confirm ? "Ada Obi" : "Reaching Ada’s phone",
    nearSub: confirm
      ? "8106 4420 31"
      : "No internet involved — the phones are talking to each other.",
    nearFoot: confirm
      ? "Covered by what’s set aside on this phone."
      : "Keep the phones close.",
    holdWidth: holding ? "100%" : "0%",
    holdColor: holding ? "#FBF8F2" : "#2A211B",
    holdLabel: holding ? "Paying…" : "Hold to pay",
  };
}

export default function LandingPage() {
  const [audience, setAudience] = useState<Audience>("personal");
  const [stepIndex, setStepIndex] = useState(0);
  const [stall, setStall] = useState(47);
  const [beat, setBeat] = useState(0);
  const [phase, setPhase] = useState(0);
  const [biz, setBiz] = useState(0);

  const stepIndexRef = useRef(0);
  stepIndexRef.current = stepIndex;
  const beatTimers = useRef<number[]>([]);

  // The hero pay button cycles ready → holding → pending → done.
  useEffect(() => {
    if (prefersReducedMotion()) {
      setStepIndex(3);
      return;
    }
    let timer = 0;
    const schedule = () => {
      timer = window.setTimeout(() => {
        setStepIndex((s) => (s + 1) % 4);
        schedule();
      }, STEP_DURATIONS[stepIndexRef.current]);
    };
    schedule();
    return () => clearTimeout(timer);
  }, []);

  // The stalled bank transfer in the recognition section.
  useEffect(() => {
    const id = window.setInterval(
      () => setStall((s) => (s >= 78 ? 47 : s + 1)),
      1000
    );
    return () => clearInterval(id);
  }, []);

  // The business card's running sales tally.
  useEffect(() => {
    const id = window.setInterval(() => setBiz((b) => (b + 1) % 6), 7000);
    return () => clearInterval(id);
  }, []);

  const enterBeat = useCallback((next: number) => {
    beatTimers.current.forEach(clearTimeout);
    beatTimers.current = [];
    setBeat(next);
    setPhase(0);
    let acc = 0;
    (BEAT_PLAN[next] || []).forEach((ms, i) => {
      acc += ms;
      beatTimers.current.push(window.setTimeout(() => setPhase(i + 1), acc));
    });
  }, []);

  useEffect(() => () => beatTimers.current.forEach(clearTimeout), []);

  useLandingMotion(enterBeat);
  useSmoothWheel();

  const copy = AUDIENCE_COPY[audience];
  const step = STEPS[stepIndex];
  const phone = phoneVals(beat, phase);
  const biznes = audience === "business";

  const onCta = (e: MouseEvent) => {
    if (LIVE) return;
    e.preventDefault();
    scrollToSignup();
  };

  const jump = (id: string, next?: Audience) => (e: MouseEvent) => {
    e.preventDefault();
    if (next) {
      setAudience(next);
      setStepIndex(0);
    }
    scrollToId(id);
  };

  return (
    <div className="tf-landing">
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "#FBF8F2",
          overflow: "hidden",
        }}
      >
        <SiteNav
          audience={audience}
          navCta={LIVE ? copy.navCta : "Early access"}
          onPersonal={() => {
            setAudience("personal");
            setStepIndex(0);
          }}
          onBusiness={() => {
            setAudience("business");
            setStepIndex(0);
            scrollToId("business");
          }}
          onHow={jump("how-it-works")}
          onSecurity={jump("security")}
          onCta={onCta}
        />
        <Hero
          copy={copy}
          step={step}
          primaryCta={LIVE ? copy.primaryCta : biznes ? "Join the waitlist" : "Get early access"}
          qrTag={biznes ? "@yourshop" : "@mamankechi"}
          onCta={onCta}
        />
      </div>

      <Recognition
        stallTimer={`${Math.floor(stall / 60)}:${String(stall % 60).padStart(2, "0")}`}
        stallLabel={stall >= 70 ? "Transaction failed" : "Processing…"}
        stallTone={stall >= 70 ? "#C8402F" : "#2A211B"}
        stallBtnLabel={stall >= 70 ? "Try again" : "Please wait"}
        stallBtnBg={stall >= 70 ? "#2A211B" : "#F0EADE"}
        stallBtnColor={stall >= 70 ? "#FBF8F2" : "#A79E93"}
      />

      <HowItWorks beat={beat} phone={phone} />
      <Security />
      <Everyday />
      <BusinessIntro />
      <Business
        bizTotal={(128500 + biz * 4500).toLocaleString("en-NG")}
        bizCount={String(41 + biz)}
        bizOfflineCount={String(17 + biz)}
        bizSyncLabel={biz % 2 === 0 ? "Up to date" : "Syncs on reconnect"}
      />
      <Faq />
      <SiteFooter
        live={LIVE}
        goPersonal={jump("top", "personal")}
        goBusiness={jump("business", "business")}
        goHow={jump("how-it-works")}
        goSecurity={jump("security")}
        goFaq={jump("faq")}
      />
    </div>
  );
}
