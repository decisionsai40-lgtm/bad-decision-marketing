import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import {
  PRICING_PLANS,
  ENTERPRISE_PLAN,
  SITE_CONFIG,
} from "@/lib/utils";
import { PricingJsonLd } from "@/components/seo/json-ld";
import { PricingCards } from "./_pricing-cards";

export const metadata: Metadata = {
  title: "Pricing — Simple and clear",
  description:
    "Bad Decision pricing: Free forever, Starter, Growth, and Pro plans. Pay monthly or yearly (get 2 months free). Cancel anytime. 7-day money-back promise. No setup fees and no contracts.",
  alternates: { canonical: "/pricing" },
};

const COMPARISON_FEATURES = [
  {
    category: "Finding leads",
    rows: [
      { feature: "Lead discoveries per month", values: ["50", "1,000", "5,000", "25,000"] },
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
      { feature: "Email verifications per month", values: ["100", "1,000", "5,000", "25,000"] },
      { feature: "Careful email check", values: [true, true, true, true] },
      { feature: "Catch-all detection", values: [true, true, true, true] },
      { feature: "Disposable email blocking", values: [true, true, true, true] },
      { feature: "Risk toggle per campaign", values: [true, true, true, true] },
    ],
  },
  {
    category: "Message writing",
    rows: [
      { feature: "AI message drafts per month", values: ["50", "1,000", "5,000", "25,000"] },
      { feature: "6 writing styles", values: [true, true, true, true] },
      { feature: "Personal message for each lead", values: [true, true, true, true] },
      { feature: "Write many messages at once", values: [false, true, true, true] },
    ],
  },
  {
    category: "Campaign sending",
    rows: [
      { feature: "Email inboxes", values: ["1", "3", "10", "30"] },
      { feature: "Email campaign sends per month", values: ["—", "1,500", "10,000", "50,000"] },
      { feature: "Inbox trust building", values: [false, true, true, true] },
      { feature: "Smart sending across inboxes", values: [false, true, true, true] },
      { feature: "Campaign sequence steps", values: ["—", "3", "Unlimited", "Unlimited"] },
      { feature: "A/B testing", values: [false, false, true, true] },
      { feature: "One inbox for all replies", values: [false, true, true, true] },
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

const PRICING_FAQS = [
  {
    q: "Do my monthly quotas roll over if I don't use them?",
    a: "No — quotas reset on your billing date each month. This keeps things fair for everyone and lets us keep prices low.",
  },
  {
    q: "What happens if I hit my limit mid-month?",
    a: "You can upgrade to a higher plan instantly from your dashboard billing settings. The new limits take effect right away, and we adjust the price for the days left in your billing period.",
  },
  {
    q: "How does yearly billing work?",
    a: "Pay upfront for 10 months, get 12 months of access (2 months free). Your quotas still reset monthly. If you cancel mid-year, you keep access until the end of your prepaid period — no refunds for unused months.",
  },
  {
    q: "Can I switch between monthly and yearly?",
    a: "Yes — you can switch from monthly to yearly at any time from your billing settings. Switching from yearly back to monthly takes effect at the end of your current yearly period.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Visa, Mastercard, American Express, and local cards via Flutterwave. All prices are in USD.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes — if you cancel within 7 days of your first paid subscription and have not sent more than 100 campaign emails, we will refund 100 percent. No questions asked. See our full refund policy for details.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PricingJsonLd />
      <PageHeader
        title="One subscription. Everything you need."
        subtitle="Cancel anytime with a 7-day money-back promise on your first paid plan. There are no setup fees, no contracts, and no hidden costs."
      />

      {/* Plan cards (client component with billing toggle) */}
      <PricingCards />

      {/* How credits work */}
      <section className="pb-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="card-premium p-6 text-center">
            <h3 className="text-sm font-bold text-[var(--color-foreground)]">How credits work</h3>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              Every plan includes monthly credits. 1 credit = 1 lead discovery, 1 email verification, or 1 AI message draft.
              Unused credits roll over one month. Buy additional credits anytime from your dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise strip — sales-led */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="card-premium p-8 sm:p-10">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold text-[var(--color-foreground)]">
                  {ENTERPRISE_PLAN.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  {ENTERPRISE_PLAN.description}
                </p>
                <div className="mt-4 text-3xl font-bold text-[var(--color-foreground)]">
                  {ENTERPRISE_PLAN.price}
                </div>
              </div>
              <div className="lg:col-span-1">
                <ul className="space-y-2">
                  {ENTERPRISE_PLAN.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-success)]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center lg:col-span-1 lg:justify-end">
                <Link
                  href={ENTERPRISE_PLAN.ctaHref}
                  className="btn-secondary"
                >
                  {ENTERPRISE_PLAN.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-[var(--color-surface)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[var(--color-foreground)]">
            Full feature comparison
          </h2>
          <p className="mt-2 text-center text-[var(--color-text-secondary)]">
            Every feature side by side with no hidden upsells. Monthly prices are shown,
            and yearly billing saves you 2 months.
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
                        {plan.price === 0
                          ? "Free"
                          : `$${plan.price}/mo`}
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

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[var(--color-foreground)]">
            Pricing FAQ
          </h2>
          <div className="mt-10 space-y-6">
            {PRICING_FAQS.map((faq) => (
              <div key={faq.q} className="card-premium p-6">
                <h3 className="text-base font-bold text-[var(--color-foreground)]">
                  {faq.q}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                  {faq.a}
                </p>
              </div>
            ))}
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
              If you cancel within 7 days of your first paid subscription and
              have not sent more than 100 campaign emails, we will refund 100
              percent. No questions asked.{" "}
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
