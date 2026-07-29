"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  CheckCircle2,
  MessageSquare,
  Phone,
  Mic,
  ShieldCheck,
  Zap,
  TrendingDown,
} from "lucide-react";
import {
  PRICING_PLANS,
  ENTERPRISE_PLAN,
  SITE_CONFIG,
  ADDONS,
  CREDIT_PACKS,
  type AddonSlug,
} from "@/lib/utils";

type BillingPeriod = "monthly" | "yearly";

// Per-plan addon selection (each plan tracks its own checkboxes independently)
type AddonState = Record<string, Set<AddonSlug>>;

export function PricingCards() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");
  const [addonsByPlan, setAddonsByPlan] = useState<AddonState>({});

  const toggleAddon = (planId: string, slug: AddonSlug) => {
    setAddonsByPlan((prev) => {
      const next = { ...prev };
      const current = new Set(next[planId] ?? []);
      if (current.has(slug)) current.delete(slug);
      else current.add(slug);
      next[planId] = current;
      return next;
    });
  };

  // Addon yearly multiplier: 11 months (1 month free)
  const ADDON_YEARLY_MULT = 11;
  // Plan yearly multiplier: 10 months (2 months free)
  const PLAN_YEARLY_MULT = 10;

  const fmt = (n: number) => n.toLocaleString("en-US");

  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Billing period toggle */}
        <div className="mb-10 flex items-center justify-center gap-3">
          <button
            onClick={() => setBilling("monthly")}
            className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
              billing === "monthly"
                ? "bg-gray-900 text-white shadow-lg"
                : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all flex items-center gap-2 ${
              billing === "yearly"
                ? "bg-gray-900 text-white shadow-lg"
                : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
            }`}
          >
            Yearly
            <span className="rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-bold text-white">
              SAVE 2 MONTHS
            </span>
          </button>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
          {PRICING_PLANS.map((plan) => {
            const isYearly = billing === "yearly" && plan.priceYearly > 0;
            const displayPrice = isYearly ? plan.priceYearly : plan.price;
            const periodLabel = plan.price === 0 ? "" : isYearly ? "year" : "month";

            const planAddons = addonsByPlan[plan.planId] ?? new Set<AddonSlug>();
            const eligibleAddons = ADDONS.filter((a) =>
              a.eligiblePlans.includes(plan.planId)
            );
            const addonMonthlyTotal = [...planAddons].reduce(
              (sum, slug) => sum + (ADDONS.find((a) => a.slug === slug)?.price ?? 0),
              0
            );
            const addonYearlyTotal = addonMonthlyTotal * ADDON_YEARLY_MULT;
            const addonTotal = isYearly ? addonYearlyTotal : addonMonthlyTotal;
            const totalPrice = displayPrice + addonTotal;

            // Build CTA href with this plan's addons
            const addonParam =
              planAddons.size > 0
                ? `&addons=${[...planAddons].join(",")}`
                : "";
            const ctaHref =
              plan.price === 0
                ? `${SITE_CONFIG.dashboardUrl}${plan.ctaHref}`
                : `${SITE_CONFIG.dashboardUrl}${plan.ctaHref}&billing=${billing}${addonParam}`;

            return (
              <div
                key={plan.planId}
                className={`relative flex flex-col rounded-2xl border-2 bg-white p-5 transition-all ${
                  plan.highlight
                    ? "border-[#18B0D1] shadow-xl lg:-mt-4 lg:mb-4"
                    : "border-gray-200 shadow-sm hover:border-gray-300 hover:shadow-md"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#18B0D1] px-3 py-1 text-[11px] font-bold text-white">
                    Most popular
                  </span>
                )}

                {/* Plan name + description */}
                <h3 className="text-base font-extrabold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-gray-600">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-3 flex items-baseline gap-1">
                  {plan.price === 0 ? (
                    <span className="text-3xl font-extrabold text-gray-900">
                      Free
                    </span>
                  ) : (
                    <>
                      <span className="text-3xl font-extrabold text-gray-900">
                        ${fmt(displayPrice)}
                      </span>
                      <span className="text-xs font-medium text-gray-500">
                        /{periodLabel}
                      </span>
                    </>
                  )}
                </div>

                {/* Addon total (if any selected) */}
                {planAddons.size > 0 && (
                  <div
                    className="mt-2 rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-bold text-white"
                    aria-live="polite"
                  >
                    Total: ${fmt(totalPrice)}/{periodLabel}
                  </div>
                )}

                {isYearly && plan.price > 0 && planAddons.size === 0 && (
                  <p className="mt-2 text-xs font-bold text-green-600">
                    Save ${(plan.price * 12 - plan.priceYearly).toLocaleString()} per year
                  </p>
                )}

                {/* CTA */}
                <Link
                  href={ctaHref}
                  className={`mt-4 block w-full rounded-lg py-2 text-center text-sm font-bold transition-all ${
                    plan.highlight
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </Link>

                {/* Divider */}
                <div className="my-4 border-t border-gray-100" />

                {/* Features */}
                <ul className="flex-1 space-y-2">
                  {plan.features.map((feat, i) => {
                    const f = feat as { text: string; quota?: boolean };
                    return (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#18B0D1]" />
                      <span className="font-medium">
                        {f.text}
                        {isYearly && f.quota ? " / month" : ""}
                      </span>
                    </li>
                    );
                  })}
                </ul>

                {/* Inline add-on checkboxes (per-plan) */}
                {eligibleAddons.length > 0 && (
                  <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-3">
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                      Add-ons (optional)
                    </p>
                    <div className="space-y-1.5">
                      {eligibleAddons.map((addon) => {
                        const checked = planAddons.has(addon.slug);
                        const addonPrice = isYearly
                          ? addon.price * ADDON_YEARLY_MULT
                          : addon.price;
                        return (
                          <label
                            key={addon.slug}
                            htmlFor={`addon-${addon.slug}-${plan.planId}`}
                            className={`flex cursor-pointer items-start gap-2.5 rounded-lg border p-2 transition-all ${
                              checked
                                ? "border-gray-900 bg-white shadow-sm"
                                : "border-transparent hover:bg-white hover:shadow-sm"
                            }`}
                          >
                            <input
                              type="checkbox"
                              id={`addon-${addon.slug}-${plan.planId}`}
                              checked={checked}
                              onChange={() => toggleAddon(plan.planId, addon.slug)}
                              className="mt-0.5 h-3.5 w-3.5 cursor-pointer rounded border-gray-300 accent-[#18B0D1]"
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-1.5">
                                {addon.slug === "whatsapp_campaign" && (
                                  <MessageSquare className="h-3 w-3 text-gray-500" />
                                )}
                                {addon.slug === "sms_campaign" && (
                                  <Phone className="h-3 w-3 text-gray-500" />
                                )}
                                {addon.slug === "ai_voice" && (
                                  <Mic className="h-3 w-3 text-gray-500" />
                                )}
                                {addon.slug === "line_verification" && (
                                  <ShieldCheck className="h-3 w-3 text-gray-500" />
                                )}
                                <span className="text-xs font-bold text-gray-900">
                                  {addon.name}
                                </span>
                                <span className="ml-auto text-xs font-extrabold text-gray-900">
                                  +${fmt(addonPrice)}
                                  <span className="text-[10px] font-medium text-gray-500">
                                    /{isYearly ? "year" : "mo"}
                                  </span>
                                </span>
                              </div>
                              <p className="mt-0.5 text-[11px] text-gray-600">
                                {addon.description}
                              </p>
                              {addon.meteredNote && (
                                <p className="mt-0.5 text-[10px] font-bold text-gray-900">
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

                {/* Plans with no addons: note */}
                {eligibleAddons.length === 0 && plan.price > 0 && (
                  <p className="mt-3 text-[11px] font-medium text-gray-500">
                    Add-ons available on higher plans
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Enterprise strip */}
        <div className="mt-5 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 border-gray-200 bg-gray-900 p-5 sm:flex-row">
          <div>
            <h3 className="text-lg font-extrabold text-white">
              {ENTERPRISE_PLAN.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-gray-300">
              {ENTERPRISE_PLAN.description}
            </p>
          </div>
          <Link
            href={`${SITE_CONFIG.dashboardUrl}${ENTERPRISE_PLAN.ctaHref}`}
            className="rounded-lg bg-white px-6 py-2.5 text-sm font-bold text-gray-900 hover:bg-gray-100"
          >
            {ENTERPRISE_PLAN.cta}
          </Link>
        </div>

        {/* Credit packs section */}
        <div className="mt-12">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Need more credits?
            </h2>
            <p className="mt-2 text-sm font-medium text-gray-600">
              1 credit = 1 lead discovery, 1 email verification, or 1 AI message draft.
              Credits never expire. Buy anytime, no subscription needed.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CREDIT_PACKS.map((pack) => (
              <div
                key={pack.id}
                className={`relative flex flex-col rounded-2xl border-2 bg-white p-4 transition-all ${
                  pack.popular
                    ? "border-gray-900 shadow-lg"
                    : "border-gray-200 shadow-sm hover:border-gray-300"
                }`}
              >
                {pack.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gray-900 px-2.5 py-0.5 text-[10px] font-bold text-white">
                    MOST POPULAR
                  </span>
                )}
                <div className="flex items-center gap-2">
                  <Zap className="h-3.5 w-3.5 text-amber-500" />
                  <span className="text-sm font-bold text-gray-900">
                    {pack.name}
                  </span>
                </div>
                {pack.note && (
                  <p className="mt-0.5 text-[11px] font-medium text-gray-500">
                    {pack.note}
                  </p>
                )}
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-gray-900">
                    {fmt(pack.credits)}
                  </span>
                  <span className="text-xs font-medium text-gray-600">
                    credits
                  </span>
                </div>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-xl font-extrabold text-gray-900">
                    ${fmt(pack.price)}
                  </span>
                  <span className="text-[11px] font-medium text-gray-500">
                    one-time
                  </span>
                </div>
                <div className="mt-1 text-[11px] font-bold text-gray-700">
                  ${pack.perCredit.toFixed(4)} per credit
                </div>
                {pack.savingsPct > 0 && (
                  <div className="mt-1 flex items-center gap-1 text-[11px] font-bold text-green-600">
                    <TrendingDown className="h-3 w-3" />
                    Save {pack.savingsPct}%
                  </div>
                )}
                <Link
                  href={`${SITE_CONFIG.dashboardUrl}/dashboard/credits?pack=${pack.id}`}
                  className={`mt-3 block w-full rounded-lg py-1.5 text-center text-xs font-bold transition-all ${
                    pack.popular
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Buy {fmt(pack.credits)} credits
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-4 text-center text-[11px] font-medium text-gray-500">
            Credits are used for lead discoveries, email verifications, and AI message
            drafts. Unused credits never expire. Add-ons can be cancelled anytime without
            affecting your base plan.
          </p>
        </div>
      </div>
    </section>
  );
}
