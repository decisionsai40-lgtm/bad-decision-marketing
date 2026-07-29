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
  Calendar,
  Bot,
  AlertTriangle,
  DollarSign,
  Clock,
  XCircle,
} from "lucide-react";
import { SITE_CONFIG, PRICING_PLANS, FAQS } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CostOfBadOutreach />
      <WhatYouGet />
      <WhatYouAvoid />
      <HowItWorks />
      <SocialProof />
      <PlansPreview />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}

/* ============================================================
   HERO : honest, outcome-focused
   ============================================================ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pb-28 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-4 py-1.5 text-xs font-bold text-gray-700">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            One platform finds, reaches, and books. Five tools gone.
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Every other way of finding customers is a bad decision.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-gray-600 sm:text-xl">
            You are paying five companies to find one customer. Their lists
            bounce, their tools do not talk to each other, and your emails still
            land in spam. Bad Decision is one platform that finds the right
            people, checks every email, writes your messages, sends them across
            email and messaging and phone, and books meetings when people are
            ready. You get more meetings with less work, and you only pay one
            bill.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
              className="btn-primary w-full sm:w-auto"
            >
              Find your first lead
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/how-it-works" className="btn-secondary w-full sm:w-auto">
              See how it works
            </Link>
          </div>
          <p className="mt-4 text-sm font-medium text-gray-500">
            Free forever. No credit card needed. 7-day money-back on paid plans.
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
                  { label: "Leads found this week", value: "1,247", icon: Search },
                  { label: "Verified emails", value: "1,089", icon: ShieldCheck },
                  { label: "Meetings booked", value: "23", icon: Calendar },
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
                  { name: "Glow Skin Co, Brooklyn", status: "Meeting booked", color: "bg-blue-500/20 text-blue-300" },
                  { name: "Zen Coaching, Austin", status: "Called, callback set", color: "bg-white/10 text-gray-300" },
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
   COST OF BAD OUTREACH : the dollars and hours you are losing
   ============================================================ */
