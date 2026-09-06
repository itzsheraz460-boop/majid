"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { SocialLink } from "@/types";
import { ExternalLink, CheckCircle2, Share2 } from "lucide-react";

export function SocialSection() {
  const activeSocials = siteConfig.socials.filter((s) => s.enabled);

  return (
    <section id="socials" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fe2c55]/10 border border-[#fe2c55]/30 text-xs font-bold text-[#fe2c55] uppercase tracking-wider">
            <Share2 className="w-3.5 h-3.5" />
            Connect & Follow
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Follow Across Platforms
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Never miss a single sketch, behind-the-scenes gag, or viral stream.
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
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative p-6 rounded-3xl bg-[#121422]/80 border border-white/10 hover:border-white/20 shadow-xl overflow-hidden flex flex-col justify-between h-48 transition-all"
              aria-label={`Follow Majid on ${social.name}`}
            >
              {/* Subtle Platform-Specific Gradient Glow */}
              <div
                className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-tr ${social.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity`}
              />

              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#25f4ee] transition-colors">
                      {social.name}
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-[#25f4ee]" />
                  </div>
                  <p className="text-xs text-gray-400 font-medium">{social.handle}</p>
                </div>

                <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 group-hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>

              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-white/5 border border-white/5 text-gray-300">
                  {social.badge}
                </span>

                <div className="flex items-center justify-between text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:text-white">
                  <span>Visit Channel</span>
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
