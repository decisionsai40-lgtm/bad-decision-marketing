import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { SITE_CONFIG } from "@/lib/utils";

export default function SecurityPage() {
  return (
    <>
      <PageHeader
        title="Security"
        subtitle="How we protect your data, authenticate users, and stay compliant."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-12 px-4 sm:px-6 lg:px-8">

          {/* Encryption */}
          <div>
            <h2 className="mb-4 text-2xl font-extrabold text-gray-900">Encryption</h2>
            <div className="space-y-3 font-medium text-gray-600">
              <p><strong className="text-gray-900">Data in transit:</strong> All requests use HTTPS with TLS 1.2 or newer. Certificates are managed by our cloud provider and auto-renewed.</p>
              <p><strong className="text-gray-900">Data at rest:</strong> Database encryption is managed by our database provider. All secrets, like connection keys and email passwords, are encrypted with AES-256-GCM before storage.</p>
              <p><strong className="text-gray-900">Encryption key:</strong> A 256-bit key stored in encrypted environment variables. It is never committed to code or logs.</p>
            </div>
          </div>

          {/* Authentication */}
          <div>
            <h2 className="mb-4 text-2xl font-extrabold text-gray-900">Authentication</h2>
            <div className="space-y-3 font-medium text-gray-600">
              <p><strong className="text-gray-900">Provider:</strong> We use an external authentication provider. No passwords are stored on our servers. All sign-ins go through their hosted pages with Google or email magic links.</p>
              <p><strong className="text-gray-900">Token verification:</strong> Every request verifies the user's session token signature against the provider's published keys, which we cache for one hour. We check the audience and issuer on every request.</p>
              <p><strong className="text-gray-900">Session management:</strong> Sessions expire automatically. Users can revoke all sessions from Settings.</p>
              <p><strong className="text-gray-900">Enterprise single sign-on:</strong> SAML single sign-on is available for Enterprise customers. Contact us to set it up for your organization.</p>
            </div>
          </div>

          {/* Multi-tenancy */}
          <div>
            <h2 className="mb-4 text-2xl font-extrabold text-gray-900">Multi-tenant isolation</h2>
            <div className="space-y-3 font-medium text-gray-600">
              <p><strong className="text-gray-900">Row-level security:</strong> Every workspace-scoped table has database row-level security enabled. Even if the application has a bug that forgets to filter by workspace, the database will refuse to return another workspace's data.</p>
              <p><strong className="text-gray-900">Workspace-scoped queries:</strong> Every database query in the application code filters by the workspace taken from the user's session token, never from user input.</p>
            </div>
          </div>

          {/* Compliance */}
          <div>
            <h2 className="mb-4 text-2xl font-extrabold text-gray-900">Compliance</h2>
            <div className="space-y-3 font-medium text-gray-600">
              <p><strong className="text-gray-900">CAN-SPAM:</strong> Every cold email sent through Bad Decision includes a one-click unsubscribe link. Bounces and complaints are tracked in real time. Suppressed emails are never contacted again.</p>
              <p><strong className="text-gray-900">GDPR:</strong> Users can request data export and account deletion. Financial records are retained for 7 years per tax compliance. Operational data is purged 30 days after deletion.</p>
              <p><strong className="text-gray-900">Data Processing Agreement:</strong> Available at <Link href="/dpa" className="font-bold text-gray-900 underline">/dpa</Link>.</p>
            </div>
          </div>

          {/* Subprocessors */}
          <div>
            <h2 className="mb-4 text-2xl font-extrabold text-gray-900">Subprocessors</h2>
            <div className="overflow-x-auto">
              <table className="w-full rounded-lg border-2 border-gray-200 text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200 bg-gray-50">
                    <th className="px-4 py-3 text-left font-bold text-gray-900">Provider</th>
                    <th className="px-4 py-3 text-left font-bold text-gray-900">Purpose</th>
                    <th className="px-4 py-3 text-left font-bold text-gray-900">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="px-4 py-3 font-medium text-gray-700">Cloud hosting provider</td><td className="px-4 py-3 font-medium text-gray-700">Application hosting</td><td className="px-4 py-3 font-medium text-gray-700">US (Virginia)</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-gray-700">CDN and security provider</td><td className="px-4 py-3 font-medium text-gray-700">Frontend hosting, CDN, WAF</td><td className="px-4 py-3 font-medium text-gray-700">Global edge</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-gray-700">Database provider</td><td className="px-4 py-3 font-medium text-gray-700">Database hosting</td><td className="px-4 py-3 font-medium text-gray-700">US (Virginia)</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-gray-700">Cache provider</td><td className="px-4 py-3 font-medium text-gray-700">In-memory cache</td><td className="px-4 py-3 font-medium text-gray-700">US (Virginia)</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-gray-700">Authentication provider</td><td className="px-4 py-3 font-medium text-gray-700">User authentication</td><td className="px-4 py-3 font-medium text-gray-700">US</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-gray-700">Payment processor</td><td className="px-4 py-3 font-medium text-gray-700">Payment processing</td><td className="px-4 py-3 font-medium text-gray-700">Nigeria / Global</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-gray-700">Transactional email provider</td><td className="px-4 py-3 font-medium text-gray-700">Receipts and alerts</td><td className="px-4 py-3 font-medium text-gray-700">US</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-gray-700">Error monitoring provider</td><td className="px-4 py-3 font-medium text-gray-700">Error tracking</td><td className="px-4 py-3 font-medium text-gray-700">US / EU</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-gray-700">AI provider</td><td className="px-4 py-3 font-medium text-gray-700">AI message generation</td><td className="px-4 py-3 font-medium text-gray-700">Global</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-gray-700">AI provider</td><td className="px-4 py-3 font-medium text-gray-700">AI sentiment classification</td><td className="px-4 py-3 font-medium text-gray-700">Global</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Status */}
          <div>
            <h2 className="mb-4 text-2xl font-extrabold text-gray-900">System status</h2>
            <p className="font-medium text-gray-600">
              Real-time service status is available on our{" "}
              <a href="https://api.baddecision.app/api/v1/status" className="font-bold text-gray-900 underline" target="_blank" rel="noopener noreferrer">
                status page
              </a>
              .
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-4 text-2xl font-extrabold text-gray-900">Security contact</h2>
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
