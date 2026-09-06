"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Globe2,
  CheckCircle2,
  Rocket,
  Award,
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative group rounded-[40px]">
          
          {/* Animated 3D Glowing Outer Aura */}
          <div className="absolute -inset-1.5 rounded-[42px] bg-gradient-to-r from-[#00f2fe] via-[#fe2c55] to-[#ffd600] opacity-50 group-hover:opacity-100 blur-2xl transition duration-700 -z-10 animate-pulse" />

          {/* Main Card */}
          <div className="relative rounded-[40px] bg-gradient-to-br from-[#0a0c16] via-[#101426] to-[#07080f] border border-white/20 p-6 sm:p-10 lg:p-14 overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,242,254,0.15)]">
            
            {/* Ambient Lighting Blobs */}
            <div className="absolute -top-36 -right-36 w-96 h-96 rounded-full bg-[#00f2fe]/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-36 -left-36 w-96 h-96 rounded-full bg-[#fe2c55]/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Agency Brand & Pitch */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                
                {/* Verified Developer Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#13172b] border border-[#00f2fe]/40 text-xs font-bold text-[#00f2fe] uppercase tracking-wider shadow-lg justify-center lg:justify-start">
                  <Code2 className="w-4 h-4 text-[#00f2fe]" />
                  <span>Official Web Developer</span>
                  <span className="w-2 h-2 rounded-full bg-[#00f2fe] animate-ping" />
                  <Award className="w-4 h-4 text-[#ffd600]" />
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Designed & Engineered By{" "}
                  <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-white to-[#fe2c55] drop-shadow-md">
                    Sheraz Web Solution Pro
                  </span>
                </h2>

                {/* Pitch */}
                <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl">
                  Need a custom website, high-converting portfolio, or web application? <span className="font-bold text-white">Sheraz Web Solution</span> creates ultra-fast, SEO-engineered, and 100% mobile-responsive digital experiences that stand out.
                </p>

                {/* Slogan Banner */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs font-extrabold text-[#00f2fe]">
                  <Sparkles className="w-4 h-4 text-[#fe2c55]" />
                  <span className="tracking-wide">“WE BUILD YOUR DIGITAL FUTURE”</span>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {techStack.map((item, idx) => (
                    <div
                      key={`tech-${idx}`}
                      className={`p-3 rounded-2xl border ${item.bg} flex flex-col items-center lg:items-start text-center lg:text-left shadow-sm backdrop-blur-sm`}
                    >
                      <CheckCircle2 className={`w-4 h-4 ${item.color} mb-1`} />
                      <span className="text-xs font-bold text-white leading-tight">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: 3D Animated Floating Logo Stage & CTA */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
                
                {/* 3D Animated Floating Stage */}
                <div className="relative flex items-center justify-center p-4">
                  
                  {/* Rotating 3D Glowing Rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="absolute w-64 sm:w-72 h-64 sm:h-72 rounded-full border border-dashed border-[#00f2fe]/40 pointer-events-none"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    className="absolute w-52 sm:w-60 h-52 sm:h-60 rounded-full border border-dotted border-[#fe2c55]/40 pointer-events-none"
                  />

                  {/* 3D Floating Logo Card */}
                  <motion.div
                    animate={{
                      y: [0, -12, 0],
                      rotateX: [0, 6, -6, 0],
                      rotateY: [0, -8, 8, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.08, rotateZ: 2 }}
                    className="relative w-48 sm:w-60 h-48 sm:h-60 rounded-full p-2 bg-gradient-to-tr from-[#00f2fe] via-[#fe2c55] to-[#00f2fe] shadow-[0_20px_50px_rgba(0,242,254,0.35)] cursor-pointer group/logo"
                  >
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-white p-1">
                      <Image
                        src="/images/sheraz_web_logo.png"
                        alt="Sheraz Web Solution Official Logo - We Build Your Digital Future"
                        fill
                        priority
                        sizes="(max-width: 640px) 192px, 240px"
                        className="object-contain p-1 rounded-full transition-transform duration-500 group-hover/logo:scale-105"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Action Button */}
                <motion.a
                  href={developerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00f2fe] via-[#25f4ee] to-[#fe2c55] text-black font-black text-base flex items-center justify-center gap-3 shadow-xl shadow-[#00f2fe]/25 hover:shadow-2xl transition-all border border-white/40 group"
                  aria-label="Visit Sheraz Web Solution Pro website"
                >
                  <Globe2 className="w-5 h-5 text-black" />
                  <span>Visit Sheraz Web Solution</span>
                  <ExternalLink className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>

                <p className="text-xs text-gray-400 text-center font-semibold tracking-wide">
                  ⚡ Custom Web Apps • Next.js Performance • High-Converting UI/UX
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


