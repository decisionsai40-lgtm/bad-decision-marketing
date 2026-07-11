import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/legal-layout";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Bad Decision refund policy: 7-day money-back guarantee on first paid subscriptions, no refunds on consumed credit top-ups, pro-rata refunds if we discontinue the Service.",
  alternates: { canonical: "/refund" },
};

export default function RefundPage() {
  return (
    <LegalLayout title="Refund Policy" lastUpdated="July 9, 2026">
      <p>
        We want you to be happy with Bad Decision. This Refund Policy explains when and how
        we issue refunds. It supplements our <a href="/terms">Terms of Service</a> and our{" "}
        <a href="/guarantee">7-day money-back guarantee</a>.
      </p>

      <h2>1. The 7-Day Money-Back Guarantee</h2>
      <p>
        If you cancel your first paid subscription within 7 calendar days of the charge and
        have sent fewer than 100 campaign emails through the Service, we will refund 100%
        of your subscription payment.
      </p>
      <p>
        <strong>Eligibility:</strong>
      </p>
      <ul>
        <li>Applies to your first paid subscription only (Starter, Growth, or Pro).</li>
        <li>The 7-day window starts the moment your payment is processed by Flutterwave.</li>
        <li>You must have sent fewer than 100 campaign emails.</li>
        <li>Your account must be in good standing (no abuse, no ToS violations).</li>
      </ul>
      <p>
        <strong>How to claim:</strong> Email{" "}
        <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a> with
        subject "Refund request" and your account email. We process refunds within 5
        business days. The refund appears on your card within 5-10 business days after
        processing, depending on your bank.
      </p>

      <h2>2. Subscriptions Past the 7-Day Window</h2>
      <p>
        If you cancel after the 7-day window, your subscription remains active until the end
        of the current billing period, then downgrades to Free. No refund is issued for the
        current period — you keep access to paid features until the period ends.
      </p>
      <p>
        Example: You subscribe to Growth ($97/mo) on July 1. You cancel on July 20. You keep
        Growth access until July 31. On August 1, your account downgrades to Free. No
        refund is issued.
      </p>

      <h2>3. Annual Subscriptions</h2>
      <p>
        Annual subscriptions are eligible for the same 7-day money-back guarantee. After the
        7-day window, annual subscriptions are non-refundable but you keep access for the
        full year. You can cancel auto-renewal at any time to prevent next year's charge.
      </p>
      <p>
        If you cancel an annual subscription mid-year and request a pro-rata refund, we will
        review the request on a case-by-case basis. Pro-rata refunds are not guaranteed but
        may be issued in cases of documented Service unavailability or material breach by
        Bad Decision.
      </p>

      <h2>4. Credit Top-Up Purchases</h2>
      <p>
        Credits are a consumable product. Once credits are consumed (used for a lead
        generation, email verification, or AI drafting task), they cannot be refunded.
      </p>
      <p>
        If you purchase credit top-ups and do not consume them, you can request a refund
        within 14 days of purchase, provided:
      </p>
      <ul>
        <li>The credits have not been used.</li>
        <li>Your account is in good standing.</li>
      </ul>
      <p>
        After 14 days, unused credit top-ups are non-refundable. Unused credits expire 12
        months after purchase.
      </p>

      <h2>5. Free Plan</h2>
      <p>
        The Free plan costs $0, so no refunds apply. You can stop using the Free plan at any
        time by deleting your account.
      </p>

      <h2>6. Account Suspension or Termination</h2>
      <p>
        If we suspend or terminate your account for violation of our Terms of Service or
        Acceptable Use Policy, you are not entitled to a refund of any subscription fees or
        unused credits. Forfeiture of fees is a consequence of breach, not a penalty.
      </p>
      <p>
        If we terminate your account for our own business reasons (e.g. discontinuing the
        Service), we will issue a pro-rata refund for the unused portion of your
        subscription.
      </p>

      <h2>7. Service Discontinuation</h2>
      <p>
        If we discontinue the Service entirely, we will:
      </p>
      <ul>
        <li>Notify all users by email and via a prominent notice on our website at least 60 days before shutdown.</li>
        <li>Provide a data export tool so you can download all your lead data, campaign data, and contact lists.</li>
        <li>Issue pro-rata refunds for unused subscription periods.</li>
        <li>Refund unused credit top-ups purchased within the prior 6 months.</li>
      </ul>

      <h2>8. Failed Payments and Chargebacks</h2>
      <p>
        If your subscription payment fails, we will retry 3 times over 7 days. If all retries
        fail, your subscription is downgraded to Free and you lose access to paid features.
        No refund is owed (because no payment was collected).
      </p>
      <p>
        If you initiate a chargeback with your bank without first contacting us at{" "}
        <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a>, we
        will:
      </p>
      <ul>
        <li>Attempt to resolve the issue directly with you.</li>
        <li>Provide evidence of your subscription and usage to your bank.</li>
        <li>Suspend your account pending resolution of the chargeback.</li>
      </ul>
      <p>
        Fraudulent chargebacks (where you used the Service and then claimed you didn't) will
        result in permanent account termination and may be reported to relevant authorities.
      </p>

      <h2>9. Currency and Refund Method</h2>
      <p>
        All refunds are issued in the same currency as the original payment, to the original
        payment method. We cannot refund to a different card or bank account.
      </p>
      <p>
        If your original payment method is no longer valid (e.g. expired card), Flutterwave
        Payments will work with your bank to issue the refund to your new card on file with
        the bank.
      </p>

      <h2>10. Refund Processing Time</h2>
      <ul>
        <li>
          <strong>Approval:</strong> We review refund requests within 2 business days.
        </li>
        <li>
          <strong>Processing:</strong> Approved refunds are processed within 5 business
          days.
        </li>
        <li>
          <strong>Bank processing:</strong> Refunds appear on your card within 5-10 business
          days after processing (varies by bank and country).
        </li>
      </ul>
      <p>
        Total time from request to money back in your account: typically 7-17 business days.
      </p>

      <h2>11. Exceptions and Edge Cases</h2>
      <ul>
        <li>
          <strong>Upgrade / downgrade mid-cycle:</strong> If you upgrade mid-cycle, we
          prorate the difference and charge immediately. If you downgrade mid-cycle, no
          refund is issued — you keep the higher tier until the end of the period.
        </li>
        <li>
          <strong>Duplicate charges:</strong> If you are accidentally charged twice for the
          same subscription, contact us immediately. We will refund the duplicate within 2
          business days.
        </li>
        <li>
          <strong>Promotional / discounted subscriptions:</strong> Refunds on discounted
          subscriptions are calculated based on the amount actually paid, not the regular
          price.
        </li>
        <li>
          <strong>Trial conversions:</strong> If you forget to cancel a free trial and are
          charged, you can request a refund within 7 days of the trial conversion, subject
          to the 100-email cap in Section 1.
        </li>
      </ul>

      <h2>12. Contact Us</h2>
      <p>
        To request a refund or ask about this policy, email{" "}
        <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a> with
        subject "Refund request" and include:
      </p>
      <ul>
        <li>Your account email</li>
        <li>The date of the charge</li>
        <li>The amount charged</li>
        <li>The reason for the refund request</li>
      </ul>
      <p>
        We will respond within 2 business days. If you do not hear from us, check your spam
        folder, then email again — we reply to every legitimate refund request.
      </p>
    </LegalLayout>
  );
}
