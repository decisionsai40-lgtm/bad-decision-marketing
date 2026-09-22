import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { ShieldCheck, Lock, Database, KeyRound, Eye, FileCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Encryption at rest and in transit, tenant isolation, per-workspace keys, SOC 2-aligned controls. Your data stays yours.",
  alternates: { canonical: "/security" },
};

export default function SecurityPage() {
  return (
    <>
      <PageHeader
        title="Your data stays yours"
        subtitle="Encryption, isolation, and compliance built in. Here is what you get, in plain English."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Lock, title: "Encryption everywhere", body: "HTTPS with TLS 1.2+ in transit. AES-256 at rest. Secrets encrypted again before storage." },
              { icon: Database, title: "Workspace isolation", body: "Every query is scoped to your workspace at the database level. No cross-workspace leaks." },
              { icon: KeyRound, title: "External sign-in", body: "We use an external auth provider. No passwords stored on our servers." },
              { icon: Eye, title: "Audit logging", body: "Every AI assistant call is logged for you to review. Production access is logged monthly." },
              { icon: FileCheck, title: "Compliance built in", body: "Unsubscribe links, consent records, do-not-call lists, and calling hours enforced." },
              { icon: ShieldCheck, title: "72-hour breach notice", body: "If a breach ever happens, we notify affected users and authorities within 72 hours." },
            ].map((f) => (
              <div key={f.title} className="card-premium p-6">
                <f.icon className="h-7 w-7 text-gray-900" />
                <h3 className="mt-2 font-extrabold text-gray-900">{f.title}</h3>
                <p className="mt-1 text-sm font-medium text-gray-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="mb-3 text-2xl font-extrabold text-gray-900">What we never do</h2>
            <ul className="space-y-2 font-medium text-gray-600">
              <li>We never sell your data, your leads, or your activity.</li>
              <li>We never store passwords on our servers.</li>
              <li>We never send cold emails from our own servers.</li>
              <li>We never ignore consent, the do-not-call list, or calling hours.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-extrabold text-gray-900">Compliance</h2>
            <div className="space-y-2 font-medium text-gray-600">
              <p><strong className="text-gray-900">CAN-SPAM:</strong> one-click unsubscribe and your physical address in every email.</p>
              <p><strong className="text-gray-900">GDPR:</strong> data export and account deletion on request.</p>
              <p><strong className="text-gray-900">TCPA:</strong> AI voice calls only run with prior written consent.</p>
              <p><strong className="text-gray-900">DPA:</strong> available at <Link href="/dpa" className="font-bold text-gray-900 underline">/dpa</Link>.</p>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-extrabold text-gray-900">Security contact</h2>
            <p className="font-medium text-gray-600">
              Found a vulnerability? Email{" "}
              <a href={`mailto:security@${SITE_CONFIG.domain}`} className="font-bold text-gray-900 underline">
                security@{SITE_CONFIG.domain}
              </a>
              . We respond within 48 hours.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
