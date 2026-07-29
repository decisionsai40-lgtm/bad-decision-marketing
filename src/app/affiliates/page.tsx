import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { DollarSign, Users, ShieldCheck, ArrowRight } from "lucide-react";

export default function AffiliatesPage() {
  return (
    <>
      <PageHeader
        title="Earn 20 percent recurring commission"
        subtitle="Refer Bad Decision, get paid every month your referrals stay. No minimums, paid monthly."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: DollarSign, title: "20 percent recurring", body: "Earn every month your referral stays subscribed. Not one-time, not capped." },
              { icon: Users, title: "60-day cookie", body: "If a user signs up within 60 days of clicking your link, you get the credit." },
              { icon: ShieldCheck, title: "No minimums", body: "Sign up free. No minimum payout to start. No sneaky terms." },
            ].map((f) => (
              <div key={f.title} className="card-premium p-6 text-center">
                <f.icon className="mx-auto h-8 w-8 text-gray-900" />
                <h3 className="mt-3 font-extrabold text-gray-900">{f.title}</h3>
                <p className="mt-1 text-sm font-medium text-gray-600">{f.body}</p>
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

      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">How it works</h2>
          <div className="mt-10 space-y-6">
            {[
              { step: "1", title: "Sign up", desc: "Create a free affiliate account and get your unique link." },
              { step: "2", title: "Share your link", desc: "Post it on Twitter, LinkedIn, your newsletter, or anywhere your audience is." },
              { step: "3", title: "Get paid monthly", desc: "Earn 20 percent recurring every month your referral stays subscribed." },
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

      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Ready to start earning?</h2>
          <p className="mt-4 text-lg font-medium text-gray-600">
            Free to sign up. No minimums. Paid monthly.
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
