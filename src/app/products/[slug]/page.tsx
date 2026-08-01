import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import {
  getProductBySlug,
  getRelatedProducts,
  getAllProductSlugs,
  type Product,
} from "@/lib/products";
import { SITE_CONFIG } from "@/lib/utils";

export const revalidate = 3600;

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<Params> }) {
  return params.then(({ slug }) => {
    const product = getProductBySlug(slug);
    if (!product) {
      return { title: "Product not found" };
    }
    return {
      title: `${product.name} | Bad Decision`,
      description: product.tagline,
    };
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(slug, 3);
  const Icon = product.icon;

  return (
    <>
      {/* Breadcrumb + header */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-1.5 text-sm font-bold text-gray-500"
          >
            <Link href="/products" className="hover:text-[#18B0D1]">
              Products
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">{product.name}</span>
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#18B0D1]">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {product.name}
            </h1>
          </div>
          <p className="mt-4 text-lg font-medium text-gray-600 sm:text-xl">
            {product.tagline}
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link
              href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
              className="btn-primary"
            >
              Start free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/pricing" className="btn-secondary">
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Screenshot */}
      {product.screenshot && (
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-2 shadow-xl">
              <Image
                src={product.screenshot}
                alt={product.screenshotAlt ?? product.name}
                width={1440}
                height={900}
                priority
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>
        </section>
      )}

      {/* What you get + How it works */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                What you get
              </h2>
              <ul className="mt-6 space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#18B0D1]" />
                    <span className="font-medium text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                How it works
              </h2>
              <ol className="mt-6 space-y-4">
                {product.howItWorks.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#18B0D1] text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 font-medium text-gray-700">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Available on */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Available on
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {product.plans.map((plan) => (
              <span
                key={plan}
                className="rounded-full border-2 border-gray-200 bg-white px-4 py-1.5 text-sm font-bold text-gray-900"
              >
                {plan}
              </span>
            ))}
          </div>
          <p className="mt-6 text-center text-sm font-medium text-gray-600">
            <Link href="/pricing" className="font-bold text-[#18B0D1] underline">
              See full pricing
            </Link>{" "}
            for limits and add-on prices.
          </p>
        </div>
      </section>

      {/* Related products */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Related products
            </h2>
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-sm font-bold text-[#18B0D1] hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              All products
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((rel) => (
              <RelatedProductCard key={rel.slug} product={rel} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Start with {product.name}
          </h2>
          <p className="mt-4 text-lg font-medium text-gray-300">
            Free to try. No credit card needed.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#18B0D1] px-6 py-3 text-sm font-bold text-white hover:bg-[#1593b0] sm:w-auto"
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

function RelatedProductCard({ product }: { product: Product }) {
  const Icon: LucideIcon = product.icon;
  return (
    <Link
      href={`/products/${product.slug}`}
      className="card-premium group flex flex-col p-6"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#18B0D1]">
          <Icon className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-base font-extrabold text-gray-900 group-hover:text-[#18B0D1]">
          {product.name}
        </h3>
      </div>
      <p className="mt-3 text-sm font-medium text-gray-600">
        {product.tagline}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#18B0D1]">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
