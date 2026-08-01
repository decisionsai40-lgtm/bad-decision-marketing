/**
 * Pricing, plan, add-on, and credit-pack catalogues.
 *
 * Pulled out of `lib/utils.ts` (MEDIUM 4 cleanup). `lib/utils.ts` re-exports
 * everything below for backwards compatibility with existing imports.
 *
 * Base prices are in USD. Yearly prices are the per-year total (i.e. the
 * monthly price * 11 — the "save 2 months" deal). Add-on prices are a
 * separate monthly fee on top of the base plan.
 */

// Feature type: `quota: true` means it's a monthly quota : show "/ month" on yearly view
export interface PlanFeature {
  text: string;
  quota?: boolean;
}

export const PRICING_PLANS = [
  {
    planId: "free",
    name: "Free",
    price: 0,
    priceYearly: 0,
    period: "forever",
    description: "Try it out. No credit card.",
    contactUploads: 0,
    features: [
      { text: "50 lead discoveries", quota: true },
      { text: "40 email verifications", quota: true },
      { text: "50 AI message drafts", quota: true },
      { text: "1 email inbox" },
      { text: "Save your searches" },
      { text: "Community support" },
      { text: "+ 50 credits" },
    ],
    cta: "Start free",
    ctaHref: "/sign-up?plan=free",
    highlight: false,
  },
  {
    planId: "starter",
    name: "Starter",
    price: 39,
    priceYearly: 390,
    period: "month",
    description: "For people running their first outreach.",
    contactUploads: 15000,
    features: [
      { text: "15,000 email sends", quota: true },
      { text: "Unlimited email inboxes" },
      { text: "Unlimited warmups (100,000 emails/mo)" },
      { text: "Unlimited campaigns" },
      { text: "15,000 contact uploads" },
      { text: "1,000 lead discoveries", quota: true },
      { text: "750 email verifications", quota: true },
      { text: "1,000 AI message drafts", quota: true },
      { text: "Steady AI assistant" },
      { text: "3-step campaign sequences" },
      { text: "One inbox for all replies + tracking" },
      { text: "Email support" },
    ],
    cta: "Start Starter",
    ctaHref: "/sign-up?plan=starter",
    highlight: false,
  },
  {
    planId: "growth",
    name: "Growth",
    price: 97,
    priceYearly: 970,
    period: "month",
    description: "For small teams doing more outreach.",
    contactUploads: 50000,
    features: [
      { text: "50,000 contact uploads" },
      { text: "5,000 lead discoveries", quota: true },
      { text: "3,750 email verifications", quota: true },
      { text: "5,000 AI message drafts", quota: true },
      { text: "Steady AI assistant" },
      { text: "Unlimited campaign sequences" },
      { text: "A/B testing per step" },
      { text: "Workspace + team members" },
      { text: "Priority support" },
    ],
    cta: "Start Growth",
    ctaHref: "/sign-up?plan=growth",
    highlight: true,
  },
  {
    planId: "pro",
    name: "Pro",
    price: 297,
    priceYearly: 2970,
    period: "month",
    description: "For agencies running lots of campaigns.",
    contactUploads: 100000,
    features: [
      { text: "100,000 contact uploads" },
      { text: "25,000 lead discoveries", quota: true },
      { text: "18,750 email verifications", quota: true },
      { text: "25,000 AI message drafts", quota: true },
      { text: "Steady AI assistant" },
      { text: "Advanced analytics + deliverability" },
      { text: "Webhooks + API access" },
      { text: "CRM sync (HubSpot, Pipedrive, Salesforce)" },
      { text: "Dedicated success manager" },
    ],
    cta: "Start Pro",
    ctaHref: "/sign-up?plan=pro",
    highlight: false,
  },
] as const;

