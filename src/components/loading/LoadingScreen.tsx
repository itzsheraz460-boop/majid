"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smile } from "lucide-react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Smooth, snappy loading duration so users are not blocked
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#08090d]"
          role="status"
          aria-live="polite"
          aria-label="Loading Majid Funny Video website"
        >
          {/* Pulsing ambient glow */}
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-[#fe2c55]/20 to-[#25f4ee]/20 blur-3xl pointer-events-none animate-pulse-glow" />

          {/* Animated Monogram Logo */}
          <div className="relative mb-6">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-28 h-28 rounded-3xl bg-gradient-to-tr from-[#12141e] to-[#1e2333] border border-white/10 flex items-center justify-center shadow-2xl p-1"
            >
              {/* Outer neon border spin */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#25f4ee] via-[#fe2c55] to-[#ffd600] opacity-75 blur-sm animate-spin-slow" />
              
              <div className="relative w-full h-full rounded-[22px] bg-[#0c0e15] flex flex-col items-center justify-center">
                <span className="text-3xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#25f4ee] via-white to-[#fe2c55]">
                  MJ
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#ffd600] flex items-center gap-1 mt-0.5">
                  <Smile className="w-3 h-3 text-[#ffd600]" />
                  COMEDY
                </span>
              </div>
            </motion.div>
          </div>

          {/* Brand Name with letter staggered reveal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
              Majid Funny Video
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="inline-block"
              >
                😂
              </motion.span>
            </h1>
            <p className="text-sm text-gray-400 mt-1 font-medium">
              Funny Videos • Entertainment • Non-Stop Fun
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-1.5 bg-white/10 rounded-full mt-6 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-[#25f4ee] via-[#fe2c55] to-[#ffd600]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
