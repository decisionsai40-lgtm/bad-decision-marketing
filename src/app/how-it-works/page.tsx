import type { Metadata } from "next";
import Link from "next/link";
import { Search, ShieldCheck, Sparkles, Send, Inbox, BarChart3, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "How it works — From zero to first reply in 14 days",
  description:
    "The Bad Decision pipeline in 4 steps: find leads, check every email, write messages in 6 styles, send from your own inbox with warmup and tracking. See the full walkthrough with examples.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="From zero to first reply in 14 days"
        subtitle="No setup. No extra tools. Sign up, search, check, write, send. The full pipeline runs inside one dashboard."
      />

      {/* The 4 steps in detail */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Step 1 */}
            <StepBlock
              number="01"
              icon={Search}
              title="Find leads"
              description="Pick an engine, type who you want to reach, and we search the live internet. Every lead comes with company name, website, email, phone, and social links."
              bullets={[
                "Four engines: Companies & Professionals (live now), plus Ads Running, Ecommerce, and Web Absent coming soon",
                "Smart search that knows where to look for each type of business",
                "Up to 2,000 leads per search on the Pro plan",
                "Automatic deduplication against your past searches",
                "30-day memory: if you search the same thing twice, the second search is free",
              ]}
              example={{
                query: '"Skincare stores in the US using a known ecommerce platform"',
                result: "Returns 1,247 leads with email, social links, and tech stack details",
              }}
            />

            {/* Step 2 */}
            <StepBlock
              number="02"
              icon={ShieldCheck}
              title="Check emails"
              description="Every email goes through a deep check. You only pay for the good ones. Risky emails are flagged, not silently included."
              bullets={[
                "Format check to catch typos and fake addresses",
                "Domain and mail server check to make sure the email can receive mail",
                "Live mailbox check to confirm the address is real and active",
                "Disposable email blocking (we know which domains are throwaway)",
                "Catch-all detection (some servers say yes to everything, we catch that)",
                "Role address detection (info@, sales@, support@, etc.)",
                "Clear score for each email: Safe, Risky, or Will Bounce",
              ]}
              example={{
                query: "Check 1,247 emails from the previous step",
                result: "1,089 Safe, 87 Risky, 71 Will Bounce. You only pay for the 1,089 safe ones.",
              }}
            />

            {/* Step 3 */}
            <StepBlock
              number="03"
              icon={Sparkles}
              title="Write messages"
              description="Pick a writing style. We write a short, personal message for each lead. Strict length control so every email looks hand-written, not robot-generated."
              bullets={[
                "Six proven writing styles to choose from",
                "Each lead gets a unique message that fits their business",
                "Strict length control: short enough to look hand-written, long enough to say something",
                "Write one at a time, or write for your whole campaign at once",
                "Edit any message before sending, or click to rewrite",
                "You get four versions per lead: email subject, email body, social message, and call script",
              ]}
              example={{
                query: "Write messages for 1,089 leads using one of our six styles",
                result: "1,089 personal emails ready to send, in about 3 minutes.",
              }}
            />

            {/* Step 4 */}
            <StepBlock
              number="04"
              icon={Send}
              title="Send and track"
              description="Connect your email inbox. We warm it up, send at the right time, and tell you the moment someone replies. Campaigns stop automatically when someone responds."
              bullets={[
                "Peer-to-peer inbox warmup: your inbox goes from cold to warm in 7 to 15 days",
                "Smart send rotation across all your inboxes",
                "Per-inbox throttle: we never send too much from one address",
                "Sending windows: send only during business hours in the lead's timezone",
                "Reply tracking: every reply is pulled into one inbox",
                "Reply sorting: Interested, Not Interested, Out of Office, Unsubscribe, Bounce",
                "Auto-stop: any reply stops the rest of the campaign for that lead",
                "Block list: bounces and unsubscribes are never contacted again",
              ]}
              example={{
                query: "Start a 3-step campaign to 1,000 leads from 5 warmed inboxes",
                result: "Day 1: first emails go out. Day 3: follow-ups. Day 7: final touches. Replies flow into your inbox.",
              }}
            />
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="bg-[var(--color-card)] py-20 text-[var(--color-card-foreground)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Know exactly what is working
              </h2>
              <p className="mt-4 text-lg text-[var(--color-card-foreground)]/75">
                Every send, every reply, every bounce, tracked. You see your open rate,
                reply rate, and bounce rate at a glance. No more guessing if your campaign
                is healthy.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Funnel view: total sent, opened, clicked, replied",
                  "Rate cards: open rate, reply rate, bounce rate",
                  "Reply sorting: interested, not interested, out of office, unsubscribe",
                  "Per-inbox health: warmup status, daily progress, failure alerts",
                  "Lead status: pending, step 1 sent, replied, bounced, unsubscribed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Inbox className="mt-1 h-4 w-4 flex-shrink-0 text-[#5ee5ff]" />
                    <span className="text-[var(--color-card-foreground)]/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white/5 p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Open rate", value: "62%", color: "text-[#5ee5ff]" },
                  { label: "Reply rate", value: "8.4%", color: "text-green-400" },
                  { label: "Bounce rate", value: "0.3%", color: "text-yellow-400" },
                  { label: "Interested", value: "23", color: "text-blue-400" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg bg-white/5 p-4">
                    <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="mt-1 text-xs text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg bg-white/5 p-4">
                <div className="text-sm font-semibold text-white/90">Campaign: Q3 Skincare Outreach</div>
                <div className="mt-3 space-y-2">
                  {[
                    { stage: "Sent", pct: 100 },
                    { stage: "Opened", pct: 62 },
                    { stage: "Replied", pct: 8 },
                    { stage: "Interested", pct: 3 },
                  ].map((s) => (
                    <div key={s.stage}>
                      <div className="flex justify-between text-xs text-white/70">
                        <span>{s.stage}</span>
                        <span>{s.pct}%</span>
                      </div>
                      <div className="mt-1 h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full bg-[#5ee5ff]"
                          style={{ width: `${s.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">
            Ready to try the full pipeline?
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Free forever plan. No credit card. 50 leads, 100 email checks, and 50 message
            drafts included.
          </p>
          <Link
            href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
            className="btn-primary mt-8 inline-flex"
          >
            Get started free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function StepBlock({
  number,
  icon: Icon,
  title,
  description,
  bullets,
  example,
}: {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
  bullets: string[];
  example: { query: string; result: string };
}) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
      <div>
        <div className="flex items-center gap-4">
          <span className="text-5xl font-bold text-[var(--color-border)]">{number}</span>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-violet-soft)]">
            <Icon className="h-6 w-6 text-[var(--color-primary)]" />
          </div>
        </div>
        <h3 className="mt-4 text-2xl font-bold text-[var(--color-foreground)]">{title}</h3>
        <p className="mt-2 text-lg text-[var(--color-text-secondary)]">{description}</p>
        <ul className="mt-6 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-primary)]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="card-premium p-6 lg:mt-12">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
          Example
        </div>
        <div className="mt-2 rounded-lg bg-[var(--color-muted)] p-4">
          <div className="text-sm font-medium text-[var(--color-foreground)]">What you type</div>
          <div className="mt-1 text-sm text-[var(--color-text-secondary)]">{example.query}</div>
        </div>
        <div className="mt-3 rounded-lg bg-[var(--color-violet-soft)] p-4">
          <div className="text-sm font-medium text-[var(--color-foreground)]">What you get</div>
          <div className="mt-1 text-sm text-[var(--color-text-secondary)]">{example.result}</div>
        </div>
      </div>
    </div>
  );
}
