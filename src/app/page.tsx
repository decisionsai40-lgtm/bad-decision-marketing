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
  Zap,
  Globe,
  Users,
  TrendingUp,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";
import { SITE_CONFIG, PRICING_PLANS, FAQS } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <Engines />
      <HowItWorks />
      <Pipeline />
      <Features />
      <PricingPreview />
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
          <div className="mb-6 flex justify-center">
            <span className="badge">
              <Sparkles className="h-3.5 w-3.5" />
              The all-in-one platform for outbound sales
            </span>
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[var(--color-foreground)] sm:text-5xl lg:text-6xl">
            Find real buyers.
            <br />
            <span className="text-gradient">Skip the ghost towns.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)] sm:text-xl">
            Bad Decision scans the live internet to find businesses who actually want what
            you sell. Every email is verified before you pay. Every message is drafted in
            proven copywriting styles. Every send is throttled, warmed up, and tracked from
            your own mailboxes.
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
            Free forever. No credit card. 50 leads + 100 verifications on the house.
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
                  { label: "Leads found", value: "1,247", icon: Search, color: "text-[var(--color-primary)]" },
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
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
          Built for the way modern teams actually sell
        </p>
        <div className="mt-8 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {[
            { value: "4 engines", label: "Live lead sources" },
            { value: "6 styles", label: "AI copywriting frameworks" },
            { value: "99.2%", label: "Email verification accuracy" },
            { value: "30 days", label: "Free trial on every paid plan" },
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
   PROBLEM / SOLUTION
   ============================================================ */
