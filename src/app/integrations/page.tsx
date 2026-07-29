import Link from "next/link";
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
  ArrowRight,
} from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { SITE_CONFIG, cn } from "@/lib/utils";

type Status = "available" | "addon" | "pro" | "pro_addon";

type Integration = {
  icon: React.ElementType;
  name: string;
  description: string;
  status: Status;
};

const CATEGORIES: { name: string; integrations: Integration[] }[] = [
  {
    name: "Email",
    integrations: [
      { icon: Mail, name: "Gmail", description: "Send emails from your Gmail account.", status: "available" },
      { icon: Inbox, name: "Outlook", description: "Send emails from your Outlook account.", status: "available" },
      { icon: Server, name: "Custom SMTP", description: "Connect any email provider with SMTP.", status: "available" },
    ],
  },
  {
    name: "Messaging",
    integrations: [
      { icon: MessageSquare, name: "WhatsApp Business", description: "Send template campaigns on WhatsApp.", status: "addon" },
      { icon: Smartphone, name: "SMS Provider", description: "Send text messages with number rotation.", status: "addon" },
      { icon: PhoneCall, name: "AI Voice", description: "AI cold calling that books meetings.", status: "pro_addon" },
    ],
  },
  {
    name: "CRM",
    integrations: [
      { icon: Users, name: "HubSpot", description: "Sync contacts and deals to HubSpot.", status: "pro" },
      { icon: TrendingUp, name: "Pipedrive", description: "Sync contacts to Pipedrive.", status: "pro" },
      { icon: Cloud, name: "Salesforce", description: "Sync contacts to Salesforce.", status: "pro" },
    ],
  },
  {
    name: "Scheduling",
    integrations: [
      { icon: Calendar, name: "Smart Scheduler", description: "Connect your scheduling tool. Cal.com compatible.", status: "available" },
    ],
  },
  {
    name: "AI Assistants",
    integrations: [
      { icon: Bot, name: "ChatGPT", description: "Control your account from ChatGPT.", status: "available" },
      { icon: Bot, name: "Claude", description: "Control your account from Claude.", status: "available" },
      { icon: Bot, name: "Gemini", description: "Control your account from Gemini.", status: "available" },
    ],
  },
  {
    name: "Verification",
    integrations: [
      { icon: ShieldCheck, name: "Line Verification", description: "Check numbers before you send.", status: "addon" },
      { icon: MailCheck, name: "Email Verification", description: "Verify emails before you send.", status: "available" },
    ],
  },
];

const STATUS_LABELS: Record<Status, string> = {
  available: "Available",
  addon: "Add-on",
  pro: "Pro",
  pro_addon: "Pro add-on",
};

const STATUS_CLASSES: Record<Status, string> = {
  available: "bg-green-100 text-green-700 border-green-200",
  addon: "bg-[#18B0D1]/10 text-[#18B0D1] border-[#18B0D1]/30",
  pro: "bg-gray-900 text-white border-gray-900",
  pro_addon: "bg-[#003D4D] text-white border-[#003D4D]",
};

export default function IntegrationsPage() {
  return (
    <>
      <PageHeader
        title="Connect the tools you already use"
        subtitle="BadDecision works with the tools in your stack. No manual data entry, no copy-paste."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {CATEGORIES.map((cat) => (
              <div key={cat.name}>
                <h2 className="text-2xl font-extrabold text-gray-900">{cat.name}</h2>
                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.integrations.map((i) => {
                    const Icon = i.icon;
                    return (
                      <div key={i.name} className="card-premium p-5">
                        <div className="flex items-start justify-between">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <span
                            className={cn(
                              "rounded-full border px-3 py-1 text-xs font-bold",
                              STATUS_CLASSES[i.status]
                            )}
                          >
                            {STATUS_LABELS[i.status]}
                          </span>
                        </div>
                        <h3 className="mt-4 text-base font-extrabold text-gray-900">
                          {i.name}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-gray-600">
                          {i.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Stop juggling tabs. Start closing.
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
              href="/products"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/20 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              See all products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
