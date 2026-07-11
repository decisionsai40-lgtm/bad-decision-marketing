import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/legal-layout";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The rules of using Bad Decision. Plain English where possible. Covers acceptable use, payment terms, account termination, intellectual property, and liability limitations.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="July 9, 2026">
      <p>
        Welcome to {SITE_CONFIG.legalEntityName} ("Bad Decision", "we", "us", or "our"). By
        creating an account, accessing our website at{" "}
        <a href={SITE_CONFIG.url}>{SITE_CONFIG.domain}</a>, or using our software services
        (the "Service"), you agree to these Terms of Service ("Terms"). If you do not agree,
        do not use the Service.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 16 years old to use the Service. By using the Service, you
        represent and warrant that:
      </p>
      <ul>
        <li>You are at least 16 years of age (or the age of digital consent in your jurisdiction).</li>
        <li>You have the legal capacity to enter into a binding contract.</li>
        <li>You are not prohibited from using the Service under applicable law.</li>
        <li>If you are using the Service on behalf of a company, you have authority to bind that company.</li>
      </ul>

      <h2>2. Your Account</h2>
      <p>
        To access most features of the Service, you must create an account. You are
        responsible for:
      </p>
      <ul>
        <li>Providing accurate and complete information when creating your account.</li>
        <li>Keeping your password and account credentials confidential.</li>
        <li>All activity that occurs under your account, whether by you or anyone you grant access to.</li>
        <li>Notifying us immediately of any unauthorized use of your account.</li>
      </ul>
      <p>
        We reserve the right to suspend or terminate your account if your information is
        inaccurate, incomplete, or if we suspect unauthorized access.
      </p>

      <h2>3. Acceptable Use Policy</h2>
      <p>You agree NOT to use the Service to:</p>
      <ul>
        <li>
          Send unsolicited commercial email (spam) to recipients who have not consented or
          with whom you have no existing business relationship.
        </li>
        <li>
          Send emails that violate the CAN-SPAM Act, GDPR, ePrivacy Directive, NDPA, or any
          other applicable anti-spam or data protection law.
        </li>
        <li>
          Send phishing, malware, fraudulent, deceptive, or illegal content.
        </li>
        <li>
          Send emails with missing or forged unsubscribe links, missing physical mailing
          address, or misleading subject lines.
        </li>
        <li>
          Use scraped lead data for purposes other than legitimate B2B outreach (e.g. do not
          sell lead lists, do not use for discriminatory targeting, do not harass).
        </li>
        <li>
          Attempt to access, probe, scan, or test the vulnerability of our systems without
          authorization.
        </li>
        <li>
          Reverse engineer, decompile, or disassemble any part of the Service.
        </li>
        <li>
          Use the Service to build a competing product, or to scrape / extract our internal
          data.
        </li>
        <li>
          Resell, sublicense, or redistribute access to the Service without our written
          permission.
        </li>
        <li>
          Use the Service to send emails on behalf of third parties (e.g. as a reseller)
          without disclosing your identity.
        </li>
        <li>
          Bypass or attempt to bypass any rate limits, sending caps, or abuse prevention
          mechanisms.
        </li>
        <li>
          Upload lead lists containing personal data of children under 16, health data,
          biometric data, or other special category data under GDPR Article 9.
        </li>
      </ul>
      <p>
        <strong>Violation of this Acceptable Use Policy may result in immediate account
        suspension, data deletion, and forfeiture of any prepaid credits or subscription
        fees.</strong> We may also report illegal activity to law enforcement.
      </p>

      <h2>4. Cold Email Compliance Requirements</h2>
      <p>
        Because Bad Decision is a cold outreach tool, you must comply with these
        requirements when sending campaigns:
      </p>
      <ul>
        <li>
          <strong>Include a valid physical mailing address</strong> in every email. Configure
          this in Settings → Campaign → CAN-SPAM Address. We do not allow sending without
          it.
        </li>
        <li>
          <strong>Include a functioning one-click unsubscribe link</strong> in every email.
          We provide this by default — do not remove or obscure it.
        </li>
        <li>
          <strong>Honor unsubscribe requests within 10 business days</strong> (CAN-SPAM) or
          immediately (GDPR). Our system automatically adds unsubscribed recipients to your
          suppression list — do not attempt to circumvent it.
        </li>
        <li>
          <strong>Use accurate "From" names and subject lines.</strong> Do not use deceptive
          subject lines that misrepresent the email's content.
        </li>
        <li>
          <strong>Only send to recipients with whom you have a legitimate business interest
          or who have consented.</strong> Do not buy lead lists from third parties that
          violate this principle.
        </li>
        <li>
          <strong>Maintain a clean sender reputation.</strong> If your bounce rate exceeds 5%
          or your complaint rate exceeds 0.1%, we may pause your campaign and require you to
          clean your list before resuming.
        </li>
      </ul>

      <h2>5. Subscription Plans and Billing</h2>

      <h3>5.1 Plans</h3>
      <p>
        We offer several subscription plans, described on our{" "}
        <a href="/pricing">pricing page</a>. Free plan is available indefinitely with
        limited features. Paid plans (Starter, Growth, Pro, Enterprise) are billed monthly
        or annually in advance.
      </p>

      <h3>5.2 Payment</h3>
      <p>
        We use Flutterwave as our payment processor. Flutterwave processes all
        payments and handles currency conversion. Your payment is processed by
        Flutterwave under their terms — we never see or store your full card
        details. Bad Decision is the merchant of record for all subscriptions.
      </p>

      <h3>5.3 Renewal</h3>
      <p>
        Paid subscriptions auto-renew at the end of each billing period (monthly or
        annually) until you cancel. You can cancel at any time from your billing portal —
        your subscription stays active until the end of the current period, then downgrades
        to Free.
      </p>

      <h3>5.4 Price Changes</h3>
      <p>
        We may change our prices with at least 30 days' notice. Price changes apply to your
        next renewal — you can cancel before the renewal to avoid the new price.
      </p>

      <h3>5.5 Taxes</h3>
      <p>
        You are responsible for any applicable sales tax, VAT, or GST on your
        subscription, as required by the laws of your jurisdiction. The price you
        see at checkout is the base subscription price — local taxes may be added
        at checkout depending on your location and Flutterwave&apos;s tax
        configuration.
      </p>

      <h3>5.6 Credits</h3>
      <p>
        Some features (lead generation, email verification, AI drafting) consume credits.
        Free plan includes a monthly credit allocation. Paid plans include a larger monthly
        allocation. You can also purchase credit top-ups. Unused credits from your monthly
        allocation do not roll over. Purchased credit top-ups expire 12 months after
        purchase. Community members who supply their own API keys do not consume platform
        credits for the operations those keys cover.
      </p>

      <h2>6. Refund Policy</h2>
      <p>
        We offer a 7-day money-back guarantee on first paid subscriptions, subject to the
        terms on our <a href="/refund">refund policy page</a>. Credit top-up purchases are
        non-refundable once consumed.
      </p>

      <h2>7. Free Trial</h2>
      <p>
        We may offer free trials of paid plans from time to time. Free trials convert to
        paid subscriptions at the end of the trial period unless you cancel before the trial
        ends. You will receive an email reminder 3 days before the trial ends.
      </p>

      <h2>8. Intellectual Property</h2>

      <h3>8.1 Our Rights</h3>
      <p>
        The Service, including its design, code, features, and branding, is owned by Bad
        Decision and protected by intellectual property laws. You may not copy, modify,
        distribute, or create derivative works from the Service without our written
        permission.
      </p>

      <h3>8.2 Your Content</h3>
      <p>
        You retain all rights to the lead data, campaign content, and outreach messages you
        create using the Service. By using the Service, you grant us a limited license to
        process your content solely to provide the Service to you (e.g. store it, run
        campaigns, generate AI drafts).
      </p>

      <h3>8.3 AI-Generated Content</h3>
      <p>
        Outreach messages generated by our AI drafting feature are owned by you. We retain
        no rights to AI-generated content. You are responsible for reviewing AI-generated
        content before sending — do not blindly send AI output without review.
      </p>

      <h2>9. Privacy</h2>
      <p>
        Our data practices are described in our <a href="/privacy">Privacy Policy</a>,
        incorporated here by reference.
      </p>

      <h2>10. Service Availability</h2>
      <p>
        We strive for 99.9% uptime but do not guarantee uninterrupted service. We may
        experience outages due to maintenance, infrastructure failures, third-party
        dependency failures (e.g. AWS, Supabase, Flutterwave), or events beyond our
        control. We are not liable for any downtime or data loss resulting from such events.
      </p>
      <p>
        We may modify, suspend, or discontinue any part of the Service at any time, with or
        without notice. If we discontinue the Service entirely, we will refund prepaid
        subscription fees on a pro-rata basis.
      </p>

      <h2>11. Account Termination</h2>
      <p>
        You can delete your account at any time from Settings → Account → Delete Account.
        Account deletion is irreversible — all your data is permanently deleted within 30
        days.
      </p>
      <p>
        We may suspend or terminate your account immediately, without notice, if:
      </p>
      <ul>
        <li>You violate these Terms or our Acceptable Use Policy.</li>
        <li>You use the Service for illegal, fraudulent, or abusive activity.</li>
        <li>Your actions risk the security, integrity, or reputation of the Service or other users.</li>
        <li>You fail to pay subscription fees when due.</li>
        <li>You are unreachable for more than 60 days (bounced emails, invalid account).</li>
      </ul>
      <p>
        Upon termination, all licenses granted to you under these Terms end immediately. We
        may delete your data after 30 days. Sections that should survive termination (e.g.
        intellectual property, liability limitations, dispute resolution) survive.
      </p>

      <h2>12. Disclaimers</h2>
      <p>
        The Service is provided "as is" and "as available", without warranties of any kind,
        express or implied. We do not warrant that:
      </p>
      <ul>
        <li>The Service will be uninterrupted, error-free, or secure.</li>
        <li>Lead data scraped from the internet will be accurate, complete, or current.</li>
        <li>Email verification results will be 100% accurate.</li>
        <li>Emails sent through the Service will reach recipients' inboxes (deliverability depends on your sender reputation, content, and provider policies).</li>
        <li>AI-generated content will be effective, appropriate, or free of bias.</li>
      </ul>

      <h2>13. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, in no event shall Bad Decision be liable
        for:
      </p>
      <ul>
        <li>Indirect, incidental, special, consequential, or punitive damages.</li>
        <li>Loss of profits, data, business, or goodwill.</li>
        <li>Damages resulting from your use of, or inability to use, the Service.</li>
        <li>Damages resulting from emails you send through the Service (you are responsible for your campaigns).</li>
        <li>Damages resulting from third-party actions (e.g.lead list providers, email providers, scrapers).</li>
      </ul>
      <p>
        Our total liability for any claim arising from these Terms or your use of the
        Service shall not exceed the amount you paid us in the 12 months preceding the
        claim.
      </p>

      <h2>14. Indemnification</h2>
      <p>
        You agree to indemnify and hold Bad Decision harmless from any claims, damages,
        losses, or expenses (including reasonable attorneys' fees) arising from:
      </p>
      <ul>
        <li>Your use of the Service.</li>
        <li>Your violation of these Terms or applicable law.</li>
        <li>Your cold outreach campaigns (including claims of spam, harassment, or unsolicited commercial email).</li>
        <li>Your lead data (including claims that your lead data violates third-party privacy rights).</li>
        <li>Your infringement of any third-party intellectual property right.</li>
      </ul>

      <h2>15. Governing Law and Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of {SITE_CONFIG.legalJurisdiction}, without
        regard to conflict of law principles. Any dispute arising from these Terms or the
        Service shall first be resolved through good-faith negotiation. If negotiation
        fails, the dispute shall be resolved by arbitration in {SITE_CONFIG.legalJurisdiction}{" "}
        under the rules of the Lagos Regional Centre for International Commercial Arbitration
        (RCICAB).
      </p>

      <h2>16. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. If we make material changes, we will
        notify you by email and post a prominent notice on our website at least 30 days
        before the change takes effect. Your continued use of the Service after the change
        takes effect constitutes acceptance of the new Terms.
      </p>

      <h2>17. Severability</h2>
      <p>
        If any provision of these Terms is found to be unenforceable, the remaining
        provisions will continue in full force and effect.
      </p>

      <h2>18. Entire Agreement</h2>
      <p>
        These Terms, together with our Privacy Policy, Cookie Policy, and Refund Policy,
        constitute the entire agreement between you and Bad Decision regarding the Service.
      </p>

      <h2>19. Contact Us</h2>
      <p>
        Questions about these Terms? Email us at{" "}
        <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a>.
      </p>
    </LegalLayout>
  );
}
