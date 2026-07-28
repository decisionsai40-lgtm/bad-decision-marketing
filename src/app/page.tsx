import Link from "next/link";
import {
  ArrowRight,
  Search,
  ShieldCheck,
  Sparkles,
  Send,
  Inbox,
  BarChart3,
  Users,
  Globe,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG, PRICING_PLANS, FAQS } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <TheProblem />
      <Engines />
      <HowItWorks />
      <WhatYouGet />
      <PlansPreview />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}

/* ============================================================
   HERO : Problem, Solution, Benefit
   ============================================================ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pb-28 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-4 py-1.5 text-xs font-bold text-gray-700">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            One platform for finding customers and reaching out
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Find your next customers and reach out, all in one place.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-gray-600 sm:text-xl">
            Finding customers is slow when you juggle five different tools. Bad
            Decision finds the right people, checks every email before you send,
            writes your messages with AI, sends them from your inbox, and shows you
            who is ready to talk. You get more meetings with less work, and you only
            pay one subscription.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
              className="btn-primary w-full sm:w-auto"
            >
              Get started free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/how-it-works" className="btn-secondary w-full sm:w-auto">
              See how it works
            </Link>
          </div>
          <p className="mt-4 text-sm font-medium text-gray-500">
            Free forever. No credit card needed.
          </p>
        </div>

        {/* Product mockup */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-2 shadow-xl">
            <div className="rounded-lg bg-gray-900 p-4 sm:p-6">
              <div className="flex items-center gap-2 pb-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs font-medium text-gray-400">dashboard.baddecision.app</span>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { label: "Leads found", value: "1,247", icon: Search },
                  { label: "Verified emails", value: "1,089", icon: ShieldCheck },
                  { label: "Replies this week", value: "83", icon: Inbox },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg bg-white/5 p-4">
                    <stat.icon className="h-5 w-5 text-white" />
                    <div className="mt-2 text-2xl font-extrabold text-white">{stat.value}</div>
                    <div className="text-xs font-medium text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 space-y-2">
                {[
                  { name: "Acme Realty, Lagos", status: "Replied", color: "bg-green-500/20 text-green-300" },
                  { name: "Glow Skin Co, Brooklyn", status: "Opened", color: "bg-blue-500/20 text-blue-300" },
                  { name: "Zen Coaching, Austin", status: "Sent", color: "bg-white/10 text-gray-300" },
                ].map((row) => (
                  <div
                    key={row.name}
                    className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3"
                  >
                    <span className="text-sm font-medium text-white">{row.name}</span>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${row.color}`}>
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SOCIAL PROOF
   ============================================================ */
function SocialProof() {
  return (
    <section className="border-b-2 border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {[
            { value: "4 engines", label: "Ways to find buyers" },
            { value: "6 styles", label: "Message writing styles" },
            { value: "99.2%", label: "Email check accuracy" },
            { value: "7 days", label: "Money-back guarantee" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-extrabold text-gray-900">{stat.value}</div>
              <div className="mt-1 text-sm font-medium text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   THE PROBLEM : emotional hook + logical pain
   ============================================================ */
function TheProblem() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Finding customers should not be this hard.
          </h2>
          <p className="mt-4 text-lg font-medium text-gray-600">
            You buy a lead list, and half the emails bounce. You pay for an email
            checker, a sending tool, an AI writer, and a reply tracker. You juggle
            four logins, four bills, and four tools that do not talk to each other.
            By the time your first campaign goes out, you have spent weeks and you
            still do not know if anyone will reply.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: Search,
              title: "Stop guessing who to contact",
              body: "Tell us who you want to reach and we search the live web to bring back real businesses with real contact info. You get fresh leads in minutes, not stale lists full of dead ends.",
            },
            {
              icon: ShieldCheck,
              title: "Know every email works before you send",
              body: "Every email is checked before you send. You see which ones are safe, which are risky, and which will bounce. You only pay for the safe ones, so your inbox stays trusted.",
            },
            {
              icon: Inbox,
              title: "See every reply in one place",
              body: "We write the message, send it from your inbox at the right time, and pull every reply into one place. You spend your time talking to people who said yes, not chasing a scattered inbox.",
            },
          ].map((item) => (
            <div key={item.title} className="card-premium p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                <item.icon className="h-6 w-6 text-gray-900" />
              </div>
              <h3 className="mt-4 text-xl font-extrabold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 font-medium text-gray-600">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ENGINES : the four ways to find leads (all live today)
   ============================================================ */
function Engines() {
  const engines = [
    {
      name: "Companies & Professionals",
      icon: Users,
      description:
        "Find local businesses and pros by industry and location. Every lead comes with name, website, email, phone, and social links.",
      examples: ["Real estate agents in Lagos", "Dentists in Brooklyn", "Coaches in Austin"],
    },
    {
      name: "Ads Running",
      icon: BarChart3,
      description:
        "Find businesses already paying for ads. If they spend money on ads, they have money to spend on what you sell too.",
      examples: ["Stores running social ads", "Software companies on search ads"],
    },
    {
      name: "Ecommerce",
      icon: Globe,
      description:
        "Find online stores by the tools and platforms they use. Know what runs their shop before you reach out.",
      examples: ["Skincare stores online", "Coffee shops selling online"],
    },
    {
      name: "Web Absent",
      icon: Search,
      description:
        "Find businesses with no website. Perfect if you sell web design, marketing, or branding services.",
      examples: ["Plumbers with no site", "Caterers only on review sites"],
    },
  ];

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Four ways to find your next customer
          </h2>
          <p className="mt-4 text-lg font-medium text-gray-600">
            Pick the one that fits who you are looking for. Each one searches the
            live web and brings back fresh leads in minutes.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {engines.map((engine) => (
            <div
              key={engine.name}
              className="card-premium relative overflow-hidden p-8"
            >
              <span className="absolute right-4 top-4 rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">
                Live
              </span>
              <engine.icon className="h-10 w-10 text-gray-900" />
              <h3 className="mt-4 text-xl font-extrabold text-gray-900">
                {engine.name}
              </h3>
              <p className="mt-2 font-medium text-gray-600">{engine.description}</p>
              <div className="mt-4 space-y-1.5">
                {engine.examples.map((ex) => (
                  <div
                    key={ex}
                    className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                  >
                    &ldquo;{ex}&rdquo;
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   HOW IT WORKS : preview
   ============================================================ */
function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "1. Find leads",
      description:
        "Pick a search method, type who you want to reach, and we search the live web. Every lead comes with contact info and company details.",
    },
    {
      icon: ShieldCheck,
      title: "2. Check emails",
      description:
        "Every email goes through a careful check. You see which are safe, which are risky, and which will bounce. You only pay for the safe ones.",
    },
    {
      icon: Sparkles,
      title: "3. Write messages",
      description:
        "Pick a writing style. We write a short, personal message for each lead. Edit it, or send it as is. No more staring at a blank screen.",
    },
    {
      icon: Send,
      title: "4. Send and track",
      description:
        "Connect your email inbox. We slowly build its trust, send at the right time, and tell you the moment someone opens, clicks, or replies.",
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Four steps. One subscription.
          </h2>
          <p className="mt-4 text-lg font-medium text-gray-600">
            Go from wondering who to contact to seeing real replies in about 14
            days, with no setup, no extra tools, and no guessing.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.title} className="card-premium p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                <step.icon className="h-6 w-6 text-gray-900" />
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/how-it-works" className="btn-secondary">
            See the full walkthrough
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   WHAT YOU GET : value outcomes
   ============================================================ */
function WhatYouGet() {
  const outcomes = [
    {
      icon: ShieldCheck,
      title: "Your email stays trusted",
      body: "Every email is checked before you send. Bad emails are caught and removed. Your inbox stays healthy, your messages land in the main inbox instead of spam, and your good name with email providers stays safe.",
    },
    {
      icon: Sparkles,
      title: "Messages that sound like you wrote them",
      body: "Pick from six ways to write messages that work. Each lead gets a unique message that fits their business. Short, personal, and ready to send. No cookie-cutter templates and no robot-sounding copy.",
    },
    {
      icon: Send,
      title: "Send from your own inbox the safe way",
      body: "Connect your email account and we slowly build trust for it. We send at the right times and switch between your inboxes so no single one gets overused. Your email stays trusted because it stays in your hands.",
    },
    {
      icon: Inbox,
      title: "Never miss a reply",
      body: "Every reply lands in one inbox. We sort them into groups so you can see who is interested, who is out of office, and who asked to unsubscribe. You see the interested ones first and reach back before they go cold.",
    },
    {
      icon: BarChart3,
      title: "Know what is working",
      body: "See your open rate, reply rate, and bounce rate at a glance. Know which messages get replies and which need a rewrite. Make better choices with real numbers instead of guesses.",
    },
    {
      icon: Globe,
      title: "Reach people on more channels",
      body: "Email is just the start. You can also send campaigns through WhatsApp and SMS as add-ons, so you can connect with customers on the channels they actually use.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What you actually get
          </h2>
          <p className="mt-4 text-lg font-medium text-gray-600">
            These are real outcomes that help you book more meetings and waste less
            money, not just a list of features.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((o) => (
            <div key={o.title} className="card-premium p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                <o.icon className="h-5 w-5 text-gray-900" />
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-gray-900">{o.title}</h3>
              <p className="mt-2 text-sm font-medium text-gray-600">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PLANS PREVIEW : plan names only, no prices
   ============================================================ */
function PlansPreview() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            One subscription. Everything you need.
          </h2>
          <p className="mt-4 text-lg font-medium text-gray-600">
            Start free and upgrade when you are ready to send real campaigns. You
            can cancel anytime.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`card-premium p-6 text-center ${
                plan.highlight ? "border-gray-900 shadow-xl" : ""
              }`}
            >
              {plan.highlight && (
                <span className="mb-3 inline-block rounded-full bg-gray-900 px-3 py-0.5 text-[10px] font-bold text-white">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-lg font-extrabold text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-sm font-medium text-gray-500">{plan.description}</p>
              <Link
                href={`${SITE_CONFIG.dashboardUrl}${plan.ctaHref}`}
                className="mt-4 block text-sm font-bold text-gray-900 hover:underline"
              >
                {plan.cta} &rarr;
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/pricing" className="btn-secondary">
            See full pricing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ PREVIEW
   ============================================================ */
function FAQPreview() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Questions, answered
          </h2>
          <p className="mt-4 text-lg font-medium text-gray-600">
            Here is the short version. See the full page for more answers.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.slice(0, 5).map((faq) => (
            <details
              key={faq.q}
              className="card-premium group cursor-pointer p-6 [&_summary]:list-none"
            >
              <summary className="flex items-center justify-between">
                <span className="font-bold text-gray-900">{faq.q}</span>
                <span className="ml-4 font-bold text-gray-900 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 font-medium text-gray-600">{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/faq" className="btn-secondary">
            See all questions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FINAL CTA
   ============================================================ */
function FinalCTA() {
  return (
    <section className="bg-gray-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          Stop guessing
          <br />
          and start finding real buyers.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-gray-300">
          Start with a free forever plan that needs no credit card. Upgrade only
          when you are ready to send real campaigns.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-gray-900 hover:bg-gray-100 sm:w-auto"
          >
            Get started free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/20 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            Talk to us
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-gray-300">
          <span className="flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5" /> Money-back guarantee
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" /> Cancel anytime
          </span>
          <span className="flex items-center gap-1.5">
            <MessageSquare className="h-3.5 w-3.5" /> Real human support
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5" /> No credit card to start
          </span>
        </div>
      </div>
    </section>
  );
}
