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
                    <svg className="w-4 h-4 fill-current text-[#25f4ee]" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  )}
                  {social.platform === "instagram" && (
                    <svg className="w-4 h-4 fill-current text-[#e1306c]" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )}
                  {social.platform === "youtube" && (
                    <svg className="w-4 h-4 fill-current text-[#ff0000]" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  )}
                  {social.platform === "facebook" && (
                    <svg className="w-4 h-4 fill-current text-[#1877f2]" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
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
