"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, ExternalLink, Sparkles, ShieldCheck, Cpu } from "lucide-react";

export function DeveloperSection() {
  const developerUrl = "https://sheraz-web-soloucion-pro.vercel.app/";

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[32px] bg-gradient-to-r from-[#0a0c16] via-[#121526] to-[#0a0c16] border border-white/15 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#25f4ee]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#fe2c55]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            
            {/* Left Info */}
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#25f4ee]/10 border border-[#25f4ee]/30 text-xs font-bold text-[#25f4ee] uppercase tracking-wider justify-center lg:justify-start">
                <Code2 className="w-4 h-4 text-[#25f4ee]" />
                <span>Web Development Credits</span>
                <ShieldCheck className="w-3.5 h-3.5 text-[#ffd600]" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
                Crafted & Engineered By{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25f4ee] via-white to-[#fe2c55]">
                  Sheraz Web Solution
                </span>
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
                Looking for a modern, high-performance website or custom web app? <span className="font-semibold text-white">Sheraz Web Solution</span> builds lightning-fast, SEO-optimized, and fully responsive digital experiences for creators, businesses, and brands.
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs text-gray-300 font-medium">
                <span className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#25f4ee]" /> Next.js & Turbopack Speed
                </span>
                <span className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#ffd600]" /> 100% Mobile Responsive
                </span>
                <span className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#fe2c55]" /> Full-Suite Technical SEO
                </span>
              </div>
            </div>

            {/* Right CTA Button */}
            <div className="shrink-0 w-full sm:w-auto">
              <motion.a
                href={developerUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#25f4ee] via-[#00f2fe] to-[#fe2c55] text-black font-black text-sm sm:text-base flex items-center justify-center gap-3 shadow-xl shadow-[#25f4ee]/20 hover:shadow-2xl transition-all border border-white/30 group"
                aria-label="Visit Sheraz Web Solution Pro portfolio"
              >
                <span>Visit Sheraz Web Solution</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
