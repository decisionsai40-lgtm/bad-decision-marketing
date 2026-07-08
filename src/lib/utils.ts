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
    "Bad Decision finds the businesses who need what you sell, checks every email before you send, writes the message, and sends it from your inbox. Find real buyers. Skip the ghost towns.",
  social: {
    twitter: "@baddecisionapp",
    github: "https://github.com/decisionsai40-lgtm",
  },
  foundedYear: 2025,
  legalEntityName: "Bad Decision",
  legalJurisdiction: "Lagos, Nigeria",
};

export const PRICING_PLANS = [
  {
    name: "Free",
    price: 0,
    period: "forever",
    description: "Test the waters. No credit card.",
    features: [
      "50 leads per search",
      "100 email checks / month",
      "50 AI message drafts / month",
      "1 email inbox",
      "Save your searches",
      "Community support",
    ],
    cta: "Start free",
    ctaHref: "/sign-up",
    highlight: false,
  },
  {
    name: "Starter",
    price: 39,
    period: "month",
    description: "For solopreneurs running their first campaigns.",
    features: [
      "1,000 leads / month",
      "1,500 campaign sends / month",
      "1,000 email checks / month",
      "1,000 AI message drafts / month",
      "3 email inboxes with warmup",
      "3-step campaign sequences",
      "Unified inbox + reply tracking",
      "Email support",
    ],
    cta: "Start Starter",
    ctaHref: "/sign-up?plan=starter",
    highlight: false,
  },
  {
    name: "Growth",
    price: 97,
    period: "month",
    description: "For small teams scaling outbound.",
    features: [
      "5,000 leads / month",
      "10,000 campaign sends / month",
      "5,000 email checks / month",
      "5,000 AI message drafts / month",
      "10 email inboxes with warmup",
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
    name: "Pro",
    price: 297,
    period: "month",
    description: "For agencies running campaigns at scale.",
    features: [
      "25,000 leads / month",
      "50,000 campaign sends / month",
      "25,000 email checks / month",
      "25,000 AI message drafts / month",
      "30 email inboxes with warmup",
      "Advanced analytics + deliverability",
      "Webhooks + API access",
      "CRM sync",
      "Dedicated success manager",
    ],
    cta: "Talk to sales",
    ctaHref: "/contact?topic=sales",
    highlight: false,
  },
] as const;

export const FAQS = [
  {
    q: "Why is it called Bad Decision?",
    a: "Because every other way of finding customers is a bad decision. Buying a stale lead list is a bad decision. Paying for five different tools that do not talk to each other is a bad decision. Blasting ten thousand emails from a cold domain is a bad decision. We built the opposite of all that. The name is a reminder to stop making bad decisions with your sales pipeline, and a promise that we will not let you make one with us.",
  },
  {
    q: "What does Bad Decision actually do?",
    a: "Bad Decision is one platform that does four things: it finds the businesses who need what you sell, it checks every email before you send, it writes your outreach messages, and it sends them from your own email inbox with full tracking. You get everything in one place instead of paying for four or five different tools.",
  },
  {
    q: "Do I need to bring my own leads?",
    a: "No. That is the whole point. You tell us who you want to reach (for example, 'real estate agents in Lagos' or 'skincare stores in the US'), and our engines find them for you. Every lead comes with company name, website, email, phone, and social links. You can also import your own list if you already have one, and we will check every email before you send.",
  },
  {
    q: "How does the email checking work?",
    a: "Every email goes through a deep check that looks at the email format, the domain, the mail server, and the actual mailbox. You get a clear answer for each email: safe to send, risky, or will bounce. You can choose to skip the risky ones to protect your sender reputation, or include them if you want to reach as many people as possible.",
  },
  {
    q: "Can I use my own keys to save money?",
    a: "Yes, if you are part of our community. Community members can plug in their own keys for finding leads, checking emails, and writing messages. When you use your own keys, you pay nothing for those tasks. This is invite-only to keep it controlled. Join our community to request an invite code.",
  },
  {
    q: "Do you send emails from your own servers?",
    a: "No. We never send cold emails from our own servers. You connect your own email inbox (Gmail, Outlook, or any custom email). Our engine warms it up, sends at the right times, rotates across your inboxes, and pulls replies back into one place. Your sender reputation stays in your hands, which is exactly how it should be for cold outreach.",
  },
  {
    q: "How long does it take to warm up an email inbox?",
    a: "Usually 7 to 15 days. Our warmup engine starts slow (a few emails per day) and ramps up gradually. Other inboxes in our network send and reply to your warmup messages, rescue any that land in spam, and build your sender reputation. You can start a real campaign once your inbox shows 'warm' status.",
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
    a: "Yes, free forever. You get 50 leads per search, 100 email checks per month, 50 AI message drafts per month, and 1 email inbox. You cannot start live campaigns on Free (you can draft them), but you can test the entire find-check-write pipeline without paying. Upgrade only when you are ready to actually send.",
  },
  {
    q: "What makes this different from other outreach tools?",
    a: "Most outreach tools assume you already have a list of leads. They just send emails. Bad Decision finds the leads for you first, then checks them, then writes the message, then sends. It is four tools in one. You also get writing styles based on six proven frameworks, invite-only bring-your-own-keys to cut your costs to zero, and pricing that works for founders in any country.",
  },
] as const;