// Enterprise : sales-led, shown in a separate strip below the 4-plan grid
export const ENTERPRISE_PLAN = {
  name: "Enterprise",
  price: "Custom",
  description: "For high-volume teams that need a custom deal.",
  features: [
    "Everything in Pro, unlimited",
    "Unlimited lead discoveries",
    "Unlimited email verifications",
    "Unlimited AI voice minutes",
    "WhatsApp + SMS included",
    "Dedicated infrastructure",
    "SSO/SAML + RBAC",
    "99.9% uptime SLA",
    "Custom integrations",
    "Invoiced billing",
  ],
  cta: "Talk to sales",
  ctaHref: "/contact?topic=enterprise",
} as const;

// Feature-unlock add-ons : separate monthly payments, bundled with the plan
// at checkout, but each can be cancelled independently without affecting the base plan.
// Eligibility:
//   SMS:               Starter, Growth, Pro
//   WhatsApp:          Growth, Pro
//   AI Voice:          Pro only (high per-minute cost, requires compliance)
export type AddonSlug =
  | "sms_campaign"
  | "whatsapp_campaign"
  | "ai_voice";

export interface Addon {
  slug: AddonSlug;
  name: string;
  description: string;
  price: number; // USD / month base fee
  eligiblePlans: string[];
  meteredNote?: string; // shown as a small note on the card
}

export const ADDONS: Addon[] = [
  {
    slug: "sms_campaign",
    name: "SMS Campaigns",
    description:
      "Brand registration, sender number purchase, campaign dispatch with delivery tracking.",
    price: 39,
    eligiblePlans: ["starter", "growth", "pro"],
    meteredNote: "1,000 messages/mo included, then 1 credit per message",
  },
  {
    slug: "whatsapp_campaign",
    name: "WhatsApp Campaigns",
    description:
      "Connect a WhatsApp Business number, import contacts, send template campaigns with delivery + reply analytics.",
    price: 49,
    eligiblePlans: ["growth", "pro"],
    meteredNote: "1,000 messages/mo included, then 1 credit per message",
  },
  {
    slug: "ai_voice",
    name: "AI Voice Calling",
    description:
      "AI voice outreach to your consented lead lists via the Voice Engine. It books meetings on the call, schedules callbacks, respects do-not-call lists, and writes a note after every call. TCPA-compliant — requires prior express consent from every contact before dialing.",
    price: 49,
    eligiblePlans: ["pro"],
    meteredNote: "100 minutes/mo included, then 5 credits per minute",
  },
];

export const ADDON_BY_SLUG: Record<AddonSlug, Addon> = ADDONS.reduce(
  (acc, a) => { acc[a.slug] = a; return acc; },
  {} as Record<AddonSlug, Addon>,
);

export function addonsTotal(addons: AddonSlug[]): number {
  return addons.reduce((sum, slug) => sum + (ADDON_BY_SLUG[slug]?.price ?? 0), 0);
}

// Credit packs : one-time purchases, never expire.
// 1 credit = 1 lead discovery, 1 email verification, or 1 AI message draft.
// Tiered pricing: more credits = cheaper per credit.
export interface CreditPack {
  id: string;
  name: string;
  credits: number;
  price: number; // USD one-time
  perCredit: number; // USD
  savingsPct: number; // vs the Starter pack (base tier)
  popular?: boolean;
  note?: string;
}

// `BASE_PER_CREDIT` was previously an unexported local const in utils.ts;
// kept here so the savingsPct contract stays together with the data.
const BASE_PER_CREDIT = 0.019; // Starter pack rate
void BASE_PER_CREDIT; // referenced implicitly by the savingsPct values below

export const CREDIT_PACKS: CreditPack[] = [
  {
    id: "starter",
    name: "Starter",
    credits: 1000,
    price: 19,
    perCredit: 0.019,
    savingsPct: 0,
    note: "Try it out",
  },
  {
    id: "popular",
    name: "Popular",
    credits: 5000,
    price: 79,
    perCredit: 0.0158,
    savingsPct: 17,
    popular: true,
    note: "Best for most",
  },
  {
    id: "pro",
    name: "Pro",
    credits: 15000,
    price: 199,
    perCredit: 0.0133,
    savingsPct: 30,
    note: "Best value",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    credits: 50000,
    price: 599,
    perCredit: 0.012,
    savingsPct: 37,
    note: "High volume",
  },
];
