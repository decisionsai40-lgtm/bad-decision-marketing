import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE_CONFIG = {
  name: "Bad Decision",
  domain: "baddecision.app",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://baddecision.app",
  dashboardUrl: process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://dashboard.baddecision.app",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@baddecision.app",
  description:
    "Bad Decision helps you find the right people to sell to. We search the web for leads, check every email so you know it works before you send, write your messages for you, and send them from your own inbox. One simple tool that costs less than paying for four separate ones.",
  social: {
    twitter: "@baddecisionapp",
    github: "https://github.com/decisionsai40-lgtm",
    linkedin: "https://www.linkedin.com/company/bad-decision-app",
  },
  foundedYear: 2025,
  legalEntityName: "Germaine 50 Technologies",
  legalJurisdiction: "Lagos, Nigeria",
};

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
    contactUploads: 50000,
    features: [
      { text: "15,000 email sends", quota: true },
      { text: "Unlimited email inboxes" },
      { text: "Unlimited warmups (100,000 emails/mo)" },
      { text: "Unlimited campaigns" },
      { text: "50,000 contact uploads" },
      { text: "1,000 lead discoveries", quota: true },
      { text: "1,000 email verifications", quota: true },
      { text: "1,000 AI message drafts", quota: true },
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
    contactUploads: 100000,
    features: [
      { text: "Unlimited email sends" },
      { text: "Unlimited email inboxes" },
      { text: "Unlimited warmups" },
      { text: "Unlimited campaigns" },
      { text: "100,000 contact uploads" },
      { text: "5,000 lead discoveries", quota: true },
      { text: "5,000 email verifications", quota: true },
      { text: "5,000 AI message drafts", quota: true },
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
    contactUploads: 250000,
    features: [
      { text: "Unlimited email sends" },
      { text: "Unlimited email inboxes" },
      { text: "Unlimited warmups" },
      { text: "Unlimited campaigns" },
      { text: "250,000 contact uploads" },
      { text: "25,000 lead discoveries", quota: true },
      { text: "25,000 email verifications", quota: true },
      { text: "25,000 AI message drafts", quota: true },
      { text: "500 AI voice minutes included" },
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
//   SMS:        Starter, Growth, Pro
//   WhatsApp:   Growth, Pro
//   AI Voice:   Pro only (high per-minute cost, requires compliance)
export type AddonSlug = "sms_campaign" | "whatsapp_campaign" | "ai_voice";

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
    meteredNote: "1,000 messages/mo included, then $0.015/msg",
  },
  {
    slug: "whatsapp_campaign",
    name: "WhatsApp Campaigns",
    description:
      "Connect a WhatsApp Business number, import contacts, send template campaigns with delivery + reply analytics.",
    price: 49,
    eligiblePlans: ["growth", "pro"],
    meteredNote: "1,000 messages/mo included, then $0.10/msg",
  },
  {
    slug: "ai_voice",
    name: "AI Voice Calling",
    description:
      "AI cold calling via the Native Voice Engine. Handles in-call booking, callbacks, do-not-call lists, and post-call notes.",
    price: 49,
    eligiblePlans: ["pro"],
    meteredNote: "100 minutes/mo included, then $0.20/min",
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

const BASE_PER_CREDIT = 0.019; // Starter pack rate

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

export const FAQS = [
  {
    q: "Why is it called Bad Decision?",
    a: "Because every other way of finding customers is a bad decision. Buying a stale lead list is a bad decision. Paying for five different tools that do not talk to each other is a bad decision. Blasting ten thousand emails from a cold domain is a bad decision. We built the opposite of all that. The name is a reminder to stop making bad decisions with how you find new customers, and a promise that we will not let you make one with us.",
  },
  {
    q: "What does Bad Decision actually do?",
    a: "Bad Decision is one platform that does four things. It finds the businesses who need what you sell. It checks every email before you send. It writes your messages for you. It sends them from your own email inbox with full tracking. You get everything in one place instead of paying for four or five different tools.",
  },
  {
    q: "Do I need to bring my own leads?",
    a: "No. That is the whole point. You tell us who you want to reach, like real estate agents in Lagos or skincare stores in the US, and our search finds them for you. Every lead comes with company name, website, email, phone, and social links. You can also bring your own list if you already have one, and we will check every email before you send.",
  },
  {
    q: "How does the email checking work?",
    a: "Every email gets a careful check. We look at the email format, the domain name, the mail server, and the actual mailbox to see if it is real. You get a clear answer for each email: safe to send, risky, or will bounce. You can skip the risky ones to keep your email trusted, or include them if you want to reach as many people as you can.",
  },
  {
    q: "Can I use my own accounts to save money?",
    a: "Yes, if you are part of our community. Community members can connect their own accounts for finding leads, checking emails, and writing messages. When you use your own accounts, you pay nothing for those tasks. This is invite-only to keep it fair. Join our community to ask for an invite code.",
  },
  {
    q: "Do you send emails from your own servers?",
    a: "No. We never send cold emails from our own servers. You connect your own email inbox, like Gmail, Outlook, or any custom email. Our system slowly builds trust for it, sends at the right times, switches between your inboxes, and pulls replies back into one place. Your email stays trusted because it stays in your hands, which is exactly how it should be for cold outreach.",
  },
  {
    q: "How long does it take to build trust for a new email inbox?",
    a: "Usually 7 to 15 days. We start slow, with just a few emails per day, and slowly send more over time. Other inboxes in our network send and reply to these early messages, help any that land in spam, and build your good name with email providers. You can start a real campaign once your inbox shows it is ready.",
  },
  {
    q: "What about spam laws and email compliance?",
    a: "Every email sent through Bad Decision includes a one-click unsubscribe link, your physical mailing address, and proper email signing. Bounces and complaints are tracked in real time. Anyone who bounces, complains, or asks to unsubscribe is automatically added to your block list and never contacted again. You stay on the right side of every spam law.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from your billing portal with one click. Your subscription stays active until the end of the current billing period, then drops to the Free plan. No contracts, no cancellation fees, no lock-in.",
  },
  {
    q: "Do you offer refunds?",
    a: "If you cancel within 7 days of your first paid subscription and have not sent more than 100 campaign emails, we will refund 100 percent. After that, subscriptions are non-refundable but you keep access until the end of the period. See our refund policy for full details.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes, free forever. You get 50 leads per search, 100 email checks per month, 50 message drafts per month, and 1 email inbox. You cannot start live campaigns on Free, but you can draft them. You can test the full find, check, and write process without paying. Upgrade only when you are ready to actually send.",
  },
  {
    q: "What makes this different from other outreach tools?",
    a: "Most outreach tools assume you already have a list of leads. They just send emails. Bad Decision finds the leads for you first, then checks them, then writes the message, then sends. It is four tools in one. You also get six ways to write messages that work, an invite-only way to use your own accounts and cut your costs to zero, and pricing that works for people in any country.",
  },
] as const;
