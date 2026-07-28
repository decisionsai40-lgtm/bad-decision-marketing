"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { CheckCircle2, MessageSquare, Phone } from "lucide-react";
import {
  PRICING_PLANS,
  ENTERPRISE_PLAN,
  SITE_CONFIG,
  ADDONS,
  addonsTotal,
  type AddonSlug,
} from "@/lib/utils";

type BillingPeriod = "monthly" | "yearly";

export function PricingCards() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");
  // Track selected add-ons (shared between Growth & Pro — user picks ONE plan)
  const [selectedAddons, setSelectedAddons] = useState<Set<AddonSlug>>(new Set());

  const toggleAddon = (slug: AddonSlug) => {
    setSelectedAddons((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };

  const addonTotal = useMemo(() => addonsTotal([...selectedAddons]), [selectedAddons]);

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
              plan.period === "forever" ? "forever" : isYearly ? "year" : "month";
            const yearlySavings =
              plan.price > 0 ? plan.price * 12 - plan.priceYearly : 0;

            const canBuyAddons = plan.planId === "growth" || plan.planId === "pro";
            const planAddonTotal = canBuyAddons ? addonTotal : 0;
            const totalPrice = displayPrice + (isYearly ? planAddonTotal * 10 : planAddonTotal);

            // Build CTA href with addons if selected
            const addonParam = canBuyAddons && selectedAddons.size > 0
              ? `&addons=${[...selectedAddons].join(",")}`
              : "";
            const ctaHref =
              plan.price === 0
                ? `${SITE_CONFIG.dashboardUrl}${plan.ctaHref}`
                : `${SITE_CONFIG.dashboardUrl}${plan.ctaHref}&billing=${billing}${addonParam}`;

            return (
              <div
                key={plan.name}
                className={`card-premium relative flex flex-col p-6 ${
                  plan.highlight
                    ? "border-[var(--color-primary)] shadow-lg ring-2 ring-[var(--color-primary)]/20"
                    : ""
                } ${canBuyAddons && selectedAddons.size > 0 ? "ring-2 ring-[var(--color-primary)]/30" : ""}`}
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
                {/* Live total when addons selected on Growth/Pro */}
                {canBuyAddons && planAddonTotal > 0 && (
                  <div className="mt-1.5 text-sm font-bold text-[var(--color-primary)]" aria-live="polite">
                    Total: ${totalPrice.toLocaleString()}/{periodLabel}
                  </div>
                )}
                {isYearly && yearlySavings > 0 && planAddonTotal === 0 && (
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

                {/* Inline add-on checkboxes — Growth & Pro ONLY */}
                {canBuyAddons && (
                  <div className="mt-5 rounded-lg border border-[var(--color-border)] bg-[var(--color-muted)] p-4">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                      Add-ons (optional)
                    </p>
                    <div className="space-y-3">
                      {ADDONS.filter((a) => a.eligiblePlans.includes(plan.planId)).map((addon) => {
                        const checked = selectedAddons.has(addon.slug);
                        return (
                          <label
                            key={addon.slug}
                            htmlFor={`addon-${addon.slug}-${plan.planId}`}
                            className="flex cursor-pointer items-start gap-3 rounded-md p-2 transition-colors hover:bg-[var(--color-surface)]"
                          >
                            <input
                              type="checkbox"
                              id={`addon-${addon.slug}-${plan.planId}`}
                              checked={checked}
                              onChange={() => toggleAddon(addon.slug)}
                              className="mt-0.5 h-4 w-4 cursor-pointer rounded border-[var(--color-border)] accent-[var(--color-primary)]"
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-1.5">
                                {addon.slug === "whatsapp_campaign" ? (
                                  <MessageSquare className="h-3.5 w-3.5 text-[var(--color-text-muted)]" />
                                ) : (
                                  <Phone className="h-3.5 w-3.5 text-[var(--color-text-muted)]" />
                                )}
                                <span className="text-sm font-medium text-[var(--color-foreground)]">
                                  {addon.name}
                                </span>
                                <span className="ml-auto text-sm font-semibold text-[var(--color-foreground)]">
                                  +${addon.price}/mo
                                </span>
                              </div>
                              <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">
                                {addon.description}
                              </p>
                              {addon.meteredNote && (
                                <p className="mt-0.5 text-[11px] font-medium text-[var(--color-primary)]">
                                  {addon.meteredNote}
                                </p>
                              )}
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Non-eligible plans: note about addons */}
                {(plan.planId === "free" || plan.planId === "starter") && (
                  <p className="mt-4 text-xs text-[var(--color-text-muted)]">
                    Add-ons available on Growth &amp; Pro
                  </p>
                )}

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

        {/* Enterprise strip */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:flex-row">
          <div>
            <h3 className="text-lg font-bold text-[var(--color-foreground)]">
              {ENTERPRISE_PLAN.name}
            </h3>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              {ENTERPRISE_PLAN.description} WhatsApp + SMS add-ons included.
            </p>
          </div>
          <Link
            href={`${SITE_CONFIG.dashboardUrl}${ENTERPRISE_PLAN.ctaHref}`}
            className="btn-secondary whitespace-nowrap text-sm font-semibold"
          >
            {ENTERPRISE_PLAN.cta}
          </Link>
        </div>

        <p className="mt-8 text-center text-sm text-[var(--color-text-muted)]">
          All plans include careful email checks, spam-law friendly sending, and the
          full Bad Decision dashboard. Add-ons can be cancelled anytime without
          affecting your base plan.
        </p>
      </div>
    </section>
  );
}
