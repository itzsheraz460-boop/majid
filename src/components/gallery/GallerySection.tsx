"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData } from "@/data/gallery";
import { GalleryItem } from "@/types";
import { Heart, Sparkles, X, Camera, Eye } from "lucide-react";
import confetti from "canvas-confetti";

export function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedMap((prev) => {
      const next = !prev[id];
      if (next) {
        confetti({
          particleCount: 30,
          spread: 50,
          origin: { y: 0.7 },
          colors: ["#fe2c55", "#25f4ee", "#ffd600"],
        });
      }
      return { ...prev, [id]: next };
    });
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25f4ee]/10 border border-[#25f4ee]/30 text-xs font-bold text-[#25f4ee] uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            Memories & Snapshots
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Moments & Studio Gallery
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Behind the camera, out in the streets, and laughing between sketches.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryData.map((item, idx) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-[#121422] border border-white/10 hover:border-[#25f4ee]/40 shadow-xl cursor-pointer aspect-[4/3]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
              aria-label={`View photo: ${item.title}`}
            >
              {/* Photo */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Category Pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20">
                  {item.category}
                </span>
              </div>

              {/* Details on Bottom */}
              <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between z-10">
                <div className="space-y-1 max-w-[75%]">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#25f4ee] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-1 font-normal">
                    {item.caption}
                  </p>
                </div>

                {/* Like Button */}
                <button
                  onClick={(e) => toggleLike(item.id, e)}
                  className={`p-2.5 rounded-full backdrop-blur-md border transition-all ${
                    likedMap[item.id]
                      ? "bg-[#fe2c55]/30 border-[#fe2c55] text-[#fe2c55]"
                      : "bg-black/40 border-white/20 text-white hover:bg-black/60"
                  }`}
                  aria-label="Like moment"
                >
                  <Heart
                    className={`w-4 h-4 ${likedMap[item.id] ? "fill-[#fe2c55]" : ""}`}
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedItem(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-[#101320] border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all border border-white/10"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video w-full bg-black">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0e101a]">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#25f4ee]">
                    {selectedItem.category}
                  </span>
                  <h3 className="text-xl font-black text-white">
                    {selectedItem.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {selectedItem.caption}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => toggleLike(selectedItem.id, e)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                      likedMap[selectedItem.id]
                        ? "bg-[#fe2c55]/20 border-[#fe2c55] text-[#fe2c55]"
                        : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                    }`}
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        likedMap[selectedItem.id] ? "fill-[#fe2c55]" : ""
                      }`}
                    />
                    <span>
                      {likedMap[selectedItem.id]
                        ? "Loved!"
                        : selectedItem.likes}
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
