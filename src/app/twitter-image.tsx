import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bad Decision — Twitter Card";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #003d4d 0%, #00a8cc 100%)",
          fontFamily: "sans-serif",
          padding: "60px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "#00a8cc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: 700,
              color: "white",
            }}
          >
            BD
          </div>
          <div style={{ fontSize: "32px", fontWeight: 700, color: "white", display: "flex" }}>
            Bad Decision
          </div>
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex" }}>Find real buyers.</div>
          <div style={{ display: "flex" }}>Skip the ghost towns.</div>
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "rgba(255, 255, 255, 0.85)",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
            display: "flex",
          }}
        >
          Find leads. Check emails. Write messages. Send campaigns. One platform.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "24px",
            color: "rgba(255, 255, 255, 0.6)",
            display: "flex",
          }}
        >
          baddecision.app
        </div>
      </div>
    ),
    size
  );
}
