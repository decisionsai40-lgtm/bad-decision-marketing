import type { Metadata } from "next";
import { ContactForm } from "./contact-form";
import { PageHeader } from "@/components/sections/page-header";
import { Mail, MessageSquare, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact — Talk to the Bad Decision team",
  description:
    "Email us at support@baddecision.app for any question. Sales inquiries, technical support, partnership requests, and feedback all welcome. We reply within 24 hours.",
  alternates: { canonical: "/contact" },
};

const TOPICS = [
  { value: "general", label: "General question" },
  { value: "sales", label: "Sales inquiry" },
  { value: "support", label: "Technical support" },
  { value: "enterprise", label: "Enterprise / custom plan" },
  { value: "partnership", label: "Partnership" },
  { value: "feedback", label: "Feedback" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Contact"
        title="Talk to a human"
        subtitle="We're a small team that actually reads every email. Most replies come within 24 hours. No bots, no tiers, no escalation queues."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Form (client component) */}
            <ContactForm topics={TOPICS} />

            {/* Info sidebar */}
            <div className="space-y-4">
              <div className="card-premium p-6">
                <Mail className="h-6 w-6 text-[var(--color-primary)]" />
                <h3 className="mt-3 font-bold text-[var(--color-foreground)]">Email us</h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  For anything — sales, support, feedback, just to say hi.
                </p>
                <a
                  href={`mailto:${SITE_CONFIG.supportEmail}`}
                  className="mt-2 block text-sm font-medium text-[var(--color-primary)] hover:underline"
                >
                  {SITE_CONFIG.supportEmail}
                </a>
              </div>

              <div className="card-premium p-6">
                <Clock className="h-6 w-6 text-[var(--color-primary)]" />
                <h3 className="mt-3 font-bold text-[var(--color-foreground)]">Response time</h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  Most emails answered within 24 hours, Mon-Fri. Enterprise sales inquiries
                  get priority — we'll usually reply same-day.
                </p>
              </div>

              <div className="card-premium p-6">
                <MessageSquare className="h-6 w-6 text-[var(--color-primary)]" />
                <h3 className="mt-3 font-bold text-[var(--color-foreground)]">Already a user?</h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  The fastest way to get help is inside the dashboard. Click the chat icon
                  in the bottom-right — our team sees those messages first.
                </p>
              </div>

              <div className="card-premium p-6 bg-[var(--color-violet-soft)]/30">
                <h3 className="font-bold text-[var(--color-foreground)]">
                  Looking for enterprise?
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  Custom limits, SAML SSO, dedicated infrastructure, dedicated success
                  manager. Email us at{" "}
                  <a
                    href={`mailto:${SITE_CONFIG.supportEmail}?subject=Enterprise inquiry`}
                    className="text-[var(--color-primary)] hover:underline"
                  >
                    {SITE_CONFIG.supportEmail}
                  </a>{" "}
                  with subject "Enterprise inquiry".
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
