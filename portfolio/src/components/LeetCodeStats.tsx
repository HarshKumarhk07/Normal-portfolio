"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface LeetCodeData {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalQuestions: number;
}

export const LeetCodeStats = ({ username }: { username: string }) => {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.status === "success") {
          setData({
            totalSolved: json.totalSolved,
            easySolved: json.easySolved,
            mediumSolved: json.mediumSolved,
            hardSolved: json.hardSolved,
            totalQuestions: json.totalQuestions,
          });
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [username]);

  if (loading) {
    return (
      <div className="w-full h-64 flex items-center justify-center animate-pulse">
        <div className="w-32 h-32 rounded-full border-4 border-white/5 border-t-blue-500/20" />
      </div>
    );
  }

  if (!data) return null;

  const stats = [
    { label: "EASY", solved: data.easySolved, color: "text-[#00b8a3]", bg: "bg-[#00b8a3]" },
    { label: "MED", solved: data.mediumSolved, color: "text-[#ffc01e]", bg: "bg-[#ffc01e]" },
    { label: "HARD", solved: data.hardSolved, color: "text-[#ef4743]", bg: "bg-[#ef4743]" },
  ];

  return (
    <div className="relative transition-all duration-500 overflow-hidden group py-4">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Circle Progressive Counter */}
        <div className="relative w-40 h-40 flex items-center justify-center shrink-0">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="74"
              stroke="currentColor"
              strokeWidth="10"
              fill="transparent"
              className="text-white/[0.03]"
            />
            <motion.circle
              cx="80"
              cy="80"
              r="74"
              stroke="currentColor"
              strokeWidth="10"
              fill="transparent"
              strokeDasharray={465}
              initial={{ strokeDashoffset: 465 }}
              animate={{ strokeDashoffset: 465 - (465 * (data.totalSolved / data.totalQuestions)) }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-blue-500"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-white">{data.totalSolved}</span>
            <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] mt-1 font-bold">Solved</span>
          </div>
        </div>

        {/* Breakdown bars */}
        <div className="flex-1 w-full space-y-8">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-3">
              <div className="flex justify-between items-end">
                <span className={`${stat.color} font-black text-xs tracking-widest uppercase`}>{stat.label}</span>
                <span className="text-white/80 font-bold text-lg">{stat.solved}</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className={`${stat.bg} h-full rounded-full opacity-80`}
                />
              </div>
            </div>
          ))}

          <div className="pt-4 flex justify-end">
             <a 
               href={`https://leetcode.com/u/${username}`} 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-white/30 hover:text-white flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] transition-colors"
             >
               View Profile <ExternalLink size={12} />
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};
