"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  Plus,
  MessageSquare,
  Phone,
  Mic,
  ShieldCheck,
  Zap,
  TrendingDown,
  type LucideIcon,
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

// Short, scannable top-5 features shown on each plan card.
// The full feature list lives in the comparison table on the pricing page.
const CARD_FEATURES: Record<string, string[]> = {
  free: [
    "50 lead searches",
    "40 email verifications",
    "50 AI drafts",
    "1 inbox",
    "Community support",
  ],
  starter: [
    "15K email sends",
    "Unlimited inboxes",
    "1K lead searches",
    "750 email verifications",
    "Steady AI assistant",
  ],
  growth: [
    "50K contact uploads",
    "5K lead searches",
    "3,750 email verifications",
    "A/B testing",
    "Steady AI assistant",
  ],
  pro: [
    "100K contact uploads",
    "25K lead searches",
    "18,750 email verifications",
    "API + CRM sync",
    "Steady AI assistant",
  ],
};

const ADDON_ICON: Record<AddonSlug, LucideIcon> = {
  sms_campaign: Phone,
  whatsapp_campaign: MessageSquare,
  ai_voice: Mic,
};

const PLAN_LABEL: Record<string, string> = {
  starter: "Starter",
  growth: "Growth",
  pro: "Pro",
  enterprise: "Enterprise",
};

