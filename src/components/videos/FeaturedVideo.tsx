"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { teamMembers } from "@/data/team";
import { siteConfig } from "@/config/site";
import {
  Sparkles,
  Users,
  Flame,
  Star,
  Phone,
  Film,
  Camera,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import confetti from "canvas-confetti";

export function FeaturedVideo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  // Auto-rotate spotlight member every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentMember = teamMembers[currentIndex];

  const handleCheer = () => {
    setLiked(!liked);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#fe2c55", "#ffd600", "#25f4ee"],
    });
  };

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  // Double team list for seamless infinite loop marquee
  const marqueeMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fe2c55]/10 border border-[#fe2c55]/30 text-xs font-bold text-[#fe2c55] mb-2 uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5" />
              Team In Action
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
              Our Star Cast & Crew
              <span className="text-2xl">✨</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-md">
            The creative minds, comedic actors, and visual wizards bringing you non-stop laughs daily on TikTok!
          </p>
        </div>

        {/* 1. Continuous Moving Auto-Scroll Photo Marquee */}
        <div className="relative mb-10 overflow-hidden rounded-2xl py-3 bg-[#0d101e]/80 border border-white/10 backdrop-blur-sm">
          {/* Gradient shadows on sides for seamless fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#08090d] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#08090d] to-transparent z-10 pointer-events-none" />

          {/* Animated Marquee Strip */}
          <motion.div
            className="flex gap-3 sm:gap-6 w-max cursor-grab active:cursor-grabbing will-change-transform"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 22,
            }}
          >
            {marqueeMembers.map((member, idx) => (
              <motion.div
                key={`marquee-${member.name}-${member.role}-${idx}`}
                whileHover={{ scale: 1.06, y: -4 }}
                onClick={() => setCurrentIndex(idx % teamMembers.length)}
                className={`relative flex-shrink-0 w-32 sm:w-44 h-44 sm:h-56 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                  currentIndex === idx % teamMembers.length
                    ? "border-[#25f4ee] shadow-lg shadow-[#25f4ee]/30 scale-105"
                    : "border-white/10 hover:border-[#fe2c55]"
                }`}
              >
                <Image
                  src={member.img}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 128px, 176px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-center">
                  <p className="text-xs sm:text-sm font-bold text-white leading-tight truncate">
                    {member.name}
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-[#25f4ee] truncate">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 2. Spotlight Hero Card with Animated Moving Photos */}
        <div className="relative group">
          {/* Animated Neon Glowing Background Border */}
          <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-[#25f4ee] via-[#fe2c55] to-[#ffd600] opacity-40 group-hover:opacity-80 blur-lg transition duration-700 -z-10" />

          <div className="relative rounded-3xl bg-[#0b0e1a] border border-white/15 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Animated Photo Stage (Left 7 cols) */}
            <div className="lg:col-span-7 relative h-72 sm:h-[400px] lg:h-[440px] overflow-hidden bg-[#060810] flex items-center justify-center p-4 sm:p-6">
              {/* Floating Decorative Subtle Rings */}
              <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-dashed border-[#25f4ee]/15 pointer-events-none" />
              <div className="absolute w-56 sm:w-72 h-56 sm:h-72 rounded-full border border-dotted border-[#fe2c55]/15 pointer-events-none" />

              {/* Central Floating Animated Member Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-48 sm:w-60 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/25"
                >
                  <Image
                    src={currentMember.img}
                    alt={currentMember.name}
                    fill
                    sizes="(max-width: 640px) 192px, 240px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25" />

                  {/* Role Badge on Photo */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-[#fe2c55] text-white flex items-center gap-1 shadow-lg">
                      <Star className="w-3 h-3 fill-white" />
                      {currentMember.role}
                    </span>
                  </div>

                  {/* Name on Photo */}
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <h4 className="text-lg sm:text-xl font-black text-white drop-shadow">
                      {currentMember.name}
                    </h4>
                    {currentMember.phone && (
                      <p className="text-[11px] sm:text-xs text-[#25f4ee] font-semibold mt-0.5">
                        📞 {currentMember.phone}
                      </p>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevMember}
                aria-label="Previous member"
                className="absolute left-2 sm:left-6 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-[#fe2c55] text-white border border-white/20 transition-all z-20 backdrop-blur-sm active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextMember}
                aria-label="Next member"
                className="absolute right-2 sm:right-6 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-[#fe2c55] text-white border border-white/20 transition-all z-20 backdrop-blur-sm active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-3 flex gap-1.5 z-20">
                {teamMembers.map((_, idx) => (
                  <button
                    key={`dot-${idx}`}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-6 bg-[#25f4ee]"
                        : "w-1.5 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Member Details & Actions (Right 5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-gradient-to-b from-[#131625] to-[#0c0e18]">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#25f4ee]/15 text-[#25f4ee] border border-[#25f4ee]/30 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Spotlight Member
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {currentIndex + 1} of {teamMembers.length}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                      {currentMember.name}
                    </h3>

                    <p className="text-base font-semibold text-[#25f4ee]">
                      {currentMember.role}
                    </p>

                    <p className="text-sm text-gray-300 leading-relaxed font-normal">
                      {currentMember.bio ||
                        `Talented member of the Majid Funny Video family, delivering comedy, acting, and viral entertainment to millions of fans.`}
                    </p>

                    {/* Member Info Cards */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-[#25f4ee]/10 text-[#25f4ee]">
                          {currentMember.role.includes("Camera") ? (
                            <Camera className="w-4 h-4" />
                          ) : (
                            <Film className="w-4 h-4" />
                          )}
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Position</p>
                          <p className="text-xs font-bold text-white truncate">
                            {currentMember.role}
                          </p>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-[#fe2c55]/10 text-[#fe2c55]">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Contact</p>
                          <p className="text-xs font-bold text-white truncate">
                            {currentMember.phone || "Available on TikTok"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <button
                    onClick={nextMember}
                    className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-[#fe2c55] to-[#ff0050] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition-all"
                  >
                    <Users className="w-4 h-4" />
                    <span>Next Member</span>
                  </button>

                  <button
                    onClick={handleCheer}
                    className={`p-3 rounded-xl border transition-all flex items-center gap-1.5 ${
                      liked
                        ? "bg-[#fe2c55]/20 border-[#fe2c55] text-[#fe2c55]"
                        : "bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                    aria-label="Send cheer"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        liked ? "fill-[#fe2c55] text-[#fe2c55]" : ""
                      }`}
                    />
                    <span className="text-xs font-bold">Cheer</span>
                  </button>
                </div>

                {/* Direct TikTok CTA */}
                <a
                  href={siteConfig.creator.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#090b12] hover:bg-[#10131f] border border-white/15 text-xs font-bold text-gray-300 hover:text-white flex items-center justify-center gap-2 transition-all"
                >
                  <svg className="w-4 h-4 fill-[#25f4ee]" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                  <span>Follow @{siteConfig.creator.username} on TikTok</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
