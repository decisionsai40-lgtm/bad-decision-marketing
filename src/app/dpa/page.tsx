import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/legal-layout";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Data Processing Addendum (DPA)",
  description:
    "Data Processing Addendum between Bad Decision and customers who process personal data through the Service. Incorporates GDPR Article 28 requirements and Standard Contractual Clauses.",
  alternates: { canonical: "/dpa" },
};

export default function DPAPage() {
  return (
    <LegalLayout title="Data Processing Addendum (DPA)" lastUpdated="July 9, 2026">
      <p>
        This Data Processing Addendum ("DPA") forms part of the{" "}
        {SITE_CONFIG.legalEntityName} ("Bad Decision", "Processor") Terms of Service and is
        incorporated by reference. It applies to the extent you ("Customer", "Controller")
        process personal data through the Service.
      </p>
      <p>
        This DPA reflects the requirements of Article 28 of the EU General Data Protection
        Regulation (GDPR), the UK GDPR, and the Nigeria Data Protection Act (NDPA) 2023.
      </p>

      <h2>1. Definitions</h2>
      <ul>
        <li>
          <strong>"Controller"</strong> means the entity that determines the purposes and
          means of processing personal data. This is you, the Customer.
        </li>
        <li>
          <strong>"Processor"</strong> means the entity that processes personal data on
          behalf of the Controller. This is Bad Decision.
        </li>
        <li>
          <strong>"Personal Data"</strong> means any information relating to an identified
          or identifiable natural person, as defined in GDPR Article 4(1).
        </li>
        <li>
          <strong>"Lead Data"</strong> means Personal Data of third parties (your leads)
          that you process through the Service.
        </li>
        <li>
          <strong>"Sub-processor"</strong> means a third party engaged by the Processor to
          process Personal Data on behalf of the Controller.
        </li>
        <li>
          <strong>"Supervisory Authority"</strong> means an independent public authority
          established by an EU Member State pursuant to GDPR Article 51.
        </li>
        <li>
          <strong>"Standard Contractual Clauses" (SCCs)</strong> means the standard data
          protection clauses for the transfer of personal data to third countries pursuant
          to GDPR, as approved by the European Commission.
        </li>
      </ul>

      <h2>2. Roles and Scope</h2>
      <p>
        <strong>2.1 Roles:</strong> The Customer is the Controller (or Processor acting on
        behalf of a third-party Controller). Bad Decision is the Processor. The parties
        acknowledge and agree that with respect to Lead Data, the Customer acts as the
        Controller and Bad Decision acts as the Processor.
      </p>
      <p>
        <strong>2.2 Scope:</strong> This DPA applies to Bad Decision's processing of
        Personal Data on behalf of the Customer in connection with the Service, as described
        in the <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Service</a>.
      </p>
      <p>
        <strong>2.3 Customer Responsibilities:</strong> The Customer is responsible for:
      </p>
      <ul>
        <li>Ensuring they have a lawful basis (consent, legitimate interest, etc.) to process Lead Data.</li>
        <li>Providing required privacy notices to data subjects (your leads).</li>
        <li>Honoring data subject rights requests (access, deletion, opt-out).</li>
        <li>Ensuring Lead Data is accurate and lawfully collected.</li>
        <li>Compliance with applicable data protection laws (GDPR, CCPA, NDPA, etc.).</li>
      </ul>

      <h2>3. Processing Details</h2>
      <p>
        <strong>3.1 Subject Matter:</strong> The subject matter of the processing is the
        provision of the Service (lead generation, email verification, AI outreach drafting,
        cold email campaign management) to the Customer.
      </p>
      <p>
        <strong>3.2 Duration of Processing:</strong> The processing will continue for the
        duration of the Customer's subscription to the Service, plus the retention period
        described in Section 5 of the Privacy Policy.
      </p>
      <p>
        <strong>3.3 Nature and Purpose:</strong> Bad Decision processes Personal Data for
        the sole purpose of providing the Service to the Customer, including:
      </p>
      <ul>
        <li>Storing Lead Data (contact information, company information, social profiles).</li>
        <li>Verifying email addresses through third-party verification providers.</li>
        <li>Generating AI-drafted outreach messages using DeepSeek.</li>
        <li>Sending cold email campaigns through Customer-supplied SMTP mailboxes.</li>
        <li>Tracking email opens, clicks, replies, and bounces.</li>
        <li>Providing analytics dashboards and reporting.</li>
      </ul>
      <p>
        <strong>3.4 Types of Personal Data:</strong> The Personal Data processed includes:
      </p>
      <ul>
        <li>Business contact information (name, email, phone, job title)</li>
        <li>Company information (name, website, industry, location, tech stack)</li>
        <li>Social media profile URLs (LinkedIn, Twitter, Instagram)</li>
        <li>Email engagement data (opens, clicks, replies)</li>
        <li>Customer account information (name, email, payment method last 4)</li>
      </ul>
      <p>
        <strong>3.5 Categories of Data Subjects:</strong> The data subjects are the leads
        the Customer processes through the Service (typically B2B contacts) and the
        Customer's own employees / team members who use the Service.
      </p>

      <h2>4. Processor Obligations</h2>
      <p>Bad Decision agrees to:</p>
      <ul>
        <li>
          <strong>4.1 Process Personal Data only on documented instructions from the
          Customer</strong>, including with regard to transfers of Personal Data to a third
          country, unless required to do so by law. Bad Decision will inform the Customer if
          it receives a legally binding request to process Personal Data in a way that
          conflicts with the Customer's instructions.
        </li>
        <li>
          <strong>4.2 Ensure that persons authorized to process Personal Data</strong> are
          bound by confidentiality obligations.
        </li>
        <li>
          <strong>4.3 Implement appropriate technical and organizational security measures</strong>{" "}
          as described in Section 7 of the Privacy Policy, taking into account the state of
          the art, the costs of implementation, and the nature, scope, context, and purposes
          of processing.
        </li>
        <li>
          <strong>4.4 Not engage another processor (sub-processor) without prior specific or
          general written authorization</strong> from the Customer. Where Bad Decision
          engages a new sub-processor, we will notify the Customer at least 30 days in
          advance, giving the Customer the opportunity to object.
        </li>
        <li>
          <strong>4.5 Assist the Customer in responding to data subject rights requests</strong>{" "}
          (access, rectification, erasure, etc.) by providing tools (data export,
          account deletion) and reasonable cooperation.
        </li>
        <li>
          <strong>4.6 Assist the Customer in meeting security breach notification
          obligations</strong> under GDPR Article 33. Bad Decision will notify the Customer
          of a Personal Data breach within 72 hours of becoming aware of it.
        </li>
        <li>
          <strong>4.7 Assist the Customer with Data Protection Impact Assessments (DPIAs)</strong>{" "}
          and prior consultation with Supervisory Authorities, where required.
        </li>
        <li>
          <strong>4.8 Delete or return all Personal Data</strong> to the Customer after the
          end of the Service, at the Customer's choice. Bad Decision will delete Personal
          Data within 30 days of contract termination, unless retention is required by law.
        </li>
        <li>
          <strong>4.9 Make available all information necessary to demonstrate compliance</strong>{" "}
          with Article 28 obligations, and allow for and contribute to audits conducted by
          the Customer or an auditor mandated by the Customer (not more than once per year,
          with reasonable notice, during business hours, and subject to confidentiality).
        </li>
      </ul>

      <h2>5. Sub-Processors</h2>
      <p>
        Bad Decision currently uses the following sub-processors to provide the Service.
        Each sub-processor is bound by a written agreement that imposes data protection
        obligations equivalent to this DPA.
      </p>
      <table>
        <thead>
          <tr>
            <th>Sub-processor</th>
            <th>Purpose</th>
            <th>Location</th>
            <th>Transfer mechanism</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>WorkOS</td>
            <td>Authentication</td>
            <td>United States</td>
            <td>SCCs</td>
          </tr>
          <tr>
            <td>Supabase</td>
            <td>Database hosting</td>
            <td>United States / EU</td>
            <td>SCCs / DPF</td>
          </tr>
          <tr>
            <td>Amazon Web Services</td>
            <td>Cloud infrastructure</td>
            <td>Multiple regions</td>
            <td>SCCs / DPF</td>
          </tr>
          <tr>
            <td>Vercel</td>
            <td>Frontend hosting</td>
            <td>Global edge</td>
            <td>SCCs / DPF</td>
          </tr>
          <tr>
            <td>Dodo Payments</td>
            <td>Payment processing</td>
            <td>Global</td>
            <td>SCCs / DPF</td>
          </tr>
          <tr>
            <td>Resend</td>
            <td>Transactional email</td>
            <td>United States</td>
            <td>SCCs / DPF</td>
          </tr>
          <tr>
            <td>Cloudflare</td>
            <td>CDN / DDoS protection</td>
            <td>Global edge</td>
            <td>SCCs / DPF</td>
          </tr>
          <tr>
            <td>DeepSeek</td>
            <td>AI drafting</td>
            <td>China</td>
            <td>SCCs</td>
          </tr>
          <tr>
            <td>MyEmailVerifier / BillionVerify / Reoon / MailboxValidator</td>
            <td>Email verification</td>
            <td>Various</td>
            <td>SCCs</td>
          </tr>
          <tr>
            <td>Sentry</td>
            <td>Error tracking</td>
            <td>United States</td>
            <td>SCCs / DPF</td>
          </tr>
          <tr>
            <td>PostHog (optional)</td>
            <td>Product analytics</td>
            <td>United States / EU</td>
            <td>SCCs / DPF</td>
          </tr>
        </tbody>
      </table>
      <p>
        We will update this list at{" "}
        <a href="/dpa#sub-processors">baddecision.app/dpa</a> and notify you by email at
        least 30 days before engaging any new sub-processor. You may object to a new
        sub-processor by emailing{" "}
        <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a> within
        30 days of notification. If we cannot resolve your objection, you may terminate
        your subscription with a pro-rata refund.
      </p>

      <h2>6. International Data Transfers</h2>
      <p>
        Bad Decision may transfer Personal Data to sub-processors located outside the EEA,
        UK, or Switzerland. Such transfers are subject to:
      </p>
      <ul>
        <li>
          <strong>Standard Contractual Clauses (SCCs)</strong> approved by the European
          Commission (Decision 2021/914), as amended from time to time.
        </li>
        <li>
          <strong>EU-U.S. Data Privacy Framework (DPF)</strong> for transfers to U.S.
          sub-processors that are DPF-certified.
        </li>
        <li>
          <strong>UK International Data Transfer Addendum</strong> for transfers from the
          UK.
        </li>
        <li>
          <strong>Supplementary measures</strong> (encryption, pseudonymization) where
          required by the Schrems II decision.
        </li>
      </ul>

      <h2>7. Security Measures</h2>
      <p>
        Bad Decision implements the technical and organizational measures described in
        Section 7 of the Privacy Policy, including:
      </p>
      <ul>
        <li>Encryption in transit (TLS 1.2+) and at rest (AES-256)</li>
        <li>Application-level encryption for secrets (AES-256-GCM)</li>
        <li>Role-based access control with least-privilege principle</li>
        <li>Audit logging of all production access</li>
        <li>Automated dependency scanning and quarterly security reviews</li>
        <li>Incident response plan with 72-hour breach notification</li>
        <li>Regular data backups with 30-day retention</li>
      </ul>

      <h2>8. Personal Data Breach</h2>
      <p>
        Bad Decision will notify the Customer of a Personal Data Breach without undue delay
        and in any case within 72 hours of becoming aware of it. The notification will
        include:
      </p>
      <ul>
        <li>Description of the nature of the breach</li>
        <li>Name and contact details of the data protection officer or contact point</li>
        <li>Likely consequences of the breach</li>
        <li>Measures taken or proposed to address the breach and mitigate its effects</li>
      </ul>
      <p>
        Bad Decision will cooperate with the Customer in meeting the Customer's breach
        notification obligations under GDPR Article 33.
      </p>

      <h2>9. Data Subject Rights</h2>
      <p>
        Bad Decision will assist the Customer in fulfilling data subject rights requests
        (access, rectification, erasure, restriction, portability, objection) by:
      </p>
      <ul>
        <li>Providing a data export tool that produces Lead Data in CSV / JSON format.</li>
        <li>Providing an account deletion tool that permanently deletes Lead Data within 30 days.</li>
        <li>Providing reasonable cooperation for complex requests (no charge for the first 5 requests per year; reasonable fees for additional requests).</li>
        <li>Forwarding any data subject requests received directly by Bad Decision to the Customer for response.</li>
      </ul>

      <h2>10. Audits</h2>
      <p>
        The Customer may audit Bad Decision's compliance with this DPA, subject to:
      </p>
      <ul>
        <li>No more than one audit per 12-month period.</li>
        <li>At least 30 days' written notice.</li>
        <li>Conducted during business hours with minimal disruption to Bad Decision's operations.</li>
        <li>Conducted by the Customer's internal audit team or a third-party auditor bound by confidentiality (not a competitor of Bad Decision).</li>
        <li>Audit report shared with Bad Decision before publication, with reasonable time to respond.</li>
      </ul>
      <p>
        Alternatively, Bad Decision will provide an annual SOC 2 Type II report (once
        available) or equivalent third-party attestation, which the Customer may rely on in
        lieu of conducting its own audit.
      </p>

      <h2>11. Term and Termination</h2>
      <p>
        This DPA is effective as of the date the Customer accepts the Terms of Service and
        remains in effect until termination of the Service. Upon termination, Bad Decision
        will delete or return all Personal Data within 30 days, at the Customer's choice,
        subject to retention required by law.
      </p>

      <h2>12. Contact</h2>
      <p>
        For questions about this DPA, to object to a sub-processor, or to request an audit,
        contact us at{" "}
        <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a> with
        subject "DPA request".
      </p>
    </LegalLayout>
  );
}
