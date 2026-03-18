"use client";

import { motion } from "framer-motion";
import TargetCursor from "@/shared/components/TargetCursor";
import CardSwap, { Card } from "@/shared/components/CardSwap";
import { CardStack } from "@/shared/components/CardStack";
import { Highlight } from "@/shared/components/Highlight";
import { Carousel, Card as CarouselCard } from "@/shared/components/Carousel";
import EmailSignup from "@/shared/components/EmailSignup";
import brandImage from "@/assets/images/brand.png";
import feature1 from "@/assets/images/feature-1-masked.png";
import feature2 from "@/assets/images/feature-2-masked.png";
import feature3 from "@/assets/images/feature-3-masked.png";
import feature4 from "@/assets/images/feature-4-masked.png";

const CARD_DATA = [
  {
    id: 0,
    content: (
      <p>
        <span className="text-4xl text-gray-300 mr-2">"</span>
        I saved ₦500,000 for my son’s school fees in January. By the time school
        resumed in August, fees had gone up and{" "}
        <Highlight>my savings couldn’t cover it anymore</Highlight>. I didn’t
        spend the money—it just lost value sitting in the bank.
        <span className="text-4xl text-gray-300 ml-2">"</span>
      </p>
    ),
  },
  {
    id: 1,
    content: (
      <p>
        <span className="text-4xl text-gray-300 mr-2">"</span>
        My mom kept her cash under the bed because she didn’t trust banks. I
        thought I was smarter using a digital bank. But now I’m watching the
        naira <Highlight>lose value faster than I can earn</Highlight>. I want a
        wallet that protects like gold but works like cash.
        <span className="text-4xl text-gray-300 ml-2">"</span>
      </p>
    ),
  },
  {
    id: 2,
    content: (
      <p>
        <span className="text-4xl text-gray-300 mr-2">"</span>
        I don’t want my savings tied to{" "}
        <Highlight>interest or risky bets</Highlight>. Crypto feels like
        gambling, and bank interest either feels wrong or too little to matter.
        I just want my money to keep its value without me becoming a trader.
        <span className="text-4xl text-gray-300 ml-2">"</span>
      </p>
    ),
  },
  {
    id: 3,
    content: (
      <p>
        <span className="text-4xl text-gray-300 mr-2">"</span>
        I work in Dubai and send money home to my family every month. But by the
        time they withdraw it,{" "}
        <Highlight>inflation has eaten away part of it</Highlight>. If I could
        send it in gold, my family would get the full value of my hard work.
        <span className="text-4xl text-gray-300 ml-2">"</span>
      </p>
    ),
  },
  {
    id: 4,
    content: (
      <p>
        <span className="text-4xl text-gray-300 mr-2">"</span>
        I did everything right—saved faithfully each month. But now food, fuel,
        and medicine cost three times more.{" "}
        <Highlight>My retirement savings are shrinking in real value</Highlight>
        , even though the balance looks bigger on paper.
        <span className="text-4xl text-gray-300 ml-2">"</span>
      </p>
    ),
  },
  {
    id: 5,
    content: (
      <p>
        <span className="text-4xl text-gray-300 mr-2">"</span>
        I’m saving for my 2-year-old’s future—maybe education abroad. But I keep
        thinking: in 10 years,{" "}
        <Highlight>what looks like a lot now might buy very little</Highlight>. I
        need a wallet that stores real value, not just digits.
        <span className="text-4xl text-gray-300 ml-2">"</span>
      </p>
    ),
  },
  {
    id: 6,
    content: (
      <p>
        <span className="text-4xl text-gray-300 mr-2">"</span>
        I keep some money in the bank for bills and transfers. But the rest, I
        try to move into anything that won’t lose value. Gold makes sense—but
        it’s not spendable. What if my wallet could{" "}
        <Highlight>think like gold but act like cash</Highlight>?
        <span className="text-4xl text-gray-300 ml-2">"</span>
      </p>
    ),
  },
  {
    id: 7,
    content: (
      <p>
        <span className="text-4xl text-gray-300 mr-2">"</span>
        I avoid interest-based accounts because of my faith. But that leaves me
        with limited options—cash that loses value or banks that don’t feel
        right. I just want{" "}
        <Highlight>a fair way to save that aligns with my values</Highlight> and
        protects my money at the same time.
        <span className="text-4xl text-gray-300 ml-2">"</span>
      </p>
    ),
  },
];


