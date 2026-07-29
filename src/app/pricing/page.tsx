import { Fragment } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, X } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import {
  PRICING_PLANS,
  SITE_CONFIG,
} from "@/lib/utils";
import { PricingCards } from "./_pricing-cards";

const COMPARISON_FEATURES = [
  {
    category: "Email sending",
    rows: [
      { feature: "Email sends / month", values: ["-", "15,000", "Unlimited", "Unlimited"] },
      { feature: "Email inboxes", values: ["1", "Unlimited", "Unlimited", "Unlimited"] },
      { feature: "Warmup emails", values: ["-", "100,000", "Unlimited", "Unlimited"] },
      { feature: "Campaigns", values: ["-", "Unlimited", "Unlimited", "Unlimited"] },
      { feature: "Contact uploads", values: ["-", "15,000", "50,000", "100,000"] },
      { feature: "Campaign sequence steps", values: ["-", "3", "Unlimited", "Unlimited"] },
      { feature: "A/B testing", values: [false, false, true, true] },
      { feature: "One inbox for all replies", values: [false, true, true, true] },
      { feature: "Inbox trust building", values: [false, true, true, true] },
    ],
  },
  {
    category: "Finding leads",
    rows: [
      { feature: "Lead discoveries / month", values: ["50", "1,000", "5,000", "25,000"] },
      { feature: "Companies & Professionals engine", values: [true, true, true, true] },
      { feature: "Ads Running engine", values: [false, true, true, true] },
      { feature: "Ecommerce engine", values: [false, true, true, true] },
      { feature: "Web Absent engine", values: [false, true, true, true] },
      { feature: "Save your searches", values: [true, true, true, true] },
    ],
  },
  {
    category: "Email checking & AI",
    rows: [
      { feature: "Email verifications / month", values: ["40", "750", "3,750", "18,750"] },
      { feature: "AI message drafts / month", values: ["50", "1,000", "5,000", "25,000"] },
      { feature: "Steady AI assistant", values: [false, true, true, true] },
      { feature: "6 writing styles", values: [true, true, true, true] },
      { feature: "Personal message for each lead", values: [true, true, true, true] },
      { feature: "Write many messages at once", values: [false, true, true, true] },
      { feature: "Risk toggle per campaign", values: [true, true, true, true] },
    ],
  },
  {
    category: "Add-ons (separate payment)",
    rows: [
      { feature: "SMS Campaigns ($39/mo)", values: [false, true, true, true] },
      { feature: "WhatsApp Campaigns ($49/mo)", values: [false, false, true, true] },
      { feature: "AI Voice Calling ($49/mo + $0.20/min)", values: [false, false, false, true] },
    ],
  },
  {
    category: "Team & extras",
    rows: [
      { feature: "Workspace + team members", values: [false, false, true, true] },
      { feature: "Developer access and webhooks", values: [false, false, false, true] },
      { feature: "CRM sync (HubSpot, Pipedrive, Salesforce)", values: [false, false, false, true] },
      { feature: "Dedicated success manager", values: [false, false, false, true] },
      { feature: "Priority support", values: [false, false, true, true] },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="One subscription. Everything you need."
        subtitle="Cancel anytime with a 7-day money-back promise on your first paid plan. There are no setup fees, no contracts, and no hidden costs."
      />

      {/* Plan cards + credit packs (client component with billing toggle) */}
      <PricingCards />

      {/* Comparison table */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Full feature comparison
          </h2>
          <p className="mt-2 text-center text-sm font-medium text-gray-600">
            Every feature side by side. No hidden upsells. Yearly billing saves you 2 months.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="py-3 text-left text-sm font-bold text-gray-900">
                    Feature
                  </th>
                  {PRICING_PLANS.map((plan) => (
                    <th
                      key={plan.name}
                      className={`px-4 py-3 text-center text-sm font-extrabold ${
                        plan.highlight ? "text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {plan.name}
                      <div className="text-xs font-medium text-gray-500">
                        {plan.price === 0
                          ? "Free"
                          : `$${plan.price}/mo`}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((group) => (
                  <Fragment key={group.category}>
                    <tr className="bg-gray-100">
                      <td
                        colSpan={5}
                        className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-700"
                      >
                        {group.category}
                      </td>
                    </tr>
                    {group.rows.map((row) => (
                      <tr
                        key={row.feature}
                        className="border-b border-gray-200"
                      >
                        <td className="py-2 text-sm font-medium text-gray-700">
                          {row.feature}
                        </td>
                        {row.values.map((val, i) => (
                          <td key={i} className="px-4 py-2 text-center text-sm">
                            {typeof val === "boolean" ? (
                              val ? (
                                <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
                              ) : (
                                <X className="mx-auto h-4 w-4 text-gray-300" />
                              )
                            ) : (
                              <span className="font-bold text-gray-900">
                                {val}
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add-ons explanation */}
          <div className="mt-6 rounded-xl border-2 border-gray-200 bg-white p-5">
            <h3 className="text-sm font-extrabold text-gray-900">Add-ons at a glance</h3>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-gray-50 p-3">
                <p className="text-sm font-bold text-gray-900">SMS Campaigns</p>
                <p className="mt-0.5 text-xs text-gray-600">$39/mo · 1,000 msgs included</p>
                <p className="mt-1 text-[11px] font-bold text-gray-700">Starter · Growth · Pro</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-3">
                <p className="text-sm font-bold text-gray-900">WhatsApp Campaigns</p>
                <p className="mt-0.5 text-xs text-gray-600">$49/mo · 1,000 msgs included</p>
                <p className="mt-1 text-[11px] font-bold text-gray-700">Growth · Pro</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-3">
                <p className="text-sm font-bold text-gray-900">AI Voice Calling</p>
                <p className="mt-0.5 text-xs text-gray-600">$49/mo · 100 min included</p>
                <p className="mt-1 text-[11px] font-bold text-gray-700">Pro only</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee + CTA */}
      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-gray-900 bg-white p-8">
            <h2 className="text-2xl font-extrabold text-gray-900">
              7-day money-back guarantee
            </h2>
            <p className="mt-2 text-sm font-medium text-gray-600">
              If you cancel within 7 days of your first paid subscription and
              have not sent more than 100 campaign emails, we will refund 100
              percent. No questions asked.{" "}
              <Link href="/refund" className="font-bold text-gray-900 underline">
                See full refund policy
              </Link>
              .
            </p>
            <Link
              href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
              className="mt-6 inline-flex rounded-lg bg-gray-900 px-6 py-3 text-sm font-bold text-white hover:bg-gray-800"
            >
              Get started free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
