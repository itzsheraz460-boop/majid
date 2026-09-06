"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VideoItem } from "@/types";
import { siteConfig } from "@/config/site";
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Heart,
  Share2,
  ExternalLink,
  Eye,
  Calendar,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export function VideoModal({ video, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Close on Escape key, Space to toggle play/pause
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === " " && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        togglePlay();
      }
    };

    if (video) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [video]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
    if (!liked) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#fe2c55", "#25f4ee", "#ffd600"],
      });
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (!video) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-xl"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#0e101a] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121524]/60">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#fe2c55]/20 to-[#25f4ee]/20 text-[#25f4ee] border border-[#25f4ee]/30">
                {video.category.replace("-", " ")}
              </span>
              <span className="text-xs text-gray-400 font-medium hidden sm:inline">
                {siteConfig.creator.username}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-all focus:ring-2 focus:ring-[#25f4ee]"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player Box */}
          <div className="relative aspect-video bg-black flex items-center justify-center group">
            {videoError ? (
              <div className="text-center p-8">
                <p className="text-lg font-bold text-red-400">Video playback notice</p>
                <p className="text-sm text-gray-400 mt-2">
                  This demo video stream is temporarily resting. You can easily plug your own video file in{" "}
                  <code className="text-[#25f4ee]">src/data/videos.ts</code>!
                </p>
              </div>
            ) : (
              <video
                ref={videoRef}
                src={video.videoUrl}
                poster={video.thumbnail}
                autoPlay
                playsInline
                loop
                onError={() => setVideoError(true)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-contain cursor-pointer"
                onClick={togglePlay}
              />
            )}

            {/* Custom Overlay Controls */}
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between opacity-90 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-2.5 rounded-full bg-white/20 hover:bg-[#fe2c55] text-white transition-colors"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white translate-x-0.5" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="text-xs text-gray-300 font-medium">
                  {video.duration}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleFullscreen}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Details & Actions Footer */}
          <div className="p-6 bg-[#0c0e18] flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-white/5">
            <div className="space-y-2 max-w-xl">
              <h2 id="video-modal-title" className="text-xl font-black text-white leading-snug">
                {video.title}
              </h2>
              <p className="text-sm text-gray-400 font-normal leading-relaxed">
                {video.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-gray-500 pt-1">
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-[#25f4ee]" />
                  {video.views} views
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  {video.date}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 self-start md:self-auto">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                  liked
                    ? "bg-[#fe2c55]/20 border-[#fe2c55] text-[#fe2c55]"
                    : "bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10"
                }`}
                aria-label="Like video"
              >
                <Heart className={`w-4 h-4 ${liked ? "fill-[#fe2c55]" : ""}`} />
                <span>{liked ? "Liked!" : video.likes}</span>
              </button>

              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Share video link"
              >
                <Share2 className="w-4 h-4" />
                <span>{copied ? "Link Copied!" : "Share"}</span>
              </button>

              <a
                href={siteConfig.creator.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#fe2c55] to-[#ff0050] text-xs font-bold text-white shadow-md hover:brightness-110 transition-all"
              >
                <span>Follow on TikTok</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
