import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "7-day money-back guarantee",
  description:
    "If it does not work for you in the first week, you should not pay. No questions, no friction — full refund within 7 days.",
  alternates: { canonical: "/guarantee" },
};

export default function GuaranteePage() {
  return (
    <>
      <PageHeader
        title="7-day money-back. No questions."
        subtitle="If Bad Decision does not work for you in the first week, you should not pay."
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
              percent. No questions, no friction, no retention scripts.
            </p>
          </div>

          <p className="mt-8 text-center font-medium text-gray-600">
            Email{" "}
            <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="font-bold text-gray-900 underline">
              {SITE_CONFIG.supportEmail}
            </a>{" "}
            with subject "Refund request". We process refunds within 5 business
            days. See our{" "}
            <Link href="/refund" className="font-bold text-gray-900 underline">refund policy</Link>{" "}
            for full details.
          </p>

          <div className="mt-12 text-center">
            <Link
              href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
              className="btn-primary inline-flex"
            >
              Start free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
