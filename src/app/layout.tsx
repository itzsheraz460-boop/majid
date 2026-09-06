import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { teamMembers } from "@/data/team";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#08090d" },
    { media: "(prefers-color-scheme: dark)", color: "#08090d" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Majid Funny Video | Viral TikTok Comedy & Funny Sketches",
    template: "%s | Majid Funny Video",
  },
  description:
    "Official entertainment hub of Majid Funny Video. Watch viral TikTok comedy sketches, hilarious daily reactions, and entertaining parodies by Majid and crew (Shoaib RB, Sajid, Arshad, Sheraz).",
  applicationName: "Majid Funny Video",
  authors: [
    { name: "Majid", url: siteConfig.creator.tiktokUrl },
    { name: "Sheraz", url: siteConfig.creator.tiktokUrl },
  ],
  generator: "Next.js",
  keywords: [
    "Majid Funny Video",
    "Majid TikTok",
    "@majid.funy.video.1",
    "Pakistani Comedy Videos",
    "Viral TikTok Comedy",
    "Funny Sketches 2026",
    "TikTok Creator Majid",
    "Shoaib RB Actor",
    "Sajid Actor",
    "Arshad Actor",
    "Sheraz Cameraman Editor",
    "Desi Funny Videos",
    "Hilarious Comedy Clips",
    "Trending TikTok Memes",
    "Short Comedy Video",
    "Majid Comedy Team",
  ],
  creator: "Majid & Sheraz",
  publisher: "Majid Funny Video",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ur_PK"],
    url: siteConfig.url,
    title: "Majid Funny Video | Viral TikTok Comedy & Funny Sketches",
    description:
      "Watch viral comedy sketches, entertaining short videos, and hilarious parodies by Majid Funny Video. Spreading nonstop smiles and positive vibes daily!",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/majid_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Majid Funny Video - Official 3D Entertainment Logo",
        type: "image/jpeg",
      },
      {
        url: "/images/shoaib_rb.png",
        width: 800,
        height: 800,
        alt: "Shoaib RB - Actor at Majid Funny Video",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Majid Funny Video | Viral TikTok Comedy & Funny Sketches",
    description:
      "Watch viral comedy sketches and hilarious daily videos by Majid & Team. Follow @majid.funy.video.1!",
    images: ["/images/majid_logo.jpg"],
    creator: siteConfig.creator.username,
    site: "@majid_funny_video",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: ["en", "ur"],
      },
      {
        "@type": "PerformingGroup",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/majid_logo.png`,
        image: `${siteConfig.url}/images/majid_logo.jpg`,
        description: siteConfig.creator.detailedBio,
        sameAs: siteConfig.socials.map((s) => s.url),
        member: teamMembers.map((member) => ({
          "@type": "Person",
          name: member.name,
          jobTitle: member.role,
          image: `${siteConfig.url}${member.img}`,
          telephone: member.phone || undefined,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Categories",
            item: `${siteConfig.url}/#categories`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "About",
            item: `${siteConfig.url}/#about`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Meet the Team",
            item: `${siteConfig.url}/#team`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Contact",
            item: `${siteConfig.url}/#contact`,
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href={siteConfig.url} />
        <meta name="author" content="Majid & Team" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="2 days" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-[#08090d] text-gray-100 antialiased selection:bg-[#fe2c55] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}

