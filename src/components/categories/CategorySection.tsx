"use client";

import React from "react";
import { motion } from "framer-motion";
import { categoriesData } from "@/data/categories";
import { ArrowRight, Sparkles } from "lucide-react";

interface CategorySectionProps {
  onSelectCategory: (slug: string) => void;
}

export function CategorySection({ onSelectCategory }: CategorySectionProps) {
  // Exclude 'all' from display cards
  const displayCategories = categoriesData.filter((c) => c.slug !== "all");

  const handleCardClick = (slug: string) => {
    onSelectCategory(slug);
    const target = document.getElementById("videos");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="categories" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffd600]/10 border border-[#ffd600]/30 text-xs font-bold text-[#ffd600] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Explore Flavors Of Comedy
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Browse By Category
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Pick your preferred mood — from quick 15-second punchlines to full-scale situational comedy.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCardClick(cat.slug)}
              className="group relative p-6 sm:p-7 rounded-3xl bg-[#121422]/90 border border-white/10 hover:border-white/20 shadow-xl cursor-pointer overflow-hidden transition-all duration-300 flex flex-col justify-between h-52"
            >
              {/* Subtle dynamic background glow */}
              <div
                className={`absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br ${cat.gradient} blur-2xl opacity-40 group-hover:opacity-80 transition-opacity`}
              />

              <div>
                {/* Emoji & Counter Pill */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                    {cat.emoji}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/5 text-gray-400 border border-white/5">
                    {cat.count} videos
                  </span>
                </div>

                {/* Title & Description */}
                <div className="mt-4 space-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#25f4ee] transition-colors flex items-center gap-2">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#fe2c55] group-hover:text-white transition-colors">
                <span>Explore Clips</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
