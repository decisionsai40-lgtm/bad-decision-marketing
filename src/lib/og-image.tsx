import { ImageResponse } from "next/og";

/**
 * Shared Open Graph + Twitter card image generator.
 *
 * Both `src/app/opengraph-image.tsx` and `src/app/twitter-image.tsx` re-export
 * from this module so the 1200×630 design lives in ONE place (LOW 3 DRY fix).
 *
 * `next/og`'s `ImageResponse` renders JSX to a PNG using Satori. The runtime
 * is the Edge runtime by default, which is why callers must declare
 * `export const runtime = "edge"` if they need edge-only APIs — but the
 * default Node runtime also works for static OG images.
 */

export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export const OG_IMAGE_SIZE = { width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT };
export const OG_IMAGE_CONTENT_TYPE = "image/png";

/**
 * Render the OG / Twitter card image. Returns a `Response`-like `ImageResponse`
 * that Next.js App Router picks up when returned from the default export of an
 * `opengraph-image.tsx` / `twitter-image.tsx` file.
 *
 * Design:
 *   - Brand teal background (#003D4D) with a darker footer band
 *   - Large "BD" mark on the left (matches the favicon + manifest icon)
 *   - Brand name + tagline on the right
 */
export function renderOgImage(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#003D4D",
          color: "#ffffff",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "24px",
              backgroundColor: "#18B0D1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "64px",
              fontWeight: 800,
            }}
          >
            BD
          </div>
          <div style={{ fontSize: "48px", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Bad Decision
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
            }}
          >
            Find, reach, and book customers with AI
          </div>
          <div style={{ fontSize: "32px", color: "#a5d8e6", maxWidth: "900px" }}>
            One platform for lead generation, multi-channel outreach, and meeting booking.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "24px",
            color: "#a5d8e6",
          }}
        >
          <span>baddecision.app</span>
          <span>Email · WhatsApp · SMS · AI Voice</span>
        </div>
      </div>
    ),
    OG_IMAGE_SIZE,
  );
}
