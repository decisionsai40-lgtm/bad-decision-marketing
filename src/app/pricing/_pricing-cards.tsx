"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { PRICING_PLANS } from "@/lib/utils";

type BillingPeriod = "monthly" | "yearly";

export function PricingCards() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Billing period toggle */}
        <div className="mb-10 flex items-center justify-center gap-3">
          <button
            onClick={() => setBilling("monthly")}
            className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
              billing === "monthly"
                ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/20"
                : "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)]/50"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
              billing === "yearly"
                ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/20"
                : "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)]/50"
            } flex items-center gap-2`}
          >
            Yearly
            <span className="rounded bg-[var(--color-success)]/20 px-1.5 py-0.5 text-[11px] font-bold text-[var(--color-success)]">
              2 MONTHS FREE
            </span>
          </button>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PRICING_PLANS.map((plan) => {
            const isYearly = billing === "yearly" && plan.priceYearly > 0;
            const displayPrice = isYearly ? plan.priceYearly : plan.price;
            const periodLabel =
              plan.period === "forever"
                ? "forever"
                : isYearly
                  ? "year"
                  : "month";
            const yearlySavings =
              plan.price > 0 ? plan.price * 12 - plan.priceYearly : 0;
            const ctaHref =
              plan.price === 0
                ? plan.ctaHref
                : `${plan.ctaHref}&billing=${billing}`;

            return (
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
                <h3 className="text-lg font-bold text-[var(--color-foreground)]">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {plan.description}
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  {plan.price === 0 ? (
                    <span className="text-4xl font-bold text-[var(--color-foreground)]">
                      Free
                    </span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-[var(--color-foreground)]">
                        ${displayPrice.toLocaleString()}
                      </span>
                      <span className="text-sm text-[var(--color-text-muted)]">
                        /{periodLabel}
                      </span>
                    </>
                  )}
                </div>
                {isYearly && yearlySavings > 0 && (
                  <div className="mt-1.5 text-xs font-semibold text-[var(--color-success)]">
                    Save ${yearlySavings} per year
                  </div>
                )}
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
                  href={ctaHref}
                  className={`mt-6 block w-full text-center text-sm font-semibold ${
                    plan.highlight ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-[var(--color-text-muted)]">
          All plans include deep email verification, spam-law compliant sending,
          and the full Bad Decision dashboard.
        </p>
      </div>
    </section>
  );
}
