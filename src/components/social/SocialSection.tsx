"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ExternalLink, CheckCircle2, Share2 } from "lucide-react";

export function SocialSection() {
  const activeSocials = siteConfig.socials.filter((s) => s.enabled);

  const renderPlatformIcon = (platform: string) => {
    switch (platform) {
      case "tiktok":
        return (
          <div className="w-10 h-10 rounded-2xl bg-[#fe2c55]/15 border border-[#fe2c55]/30 flex items-center justify-center text-[#fe2c55] group-hover:scale-110 transition-transform">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </div>
        );
      case "instagram":
        return (
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#f09433]/20 via-[#dc2743]/20 to-[#bc1888]/20 border border-[#dc2743]/30 flex items-center justify-center text-[#e1306c] group-hover:scale-110 transition-transform">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
        );
      case "youtube":
        return (
          <div className="w-10 h-10 rounded-2xl bg-[#ff0000]/15 border border-[#ff0000]/30 flex items-center justify-center text-[#ff0000] group-hover:scale-110 transition-transform">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
        );
      case "facebook":
        return (
          <div className="w-10 h-10 rounded-2xl bg-[#1877f2]/15 border border-[#1877f2]/30 flex items-center justify-center text-[#1877f2] group-hover:scale-110 transition-transform">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="socials" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fe2c55]/10 border border-[#fe2c55]/30 text-xs font-bold text-[#fe2c55] uppercase tracking-wider">
            <Share2 className="w-3.5 h-3.5" />
            Connect & Follow
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Follow Majid Across Social Platforms
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Join the official community on TikTok, Instagram, YouTube, and Facebook!
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeSocials.map((social) => (
            <motion.a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative p-6 rounded-3xl bg-[#121422]/90 border border-white/10 hover:border-white/25 shadow-2xl overflow-hidden flex flex-col justify-between h-52 transition-all backdrop-blur-xl"
              aria-label={`Follow Majid on ${social.name}`}
            >
              {/* Subtle Platform-Specific Gradient Glow */}
              <div
                className={`absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-gradient-to-tr ${social.color} opacity-20 blur-xl group-hover:opacity-45 transition-opacity`}
              />

              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {renderPlatformIcon(social.platform)}
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-base font-bold text-white group-hover:text-[#25f4ee] transition-colors">
                        {social.name}
                      </h3>
                      <CheckCircle2 className="w-4 h-4 text-[#25f4ee]" />
                    </div>
                    <p className="text-xs font-extrabold text-gray-300">
                      {social.handle}
                    </p>
                  </div>
                </div>

                <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>

              <div className="space-y-3 pt-2">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-white/5 border border-white/10 text-gray-300">
                  {social.badge}
                </span>

                <div className="flex items-center justify-between text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:text-white">
                  <span>Visit {social.name} Profile</span>
                  <span className="text-[#fe2c55] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

