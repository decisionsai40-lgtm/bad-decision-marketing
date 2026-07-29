import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { SITE_CONFIG, cn } from "@/lib/utils";
import {
  INTEGRATIONS,
  STATUS_LABELS,
  STATUS_CLASSES,
  type Integration,
} from "@/lib/integrations";

const CATEGORY_ORDER = [
  "Email",
  "Messaging",
  "CRM",
  "Scheduling",
  "AI Assistants",
  "Verification",
];

const CATEGORIES: { name: string; integrations: Integration[] }[] =
  CATEGORY_ORDER.map((name) => ({
    name,
    integrations: INTEGRATIONS.filter((i) => i.category === name),
  })).filter((c) => c.integrations.length > 0);

export default function IntegrationsPage() {
  return (
    <>
      <PageHeader
        title="Connect the tools you already use"
        subtitle="BadDecision works with the tools in your stack. No manual data entry, no copy-paste."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {CATEGORIES.map((cat) => (
              <div key={cat.name}>
                <h2 className="text-2xl font-extrabold text-gray-900">{cat.name}</h2>
                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.integrations.map((i) => (
                    <IntegrationCard key={i.slug} integration={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Stop juggling tabs. Start closing.
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
              href="/products"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/20 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              See all products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function IntegrationCard({ integration: i }: { integration: Integration }) {
  const Icon: LucideIcon = i.icon;
  return (
    <Link
      href={`/integrations/${i.slug}`}
      className="card-premium group flex flex-col p-5"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#18B0D1]">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <span
          className={cn(
            "rounded-full border px-3 py-1 text-xs font-bold",
            STATUS_CLASSES[i.status],
          )}
        >
          {STATUS_LABELS[i.status]}
        </span>
      </div>
      <h3 className="mt-4 text-base font-extrabold text-gray-900 group-hover:text-[#18B0D1]">
        {i.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-gray-600">{i.description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#18B0D1]">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
