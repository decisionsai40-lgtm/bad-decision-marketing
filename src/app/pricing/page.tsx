import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { PRICING_PLANS, SITE_CONFIG } from "@/lib/utils";
import { PricingJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Pricing — Simple, transparent, scalable",
  description:
    "Bad Decision pricing: Free forever, Starter, Growth, and Pro plans. Cancel anytime. 7-day money-back guarantee on first subscription. No setup fees, no contracts. See full feature comparison.",
  alternates: { canonical: "/pricing" },
};

const COMPARISON_FEATURES = [
  {
    category: "Finding leads",
    rows: [
      { feature: "Leads per month", values: ["50/search", "1,000", "5,000", "25,000"] },
      { feature: "Companies & Professionals engine", values: [true, true, true, true] },
      { feature: "Ads Running engine", values: [false, true, true, true] },
      { feature: "Ecommerce engine", values: [false, true, true, true] },
      { feature: "Web Absent engine", values: [false, true, true, true] },
      { feature: "Save your searches", values: [true, true, true, true] },
    ],
  },
  {
    category: "Email checking",
    rows: [
      { feature: "Email checks per month", values: ["100", "1,000", "5,000", "25,000"] },
      { feature: "Deep email verification", values: [true, true, true, true] },
      { feature: "Catch-all detection", values: [true, true, true, true] },
      { feature: "Disposable email blocking", values: [true, true, true, true] },
      { feature: "Risk toggle per campaign", values: [true, true, true, true] },
    ],
  },
  {
    category: "AI message drafting",
    rows: [
      { feature: "AI drafts per month", values: ["50", "1,000", "5,000", "25,000"] },
      { feature: "6 writing styles", values: [true, true, true, true] },
      { feature: "Personal message for each lead", values: [true, true, true, true] },
      { feature: "Batch generation", values: [false, true, true, true] },
    ],
  },
  {
    category: "Campaign sending",
    rows: [
      { feature: "Email inboxes", values: ["1", "3", "10", "30"] },
      { feature: "Campaign sends per month", values: ["—", "1,500", "10,000", "50,000"] },
      { feature: "Inbox warmup", values: [false, true, true, true] },
      { feature: "Send rotation + throttle", values: [false, true, true, true] },
      { feature: "Campaign sequence steps", values: ["—", "3", "Unlimited", "Unlimited"] },
      { feature: "A/B testing", values: [false, false, true, true] },
      { feature: "Unified inbox + reply sorting", values: [false, true, true, true] },
      { feature: "Block list", values: [true, true, true, true] },
    ],
  },
  {
    category: "Team & extras",
    rows: [
      { feature: "Workspace + team members", values: [false, false, true, true] },
      { feature: "Webhooks + API access", values: [false, false, false, true] },
      { feature: "CRM sync", values: [false, false, false, true] },
      { feature: "Dedicated success manager", values: [false, false, false, true] },
      { feature: "Priority support", values: [false, false, true, true] },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <PricingJsonLd />
      <PageHeader
        title="One subscription. Everything you need."
        subtitle="Cancel anytime. 7-day money-back guarantee on first paid subscription. No setup fees, no contracts, no hidden costs."
      />

      {/* Plan cards */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`card-premium relative flex flex-col p-6 ${
                  plan.highlight
                    ? "border-[var(--color-primary)] shadow-lg ring-2 ring-[var(--color-primary)]/20"
                    : ""
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-[var(--color-foreground)]">{plan.name}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{plan.description}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[var(--color-foreground)]">
                    ${plan.price}
                  </span>
                  <span className="text-sm text-[var(--color-text-muted)]">/{plan.period}</span>
                </div>
                <ul className="mt-6 flex-1 space-y-2">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-primary)]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.ctaHref}
                  className={`mt-6 block w-full text-center text-sm font-semibold ${
                    plan.highlight ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[var(--color-text-muted)]">
            All plans include deep email verification, spam-law compliant sending, and the
            full Bad Decision dashboard. Need something custom?{" "}
            <Link href="/contact?topic=enterprise" className="text-[var(--color-primary)] hover:underline">
              Talk to us
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-[var(--color-surface)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[var(--color-foreground)]">
            Full feature comparison
          </h2>
          <p className="mt-2 text-center text-[var(--color-text-secondary)]">
            Every feature, side by side. No hidden upsells.
          </p>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="py-4 text-left text-sm font-semibold text-[var(--color-text-muted)]">
                    Feature
                  </th>
                  {PRICING_PLANS.map((plan) => (
                    <th
                      key={plan.name}
                      className={`px-4 py-4 text-center text-sm font-bold ${
                        plan.highlight
                          ? "text-[var(--color-primary)]"
                          : "text-[var(--color-foreground)]"
                      }`}
                    >
                      {plan.name}
                      <div className="text-xs font-normal text-[var(--color-text-muted)]">
                        ${plan.price}/{plan.period === "forever" ? "" : "mo"}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((group) => (
                  <Fragment key={group.category}>
                    <tr className="bg-[var(--color-muted)]">
                      <td
                        colSpan={5}
                        className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]"
                      >
                        {group.category}
                      </td>
                    </tr>
                    {group.rows.map((row) => (
                      <tr
                        key={row.feature}
                        className="border-b border-[var(--color-border-light)]"
                      >
                        <td className="py-3 text-sm text-[var(--color-text-secondary)]">
                          {row.feature}
                        </td>
                        {row.values.map((val, i) => (
                          <td key={i} className="px-4 py-3 text-center text-sm">
                            {typeof val === "boolean" ? (
                              val ? (
                                <CheckCircle2 className="mx-auto h-4 w-4 text-[var(--color-success)]" />
                              ) : (
                                <span className="text-[var(--color-text-dim)]">—</span>
                              )
                            ) : (
                              <span className="font-medium text-[var(--color-foreground)]">
                                {val}
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guarantee + CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="card-premium p-8">
            <Sparkles className="mx-auto h-10 w-10 text-[var(--color-primary)]" />
            <h2 className="mt-4 text-2xl font-bold text-[var(--color-foreground)]">
              7-day money-back guarantee
            </h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              If you cancel within 7 days of your first paid subscription and have not sent
              more than 100 campaign emails, we will refund 100 percent. No questions asked.{" "}
              <Link href="/refund" className="text-[var(--color-primary)] hover:underline">
                See full refund policy
              </Link>
              .
            </p>
            <Link
              href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
              className="btn-primary mt-6 inline-flex"
            >
              Get started free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
