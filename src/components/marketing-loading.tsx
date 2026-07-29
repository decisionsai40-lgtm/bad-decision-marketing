/**
 * Generic marketing page skeleton that matches the new high-contrast style.
 * Used by loading.tsx for marketing sub-routes.
 */
export default function MarketingLoading() {
  return (
    <div className="animate-pulse bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero skeleton */}
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <div className="mx-auto h-12 w-3/4 rounded-lg bg-gray-200" />
          <div className="mx-auto h-6 w-full rounded bg-gray-100" />
          <div className="mx-auto h-6 w-5/6 rounded bg-gray-100" />
          <div className="flex justify-center gap-3 pt-4">
            <div className="h-10 w-40 rounded-lg bg-gray-900" />
            <div className="h-10 w-32 rounded-lg bg-gray-200" />
          </div>
        </div>

        {/* Cards skeleton */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-3 rounded-2xl border-2 border-gray-200 bg-white p-6">
              <div className="h-6 w-1/2 rounded bg-gray-200" />
              <div className="h-4 w-full rounded bg-gray-100" />
              <div className="h-4 w-5/6 rounded bg-gray-100" />
              <div className="h-4 w-3/4 rounded bg-gray-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
