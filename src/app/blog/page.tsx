import { SITE_CONFIG } from "@/lib/utils";
import { PageHeader } from "@/components/sections/page-header";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export const revalidate = 3600; // ISR: revalidate every hour

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.baddecision.app";

async function getPosts(category?: string) {
  try {
    const url = category
      ? `${API_URL}/api/v1/blog/posts?limit=24&category=${encodeURIComponent(category)}`
      : `${API_URL}/api/v1/blog/posts?limit=24`;
    const res = await fetch(url, {
      next: { revalidate: 3600 },
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
      cache: "no-store",
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
        subtitle="Guides and tutorials on cold email, lead generation, and reaching out to customers."
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
                Check back for new articles every week.
              </p>
              <p className="mt-2 text-sm font-medium text-gray-500">
                We are writing guides on cold email, lead generation, and reaching
                out to customers. Come back soon for fresh reads.
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
        </div>
      </section>
    </>
  );
}
