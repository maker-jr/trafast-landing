"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: NodeJS.Timeout | undefined;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  autoFlip = true,
  flipInterval = 8000,
  showControls = true,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  autoFlip?: boolean;
  flipInterval?: number;
  showControls?: boolean;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (autoFlip) {
      startFlipping();
    }

    return () => clearInterval(interval);
  }, [autoFlip, flipInterval]);

  const startFlipping = () => {
    interval = setInterval(() => {
      if (!isPaused) {
        setCards((prevCards: Card[]) => {
          const newArray = [...prevCards];
          newArray.unshift(newArray.pop()!);
          return newArray;
        });
      }
    }, flipInterval);
  };

  const pauseAutoFlip = () => {
    setIsPaused(true);
  };

  const resumeAutoFlip = () => {
    setIsPaused(false);
  };

  const goToNext = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop()!);
      return newArray;
    });
  };

  const goToPrevious = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      newArray.push(newArray.shift()!);
      return newArray;
    });
  };

  return (
    <div className="relative">
      <div className="relative h-80 w-80 md:h-80 md:w-[28rem]">
        {cards.map((card, index) => {
          return (
            <motion.div
              key={card.id}
              className="absolute bg-white/90 backdrop-blur-sm h-80 w-80 md:h-80 md:w-[28rem] rounded-3xl p-6 shadow-xl border border-gray-200/50 shadow-black/[0.1] flex flex-col justify-between cursor-pointer"
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: cards.length - index,
              }}
              onClick={() => goToNext()}
              onMouseEnter={pauseAutoFlip}
              onMouseLeave={resumeAutoFlip}
            >
              <div className="font-normal text-gray-700 text-lg leading-relaxed">
                {card.content}
              </div>
              <div>
                <p className="text-gray-600 font-semibold text-lg">
                  {card.name}
                </p>
                <p className="text-gray-500 font-normal">
                  {card.designation}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Control Buttons */}
      {showControls && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToPrevious}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:bg-white transition-colors"
            title="Previous card"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/*<motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={isPaused ? resumeAutoFlip : pauseAutoFlip}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:bg-white transition-colors"
            title={isPaused ? "Resume auto-flip" : "Pause auto-flip"}
          >
            {isPaused ? (
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </motion.button>*/}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToNext}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:bg-white transition-colors"
            title="Next card"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      )}
    </div>
  );
}; 