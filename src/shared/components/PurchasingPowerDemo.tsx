import { motion } from "framer-motion";
import { useState } from "react";
import FallingText from "./FallingText";

const PurchasingPowerDemo = () => {
  const [currentPhase, setCurrentPhase] = useState<"2022" | "2025">("2022");

  const items2022 = [
    "A bag of rice",
    "Full fuel tank", 
    "Electricity for 3 months",
    "Monthly groceries",
    "Phone data for 6 months",
    "Bus fare for 2 months",
    "New pair of shoes",
    "Dinner for the family"
  ];

  const items2025 = [
    "Half bag of rice",
    "Half fuel tank",
    "Electricity for 1 month", 
    "Basic groceries for 2 weeks"
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Main headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
          Say you have{" "}
          <span className="font-medium">₦50,000</span>
          <br />
          in your bank account in 2022
        </h2>
        <p className="text-lg text-gray-600 font-light">
          Here's what you could buy
        </p>
      </motion.div>

      {/* Interactive items section */}
      <div className="min-h-[600px] relative">
        {currentPhase === "2022" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            {/* Randomly positioned items that appear as user scrolls */}
            {items2022.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-50px" }}
                className={`absolute text-lg md:text-xl font-light text-gray-700 ${getRandomPosition(index)}`}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Trigger for 2025 transition */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => {
            setTimeout(() => setCurrentPhase("2025"), 1000);
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-200px" }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            In 2025?
          </h3>
        </motion.div>

        {/* Falling text for 2025 */}
        {currentPhase === "2025" && (
          <div className="absolute inset-0 h-[600px]">
            <FallingText
              text={items2025.join(" ")}
              trigger="auto"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.8}
              fontSize="1.2rem"
              mouseConstraintStiffness={0.1}
            />
          </div>
        )}
      </div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mt-20"
      >
        <p className="text-gray-500 font-light text-lg">
          Same money, half the purchasing power
        </p>
      </motion.div>
    </div>
  );
};

// Helper function to get random positions for items
const getRandomPosition = (index: number) => {
  const positions = [
    "top-10 left-10",
    "top-20 right-20", 
    "top-32 left-1/3",
    "top-16 right-1/3",
    "top-44 left-20",
    "top-52 right-10",
    "top-64 left-1/2 transform -translate-x-1/2",
    "top-40 right-1/4"
  ];
  return positions[index % positions.length];
};

export default PurchasingPowerDemo; 