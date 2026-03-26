"use client";

import { motion } from "framer-motion";

export const HeroScrollLine = () => (
  <motion.div 
    initial={{ height: 0 }}
    animate={{ height: 40 }}
    transition={{ delay: 1, duration: 1 }}
    className="w-px bg-gradient-to-b from-white/20 to-transparent"
  />
);
