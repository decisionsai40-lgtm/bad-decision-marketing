import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Security — Bad Decision",
  description: "How Bad Decision protects your data: encryption, auth, compliance, and subprocessors.",
  alternates: { canonical: "/security" },
};

export default function SecurityPage() {
  return (
    <>
      <PageHeader
        title="Security"
        subtitle="How we protect your data, authenticate users, and stay compliant."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Encryption */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">Encryption</h2>
            <div className="space-y-3 text-[var(--color-text-secondary)]">
              <p><strong>Data in transit:</strong> All API calls use HTTPS with TLS 1.2+. Certificates are managed by AWS Certificate Manager and auto-renewed.</p>
              <p><strong>Data at rest:</strong> Database encryption is managed by Supabase (Postgres). All secrets (API keys, SMTP passwords) are encrypted with AES-256-GCM before storage.</p>
              <p><strong>Encryption key:</strong> A 256-bit key stored in AWS-encrypted environment variables. Never committed to code or logs.</p>
            </div>
          </div>

          {/* Authentication */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">Authentication</h2>
            <div className="space-y-3 text-[var(--color-text-secondary)]">
              <p><strong>Provider:</strong> WorkOS — no passwords stored on our servers. All auth is handled via WorkOS-hosted sign-in with Google OAuth or email magic links.</p>
              <p><strong>JWT verification:</strong> Every API request verifies the JWT signature against WorkOS's JWKS (cached for 1 hour). Audience and issuer are validated on every request.</p>
              <p><strong>Session management:</strong> Sessions expire automatically. Users can revoke all sessions from Settings.</p>
              <p><strong>Enterprise SSO:</strong> SAML SSO is available for Enterprise customers via WorkOS. Contact us to configure SSO for your organization.</p>
            </div>
          </div>

          {/* Multi-tenancy */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">Multi-tenant isolation</h2>
            <div className="space-y-3 text-[var(--color-text-secondary)]">
              <p><strong>Row-Level Security:</strong> Every workspace-scoped table has PostgreSQL RLS enabled. Even if the application has a bug that forgets to filter by workspace_id, the database will refuse to return another workspace's data.</p>
              <p><strong>Workspace-scoped queries:</strong> Every database query in the application code filters by workspace_id extracted from the JWT — never from user input.</p>
            </div>
          </div>

          {/* Compliance */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">Compliance</h2>
            <div className="space-y-3 text-[var(--color-text-secondary)]">
              <p><strong>CAN-SPAM:</strong> Every cold email sent through Bad Decision includes a one-click unsubscribe link. Bounces and complaints are tracked in real time. Suppressed emails are never contacted again.</p>
              <p><strong>GDPR:</strong> Users can request data export and account deletion. Financial records are retained for 7 years per tax compliance; operational data is purged 30 days after deletion.</p>
              <p><strong>Data Processing Agreement:</strong> Available at <Link href="/dpa" className="text-[var(--color-primary)] hover:underline">/dpa</Link>.</p>
            </div>
          </div>

          {/* Subprocessors */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">Subprocessors</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-[var(--color-border)] rounded-lg">
                <thead>
                  <tr className="bg-[var(--color-surface)] border-b border-[var(--color-border)]">
                    <th className="text-left py-3 px-4 font-medium">Provider</th>
                    <th className="text-left py-3 px-4 font-medium">Purpose</th>
                    <th className="text-left py-3 px-4 font-medium">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border-light)]">
                  <tr><td className="py-3 px-4">AWS</td><td className="py-3 px-4">Application hosting (ECS Fargate)</td><td className="py-3 px-4">US (Virginia)</td></tr>
                  <tr><td className="py-3 px-4">Cloudflare</td><td className="py-3 px-4">Frontend hosting + CDN + WAF</td><td className="py-3 px-4">Global edge</td></tr>
                  <tr><td className="py-3 px-4">Supabase</td><td className="py-3 px-4">PostgreSQL database</td><td className="py-3 px-4">US (Virginia)</td></tr>
                  <tr><td className="py-3 px-4">Upstash</td><td className="py-3 px-4">Redis cache</td><td className="py-3 px-4">US (Virginia)</td></tr>
                  <tr><td className="py-3 px-4">WorkOS</td><td className="py-3 px-4">Authentication</td><td className="py-3 px-4">US</td></tr>
                  <tr><td className="py-3 px-4">Flutterwave</td><td className="py-3 px-4">Payment processing</td><td className="py-3 px-4">Nigeria / Global</td></tr>
                  <tr><td className="py-3 px-4">Resend</td><td className="py-3 px-4">Transactional email</td><td className="py-3 px-4">US</td></tr>
                  <tr><td className="py-3 px-4">Sentry</td><td className="py-3 px-4">Error monitoring</td><td className="py-3 px-4">US / EU</td></tr>
                  <tr><td className="py-3 px-4">DeepSeek</td><td className="py-3 px-4">AI message generation</td><td className="py-3 px-4">Global</td></tr>
                  <tr><td className="py-3 px-4">Google Gemini</td><td className="py-3 px-4">AI sentiment classification</td><td className="py-3 px-4">Global</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Status */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">System status</h2>
            <p className="text-[var(--color-text-secondary)]">
              Real-time service status is available at{" "}
              <a href="https://api.baddecision.app/api/v1/status" className="text-[var(--color-primary)] hover:underline" target="_blank" rel="noopener noreferrer">
                api.baddecision.app/api/v1/status
              </a>
              .
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">Security contact</h2>
            <p className="text-[var(--color-text-secondary)]">
              Found a vulnerability? Email{" "}
              <a href={`mailto:security@${SITE_CONFIG.domain}`} className="text-[var(--color-primary)] hover:underline">
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
