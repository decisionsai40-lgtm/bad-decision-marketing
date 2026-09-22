import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/legal-layout";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the website, dashboard, and services. By creating an account you agree to these terms.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="January 1, 2025">
      <p>
        These Terms of Service govern your use of Bad Decision, operated by{" "}
        {SITE_CONFIG.legalEntityName}. By creating an account or using the
        Service, you agree to these Terms. If you do not agree, do not use the
        Service.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        You accept these Terms by signing up, signing in, or using any part of
        the Service. If you sign up on behalf of a company, you bind that
        company to these Terms.
      </p>

      <h2>2. Your Account</h2>
      <p>
        You must be at least 16 years old to use the Service. You are
        responsible for keeping your account secure and for everything that
        happens under it. Give us accurate information when you sign up.
      </p>
      <p>
        We use an external authentication provider for sign-in. We never store
        your password on our servers.
      </p>

      <h2>3. Acceptable Use</h2>
      <p>You agree not to use the Service to:</p>
      <ul>
        <li>Send spam or email to people who have not consented.</li>
        <li>Send phishing, malware, or illegal content.</li>
        <li>Remove or hide the unsubscribe link or your physical address.</li>
        <li>Call anyone without prior written consent (TCPA and similar laws).</li>
        <li>Call numbers on the do-not-call list, or outside permitted calling hours.</li>
        <li>Resell or sublicense access to the Service without our written permission.</li>
        <li>Try to break, scan, or reverse engineer our systems.</li>
      </ul>
      <p>
        Every email you send must include a one-click unsubscribe link and your
        physical mailing address. We provide these by default. Do not remove
        them.
      </p>

      <h2>4. Plans, Billing, and Refunds</h2>
      <p>
        We offer a Free plan and paid plans (Starter, Growth, Pro, Enterprise).
        Paid plans are billed monthly or yearly in advance. All plans auto-renew
        until you cancel.
      </p>
      <p>
        Payments are handled by our payment processor. We never see your full
        card details.
      </p>
      <p>
        Add-ons (WhatsApp, SMS, AI voice, line verification) are billed
        separately and can be cancelled without affecting your base plan.
      </p>
      <p>
        We offer a 7-day money-back guarantee on your first paid subscription.
        See our <a href="/refund">Refund Policy</a> for full details.
      </p>

      <h2>5. AI Voice Calling</h2>
      <p>
        AI voice calls only run when you have prior written consent from the
        person you are calling. We check the do-not-call list and respect
        calling hours before every call.
      </p>
      <p>
        You are responsible for getting and keeping consent records. We may
        suspend voice calling on your account if we detect non-compliant use.
      </p>

      <h2>6. External AI Connections</h2>
      <p>
        You can connect external AI assistants like ChatGPT, Claude, or Gemini
        to your workspace. When you do, they can access your lead data, start
        campaigns, and book meetings on your behalf.
      </p>
      <p>
        You are responsible for what you ask external AIs to do. We log every
        call they make so you can review it.
      </p>

      <h2>7. Credits and Usage</h2>
      <p>
        Some actions (lead discovery, email verification, AI message drafts)
        consume credits. Monthly plan credits reset on your billing date and do
        not roll over.
      </p>
      <p>
        Credits you buy separately as credit packs never expire. Credit packs
        are non-refundable once purchased.
      </p>

      <h2>8. Intellectual Property</h2>
      <p>
        The Service, including its design, code, and branding, is owned by Bad
        Decision. You may not copy, modify, or redistribute it without our
        written permission.
      </p>
      <p>
        You retain all rights to the lead data, campaign content, and messages
        you create. AI-generated messages are owned by you. You are responsible
        for reviewing them before sending.
      </p>

      <h2>9. Termination</h2>
      <p>
        You can delete your account at any time from Settings. Account deletion
        is permanent and removes your data within 30 days.
      </p>
      <p>
        We may suspend or terminate your account if you violate these Terms,
        use the Service for illegal activity, or put the security of the
        Service at risk.
      </p>

      <h2>10. Disclaimers and Liability</h2>
      <p>
        The Service is provided as is. We do not guarantee that every email
        will reach the inbox, that every lead will be accurate, or that the
        Service will be uninterrupted.
      </p>
      <p>
        To the maximum extent permitted by law, Bad Decision is not liable for
        indirect, incidental, or consequential damages. Our total liability for
        any claim is limited to the amount you paid us in the prior 12 months.
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. If we make material
        changes, we will email you and post a notice at least 30 days before
        they take effect.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about these Terms? Email us at{" "}
        <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a>.
      </p>
    </LegalLayout>
  );
}
