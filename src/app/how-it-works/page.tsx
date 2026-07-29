import Link from "next/link";
import { Search, ShieldCheck, Send, Calendar, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { SITE_CONFIG } from "@/lib/utils";

const STEPS = [
  {
    icon: Search,
    title: "Find",
    description: "Search four engines for businesses that need what you sell.",
  },
  {
    icon: ShieldCheck,
    title: "Check",
    description: "Every email is verified before you send, so nothing bounces.",
  },
  {
    icon: Send,
    title: "Reach",
    description: "Send email, WhatsApp, SMS, or let AI call them for you.",
  },
  {
    icon: Calendar,
    title: "Book",
    description: "When they reply, book the meeting. Campaigns pause automatically.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="From search to booked in 4 steps"
        subtitle="Find, check, reach, and book. All in one dashboard. No extra tools."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <div key={step.title} className="card-premium p-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-extrabold text-gray-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900">
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you do, in one view
          </h2>
          <p className="mt-4 text-center text-lg font-medium text-gray-600">
            Every lead, email, call, and booking tracked end to end.
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

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Find your first lead today
          </h2>
          <p className="mt-4 text-lg font-medium text-gray-600">
            Free to start. No credit card needed.
          </p>
          <Link
            href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
            className="btn-primary mt-8 inline-flex"
          >
            Start free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
