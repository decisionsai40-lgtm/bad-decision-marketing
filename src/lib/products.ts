import {
  Sparkles,
  Search,
  Send,
  MessageSquare,
  Smartphone,
  Phone,
  Calendar,
  Workflow,
  ShieldCheck,
  Bot,
  type LucideIcon,
} from "lucide-react";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  screenshot?: string;
  screenshotAlt?: string;
  features: string[];
  howItWorks: string[];
  plans: string[];
}

export const PRODUCTS: Product[] = [
  {
    slug: "steady-ai",
    name: "Steady AI",
    tagline: "Your AI assistant for finding and closing customers",
    description:
      "Steady AI helps you find leads, write messages, build automations, and book meetings. Ask it in plain English and it does the work for you. It also powers the automation builder and post-call disposition.",
    icon: Sparkles,
    screenshot: "/screenshots/overview.png",
    screenshotAlt: "Steady AI assistant dashboard",
    features: [
      "Find leads by describing who you want to reach",
      "Write email campaigns in six proven styles",
      "Build multi-step automations from a prompt",
      "Summarize calls and route outcomes automatically",
    ],
    howItWorks: [
      "Open the assistant from your dashboard",
      "Type what you want in plain English",
      "Steady AI does the work and shows you the result",
    ],
    plans: ["Pro"],
  },
  {
    slug: "lead-discovery",
    name: "Lead Discovery",
    tagline: "Find fresh leads with four search engines.",
    description:
      "Pull live businesses off the web from four sources at once. Save lists and start reaching out in minutes.",
    icon: Search,
    screenshot: "/screenshots/discover.png",
    screenshotAlt: "Lead discovery dashboard",
    features: [
      "Search companies and professionals by role and industry.",
      "Find stores and e-commerce shops on any platform.",
      "Spot businesses already running paid ads.",
      "List businesses with no website that need your help.",
    ],
    howItWorks: [
      "Pick a search engine and set your filters.",
      "Run the search and review fresh results.",
      "Save the list to a campaign or export it.",
    ],
    plans: ["Free", "Starter", "Growth", "Pro", "Enterprise"],
  },
  {
    slug: "email-outreach",
    name: "Email Outreach",
    tagline: "Send unlimited emails from unlimited inboxes.",
    description:
      "Connect as many inboxes as you want. Warm them up, write with AI, and land in the inbox.",
    icon: Send,
    screenshot: "/screenshots/overview.png",
    screenshotAlt: "Email outreach overview",
    features: [
      "Unlimited campaigns and unlimited inboxes.",
      "Warmup that builds sender trust for you.",
      "One inbox for every reply and every tracking event.",
      "AI drafts that sound like you wrote them.",
    ],
    howItWorks: [
      "Connect your Gmail, Outlook, or custom SMTP inbox.",
      "Write your sequence or let AI write it.",
      "Pick your list and start sending.",
    ],
    plans: ["Starter", "Growth", "Pro", "Enterprise"],
  },
  {
    slug: "whatsapp-campaigns",
    name: "WhatsApp Campaigns",
    tagline: "Send template campaigns on WhatsApp.",
    description:
      "Connect a WhatsApp Business number, import contacts, and send approved template campaigns.",
    icon: MessageSquare,
    screenshot: "/screenshots/overview.png",
    screenshotAlt: "WhatsApp campaigns overview",
    features: [
      "Approved template campaigns.",
      "Bulk contact import.",
      "Delivery and reply analytics.",
      "Auto-pause when someone books a meeting.",
    ],
    howItWorks: [
      "Connect your WhatsApp Business number.",
      "Import contacts and pick a template.",
      "Schedule the send and watch replies come in.",
    ],
    plans: ["Growth add-on", "Pro add-on", "Enterprise included"],
  },
  {
    slug: "sms-campaigns",
    name: "SMS Campaigns",
    tagline: "Send text messages with number rotation.",
    description:
      "Register your brand, buy sender numbers, and send SMS campaigns with delivery tracking.",
    icon: Smartphone,
    screenshot: "/screenshots/overview.png",
    screenshotAlt: "SMS campaigns overview",
    features: [
      "Brand registration handled for you.",
      "Buy and rotate sender numbers.",
      "Delivery tracking on every message.",
      "Auto-skip numbers that fail verification.",
    ],
    howItWorks: [
      "Register your brand and buy a sender number.",
      "Write your message and pick your list.",
      "Send and track delivery in real time.",
    ],
    plans: ["Starter add-on", "Growth add-on", "Pro add-on", "Enterprise included"],
  },
  {
    slug: "ai-voice-calling",
    name: "AI Voice Calling",
    tagline: "Let AI call your consented leads and book meetings.",
    description:
      "AI voice outreach to your verified contacts — books meetings on the call and writes a note after every call. TCPA-compliant: requires prior express consent from every contact before dialing.",
    icon: Phone,
    screenshot: "/screenshots/voice.png",
    screenshotAlt: "AI voice call history",
    features: [
      "In-call meeting booking.",
      "Post-call disposition and notes.",
      "Recording and transcript for every call.",
      "Respects calling hours and the do-not-call list.",
      "TCPA-compliant — requires prior express consent for every contact.",
    ],
    howItWorks: [
      "Import your consented lead list.",
      "Set your script and booking rules.",
      "AI dials, talks, and books meetings for you.",
    ],
    plans: ["Pro add-on", "Enterprise included"],
  },
  {
    slug: "smart-scheduler",
    name: "Smart Scheduler",
    tagline: "Let prospects book meetings with you.",
    description:
      "Share one booking link. When someone books, every campaign for that person pauses.",
    icon: Calendar,
    screenshot: "/screenshots/scheduling.png",
    screenshotAlt: "Scheduling and booking page",
    features: [
      "Calendar sync with Google and Outlook.",
      "Auto-pause campaigns on booking.",
      "Embeddable booking link.",
      "Custom intake questions.",
    ],
    howItWorks: [
      "Connect your calendar.",
      "Share your booking link in any campaign.",
      "Prospects book and we pause outreach for them.",
    ],
    plans: ["Free", "Starter", "Growth", "Pro", "Enterprise"],
  },
  {
    slug: "automation-engine",
    name: "Automation Engine",
    tagline: "Build multi-step flows visually or with AI.",
    description:
      "Drag and drop to build sequences. Or describe it in English and let AI build it for you.",
    icon: Workflow,
    screenshot: "/screenshots/automations.png",
    screenshotAlt: "Automation builder canvas",
    features: [
      "Multi-step sequences across channels.",
      "If-else logic and A/B splits.",
      "AI prompt-to-workflow builder.",
      "Triggers on replies, bookings, and tags.",
    ],
    howItWorks: [
      "Open the canvas or describe your flow to AI.",
      "Add steps, branches, and wait times.",
      "Turn it on and watch every step run.",
    ],
    plans: ["Starter", "Growth", "Pro", "Enterprise"],
  },
  {
    slug: "line-verification",
    name: "Line Verification",
    tagline: "Check numbers before you send.",
    description:
      "Verify if a number is on WhatsApp and can receive SMS before you spend a credit sending.",
    icon: ShieldCheck,
    screenshot: "/screenshots/overview.png",
    screenshotAlt: "Line verification overview",
    features: [
      "WhatsApp status check.",
      "SMS capability check.",
      "Landline detection.",
      "Auto-skip bad numbers in campaigns.",
    ],
    howItWorks: [
      "Upload your list or connect a campaign.",
      "Run verification in one click.",
      "Bad numbers are skipped before you send.",
    ],
    plans: ["Growth add-on", "Pro add-on", "Enterprise included"],
  },
  {
    slug: "external-ai",
    name: "External AI",
    tagline: "Control everything from ChatGPT, Claude, or Gemini.",
    description:
      "Connect an external AI assistant and ask it to find leads, start campaigns, or book meetings.",
    icon: Bot,
    screenshot: "/screenshots/overview.png",
    screenshotAlt: "External AI overview",
    features: [
      "MCP server for ChatGPT, Claude, and Gemini.",
      "OpenAPI spec for any tool.",
      "Every action is audit logged.",
      "Scoped API keys per assistant.",
    ],
    howItWorks: [
      "Generate a scoped API key in settings.",
      "Connect your AI assistant with the MCP server.",
      "Ask it to run tasks in plain English.",
    ],
    plans: ["Growth", "Pro", "Enterprise"],
  },
];

export const PRODUCT_BY_SLUG: Record<string, Product> = PRODUCTS.reduce(
  (acc, p) => {
    acc[p.slug] = p;
    return acc;
  },
  {} as Record<string, Product>,
);

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCT_BY_SLUG[slug];
}

export function getRelatedProducts(slug: string, count = 3): Product[] {
  return PRODUCTS.filter((p) => p.slug !== slug).slice(0, count);
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug);
}
