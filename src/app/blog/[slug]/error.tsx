"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";

export default function BlogPostError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Blog post error:", error);
  }, [error]);

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--color-foreground)]">
          Could not load this post
        </h1>
        <p className="mt-4 text-[var(--color-text-secondary)]">
          The blog post might have been removed or there was a temporary error.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button onClick={reset} className="btn-primary">
            <RefreshCw className="h-4 w-4" />
            Try again
          </button>
          <Link href="/blog" className="btn-secondary">
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
        </div>
      </div>
    </section>
  );
}
