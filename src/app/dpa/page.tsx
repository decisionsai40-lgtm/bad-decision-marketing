import { LegalLayout } from "@/components/sections/legal-layout";
import { SITE_CONFIG } from "@/lib/utils";

export default function DPAPage() {
  return (
    <LegalLayout title="Data Processing Addendum (DPA)" lastUpdated="July 28, 2026">
      <p>
        This Data Processing Addendum ("DPA") forms part of the{" "}
        {SITE_CONFIG.legalEntityName} ("Bad Decision", "Processor") Terms of
        Service. It applies to the extent you ("Customer", "Controller")
        process personal data through the Service.
      </p>
      <p>
        This DPA reflects the requirements of Article 28 of the EU General Data
        Protection Regulation (GDPR), the UK GDPR, and the Nigeria Data
        Protection Act (NDPA) 2023.
      </p>

      <h2>1. Roles</h2>
      <p>
        You are the Controller. You decide why and how lead data is processed.
        Bad Decision is the Processor. We process lead data only on your
        instructions, to provide the Service to you.
      </p>
      <p>
        You are responsible for having a lawful basis (consent or legitimate
        interest) to process the leads you upload or find, and for honoring
        data subject rights requests.
      </p>

      <h2>2. What We Process</h2>
      <p>We process the following on your behalf:</p>
      <ul>
        <li>Lead data (name, email, phone, company, social links).</li>
        <li>Email content and engagement data (opens, clicks, replies).</li>
        <li>WhatsApp and SMS message content and delivery status.</li>
        <li>AI voice call recordings, transcripts, and outcomes.</li>
        <li>Scheduling and booking data.</li>
        <li>Automation flow definitions and execution logs.</li>
      </ul>
      <p>
        We process this data only to provide the Service. We never use your
        data to train our own models or sell it to anyone.
      </p>

      <h2>3. Sub-Processors</h2>
      <p>
        We use the following sub-processors to deliver the Service. Each is
        bound by a written agreement with equivalent data protection
        obligations.
      </p>
      <table>
        <thead>
          <tr>
            <th>Provider</th>
            <th>Purpose</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Our voice provider</td><td>AI voice calling</td><td>Global</td></tr>
          <tr><td>Our scheduler</td><td>Meeting bookings</td><td>Global</td></tr>
          <tr><td>Our payment processor</td><td>Subscription and add-on charges</td><td>Global</td></tr>
          <tr><td>Our auth provider</td><td>User sign-in</td><td>United States</td></tr>
          <tr><td>Our database provider</td><td>Data storage</td><td>United States / EU</td></tr>
          <tr><td>Our email and messaging providers</td><td>Email, WhatsApp, SMS delivery</td><td>Global</td></tr>
          <tr><td>Our cloud and CDN providers</td><td>Hosting and security</td><td>Global edge</td></tr>
          <tr><td>Our AI provider</td><td>Message drafting and sentiment</td><td>Global</td></tr>
        </tbody>
      </table>
      <p>
        We will notify you at least 30 days before engaging any new
        sub-processor. You may object by emailing us. If we cannot resolve
        your objection, you may terminate with a pro-rata refund.
      </p>

      <h2>4. Data Location</h2>
      <p>
        Your data is stored with our database provider in the United States or
        EU, depending on your region. Backups are kept for 30 days. Your data
        may be transferred to other countries for processing. We use Standard
        Contractual Clauses and the EU-U.S. Data Privacy Framework where
        applicable.
      </p>

      <h2>5. Data Subject Rights</h2>
      <p>
        We help you respond to data subject requests by providing:
      </p>
      <ul>
        <li>A data export tool that produces lead data in CSV or JSON.</li>
        <li>An account deletion tool that permanently removes data within 30 days.</li>
        <li>Reasonable cooperation for complex requests at no charge for the first 5 per year.</li>
      </ul>
      <p>
        We forward any data subject request we receive directly to you for
        response.
      </p>

      <h2>6. Breach Notification</h2>
      <p>
        If a personal data breach happens, we will notify you without undue
        delay and in any case within 72 hours. The notice will describe the
        nature of the breach, the likely consequences, and the measures we are
        taking.
      </p>
      <p>
        We will cooperate with you to meet your own breach notification
        obligations under GDPR Article 33.
      </p>

      <h2>7. Deletion on Termination</h2>
      <p>
        When your subscription ends, we will delete or return all personal data
        within 30 days, at your choice. We may retain billing records for 7
        years for tax compliance, and security logs for 12 months.
      </p>
      <p>
        To request deletion or export, email us at{" "}
        <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a>{" "}
        with the subject "DPA request".
      </p>
    </LegalLayout>
  );
}
