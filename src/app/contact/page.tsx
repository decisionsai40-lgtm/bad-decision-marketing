import { ContactForm } from "./contact-form";
import { PageHeader } from "@/components/sections/page-header";
import { Mail, Clock, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

const TOPICS = [
  { value: "general", label: "General question" },
  { value: "sales", label: "Sales question" },
  { value: "support", label: "Technical support" },
  { value: "enterprise", label: "Enterprise or custom plan" },
  { value: "partnership", label: "Partnership" },
  { value: "feedback", label: "Feedback" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Talk to us"
        subtitle="A real human reads every email. Most replies come within 24 hours."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ContactForm topics={TOPICS} />

            <div className="space-y-4">
              <div className="card-premium p-6">
                <Mail className="h-6 w-6 text-gray-900" />
                <h3 className="mt-3 font-extrabold text-gray-900">Email us</h3>
                <p className="mt-1 text-sm font-medium text-gray-600">
                  For anything: sales, support, feedback, or just to say hi.
                </p>
                <a
                  href={`mailto:${SITE_CONFIG.supportEmail}`}
                  className="mt-2 block text-sm font-bold text-gray-900 hover:underline"
                >
                  {SITE_CONFIG.supportEmail}
                </a>
              </div>

              <div className="card-premium p-6">
                <Clock className="h-6 w-6 text-gray-900" />
                <h3 className="mt-3 font-extrabold text-gray-900">Response time</h3>
                <p className="mt-1 text-sm font-medium text-gray-600">
                  Most emails answered within 24 hours, Monday through Friday.
                </p>
              </div>

              <div className="card-premium p-6">
                <MessageSquare className="h-6 w-6 text-gray-900" />
                <h3 className="mt-3 font-extrabold text-gray-900">Already a user?</h3>
                <p className="mt-1 text-sm font-medium text-gray-600">
                  Click the chat icon in the bottom-right of the dashboard. Our team sees those messages first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
