"use client";

import React, { useState, useMemo } from "react";
import { VideoItem } from "@/types";
import { VideoCard } from "./VideoCard";
import { categoriesData } from "@/data/categories";
import { Search, Filter, Sparkles, Smile, RefreshCcw } from "lucide-react";

interface VideoGridProps {
  videos: VideoItem[];
  onSelectVideo: (video: VideoItem) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function VideoGrid({
  videos,
  onSelectVideo,
  selectedCategory,
  onSelectCategory,
}: VideoGridProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered video list based on category and search query
  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const matchesCategory =
        selectedCategory === "all" || video.category === selectedCategory;
      const matchesSearch =
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (video.tags &&
          video.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          ));
      return matchesCategory && matchesSearch;
    });
  }, [videos, selectedCategory, searchQuery]);

  return (
    <section id="videos" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25f4ee]/10 border border-[#25f4ee]/30 text-xs font-bold text-[#25f4ee] uppercase tracking-wider">
            <Smile className="w-3.5 h-3.5" />
            Watch & Laugh
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Latest Funny Videos{" "}
            <span className="inline-block text-2xl sm:text-4xl">😂</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-normal">
            A curated library of comedy sketches, relatable mishaps, and viral TikTok
            masterpieces. Choose a category or search for your favorite joke!
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#111420]/80 p-3 sm:p-4 rounded-3xl border border-white/10 backdrop-blur-md">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categoriesData.slice(0, 5).map((cat) => {
              const isActive = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.slug)}
                  className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "bg-gradient-to-r from-[#fe2c55] to-[#ff0050] text-white shadow-md shadow-[#fe2c55]/30"
                      : "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search funny videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#25f4ee] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Video Grid or Empty State */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onSelect={onSelectVideo}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center space-y-4 rounded-3xl bg-white/5 border border-white/5">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto text-2xl">
              😂
            </div>
            <h3 className="text-xl font-bold text-white">No funny videos found</h3>
            <p className="text-sm text-gray-400 max-w-sm mx-auto">
              We couldn't find any videos matching your search. Try another query or reset the filter!
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                onSelectCategory("all");
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-all"
            >
              <RefreshCcw className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
