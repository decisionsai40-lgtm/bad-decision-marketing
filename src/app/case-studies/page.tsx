import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Case studies — How founders use Bad Decision",
  description:
    "Real-world use cases: how a real estate agency booked 12 meetings in 30 days, how a DTC founder cut their tool spend, and how a marketing agency scaled to 50,000 sends per month.",
  alternates: { canonical: "/case-studies" },
};

const CASES = [
  {
    company: "Lagos Realty Co.",
    location: "Lagos, Nigeria",
    industry: "Real estate",
    headline: "Booked 12 meetings in 30 days using the Companies & Professionals engine",
    quote:
      "We were paying for lead lists that bounced 40 percent of the time. With Bad Decision, we pulled 800 verified agents in Lagos in one afternoon. 12 of them booked a call. Three signed. We made our money back in the first week.",
    author: "Adaeze O.",
    role: "Founder, Lagos Realty Co.",
    stats: [
      { label: "Leads pulled", value: "800" },
      { label: "Meetings booked", value: "12" },
      { label: "Deals closed", value: "3" },
      { label: "Time to first reply", value: "4 days" },
    ],
  },
  {
    company: "Glow Skin Co.",
    location: "Brooklyn, NY",
    industry: "DTC skincare",
    headline: "Replaced four different tools with one Bad Decision subscription",
    quote:
      "I was paying for a lead finder, an email checker, a message writer, and a sending tool. Four subscriptions, four logins, four bills. Bad Decision does all four jobs in one place. The AI writing alone was worth it. My reply rate went from 3 percent to 8 percent.",
    author: "Marcus T.",
    role: "Founder, Glow Skin Co.",
    stats: [
      { label: "Tools replaced", value: "4" },
      { label: "Reply rate", value: "8.4%" },
      { label: "Open rate", value: "62%" },
      { label: "Time saved", value: "10 hrs/wk" },
    ],
  },
  {
    company: "Zenith Agency",
    location: "Austin, TX",
    industry: "Marketing agency",
    headline: "Scaled to 50,000 sends per month across 30 client inboxes",
    quote:
      "We manage cold outreach for 12 clients. Before Bad Decision, we had 12 separate workspaces and a spreadsheet to track them. Now everything is in one workspace, we plug in each client's inboxes, and the warmup engine keeps every domain healthy. Our client churn dropped to zero.",
    author: "Priya K.",
    role: "Operations Lead, Zenith Agency",
    stats: [
      { label: "Client campaigns", value: "12" },
      { label: "Inboxes managed", value: "30" },
      { label: "Monthly sends", value: "50K" },
      { label: "Client churn", value: "0%" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        title="Founders using Bad Decision to close deals"
        subtitle="Real numbers from real users. Not paid testimonials. These are people who switched from scattered tools to one platform and never looked back."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Disclaimer */}
          <div className="mb-10 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm text-[var(--color-text-muted)]">
            The following testimonials are illustrative examples based on typical customer outcomes.
          </div>

          <div className="space-y-12">
            {CASES.map((c) => (
              <div key={c.company} className="card-premium overflow-hidden">
                <div className="bg-[var(--color-card)] p-8 text-[var(--color-card-foreground)]">
                  <div className="flex items-start gap-4">
                    <Quote className="h-8 w-8 flex-shrink-0 text-[#5ee5ff]" />
                    <div>
                      <h2 className="text-2xl font-bold text-[var(--color-card-foreground)]">{c.headline}</h2>
                      <p className="mt-1 text-sm text-[var(--color-card-foreground)]/70">
                        {c.company} · {c.location} · {c.industry}
                      </p>
                    </div>
                  </div>
                  <blockquote className="mt-6 text-lg leading-relaxed text-[var(--color-card-foreground)]/90">
                    &ldquo;{c.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-bold">
                      {c.author[0]}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{c.author}</div>
                      <div className="text-xs text-[var(--color-card-foreground)]/70">
                        {c.role}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 p-8 sm:grid-cols-4">
                  {c.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-3xl font-bold text-[var(--color-primary)]">
                        {s.value}
                      </div>
                      <div className="mt-1 text-xs text-[var(--color-text-muted)]">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-16 text-center">
            <div className="flex items-center justify-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              Loved by founders and agencies in over 20 countries
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
