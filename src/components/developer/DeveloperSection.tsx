"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Zap,
  Layers,
  Globe2,
  CheckCircle2,
  Rocket,
} from "lucide-react";

export function DeveloperSection() {
  const developerUrl = "https://sheraz-web-soloucion-pro.vercel.app/";

  const techStack = [
    { label: "Next.js 16 & React", color: "text-[#25f4ee]", bg: "bg-[#25f4ee]/10 border-[#25f4ee]/30" },
    { label: "100/100 Core Web Vitals", color: "text-[#ffd600]", bg: "bg-[#ffd600]/10 border-[#ffd600]/30" },
    { label: "Full-Suite SEO & Schema", color: "text-[#fe2c55]", bg: "bg-[#fe2c55]/10 border-[#fe2c55]/30" },
    { label: "Ultra-Fast Mobile Speed", color: "text-[#a855f7]", bg: "bg-[#a855f7]/10 border-[#a855f7]/30" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative group rounded-[36px]">
          
          {/* Animated Glowing Outer Border */}
          <div className="absolute -inset-1 rounded-[38px] bg-gradient-to-r from-[#25f4ee] via-[#fe2c55] to-[#ffd600] opacity-50 group-hover:opacity-100 blur-xl transition duration-700 -z-10 animate-pulse" />

          {/* Main Card */}
          <div className="relative rounded-[36px] bg-gradient-to-br from-[#0c0e18] via-[#131626] to-[#0a0c16] border border-white/20 p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl">
            
            {/* Ambient Lighting */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#25f4ee]/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#fe2c55]/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Agency Brand & Information */}
              <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
                
                {/* Verified Developer Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#15192b] border border-[#25f4ee]/40 text-xs font-bold text-[#25f4ee] uppercase tracking-wider shadow-lg">
                  <Code2 className="w-4 h-4 text-[#25f4ee]" />
                  <span>Official Web Developer</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25f4ee] animate-ping" />
                  <ShieldCheck className="w-4 h-4 text-[#ffd600]" />
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Designed & Engineered By{" "}
                  <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#25f4ee] via-white to-[#fe2c55] drop-shadow">
                    Sheraz Web Solution Pro
                  </span>
                </h2>

                {/* Subtitle / Pitch */}
                <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl">
                  Need a custom website, high-converting portfolio, or web application? <span className="font-bold text-white">Sheraz Web Solution Pro</span> creates ultra-fast, SEO-engineered, and 100% mobile-responsive digital experiences that stand out.
                </p>

                {/* Key Metrics / Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {techStack.map((item, idx) => (
                    <div
                      key={`tech-${idx}`}
                      className={`p-3 rounded-2xl border ${item.bg} flex flex-col items-center lg:items-start text-center lg:text-left shadow-sm`}
                    >
                      <CheckCircle2 className={`w-4 h-4 ${item.color} mb-1`} />
                      <span className="text-xs font-bold text-white leading-tight">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: CTA Buttons & Interactive Portal Badge */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4">
                
                {/* Visual Agency Emblem */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr from-[#25f4ee] via-[#fe2c55] to-[#ffd600] p-[2px] shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full rounded-[22px] bg-[#0b0d17] flex flex-col items-center justify-center p-3 text-center">
                    <Rocket className="w-8 h-8 text-[#25f4ee] mb-1 animate-bounce" />
                    <span className="text-xs font-black text-white tracking-wider">SHERAZ</span>
                    <span className="text-[10px] font-bold text-[#ffd600] tracking-widest uppercase">WEB PRO</span>
                  </div>
                </div>

                {/* Main Action Button */}
                <motion.a
                  href={developerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#25f4ee] via-[#00f2fe] to-[#fe2c55] text-black font-black text-sm sm:text-base flex items-center justify-center gap-3 shadow-xl shadow-[#25f4ee]/25 hover:shadow-2xl transition-all border border-white/40 group"
                  aria-label="Visit Sheraz Web Solution Pro website"
                >
                  <Globe2 className="w-5 h-5 text-black" />
                  <span>Visit Sheraz Web Solution</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>

                {/* Direct Subtitle */}
                <p className="text-xs text-gray-400 text-center font-medium">
                  🌐 Next.js • React • Mobile Apps • Custom Web Design
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

