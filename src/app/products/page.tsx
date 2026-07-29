import Link from "next/link";
import {
  Search,
  Send,
  MessageSquare,
  Smartphone,
  Phone,
  Calendar,
  Workflow,
  ShieldCheck,
  Bot,
  Check,
  ArrowRight,
} from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { SITE_CONFIG } from "@/lib/utils";

type ProductModule = {
  icon: React.ElementType;
  title: string;
  description: string;
  bullets: string[];
  screenshot?: string;
  alt?: string;
};

const MODULES: ProductModule[] = [
  {
    icon: Search,
    title: "Lead Discovery",
    description: "Find fresh leads with four search engines.",
    bullets: ["Companies", "E-commerce", "Ads running", "No website"],
    screenshot: "/screenshots/discover-dashboard.png",
    alt: "Lead discovery dashboard",
  },
  {
    icon: Send,
    title: "Email Outreach",
    description: "Send unlimited emails from unlimited inboxes.",
    bullets: ["Campaigns", "Warmup", "Reply tracking"],
    screenshot: "/screenshots/email-campaign.png",
    alt: "Email campaign builder",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Campaigns",
    description: "Send template campaigns on WhatsApp.",
    bullets: ["Templates", "Contact import", "Delivery analytics"],
  },
  {
    icon: Smartphone,
    title: "SMS Campaigns",
    description: "Send text messages with number rotation.",
    bullets: ["Brand registration", "Number purchase", "Delivery tracking"],
  },
  {
    icon: Phone,
    title: "AI Voice Calling",
    description: "Let AI call prospects and book meetings.",
    bullets: ["In-call booking", "Post-call disposition", "Recording and transcript"],
    screenshot: "/screenshots/voice-history.png",
    alt: "AI voice call history",
  },
  {
    icon: Calendar,
    title: "Smart Scheduler",
    description: "Let prospects book meetings with you.",
    bullets: ["Calendar sync", "Auto-pause campaigns", "Embeddable link"],
    screenshot: "/screenshots/scheduling-page.png",
    alt: "Scheduling page",
  },
  {
    icon: Workflow,
    title: "Automation Engine",
    description: "Build multi-step flows visually or with AI.",
    bullets: ["Drag-and-drop canvas", "If/else logic", "AI prompt-to-workflow"],
    screenshot: "/screenshots/automation-canvas.png",
    alt: "Automation builder canvas",
  },
  {
    icon: ShieldCheck,
    title: "Line Verification",
    description: "Check numbers before you send.",
    bullets: ["WhatsApp status", "SMS capability", "Auto-skip bad numbers"],
  },
  {
    icon: Bot,
    title: "External AI",
    description: "Control everything from ChatGPT, Claude, or Gemini.",
    bullets: ["MCP server", "OpenAPI spec", "Audit logged"],
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Everything you need to find and close customers"
        subtitle="One platform replaces your lead database, email tool, messaging apps, dialer, scheduler, and automation software."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m) => (
              <ProductCard key={m.title} module={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Analytics showcase */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Track every lead, email, call, and booking in one place
          </h2>
          <p className="mt-4 text-center text-lg font-medium text-gray-600">
            Live numbers. No spreadsheets. No guesswork.
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-2 shadow-xl">
            <img
              src="/screenshots/analytics-dashboard.png"
              alt="Bad Decision analytics dashboard"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            One platform. Nine modules. Zero copy-paste.
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-gray-900 hover:bg-gray-100 sm:w-auto"
            >
              Start free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/20 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({ module: m }: { module: ProductModule }) {
  const Icon = m.icon;
  return (
    <div className="card-premium flex flex-col overflow-hidden">
      {m.screenshot ? (
        <div className="aspect-[16/9] overflow-hidden border-b-2 border-gray-100 bg-gray-50">
          <img
            src={m.screenshot}
            alt={m.alt ?? m.title}
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/9] items-center justify-center border-b-2 border-gray-100 bg-[#003D4D]">
          <Icon className="h-12 w-12 text-[#18B0D1]" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900">
            <Icon className="h-4 w-4 text-white" />
          </div>
          <h3 className="text-lg font-extrabold text-gray-900">{m.title}</h3>
        </div>
        <p className="mt-3 text-sm font-medium text-gray-600">{m.description}</p>
        <ul className="mt-4 space-y-2">
          {m.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#18B0D1]" />
              <span className="font-medium">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
