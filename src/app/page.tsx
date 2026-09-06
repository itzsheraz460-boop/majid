"use client";

import React, { useState } from "react";
import { LoadingScreen } from "@/components/loading/LoadingScreen";
import { AnimatedBackground } from "@/components/background/AnimatedBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { FeaturedVideo } from "@/components/videos/FeaturedVideo";

import { CategorySection } from "@/components/categories/CategorySection";
import { AboutSection } from "@/components/about/AboutSection";

import { TikTokCTA } from "@/components/tiktok/TikTokCTA";
import { SocialSection } from "@/components/social/SocialSection";
import { TeamSection } from "@/components/team/TeamSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { VideoModal } from "@/components/videos/VideoModal";
import { videosData } from "@/data/videos";
import { VideoItem } from "@/types";

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Find the designated featured video, or fallback to the first video
  const featuredVideo = videosData.find((v) => v.featured) || videosData[0];

  return (
    <div className="relative min-h-screen bg-[#08090d] text-gray-100 flex flex-col selection:bg-[#fe2c55] selection:text-white">
      {/* 15. Animated Loading Experience */}
      <LoadingScreen />

      {/* 3. Animated Background Layer */}
      <AnimatedBackground />

      {/* 4. Sticky Glass Navigation */}
      <Navbar />

      <main className="flex-grow z-10">
        {/* 2. Animated Hero Section */}
        <Hero />

        {/* 6. Featured Animated Team Showcase Section */}
        <FeaturedVideo />

        {/* 7. Category Showcase */}
        <CategorySection
          onSelectCategory={(slug) => setSelectedCategory(slug)}
        />



        {/* 8. About Majid Section */}
        <AboutSection />

        <TeamSection />

        {/* 9. TikTok Follow CTA */}
        <TikTokCTA />

        {/* 11. Social Media Channels */}
        <SocialSection />

        {/* 12. Validated Contact Section */}
        <ContactSection />
      </main>

      {/* 13. Professional Footer */}
      <Footer />

      {/* Video Modal / Lightbox */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
}
