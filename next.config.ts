import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.mixkit.co",
      },
      {
        protocol: "https",
        hostname: "p16-common-sign.tiktokcdn.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      }
    ],
  },
};

export default nextConfig;
