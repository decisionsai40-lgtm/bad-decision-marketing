import React from "react";

/**
 * JSON-LD structured data components for SEO.
 *
 * Each component renders a `<script type="application/ld+json">` tag with the
 * schema.org payload for that type. Next.js App Router supports emitting
 * these from any Server Component — they end up in the rendered HTML and are
 * picked up by Google's Rich Results parser.
 *
 * Usage:
 *   import { BreadcrumbJsonLd, ArticleJsonLd } from "@/components/seo/json-ld";
 *
 *   <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, ...]} />
 *   <ArticleJsonLd
 *     title={post.title}
 *     description={post.excerpt}
 *     slug={post.slug}
 *     image={post.cover_image}
 *     datePublished={post.published_at}
 *     authorName={post.author_name}
 *   />
 */

interface JsonLdBaseProps {
  /** Override the JSON-LD @type. Defaults are set per component. */
  schema?: Record<string, unknown>;
}

/**
 * Render a raw JSON-LD object inside a <script> tag. The other components
 * are thin wrappers around this.
 */
function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // SECURITY (H2): JSON.stringify does NOT escape "<". Blog titles,
      // excerpts, and author names come from the CMS — a title containing
      // `</script><script>…` would break out of this tag and execute on
      // the public page. Escaping "<" as \u003c is inert inside JSON
      // strings but kills the script-tag breakout.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

// ----------------------------------------------------------------
// BreadcrumbList
// ----------------------------------------------------------------
export interface BreadcrumbItem {
  /** Display name of the crumb, e.g. "Home" or "Blog". */
  name: string;
  /** Absolute site path (we resolve to an absolute URL with the site origin). */
  path: string;
}

export interface BreadcrumbJsonLdProps extends JsonLdBaseProps {
  items: BreadcrumbItem[];
  /** Site origin used to absolutize paths, e.g. "https://baddecision.app". */
  siteUrl?: string;
}

/**
 * Render a schema.org/BreadcrumbList JSON-LD block.
 *
 * Used on inner pages (blog posts, product pages, integration pages) so
 * Google can show breadcrumb trails in search results.
 */
export function BreadcrumbJsonLd({
  items,
  siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://baddecision.app",
}: BreadcrumbJsonLdProps) {
  if (!items || items.length === 0) return null;
  const baseUrl = siteUrl.replace(/\/$/, "");
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${baseUrl}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  };
  return <JsonLdScript data={data} />;
}

// ----------------------------------------------------------------
// Article (BlogPosting)
// ----------------------------------------------------------------
export interface ArticleJsonLdProps extends JsonLdBaseProps {
  title: string;
  description?: string;
  /** Path of the article on the site (we resolve to an absolute URL). */
  slug: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName: string;
  siteUrl?: string;
}

/**
 * Render a schema.org/BlogPosting JSON-LD block for a blog post.
 */
export function ArticleJsonLd({
  title,
  description,
  slug,
  image,
  datePublished,
  dateModified,
  authorName,
  siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://baddecision.app",
}: ArticleJsonLdProps) {
  const baseUrl = siteUrl.replace(/\/$/, "");
  const slugPath = slug.startsWith("/") ? slug : `/blog/${slug}`;
  const url = `${baseUrl}${slugPath}`;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Bad Decision",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/icon.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
  };
  if (description) data.description = description;
  if (image) {
    data.image = image.startsWith("http") ? image : `${baseUrl}${image.startsWith("/") ? image : `/${image}`}`;
  }
  if (datePublished) data.datePublished = datePublished;
  if (dateModified) data.dateModified = dateModified;
  return <JsonLdScript data={data} />;
}

// ----------------------------------------------------------------
// Organization (sitewide, used on home/about)
// ----------------------------------------------------------------
export interface OrganizationJsonLdProps {
  name?: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
}

/**
 * Render a schema.org/Organization JSON-LD block.
 * Used on the home page so Google has a canonical organization entity.
 */
export function OrganizationJsonLd({
  name = "Bad Decision",
  url = process.env.NEXT_PUBLIC_SITE_URL || "https://baddecision.app",
  logo,
  sameAs,
}: OrganizationJsonLdProps) {
  const baseUrl = url.replace(/\/$/, "");
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url: baseUrl,
    logo: logo ?? `${baseUrl}/icon.svg`,
  };
  if (sameAs && sameAs.length > 0) data.sameAs = sameAs;
  return <JsonLdScript data={data} />;
}

// Re-export the script helper for tests / advanced consumers.
export { JsonLdScript };
