"use client";

import React from "react";

export function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Background base grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Hardware-accelerated smooth ambient glow layers */}
      <div className="absolute -top-40 -left-32 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full bg-gradient-to-br from-[#fe2c55]/12 via-[#ff0050]/5 to-transparent blur-3xl will-change-transform" />
      
      <div className="absolute top-1/3 -right-32 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full bg-gradient-to-bl from-[#25f4ee]/12 via-[#00f2fe]/5 to-transparent blur-3xl will-change-transform" />
      
      <div className="absolute -bottom-32 left-1/3 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-gradient-to-tr from-[#ffd600]/8 via-[#f59e0b]/4 to-transparent blur-3xl will-change-transform" />

      {/* Subtle Central Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-gradient-to-b from-[#25f4ee]/4 to-transparent blur-2xl" />
    </div>
  );
}

