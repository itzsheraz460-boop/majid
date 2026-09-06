"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Smile, Heart, ArrowUp, X, Shield, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Footer() {
  const [modalType, setModalType] = useState<"privacy" | "terms" | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#07080d] pt-16 pb-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Motto */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#fe2c55] to-[#25f4ee] p-[1.5px]">
                <div className="w-full h-full bg-[#0a0c14] rounded-[10px] flex items-center justify-center font-black text-xs text-white">
                  MJ
                </div>
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Majid Funny Video
              </span>
            </div>

            <p className="text-base font-semibold text-gray-300">
              Funny videos. Entertainment. Good vibes. 😂
            </p>

            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Bringing smiles to everyday moments. Watch original sketches, comedic
              parodies, and viral TikTok entertainment created with passion and heart.
            </p>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-2 pt-2">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all hover:scale-105"
                  aria-label={`Follow on ${social.name}`}
                >
                  {social.platform === "tiktok" && (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  )}
                  {social.platform !== "tiktok" && (
                    <span className="text-xs font-bold uppercase">
                      {social.name.slice(0, 2)}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-gray-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li>
                <a href="#home" className="hover:text-[#25f4ee] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-[#25f4ee] transition-colors">
                  Comedy Categories
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#25f4ee] transition-colors">
                  About Majid
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#25f4ee] transition-colors">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#25f4ee] transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-gray-200">
              Legal & Support
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li>
                <button
                  onClick={() => setModalType("privacy")}
                  className="hover:text-[#fe2c55] transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setModalType("terms")}
                  className="hover:text-[#fe2c55] transition-colors text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <span className="text-gray-500">
                  TikTok: {siteConfig.creator.username}
                </span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-gray-300 hover:text-white transition-all"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Majid Funny Video. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-gray-400">
            <span>Designed & Developed by</span>
            <a
              href="https://sheraz-web-soloucion-pro.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#25f4ee] hover:text-[#fe2c55] underline transition-colors"
            >
              Sheraz Web Solution Pro
            </a>
            <Smile className="w-3.5 h-3.5 text-[#ffd600]" />
          </div>
        </div>
      </div>

      {/* Policy Lightbox Modal */}
      <AnimatePresence>
        {modalType && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setModalType(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-lg w-full bg-[#121422] border border-white/20 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl relative"
            >
              <button
                onClick={() => setModalType(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-[#25f4ee]">
                {modalType === "privacy" ? (
                  <Shield className="w-5 h-5" />
                ) : (
                  <FileText className="w-5 h-5" />
                )}
                <h3 className="text-xl font-bold text-white">
                  {modalType === "privacy" ? "Privacy Policy" : "Terms & Conditions"}
                </h3>
              </div>

              <div className="text-xs text-gray-300 leading-relaxed space-y-3 max-h-72 overflow-y-auto pr-2">
                {modalType === "privacy" ? (
                  <>
                    <p>
                      At Majid Funny Video, your privacy is respected. This website is built for entertainment and comedy content sharing.
                    </p>
                    <p>
                      We do not sell, rent, or distribute personal information submitted through the contact form to third parties. Information sent is solely used to respond to inquiries or comedy suggestions.
                    </p>
                    <p>
                      Third-party video players and social integrations (e.g. TikTok) operate under their respective privacy policies.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Welcome to Majid Funny Video. By visiting this entertainment platform, you agree to enjoy our content with kindness and good humor.
                    </p>
                    <p>
                      All original comedy sketches, trademarks, and branding belong to Majid Funny Video. Unlicensed commercial reproduction without permission is prohibited.
                    </p>
                    <p>
                      Feel free to share our clips across social media by tagging @majid.funy.video.1!
                    </p>
                  </>
                )}
              </div>

              <button
                onClick={() => setModalType(null)}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors"
              >
                I Understand
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
