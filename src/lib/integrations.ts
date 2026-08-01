import {
  Mail,
  Inbox,
  Server,
  MessageSquare,
  Smartphone,
  PhoneCall,
  Users,
  TrendingUp,
  Cloud,
  Calendar,
  Bot,
  ShieldCheck,
  MailCheck,
  type LucideIcon,
} from "lucide-react";

export type IntegrationStatus = "available" | "addon" | "pro" | "pro_addon";

export interface Integration {
  slug: string;
  name: string;
  category: string;
  description: string;
  icon: LucideIcon;
  status: IntegrationStatus;
  features: string[];
  setupSteps: string[];
  plans: string[];
}

export const INTEGRATIONS: Integration[] = [
  {
    slug: "gmail",
    name: "Gmail",
    category: "Email",
    description: "Send emails from your Gmail account.",
    icon: Mail,
    status: "available",
    features: [
      "Connect any Gmail inbox in one click.",
      "Send campaigns through your own address.",
      "Auto-warmup runs in the background.",
      "Replies land in one shared inbox.",
    ],
    setupSteps: [
      "Open Mailboxes and click Connect Gmail.",
      "Sign in with your Google account.",
      "Approve the send permissions.",
      "Add the inbox to your next campaign.",
    ],
    plans: ["Free", "Starter", "Growth", "Pro", "Enterprise"],
  },
  {
    slug: "outlook",
    name: "Outlook",
    category: "Email",
    description: "Send emails from your Outlook account.",
    icon: Inbox,
    status: "available",
    features: [
      "Connect any Outlook or Microsoft 365 inbox.",
      "Send campaigns through your own address.",
      "Warmup builds sender trust.",
      "Replies land in one shared inbox.",
    ],
    setupSteps: [
      "Open Mailboxes and click Connect Outlook.",
      "Sign in with your Microsoft account.",
      "Approve the send permissions.",
      "Add the inbox to your next campaign.",
    ],
    plans: ["Free", "Starter", "Growth", "Pro", "Enterprise"],
  },
  {
    slug: "custom-smtp",
    name: "Custom SMTP",
    category: "Email",
    description: "Connect any email provider with SMTP.",
    icon: Server,
    status: "available",
    features: [
      "Works with any provider that supports SMTP.",
      "Set your own host, port, and encryption.",
      "Send campaigns through your own domain.",
      "Replies land in one shared inbox.",
    ],
    setupSteps: [
      "Open Mailboxes and click Connect Custom SMTP.",
      "Enter your host, port, and encryption type.",
      "Add your username and password.",
      "Send a test email and start your campaign.",
    ],
    plans: ["Free", "Starter", "Growth", "Pro", "Enterprise"],
  },
  {
    slug: "whatsapp-business",
    name: "WhatsApp Business",
    category: "Messaging",
    description: "Send template campaigns on WhatsApp.",
    icon: MessageSquare,
    status: "addon",
    features: [
      "Connect a WhatsApp Business number.",
      "Send approved template campaigns.",
      "Import contacts in bulk.",
      "Track delivery and replies.",
    ],
    setupSteps: [
      "Add the WhatsApp Campaigns add-on to your plan.",
      "Connect your WhatsApp Business number.",
      "Pick or create an approved template.",
      "Import your contacts and schedule the send.",
    ],
    plans: ["Growth add-on", "Pro add-on", "Enterprise included"],
  },
  {
    slug: "sms-provider",
    name: "SMS Provider",
    category: "Messaging",
    description: "Send text messages with number rotation.",
    icon: Smartphone,
    status: "addon",
    features: [
      "Brand registration handled for you.",
      "Buy and rotate sender numbers.",
      "Delivery tracking on every message.",
      "Auto-skip numbers that fail verification.",
    ],
    setupSteps: [
      "Add the SMS Campaigns add-on to your plan.",
      "Register your brand and buy a sender number.",
      "Write your message and pick your list.",
      "Send and track delivery in real time.",
    ],
    plans: ["Starter add-on", "Growth add-on", "Pro add-on", "Enterprise included"],
  },
  {
    slug: "ai-voice",
    name: "AI Voice",
    category: "Messaging",
    description: "AI voice outreach to your consented lead lists — books meetings.",
    icon: PhoneCall,
    status: "pro_addon",
    features: [
      "AI calls your consented contacts and books meetings.",
      "In-call booking with your scheduler.",
      "Post-call notes and disposition.",
      "Recording and transcript for every call.",
      "TCPA-compliant — requires prior express consent for every contact.",
    ],
    setupSteps: [
      "Add the AI Voice add-on to your Pro plan.",
      "Import your consented lead list.",
      "Set your script and booking rules.",
      "Turn it on and watch meetings roll in.",
    ],
    plans: ["Pro add-on", "Enterprise included"],
  },
  {
    slug: "hubspot",
    name: "HubSpot",
    category: "CRM",
    description: "Sync contacts and deals to HubSpot.",
    icon: Users,
    status: "pro",
    features: [
      "Push new leads to HubSpot contacts.",
      "Update deals as prospects reply.",
      "Log every email, call, and booking.",
      "Two-way contact sync.",
    ],
    setupSteps: [
      "Open Settings and click Integrations.",
      "Connect your HubSpot account.",
      "Pick the sync direction and field mapping.",
      "Turn on the sync and watch data flow.",
    ],
    plans: ["Pro", "Enterprise"],
  },
  {
    slug: "pipedrive",
    name: "Pipedrive",
    category: "CRM",
    description: "Sync contacts to Pipedrive.",
    icon: TrendingUp,
    status: "pro",
    features: [
      "Push new leads to Pipedrive contacts.",
      "Create deals when someone replies.",
      "Log every email and call.",
      "Two-way contact sync.",
    ],
    setupSteps: [
      "Open Settings and click Integrations.",
      "Connect your Pipedrive account.",
      "Pick the sync direction and field mapping.",
      "Turn on the sync and watch data flow.",
    ],
    plans: ["Pro", "Enterprise"],
  },
  {
    slug: "salesforce",
    name: "Salesforce",
    category: "CRM",
    description: "Sync contacts to Salesforce.",
    icon: Cloud,
    status: "pro",
    features: [
      "Push new leads to Salesforce contacts.",
      "Create opportunities when someone replies.",
      "Log every email and call as an activity.",
      "Two-way contact sync.",
    ],
    setupSteps: [
      "Open Settings and click Integrations.",
      "Connect your Salesforce account.",
      "Pick the sync direction and field mapping.",
      "Turn on the sync and watch data flow.",
    ],
    plans: ["Pro", "Enterprise"],
  },
  {
    slug: "smart-scheduler",
    name: "Smart Scheduler",
    category: "Scheduling",
    description: "Connect your scheduling tool. Cal.com compatible.",
    icon: Calendar,
    status: "available",
    features: [
      "Calendar sync with Google and Outlook.",
      "Share one booking link in any campaign.",
      "Auto-pause campaigns when someone books.",
      "Custom intake questions.",
    ],
    setupSteps: [
      "Open Scheduling and click Settings.",
      "Connect your calendar.",
      "Set your availability and intake questions.",
      "Copy your booking link into any campaign.",
    ],
    plans: ["Free", "Starter", "Growth", "Pro", "Enterprise"],
  },
  {
    slug: "chatgpt",
    name: "ChatGPT",
    category: "AI Assistants",
    description: "Control your account from ChatGPT.",
    icon: Bot,
    status: "available",
    features: [
      "Run lead searches from ChatGPT.",
      "Start and pause campaigns.",
      "Book meetings on your calendar.",
      "Every action is audit logged.",
    ],
    setupSteps: [
      "Open Settings and click External AI.",
      "Generate a scoped API key.",
      "Connect the MCP server in ChatGPT.",
      "Ask ChatGPT to run a task in plain English.",
    ],
    plans: ["Growth", "Pro", "Enterprise"],
  },
  {
    slug: "claude",
    name: "Claude",
    category: "AI Assistants",
    description: "Control your account from Claude.",
    icon: Bot,
    status: "available",
    features: [
      "Run lead searches from Claude.",
      "Start and pause campaigns.",
      "Book meetings on your calendar.",
      "Every action is audit logged.",
    ],
    setupSteps: [
      "Open Settings and click External AI.",
      "Generate a scoped API key.",
      "Connect the MCP server in Claude.",
      "Ask Claude to run a task in plain English.",
    ],
    plans: ["Growth", "Pro", "Enterprise"],
  },
  {
    slug: "gemini",
    name: "Gemini",
    category: "AI Assistants",
    description: "Control your account from Gemini.",
    icon: Bot,
    status: "available",
    features: [
      "Run lead searches from Gemini.",
      "Start and pause campaigns.",
      "Book meetings on your calendar.",
      "Every action is audit logged.",
    ],
    setupSteps: [
      "Open Settings and click External AI.",
      "Generate a scoped API key.",
      "Connect the MCP server in Gemini.",
      "Ask Gemini to run a task in plain English.",
    ],
    plans: ["Growth", "Pro", "Enterprise"],
  },
  {
    slug: "line-verification",
    name: "Line Verification",
    category: "Verification",
    description: "Check numbers before you send.",
    icon: ShieldCheck,
    status: "addon",
    features: [
      "WhatsApp status check.",
      "SMS capability check.",
      "Landline detection.",
      "Auto-skip bad numbers in campaigns.",
    ],
    setupSteps: [
      "Add the Line Verification add-on to your plan.",
      "Upload your list or connect a campaign.",
      "Run verification in one click.",
      "Bad numbers are skipped before you send.",
    ],
    plans: ["Growth add-on", "Pro add-on", "Enterprise included"],
  },
  {
    slug: "email-verification",
    name: "Email Verification",
    category: "Verification",
    description: "Verify emails before you send.",
    icon: MailCheck,
    status: "available",
    features: [
      "Catch invalid and disposable emails.",
      "Spam-trap and bounce detection.",
      "Bulk verification on any list.",
      "Auto-skip bad emails in campaigns.",
    ],
    setupSteps: [
      "Open a list or campaign.",
      "Click Verify Emails.",
      "Review the verified, risky, and invalid results.",
      "Send only to the safe addresses.",
    ],
    plans: ["Free", "Starter", "Growth", "Pro", "Enterprise"],
  },
];

