/**
 * Skeleton for /products/[slug] dynamic route.
 * Matches the layout of the product detail page.
 */
export default function ProductDetailLoading() {
  return (
    <div className="animate-pulse">
      {/* Header */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 h-5 w-48 rounded bg-gray-200" />
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-gray-200" />
            <div className="h-9 w-2/3 rounded bg-gray-200" />
          </div>
          <div className="mt-4 h-6 w-full rounded bg-gray-100" />
          <div className="mt-2 h-6 w-5/6 rounded bg-gray-100" />
          <div className="mt-8 flex gap-3">
            <div className="h-11 w-32 rounded-lg bg-gray-900" />
            <div className="h-11 w-28 rounded-lg bg-gray-200" />
          </div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="aspect-video w-full rounded-2xl border-2 border-gray-200 bg-gray-100" />
        </div>
      </section>

      {/* What you get + How it works */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="h-8 w-40 rounded bg-gray-200" />
              <div className="mt-6 space-y-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-5 rounded bg-gray-100" style={{ width: `${90 - i * 8}%` }} />
                ))}
              </div>
            </div>
            <div>
              <div className="h-8 w-40 rounded bg-gray-200" />
              <div className="mt-6 space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="h-7 w-7 rounded-full bg-gray-200" />
                    <div className="h-5 flex-1 rounded bg-gray-100" style={{ width: `${80 - i * 10}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-8 w-48 rounded bg-gray-200" />
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-2xl border-2 border-gray-200 bg-white p-6">
                <div className="h-9 w-9 rounded-lg bg-gray-200" />
                <div className="mt-3 h-5 w-1/2 rounded bg-gray-200" />
                <div className="mt-2 h-4 w-full rounded bg-gray-100" />
                <div className="mt-2 h-4 w-2/3 rounded bg-gray-100" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
