import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { DollarSign, TrendingUp, Users, Copy, Check, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Affiliates — Earn recurring commissions with Bad Decision",
  description:
    "Promote Bad Decision and earn 20% recurring commissions. Users you refer get 20% off their first 3 months. Everyone wins.",
  alternates: { canonical: "/affiliates" },
};

export default function AffiliatesPage() {
  return (
    <>
      <PageHeader
        title="Earn while you promote"
        subtitle="Join the Bad Decision affiliate program. Earn 20% recurring commissions every month your referrals stay subscribed. Users get 20% off — everyone wins."
      />

      {/* Commission structure */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { plan: "Starter & Growth", rate: "20%", desc: "$7.80/mo on Starter, $19.40/mo on Growth. Recurring every month.", highlight: true },
              { plan: "Pro", rate: "15%", desc: "$44.55/mo per Pro referral. Recurring every month.", highlight: false },
              { plan: "Enterprise", rate: "10%", desc: "$99.70/mo per Enterprise referral. Recurring every month.", highlight: false },
            ].map((tier) => (
              <div key={tier.plan} className={`card-premium p-8 text-center ${tier.highlight ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20" : ""}`}>
                <p className="text-sm text-[var(--color-text-muted)]">{tier.plan}</p>
                <p className="text-4xl font-bold text-[var(--color-primary)] mt-2">{tier.rate}</p>
                <p className="text-sm text-[var(--color-text-secondary)] mt-3">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[var(--color-surface)] py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold">How it works</h2>
          <div className="mt-12 space-y-8">
            {[
              { step: "1", title: "Sign up as an affiliate", desc: "Create a free affiliate account at affiliate.baddecision.app. Get your unique referral link instantly." },
              { step: "2", title: "Share your link", desc: "Post it on Twitter, LinkedIn, your newsletter, your YouTube channel, or anywhere your audience is." },
              { step: "3", title: "Users get 20% off", desc: "Anyone who signs up via your link gets 20% off their first 3 months. That is a strong incentive to click." },
              { step: "4", title: "You earn every month", desc: "When a referred user subscribes, you earn a commission. It is recurring — you get paid every month they stay subscribed." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white font-bold">{item.step}</div>
                <div>
                  <h3 className="font-bold text-[var(--color-foreground)]">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: DollarSign, title: "Recurring commissions", desc: "Earn every month your referral stays subscribed. Not one-time." },
              { icon: TrendingUp, title: "60-day cookie", desc: "If a user signs up within 60 days of clicking your link, you get credit." },
              { icon: Users, title: "Users get 20% off", desc: "Your audience gets a discount. You get a commission. Everyone wins." },
              { icon: Copy, title: "Marketing assets", desc: "Banners, email copy, and social media templates provided free." },
            ].map((f) => (
              <div key={f.title} className="card-premium p-6">
                <f.icon className="h-8 w-8 text-[var(--color-primary)]" />
                <h3 className="mt-3 font-bold">{f.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-surface)] py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold">Affiliate FAQ</h2>
          <div className="mt-12 space-y-6">
            {[
              { q: "When do I get paid?", a: "Commissions are held for 30 days (chargeback protection), then become available. Minimum payout is $50. Payouts are processed via Dodo Payments." },
              { q: "Can I see who signed up via my link?", a: "No. For privacy reasons, you only see aggregate stats: total clicks, signups, and conversions. You never see individual user data." },
              { q: "Is the commission recurring?", a: "Yes. You earn every month the referred user stays subscribed. If they cancel, your commission stops for that user." },
              { q: "Can I refer myself?", a: "No. Self-referrals are blocked. IP and device fingerprinting prevent fraud." },
              { q: "Do I need to be a Bad Decision customer to be an affiliate?", a: "No. Affiliate accounts are separate from user accounts. You can promote Bad Decision without using it yourself." },
            ].map((faq) => (
              <details key={faq.q} className="card-premium group cursor-pointer p-6 [&_summary]:list-none">
                <summary className="flex items-center justify-between">
                  <span className="font-semibold">{faq.q}</span>
                  <span className="ml-4 text-[var(--color-primary)] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[var(--color-text-secondary)]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Ready to start earning?</h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Join the Bad Decision affiliate program. Free to sign up. Start earning in minutes.
          </p>
          <Link href="https://affiliate.baddecision.app/sign-in" className="btn-primary mt-8 inline-flex">
            Become an affiliate
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
