export default function BlogLoading() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-10 w-24 animate-pulse rounded-full bg-[var(--color-muted)]"
            />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="card-premium overflow-hidden">
              <div className="aspect-video animate-pulse bg-[var(--color-muted)]" />
              <div className="p-5 space-y-3">
                <div className="h-4 w-20 animate-pulse rounded bg-[var(--color-muted)]" />
                <div className="h-6 w-full animate-pulse rounded bg-[var(--color-muted)]" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-[var(--color-muted)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
