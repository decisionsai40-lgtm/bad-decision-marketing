import type { Metadata } from "next";
import Link from "next/link";
import { Search, ShieldCheck, Sparkles, Send, Inbox, BarChart3, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "How it works — From zero to first reply in 14 days",
  description:
    "The Bad Decision pipeline in 4 steps: find leads with our 4 engines, verify every email with multi-provider SMTP checks, draft messages in 6 copywriting styles, send from your own warmed-up mailboxes with full tracking.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        badge="How it works"
        title="From zero to first reply in 14 days"
        subtitle="No setup. No integration. No Zapier glue. Sign up, search, verify, draft, send. The full pipeline runs inside one dashboard."
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
              description="Pick an engine, type your query, and we scrape the live internet for matching businesses. Every lead comes with company name, website, email, phone, social links, and tech stack."
              bullets={[
                "4 engines: Companies & Professionals (live), Ads Running, Ecommerce, Web Absent",
                "Industry-specific query generation (e.g. 'coaches' triggers LinkedIn search, 'real estate' triggers Zillow)",
                "Up to 2,000 leads per search on Pro tier (Ecommerce engine)",
                "Auto-deduplication against your previous searches and saved collections",
                "30-day query cache — if you search the same query twice, the second search is free",
              ]}
              example={{
                query: '"Shopify skincare stores in the US with Klaviyo installed"',
                result: "Returns 1,247 verified leads with email, social, and tech stack",
              }}
            />

            {/* Step 2 */}
            <StepBlock
              number="02"
              icon={ShieldCheck}
              title="Verify emails"
              description="Every email goes through a 7-layer verification pipeline. You only pay for verified emails. Risky catch-all addresses are flagged, not silently included."
              bullets={[
                "Syntax check (RFC-compliant regex)",
                "DNS A + MX record validation (dnspython)",
                "SMTP mailbox check via MyEmailVerifier / BillionVerify / Reoon / MailboxValidator (multi-provider router with fallback)",
                "Disposable email domain blocking (10,000+ known domains)",
                "Catch-all detection (tests random local part against domain)",
                "Role address detection (info@, sales@, support@, etc.)",
                "Per-lead score: Valid / Risky / Invalid — you decide whether to include Risky in campaigns",
              ]}
              example={{
                query: "Verify 1,247 emails from the previous step",
                result: "1,089 Valid, 87 Risky, 71 Invalid. Cost: 1,089 credits (not 1,247).",
              }}
            />

            {/* Step 3 */}
            <StepBlock
              number="03"
              icon={Sparkles}
              title="Draft messages"
              description="Pick a copywriting style. We generate a 500-530 character message tailored to each lead. Strict length enforcement so emails look hand-written, not AI-generated."
              bullets={[
                "6 proven frameworks: Dan Kennedy, Donald Miller (StoryBrand), Ray Edwards, David Ogilvy, Jay Abraham, Gary Halbert",
                "Per-lead personalization (company name, industry, tech stack, location woven in)",
                "Strict 500-530 character limit — too short looks lazy, too long gets truncated",
                "Generate single-lead or batch-generate for entire campaigns",
                "Edit any draft inline. Regenerate with one click if you don't like the angle.",
                "Output: email subject + email body + social DM + cold call script (4 variants per lead)",
              ]}
              example={{
                query: "Generate Dan Kennedy-style outreach for 1,089 verified leads",
                result: "1,089 personalized emails in ~3 minutes. Cost: 2,178 credits.",
              }}
            />

            {/* Step 4 */}
            <StepBlock
              number="04"
              icon={Send}
              title="Send & track"
              description="Connect your mailboxes (Gmail App Password, Outlook, Hostinger, any custom SMTP/IMAP). We warm them up, rotate sends, throttle per provider limits, and pull replies via IMAP. Sequences break when someone responds."
              bullets={[
                "Peer-to-peer mailbox warmup (7-15 days from cold to warm)",
                "Send rotation across multiple mailboxes — humanized random subset picker",
                "Per-provider throttle: Gmail 50/day, Outlook 30/day, custom SMTP configurable",
                "Per-campaign sending windows (9am-5pm in lead's timezone, exclude weekends)",
                "Reply ingestion via IMAP polling (every 5 min) — Gmail Pub/Sub coming soon",
                "Reply classification: Interested / Not Interested / OOO / Unsubscribe / Bounce",
                "Sequence breaker: any reply auto-cancels queued follow-ups for that lead",
                "Suppression list: bounces and unsubscribes never get emailed again",
              ]}
              example={{
                query: "Start a 3-step campaign to 1,000 leads from 5 warmed mailboxes",
                result: "Day 0: 50 sends. Day 3: 50 follow-ups. Day 7: 50 final touches. Replies flow into your unified inbox.",
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
              <span className="badge bg-white/10 text-white">
                <BarChart3 className="h-3.5 w-3.5" />
                Analytics
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Every send, every reply, every bounce — tracked
              </h2>
              <p className="mt-4 text-lg text-[var(--color-card-foreground)]/75">
                Per-campaign dashboards show you exactly what's working. Funnel view,
                sentiment breakdown, 30-day trends. No more guessing if your campaign is
                healthy.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Funnel: Total → Sent → Opened → Clicked → Replied",
                  "Rate cards: Open rate, click rate, reply rate, bounce rate",
                  "Sentiment breakdown: Interested / Not Interested / Neutral / OOO",
                  "Per-mailbox health: warmup status, daily cap progress, failure streak",
                  "Lead status breakdown: pending / step-1 sent / replied / bounced / unsubscribed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Inbox className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--color-primary)]" />
                    <span className="text-[var(--color-card-foreground)]/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white/5 p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Open rate", value: "62%", color: "text-[var(--color-primary)]" },
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
                          className="h-full bg-[var(--color-primary)]"
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
            Free forever plan. No credit card. 50 leads + 100 verifications + 50 AI drafts included.
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
          <div className="text-sm font-medium text-[var(--color-foreground)]">Query</div>
          <div className="mt-1 text-sm text-[var(--color-text-secondary)]">{example.query}</div>
        </div>
        <div className="mt-3 rounded-lg bg-[var(--color-violet-soft)] p-4">
          <div className="text-sm font-medium text-[var(--color-foreground)]">Result</div>
          <div className="mt-1 text-sm text-[var(--color-text-secondary)]">{example.result}</div>
        </div>
      </div>
    </div>
  );
}
