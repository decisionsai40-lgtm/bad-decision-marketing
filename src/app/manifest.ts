import type { MetadataRoute } from "next";

// Web App Manifest — powers PWA install prompts and the home-screen icon on
// Android / iOS. Icons reference /icon.svg (the same favicon used in
// <link rel="icon">).
//
// Note: Safari iOS ignores `icons` for the home-screen icon and instead uses
// the apple-touch-icon link, which is set explicitly in src/app/layout.tsx
// (LOW 4). We declare both SVG (modern) and a 192/512 PNG fallback for
// browsers that do not render SVG icons.
//
// FOLLOW-UP — PNG icons for full Android PWA support:
//   The current icons array only references /icon.svg for all sizes. Modern
//   Android (Chrome 76+) renders SVG icons fine, but older Android versions
//   and some launchers require PNG fallbacks at 192×192 and 512×512. To
//   generate them, render `src/app/icon.svg` at the two sizes (e.g. with
//   sharp, librsvg, or `npx @resvg/resvg-cli`) and add entries like:
//
//     { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
//     { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
//     { src: "/icons/maskable-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
//     { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
//
//   Generating PNGs requires image tooling (sharp / resvg) that is not part of
//   this repo's build, so this is flagged as a follow-up.
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
