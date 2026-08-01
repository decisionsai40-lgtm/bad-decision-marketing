import type { NextConfig } from "next";

// ───────────────────────────────────────────────────────────────────────────
// Security headers / CSP
// ───────────────────────────────────────────────────────────────────────────
// vercel.json is the SINGLE source of truth for security headers + CSP.
//
// We intentionally do NOT define `headers()` here. Next.js would emit a
// duplicate `Content-Security-Policy` header on every route, and the browser
// would intersect the two policies — breaking PostHog (which needs
// `https://us.posthog.com` in script-src/connect-src) and forcing us to
// allow `unsafe-eval`, which is otherwise unnecessary on a static marketing
// site.
//
// The vercel.json CSP keeps `'unsafe-inline'` in `script-src` and `style-src`
// because Next.js (App Router) injects inline runtime chunks (the RSC payload,
// `next/font` CSS variables, and PostHog's bootstrapper). Without it the page
// would not hydrate. `'unsafe-eval'` is NOT required and is therefore omitted.
// ───────────────────────────────────────────────────────────────────────────

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // External image hosts used by blog cover images and case-study avatars.
    // Local images under /public (e.g. /screenshots/*.png) need no entry.
    remotePatterns: [
      { protocol: "https", hostname: "**.baddecision.app" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
