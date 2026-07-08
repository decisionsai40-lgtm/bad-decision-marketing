import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/pricing",
    "/how-it-works",
    "/case-studies",
    "/guarantee",
    "/about",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
    "/refund",
    "/cookie-policy",
    "/dpa",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/pricing") || route.startsWith("/how-it-works") ? 0.9 : 0.6,
  }));
}
