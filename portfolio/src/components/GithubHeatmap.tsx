"use client";

import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

export const GithubHeatmap = ({ username }: { username: string }) => {
  return (
    <div className="w-full bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 transition-all duration-500 hover:bg-white/[0.05] relative group overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(59,130,246,0.05)_0%,transparent_70%)] blur-[120px] pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-xl md:text-2xl tracking-tight uppercase">GitHub Contributions</h3>
          </div>
          <div className="flex items-center gap-3 text-white/40 text-xs tracking-widest uppercase font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500/40" />
            Live Data Pipeline
          </div>
        </div>

        <div className="calendar-container w-full flex justify-center overflow-x-auto no-scrollbar py-6">
          <GitHubCalendar
            username={username}
            blockSize={12}
            blockMargin={5}
            colorScheme="dark"
            fontSize={14}
            theme={{
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              // Alternatively, use blue to match site theme:
              // dark: ['#161b22', '#1e3a8a', '#2563eb', '#3b82f6', '#60a5fa'],
            }}
          />
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-8 justify-between items-center text-white/40 text-[11px] tracking-widest uppercase font-medium">
          <div className="flex gap-4">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors flex items-center gap-2"
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
