"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QUOTES = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Experience is the name everyone gives to their mistakes.",
  "In order to be irreplaceable, one must always be different.",
  "Java is to JavaScript what car is to Carpet.",
  "Knowledge is power. Information is liberating.",
  "Simplicity is the soul of efficiency.",
  "The only way to do great work is to love what you do.",
  "Stay hungry, stay foolish.",
  "Make it work, make it right, make it fast."
];

export const Loader = () => {
  const [quote, setQuote] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
    
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center p-6"
        >
          <div className="relative flex flex-col items-center">
            {/* Premium Loader Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-24 h-24 mb-10"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 border-r-purple-500"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border-2 border-transparent border-t-blue-400/30 border-l-purple-400/30"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full animate-ping" />
              </div>
            </motion.div>

            {/* Quote Animation */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-white/80 text-lg md:text-xl lg:text-2xl font-light italic text-center max-w-2xl leading-relaxed"
            >
              "{quote}"
            </motion.p>

            {/* Progress bar */}
            <div className="mt-12 w-48 h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "linear" }}
                className="h-full bg-blue-500"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
