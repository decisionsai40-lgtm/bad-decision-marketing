import type { ReactNode } from "react";
import { SITE_CONFIG } from "@/lib/utils";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <section className="bg-radial-glow py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 border-b border-[var(--color-border)] pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-foreground)]">
            {title}
          </h1>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            Last updated: {lastUpdated} · Operated by {SITE_CONFIG.legalEntityName} ({
              SITE_CONFIG.legalJurisdiction
            }) ·{" "}
            <a
              href={`mailto:${SITE_CONFIG.supportEmail}`}
              className="text-[var(--color-primary)] hover:underline"
            >
              {SITE_CONFIG.supportEmail}
            </a>
          </p>
        </div>
        <div className="prose-legal">{children}</div>
        <div className="mt-12 rounded-lg bg-[var(--color-muted)] p-6 text-sm text-[var(--color-text-muted)]">
          <strong className="text-[var(--color-foreground)]">Questions about this policy?</strong>
          <br />
          Email us at{" "}
          <a
            href={`mailto:${SITE_CONFIG.supportEmail}`}
            className="text-[var(--color-primary)] hover:underline"
          >
            {SITE_CONFIG.supportEmail}
          </a>{" "}
          and we'll get back to you within 24 hours.
        </div>
      </div>
    </section>
  );
}
