"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  // Floating emoji particles with subtle fixed positioning
  const emojis = useMemo(
    () => [
      { char: "😂", x: "8%", y: "18%", delay: 0, duration: 8 },
      { char: "🤣", x: "88%", y: "24%", delay: 1.5, duration: 9 },
      { char: "🔥", x: "14%", y: "65%", delay: 2.5, duration: 7 },
      { char: "😎", x: "82%", y: "75%", delay: 0.8, duration: 10 },
      { char: "🎬", x: "48%", y: "88%", delay: 3, duration: 8.5 },
      { char: "✨", x: "92%", y: "45%", delay: 1.2, duration: 7.5 },
    ],
    []
  );

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Background base grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Ambient Gradient Blobs */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-28 w-[500px] h-[500px] rounded-full bg-[#fe2c55]/15 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 60, -20, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-36 w-[550px] h-[550px] rounded-full bg-[#25f4ee]/15 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-20 left-1/4 w-[600px] h-[600px] rounded-full bg-[#ffd600]/10 blur-[140px]"
      />

      {/* Floating Emojis */}
      {emojis.map((item, idx) => (
        <motion.div
          key={idx}
          style={{ left: item.x, top: item.y }}
          className="absolute text-2xl select-none opacity-25 filter drop-shadow-md"
          animate={{
            y: [0, -24, 0],
            rotate: [0, 8, -8, 0],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          {item.char}
        </motion.div>
      ))}

      {/* Micro Glow Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-[#25f4ee]/5 to-transparent blur-3xl" />
    </div>
  );
}
