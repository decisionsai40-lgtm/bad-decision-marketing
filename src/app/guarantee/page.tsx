import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { SITE_CONFIG } from "@/lib/utils";

export default function GuaranteePage() {
  return (
    <>
      <PageHeader
        title="7-day money-back. No questions, no friction."
        subtitle="We are confident Bad Decision works. But if it does not work for you in the first week, you should not pay. Here is our promise in plain English, with no fine print buried at the bottom."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="card-premium border-gray-900 p-8 text-center shadow-xl">
            <ShieldCheck className="mx-auto h-16 w-16 text-gray-900" />
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
              The Bad Decision Guarantee
            </h2>
            <p className="mt-3 text-lg font-medium text-gray-600">
              If you cancel within 7 days of your first paid subscription and
              have not sent more than 100 campaign emails, we will refund 100
              percent. No questions, no friction, no retention scripts, and no
              "are you sure?" pop-ups.
            </p>
          </div>

          <div className="prose-legal mt-12">
            <h2>The fine print (we kept it short)</h2>
            <ul>
              <li>
                <strong>Who qualifies:</strong> Any new paid subscriber on
                Starter, Growth, or Pro plans.
              </li>
              <li>
                <strong>Time window:</strong> Within 7 calendar days of your
                first subscription charge. The clock starts the moment your
                payment is processed.
              </li>
              <li>
                <strong>Usage cap:</strong> You must have sent fewer than 100
                campaign emails through the platform. If you have sent more, you
                have clearly used the product. We will still cancel your
                subscription, but no refund.
              </li>
              <li>
                <strong>How to claim:</strong> Email{" "}
                <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a>{" "}
                with the subject "Refund request" and your account email. We
                process refunds within 5 business days.
              </li>
              <li>
                <strong>What gets refunded:</strong> Your first subscription
                charge, in full. Credit pack purchases are non-refundable once
                consumed. See our{" "}
                <Link href="/refund">refund policy</Link> for details.
              </li>
              <li>
                <strong>What happens to your account:</strong> Your subscription
                cancels immediately, your workspace downgrades to the Free tier,
                and your data stays accessible for 30 days in case you change
                your mind.
              </li>
            </ul>

            <h2>Why we offer this</h2>
            <p>
              We have all bought software that promised the world and delivered
              nothing. The only way to know if Bad Decision works for your use
              case is to try it with real leads and real campaigns. If it does
              not work, we do not deserve your money.
            </p>
            <p>
              The 100-email cap is the only limit. We need it because every send
              costs us money in sending, verification, and warmup. But 100
              emails is enough to know if the platform fits your workflow. If you
              have sent 100 and it is not working, we refund. Simple.
            </p>

            <h2>What is not covered</h2>
            <ul>
              <li>
                Subscriptions past the 7-day window. You can still cancel
                anytime. Your subscription ends at the end of the billing period,
                but no refund.
              </li>
              <li>
                Credit pack purchases that have been partially or fully
                consumed.
              </li>
              <li>
                Accounts terminated for abuse, spam, fraud, or Terms of Service
                violations.
              </li>
              <li>
                Second subscriptions. The guarantee applies to your first paid
                subscription only.
              </li>
            </ul>

            <h2>Ready to try?</h2>
            <p>
              Start on the Free plan, no credit card needed. When you are ready
              to send real campaigns, upgrade. If it does not work in the first
              week, you get your money back.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
              className="btn-primary inline-flex"
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