function ProblemSolution() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">
            Buying lead lists is a{" "}
            <span className="text-[var(--color-danger)]">bad decision</span>.
            <br />
            We built the opposite.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Most lead tools sell you a stale CSV of 10,000 "verified" emails. By the time
            you send your first campaign, 30% bounce, 20% complain, and your sender
            reputation is dead. Bad Decision fixes every step of that broken pipeline.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* The old way */}
          <div className="card-premium p-8 border-[var(--color-danger)]/30 bg-[var(--color-danger-soft)]/30">
            <h3 className="flex items-center gap-2 text-xl font-bold text-[var(--color-foreground)]">
              <span className="text-2xl">💩</span> The old way
            </h3>
            <ul className="mt-6 space-y-3 text-[var(--color-text-secondary)]">
              {[
                "Buy a stale list of 10,000 emails from a marketplace",
                "Send a blast from a cold domain you just registered",
                "30% bounce rate kills your sender reputation overnight",
                "Gmail flags you as spam — every future email lands in junk",
                "You spend $500 on credits and book 0 meetings",
                "Switch tools, repeat the cycle, blame the next vendor",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-[var(--color-danger)]">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The Bad Decision way */}
          <div className="card-premium p-8 border-[var(--color-primary)]/40 bg-[var(--color-violet-soft)]/30">
            <h3 className="flex items-center gap-2 text-xl font-bold text-[var(--color-foreground)]">
              <CheckCircle2 className="h-6 w-6 text-[var(--color-primary)]" /> The Bad Decision way
            </h3>
            <ul className="mt-6 space-y-3 text-[var(--color-text-secondary)]">
              {[
                "Pull fresh leads straight from the live internet — no stale lists",
                "Verify every email with MyEmailVerifier-grade SMTP checks before you pay",
                "Draft each message in Dan Kennedy / Donald Miller / Gary Halbert style",
                "Send from your own warmed-up mailboxes (Gmail, Outlook, custom SMTP)",
                "Throttle, rotate, and pause automatically to protect reputation",
                "Track opens, clicks, replies — break sequences when someone responds",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--color-primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
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
        "Find local businesses and professionals by industry, location, and radius. Pulls from Google Maps, OSM, Yelp Fusion, and direct website scraping for emails, phones, and socials.",
      examples: ["Real estate agents in Lagos", "Dentists in Brooklyn", "Coaches in Austin"],
      available: true,
    },
    {
      name: "Ads Running",
      icon: TrendingUp,
      status: "Coming soon",
      description:
        "Find businesses actively running Google or Meta ads. Identifies the ad platform, ad creative, and landing page — perfect for pitching competing or complementary services.",
      examples: ["Shopify stores running Meta ads", "SaaS companies on Google Ads"],
      available: false,
    },
    {
      name: "Ecommerce",
      icon: Globe,
      status: "Coming soon",
      description:
        "Find online stores by platform (Shopify, WooCommerce, BigCommerce, Magento) and detect their tech stack (Klaviyo, Recharge, Gorgias). 2,000 leads per search on Pro tier.",
      examples: ["Shopify skincare stores", "WooCommerce coffee shops in the US"],
      available: false,
    },
    {
      name: "Web Absent",
      icon: Search,
      status: "Coming soon",
      description:
        "Find businesses that don't have a website yet — only listed on Yelp, Houzz, Etsy, Facebook. The perfect wedge for selling web design, marketing, or branding services.",
      examples: ["Plumbers without websites in Texas", "Caterers in London on Yelp only"],
      available: false,
    },
  ];

  return (
    <section className="bg-[var(--color-surface)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="badge">
            <Search className="h-3.5 w-3.5" />
            4 lead engines
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">
            Four engines. One search bar.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Tell us who you want to reach. We pull fresh leads from the live internet — not
            from a stale database. Each engine is tuned for a specific ICP.
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
                    "{ex}"
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
   HOW IT WORKS
   ============================================================ */
function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "1. Find leads",
      description:
        "Pick an engine, type your query (industry + location + filters), and we scrape the live internet for matching businesses. Each lead comes with company name, website, email, phone, socials, and tech stack.",
    },
    {
      icon: ShieldCheck,
      title: "2. Verify emails",
      description:
        "Every email goes through a 7-layer verification pipeline (syntax → DNS → MX → SMTP → disposable → catch-all → role). You see Valid / Risky / Invalid for each. You only pay for verified emails.",
    },
    {
      icon: Sparkles,
      title: "3. Draft messages",
      description:
        "Pick a copywriting style — Dan Kennedy, Donald Miller, Ray Edwards, David Ogilvy, Jay Abraham, or Gary Halbert. DeepSeek generates a 500-530 character message tailored to each lead. Edit or regenerate.",
    },
    {
      icon: Send,
      title: "4. Send & track",
      description:
        "Connect your mailboxes (Gmail App Password, Outlook, custom SMTP). We warm them up, rotate sends, throttle per provider limits, and pull replies via IMAP. Sequence breaks when someone responds.",
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="badge">
            <Zap className="h-3.5 w-3.5" />
            Four steps
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">
            From zero to first reply in 14 days
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            No setup. No integration. No Zapier glue. Sign up, search, verify, draft, send.
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
   PIPELINE (vertical)
   ============================================================ */
function Pipeline() {
  return (
    <section className="bg-[var(--color-card)] py-20 text-[var(--color-card-foreground)] sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            The full pipeline — one subscription
          </h2>
          <p className="mt-4 text-lg text-[var(--color-card-foreground)]/75">
            Stop paying for Apollo + Hunter + NeverBounce + Instantly + Smartlead. Bad
            Decision replaces all of them.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {[
            { tool: "Apollo / Clay", cost: "$99/mo", replaced: "Lead scraping + enrichment" },
            { tool: "Hunter.io", cost: "$49/mo", replaced: "Email finding" },
            { tool: "NeverBounce / ZeroBounce", cost: "$50/mo", replaced: "Email verification" },
            { tool: "Instantly.ai", cost: "$30-97/mo", replaced: "Cold email sending + warmup" },
            { tool: "Smartlead.ai", cost: "$39-97/mo", replaced: "Same as above (alternative)" },
            { tool: "Total monthly cost", cost: "$228+", replaced: "Bad Decision Growth: $97/mo" },
          ].map((row, i) => (
            <div
              key={row.tool}
              className={`flex flex-col items-start justify-between gap-3 rounded-lg p-4 sm:flex-row sm:items-center ${
                i === 5 ? "bg-[var(--color-primary)] text-white" : "bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`text-sm font-semibold ${
                    i === 5 ? "text-white" : "text-[var(--color-card-foreground)]/90"
                  }`}
                >
                  {row.tool}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`text-sm ${
                    i === 5 ? "text-white/80" : "text-[var(--color-card-foreground)]/60"
                  }`}
                >
                  {row.replaced}
                </span>
                <span
                  className={`text-sm font-bold ${
                    i === 5 ? "text-white" : "text-[var(--color-primary)]"
                  }`}
                >
                  {row.cost}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FEATURES
   ============================================================ */
function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Email verification you can trust",
      description:
        "Multi-provider verification pipeline (MyEmailVerifier, BillionVerify, Reoon, MailboxValidator) with 99.2% accuracy. Catch-all detection, role address filtering, disposable domain blocking. You only pay for verified emails.",
    },
    {
      icon: Sparkles,
      title: "AI copywriting that doesn't sound like AI",
      description:
        "Six proven frameworks: Dan Kennedy, Donald Miller (StoryBrand), Ray Edwards, David Ogilvy, Jay Abraham, Gary Halbert. Strict 500-530 character enforcement so emails look hand-written. Each lead gets a unique draft.",
    },
    {
      icon: Send,
      title: "Mailbox warmup, rotation, and throttle",
      description:
        "Peer-to-peer warmup ramps your mailbox from cold to warm in 7-15 days. Send rotation across multiple mailboxes. Per-provider throttle (Gmail: 50/day, Outlook: 30/day). Automatic pause on bounce streaks.",
    },
    {
      icon: Inbox,
      title: "Unified inbox with reply classification",
      description:
        "Every reply is auto-classified: Interested, Not Interested, OOO, Unsubscribe, Bounce. Sequences break on interest. OOO auto-pauses and resumes. Unsubscribes sync to your suppression list instantly.",
    },
    {
      icon: BarChart3,
      title: "Per-campaign analytics",
      description:
        "Open rate, click rate, reply rate, bounce rate, sentiment breakdown. Funnel view: total → sent → opened → clicked → replied. 30-day trend charts. A/B variant performance (Coming soon).",
    },
    {
      icon: Globe,
      title: "Bring your own API keys (community members)",
      description:
        "Plug in your own Apollo, Hunter, MyEmailVerifier, ScrapingBee, or DeepSeek keys. We use them instead of our pooled infrastructure. You pay $0 in credits for those operations. Available to invited community members only.",
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="badge">
            <Zap className="h-3.5 w-3.5" />
            Built for serious outbound
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">
            Every feature you'd expect from a $300/mo tool
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            We didn't cut corners. This is production-grade cold outreach infrastructure.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="card-premium p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-violet-soft)]">
                <f.icon className="h-5 w-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[var(--color-foreground)]">{f.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PRICING PREVIEW
   ============================================================ */
function PricingPreview() {
  return (
    <section className="bg-[var(--color-surface)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="badge">
            <Sparkles className="h-3.5 w-3.5" />
            Pricing
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">
            One subscription. Every tool you need.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Cancel anytime. 30-day money-back guarantee on first paid subscription.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`card-premium relative p-6 ${
                plan.highlight
                  ? "border-[var(--color-primary)] shadow-lg ring-2 ring-[var(--color-primary)]/20"
                  : ""
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-bold text-[var(--color-foreground)]">{plan.name}</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">{plan.description}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-[var(--color-foreground)]">
                  ${plan.price}
                </span>
                <span className="text-sm text-[var(--color-text-muted)]">/{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-2">
                {plan.features.slice(0, 5).map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-primary)]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.ctaHref}
                className={`mt-6 block w-full text-center text-sm font-semibold ${
                  plan.highlight ? "btn-primary" : "btn-secondary"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/pricing" className="text-sm font-semibold text-[var(--color-primary)] hover:underline">
            Compare all features →
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
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            The short version. See the full FAQ for more.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.slice(0, 6).map((faq) => (
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
            See all FAQs
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
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Stop buying lists.
          <br />
          Start finding buyers.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-card-foreground)]/75">
          Free forever plan. No credit card required. 50 leads + 100 verifications on us.
          Upgrade only when you're ready to send real campaigns.
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
            Talk to sales
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[var(--color-card-foreground)]/60">
          <span className="flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5" /> 7-day refund on first subscription
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" /> Cancel anytime
          </span>
          <span className="flex items-center gap-1.5">
            <MessageSquare className="h-3.5 w-3.5" /> Email + chat support
          </span>
        </div>
      </div>
    </section>
  );
}
