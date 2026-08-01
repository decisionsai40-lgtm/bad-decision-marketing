import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";
import { INTEGRATIONS } from "@/lib/integrations";

// Production origin. Falls back to the public URL when the env var is not set
// (e.g. local dev / preview branches).
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://baddecision.app";

// Static, top-level marketing + legal routes.
// Each entry can be overridden below if it has a more specific lastModified.
const STATIC_ROUTES: { path: string; lastModified?: string }[] = [
  { path: "" }, // home
  { path: "/pricing" },
  { path: "/how-it-works" },
  { path: "/products" },
  { path: "/integrations" },
  { path: "/case-studies" },
  { path: "/blog" },
  { path: "/faq" },
  { path: "/about" },
  { path: "/contact" },
  { path: "/affiliates" },
  { path: "/security" },
  { path: "/guarantee" },
  // Legal pages — keep lastModified in sync with the lastUpdated strings on
  // each legal page (see terms/page.tsx, privacy/page.tsx, etc).
  { path: "/terms", lastModified: "2025-01-01" },
  { path: "/privacy", lastModified: "2025-01-01" },
  { path: "/cookie-policy", lastModified: "2025-01-01" },
  { path: "/dpa", lastModified: "2025-01-01" },
  { path: "/refund", lastModified: "2025-01-01" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(
    ({ path, lastModified }) => ({
      url: `${SITE_URL}${path || "/"}`,
      lastModified: lastModified ? new Date(lastModified).toISOString() : now,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1.0 : 0.7,
    }),
  );

  // Dynamic product pages — static list from lib/products.ts
  const productEntries: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${SITE_URL}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Dynamic integration pages — static list from lib/integrations.ts
  const integrationEntries: MetadataRoute.Sitemap = INTEGRATIONS.map((i) => ({
    url: `${SITE_URL}/integrations/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...productEntries, ...integrationEntries];
}
