import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Globe, Users, Target, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Why we built Bad Decision",
  description:
    "Bad Decision was born after one too many wasted dollars on stale lead lists. We are building the all-in-one outbound platform we wished existed, for founders in any country.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="We got tired of making bad decisions"
        subtitle="Bad Decision was born after one too many wasted dollars on stale lead lists. We are building the all-in-one outbound platform we wished existed, for founders in any country."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose-legal">
            <h2>The problem we kept hitting</h2>
            <p>
              Every founder we know has the same story. You buy a lead list. You pay for an
              email checker. You pay for a sending tool. You pay for AI to write the
              messages. Three or four subscriptions later, you send your first campaign.
              And 30 percent of the emails bounce. Your inbox gets flagged as spam. Your
              sender reputation is dead before you have booked a single meeting.
            </p>
            <p>
              We lived this. We bought the lists. We paid for the tools. We watched our
              campaigns fail. And we kept making the same bad decision: paying more money
              for the same broken pipeline.
            </p>

            <h2>So we built the opposite</h2>
            <p>
              Bad Decision is one platform that does four things. It finds the businesses
              who need what you sell. It checks every email before you send. It writes your
              outreach messages. It sends them from your own warmed-up inboxes with full
              tracking. Everything in one place, for one price.
            </p>
            <p>
              We replaced the pile of scattered tools with one subscription. And we priced
              it for founders: free to start, and a fair monthly price when you are ready to
              send real campaigns.
            </p>

            <h2>Built for the world, not just one country</h2>
            <p>
              Most outreach tools are built in one part of the world and priced for that
              market. They charge in one currency, support one set of payment methods, and
              ignore everyone else. We are changing that.
            </p>
            <p>
              We accept payments from anywhere in the world. We support lead sources that
              work for emerging markets, not just established ones. We built engines that
              find businesses without websites, find local professionals by radius, and find
              businesses already paying for ads. And we priced the platform so a founder in
              any country can afford the same tools as a founder anywhere else.
            </p>

            <h2>What we believe</h2>
            <div className="not-prose mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                {
                  icon: Target,
                  title: "Leads should be fresh, not stale",
                  body: "A lead list from 6 months ago is garbage. We search the live internet on every search. Your leads are minutes old, not months.",
                },
                {
                  icon: Users,
                  title: "Founders should not need five tools",
                  body: "Find, check, write, send, track. One subscription. Stop duct-taping four or five tools together.",
                },
                {
                  icon: Globe,
                  title: "Founders everywhere deserve the same tools",
                  body: "Pricing should work for any country, not just one. We support global payments and lead sources that work everywhere.",
                },
                {
                  icon: Heart,
                  title: "Your reputation is yours",
                  body: "We never send from our servers. Your inboxes, your domains, your sender reputation. We just help you send safely.",
                },
              ].map((v) => (
                <div key={v.title} className="card-premium p-6">
                  <v.icon className="h-8 w-8 text-[var(--color-primary)]" />
                  <h3 className="mt-3 text-lg font-bold text-[var(--color-foreground)]">
                    {v.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{v.body}</p>
                </div>
              ))}
            </div>

            <h2>The team</h2>
            <p>
              We are a small, focused team. We have been building software for years, and we
              have felt the pain of every tool we are replacing. Bad Decision is the product
              we wished existed when we started our own companies.
            </p>

            <h2>Our commitment to you</h2>
            <p>
              We will never sell your data. We will never send emails from our servers on
              your behalf. We will never lock you into a contract. We will always offer a
              free tier so founders with zero budget can test the platform. And we will
              always be honest about what works and what does not in cold outreach, even
              when it is not flattering to us.
            </p>
            <p>
              If you are tired of making bad decisions with your outbound sales, we built
              this for you. Welcome aboard.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
