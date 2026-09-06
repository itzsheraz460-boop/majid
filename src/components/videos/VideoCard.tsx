"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { VideoItem } from "@/types";
import { Play, Eye, Heart, Share2, Calendar, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface VideoCardProps {
  video: VideoItem;
  onSelect: (video: VideoItem) => void;
}

export function VideoCard({ video, onSelect }: VideoCardProps) {
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
    if (!liked) {
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.8 },
        colors: ["#fe2c55", "#ffd600", "#25f4ee"],
      });
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={() => onSelect(video)}
      className="group relative rounded-3xl bg-[#121422]/80 border border-white/10 hover:border-[#fe2c55]/40 overflow-hidden shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(254,44,85,0.25)] flex flex-col cursor-pointer transition-colors duration-300"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(video);
        }
      }}
      aria-label={`Watch video: ${video.title}`}
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#090a12]">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e101c] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Category Badge */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-md">
            {video.category.replace("-", " ")}
          </span>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-3.5 right-3.5 z-10">
          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-black/80 backdrop-blur-sm text-gray-200 border border-white/10">
            {video.duration}
          </span>
        </div>

        {/* Animated Play Button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-[#fe2c55]/90 group-hover:bg-[#fe2c55] text-white flex items-center justify-center shadow-lg transform transition-all duration-300 scale-90 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(254,44,85,0.7)]">
            <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Title */}
          <h3 className="text-base font-bold text-white group-hover:text-[#25f4ee] transition-colors line-clamp-2 leading-snug">
            {video.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed font-normal">
            {video.description}
          </p>
        </div>

        {/* Meta & Interactive Buttons */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-semibold text-gray-300">
              <Eye className="w-3.5 h-3.5 text-[#25f4ee]" />
              {video.views}
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              <Calendar className="w-3 h-3" />
              {video.date}
            </span>
          </div>

          <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
            {/* Micro-interaction Like button */}
            <button
              onClick={handleLike}
              className={`p-2 rounded-xl transition-all ${
                liked
                  ? "text-[#fe2c55] bg-[#fe2c55]/15"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
              aria-label="Like video"
            >
              <Heart className={`w-4 h-4 ${liked ? "fill-[#fe2c55]" : ""}`} />
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all relative"
              aria-label="Share video link"
            >
              <Share2 className="w-4 h-4" />
              {copied && (
                <span className="absolute -top-7 right-0 text-[10px] font-bold bg-[#25f4ee] text-black px-2 py-0.5 rounded shadow">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
