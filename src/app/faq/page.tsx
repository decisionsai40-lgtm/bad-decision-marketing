import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { FAQS, SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Short, straight answers to common questions about pricing, leads, sending, AI voice, integrations, and cancellations.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        title="Questions, answered straight"
        subtitle="Short answers. No fluff, no soft-pedalling."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="card-premium group cursor-pointer p-6 [&_summary]:list-none"
              >
                <summary className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">{faq.q}</span>
                  <span className="ml-4 font-bold text-gray-900 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 font-medium text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>

          <div className="card-premium mt-12 p-8 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900">
              Still have questions?
            </h2>
            <p className="mt-2 font-medium text-gray-600">
              A real human reads every email. Most replies come back within a day.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Talk to us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="btn-secondary">
                {SITE_CONFIG.supportEmail}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
