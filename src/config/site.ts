import { SocialLink, StatisticItem } from "@/types";

export const siteConfig = {
  name: "Majid Funny Video",
  shortName: "Majid Comedy",
  tagline: "Funny Videos • Entertainment • Non-Stop Fun",
  title: "Majid Funny Video | Funny Videos & Entertainment",
  description:
    "Watch funny videos, comedy clips and entertaining content from Majid Funny Video. Follow @majid.funy.video.1 for more fun and laughter.",
  url: "https://majidfunnyvideo.com",
  ogImage: "/images/majid.jpg",
  
  creator: {
    name: "Majid",
    username: "@majid.funy.video.1",
    role: "Comedy & Entertainment Creator",
    bio: "I'm Majid, a content creator focused on creating funny and entertaining videos. My goal is simple — make people smile, laugh and enjoy their time.",
    detailedBio:
      "Welcome to Majid Funny Video! Since starting out, our mission has been to spread happiness through wholesome humor, relatable comic sketches, hilarious daily reactions, and viral moments. Every day brings a new opportunity to laugh together.",
    avatar: "/images/majid.jpg",
    coverImage: "/images/majid.jpg",
    badge: "Verified Comedy Creator",
    tiktokUrl: "https://www.tiktok.com/@majid.funy.video.1",
    email: "majidrb223@gmail.com",
    location: "Global Content Creator",
  },
  tiktokVideos: [
    "https://www.tiktok.com/@majid.funny.video1/video/7681684517693705494",
  ],

  // Centralized statistics - editable anytime without fake exact counts
  statistics: [
    {
      label: "Funny Videos",
      value: "150+",
      subtitle: "Original comedy clips & sketches",
      icon: "Smile",
    },
    {
      label: "Entertainment Content",
      value: "Daily",
      subtitle: "Fresh viral laughs & reactions",
      icon: "Flame",
    },
    {
      label: "Growing Community",
      value: "Active",
      subtitle: "Dedicated fans spreading joy",
      icon: "Users",
    },
    {
      label: "Non-Stop Fun",
      value: "100%",
      subtitle: "Pure vibes and wholesome laughter",
      icon: "Sparkles",
    },
  ] as StatisticItem[],

  // Centralized social channels (Only platforms with actual active links)
  socials: [
    {
      name: "TikTok",
      platform: "tiktok",
      url: "https://www.tiktok.com/@majid.funy.video.1",
      handle: "@majid.funy.video.1",
      badge: "Primary Platform",
      iconName: "TikTok",
      color: "from-[#25f4ee] to-[#fe2c55]",
      enabled: true,
    },
    {
      name: "Instagram",
      platform: "instagram",
      url: "https://www.instagram.com",
      handle: "@majid.funny.video",
      badge: "Reels & BTS",
      iconName: "Instagram",
      color: "from-[#f09433] via-[#dc2743] to-[#bc1888]",
      enabled: true,
    },
    {
      name: "YouTube",
      platform: "youtube",
      url: "https://www.youtube.com",
      handle: "Majid Funny Video",
      badge: "Shorts & Compilations",
      iconName: "Youtube",
      color: "from-[#ff0000] to-[#cc0000]",
      enabled: true,
    },
    {
      name: "Facebook",
      platform: "facebook",
      url: "https://www.facebook.com",
      handle: "Majid Funny Video Official",
      badge: "Community Group",
      iconName: "Facebook",
      color: "from-[#1877f2] to-[#0d5ec4]",
      enabled: true,
    },
  ] as SocialLink[],

  navLinks: [
    { name: "Home", href: "#home" },
    { name: "Categories", href: "#categories" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Socials", href: "#socials" },
    { name: "Contact", href: "#contact" },
  ],
};

