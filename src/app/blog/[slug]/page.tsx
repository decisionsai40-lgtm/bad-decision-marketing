import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
} from "@/components/seo/json-ld";

// ISR: revalidate every 60s so edits/publishes propagate within a minute.
export const revalidate = 60;

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://bad-decision-api-933906758268.europe-west1.run.app";

async function getPost(slug: string) {
  try {
    const res = await fetch(`${API_URL}/api/v1/blog/posts/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

// Per-post metadata: title + description come from the API response so each
// article has its own card in search results and social shares. The layout
// template appends "— Bad Decision" automatically, so we deliberately do NOT
// include the brand name in the returned title (LOW 1).
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getPost(slug);
  if (!data || !data.post) {
    return { title: "Article not found" };
  }
  const { post } = data;
  return {
    title: post.title,
    description: post.excerpt ?? "Honest guides on cold outreach and lead generation.",
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt ?? "",
      publishedTime: post.published_at,
      authors: post.author_name ? [post.author_name] : undefined,
      images: post.cover_image ? [{ url: post.cover_image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt ?? "",
      images: post.cover_image ? [post.cover_image] : undefined,
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
      {/* SEO structured data: breadcrumb + article. Renders a
          <script type="application/ld+json"> for Google Rich Results. */}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${slug}` },
        ]}
      />
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        slug={slug}
        image={post.cover_image}
        datePublished={post.published_at}
        authorName={post.author_name}
      />

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gray-700">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-sm font-medium text-gray-500">
                <Clock className="h-3.5 w-3.5" />
                {post.reading_time_minutes} min read
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-4 text-lg font-medium text-gray-600">
                {post.excerpt}
              </p>
            )}
            <div className="mt-4 flex items-center gap-3 text-sm font-medium text-gray-500">
              <span>By {post.author_name}</span>
              {post.published_at && (
                <>
                  <span>&middot;</span>
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
            <div className="relative mb-8 aspect-video overflow-hidden rounded-xl border-2 border-gray-200">
              <Image
                src={post.cover_image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSanitize]}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full border-2 border-gray-200 px-3 py-1 text-xs font-bold text-gray-700"
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
        <section className="border-t-2 border-gray-200 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-2xl font-extrabold text-gray-900">
              Related articles
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((rel: any) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="card-premium group p-5"
                >
                  <span className="mb-2 inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-gray-700">
                    {rel.category}
                  </span>
                  <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-gray-700">
                    {rel.title}
                  </h3>
                  {rel.excerpt && (
                    <p className="mt-2 text-sm font-medium text-gray-600 line-clamp-2">
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
