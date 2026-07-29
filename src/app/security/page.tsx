import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { ShieldCheck, Lock, Database, KeyRound, Eye, FileCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

export default function SecurityPage() {
  return (
    <>
      <PageHeader
        title="Your data stays yours"
        subtitle="We built Bad Decision to keep your leads, your campaigns, and your account safe. Here is exactly how we do it, in plain English, with no jargon and no fine print buried at the bottom."
      />

      {/* What you get / avoid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">What you get</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { icon: Lock, title: "Encryption in transit and at rest", body: "Every request uses HTTPS with TLS 1.2 or newer. The database is encrypted, and every secret like an email password or API key is encrypted again with AES-256 before it is stored." },
                  { icon: Database, title: "Workspace isolation", body: "Every query is scoped to your workspace at the database level. Even if the app has a bug, the database refuses to return another workspace's data." },
                  { icon: KeyRound, title: "External sign-in", body: "We use an external authentication provider. No passwords are stored on our servers. You sign in with Google or an email magic link." },
                  { icon: Eye, title: "Audit logging", body: "Every call your AI assistant makes is logged in a table you can review. Every access to production systems is logged and reviewed monthly." },
                  { icon: FileCheck, title: "Compliance built in", body: "Every email includes a one-click unsubscribe, your physical address, and proper signing. AI voice calls respect consent, calling hours, and the do-not-call list." },
                  { icon: ShieldCheck, title: "72-hour breach notice", body: "If a data breach ever happens, we notify affected users and the relevant authority within 72 hours, as required by GDPR." },
                ].map((f) => (
                  <div key={f.title} className="card-premium p-5">
                    <f.icon className="h-7 w-7 text-gray-900" />
                    <h3 className="mt-2 font-extrabold text-gray-900">{f.title}</h3>
                    <p className="mt-1 text-sm font-medium text-gray-600">{f.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">What you avoid</h2>
              <div className="mt-6 space-y-3">
                {[
                  "No passwords stored on our servers. Your login goes through an external provider.",
                  "No cross-workspace data leaks. The database enforces isolation even if the app does not.",
                  "No plaintext secrets. Email passwords and API keys are encrypted before storage.",
                  "No compliance surprises. Unsubscribe links, consent records, and do-not-call lists are enforced.",
                  "No silent breaches. If something goes wrong, you hear about it within 72 hours.",
                  "No third-party data sales. We never sell your data, your leads, or your activity.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border-2 border-gray-200 bg-white p-4">
                    <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical detail */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-12 px-4 sm:px-6 lg:px-8">

          {/* Encryption */}
          <div>
            <h2 className="mb-4 text-2xl font-extrabold text-gray-900">Encryption</h2>
            <div className="space-y-3 font-medium text-gray-600">
              <p><strong className="text-gray-900">Data in transit:</strong> All requests use HTTPS with TLS 1.2 or newer. Certificates are managed by our cloud provider and renewed automatically.</p>
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
            <h2 className="mb-4 text-2xl font-extrabold text-gray-900">Workspace isolation</h2>
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
              <p><strong className="text-gray-900">TCPA and calling laws:</strong> AI voice calls only run with prior written consent, respect calling hours per campaign, and skip anyone on the do-not-call list. Phone numbers are masked in every log.</p>
              <p><strong className="text-gray-900">Data Processing Agreement:</strong> Available at <Link href="/dpa" className="font-bold text-gray-900 underline">/dpa</Link>.</p>
            </div>
          </div>

          {/* Subprocessors */}
          <div>
            <h2 className="mb-4 text-2xl font-extrabold text-gray-900">Service providers</h2>
            <p className="mb-4 font-medium text-gray-600">
              We use a small set of trusted providers to run the service. Each is
              contractually bound to protect your data. We never sell your data
              to anyone.
            </p>
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
                  <tr><td className="px-4 py-3 font-medium text-gray-700">Frontend and security provider</td><td className="px-4 py-3 font-medium text-gray-700">Frontend hosting, CDN, WAF</td><td className="px-4 py-3 font-medium text-gray-700">Global edge</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-gray-700">Database provider</td><td className="px-4 py-3 font-medium text-gray-700">Database hosting</td><td className="px-4 py-3 font-medium text-gray-700">US (Virginia)</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-gray-700">Cache provider</td><td className="px-4 py-3 font-medium text-gray-700">In-memory cache</td><td className="px-4 py-3 font-medium text-gray-700">US (Virginia)</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-gray-700">Authentication provider</td><td className="px-4 py-3 font-medium text-gray-700">User authentication</td><td className="px-4 py-3 font-medium text-gray-700">US</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-gray-700">Payment processor</td><td className="px-4 py-3 font-medium text-gray-700">Payment processing</td><td className="px-4 py-3 font-medium text-gray-700">Nigeria / Global</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-gray-700">Transactional email provider</td><td className="px-4 py-3 font-medium text-gray-700">Receipts and alerts</td><td className="px-4 py-3 font-medium text-gray-700">US</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-gray-700">Error monitoring provider</td><td className="px-4 py-3 font-medium text-gray-700">Error tracking</td><td className="px-4 py-3 font-medium text-gray-700">US / EU</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-gray-700">AI provider</td><td className="px-4 py-3 font-medium text-gray-700">AI message generation</td><td className="px-4 py-3 font-medium text-gray-700">Global</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-gray-700">AI provider</td><td className="px-4 py-3 font-medium text-gray-700">AI sentiment classification</td><td className="px-4 py-3 font-medium text-gray-700">Global</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-gray-700">Voice provider</td><td className="px-4 py-3 font-medium text-gray-700">AI voice calling</td><td className="px-4 py-3 font-medium text-gray-700">Global</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-gray-700">Messaging providers</td><td className="px-4 py-3 font-medium text-gray-700">WhatsApp and SMS delivery</td><td className="px-4 py-3 font-medium text-gray-700">Global</td></tr>
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
