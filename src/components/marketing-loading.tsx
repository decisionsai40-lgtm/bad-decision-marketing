/**
 * Generic marketing page skeleton — header + content blocks.
 * Used by loading.tsx for marketing sub-routes.
 */
export default function MarketingLoading() {
  return (
    <div className="py-16 sm:py-24 animate-pulse">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero skeleton */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <div className="h-12 w-3/4 mx-auto rounded-lg bg-[var(--color-muted)]" />
          <div className="h-6 w-full mx-auto rounded bg-[var(--color-muted)]" />
          <div className="h-6 w-5/6 mx-auto rounded bg-[var(--color-muted)]" />
          <div className="flex justify-center gap-3 pt-4">
            <div className="h-10 w-40 rounded-lg bg-[var(--color-muted)]" />
            <div className="h-10 w-32 rounded-lg bg-[var(--color-muted)]" />
          </div>
        </div>

        {/* Cards skeleton */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="card-premium p-6 space-y-3">
              <div className="h-6 w-1/2 rounded bg-[var(--color-muted)]" />
              <div className="h-4 w-full rounded bg-[var(--color-muted)]" />
              <div className="h-4 w-5/6 rounded bg-[var(--color-muted)]" />
              <div className="h-4 w-3/4 rounded bg-[var(--color-muted)]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
