import { LegalLayout } from "@/components/sections/legal-layout";
import { SITE_CONFIG } from "@/lib/utils";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="January 1, 2025">
      <p>
        This Privacy Policy explains how {SITE_CONFIG.legalEntityName} ("Bad
        Decision", "we", "us") collects, uses, and shares your information when
        you use our website, dashboard, and services (the "Service").
      </p>

      <h2>1. What We Collect</h2>
      <p>We collect the following information:</p>
      <ul>
        <li><strong>Account info:</strong> your name, email, and company name.</li>
        <li><strong>Profile info:</strong> your phone number, timezone, and outreach preferences.</li>
        <li><strong>Payment info:</strong> the last 4 digits of your card, brand, and expiry. Our payment processor handles the rest.</li>
        <li><strong>Usage data:</strong> pages you visit, features you use, and error logs.</li>
        <li><strong>Lead data:</strong> contact info for the businesses and people you search for or upload.</li>
      </ul>

      <h2>2. How We Use It</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide the Service, including running email, WhatsApp, SMS, and AI voice campaigns on your behalf.</li>
        <li>Process your payments and send you receipts.</li>
        <li>Send you service emails like password resets and security alerts.</li>
        <li>Detect fraud, spam, and abuse.</li>
        <li>Improve the Service and build new features.</li>
      </ul>

      <h2>3. What We Share</h2>
      <p>
        We do not sell your data. We share it only with the providers we need
        to run the Service:
      </p>
      <ul>
        <li><strong>Our voice provider</strong> handles AI voice calls.</li>
        <li><strong>Our scheduler</strong> handles bookings.</li>
        <li><strong>Our payment processor</strong> handles charges.</li>
        <li><strong>Our auth provider</strong> handles sign-in.</li>
        <li><strong>Our database provider</strong> stores your data.</li>
        <li><strong>Our email and messaging providers</strong> deliver your campaigns.</li>
      </ul>
      <p>
        We may also disclose your information if required by law.
      </p>

      <h2>4. AI Voice Calls</h2>
      <p>
        When you run an AI voice call, we record the call for quality and
        training. We store a transcript of every call.
      </p>
      <p>
        Before every call, we verify consent, check the do-not-call list, and
        respect calling hours. Calls outside permitted hours are blocked.
      </p>

      <h2>5. External AI Connections</h2>
      <p>
        If you connect ChatGPT, Claude, or Gemini to your workspace, they can
        access your lead data and run actions like finding leads, starting
        campaigns, or booking meetings.
      </p>
      <p>
        They operate under their own privacy policies. We log every call they
        make so you can review it later.
      </p>

      <h2>6. Cookies and Tracking</h2>
      <p>
        We use essential cookies for sign-in and session management, and
        optional analytics cookies to understand how the Service is used. See
        our <a href="/cookie-policy">Cookie Policy</a> for details and how to
        opt out.
      </p>

      <h2>7. Data Retention</h2>
      <ul>
        <li><strong>Lead data cache:</strong> 30 days after search, then deleted.</li>
        <li><strong>Call recordings and transcripts:</strong> 90 days.</li>
        <li><strong>Active account data:</strong> kept while your account is active.</li>
        <li><strong>Billing records:</strong> kept for 7 years for tax compliance.</li>
        <li><strong>Security logs:</strong> 12 months.</li>
      </ul>
      <p>
        When you delete your account, your data is removed within 30 days.
      </p>

      <h2>8. Your Rights</h2>
      <p>Depending on where you live, you have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Correct inaccurate data.</li>
        <li>Delete your personal data.</li>
        <li>Export your data in a machine-readable format.</li>
        <li>Object to certain types of processing.</li>
        <li>Withdraw consent at any time.</li>
      </ul>
      <p>
        Email us at{" "}
        <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a>{" "}
        with the subject "Privacy request". We respond within 30 days.
      </p>

      <h2>9. Children's Privacy</h2>
      <p>
        The Service is not for children under 16. We do not knowingly collect
        data from anyone under 16. If you think we have, contact us and we will
        delete it.
      </p>

      <h2>10. International Users</h2>
      <p>
        Your data may be processed in countries other than your own, including
        the United States and Nigeria. We comply with applicable data
        protection laws including NDPR (Nigeria) and GDPR (EU) for EU
        residents' data. Where personal data is transferred outside its
        region of origin, we use Standard Contractual Clauses (or other
        appropriate transfer mechanisms) to protect it.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. If we make
        material changes, we will email you and post a notice at least 30 days
        before they take effect.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about this policy? Email us at{" "}
        <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a>.
      </p>
    </LegalLayout>
  );
}
