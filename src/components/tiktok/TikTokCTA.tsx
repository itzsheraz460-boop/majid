"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ExternalLink, Flame, Music, Heart, MessageCircle, Share2, Plus } from "lucide-react";

export function TikTokCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[36px] bg-gradient-to-r from-[#0d0f1a] via-[#141726] to-[#0d0f1a] border border-white/15 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          
          {/* Neon Glow Blobs behind card */}
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#25f4ee]/20 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#fe2c55]/25 blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: CTA Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-[#25f4ee]/30 text-xs font-bold text-[#25f4ee] uppercase tracking-wider">
                <Music className="w-3.5 h-3.5" />
                Official TikTok Channel
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Follow Majid on TikTok{" "}
                <span className="inline-block">🎵</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-300 max-w-xl font-normal leading-relaxed">
                Don&apos;t miss the latest funny videos and entertaining moments. Follow{" "}
                <span className="font-bold text-[#25f4ee]">
                  {siteConfig.creator.username}
                </span>{" "}
                for more fun!
              </p>

              {/* Action Button & Platform Badge */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={siteConfig.creator.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#fe2c55] via-[#ff0050] to-[#00f2fe] text-white font-black text-base flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition-all shadow-[#fe2c55]/30 group"
                  aria-label="Follow Majid on TikTok"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                  <span>Follow on TikTok</span>
                  <ExternalLink className="w-4 h-4 opacity-80 group-hover:opacity-100" />
                </a>

                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-[#25f4ee] animate-ping" />
                  <span>Fresh Comedy Uploads Daily</span>
                </div>
              </div>
            </div>

            {/* Right Column: TikTok App Mockup Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-72 aspect-[9/16] rounded-[38px] p-2 bg-gradient-to-b from-[#25f4ee]/30 via-white/10 to-[#fe2c55]/30 border-2 border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
                <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-black flex flex-col justify-between p-4">
                  {/* Mockup Top Bar */}
                  <div className="flex items-center justify-between text-[11px] font-bold text-white/80 pt-1">
                    <span className="text-gray-400">Following</span>
                    <span className="text-white border-b-2 border-white pb-0.5">For You</span>
                    <span>LIVE</span>
                  </div>

                  {/* Mockup Video Image / Content */}
                  <div className="absolute inset-0 -z-10">
                    <Image
                      src={siteConfig.creator.avatar}
                      alt="TikTok Mockup"
                      fill
                      className="object-cover object-top opacity-70 filter contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  </div>

                  {/* Mockup Floating Right Action Icons */}
                  <div className="self-end flex flex-col items-center space-y-4 pb-12 z-10">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative">
                        <Image
                          src={siteConfig.creator.avatar}
                          alt="Avatar"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#fe2c55] flex items-center justify-center text-white">
                        <Plus className="w-3 h-3" />
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="p-2 rounded-full bg-black/40 text-white">
                        <Heart className="w-5 h-5 fill-[#fe2c55] text-[#fe2c55]" />
                      </div>
                      <span className="text-[10px] font-bold text-white mt-0.5">32.4K</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="p-2 rounded-full bg-black/40 text-white">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-white mt-0.5">1.2K</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="p-2 rounded-full bg-black/40 text-white">
                        <Share2 className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-white mt-0.5">Share</span>
                    </div>
                  </div>

                  {/* Mockup Bottom Profile Description */}
                  <div className="space-y-1 text-left z-10">
                    <p className="text-xs font-black text-white">
                      {siteConfig.creator.username}
                    </p>
                    <p className="text-[11px] text-gray-200 line-clamp-2">
                      When you thought you could sneak past without laughing 😂 #comedy #funny
                    </p>
                    <div className="flex items-center gap-1.5 text-[10px] text-gray-300">
                      <Music className="w-3 h-3 text-[#25f4ee] animate-spin-slow" />
                      <span className="truncate">Majid Funny Video - Original Sound</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
