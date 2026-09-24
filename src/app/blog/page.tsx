import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/utils";
import { PageHeader } from "@/components/sections/page-header";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, ChevronLeft, ChevronRight } from "lucide-react";

// ISR: revalidate every 60s so newly published posts appear on
// baddecision.app/blog within a minute without a redeploy.
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Honest guides on cold outreach, lead generation, multi-channel sending, AI voice, and booking more meetings.",
  alternates: { canonical: "/blog" },
};

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://bad-decision-api-933906758268.europe-west1.run.app";

const POSTS_PER_PAGE = 10;

async function getPosts(category?: string, page = 1) {
  try {
    const offset = (page - 1) * POSTS_PER_PAGE;
    const params = new URLSearchParams({
      limit: String(POSTS_PER_PAGE),
      offset: String(offset),
    });
    if (category) params.set("category", category);
    const res = await fetch(`${API_URL}/api/v1/blog/posts?${params.toString()}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return { posts: [], total: 0 };
    return res.json();
  } catch {
    return { posts: [], total: 0 };
  }
}

async function getCategories() {
  try {
    const res = await fetch(`${API_URL}/api/v1/blog/categories`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return { categories: [] };
    return res.json();
  } catch {
    return { categories: [] };
  }
}

function parsePage(value: string | undefined): number {
  const n = Number.parseInt(value ?? "1", 10);
  return Number.isFinite(n) && n > 0 ? n : 1;
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>;
}) {
  const { category, page: pageParam } = await searchParams;
  const page = parsePage(pageParam);
  const [{ posts, total }, { categories }] = await Promise.all([
    getPosts(category, page),
    getCategories(),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE));
  const hasPrev = page > 1;
  const hasNext = page < totalPages;

  // Build a URL for pagination links, preserving the active category filter.
  const pageHref = (n: number) => {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (n > 1) params.set("page", String(n));
    const qs = params.toString();
    return qs ? `/blog?${qs}` : "/blog";
  };

  // Only render the pagination bar when there are enough posts to justify it.
  // The blog index is the marketing-site entry point — for small catalogues
  // (<20 posts) a single page reads better than numbered pagination.
  const showPagination = total > POSTS_PER_PAGE;

  return (
    <>
      <PageHeader
        title="The Bad Decision blog"
        subtitle="Honest guides on cold outreach, lead generation, and booking more meetings."
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          {categories.length > 0 && (
            <div className="mb-10 flex flex-wrap gap-2">
              <Link
                href="/blog"
                className={`rounded-full px-4 py-2 text-sm font-bold ${
                  !category
                    ? "bg-gray-900 text-white"
                    : "border-2 border-gray-200 bg-white text-gray-700 hover:border-gray-400"
                }`}
              >
                All
              </Link>
              {categories.map((cat: { name: string; count: number }) => (
                <Link
                  key={cat.name}
                  href={`/blog?category=${encodeURIComponent(cat.name)}`}
                  className={`rounded-full border-2 px-4 py-2 text-sm font-bold ${
                    category === cat.name
                      ? "border-gray-900 bg-gray-900 text-white"
                      : "border-gray-200 bg-white text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {cat.name} ({cat.count})
                </Link>
              ))}
            </div>
          )}

          {/* Posts grid */}
          {posts.length === 0 ? (
            <div className="card-premium p-12 text-center">
              <p className="text-lg font-extrabold text-gray-900">
                New articles drop every week.
              </p>
              <p className="mt-2 text-sm font-medium text-gray-500">
                Come back soon for fresh reads on cold outreach and lead generation.
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
                    <div className="relative aspect-video overflow-hidden rounded-t-xl">
                      <Image
                        src={post.cover_image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-gray-700">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-medium text-gray-500">
                        <Clock className="h-3 w-3" />
                        {post.reading_time_minutes} min
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-extrabold text-gray-900 group-hover:text-gray-700">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="mb-4 flex-1 text-sm font-medium text-gray-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500">
                        {post.author_name}
                      </span>
                      <ArrowRight className="h-4 w-4 text-gray-900 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination — 10 posts per page. Only rendered when the catalogue
              has more than one page of posts; the prev/next links use plain
              <Link> so ISR caches each page independently. */}
          {showPagination && (
            <nav
              aria-label="Blog pagination"
              className="mt-12 flex items-center justify-center gap-4"
            >
              <Link
                href={pageHref(page - 1)}
                aria-disabled={!hasPrev}
                aria-label="Previous page"
                className={`inline-flex items-center gap-1 rounded-lg border-2 px-4 py-2 text-sm font-bold ${
                  hasPrev
                    ? "border-gray-200 bg-white text-gray-900 hover:border-gray-400"
                    : "pointer-events-none border-gray-100 bg-gray-50 text-gray-300"
                }`}
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Link>
              <span className="text-sm font-medium text-gray-500">
                Page {page} of {totalPages}
              </span>
              <Link
                href={pageHref(page + 1)}
                aria-disabled={!hasNext}
                aria-label="Next page"
                className={`inline-flex items-center gap-1 rounded-lg border-2 px-4 py-2 text-sm font-bold ${
                  hasNext
                    ? "border-gray-200 bg-white text-gray-900 hover:border-gray-400"
                    : "pointer-events-none border-gray-100 bg-gray-50 text-gray-300"
                }`}
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Link>
            </nav>
          )}
        </div>
      </section>
    </>
  );
}
