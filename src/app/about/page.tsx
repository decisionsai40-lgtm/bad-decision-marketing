import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "We built one platform to find, reach, and book customers — replacing five tools that do not talk to each other.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="We got tired of making bad decisions"
        subtitle="Bad Decision is one platform to find, reach, and book customers. We built what we wished existed."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose-legal">
            <p>
              Every sales person we know pays five companies to find one
              customer. The lists bounce, the tools do not talk to each other,
              and the emails land in spam. We lived this. We bought the lists.
              We paid for the tools. We kept making the same bad decision.
            </p>
            <p>
              So we built the opposite. Bad Decision finds the businesses who
              need what you sell, checks every email, writes the message, sends
              it across email and WhatsApp and SMS and phone, and books the
              meeting. One subscription instead of five tools. Priced for any
              country, with global payments and lead sources that work
              everywhere.
            </p>
            <p>
              We will never sell your data. We will never send from our
              servers. We will always be honest about what works and what does
              not in cold outreach. If you are tired of paying for scattered
              tools, we built this for you.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
              className="btn-primary inline-flex"
            >
              Start free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
