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

export const PRICING_PLANS = [
  {
    planId: "free",
    name: "Free",
    price: 0,
    priceYearly: 0,
    period: "forever",
    description: "Try it out. No credit card.",
    features: [
      "50 leads per search",
      "100 email checks / month",
      "50 message drafts / month",
      "1 email inbox",
      "Save your searches",
      "Community support",
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
    features: [
      "1,000 leads / month",
      "1,500 campaign sends / month",
      "1,000 email checks / month",
      "1,000 message drafts / month",
      "3 email inboxes with trust building",
      "3-step campaign sequences",
      "One inbox for all replies + tracking",
      "Email support",
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
    features: [
      "5,000 leads / month",
      "10,000 campaign sends / month",
      "5,000 email checks / month",
      "5,000 message drafts / month",
      "10 email inboxes with trust building",
      "Unlimited campaign sequences",
      "A/B testing per step",
      "Workspace + team members",
      "Priority support",
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
    features: [
      "25,000 leads / month",
      "50,000 campaign sends / month",
      "25,000 email checks / month",
      "25,000 message drafts / month",
      "30 email inboxes with trust building",
      "Advanced analytics + deliverability",
      "Webhooks + API access",
      "CRM sync (HubSpot, Pipedrive, Salesforce)",
      "Dedicated success manager",
    ],
    cta: "Start Pro",
    ctaHref: "/sign-up?plan=pro",
    highlight: false,
  },
] as const;

// Enterprise — sales-led, shown in a separate strip below the 4-plan grid
export const ENTERPRISE_PLAN = {
  name: "Enterprise",
  price: "Custom",
  description: "For high-volume teams that need a custom deal.",
  features: [
    "100,000+ leads / month",
    "500,000+ campaign sends / month",
    "Dedicated infrastructure",
    "SLA + priority support",
    "Custom integrations",
    "Invoiced billing",
  ],
  cta: "Talk to sales",
  ctaHref: "/contact?topic=enterprise",
} as const;

export const FAQS = [
  {
    q: "Why is it called Bad Decision?",
    a: "Because every other way of finding customers is a bad decision. Buying a stale lead list is a bad decision. Paying for five different tools that do not talk to each other is a bad decision. Blasting ten thousand emails from a cold domain is a bad decision. We built the opposite of all that. The name is a reminder to stop making bad decisions with how you find new customers, and a promise that we will not let you make one with us.",
  },
  {
    q: "What does Bad Decision actually do?",
    a: "Bad Decision is one tool that does four things: it finds the businesses who need what you sell, it checks every email before you send, it writes your messages for you, and it sends them from your own email inbox with full tracking. You get everything in one place instead of paying for four or five different tools.",
  },
  {
    q: "Do I need to bring my own leads?",
    a: "No. That is the whole point. You tell us who you want to reach (for example, 'real estate agents in Lagos' or 'skincare stores in the US'), and our search finds them for you. Every lead comes with company name, website, email, phone, and social links. You can also bring your own list if you already have one, and we will check every email before you send.",
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
    a: "No. We never send cold emails from our own servers. You connect your own email inbox (Gmail, Outlook, or any custom email). Our system slowly builds trust for it, sends at the right times, switches between your inboxes, and pulls replies back into one place. Your email stays trusted because it stays in your hands, which is exactly how it should be for cold outreach.",
  },
  {
    q: "How long does it take to build trust for a new email inbox?",
    a: "Usually 7 to 15 days. We start slow (just a few emails per day) and slowly send more over time. Other inboxes in our network send and reply to these early messages, help any that land in spam, and build your good name with email providers. You can start a real campaign once your inbox shows it is ready.",
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
    a: "Yes, free forever. You get 50 leads per search, 100 email checks per month, 50 message drafts per month, and 1 email inbox. You cannot start live campaigns on Free (you can draft them), but you can test the full find-check-write process without paying. Upgrade only when you are ready to actually send.",
  },
  {
    q: "What makes this different from other outreach tools?",
    a: "Most outreach tools assume you already have a list of leads. They just send emails. Bad Decision finds the leads for you first, then checks them, then writes the message, then sends. It is four tools in one. You also get six ways to write messages that work, an invite-only way to use your own accounts and cut your costs to zero, and pricing that works for founders in any country.",
  },
] as const;
