"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import {
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import confetti from "canvas-confetti";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      errs.message = "Please enter a message.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable submission network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#25f4ee", "#fe2c55", "#ffd600"],
      });
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }, 900);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info & Direct Links */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#25f4ee]/10 border border-[#25f4ee]/30 text-xs font-bold text-[#25f4ee] uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5" />
              Get In Touch
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Say Hello & Share Comedy Ideas
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
              Have a funny video suggestion, collaboration inquiry, or simply want
              to send some encouragement? Send a note directly to Majid!
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-[#121422]/90 border border-white/10 flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#fe2c55]/15 border border-[#fe2c55]/30 flex items-center justify-center text-[#fe2c55]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Direct Email</p>
                  <a
                    href={`mailto:${siteConfig.creator.email}`}
                    className="text-sm font-bold text-white hover:text-[#25f4ee] transition-colors"
                  >
                    {siteConfig.creator.email}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#121422]/90 border border-white/10 flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#25f4ee]/15 border border-[#25f4ee]/30 flex items-center justify-center text-[#25f4ee]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">TikTok Direct Messages</p>
                  <a
                    href={siteConfig.creator.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-[#fe2c55] transition-colors flex items-center gap-1.5"
                  >
                    <span>{siteConfig.creator.username}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#121524]/90 border border-white/10 shadow-2xl backdrop-blur-xl relative">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-white">
                      Message Sent Successfully! 🎉
                    </h3>
                    <p className="text-sm text-gray-300 max-w-sm mx-auto">
                      Thanks for reaching out! Majid appreciates the love and will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1.5 text-left">
                        <label
                          htmlFor="name"
                          className="block text-xs font-bold uppercase tracking-wider text-gray-300"
                        >
                          Your Name <span className="text-[#fe2c55]">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: "" });
                          }}
                          placeholder="e.g. Alex ComedyFan"
                          className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                            errors.name ? "border-red-500/80" : "border-white/10"
                          } text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#25f4ee] transition-all`}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-400 flex items-center gap-1 pt-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5 text-left">
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold uppercase tracking-wider text-gray-300"
                        >
                          Your Email <span className="text-[#fe2c55]">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: "" });
                          }}
                          placeholder="you@example.com"
                          className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                            errors.email ? "border-red-500/80" : "border-white/10"
                          } text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#25f4ee] transition-all`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-400 flex items-center gap-1 pt-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5 text-left">
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-300"
                      >
                        Message or Joke Idea <span className="text-[#fe2c55]">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: "" });
                        }}
                        placeholder="Write your funny ideas, feedback, or hello message here..."
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                          errors.message ? "border-red-500/80" : "border-white/10"
                        } text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#25f4ee] transition-all resize-none`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-400 flex items-center gap-1 pt-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#fe2c55] to-[#ff0050] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#fe2c55]/25 hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          <span>Sending Message...</span>
                        </div>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
