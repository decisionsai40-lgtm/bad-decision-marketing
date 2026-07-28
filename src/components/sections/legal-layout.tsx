import type { ReactNode } from "react";
import { SITE_CONFIG } from "@/lib/utils";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 border-b-2 border-gray-200 bg-white p-6 rounded-2xl border-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            {title}
          </h1>
          <p className="mt-2 text-sm font-medium text-gray-500">
            Last updated: {lastUpdated} &middot; Operated by {SITE_CONFIG.legalEntityName} ({
              SITE_CONFIG.legalJurisdiction
            }) &middot;{" "}
            <a
              href={`mailto:${SITE_CONFIG.supportEmail}`}
              className="font-bold text-gray-900 underline"
            >
              {SITE_CONFIG.supportEmail}
            </a>
          </p>
        </div>
        <div className="prose-legal">{children}</div>
        <div className="mt-12 rounded-2xl border-2 border-gray-200 bg-white p-6 text-sm font-medium text-gray-600">
          <strong className="text-gray-900">Questions about this policy?</strong>
          <br />
          Email us at{" "}
          <a
            href={`mailto:${SITE_CONFIG.supportEmail}`}
            className="font-bold text-gray-900 underline"
          >
            {SITE_CONFIG.supportEmail}
          </a>{" "}
          and we will get back to you within 24 hours.
        </div>
      </div>
    </section>
  );
}
