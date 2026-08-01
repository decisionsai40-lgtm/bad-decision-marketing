import type { MetadataRoute } from "next";

// Web App Manifest — powers PWA install prompts and the home-screen icon on
// Android / iOS. Icons reference /icon.svg (the same favicon used in
// <link rel="icon">).
//
// Note: Safari iOS ignores `icons` for the home-screen icon and instead uses
// the apple-touch-icon link, which Next.js derives from this manifest when no
// explicit one is provided. We declare both SVG (modern) and a 192/512 PNG
// fallback for browsers that do not render SVG icons.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bad Decision",
    short_name: "Bad Decision",
    description:
      "One platform to find leads, verify emails, send multi-channel outreach, and book meetings — powered by AI.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#003D4D",
    orientation: "portrait-primary",
    categories: ["business", "productivity", "sales"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon.svg",
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "maskable",
      },
      {
        src: "/icon.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
