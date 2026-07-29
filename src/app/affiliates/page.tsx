import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { DollarSign, TrendingUp, Users, Copy, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

export default function AffiliatesPage() {
  return (
    <>
      <PageHeader
        title="Get paid every month your referrals stay"
        subtitle="Join the Bad Decision affiliate program. Earn recurring commissions every month your referrals stay subscribed. They get 20 percent off their first 3 months, so everyone wins. No minimums to join, no sneaky terms."
      />

      {/* Commission structure */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { plan: "Starter and Growth", rate: "20%", desc: "$7.80 per month on Starter, $19.40 per month on Growth. Recurring every month they stay subscribed.", highlight: true },
              { plan: "Pro", rate: "15%", desc: "$44.55 per month per Pro referral. Recurring every month they stay subscribed.", highlight: false },
              { plan: "Enterprise", rate: "10%", desc: "$99.70 per month per Enterprise referral. Recurring every month they stay subscribed.", highlight: false },
            ].map((tier) => (
              <div key={tier.plan} className={`card-premium p-8 text-center ${tier.highlight ? "border-gray-900 shadow-xl" : ""}`}>
                <p className="text-sm font-bold text-gray-500">{tier.plan}</p>
                <p className="mt-2 text-4xl font-extrabold text-gray-900">{tier.rate}</p>
                <p className="mt-3 text-sm font-medium text-gray-600">{tier.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="https://affiliate.baddecision.app/sign-in" className="btn-primary inline-flex">
              Start earning today
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What you get / avoid */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">What you get</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { icon: DollarSign, title: "Recurring commission", body: "Earn every month your referral stays subscribed. Not one-time, not capped." },
                  { icon: TrendingUp, title: "60-day cookie", body: "If a user signs up within 60 days of clicking your link, you get the credit." },
                  { icon: Users, title: "They get 20 percent off", body: "Your audience gets a discount on their first 3 months. A real reason to click." },
                  { icon: Copy, title: "Ready-made assets", body: "Banners, email copy, and social templates provided free. No design work needed." },
                  { icon: ShieldCheck, title: "Transparent dashboard", body: "See clicks, signups, and conversions in real time. No black-box payouts." },
                  { icon: Heart, title: "A product you can stand behind", body: "We honor our 7-day money-back promise. Your referrals are in good hands." },
                ].map((f) => (
                  <div key={f.title} className="card-premium p-5">
                    <f.icon className="h-7 w-7 text-gray-900" />
                    <h3 className="mt-2 font-extrabold text-gray-900">{f.title}</h3>
                    <p className="mt-1 text-sm font-medium text-gray-600">{f.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">What you avoid</h2>
              <div className="mt-6 space-y-3">
                {[
                  "No minimums to join. Sign up free and start sharing your link today.",
                  "No sneaky terms. The cookie is 60 days, the commission is recurring, the payout is real.",
                  "No need to be a Bad Decision customer. Your affiliate account is separate.",
                  "No fighting for attribution. The dashboard shows every click, signup, and conversion.",
                  "No cap on how many people you can refer. Refer one, refer a thousand.",
                  "No clawbacks after the first 30 days. Once a commission is yours, it is yours.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border-2 border-gray-200 bg-white p-4">
                    <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">How it works</h2>
          <div className="mt-12 space-y-8">
            {[
              { step: "1", title: "Sign up as an affiliate", desc: "Create a free affiliate account at affiliate.baddecision.app. Get your unique referral link instantly." },
              { step: "2", title: "Share your link", desc: "Post it on Twitter, LinkedIn, your newsletter, your YouTube channel, or anywhere your audience is." },
              { step: "3", title: "Your audience gets 20 percent off", desc: "Anyone who signs up via your link gets 20 percent off their first 3 months. That is a strong reason to click." },
              { step: "4", title: "You earn every month", desc: "When a referred user subscribes, you earn a commission. It is recurring, so you get paid every month they stay subscribed." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-extrabold text-white">{item.step}</div>
                <div>
                  <h3 className="font-extrabold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Affiliate questions</h2>
          <div className="mt-12 space-y-6">
            {[
              { q: "When do I get paid?", a: "Commissions are held for 30 days as chargeback protection, then become available. Minimum payout is $50. Payouts are sent directly to your bank account." },
              { q: "Can I see who signed up via my link?", a: "No. For privacy reasons, you only see aggregate stats: total clicks, signups, and conversions. You never see individual user data." },
              { q: "Is the commission recurring?", a: "Yes. You earn every month the referred user stays subscribed. If they cancel, your commission stops for that user." },
              { q: "Can I refer myself?", a: "No. Self-referrals are blocked to keep the program fair for everyone." },
              { q: "Do I need to be a Bad Decision customer to be an affiliate?", a: "No. Affiliate accounts are separate from user accounts. You can promote Bad Decision without using it yourself." },
            ].map((faq) => (
              <details key={faq.q} className="card-premium group cursor-pointer p-6 [&_summary]:list-none">
                <summary className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">{faq.q}</span>
                  <span className="ml-4 font-bold text-gray-900 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 font-medium text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Ready to start earning?</h2>
          <p className="mt-4 text-lg font-medium text-gray-600">
            Join the Bad Decision affiliate program. Free to sign up. Start
            earning in minutes, with no minimums and no sneaky terms.
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
