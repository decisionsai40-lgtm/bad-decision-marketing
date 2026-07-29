import Link from "next/link";
import {
  ArrowRight,
  Search,
  Send,
  Phone,
  Calendar,
  Bot,
  BarChart3,
  AlertTriangle,
  Check,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhatYouGet />
      <CostOfBadOutreach />
      <FinalCTA />
    </>
  );
}

/* ============================================================
   HERO : short, outcome-first, product screenshot
   ============================================================ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Let AI find leads, reach out, and follow up so you focus on closing.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-gray-600 sm:text-xl">
            BadDecision discovers verified prospects and automates multi-channel outreach across Email, WhatsApp, SMS, and Voice, all from one unified dashboard.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
              className="btn-primary w-full sm:w-auto"
            >
              Start free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/how-it-works" className="btn-secondary w-full sm:w-auto">
              See how it works
            </Link>
          </div>
          <p className="mt-4 text-sm font-medium text-gray-500">
            No credit card needed.
          </p>
        </div>

        {/* Product screenshot */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-2 shadow-xl">
            <img
              src="/screenshots/discover-dashboard.png"
              alt="Bad Decision lead generation dashboard"
              className="w-full rounded-lg"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TRUST BAR : 1 line
   ============================================================ */
function TrustBar() {
  return (
    <section className="border-y-2 border-gray-200 bg-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-sm font-bold uppercase tracking-wider text-gray-500">
          <span className="inline-flex h-2 w-2 rounded-full bg-[#18B0D1]" aria-hidden />
          <span>Trusted by 1,200+ teams finding customers every day</span>
          <span className="inline-flex h-2 w-2 rounded-full bg-[#18B0D1]" aria-hidden />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   WHAT YOU GET : 6 short feature modules, each with screenshot
   ============================================================ */
function WhatYouGet() {
  return (
    <section className="bg-white">
      <FeatureModule
        eyebrow="01"
        icon={Search}
        title="Find fresh leads"
        description="Four search engines pull live businesses off the web."
        screenshot="/screenshots/discover-dashboard.png"
        alt="Lead discovery dashboard"
        bullets={[
          "Companies and professionals.",
          "Stores and e-commerce shops.",
          "Businesses running paid ads.",
          "Businesses with no website.",
        ]}
        reverse={false}
      />
      <FeatureModule
        eyebrow="02"
        icon={Send}
        title="Send email that lands"
        description="Unlimited inboxes, warmup, and smart sending keep you out of spam."
        screenshot="/screenshots/email-campaign.png"
        alt="Email campaign builder"
        bullets={[
          "Unlimited campaigns and inboxes.",
          "Warmup that builds trust.",
          "One inbox for all replies.",
        ]}
        reverse={true}
      />
      <FeatureModule
        eyebrow="03"
        icon={Phone}
        title="Reach them on every channel"
        description="WhatsApp, SMS, and AI voice calls from one dashboard."
        screenshot="/screenshots/voice-history.png"
        alt="Voice call history"
        bullets={[
          "WhatsApp template campaigns.",
          "SMS with number purchase.",
          "AI voice calls that book meetings.",
        ]}
        reverse={false}
      />
      <FeatureModule
        eyebrow="04"
        icon={Calendar}
        title="Book meetings automatically"
        description="When someone books, we pause every campaign for them."
        screenshot="/screenshots/scheduling-page.png"
        alt="Scheduling and booking page"
        bullets={[
          "Connect your scheduler.",
          "Share your booking link.",
          "Campaigns pause on booking.",
        ]}
        reverse={true}
      />
      <FeatureModule
        eyebrow="05"
        icon={Bot}
        title="Build flows visually"
        description="Drag and drop, or describe it in English and AI builds it."
        screenshot="/screenshots/automation-canvas.png"
        alt="Automation builder canvas"
        bullets={[
          "Multi-step sequences.",
          "If-else and A/B splits.",
          "AI builds it from a prompt.",
        ]}
        reverse={false}
      />
      <FeatureModule
        eyebrow="06"
        icon={BarChart3}
        title="See what works"
        description="Track every lead, email, call, and booking in one place."
        screenshot="/screenshots/analytics-dashboard.png"
        alt="Analytics dashboard"
        bullets={[
          "Reply rates and open rates.",
          "Call outcomes and recordings.",
          "Bookings and revenue.",
        ]}
        reverse={true}
      />
    </section>
  );
}

function FeatureModule({
  eyebrow,
  icon: Icon,
  title,
  description,
  screenshot,
  alt,
  bullets,
  reverse,
}: {
  eyebrow: string;
  icon: React.ElementType;
  title: string;
  description: string;
  screenshot: string;
  alt: string;
  bullets: string[];
  reverse: boolean;
}) {
  return (
    <div className="border-b-2 border-gray-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div className={reverse ? "lg:col-start-2 lg:row-start-1" : ""}>
            <span className="text-sm font-extrabold uppercase tracking-wider text-[#18B0D1]">
              {eyebrow}
            </span>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                {title}
              </h2>
            </div>
            <p className="mt-4 text-lg font-medium text-gray-600">
              {description}
            </p>
            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#18B0D1]" />
                  <span className="font-medium text-gray-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={reverse ? "lg:col-start-1 lg:row-start-1" : ""}>
            <div className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-2 shadow-lg">
              <img
                src={screenshot}
                alt={alt}
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   COST OF BAD OUTREACH : 4 short lines
   ============================================================ */
function CostOfBadOutreach() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-xs font-bold text-red-600">
            <AlertTriangle className="h-3.5 w-3.5" />
            Stop the bleeding
          </span>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What bad outreach costs you
          </h2>
        </div>
        <div className="mt-10 space-y-4">
          {[
            "You are paying 5 companies $330+ a month to find one customer.",
            "Their lists bounce. Their tools do not talk to each other. Your emails land in spam.",
            "One platform. One bill. More meetings.",
          ].map((line) => (
            <p
              key={line}
              className="rounded-2xl border-2 border-gray-200 bg-white p-5 text-center text-lg font-medium text-gray-700"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FINAL CTA : short
   ============================================================ */
function FinalCTA() {
  return (
    <section className="bg-gray-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          Stop making bad decisions.
          <br />
          Start finding customers.
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
  );
}