function CostOfBadOutreach() {
  const costs = [
    {
      icon: DollarSign,
      title: "$330 to $400 a month, gone",
      body: "A lead database, an email checker, a sending tool, a WhatsApp tool, an AI writer, a scheduler. Five to seven subscriptions that add up to $330, $400, sometimes more. And most of them still do not talk to each other.",
    },
    {
      icon: Clock,
      title: "Hours lost juggling tools",
      body: "You log into one tool to find leads, another to check emails, a third to write messages, a fourth to send, a fifth to track replies. Half your outreach time goes into copy-paste between tabs that should not need to exist.",
    },
    {
      icon: AlertTriangle,
      title: "Bounced emails burn your domain",
      body: "Send to a stale list and 30 percent bounce. Your inbox gets flagged. Your sender reputation drops. The next campaign lands in spam. Every domain you burn is a market you can never email again.",
    },
    {
      icon: XCircle,
      title: "Cold calls without consent risk lawsuits",
      body: "Call someone who never asked to be called, or skip the do-not-call list, and you are one complaint away from a fine. Most dialers do not check. You carry the risk, they collect the per-minute fee.",
    },
  ];

  return (
    <section className="border-b-2 border-gray-200 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-xs font-bold text-red-600">
            <AlertTriangle className="h-3.5 w-3.5" />
            What bad outreach is costing you right now
          </span>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            You are losing money, hours, and domains.
          </h2>
          <p className="mt-4 text-lg font-medium text-gray-600">
            Every other tool will tell you what you could gain. Nobody tells you
            what you are already losing. Here is the honest version.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {costs.map((c) => (
            <div key={c.title} className="card-premium p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-50">
                  <c.icon className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900">
                    {c.title}
                  </h3>
                  <p className="mt-2 font-medium text-gray-600">{c.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   WHAT YOU GET : outcomes, not features
   ============================================================ */
function WhatYouGet() {
  const outcomes = [
    {
      icon: Search,
      title: "Fresh leads in minutes",
      body: "Four search engines pull live businesses off the web, with names, websites, emails, phones, and social links. Not a stale list that bounces half the time, and not a CSV someone scraped six months ago.",
    },
    {
      icon: Sparkles,
      title: "Messages that sound like you wrote them",
      body: "Pick from six proven writing styles. Each lead gets a unique email, social message, and call script that fits their business. Short, personal, and ready to send. No robot copy, no blank page.",
    },
    {
      icon: Send,
      title: "Emails that land in the inbox",
      body: "You send from your own inbox, and we slowly build its trust over 7 to 15 days. We send at the right times, switch between your inboxes, and pull replies into one place. Your email lands where people actually look.",
    },
    {
      icon: Inbox,
      title: "Replies in one place",
      body: "Every reply across every inbox shows up in one view, sorted by who is interested, who is out of office, and who asked to leave. You spend your time talking to people who said yes, not chasing a scattered inbox.",
    },
    {
      icon: Calendar,
      title: "Meetings booked for you",
      body: "When someone is ready to talk, they pick a time on your booking page. The moment they book, every email and message for that lead pauses on its own. No more back-and-forth, no more emailing someone who already said yes.",
    },
    {
      icon: Phone,
      title: "Calls made for you",
      body: "An AI voice engine picks up the phone, has a real conversation, books the meeting on the call, schedules a callback when the time is wrong, and stops calling the moment someone says no. You get a transcript and a recording of every call.",
    },
    {
      icon: MessageSquare,
      title: "Reach people on WhatsApp and text",
      body: "Email is the start. Add WhatsApp and SMS campaigns on the channels your leads actually check. We skip landlines and numbers that are not on WhatsApp, so you never pay for a message that cannot be read.",
    },
    {
      icon: Bot,
      title: "Control it all from your AI assistant",
      body: "Connect ChatGPT, Claude, or Gemini to your workspace. Ask your AI to find leads, check emails, launch a campaign, book a meeting, or pull your numbers. One API key, three assistants, and a full audit log of every call they make.",
    },
    {
      icon: BarChart3,
      title: "Numbers that tell the truth",
      body: "Open rate, reply rate, bounce rate, bookings, calls answered, calls booked. Every send and every reply is tracked so you know what is working and what to rewrite. No vanity metrics, just the numbers that move pipeline.",
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
            These are outcomes, not a feature checklist. Each one is something
            that saves you money, saves you time, or books you a meeting.
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
   WHAT YOU AVOID : pains prevented
   ============================================================ */
function WhatYouAvoid() {
  const avoided = [
    "Paying for five tools that do not talk to each other.",
    "Sending emails that bounce and ruin your sender reputation.",
    "Calling people who never asked to be called.",
    "Messaging numbers that are not on WhatsApp or are landlines.",
    "Continuing to email someone who already booked a meeting with you.",
    "Guessing what things cost. You see the price before every action.",
    "Staring at a blank page trying to write the first email.",
    "Losing track of which lead is in which step of the follow-up.",
    "Surprise charges at the end of the month.",
    "Lock-in to a yearly contract you cannot leave.",
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What you avoid
          </h2>
          <p className="mt-4 text-lg font-medium text-gray-600">
            Every item below is a pain the other tools quietly drop in your lap.
            We built Bad Decision to make sure none of them happen to you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {avoided.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border-2 border-gray-200 bg-white p-5"
            >
              <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
              <span className="font-medium text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   HOW IT WORKS : simple 4-step (find, check, reach, book)
   ============================================================ */
function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "1. Find",
      description:
        "Pick a search engine, type who you want to reach, and we pull fresh businesses off the live web with full contact info. No stale lists, no scraping by hand.",
    },
    {
      icon: ShieldCheck,
      title: "2. Check",
      description:
        "Every email goes through a careful check. You see which are safe, which are risky, and which will bounce. You only send to the safe ones, so your inbox stays trusted.",
    },
    {
      icon: Send,
      title: "3. Reach",
      description:
        "We write a personal message in your chosen style, then send it from your own inbox at the right time. Add WhatsApp, text, or an AI voice call to reach people on more channels.",
    },
    {
      icon: Calendar,
      title: "4. Book",
      description:
        "When someone is ready, they pick a time on your booking page. The moment they book, every other message for that lead pauses. You show up to the meeting, not to a pile of follow-ups.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Four steps. One subscription.
          </h2>
          <p className="mt-4 text-lg font-medium text-gray-600">
            Find the right people, check their emails, reach out across the
            channels they use, and book the meeting. Everything happens inside
            one dashboard, with no extra tools and no guessing.
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
   SOCIAL PROOF : atypical stats
   ============================================================ */
function SocialProof() {
  return (
    <section className="border-y-2 border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {[
            { value: "4 engines", label: "Ways to find buyers" },
            { value: "6 styles", label: "Proven message frameworks" },
            { value: "1 subscription", label: "Replaces five tools" },
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
   PLANS PREVIEW : plan names only, link to pricing
   ============================================================ */
function PlansPreview() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            One subscription. Everything included.
          </h2>
          <p className="mt-4 text-lg font-medium text-gray-600">
            Start free and upgrade only when you are ready to send real
            campaigns. Cancel anytime, and add-ons can be cancelled on their own
            without touching your base plan.
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
   FAQ PREVIEW : 4 key questions
   ============================================================ */
function FAQPreview() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Questions, answered straight
          </h2>
          <p className="mt-4 text-lg font-medium text-gray-600">
            Here are the four questions we hear most. See the full page for the
            rest, with no soft-pedalling.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.slice(0, 4).map((faq) => (
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
   FINAL CTA : outcome-focused
   ============================================================ */
function FinalCTA() {
  return (
    <section className="bg-gray-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          Stop making bad decisions
          <br />
          with how you find customers.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-gray-300">
          Start free, find your first lead today, and book a meeting this week.
          If it does not work in the first 7 days, you get your money back. No
          questions, no friction, no retention scripts.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-gray-900 hover:bg-gray-100 sm:w-auto"
          >
            Find your first lead
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
            <Mail className="h-3.5 w-3.5" /> 7-day money-back
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
