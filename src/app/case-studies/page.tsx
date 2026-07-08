import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Case studies — How founders use Bad Decision",
  description:
    "Real-world use cases: how a Nigerian real estate agency booked 12 meetings in 30 days, how a US SaaS founder replaced $300/mo in tooling, and how a marketing agency scaled to 50,000 sends per month.",
  alternates: { canonical: "/case-studies" },
};

const CASES = [
  {
    company: "Lagos Realty Co.",
    location: "Lagos, Nigeria",
    industry: "Real estate",
    headline: "Booked 12 meetings in 30 days using the Companies & Professionals engine",
    quote:
      "We were paying $80/mo for a Nigerian lead list that bounced 40% of the time. With Bad Decision, we pulled 800 verified agents in Lagos in one afternoon. 12 of them booked a call. Three signed. ROI in week one.",
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
    headline: "Replaced $300/mo in tooling with one Bad Decision Growth subscription",
    quote:
      "I was paying for Apollo ($99), Hunter ($49), NeverBounce ($50), and Instantly ($97) — that's $295/mo before I'd sent a single email. Bad Decision does all four jobs for $97. The AI drafts alone are worth it — I picked Dan Kennedy style and my reply rate jumped from 3% to 8%.",
    author: "Marcus T.",
    role: "Founder, Glow Skin Co.",
    stats: [
      { label: "Tools replaced", value: "4" },
      { label: "Monthly savings", value: "$198" },
      { label: "Reply rate", value: "8.4%" },
      { label: "Open rate", value: "62%" },
    ],
  },
  {
    company: "Zenith Agency",
    location: "Austin, TX",
    industry: "Marketing agency",
    headline: "Scaled to 50,000 sends per month across 30 client mailboxes",
    quote:
      "We manage cold outreach for 12 clients. Before Bad Decision, we had 12 separate Instantly workspaces and a spreadsheet to track them. Now everything's in one workspace, we plug in each client's mailboxes, and the warmup engine keeps every domain healthy. Our churn dropped to zero.",
    author: "Priya K.",
    role: "Operations Lead, Zenith Agency",
    stats: [
      { label: "Client campaigns", value: "12" },
      { label: "Mailboxes managed", value: "30" },
      { label: "Monthly sends", value: "50K" },
      { label: "Client churn", value: "0%" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        badge="Case studies"
        title="Founders using Bad Decision to close deals"
        subtitle="Real numbers from real users. Not paid testimonials — these are people who switched from Instantly, Smartlead, Apollo, and Hunter and never looked back."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {CASES.map((c) => (
              <div key={c.company} className="card-premium overflow-hidden">
                <div className="bg-[var(--color-card)] p-8 text-[var(--color-card-foreground)]">
                  <div className="flex items-start gap-4">
                    <Quote className="h-8 w-8 flex-shrink-0 text-[var(--color-primary)]" />
                    <div>
                      <h2 className="text-2xl font-bold">{c.headline}</h2>
                      <p className="mt-1 text-sm text-[var(--color-card-foreground)]/70">
                        {c.company} · {c.location} · {c.industry}
                      </p>
                    </div>
                  </div>
                  <blockquote className="mt-6 text-lg leading-relaxed text-[var(--color-card-foreground)]/90">
                    "{c.quote}"
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
              4.8/5 average from 200+ active users
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
