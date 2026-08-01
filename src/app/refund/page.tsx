import { LegalLayout } from "@/components/sections/legal-layout";
import { SITE_CONFIG } from "@/lib/utils";

export default function RefundPage() {
  return (
    <LegalLayout title="Refund Policy" lastUpdated="January 1, 2025">
      <p>
        We want you to be happy with Bad Decision. This Refund Policy explains
        when and how we issue refunds. It supplements our{" "}
        <a href="/terms">Terms of Service</a> and our{" "}
        <a href="/guarantee">7-day money-back guarantee</a>.
      </p>

      <h2>1. The 7-Day Money-Back Guarantee</h2>
      <p>
        If you cancel your first paid subscription within 7 calendar days of
        the charge and have not sent more than 100 campaign emails, we will
        refund 100 percent of your subscription payment.
      </p>
      <ul>
        <li>Applies to your first paid subscription only (Starter, Growth, or Pro).</li>
        <li>The 7-day window starts when your payment is processed.</li>
        <li>You must have sent fewer than 100 campaign emails.</li>
        <li>Your account must be in good standing.</li>
      </ul>

      <h2>2. Add-Ons</h2>
      <p>
        Add-on subscriptions (WhatsApp, SMS, AI voice, line verification) are
        covered by the same 7-day rule. Cancel within 7 days of the first
        add-on charge and we refund 100 percent.
      </p>
      <p>
        After 7 days, add-ons can be cancelled at any time and run until the
        end of the billing period. No refund is issued for the current period.
      </p>

      <h2>3. Credit Packs</h2>
      <p>
        Credit packs are one-time purchases and are non-refundable once bought.
      </p>
      <p>
        Credits you buy separately never expire, so you can use them whenever
        you need to.
      </p>

      <h2>4. How to Request a Refund</h2>
      <p>
        Email{" "}
        <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a>{" "}
        with the subject "Refund request" and include:
      </p>
      <ul>
        <li>Your account email.</li>
        <li>The date of the charge.</li>
        <li>The amount charged.</li>
        <li>The reason for your request.</li>
      </ul>
      <p>
        We review requests within 2 business days. Approved refunds are
        processed within 5 business days, and appear on your card within 5 to
        10 business days after that.
      </p>

      <h2>5. What Happens to Your Data After Cancellation</h2>
      <p>
        When you cancel, your subscription stays active until the end of the
        current period. After that, your account drops to the Free plan and
        your data stays available for 30 days in case you change your mind.
      </p>
      <p>
        After 30 days, your data is permanently deleted. Billing records are
        kept for 7 years for tax compliance.
      </p>
      <p>
        If you want your data deleted sooner, email us and we will remove it
        within 5 business days.
      </p>
    </LegalLayout>
  );
}
