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

          {/* Social Platforms Bar */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-3">
            <span className="text-xs font-extrabold text-gray-400 uppercase tracking-wider">
              Social Profiles:
            </span>
            {siteConfig.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 text-gray-200 hover:text-white transition-all text-xs font-bold shadow-md hover:scale-105"
                title={`${social.name}: ${social.handle}`}
              >
                {social.platform === "tiktok" && (
                  <svg className="w-3.5 h-3.5 fill-current text-[#25f4ee]" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                )}
                {social.platform === "instagram" && (
                  <svg className="w-3.5 h-3.5 fill-current text-[#e1306c]" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                )}
                {social.platform === "youtube" && (
                  <svg className="w-3.5 h-3.5 fill-current text-[#ff0000]" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                )}
                {social.platform === "facebook" && (
                  <svg className="w-3.5 h-3.5 fill-current text-[#1877f2]" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                )}
                <span>{social.name}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/10 text-[#25f4ee] font-mono">
                  {social.handle}
                </span>
              </a>
            ))}
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
