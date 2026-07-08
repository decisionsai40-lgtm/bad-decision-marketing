import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Guarantee — 7-day money-back, no questions asked",
  description:
    "If you cancel within 7 days of your first paid subscription and haven't sent more than 100 campaign emails, we'll refund 100%. No questions, no friction, no retention scripts.",
  alternates: { canonical: "/guarantee" },
};

export default function GuaranteePage() {
  return (
    <>
      <PageHeader
        badge="Guarantee"
        title="7-day money-back. No questions asked."
        subtitle="We're confident Bad Decision works. But if it doesn't work for you in the first week, you shouldn't pay. Here's our promise in plain English."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="card-premium p-8 text-center">
            <ShieldCheck className="mx-auto h-16 w-16 text-[var(--color-primary)]" />
            <h2 className="mt-4 text-3xl font-bold text-[var(--color-foreground)]">
              The Bad Decision Guarantee
            </h2>
            <p className="mt-3 text-lg text-[var(--color-text-secondary)]">
              If you cancel within 7 days of your first paid subscription and haven't sent
              more than 100 campaign emails, we'll refund 100% — no questions, no friction,
              no retention scripts, no "are you sure?" modals.
            </p>
          </div>

          <div className="mt-12 prose-legal">
            <h2>The fine print (we kept it short)</h2>
            <ul>
              <li>
                <strong>Who qualifies:</strong> Any new paid subscriber on Starter, Growth,
                or Pro plans.
              </li>
              <li>
                <strong>Time window:</strong> Within 7 calendar days of your first
                subscription charge. The clock starts the moment your payment is processed.
              </li>
              <li>
                <strong>Usage cap:</strong> You must have sent fewer than 100 campaign
                emails through the platform. (If you've sent more, you've clearly used the
                product — we'll still cancel your subscription, but no refund.)
              </li>
              <li>
                <strong>How to claim:</strong> Email{" "}
                <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a>{" "}
                with the subject "Refund request" and your account email. We process
                refunds within 5 business days.
              </li>
              <li>
                <strong>What gets refunded:</strong> Your first subscription charge, in
                full. Credit top-up purchases are non-refundable once consumed (see our{" "}
                <Link href="/refund">refund policy</Link> for details).
              </li>
              <li>
                <strong>What happens to your account:</strong> Your subscription cancels
                immediately, your workspace downgrades to the Free tier, and your data
                stays accessible for 30 days in case you change your mind.
              </li>
            </ul>

            <h2>Why we offer this</h2>
            <p>
              We've all bought software that promised the world and delivered nothing. The
              only way to know if Bad Decision works for your use case is to try it with
              real leads and real campaigns. If it doesn't work, we don't deserve your
              money.
            </p>
            <p>
              The 100-email cap is the only limit. We need it because every send costs us
              money (SMTP, IMAP, verification, warmup). But 100 emails is enough to know if
              the platform fits your workflow. If you've sent 100 and it's not working, we
              refund. Simple.
            </p>

            <h2>What's not covered</h2>
            <ul>
              <li>
                Subscriptions past the 7-day window. (You can still cancel anytime — your
                subscription ends at the end of the billing period, but no refund.)
              </li>
              <li>
                Credit top-up purchases that have been partially or fully consumed.
              </li>
              <li>
                Accounts terminated for abuse (spam, fraud, ToS violations).
              </li>
              <li>
                Second subscriptions (the guarantee applies to your first paid subscription
                only).
              </li>
            </ul>

            <h2>Ready to try?</h2>
            <p>
              Start on the Free plan — no credit card. When you're ready to send real
              campaigns, upgrade. If it doesn't work in the first week, you get your money
              back.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
              className="btn-primary inline-flex"
            >
              Get started free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
