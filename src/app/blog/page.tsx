import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Cold Email, Lead Generation & Outbound Sales Guides",
  description:
    "Guides, comparisons, and tutorials on cold email, lead generation, email verification, and outbound sales. Learn how Bad Decision compares to Instantly and Smartlead.",
  alternates: { canonical: "/blog" },
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.baddecision.app";

async function getPosts(category?: string) {
  try {
    const fetchUrl = `${API_URL}/api/v1/blog/posts?limit=24${
      category ? `&category=${encodeURIComponent(category)}` : ""
    }`;
    const res = await fetch(fetchUrl, { next: { revalidate: 300 } });
    if (!res.ok) return { posts: [], total: 0 };
    return res.json();
  } catch {
    return { posts: [], total: 0 };
  }
}

async function getCategories() {
  try {
    const res = await fetch(`${API_URL}/api/v1/blog/categories`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return { categories: [] };
    return res.json();
  } catch {
    return { categories: [] };
  }
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const [{ posts, total }, { categories }] = await Promise.all([
    getPosts(category),
    getCategories(),
  ]);

  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Guides, comparisons, and tutorials on cold email, lead generation, and outbound sales."
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          {categories.length > 0 && (
            <div className="mb-10 flex flex-wrap gap-2">
              <Link
                href="/blog"
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  !category
                    ? "bg-[var(--color-primary)] text-white"
                    : "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)]/50"
                }`}
              >
                All
              </Link>
              {categories.map((cat: { name: string; count: number }) => {
                const isActive = category === cat.name;
                return (
                  <Link
                    key={cat.name}
                    href={`/blog?category=${encodeURIComponent(cat.name)}`}
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      isActive
                        ? "bg-[var(--color-primary)] text-white"
                        : "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)]/50"
                    }`}
                  >
                    {cat.name} ({cat.count})
                  </Link>
                );
              })}
            </div>
          )}

          {/* Posts grid */}
          {posts.length === 0 ? (
            <div className="card-premium p-12 text-center">
              <p className="text-lg font-semibold text-[var(--color-foreground)]">
                Articles coming soon.
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                We are writing in-depth guides on cold email, lead generation, and outbound sales. Check back shortly.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post: any) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="card-premium group flex flex-col overflow-hidden"
                >
                  {post.cover_image && (
                    <div className="aspect-video overflow-hidden rounded-t-xl">
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="rounded-full bg-[var(--color-muted)] px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[var(--color-text-dim)]">
                        <Clock className="h-3 w-3" />
                        {post.reading_time_minutes} min
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)]">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="mb-4 flex-1 text-sm text-[var(--color-text-secondary)] line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[var(--color-text-dim)]">
                        {post.author_name}
                      </span>
                      <ArrowRight className="h-4 w-4 text-[var(--color-primary)] transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
