# Majid Funny Video 😂 - Official Entertainment Website

A premium, highly animated, modern entertainment platform built for the TikTok creator brand **Majid Funny Video** ([@majid.funy.video.1](https://www.tiktok.com/@majid.funy.video.1)).

---

## 🌟 Highlights

- **Framework**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS with custom glassmorphism, glowing borders, and TikTok neon themes
- **Animations**: Framer Motion (floating emojis, 3D creator profile, smooth entrance reveals, layout tabs, micro-interactions)
- **Video Experience**: Custom video modal/lightbox with full HTML5 video controls, pause/play, mute, fullscreen, and confetti like reactions
- **Accessibility & Performance**: Full `prefers-reduced-motion` compliance, responsive across all screen sizes, zero layout shifts
- **SEO Ready**: Dynamic OpenGraph, Twitter Cards, `robots.txt`, `sitemap.xml`, and JSON-LD Person & WebSite schema markup

---

## 🚀 Getting Started

### 1. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
npm start
```

---

## 🛠️ How to Customize & Manage Content (Admin-Ready Architecture)

All content is strictly separated from the UI logic so you can easily update it anytime:

### 1. Change TikTok Handle, Creator Bio, or Social Links
Edit [`src/config/site.ts`](./src/config/site.ts):
- `creator.username`: Change `@majid.funy.video.1`
- `creator.tiktokUrl`: Update TikTok link
- `socials`: Enable or disable Instagram, YouTube, Facebook channels
- `statistics`: Modify display statistics anytime

### 2. Adding / Replacing Videos
Edit [`src/data/videos.ts`](./src/data/videos.ts):
Add or edit items using the `VideoItem` schema:
```typescript
{
  id: "v-new-1",
  title: "Your Video Title 😂",
  description: "Funny description here...",
  thumbnail: "https://... or /images/thumb.jpg",
  videoUrl: "https://... or /videos/myvideo.mp4",
  category: "funny-videos", // Matches category slug
  date: "Mar 2026",
  views: "150K",
  likes: "20K",
  duration: "0:45",
  featured: false
}
```

### 3. Adding Moments to Gallery
Edit [`src/data/gallery.ts`](./src/data/gallery.ts) to update photos and captions.

### 4. Customizing Categories
Edit [`src/data/categories.ts`](./src/data/categories.ts) to add or edit category tabs and emojis.

---

## 📱 Features Overview

- **Hero Section**: Animated title with rotating comedy emoji, dual animated CTA buttons (*Watch Funny Videos* & *Follow Me on TikTok*), and a 3D pulsing creator profile with orbiting emojis (`😂`, `🤣`, `😎`, `🔥`).
- **Featured Video**: Spotlight video player with animated glowing border, live view/like counters, share link, and direct TikTok follow button.
- **Categories Grid**: 6 interactive category cards with custom gradients and hover scaling that filter videos on click.
- **Video Catalog & Lightbox**: Responsive grid with search and category filters, card lift effects, and accessible modal video player.
- **About Majid**: Creator story, verified creator badge, and animated statistics cards.
- **TikTok CTA**: Viral banner featuring an interactive TikTok mobile phone mockup with music wave animations.
- **Gallery**: Masonry grid of behind-the-scenes moments with lightbox view.
- **Socials & Contact Form**: Dynamic social cards and a validated contact form with realistic error handling and celebratory confetti.
- **Footer**: Brand motto, quick links, privacy policy & terms modals, and copyright notice.
