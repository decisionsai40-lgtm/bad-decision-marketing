import type { NextConfig } from "next";

// ───────────────────────────────────────────────────────────────────────────
// Security headers / CSP
// ───────────────────────────────────────────────────────────────────────────
// The marketing site ships on BOTH Vercel (legacy) and Cloudflare Workers
// (OpenNext, primary). vercel.json is read by Vercel; `headers()` is read by
// Next/OpenNext. Both emit the SAME values, so the browser's policy
// intersection is identical and no directive becomes stricter.
//
// The CSP keeps `'unsafe-inline'` in `script-src` and `style-src` because
// Next.js (App Router) injects inline runtime chunks (the RSC payload,
// `next/font` CSS variables, and PostHog's bootstrapper). Without it the
// page would not hydrate. `'unsafe-eval'` is NOT required and is omitted.
// ───────────────────────────────────────────────────────────────────────────

const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline' https://us.posthog.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'self'; base-uri 'self'; form-action 'self' https:; object-src 'none'",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    // Cloudflare Workers cannot use Vercel's proprietary image optimizer.
    // `unoptimized: true` serves the origin image bytes untouched.
    unoptimized: true,
    // External image hosts used by blog cover images and case-study avatars.
    // Local images under /public (e.g. /screenshots/*.png) need no entry.
    remotePatterns: [
      { protocol: "https", hostname: "**.baddecision.app" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async headers() {
    return [{ source: "/(.*)", headers: SECURITY_HEADERS }];
  },
};

export default nextConfig;
