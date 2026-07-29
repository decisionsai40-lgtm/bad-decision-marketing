import { LegalLayout } from "@/components/sections/legal-layout";
import { SITE_CONFIG } from "@/lib/utils";

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="July 28, 2026">
      <p>
        This Cookie Policy explains how {SITE_CONFIG.legalEntityName} ("Bad
        Decision", "we") uses cookies and similar technologies on our website
        and dashboard. This policy is part of our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>1. What Cookies Are</h2>
      <p>
        Cookies are small text files placed on your device when you visit a
        website. They let the site remember your session, your preferences, and
        how you use it.
      </p>
      <p>
        We also use browser storage (local storage and session storage) for
        things like your theme choice and in-progress form data.
      </p>

      <h2>2. Essential Cookies</h2>
      <p>
        These cookies are required for the Service to work. Without them, you
        cannot log in or stay signed in. They cannot be turned off.
      </p>
      <ul>
        <li><strong>Auth session:</strong> keeps you signed in. Duration: 7 days, refreshed on each login.</li>
        <li><strong>CSRF token:</strong> protects forms from cross-site request forgery. Duration: session.</li>
        <li><strong>Cookie consent:</strong> remembers your cookie choices. Duration: 12 months.</li>
      </ul>

      <h2>3. Analytics Cookies</h2>
      <p>
        These cookies help us understand how the Service is used so we can
        improve it. They are optional and only set with your consent.
      </p>
      <ul>
        <li><strong>Product analytics:</strong> tracks page views and feature usage. Duration: 12 months.</li>
        <li><strong>Error tracking:</strong> captures JavaScript errors for debugging. Anonymized. Duration: session.</li>
      </ul>
      <p>
        We do not use advertising cookies, social media cookies, or
        cross-site tracking cookies.
      </p>

      <h2>4. How to Disable Cookies</h2>
      <p>
        On your first visit to the dashboard, we show a cookie banner. You can
        accept all, accept only essential, or customize. Change your choice any
        time in Settings.
      </p>
      <p>You can also control cookies in your browser:</p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
        <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>
      <p>
        Blocking essential cookies will prevent you from logging in or using
        the Service.
      </p>

      <h2>5. Third-Party Cookies</h2>
      <p>
        Some of our providers set their own cookies when you interact with
        them. We do not control their cookies. Review their policies for
        details:
      </p>
      <ul>
        <li><strong>Payment processor:</strong> sets session cookies during checkout.</li>
        <li><strong>Auth provider:</strong> sets authentication cookies when you sign in.</li>
        <li><strong>CDN and security provider:</strong> sets a security cookie for bot detection.</li>
      </ul>

      <h2>6. Updates to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time. If we add new
        cookies or change how we use existing ones, we will update this page
        and notify you by email if the change is material.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions about cookies? Email{" "}
        <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a>.
      </p>
    </LegalLayout>
  );
}