export default function LandingPage() {
  return (
    <div className="bg-[#E5E5E5] text-black font-body min-h-screen relative overflow-y-hidden">
      {/* Custom Target Cursor - Desktop Only */}
      <div className="hidden lg:block">
        <TargetCursor
          spinDuration={3}
          hideDefaultCursor={true}
          targetSelector=".cursor-target"
        />
      </div>

      {/* Animated Light Rays Background */}
      {/*<div className="fixed inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#BF9B30"
          raysSpeed={0.8}
          lightSpread={0.6}
          rayLength={1.8}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.05}
          distortion={0.02}
          fadeDistance={0.9}
          saturation={0.3}
          className="opacity-35"
        />
      </div>*/}

      {/* Hero Section with integrated navbar */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Footer */}
      <footer className="relative bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                {/*<img src={logoImage} alt="Trafast" className="h-6 w-auto" />*/}
                <img src={brandImage} alt="Trafast" className="h-4 lg:h-6 w-auto" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                Banking built to keep value. Your money maintains its purchasing
                power, protected from inflation and currency devaluation.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-100 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 sm:mb-0">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            <div className="text-sm text-gray-500">
              © 2025 Trafast. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeaturesSection() {
  const bankingFeatures = [
    {
      category: "Your money. Still worth money.",
      title: "Keeps your purchasing power intact, year after year.",
      src: feature1,
      content: (
        <BankingFeatureContent feature="Your money. Still worth money." />
      ),
    },
    {
      category: "Spend it like cash.",
      title: "Pay, shop, and transfer — no locks, unlimited possibilities.",
      src: feature2,
      content: <BankingFeatureContent feature="Spend it like cash." />,
    },
    {
      category: "It just works.",
      title: "Your balance adjusts automatically. No charts. No stress.",
      src: feature3,
      content: <BankingFeatureContent feature="It just works." />,
    },
    {
      category: "No guesswork.",
      title: "Clear fees. Clear value. What you see is yours to spend.",
      src: feature4,
      content: <BankingFeatureContent feature="No guesswork." />,
    },
  ];

  const cards = bankingFeatures.map((card, index) => (
    <CarouselCard key={card.src} card={card} index={index} layout />
  ));

  return (
    <section
      id="features-section"
      className="py-20 sm:py-32 bg-white relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <h2 className="max-w-7xl mx-auto text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-heading">
          <span className="text-gray-800">Get to know</span> <span className="font-bold text-[#BF9B30]">Trafast</span>.
        </h2>
        <p className="w-full lg:w-1/2 text-gray-600 text-sm sm:text-md md:text-lg lg:text-xl font-body font-light max-w-3xl mx-auto lg:mx-0 mt-2 lg:mt-4 mb-8 sm:mb-12 leading-relaxed">
          Replace your bank account with one that protects your deposits and
          grows with the long-term strength of real gold.
        </p>
        {/* Carousel */}
        <Carousel items={cards} />

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-center mt-16 sm:mt-20"
        >
          <EmailSignup buttonText="Join the Waitlist" />
        </motion.div>
      </div>
    </section>
  );
}

function BankingFeatureContent({ feature }: { feature: string }) {
  const getFeatureImage = (featureName: string) => {
    switch (featureName) {
      case "Your money. Still worth money.":
        return feature1;
      case "Spend it like cash.":
        return feature2;
      case "It just works.":
        return feature3;
      case "No guesswork.":
        return feature4;
      default:
        return feature1;
    }
  };

  const getFeatureDescription = (featureName: string) => {
    switch (featureName) {
      case "Your money. Still worth money.":
        return "Your money maintains its real value over time, protected from inflation and currency devaluation.";
      case "Spend it like cash.":
        return "Use your money for everything you need—bills, shopping, transfers—with the same convenience as cash.";
      case "It just works.":
        return "No complex charts, no market timing, no speculation. Your balance automatically adapts to preserve value.";
      case "No guesswork.":
        return "See exactly what you have, what it's worth, and what you can spend. No hidden fees or surprises.";
      default:
        return "Trafast combines the stability of gold with the convenience of modern banking.";
    }
  };

  const getFeatureDescription2 = (featureName: string) => {
    switch (featureName) {
      case "Your money. Still worth money.":
        return "Trafast combines the stability of gold with the convenience of modern banking. Your money works smarter, not harder.";
      case "Spend it like cash.":
        return "Whether you’re buying groceries, booking flights, or paying friends, Trafast works everywhere your money should.";
      case "It just works.":
        return "Just simple, automatic value protection in the background.";
      case "No guesswork.":
        return "— what you see in your wallet is truly yours to spend.";
      default:
        return "Trafast combines the stability of gold with the convenience of modern banking.";
    }
  };

  return (
    <>
      <div className="bg-[#F5F5F7] p-8 md:p-14 md:pb-0 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-body max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">
            {getFeatureDescription(feature)}
          </span>{" "}
          {getFeatureDescription2(feature)}
        </p>
        <img
          src={getFeatureImage(feature)}
          alt={`Trafast ${feature} feature`}
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    </>
  );
}

function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col relative z-10">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-8 sm:py-12">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/*<img
                src={logoImage}
                alt="Trafast"
                className="h-8 sm:h-8 lg:h-12 w-auto cursor-target mr-2"
              />*/}
              <img
                src={brandImage}
                alt="Trafast"
                className="h-6 sm:h-6 lg:h-10 w-auto cursor-target"
              />
            </motion.div>

            {/* Right Section */}
            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Status Indicator */}
              <div className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/50 backdrop-blur-sm rounded-full border border-gray-200/30">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-600">
                  Coming Soon
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Content - Two Column Layout */}
      <div className="flex-1 flex items-center justify-center pt-16 sm:pt-0 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Column - Main Text */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[6rem] text-gray-800 font-heading font-light tracking-tight leading-[0.9] mb-8 sm:mb-12"
              >
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="mb-4"
                >
                  Bank on Gold,
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  not promises.
                </motion.div>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="w-32 sm:w-full h-[1px] bg-gray-300 mx-auto lg:mx-0 mb-8 sm:mb-12"
              ></motion.div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-gray-600 text-lg sm:text-xl md:text-2xl lg:text-3xl font-body font-light max-w-3xl mx-auto lg:mx-0 mb-8 sm:mb-12 leading-relaxed"
              >
                Transact and protect your savings with Trafast — a modern
                <span className="font-bold text-[#BF9B30] font-body"> alternative</span> to inflation and interest-based banking.
              </motion.p>

              <EmailSignup buttonText="Email me when it's ready" />
            </motion.div>

            {/* Right Column - Responsive Cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex justify-center lg:justify-end"
            >
              {/* Mobile: CardStack */}
              <div className="block lg:hidden my-24 mb-32">
                <CardStack
                  items={CARD_DATA.map((card) => ({
                    id: card.id,
                    name: "",
                    designation: "",
                    content: card.content,
                  }))}
                  autoFlip={true}
                  flipInterval={6000}
                  showControls={true}
                />
              </div>

              {/* Desktop: CardSwap */}
              <div className="hidden lg:block">
                <CardSwap
                  width={500}
                  height={350}
                  delay={4000}
                  pauseOnHover={true}
                >
                  {CARD_DATA.map((card) => (
                    <Card
                      key={card.id}
                      className="bg-white/90 backdrop-blur-sm border-gray-200/50 p-8 flex items-center justify-center"
                    >
                      <div className="font-normal text-gray-700 text-xl leading-relaxed text-center">
                        {card.content}
                      </div>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.0,
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={() => {
            document.getElementById("features-section")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="group flex flex-col items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-target"
        >
          <span className="text-xs font-medium tracking-wide uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-6"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
