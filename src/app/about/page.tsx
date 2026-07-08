import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Globe, Users, Target, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Why we built Bad Decision",
  description:
    "Bad Decision was born in Lagos, Nigeria, after one too many wasted dollars on stale lead lists. We're building the all-in-one outbound platform we wished existed — for founders in Africa and beyond.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="About"
        title="We got tired of bad decisions"
        subtitle="Bad Decision was born in Lagos, Nigeria, after one too many wasted dollars on stale lead lists. We're building the all-in-one outbound platform we wished existed — for founders in Africa and beyond."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose-legal">
            <h2>The problem we kept hitting</h2>
            <p>
              Every founder we know has the same story. You buy a "verified" lead list from
              a marketplace. You pay for an email verification tool. You pay for a cold
              email sender. You pay for AI to write the messages. Three subscriptions and
              $300 later, you send your first campaign — and 30% of the emails bounce,
              Gmail flags you as spam, and your sender reputation is dead before you've
              booked a single meeting.
            </p>
            <p>
              We lived this. We bought the lists. We paid for the tools. We watched our
              campaigns fail. And we kept making the same bad decision — paying more money
              for the same broken pipeline.
            </p>

            <h2>So we built the opposite</h2>
            <p>
              Bad Decision is the all-in-one platform for outbound sales. Find leads
              straight from the live internet — no stale lists. Verify every email with
              multi-provider SMTP checks before you pay. Draft messages in six proven
              copywriting styles. Send from your own warmed-up mailboxes with full
              deliverability built in. Track every open, click, and reply in one unified
              inbox.
            </p>
            <p>
              We replaced Apollo, Hunter, NeverBounce, Instantly, and Smartlead with one
              subscription. And we priced it for founders — free forever to start, $97/mo
              for everything you actually need.
            </p>

            <h2>Built in Lagos, for the world</h2>
            <p>
              We're a Nigerian company, and we're proud of it. Most cold outreach tools
              are built in Silicon Valley for Silicon Valley pricing — $97/mo per seat,
              USD-only, no African payment methods, no understanding of the African market.
              We're changing that.
            </p>
            <p>
              We accept payments from anywhere in the world. We support Naira pricing for
              Nigerian customers. We built lead engines specifically for emerging-market
              use cases (find businesses without websites, find local professionals by
              radius, find businesses running Meta ads). And we priced the platform so a
              founder in Lagos can afford the same tools as a founder in San Francisco.
            </p>

            <h2>What we believe</h2>
            <div className="not-prose mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                {
                  icon: Target,
                  title: "Leads should be fresh, not stale",
                  body: "A lead list from 6 months ago is garbage. We scrape the live internet on every search — your leads are minutes old, not months.",
                },
                {
                  icon: Users,
                  title: "Founders shouldn't need 5 tools",
                  body: "Find, verify, draft, send, track — one subscription. Stop duct-taping Apollo + Hunter + NeverBounce + Instantly together.",
                },
                {
                  icon: Globe,
                  title: "African founders deserve the same tools",
                  body: "USD pricing locks out 90% of the world. We support local payments, local lead sources, and local use cases.",
                },
                {
                  icon: Heart,
                  title: "Your reputation is yours",
                  body: "We never send from our IPs. Your mailboxes, your domains, your sender reputation. We just orchestrate the sends.",
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
              We're a small, scrappy team based in Lagos. We've been building software for
              African and global markets for years, and we've felt the pain of every tool
              we're replacing. Bad Decision is the product we wished existed when we
              started our own companies.
            </p>
            <p>
              We're hiring. If you're a founder, designer, or engineer who's felt the pain
              of bad lead lists and broken cold outreach tools, we want to talk. Email us
              at <a href="mailto:support@baddecision.app">support@baddecision.app</a>.
            </p>

            <h2>Our commitment</h2>
            <p>
              We will never sell your data. We will never send cold emails from our IPs on
              your behalf. We will never lock you into a contract. We will always offer a
              free tier so founders with zero budget can test the platform. And we will
              always be honest about what works and what doesn't in cold outreach — even
              when it's not flattering to us.
            </p>
            <p>
              If you're tired of making the same bad decisions with your outbound sales,
              we built this for you. Welcome aboard.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
