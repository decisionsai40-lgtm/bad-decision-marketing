import Link from "next/link";
import {
  ArrowRight,
  Search,
  ShieldCheck,
  Sparkles,
  Send,
  Inbox,
  BarChart3,
  CheckCircle2,
  Users,
  Globe,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";
import { SITE_CONFIG, PRICING_PLANS, FAQS } from "@/lib/utils";
import { HomeJsonLd } from "@/components/seo/json-ld";

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <Hero />
      <SocialProof />
      <TheShift />
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
   HERO
   ============================================================ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-radial-glow">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pb-28 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[var(--color-foreground)] sm:text-5xl lg:text-6xl">
            Find real buyers
            <br />
            <span className="text-gradient">instead of empty places where nobody answers.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)] sm:text-xl">
            Tell us who you want to reach and we find them for you. We check every email,
            write the message, and send it from your inbox. All you do is show up to the
            meetings people booked with you.
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
          <p className="mt-4 text-sm text-[var(--color-text-muted)]">
            Free forever. No credit card needed.
          </p>
        </div>

        {/* Product mockup */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="card-premium overflow-hidden p-2 shadow-xl">
            <div className="rounded-lg bg-[var(--color-card)] p-4 sm:p-6">
              <div className="flex items-center gap-2 pb-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-white/60">dashboard.baddecision.app</span>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { label: "Leads found", value: "1,247", icon: Search, color: "text-[#5ee5ff]" },
                  { label: "Verified emails", value: "1,089", icon: ShieldCheck, color: "text-green-400" },
                  { label: "Replies this week", value: "83", icon: Inbox, color: "text-yellow-400" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg bg-white/5 p-4">
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    <div className="mt-2 text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 space-y-2">
                {[
                  { name: "Acme Realty — Lagos", status: "Replied", color: "bg-green-500/20 text-green-300" },
                  { name: "Glow Skin Co — Brooklyn", status: "Opened", color: "bg-blue-500/20 text-blue-300" },
                  { name: "Zen Coaching — Austin", status: "Sent", color: "bg-white/10 text-white/80" },
                ].map((row) => (
                  <div
                    key={row.name}
                    className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3"
                  >
                    <span className="text-sm text-white/90">{row.name}</span>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${row.color}`}>
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
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {[
            { value: "4 ways to search", label: "Ways to find buyers" },
            { value: "6 styles", label: "Message writing styles" },
            { value: "99.2%", label: "Email check accuracy" },
            { value: "7 days", label: "Money-back guarantee" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-[var(--color-foreground)]">{stat.value}</div>
              <div className="mt-1 text-sm text-[var(--color-text-muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   THE SHIFT — value-focused, not problem/solution
   ============================================================ */
function TheShift() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">
            The way people find customers has changed.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            You used to buy a list, guess which emails worked, and hope for the best.
            Now you can find the exact people who need what you sell, know their email
            is real before you send, and reach them this week.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: Search,
              title: "Find the right people",
              body: "Tell us who you want to reach and we search the live web to bring back real businesses with real contact info. You get fresh leads instead of stale lists full of dead ends.",
            },
            {
              icon: ShieldCheck,
              title: "Know every email works",
              body: "Every email is checked before you send. You see which ones are safe, which are risky, and which will bounce. You only pay for the good ones.",
            },
            {
              icon: Inbox,
              title: "Book more meetings",
              body: "We write the message, send it from your inbox at the right time, and tell you the moment someone replies. You spend your time talking to people who said yes.",
            },
          ].map((item) => (
            <div key={item.title} className="card-premium p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-violet-soft)]">
                <item.icon className="h-6 w-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-[var(--color-foreground)]">
                {item.title}
              </h3>
              <p className="mt-2 text-[var(--color-text-secondary)]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ENGINES
   ============================================================ */
function Engines() {
  const engines = [
    {
      name: "Companies & Professionals",
      icon: Users,
      status: "Live",
      description:
        "Find local businesses and pros by industry and location. Every lead comes with name, website, email, phone, and social links.",
      examples: ["Real estate agents in Lagos", "Dentists in Brooklyn", "Coaches in Austin"],
      available: true,
    },
    {
      name: "Ads Running",
      icon: BarChart3,
      status: "Live",
        description:
              "Find businesses already paying for ads. If they are spending money on ads, they have money to spend on what you sell too.",
      examples: ["Stores running social ads", "SaaS companies on search ads"],
      available: true,
    },
    {
      name: "Ecommerce",
      icon: Globe,
      status: "Live",
        description:
              "Find online stores by the tools and platforms they use. Know what runs their shop before you reach out.",
      examples: ["Skincare stores on Shopify", "Coffee shops selling online"],
      available: true,
    },
    {
      name: "Web Absent",
      icon: Search,
      status: "Live",
      description:
        "Find businesses with no website. Perfect if you sell web design, marketing, or branding services.",
      examples: ["Plumbers with no site", "Caterers only on review sites"],
      available: true,
    },
  ];

  return (
    <section className="bg-[var(--color-surface)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">
            Find your next customer (4 ways to search)
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Pick the one that fits who you are looking for. Each one searches the live
            web and brings back fresh leads in minutes.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {engines.map((engine) => (
            <div
              key={engine.name}
              className={`card-premium relative overflow-hidden p-8 ${
                engine.available ? "" : "opacity-75"
              }`}
            >
              {!engine.available && (
                <span className="absolute right-4 top-4 rounded-full bg-[var(--color-muted)] px-3 py-1 text-xs font-semibold text-[var(--color-text-muted)]">
                  {engine.status}
                </span>
              )}
              {engine.available && (
                <span className="absolute right-4 top-4 rounded-full bg-[var(--color-success-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-success)]">
                  {engine.status}
                </span>
              )}
              <engine.icon className="h-10 w-10 text-[var(--color-primary)]" />
              <h3 className="mt-4 text-xl font-bold text-[var(--color-foreground)]">
                {engine.name}
              </h3>
              <p className="mt-2 text-[var(--color-text-secondary)]">{engine.description}</p>
              <div className="mt-4 space-y-1.5">
                {engine.examples.map((ex) => (
                  <div
                    key={ex}
                    className="rounded-md bg-[var(--color-muted)] px-3 py-1.5 text-xs text-[var(--color-text-secondary)]"
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
   HOW IT WORKS (preview)
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
          <h2 className="text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">
            Four steps. One subscription.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            From "who should I contact?" to "they replied!" in about 14 days, with no
            setup, no extra tools, and no guessing.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.title} className="card-premium p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-violet-soft)]">
                <step.icon className="h-6 w-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[var(--color-foreground)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
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
   WHAT YOU GET (value outcomes, not feature lists)
   ============================================================ */
function WhatYouGet() {
  const outcomes = [
    {
      icon: ShieldCheck,
      title: "Your email stays trusted",
      body: "Every email is checked before you send. Bad emails are caught and removed. Your inbox stays healthy, your messages land in the main inbox (not spam), and your good name with email providers stays safe.",
    },
    {
      icon: Sparkles,
      title: "Messages that sound like you wrote them",
      body: "Pick from six ways to write messages that work. Each lead gets a unique message that fits their business. Short, personal, and ready to send. No cookie-cutter templates and no robot-sounding copy.",
    },
    {
      icon: Send,
      title: "Send from your own inbox the safe way",
      body: "Connect your email account and we slowly build trust for it. We send at the right times and switch between your inboxes so no single one gets overused. Your email stays trusted because it stays in your hands, right where it belongs.",
    },
    {
      icon: Inbox,
      title: "Never miss a reply",
      body: "Every reply lands in one inbox. We sort them into groups: interested, not now, out of office, and unsubscribe. You see the interested ones first and reach back before they go cold.",
    },
    {
      icon: BarChart3,
      title: "Know what is working",
      body: "See your open rate, reply rate, and bounce rate at a glance. Know which messages get replies and which need a rewrite. Make better choices with real numbers instead of guesses.",
    },
    {
      icon: Globe,
      title: "Use your own accounts and save money",
      body: "If you are part of our community, connect your own accounts for finding leads, checking emails, and writing messages. You pay nothing for those tasks. Invite-only, controlled by you.",
    },
  ];

  return (
    <section className="bg-[var(--color-surface)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">
            What you actually get
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            These are not just a list of features. These are real outcomes that help you
            book more meetings and waste less money.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((o) => (
            <div key={o.title} className="card-premium p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-violet-soft)]">
                <o.icon className="h-5 w-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[var(--color-foreground)]">{o.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PLANS PREVIEW (plan names only, no prices)
   ============================================================ */
function PlansPreview() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">
            One subscription. Everything you need.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Start free and upgrade when you are ready to send real campaigns. You can
            cancel anytime.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`card-premium p-6 text-center ${
                plan.highlight
                  ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20"
                  : ""
              }`}
            >
              <h3 className="text-lg font-bold text-[var(--color-foreground)]">{plan.name}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{plan.description}</p>
              <Link
                href={`${SITE_CONFIG.dashboardUrl}${plan.ctaHref}`}
                className={`mt-4 block text-sm font-semibold ${
                  plan.highlight ? "text-[var(--color-primary)]" : "text-[var(--color-foreground)]"
                } hover:underline`}
              >
                {plan.cta} →
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
    <section className="bg-[var(--color-surface)] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">
            Questions, answered
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
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
                <span className="font-semibold text-[var(--color-foreground)]">{faq.q}</span>
                <span className="ml-4 text-[var(--color-primary)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[var(--color-text-secondary)]">{faq.a}</p>
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
    <section className="bg-[var(--color-card)] py-20 text-[var(--color-card-foreground)] sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-[var(--color-card-foreground)]">
          Stop guessing
          <br />
          and start finding real buyers.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-card-foreground)]/75">
          Start with a free forever plan that needs no credit card. Upgrade only when
          you are ready to send real campaigns.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
            className="btn-primary w-full sm:w-auto"
          >
            Get started free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            Talk to us
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[var(--color-card-foreground)]/75">
          <span className="flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5" /> Money-back guarantee
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" /> Cancel anytime
          </span>
          <span className="flex items-center gap-1.5">
            <MessageSquare className="h-3.5 w-3.5" /> Real human support
          </span>
        </div>
      </div>
    </section>
  );
}
