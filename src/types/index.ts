export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
  date: string;
  views: string;
  likes: string;
  duration: string;
  featured?: boolean;
  aspectRatio?: "16:9" | "9:16";
  tiktokEmbedUrl?: string;
  tags?: string[];
}

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  emoji: string;
  description: string;
  gradient: string;
  count: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  category: string;
  likes: string;
  date: string;
  type: "image" | "video";
}

export interface SocialLink {
  name: string;
  platform: "tiktok" | "instagram" | "youtube" | "facebook" | "twitter";
  url: string;
  handle: string;
  badge?: string;
  iconName: string;
  color: string;
  enabled: boolean;
}

export interface StatisticItem {
  label: string;
  value: string;
  subtitle: string;
  icon: string;
}
