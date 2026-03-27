"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const ResumeButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed top-5 right-8 z-[100] hidden md:block"
    >
      <a 
        href="/cv.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/20 px-6 py-3 rounded-full transition-all duration-500 group shadow-2xl"
      >
        <span className="text-white/40 group-hover:text-white text-[10px] uppercase tracking-[0.2em] font-bold transition-colors">Resume</span>
        <div className="p-2 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-all">
          <ExternalLink size={14} className="text-blue-400" />
        </div>
      </a>
    </motion.div>
  );
};
