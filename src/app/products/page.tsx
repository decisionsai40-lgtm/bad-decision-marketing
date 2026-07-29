import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { SITE_CONFIG } from "@/lib/utils";
import { PRODUCTS, type Product } from "@/lib/products";

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Everything you need to find and close customers"
        subtitle="One platform replaces your lead database, email tool, messaging apps, dialer, scheduler, and automation software."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Analytics showcase */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Track every lead, email, call, and booking in one place
          </h2>
          <p className="mt-4 text-center text-lg font-medium text-gray-600">
            Live numbers. No spreadsheets. No guesswork.
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-2 shadow-xl">
            <img
              src="/screenshots/overview.png"
              alt="Bad Decision analytics dashboard"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            One platform. Ten modules. Zero copy-paste.
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-gray-900 hover:bg-gray-100 sm:w-auto"
            >
              Start free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/20 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({ product: p }: { product: Product }) {
  const Icon: LucideIcon = p.icon;
  const isNew = p.slug === "steady-ai";
  return (
    <Link
      href={`/products/${p.slug}`}
      className={`card-premium group relative flex flex-col overflow-hidden ${
        isNew ? "ring-2 ring-[#18B0D1]" : ""
      }`}
    >
      {isNew && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-[#18B0D1] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow">
          New
        </span>
      )}
      {p.screenshot ? (
        <div className="aspect-[16/9] overflow-hidden border-b-2 border-gray-100 bg-gray-50">
          <img
            src={p.screenshot}
            alt={p.screenshotAlt ?? p.name}
            className="h-full w-full object-cover object-top transition-transform group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/9] items-center justify-center border-b-2 border-gray-100 bg-[#003D4D]">
          <Icon className="h-12 w-12 text-[#18B0D1]" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#18B0D1]">
            <Icon className="h-4 w-4 text-white" />
          </div>
          <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-[#18B0D1]">
            {p.name}
          </h3>
        </div>
        <p className="mt-3 text-sm font-medium text-gray-600">{p.tagline}</p>
        <ul className="mt-4 space-y-2">
          {p.features.slice(0, 4).map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#18B0D1]" />
              <span className="font-medium">{b}</span>
            </li>
          ))}
        </ul>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#18B0D1]">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
