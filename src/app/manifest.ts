import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bad Decision — Find Real Buyers. Skip The Ghost Towns.",
    short_name: "Bad Decision",
    description:
      "The all-in-one platform for outbound sales. Find leads, verify emails, draft messages, send campaigns, track replies.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4fafb",
    theme_color: "#00a8cc",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
