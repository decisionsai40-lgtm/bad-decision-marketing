import { PageHeader } from "@/components/sections/page-header";
import { Star, Quote } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

const CASES = [
  {
    company: "Lagos Realty Co.",
    location: "Lagos, Nigeria",
    industry: "Real estate",
    headline: "Booked 12 meetings in 30 days with the Companies and Professionals engine",
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
    industry: "Online skincare store",
    headline: "Replaced four tools with one subscription",
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
    headline: "Runs outreach for 12 clients from one workspace",
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
  {
    company: "Bright Path Coaching",
    location: "Manchester, UK",
    industry: "Business coaching",
    headline: "Books calls with the AI voice engine while she sleeps",
    quote:
      "I am a solo coach. I cannot afford to cold call all day. I set up an AI voice agent on Bad Decision, gave it my booking page, and let it run during business hours. It books 4 to 6 calls a week for me, and I just show up to the meetings. I should have done this a year ago.",
    author: "Helen B.",
    role: "Founder, Bright Path Coaching",
    stats: [
      { label: "Calls per week", value: "40+" },
      { label: "Meetings booked", value: "5/wk" },
      { label: "Hours saved", value: "20/wk" },
      { label: "Cost vs SDR", value: "-95%" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        title="Stories from people who stopped making bad decisions"
        subtitle="Real numbers from real users who switched from scattered tools to one platform. They are not paid testimonials. They are people who found a better way to reach customers."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {CASES.map((c) => (
              <div key={c.company} className="card-premium overflow-hidden">
                <div className="bg-gray-900 p-8 text-white">
                  <div className="flex items-start gap-4">
                    <Quote className="h-8 w-8 flex-shrink-0 text-white" />
                    <div>
                      <h2 className="text-2xl font-extrabold text-white">{c.headline}</h2>
                      <p className="mt-1 text-sm font-medium text-gray-300">
                        {c.company} &middot; {c.location} &middot; {c.industry}
                      </p>
                    </div>
                  </div>
                  <blockquote className="mt-6 text-lg leading-relaxed text-gray-100">
                    &ldquo;{c.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-extrabold">
                      {c.author[0]}
                    </div>
                    <div>
                      <div className="text-sm font-bold">{c.author}</div>
                      <div className="text-xs font-medium text-gray-300">
                        {c.role}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 p-8 sm:grid-cols-4">
                  {c.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-3xl font-extrabold text-gray-900">
                        {s.value}
                      </div>
                      <div className="mt-1 text-xs font-bold text-gray-500">
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
            <p className="mt-2 text-sm font-medium text-gray-500">
              Used by sales teams, agencies, freelancers, recruiters, and
              coaches in over 20 countries.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900">
              Want to be the next story?
            </h2>
            <p className="mt-2 font-medium text-gray-600">
              Start free, find your first lead today, and tell us how it goes.
            </p>
            <Link
              href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
              className="btn-primary mt-6 inline-flex"
            >
              Find your first lead
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
