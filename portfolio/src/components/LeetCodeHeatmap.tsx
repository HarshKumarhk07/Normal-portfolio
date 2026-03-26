"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

import { Award, ExternalLink } from "lucide-react";

export const LeetCodeHeatmap = ({ username }: { username: string }) => {
  const [data, setData] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`)
      .then((res) => res.json())
      .then((json) => {
        if (json && json.submissionCalendar) {
          const calendar = typeof json.submissionCalendar === "string" 
            ? JSON.parse(json.submissionCalendar) 
            : json.submissionCalendar;
            
          const formattedData: Contribution[] = Object.entries(calendar).map(([timestamp, count]) => {
            const date = new Date(parseInt(timestamp) * 1000).toISOString().split("T")[0];
            return {
              date,
              count: count as number,
              level: Math.min(Math.ceil((count as number) / 2), 4) as 0 | 1 | 2 | 3 | 4
            };
          }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
          
          setData(formattedData);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("LeetCode Heatmap fetch failed:", err);
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return <div className="w-full h-[400px] bg-white/5 animate-pulse rounded-3xl" />;
  }

  return (
    <div className="w-full bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 transition-all duration-500 hover:bg-white/[0.05] relative group overflow-hidden">
      {/* Background glow - using blue to match GitHub for perfect consistency if that's what dullness meant, or just better yellow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(255,192,30,0.08)_0%,transparent_70%)] blur-[120px] pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-[#ffc01e]/10 border border-[#ffc01e]/20 text-[#ffc01e]">
              <Award size={24} />
            </div>
            <h3 className="text-white font-bold text-xl md:text-2xl tracking-tight uppercase">LeetCode Activity</h3>
          </div>
          <div className="flex items-center gap-3 text-white/40 text-xs tracking-widest uppercase font-medium">
            <span className="w-2 h-2 rounded-full bg-[#ffc01e]/40" />
            Live Data Pipeline
          </div>
        </div>

        <div className="calendar-container w-full flex justify-center overflow-x-auto no-scrollbar py-6">
          <GitHubCalendar
            username="HarshKumarhk07"
            transformData={() => data}
            fontSize={14}
            blockSize={12}
            blockMargin={5}
            colorScheme="dark"
            theme={{
              dark: ["#161b22", "#3a3000", "#7a6500", "#c2a000", "#ffc01e"]
            }}
          />
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-8 justify-between items-center text-white/40 text-[11px] tracking-widest uppercase font-medium">
          <div className="flex gap-4">
            <a
              href={`https://leetcode.com/u/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ffc01e] transition-colors flex items-center gap-2"
            >
              View Profile <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
          <div>{username}</div>
        </div>
      </div>
    </div>
  );
};

