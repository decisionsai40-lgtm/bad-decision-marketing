import { renderOgImage, OG_IMAGE_SIZE, OG_IMAGE_CONTENT_TYPE } from "@/lib/og-image";

// Standard Open Graph image — 1200×630 PNG. Used by Facebook, LinkedIn,
// Slack, Discord, etc. when sharing any page on the site that does not
// override `openGraph.images` itself. The actual design lives in
// `src/lib/og-image.tsx` (LOW 3 DRY fix) so `twitter-image.tsx` shares it.
// (File uses .tsx not .ts because Next.js / TypeScript require the .tsx
// extension for files that contain JSX — ImageResponse takes JSX.)
export const alt = "Bad Decision — find, reach, and book customers with AI";
export const size = OG_IMAGE_SIZE;
export const contentType = OG_IMAGE_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage();
}
