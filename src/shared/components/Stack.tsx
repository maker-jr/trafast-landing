import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

function CardRotate({
  children,
  onSendToBack,
  sensitivity,
}: {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: unknown, info: { offset: { x: number; y: number } }) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

interface CardData {
  id: number;
  content: React.ReactNode;
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?: { width: number; height: number };
  cardsData?: CardData[];
  animationConfig?: { stiffness: number; damping: number };
  sendToBackOnClick?: boolean;
  autoSwipe?: boolean;
  autoSwipeInterval?: number;
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  autoSwipe = false,
  autoSwipeInterval = 4000,
}: StackProps) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
          { id: 1, content: <div className="p-4">Default content 1</div> },
          { id: 2, content: <div className="p-4">Default content 2</div> },
          { id: 3, content: <div className="p-4">Default content 3</div> },
          { id: 4, content: <div className="p-4">Default content 4</div> },
        ]
  );

  const [isPaused, setIsPaused] = useState(false);

  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  // Auto-swipe functionality
  useEffect(() => {
    if (!autoSwipe || cards.length <= 1) return;

    const interval = setInterval(() => {
      if (!isPaused) {
        sendToBack(cards[cards.length - 1].id);
      }
    }, autoSwipeInterval);

    return () => clearInterval(interval);
  }, [autoSwipe, autoSwipeInterval, cards, isPaused]);

  // Pause auto-swipe on hover/touch
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className="relative"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 - index * 0.05,
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
              }}
            >
              <div className="relative w-full h-full p-6 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  {card.content}
                </div>
              </div>
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
