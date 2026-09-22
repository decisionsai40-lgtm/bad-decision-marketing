import { renderOgImage, OG_IMAGE_SIZE, OG_IMAGE_CONTENT_TYPE } from "@/lib/og-image";

// Twitter/X card image — same 1200×630 PNG as the OG image (LOW 3 DRY fix:
// shared design in `src/lib/og-image.tsx`). Picked up by Next.js App Router
// and rendered as the `twitter:image` meta tag in <head>.
export const alt = "Bad Decision — find, reach, and book customers with AI";
export const size = OG_IMAGE_SIZE;
export const contentType = OG_IMAGE_CONTENT_TYPE;

export default function TwitterImage() {
  return renderOgImage();
}
