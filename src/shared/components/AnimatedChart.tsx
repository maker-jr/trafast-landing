import { motion } from "framer-motion";
import { useState } from "react";

interface DataPoint {
  year: string;
  value: number;
  label: string;
}

const AnimatedChart = () => {
  const [isVisible, setIsVisible] = useState(false);

  const data: DataPoint[] = [
    { year: "2019", value: 100, label: "₦100,000" },
    { year: "2020", value: 85, label: "₦85,000" },
    { year: "2021", value: 70, label: "₦70,000" },
    { year: "2022", value: 60, label: "₦60,000" },  
    { year: "2023", value: 55, label: "₦55,000" },
    { year: "2024", value: 50, label: "₦50,000" },
  ];

  // Generate smooth curve path
  const generatePath = (data: DataPoint[], width: number, height: number) => {
    const padding = 60;
    const chartWidth = width - (padding * 2);
    const chartHeight = height - (padding * 2);
    
    const points = data.map((point, index) => {
      const x = padding + (index / (data.length - 1)) * chartWidth;
      const y = padding + (1 - point.value / 100) * chartHeight;
      return { x, y };
    });

    // Create smooth curve using cubic bezier
    let path = `M ${points[0].x} ${points[0].y}`;
    
    for (let i = 1; i < points.length; i++) {
      const prevPoint = points[i - 1];
      const currentPoint = points[i];
      const nextPoint = points[i + 1];
      
      // Calculate control points for smooth curve
      const controlX1 = prevPoint.x + (currentPoint.x - prevPoint.x) * 0.3;
      const controlY1 = prevPoint.y;
      const controlX2 = currentPoint.x - (nextPoint ? (nextPoint.x - currentPoint.x) * 0.3 : (currentPoint.x - prevPoint.x) * 0.3);
      const controlY2 = currentPoint.y;
      
      path += ` C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${currentPoint.x} ${currentPoint.y}`;
    }
    
    return path;
  };

  const width = 800;
  const height = 300;
  const path = generatePath(data, width, height);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        onViewportEnter={() => setIsVisible(true)}
        className="text-center mb-20"
      >
        <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
          Here's what that means
        </h2>
        <p className="text-gray-600">
          Purchasing power of ₦100,000 over time
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <svg
          width="100%"
          height="300"
          viewBox={`0 0 ${width} ${height}`}
          className="overflow-visible"
        >
          {/* Subtle grid lines */}
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9ca3af" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#9ca3af" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Area under curve */}
          <motion.path
            d={`${path} L ${width - 60} ${height - 60} L 60 ${height - 60} Z`}
            fill="url(#areaGradient)"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Main curve line */}
          <motion.path
            d={path}
            fill="none"
            stroke="#9ca3af"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          />

          {/* Data points */}
          {data.map((point, index) => {
            const padding = 60;
            const chartWidth = width - (padding * 2);
            const chartHeight = height - (padding * 2);
            const x = padding + (index / (data.length - 1)) * chartWidth;
            const y = padding + (1 - point.value / 100) * chartHeight;

            return (
              <g key={index}>
                <motion.circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#9ca3af"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }}
                />
                
                {/* Year labels */}
                <motion.text
                  x={x}
                  y={height - 20}
                  textAnchor="middle"
                  className="text-sm fill-gray-600 font-light"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 2 + index * 0.05 }}
                >
                  {point.year}
                </motion.text>

                {/* Value labels */}
                <motion.text
                  x={x}
                  y={y - 12}
                  textAnchor="middle"
                  className="text-xs fill-gray-500 font-light"
                  initial={{ opacity: 0, y: -10 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: 2.2 + index * 0.05 }}
                >
                  {point.value}%
                </motion.text>
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* Summary text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center"
      >
        <p className="text-gray-500 font-light">
          ~50% purchasing power decline over 5 years
        </p>
      </motion.div>
    </div>
  );
};

export default AnimatedChart; 