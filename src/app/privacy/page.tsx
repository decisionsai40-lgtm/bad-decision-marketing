import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/legal-layout";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Bad Decision collects, uses, and protects your data. We never sell your data. We never send emails on your behalf. We're GDPR-compliant and transparent about every data practice.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="July 9, 2026">
      <p>
        This Privacy Policy explains how {SITE_CONFIG.legalEntityName} ("Bad Decision", "we",
        "us", or "our") collects, uses, discloses, and safeguards your information when you
        visit our website at{" "}
        <a href={SITE_CONFIG.url}>{SITE_CONFIG.domain}</a>, access our dashboard at
        dashboard.{SITE_CONFIG.domain}, or use our software services (collectively, the
        "Service"). We are committed to protecting your privacy and complying with the
        General Data Protection Regulation (GDPR), the California Consumer Privacy Act
        (CCPA), and the Nigeria Data Protection Act (NDPA) 2023.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Information You Provide Directly</h3>
      <p>
        When you create an account, subscribe to a paid plan, or contact us, we collect:
      </p>
      <ul>
        <li>
          <strong>Account information:</strong> Your name, email address, password (hashed),
          and company name.
        </li>
        <li>
          <strong>Profile information:</strong> Your job title, role, timezone, and outreach
          preferences (sender name, copywriting style, target audience).
        </li>
        <li>
          <strong>Payment information:</strong> When you subscribe to a paid plan, our
          payment processor (Flutterwave) collects and processes your card details. We
          never see or store your full card number — only the last 4 digits, card brand,
          and expiration date for display purposes.
        </li>
        <li>
          <strong>Communication:</strong> Emails you send to our support team, and any
          information you voluntarily provide when filling out forms on our website.
        </li>
      </ul>

      <h3>1.2 Information We Collect Automatically</h3>
      <p>
        When you access the Service, we automatically collect certain technical and usage
        information:
      </p>
      <ul>
        <li>
          <strong>Device and browser information:</strong> IP address, browser type and
          version, device type, operating system, and screen resolution.
        </li>
        <li>
          <strong>Usage information:</strong> Pages visited, time spent on pages, clicks,
          feature usage, search queries you run, and error logs.
        </li>
        <li>
          <strong>Cookies and similar technologies:</strong> See our{" "}
          <a href="/cookie-policy">Cookie Policy</a> for details.
        </li>
      </ul>

      <h3>1.3 Lead Data You Process Through the Service</h3>
      <p>
        When you use our lead generation, email verification, or cold outreach features,
        you may process data about third-party individuals (your leads). This may include:
      </p>
      <ul>
        <li>Business contact information (name, email address, phone number, job title)</li>
        <li>Company information (name, website, industry, location, tech stack)</li>
        <li>Social media profile links (LinkedIn, Twitter, Instagram)</li>
        <li>Email engagement data (opens, clicks, replies, bounces)</li>
      </ul>
      <p>
        <strong>You are the data controller for this lead data.</strong> You are responsible
        for ensuring you have a lawful basis (consent, legitimate interest, etc.) to process
        this data under GDPR, CCPA, NDPA, and any other applicable law. We are your data
        processor — we process lead data only on your instructions and only to provide the
        Service to you.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>
          <strong>To provide the Service:</strong> Create and manage your account, process
          payments, deliver lead generation results, run email campaigns on your behalf, and
          provide customer support.
        </li>
        <li>
          <strong>To communicate with you:</strong> Send you service-related emails
          (welcome emails, payment receipts, security alerts, product updates), respond to
          your support inquiries, and send marketing emails (only if you opt in).
        </li>
        <li>
          <strong>To improve the Service:</strong> Analyze usage patterns, identify bugs,
          measure feature adoption, and prioritize new features.
        </li>
        <li>
          <strong>To detect and prevent fraud, abuse, and security incidents:</strong>{" "}
          Monitor for suspicious activity (mass account creation, payment fraud, spam
          campaigns, ToS violations), and block bad actors.
        </li>
        <li>
          <strong>To comply with legal obligations:</strong> Respond to lawful requests from
          law enforcement, regulators, or courts; enforce our Terms of Service; and protect
          our legal rights.
        </li>
      </ul>

      <h2>3. Legal Bases for Processing (GDPR)</h2>
      <p>
        If you are located in the European Economic Area (EEA), United Kingdom, or
        Switzerland, we process your personal data under the following legal bases:
      </p>
      <ul>
        <li>
          <strong>Performance of a contract (Article 6(1)(b)):</strong> To deliver the
          Service you subscribed to, process your payments, and fulfill our obligations
          under the Terms of Service.
        </li>
        <li>
          <strong>Legitimate interests (Article 6(1)(f)):</strong> To detect and prevent
          fraud, improve our Service, communicate with you about updates, and enforce our
          rights. We balance our legitimate interests against your privacy rights and only
          process where necessary.
        </li>
        <li>
          <strong>Legal obligation (Article 6(1)(c)):</strong> To comply with applicable
          laws (tax records, financial regulations, law enforcement requests).
        </li>
        <li>
          <strong>Consent (Article 6(1)(a)):</strong> For marketing emails, optional
          analytics, and any other processing where we ask for your explicit consent. You
          can withdraw consent at any time.
        </li>
      </ul>

      <h2>4. How We Share Your Information</h2>
      <p>We do not sell your personal data. We share information only in these limited cases:</p>

      <h3>4.1 Service Providers</h3>
      <p>We use third-party service providers to operate the Service. Each is contractually bound to protect your data:</p>
      <ul>
        <li>
          <strong>WorkOS:</strong> Authentication and user identity management. Processes
          your email, name, and login credentials. (United States)
        </li>
        <li>
          <strong>Supabase:</strong> Database hosting. Stores your account data, lead data,
          and campaign data. (United States / EU regions available)
        </li>
        <li>
          <strong>Flutterwave:</strong> Payment processing. Processes your card details
          and billing information. (United States / global)
        </li>
        <li>
          <strong>Amazon Web Services (AWS):</strong> Cloud infrastructure. Hosts our
          backend API, scraping workers, and email-sending workers. (Multiple regions)
        </li>
        <li>
          <strong>Vercel:</strong> Frontend hosting. Serves the marketing site and
          dashboard. (Global edge network)
        </li>
        <li>
          <strong>Resend:</strong> Transactional email delivery. Sends welcome emails,
          payment receipts, and password resets. (United States)
        </li>
        <li>
          <strong>Cloudflare:</strong> CDN, DDoS protection, DNS. (Global edge network)
        </li>
        <li>
          <strong>DeepSeek:</strong> AI copywriting for outreach message generation.
          Processes lead names, company names, and outreach context. (China — see Section
          4.3 for transfer safeguards)
        </li>
        <li>
          <strong>MyEmailVerifier / BillionVerify / Reoon / MailboxValidator:</strong> Email
          verification. Processes email addresses only. (Various jurisdictions)
        </li>
        <li>
          <strong>Sentry:</strong> Error tracking. Processes anonymized error data and
          (optionally) user IDs. (United States)
        </li>
      </ul>

      <h3>4.2 Business Transfers</h3>
      <p>
        If Bad Decision is involved in a merger, acquisition, or sale of assets, your
        information may be transferred as part of that transaction. We will notify you by
        email and via a prominent notice on our website 30 days before any such transfer.
      </p>

      <h3>4.3 International Data Transfers</h3>
      <p>
        Your information may be transferred to and processed in countries other than your
        country of residence, including the United States, Nigeria, and China. We use
        Standard Contractual Clauses (SCCs) approved by the European Commission to protect
        transfers from the EEA/UK to third countries. For transfers to the United States,
        we rely on the EU-U.S. Data Privacy Framework where applicable.
      </p>
      <p>
        <strong>Note on DeepSeek:</strong> We use DeepSeek (a Chinese AI provider) for
        outreach message drafting. DeepSeek only receives the lead's name, company name, and
        your chosen copywriting style — never email addresses, never phone numbers, never
        full lead profiles. If you do not want any data sent to DeepSeek, you can disable AI
        drafting in your settings or supply your own DeepSeek API key (community members
        only).
      </p>

      <h3>4.4 Legal Disclosures</h3>
      <p>
        We may disclose your information if required by law, court order, or government
        regulation, or if we believe in good faith that disclosure is necessary to protect
        our rights, your safety, or the safety of others.
      </p>

      <h2>5. Data Retention</h2>
      <p>We retain your personal data for as long as necessary to provide the Service:</p>
      <ul>
        <li>
          <strong>Active accounts:</strong> All data is retained while your account is
          active. You can delete your account at any time from Settings → Account → Delete
          Account.
        </li>
        <li>
          <strong>Closed accounts:</strong> We retain account data for 30 days after
          deletion (in case you change your mind), then permanently delete it. Lead data and
          campaign data are deleted immediately.
        </li>
        <li>
          <strong>Lead data:</strong> Retained as long as your workspace is active. Deleted
          when your workspace is deleted.
        </li>
        <li>
          <strong>Email engagement data (opens, clicks, replies):</strong> Retained for 24
          months for analytics, then aggregated and anonymized.
        </li>
        <li>
          <strong>Billing records:</strong> Retained for 7 years to comply with tax and
          financial regulations.
        </li>
        <li>
          <strong>Security logs:</strong> Retained for 12 months for fraud and abuse
          detection.
        </li>
      </ul>

      <h2>6. Your Privacy Rights</h2>
      <p>
        Depending on your location, you may have the following rights regarding your
        personal data:
      </p>
      <ul>
        <li>
          <strong>Access:</strong> Request a copy of the personal data we hold about you.
        </li>
        <li>
          <strong>Rectification:</strong> Request correction of inaccurate or incomplete
          data.
        </li>
        <li>
          <strong>Erasure:</strong> Request deletion of your personal data (the "right to be
          forgotten").
        </li>
        <li>
          <strong>Restriction:</strong> Request that we limit processing of your data in
          certain circumstances.
        </li>
        <li>
          <strong>Portability:</strong> Request your data in a structured, machine-readable
          format (CSV or JSON).
        </li>
        <li>
          <strong>Objection:</strong> Object to processing based on legitimate interests or
          for direct marketing.
        </li>
        <li>
          <strong>Withdraw consent:</strong> Withdraw consent at any time where we rely on
          consent for processing.
        </li>
      </ul>
      <p>
        To exercise any of these rights, email us at{" "}
        <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a> with
        the subject "Privacy request" and your account email. We will respond within 30 days
        (or as required by applicable law).
      </p>
      <p>
        If you are not satisfied with our response, you have the right to lodge a complaint
        with your local data protection authority. In the EEA, this is your country's
        supervisory authority. In Nigeria, this is the Nigeria Data Protection Commission
        (NDPC). In California, this is the California Attorney General.
      </p>

      <h2>7. Data Security</h2>
      <p>
        We take reasonable technical and organizational measures to protect your data,
        including:
      </p>
      <ul>
        <li>
          <strong>Encryption in transit:</strong> All data is transmitted over HTTPS/TLS
          1.2+.
        </li>
        <li>
          <strong>Encryption at rest:</strong> Database and object storage are encrypted
          with AES-256.
        </li>
        <li>
          <strong>Secrets management:</strong> API keys, SMTP passwords, and other secrets
          are encrypted with AES-256-GCM at the application layer and stored separately
          from the data they protect.
        </li>
        <li>
          <strong>Access controls:</strong> Role-based access control (RBAC) with the
          principle of least privilege. Production database access is restricted to two
          named engineers.
        </li>
        <li>
          <strong>Auditing:</strong> All access to production systems is logged and reviewed
          monthly.
        </li>
        <li>
          <strong>Vulnerability management:</strong> We run automated dependency scans on
          every code change and conduct quarterly security reviews.
        </li>
        <li>
          <strong>Incident response:</strong> In the event of a data breach, we will notify
          affected users and the relevant supervisory authority within 72 hours, as required
          by GDPR Article 33.
        </li>
      </ul>
      <p>
        Despite these measures, no system is 100% secure. We cannot guarantee absolute
        security of your data.
      </p>

      <h2>8. Children's Privacy</h2>
      <p>
        The Service is not directed to children under 16, and we do not knowingly collect
        personal information from children under 16. If you believe we have collected
        information from a child under 16, please contact us immediately at{" "}
        <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a> and we
        will delete it.
      </p>

      <h2>9. Cookies and Tracking Technologies</h2>
      <p>
        We use cookies and similar technologies to operate and improve the Service. See our{" "}
        <a href="/cookie-policy">Cookie Policy</a> for details on what we use, why, and how
        to opt out.
      </p>

      <h2>10. Third-Party Links and Services</h2>
      <p>
        The Service may contain links to third-party websites or integrate with third-party
        services (e.g. Apollo, Hunter, MyEmailVerifier when you supply your own API keys).
        We are not responsible for the privacy practices of these third parties. We
        encourage you to review their privacy policies.
      </p>

      <h2>11. Your Responsibilities (Lead Data)</h2>
      <p>
        Because you control the lead data you process through Bad Decision, you are
        responsible for:
      </p>
      <ul>
        <li>
          Obtaining any necessary consent or having a legitimate interest to process lead
          data under applicable law.
        </li>
        <li>
          Honoring opt-out / unsubscribe requests within 10 business days (CAN-SPAM) or
          immediately (GDPR).
        </li>
        <li>
          Including your physical mailing address and a one-click unsubscribe link in every
          cold email you send through the Service (we provide these by default; do not
          remove them).
        </li>
        <li>
          Not using the Service to send unsolicited spam, phishing, or illegal content. See
          our <a href="/terms">Terms of Service</a> for the full Acceptable Use Policy.
        </li>
      </ul>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. If we make material changes,
        we will notify you by email and post a prominent notice on our website at least 30
        days before the change takes effect. We encourage you to review this page
        periodically.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or our data practices, contact us:
      </p>
      <ul>
        <li>
          Email:{" "}
          <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a>
        </li>
        <li>Attn: Privacy Team, {SITE_CONFIG.legalEntityName}, {SITE_CONFIG.legalJurisdiction}</li>
      </ul>

      <h2>14. Data Processing Addendum (DPA)</h2>
      <p>
        For enterprise customers who require a signed Data Processing Addendum under GDPR
        Article 28, please see our{" "}
        <a href="/dpa">DPA page</a> or email us at{" "}
        <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a> with
        subject "DPA request".
      </p>
    </LegalLayout>
  );
}