export function PricingCards() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");
  const [selectedAddons, setSelectedAddons] = useState<Set<AddonSlug>>(
    new Set()
  );
  const [showCreditPacks, setShowCreditPacks] = useState(false);

  const toggleAddon = (slug: AddonSlug) => {
    setSelectedAddons((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };

  // Addon yearly multiplier: 11 months (1 month free)
  const ADDON_YEARLY_MULT = 11;

  const fmt = (n: number) => n.toLocaleString("en-US");

  // Build the addon query string for a given plan (only eligible addons).
  const addonParamFor = (planId: string) => {
    const eligible = [...selectedAddons].filter((slug) => {
      const addon = ADDONS.find((a) => a.slug === slug);
      return addon?.eligiblePlans.includes(planId);
    });
    return eligible.length > 0 ? `&addons=${eligible.join(",")}` : "";
  };

  // Total addon price for display in the addon section.
  const addonMonthlyTotal = [...selectedAddons].reduce(
    (sum, slug) => sum + (ADDONS.find((a) => a.slug === slug)?.price ?? 0),
    0
  );
  const addonTotal =
    billing === "yearly"
      ? addonMonthlyTotal * ADDON_YEARLY_MULT
      : addonMonthlyTotal;
  const addonPeriodLabel = billing === "yearly" ? "year" : "mo";

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
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {PRICING_PLANS.map((plan) => {
            const isYearly = billing === "yearly" && plan.priceYearly > 0;
            const displayPrice = isYearly ? plan.priceYearly : plan.price;
            const periodLabel =
              plan.price === 0 ? "" : isYearly ? "year" : "month";
            const cardFeats = CARD_FEATURES[plan.planId] ?? [];
            const addonParam = addonParamFor(plan.planId);
            const ctaHref =
              plan.price === 0
                ? `${SITE_CONFIG.dashboardUrl}${plan.ctaHref}`
                : `${SITE_CONFIG.dashboardUrl}${plan.ctaHref}&billing=${billing}${addonParam}`;

            return (
              <div
                key={plan.planId}
                className={`relative flex flex-col rounded-2xl border-2 bg-white p-6 sm:p-8 transition-all ${
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

                {/* Plan name */}
                <h3 className="text-xl font-extrabold text-gray-900">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mt-3 flex items-baseline gap-1">
                  {plan.price === 0 ? (
                    <span className="text-4xl font-extrabold text-gray-900">
                      Free
                    </span>
                  ) : (
                    <>
                      <span className="text-4xl font-extrabold text-gray-900">
                        ${fmt(displayPrice)}
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        /{periodLabel}
                      </span>
                    </>
                  )}
                </div>

                {/* Description */}
                <p className="mt-2 text-sm font-medium text-gray-500">
                  {plan.description}
                </p>

                {/* CTA */}
                <Link
                  href={ctaHref}
                  className={`mt-5 block w-full rounded-lg py-3 text-center text-sm font-bold transition-all ${
                    plan.highlight
                      ? "bg-[#18B0D1] text-white hover:bg-[#1593b0]"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.cta}
                </Link>

                {/* Yearly savings note */}
                {isYearly && plan.price > 0 && (
                  <p className="mt-2 text-center text-xs font-bold text-green-600">
                    Save ${(plan.price * 12 - plan.priceYearly).toLocaleString()} per year
                  </p>
                )}

                {/* Divider */}
                <div className="my-5 border-t border-gray-100" />

                {/* Top 5 features (short, scannable) */}
                <ul className="flex-1 space-y-3">
                  {cardFeats.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-sm text-gray-700"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#18B0D1]" />
                      <span className="font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Add-on availability badge / note */}
                {plan.planId === "free" && (
                  <p className="mt-6 text-xs font-medium text-gray-400">
                    Add-ons available on paid plans
                  </p>
                )}
                {plan.planId === "starter" && (
                  <p className="mt-6 text-xs font-medium text-gray-400">
                    More add-ons on Growth &amp; Pro
                  </p>
                )}
                {(plan.planId === "growth" || plan.planId === "pro") && (
                  <span className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#18B0D1]/10 px-3 py-1 text-xs font-bold text-[#18B0D1]">
                    <Check className="h-3 w-3" />
                    Add-ons available
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Enterprise strip */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 border-gray-200 bg-gray-900 p-5 sm:flex-row">
          <div>
            <h3 className="text-lg font-extrabold text-white">
              {ENTERPRISE_PLAN.name}
              {" · "}
              {ENTERPRISE_PLAN.price}
            </h3>
            <p className="mt-1 text-sm font-medium text-gray-300">
              {ENTERPRISE_PLAN.description}{" "}
              {ENTERPRISE_PLAN.priceNote}
            </p>
          </div>
          <Link
            href={`${ENTERPRISE_PLAN.ctaHref}`}
            className="rounded-lg bg-white px-6 py-2.5 text-sm font-bold text-gray-900 hover:bg-gray-100"
          >
            {ENTERPRISE_PLAN.cta}
          </Link>
        </div>

        {/* Add-ons section */}
        <div className="mt-16">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Add-ons
            </h2>
            <p className="mt-2 text-sm font-medium text-gray-600">
              Available on Growth and Pro plans. SMS also works on Starter.
            </p>
          </div>

          <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ADDONS.map((addon) => {
              const checked = selectedAddons.has(addon.slug);
              const addonPrice =
                billing === "yearly"
                  ? addon.price * ADDON_YEARLY_MULT
                  : addon.price;
              const Icon = ADDON_ICON[addon.slug];
              const planLabels = addon.eligiblePlans
                .map((p) => PLAN_LABEL[p] ?? p)
                .join(" \u00b7 ");

              return (
                <div
                  key={addon.slug}
                  className={`flex flex-col rounded-2xl border-2 p-6 transition-all ${
                    checked
                      ? "border-[#18B0D1] bg-[#18B0D1]/5 shadow-md"
                      : "border-gray-200 bg-white shadow-sm hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${checked ? "bg-[#18B0D1]" : "bg-gray-100"}`}>
                      <Icon className={`h-4 w-4 ${checked ? "text-white" : "text-gray-500"}`} />
                    </div>
                    <span className="text-base font-extrabold text-gray-900">
                      {addon.name}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-gray-600">
                    {addon.description}
                  </p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-gray-900">
                      +${fmt(addonPrice)}
                    </span>
                    <span className="text-sm font-medium text-gray-500">
                      /{billing === "yearly" ? "year" : "mo"}
                    </span>
                  </div>
                  {addon.meteredNote && (
                    <p className="mt-1 text-xs font-bold text-[#003D4D]">
                      {addon.meteredNote}
                    </p>
                  )}
                  <p className="mt-2 text-xs font-bold uppercase tracking-wide text-gray-400">
                    {planLabels}
                  </p>
                  <button
                    onClick={() => toggleAddon(addon.slug)}
                    className={`mt-4 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-bold transition-all ${
                      checked
                        ? "bg-[#18B0D1] text-white hover:bg-[#15a0be]"
                        : "bg-[#003D4D] text-white hover:bg-[#005066]"
                    }`}
                  >
                    {checked ? (
                      <><Check className="h-4 w-4" /> Added</>
                    ) : (
                      <><Plus className="h-4 w-4" /> Add to plan</>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Add-on total + hint */}
          <div className="mt-6 flex flex-col items-center gap-2 text-center">
            {selectedAddons.size > 0 ? (
              <p className="text-sm font-bold text-gray-900">
                Add-on total: ${fmt(addonTotal)}/{addonPeriodLabel}{" "}
                <span className="font-medium text-gray-500">
                  added to your plan at checkout
                </span>
              </p>
            ) : (
              <p className="text-sm font-medium text-gray-500">
                Select add-ons here, then pick a plan above to start.
              </p>
            )}
            <p className="text-xs font-medium text-gray-400">
              Only add-ons that match your plan are added at checkout.
            </p>
          </div>
        </div>

        {/* Credit packs section (hidden behind a button) */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowCreditPacks(!showCreditPacks)}
            className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold transition-all ${
              showCreditPacks
                ? "bg-gray-100 text-gray-900"
                : "bg-[#003D4D] text-white hover:bg-[#005066]"
            }`}
          >
            <Zap className="h-4 w-4" />
            {showCreditPacks ? "Hide credit packs" : "Buy more credits"}
          </button>
          <p className="mt-2 text-xs font-medium text-gray-500">
            1 credit = 1 lead discovery, 1 email verification, or 1 AI message draft. Credits never expire.
          </p>

          {showCreditPacks && (
            <>
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}
