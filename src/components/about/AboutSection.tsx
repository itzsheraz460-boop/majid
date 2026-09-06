"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import {
  Smile,
  Flame,
  Users,
  Sparkles,
  CheckCircle2,
  Heart,
  Video,
  Award,
} from "lucide-react";

export function AboutSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Smile: <Smile className="w-5 h-5 text-[#ffd600]" />,
    Flame: <Flame className="w-5 h-5 text-[#fe2c55]" />,
    Users: <Users className="w-5 h-5 text-[#25f4ee]" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#a855f7]" />,
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Creator Image & Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-[#fe2c55]/20 via-[#ffd600]/10 to-[#25f4ee]/20 blur-2xl -z-10" />

            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 bg-[#121422] shadow-2xl">
              <Image
                src={siteConfig.creator.coverImage}
                alt="About Majid"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b12] via-transparent to-black/30" />

              {/* Creator Floating Badge on Image */}
              <div className="absolute top-4 left-4">
                <div className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-bold text-white flex items-center gap-1.5 shadow-lg">
                  <Award className="w-3.5 h-3.5 text-[#ffd600]" />
                  <span>{siteConfig.creator.badge}</span>
                </div>
              </div>

              {/* Bottom Quote Card */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-[#0e101a]/85 backdrop-blur-md border border-white/10 text-xs text-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#fe2c55] to-[#25f4ee] p-[1.5px] shrink-0">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center font-black text-xs text-white">
                    MJ
                  </div>
                </div>
                <div>
                  <p className="font-bold text-white">Majid</p>
                  <p className="text-[11px] text-[#25f4ee]">{siteConfig.creator.username}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Statistics */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fe2c55]/10 border border-[#fe2c55]/30 text-xs font-bold text-[#fe2c55] uppercase tracking-wider">
                <Smile className="w-3.5 h-3.5" />
                The Story Behind The Laughs
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                About Majid
              </h2>

              <p className="text-lg sm:text-xl font-medium text-gray-200 leading-relaxed">
                &ldquo;I&apos;m Majid, a content creator focused on creating funny and entertaining videos. My goal is simple — make people smile, laugh and enjoy their time.&rdquo;
              </p>

              <p className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed">
                {siteConfig.creator.detailedBio}
              </p>
            </div>

            {/* Config-Driven Statistics Grid (No fake follower counts) */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-2">
              {siteConfig.statistics.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="p-5 rounded-2xl bg-[#121422]/90 border border-white/10 shadow-lg flex flex-col justify-between space-y-2 hover:border-[#25f4ee]/40 transition-colors text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      {iconMap[stat.icon] || <Sparkles className="w-5 h-5 text-[#25f4ee]" />}
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {stat.value}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-200">{stat.label}</h3>
                    <p className="text-xs text-gray-400">{stat.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Action Button */}
            <div className="pt-2 flex justify-center lg:justify-start">
              <a
                href={siteConfig.creator.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#fe2c55] to-[#ff0050] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#fe2c55]/20 hover:brightness-110 transition-all"
              >
                <span>Join The Laughs On TikTok</span>
                <Heart className="w-4 h-4 fill-white" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
