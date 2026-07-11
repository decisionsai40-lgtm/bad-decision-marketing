import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/legal-layout";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Bad Decision uses cookies and similar technologies. Essential cookies for authentication, optional analytics cookies, no advertising cookies. Opt out of analytics at any time.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="July 9, 2026">
      <p>
        This Cookie Policy explains how {SITE_CONFIG.legalEntityName} ("Bad Decision", "we",
        "us") uses cookies and similar technologies on our website at{" "}
        <a href={SITE_CONFIG.url}>{SITE_CONFIG.domain}</a> and our dashboard at
        dashboard.{SITE_CONFIG.domain} (collectively, the "Service"). This policy is part
        of our <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They
        allow the website to remember your actions and preferences over time, so you don't
        have to re-enter information every time you visit.
      </p>
      <p>
        We use the following types of technologies:
      </p>
      <ul>
        <li>
          <strong>HTTP cookies:</strong> Small files stored in your browser.
        </li>
        <li>
          <strong>Local storage and session storage:</strong> Browser storage for things
          like your current theme (light/dark) and in-progress form data.
        </li>
        <li>
          <strong>Pixel tags and web beacons:</strong> Tiny transparent images used to
          track email opens and page views.
        </li>
      </ul>

      <h2>2. Types of Cookies We Use</h2>

      <h3>2.1 Strictly Necessary Cookies</h3>
      <p>
        These cookies are essential for the Service to function. Without them, you cannot
        log in, maintain your session, or access protected features. They cannot be turned
        off.
      </p>
      <ul>
        <li>
          <strong>Authentication cookies:</strong> Set when you log in. Used by WorkOS to
          maintain your session across pages. Duration: 7 days (refreshed on each login).
        </li>
        <li>
          <strong>CSRF token cookies:</strong> Used to prevent cross-site request forgery
          attacks on form submissions. Duration: session.
        </li>
        <li>
          <strong>Cookie consent cookie:</strong> Remembers your cookie preferences.
          Duration: 12 months.
        </li>
      </ul>

      <h3>2.2 Functional Cookies</h3>
      <p>
        These cookies enable enhanced functionality and personalization. They are optional.
      </p>
      <ul>
        <li>
          <strong>Theme preference:</strong> Remembers your light/dark theme choice.
          Duration: 12 months.
        </li>
        <li>
          <strong>Language preference:</strong> Remembers your selected language (if we
          offer multi-language support in the future). Duration: 12 months.
        </li>
        <li>
          <strong>Recently viewed leads:</strong> Stores IDs of leads you recently viewed
          for the command palette. Duration: 30 days.
        </li>
      </ul>

      <h3>2.3 Analytics Cookies</h3>
      <p>
        These cookies help us understand how visitors use the Service, so we can improve
        it. They are optional and only set with your consent.
      </p>
      <ul>
        <li>
          <strong>PostHog analytics:</strong> Tracks page views, feature usage, and
          conversion funnels. Duration: 12 months. Opt-out available.
        </li>
        <li>
          <strong>Sentry error tracking:</strong> Captures JavaScript errors for debugging.
          Anonymized. Duration: session.
        </li>
      </ul>

      <h3>2.4 Email Tracking Pixels</h3>
      <p>
        When you send cold email campaigns through Bad Decision, we may include a 1x1
        transparent pixel in the email body to track opens. This pixel sets a cookie on the
        recipient's email client (if their client supports images). Recipients can disable
        image loading in their email client to opt out.
      </p>
      <p>
        <strong>Note:</strong> Plain-text cold emails (the recommended format for cold
        outreach) do not include tracking pixels. Open tracking is only available on HTML
        emails, which are not recommended for cold outreach due to deliverability concerns.
      </p>

      <h3>2.5 Cookies We Do NOT Use</h3>
      <ul>
        <li>
          <strong>Advertising cookies:</strong> We do not use Google Ads, Facebook Pixel, or
          any other advertising network cookies.
        </li>
        <li>
          <strong>Third-party social media cookies:</strong> We do not embed social media
          widgets that set tracking cookies (no Twitter embeds, no Facebook Like buttons).
        </li>
        <li>
          <strong>Cross-site tracking cookies:</strong> We do not track you across other
          websites.
        </li>
      </ul>

      <h2>3. Third-Party Cookies</h2>
      <p>
        Some third-party services we use may set their own cookies when you interact with
        them:
      </p>
      <ul>
        <li>
          <strong>WorkOS:</strong> Sets authentication cookies when you log in. See{" "}
          <a href="https://workos.com/privacy" target="_blank" rel="noopener noreferrer">
            WorkOS Privacy Policy
          </a>
          .
        </li>
        <li>
          <strong>Flutterwave:</strong> Sets session cookies during checkout. See{" "}
          <a href="https://flutterwave.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            Flutterwave Privacy Policy
          </a>
          .
        </li>
        <li>
          <strong>Vercel:</strong> May set analytics cookies on our marketing site (if
          enabled). See{" "}
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            Vercel Privacy Policy
          </a>
          .
        </li>
        <li>
          <strong>Cloudflare:</strong> Sets a security cookie (__cfduid) for bot detection.
          See{" "}
          <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">
            Cloudflare Privacy Policy
          </a>
          .
        </li>
      </ul>
      <p>
        We do not control these third-party cookies. Review their privacy policies for
        details.
      </p>

      <h2>4. Cookie Duration</h2>
      <ul>
        <li>
          <strong>Session cookies:</strong> Deleted when you close your browser.
        </li>
        <li>
          <strong>Persistent cookies:</strong> Remain on your device for the duration
          listed above (typically 7 days to 12 months).
        </li>
      </ul>

      <h2>5. Managing Cookies</h2>

      <h3>5.1 In-Service Cookie Preferences</h3>
      <p>
        On your first visit to dashboard.{SITE_CONFIG.domain}, we show a cookie consent
        banner. You can choose to accept all cookies, accept only strictly necessary
        cookies, or customize your preferences. You can change your preferences at any time
        in Settings → Privacy → Cookie Preferences.
      </p>

      <h3>5.2 Browser Controls</h3>
      <p>
        You can also control cookies through your browser settings. Most browsers allow you
        to:
      </p>
      <ul>
        <li>View all cookies currently stored on your device.</li>
        <li>Delete individual or all cookies.</li>
        <li>Block all cookies or only third-party cookies.</li>
        <li>Set preferences for specific websites.</li>
      </ul>
      <p>
        Instructions for popular browsers:
      </p>
      <ul>
        <li>
          <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
            Google Chrome
          </a>
        </li>
        <li>
          <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">
            Apple Safari
          </a>
        </li>
        <li>
          <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
            Microsoft Edge
          </a>
        </li>
      </ul>
      <p>
        <strong>Note:</strong> Blocking strictly necessary cookies will prevent you from
        logging in or using the Service.
      </p>

      <h3>5.3 Opt-Out of Analytics</h3>
      <p>
        If you do not want us to collect analytics data, you can:
      </p>
      <ul>
        <li>Reject analytics cookies in the cookie consent banner.</li>
        <li>Disable analytics in Settings → Privacy → Cookie Preferences.</li>
        <li>Install a content blocker like uBlock Origin or Privacy Badger in your browser.</li>
        <li>Enable "Do Not Track" (DNT) in your browser — we respect this signal.</li>
      </ul>

      <h2>6. Cookie List</h2>
      <p>Here is a complete list of cookies we set, with their purpose and duration:</p>
      <table>
        <thead>
          <tr>
            <th>Cookie name</th>
            <th>Purpose</th>
            <th>Type</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>wos-session</code></td>
            <td>Authentication session (WorkOS)</td>
            <td>Strictly necessary</td>
            <td>7 days</td>
          </tr>
          <tr>
            <td><code>csrf_token</code></td>
            <td>CSRF protection</td>
            <td>Strictly necessary</td>
            <td>Session</td>
          </tr>
          <tr>
            <td><code>cookie_consent</code></td>
            <td>Stores your cookie preferences</td>
            <td>Strictly necessary</td>
            <td>12 months</td>
          </tr>
          <tr>
            <td><code>theme</code></td>
            <td>Light/dark theme choice</td>
            <td>Functional</td>
            <td>12 months</td>
          </tr>
          <tr>
            <td><code>ld_active_view</code></td>
            <td>Last viewed dashboard section</td>
            <td>Functional</td>
            <td>30 days</td>
          </tr>
          <tr>
            <td><code>ld_recent_leads</code></td>
            <td>Recently viewed leads for command palette</td>
            <td>Functional</td>
            <td>30 days</td>
          </tr>
          <tr>
            <td><code>ph_* (PostHog)</code></td>
            <td>Analytics</td>
            <td>Analytics (opt-in)</td>
            <td>12 months</td>
          </tr>
        </tbody>
      </table>

      <h2>7. Updates to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time. If we add new cookies or change
        how we use existing ones, we will update this page and notify you by email if the
        change is material.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        Questions about cookies? Email{" "}
        <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a>.
      </p>
    </LegalLayout>
  );
}
