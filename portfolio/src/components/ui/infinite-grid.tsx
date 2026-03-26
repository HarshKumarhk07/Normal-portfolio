"use client";

import { useRef, useEffect } from "react";

export const InfiniteGridBackground = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // ⭐ PERFORMANCE: Update CSS variables directly on the DOM instead of React state
      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full overflow-hidden bg-transparent"
      style={{ 
        "--mouse-x": "0px", 
        "--mouse-y": "0px" 
      } as React.CSSProperties}
    >
      {/* Background Grid Layer (GPU Accelerated CSS) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-15"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          backgroundPosition: "0 0",
          animation: "grid-move 20s linear infinite",
          willChange: "transform"
        }}
      />

      {/* Foreground Grid Layer (Mouse Reveal Flashlight) */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1] opacity-60"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.6) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          maskImage: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)`,
          WebkitMaskImage: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)`,
          animation: "grid-move 20s linear infinite",
          willChange: "transform"
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      <style jsx global>{`
        @keyframes grid-move {
          from { background-position: 0 0; }
          to { background-position: 50px 50px; }
        }
      `}</style>
    </div>
  );
};
