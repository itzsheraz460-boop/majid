// TikTokFeed component to embed TikTok timeline or video
// Note: TikTok embed works per video. For a feed, you may need to embed multiple videos or use third‑party widget.
// This simple implementation embeds the user's TikTok profile using a blockquote.

"use client";

import React, { useEffect } from "react";
import { siteConfig } from "@/config/site";

export function TikTokFeed() {
  useEffect(() => {
    // Load TikTok embed script once
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">
        Latest TikTok Videos
      </h2>
      {/* Embed the creator's TikTok profile – each video can be added manually or via API */}
      <blockquote
        className="tiktok-embed"
        cite={siteConfig.creator.tiktokUrl}
        data-embed-type="profile"
        style={{ maxWidth: "605px", margin: "0 auto" }}
      >
        <section>
          <a target="_blank" href={siteConfig.creator.tiktokUrl}>@{siteConfig.creator.username}</a>
        </section>
      </blockquote>
    </section>
  );
}
