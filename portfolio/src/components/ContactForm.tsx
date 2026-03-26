"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#0d1117] border border-white/5 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative z-10">
        <h3 className="text-white font-black text-3xl md:text-4xl tracking-tighter mb-2">SEND A MESSAGE</h3>
        <div className="w-20 h-1 bg-blue-500 mb-12" />

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-3">
            <label className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold block ml-1">Name</label>
            <input
              type="text"
              required
              placeholder="[YOUR_NAME]"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500/50 transition-all font-light"
            />
          </div>

          <div className="space-y-3">
            <label className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold block ml-1">Email</label>
            <input
              type="email"
              required
              placeholder="[EMAIL_ADDRESS]"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500/50 transition-all font-light"
            />
          </div>

          <div className="space-y-3">
            <label className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold block ml-1">Message</label>
            <textarea
              required
              rows={5}
              placeholder="[LETS_WORK_TOGETHER]"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500/50 transition-all font-light resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#00b8a3] hover:bg-[#00c9b0] disabled:bg-white/10 text-white font-bold text-sm tracking-[0.2em] uppercase py-6 rounded-2xl transition-all shadow-xl shadow-[#00b8a3]/20 flex items-center justify-center gap-4 active:scale-[0.98]"
          >
            {status === "loading" ? "Sending..." : (
              <>
                Send Message <Send size={20} />
              </>
            )}
          </button>
        </form>

        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8 flex items-center gap-3 text-[#00b8a3] justify-center bg-[#00b8a3]/5 py-4 rounded-xl border border-[#00b8a3]/20"
            >
              <CheckCircle2 size={20} />
              <span className="text-sm font-medium">Message sent successfully!</span>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8 flex items-center gap-3 text-red-400 justify-center bg-red-400/5 py-4 rounded-xl border border-red-400/20"
            >
              <AlertCircle size={20} />
              <span className="text-sm font-medium">Failed to send message. Try again later.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
