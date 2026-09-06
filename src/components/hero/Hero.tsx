"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Play, Sparkles, Flame, CheckCircle2, TrendingUp, Music } from "lucide-react";

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Hero Copy & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
        >
          {/* Creator verified pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181a26]/90 border border-white/10 shadow-lg text-xs font-semibold text-gray-200"
          >
            <span className="w-2 h-2 rounded-full bg-[#25f4ee] animate-pulse" />
            <span className="text-[#ffd600]">TikTok Creator</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-300">{siteConfig.creator.username}</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-[#25f4ee]" />
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Welcome to{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#25f4ee] via-white to-[#fe2c55] drop-shadow-sm">
              Majid Funny Video
            </span>{" "}
            <motion.span
              animate={{ rotate: [0, 14, -14, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="inline-block"
            >
              😂
            </motion.span>
          </h1>

          {/* Subtitle */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-base sm:text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffd600] via-[#fe2c55] to-[#25f4ee]">
            <span>Funny Videos</span>
            <span className="text-gray-600">•</span>
            <span>Entertainment</span>
            <span className="text-gray-600">•</span>
            <span>Non-Stop Fun</span>
          </div>

          {/* Short Description */}
          <p className="text-base sm:text-lg text-gray-300 max-w-xl font-normal leading-relaxed">
            Welcome to Majid Funny Video, where laughter never stops. Enjoy funny
            videos, entertaining moments and fresh comedy content.
          </p>

          {/* Dual Animated Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-3 w-full sm:w-auto">
            {/* Watch Funny Videos (Scroll to #team) */}
            <motion.a
              href="#team"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-[#fe2c55] to-[#ff0050] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg shadow-[#fe2c55]/30 hover:shadow-xl hover:shadow-[#fe2c55]/50 transition-all border border-white/20"
            >
              <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                <Play className="w-4 h-4 fill-white text-white translate-x-0.5" />
              </div>
              <span>Explore Comedy Team</span>
            </motion.a>

            {/* Follow Me on TikTok */}
            <motion.a
              href={siteConfig.creator.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#11131c] hover:bg-[#161924] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 border border-white/10 shadow-lg hover:border-[#25f4ee]/50 transition-all"
            >
              <svg className="w-5 h-5 fill-[#25f4ee]" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
              <span>Follow Me on TikTok</span>
            </motion.a>
          </div>

          {/* Live Quick Highlights */}
          <div className="flex items-center gap-6 pt-2 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#fe2c55]" />
              <span>Trending Comedy</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ffd600]" />
              <span>Daily Relatable Vibes</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#25f4ee]" />
              <span>Viral TikTok Clips</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Animated Creator 3D Profile Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          <div
            className="relative w-72 sm:w-88 md:w-96 aspect-square flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Glowing animated halo background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#fe2c55]/30 via-[#ffd600]/20 to-[#25f4ee]/30 blur-2xl animate-pulse-glow" />

            {/* Outer rotating neon dashed ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#25f4ee]/40 animate-spin-slow" />

            {/* Secondary counter-rotating ring */}
            <div className="absolute inset-4 rounded-full border border-[#fe2c55]/30 animate-spin-slow [animation-direction:reverse]" />

            {/* Circular Profile Container */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-64 sm:w-76 md:w-80 h-64 sm:h-76 md:h-80 rounded-full p-2 bg-gradient-to-tr from-[#fe2c55] via-[#ffd600] to-[#25f4ee] shadow-2xl"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#0a0b12] bg-[#121420]">
                <Image
                  src={siteConfig.creator.avatar}
                  alt="Majid Funny Video Creator Avatar"
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                />

                {/* Overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d]/80 via-transparent to-transparent" />
                
                {/* Creator tag badge at bottom of circle */}
                <div className="absolute bottom-4 inset-x-0 flex justify-center">
                  <span className="px-3.5 py-1 rounded-full bg-[#0a0c14]/90 backdrop-blur-md border border-white/20 text-xs font-black text-white flex items-center gap-1.5 shadow-lg">
                    <Music className="w-3 h-3 text-[#25f4ee]" />
                    {siteConfig.creator.name}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating Animated Emojis around Profile */}
            <motion.div
              animate={{
                y: [0, -16, 0],
                x: [0, 8, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-2 text-4xl sm:text-5xl filter drop-shadow-xl select-none"
            >
              😂
            </motion.div>

            <motion.div
              animate={{
                y: [0, 14, 0],
                x: [0, -10, 0],
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -left-6 text-4xl sm:text-5xl filter drop-shadow-xl select-none"
            >
              🤣
            </motion.div>

            <motion.div
              animate={{
                y: [0, -12, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 -left-2 text-3xl sm:text-4xl filter drop-shadow-xl select-none"
            >
              😎
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, 12, 0],
              }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-6 -right-5 text-3xl sm:text-4xl filter drop-shadow-xl select-none"
            >
              🔥
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
