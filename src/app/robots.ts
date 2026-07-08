import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // AI crawlers — explicitly welcome
      {
        userAgent: ["GPTBot", "ChatGPT-User", "Claude-Web", "Claude-User", "PerplexityBot", "Perplexity-User", "Google-Extended", "Bingbot", "CCBot", "anthropic-ai", "cohere-ai"],
        allow: "/",
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    host: SITE_CONFIG.url,
  };
}
