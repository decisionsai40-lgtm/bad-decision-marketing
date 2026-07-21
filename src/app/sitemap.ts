import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    "",
    "/blog",
    "/pricing",
    "/how-it-works",
    "/case-studies",
    "/guarantee",
    "/about",
    "/contact",
    "/faq",
    "/affiliates",
    "/privacy",
    "/terms",
    "/refund",
    "/cookie-policy",
    "/dpa",
  ];

  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/pricing") || route.startsWith("/how-it-works") ? 0.9 : route.startsWith("/blog") ? 0.8 : 0.6,
  }));

  // Dynamically add published blog posts
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.baddecision.app";
  try {
    const res = await fetch(`${API_URL}/api/v1/blog/posts?limit=100`, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      const blogEntries: MetadataRoute.Sitemap = (data.posts || []).map((post: any) => ({
        url: `${SITE_CONFIG.url}/blog/${post.slug}`,
        lastModified: post.published_at ? new Date(post.published_at) : now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));
      return [...staticEntries, ...blogEntries];
    }
  } catch {
    // If API is down, just return static entries
  }

  return staticEntries;
}