export const INTEGRATION_BY_SLUG: Record<string, Integration> = INTEGRATIONS.reduce(
  (acc, i) => {
    acc[i.slug] = i;
    return acc;
  },
  {} as Record<string, Integration>,
);

export function getIntegrationBySlug(slug: string): Integration | undefined {
  return INTEGRATION_BY_SLUG[slug];
}

export function getRelatedIntegrations(slug: string, count = 3): Integration[] {
  const current = INTEGRATION_BY_SLUG[slug];
  if (!current) {
    return INTEGRATIONS.slice(0, count);
  }
  // Prefer same-category, then fill with others
  const sameCategory = INTEGRATIONS.filter(
    (i) => i.slug !== slug && i.category === current.category,
  );
  const others = INTEGRATIONS.filter(
    (i) => i.slug !== slug && i.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, count);
}

export function getAllIntegrationSlugs(): string[] {
  return INTEGRATIONS.map((i) => i.slug);
}

export const STATUS_LABELS: Record<IntegrationStatus, string> = {
  available: "Available",
  addon: "Add-on",
  pro: "Pro",
  pro_addon: "Pro add-on",
};

export const STATUS_CLASSES: Record<IntegrationStatus, string> = {
  available: "bg-[#18B0D1] text-white border-[#18B0D1]",
  addon: "bg-[#003D4D] text-white border-[#003D4D]",
  pro: "bg-gray-900 text-white border-gray-900",
  pro_addon: "bg-[#003D4D] text-white border-[#003D4D]",
};
