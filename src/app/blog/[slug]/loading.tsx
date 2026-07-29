export default function BlogPostLoading() {
  return (
    <article className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 h-5 w-28 animate-pulse rounded bg-[var(--color-muted)]" />
        <div className="mb-3 flex items-center gap-3">
          <div className="h-6 w-20 animate-pulse rounded-full bg-[var(--color-muted)]" />
          <div className="h-5 w-16 animate-pulse rounded bg-[var(--color-muted)]" />
        </div>
        <div className="mb-4 h-10 w-full animate-pulse rounded bg-[var(--color-muted)]" />
        <div className="mb-4 h-6 w-3/4 animate-pulse rounded bg-[var(--color-muted)]" />
        <div className="mb-8 h-5 w-48 animate-pulse rounded bg-[var(--color-muted)]" />
        <div className="mb-8 aspect-video animate-pulse rounded-xl bg-[var(--color-muted)]" />
        <div className="space-y-3">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="h-4 animate-pulse rounded bg-[var(--color-muted)]"
              style={{ width: `${Math.max(40, 90 - i * 5)}%` }}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
