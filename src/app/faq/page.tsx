import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { FAQS, SITE_CONFIG } from "@/lib/utils";
import { FaqJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "FAQ — Answers to the questions founders actually ask",
  description:
    "Common questions about Bad Decision: why it is called Bad Decision, how it works, email checking, inbox warmup, bring-your-own-keys, refunds, compliance, and more.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  const categories = [
    {
      name: "About Bad Decision",
      items: FAQS.slice(0, 2),
    },
    {
      name: "Finding leads & checking emails",
      items: FAQS.slice(2, 5),
    },
    {
      name: "Sending & deliverability",
      items: FAQS.slice(5, 8),
    },
    {
      name: "Billing & refunds",
      items: FAQS.slice(8, 11),
    },
    {
      name: "How we compare",
      items: FAQS.slice(11, 12),
    },
  ];

  return (
    <>
      <FaqJsonLd />
      <PageHeader
        title="Questions, answered"
        subtitle="Could not find what you are looking for? Email us at support@baddecision.app. We usually reply within 24 hours."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {categories.map((cat) => (
            <div key={cat.name} className="mb-12">
              <h2 className="text-xl font-bold text-[var(--color-foreground)]">{cat.name}</h2>
              <div className="mt-4 space-y-3">
                {cat.items.map((faq) => (
                  <details
                    key={faq.q}
                    className="card-premium group cursor-pointer p-6 [&_summary]:list-none"
                  >
                    <summary className="flex items-center justify-between">
                      <span className="font-semibold text-[var(--color-foreground)]">{faq.q}</span>
                      <span className="ml-4 text-[var(--color-primary)] transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-[var(--color-text-secondary)]">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="card-premium mt-12 p-8 text-center">
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              Still have questions?
            </h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              We are a small team that actually cares. Email us and a real human will reply.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${SITE_CONFIG.supportEmail}`}
                className="btn-secondary"
              >
                {SITE_CONFIG.supportEmail}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
