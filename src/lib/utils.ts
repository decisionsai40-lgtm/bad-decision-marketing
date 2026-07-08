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
    "Find real buyers. Skip the ghost towns. Bad Decision scans the live internet to find businesses who actually want what you sell — every email verified before you pay.",
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
      "100 email verifications / month",
      "50 AI outreach drafts / month",
      "1 mailbox connection",
      "Lead collections (save searches)",
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
      "1,000 email verifications / month",
      "1,000 AI outreach drafts / month",
      "3 mailboxes with warmup",
      "Campaign sequences (3 steps)",
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
      "5,000 email verifications / month",
      "5,000 AI outreach drafts / month",
      "10 mailboxes with warmup",
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
      "25,000 email verifications / month",
      "25,000 AI outreach drafts / month",
      "30 mailboxes with warmup",
      "Advanced analytics + deliverability",
      "Webhooks + API access",
      "CRM sync (HubSpot, Pipedrive)",
      "Dedicated success manager",
    ],
    cta: "Talk to sales",
    ctaHref: "/contact?topic=sales",
    highlight: false,
  },
] as const;

export const FAQS = [
  {
    q: "What makes Bad Decision different from Instantly or Smartlead?",
    a: "Instantly and Smartlead are excellent for sending campaigns — but they assume you already have leads. Bad Decision is the only platform that finds the leads AND sends the campaigns. Our scraping engines (Companies, Professionals, Ads Running, Ecommerce, Web Absent) pull fresh contact data straight from the live internet, verify every email before you pay, draft your message in 6 proven copywriting styles, then send from your own mailboxes with full warmup and deliverability built in. You get one tool instead of three.",
  },
  {
    q: "Do I need to bring my own leads?",
    a: "No. That's the whole point. You tell us who you want to reach (e.g. 'real estate agents in Lagos' or 'Shopify stores selling skincare in the US'), and our engines find them for you. Every lead comes with company name, website, email, phone, social links, and industry context. You can also import your own CSV if you already have a list — we'll verify it before you send.",
  },
  {
    q: "How does email verification work?",
    a: "Every email is checked through a multi-provider verification pipeline (syntax → DNS → MX → SMTP mailbox check → disposable detection → catch-all detection → role address detection). We use industry-leading providers like MyEmailVerifier and BillionVerify under the hood. You see a clear Valid / Risky / Invalid status for every lead. You can toggle 'Exclude risky emails from campaign' to protect your sender reputation.",
  },
  {
    q: "Can I use my own API keys to save money?",
    a: "Yes — if you're a community member with an invite code. Plug in your own Apollo, Hunter, MyEmailVerifier, ScrapingBee, or DeepSeek API keys, and we'll use them instead of our pooled infrastructure. You pay $0 in credits for those operations. This is unique to Bad Decision — neither Instantly nor Smartlead offers it. To get invite access, join our community and request a code.",
  },
  {
    q: "Do you send emails from your servers?",
    a: "No. We never send cold emails from our own IPs. You connect your own mailboxes (Gmail with App Password, Outlook, Hostinger, or any custom SMTP/IMAP). Our engine rotates sends across your mailboxes, warms them up peer-to-peer, throttles per provider limits, and pulls replies via IMAP. This is the same model Instantly and Smartlead use — your reputation stays in your hands, which is exactly how it should be for cold outreach.",
  },
  {
    q: "How long does mailbox warmup take?",
    a: "Typically 7-15 days. Our warmup engine ramp-ups your mailbox gradually (starting at 2 emails/day, increasing by 2/day, capping at 20/day). Other mailboxes in our peer network send and reply to your warmup messages, rescue any that land in spam, and build your sender reputation. You can start a campaign once a mailbox shows 'warm' status.",
  },
  {
    q: "What about CAN-SPAM, GDPR, and deliverability compliance?",
    a: "Every email sent through Bad Decision includes a one-click unsubscribe link, your physical mailing address (configured in settings), and a valid DKIM-signed sender. Bounces and complaints are tracked in real-time — any recipient who bounces or complains is automatically added to your suppression list and never contacted again. You can also manually suppress anyone at any time.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from your billing portal with one click. Your subscription stays active until the end of the current billing period, then downgrades to the Free tier. No contracts, no cancellation fees, no lock-in.",
  },
  {
    q: "Do you offer refunds?",
    a: "If you cancel within 7 days of your first paid subscription and haven't sent more than 100 campaign emails, we'll refund 100%. After that, subscriptions are non-refundable but you keep access until the end of the period. Credit top-up purchases are non-refundable once consumed. See our refund policy for full details.",
  },
  {
    q: "Is there a free tier?",
    a: "Yes — Free forever. You get 50 leads per search, 100 verifications per month, 50 AI drafts per month, and 1 mailbox. You can't start live campaigns on Free (you can draft them), but you can test the entire lead-gen + verification + drafting pipeline without paying. Upgrade only when you're ready to actually send.",
  },
] as const;
