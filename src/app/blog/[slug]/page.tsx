import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.baddecision.app";

async function getPost(slug: string) {
  try {
    const res = await fetch(`${API_URL}/api/v1/blog/posts/${slug}`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

// Pre-render the most recent posts at build time; the rest are rendered on
// demand and cached via ISR (next: { revalidate: 300 }) in getPost above.
export async function generateStaticParams() {
  try {
    const res = await fetch(`${API_URL}/api/v1/blog/posts?limit=20`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.posts || []).map((post: { slug: string }) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getPost(slug);
  if (!data || !data.post) {
    return { title: "Post Not Found" };
  }
  const post = data.post;
  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt || post.title,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt || post.title,
      images: post.og_image || post.cover_image ? [{ url: post.og_image || post.cover_image }] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getPost(slug);

  if (!data || !data.post) {
    notFound();
  }

  const { post, related } = data;

  return (
    <>
      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-[var(--color-muted)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-[var(--color-text-dim)]">
                <Clock className="h-3.5 w-3.5" />
                {post.reading_time_minutes} min read
              </span>
            </div>
            <h1 className="text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
                {post.excerpt}
              </p>
            )}
            <div className="mt-4 flex items-center gap-3 text-sm text-[var(--color-text-dim)]">
              <span>By {post.author_name}</span>
              {post.published_at && (
                <>
                  <span>·</span>
                  <span>
                    {new Date(post.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Cover image */}
          {post.cover_image && (
            <div className="mb-8 overflow-hidden rounded-xl">
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full"
              />
            </div>
          )}

          {/* Content — rendered with react-markdown (GFM + sanitised). The
              previous hand-rolled parser produced invalid HTML (unwrapped
              <li>, <br> for blank lines) and silently dropped links, code,
              bold, italic, and images. */}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>

      {/* Related posts */}
      {related && related.length > 0 && (
        <section className="border-t border-[var(--color-border)] py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-2xl font-bold text-[var(--color-foreground)]">
              Related articles
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((rel: any) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="card-premium group p-5"
                >
                  <span className="mb-2 inline-block rounded-full bg-[var(--color-muted)] px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
                    {rel.category}
                  </span>
                  <h3 className="text-lg font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)]">
                    {rel.title}
                  </h3>
                  {rel.excerpt && (
                    <p className="mt-2 text-sm text-[var(--color-text-secondary)] line-clamp-2">
                      {rel.excerpt}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
