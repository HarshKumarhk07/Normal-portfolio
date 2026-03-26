"use client";

import React from "react";
import { motion } from "framer-motion";

export const ProfileCodeBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-[700px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0d1117]/80 backdrop-blur-xl group hover:border-blue-500/30 transition-all duration-500"
    >
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22]/50 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-[10px] text-white/30 font-mono tracking-widest uppercase">
          ~/developer/profile.json
        </div>
        <div className="w-12" /> {/* Spacer */}
      </div>

      {/* Code Content */}
      <div className="p-8 md:p-10 font-mono text-sm md:text-base leading-relaxed overflow-hidden">
        <div className="flex gap-4">
          <span className="text-white/20 select-none hidden sm:block">1</span>
          <p>
            <span className="text-[#ff79c6]">const</span>{" "}
            <span className="text-[#8be9fd]">profile</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-white">{"{"}</span>
          </p>
        </div>
        
        <div className="flex gap-4 mt-1">
          <span className="text-white/20 select-none hidden sm:block">2</span>
          <p className="pl-4">
            <span className="text-[#f1fa8c]">name</span>
            <span className="text-white">:</span>{" "}
            <span className="text-[#50fa7b]">&apos;Harsh Kumar Singh&apos;</span>
            <span className="text-white">,</span>
          </p>
        </div>

        <div className="flex gap-4 mt-1">
          <span className="text-white/20 select-none hidden sm:block">3</span>
          <p className="pl-4">
            <span className="text-[#f1fa8c]">focus</span>
            <span className="text-white">:</span>{" "}
            <span className="text-[#50fa7b]">&apos;Full Stack Development&apos;</span>
            <span className="text-white">,</span>
          </p>
        </div>

        <div className="flex gap-4 mt-1">
          <span className="text-white/20 select-none hidden sm:block">4</span>
          <p className="pl-4">
            <span className="text-[#f1fa8c]">status</span>
            <span className="text-white">:</span>{" "}
            <span className="text-[#50fa7b]">&apos;B.Tech @ LPU&apos;</span>
            <span className="text-white">,</span>
          </p>
        </div>

        <div className="flex gap-4 mt-1">
          <span className="text-white/20 select-none hidden sm:block">5</span>
          <p className="pl-4">
            <span className="text-[#f1fa8c]">stats</span>
            <span className="text-white">:</span>{" "}
            <span className="text-white">{"{"}</span>
          </p>
        </div>

        <div className="flex gap-4 mt-1">
          <span className="text-white/20 select-none hidden sm:block">6</span>
          <p className="pl-8">
            <span className="text-[#f1fa8c]">problemsSolved</span>
            <span className="text-white">:</span>{" "}
            <span className="text-[#bd93f9]">130+</span>
            <span className="text-white">,</span>
          </p>
        </div>

        <div className="flex gap-4 mt-1">
          <span className="text-white/20 select-none hidden sm:block">7</span>
          <p className="pl-8">
            <span className="text-[#f1fa8c]">cgpa</span>
            <span className="text-white">:</span>{" "}
            <span className="text-[#bd93f9]">7.8</span>
            <span className="text-white">,</span>
          </p>
        </div>

        <div className="flex gap-4 mt-1">
          <span className="text-white/20 select-none hidden sm:block">8</span>
          <p className="pl-8">
            <span className="text-[#f1fa8c]">coffeeConsumed</span>
            <span className="text-white">:</span>{" "}
            <span className="text-[#bd93f9]">Infinity</span>
          </p>
        </div>

        <div className="flex gap-4 mt-1">
          <span className="text-white/20 select-none hidden sm:block">9</span>
          <p className="pl-4">
            <span className="text-white">{"}"}</span>
          </p>
        </div>

        <div className="flex gap-4 mt-1">
          <span className="text-white/20 select-none hidden sm:block">10</span>
          <p>
            <span className="text-white">{"};"}</span>
          </p>
        </div>
      </div>

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(59,130,246,0.03)_0%,transparent_70%)] blur-[120px] pointer-events-none -z-10" />
    </motion.div>
  );
};
