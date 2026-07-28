import Link from "next/link";
import { Search, ShieldCheck, Sparkles, Send, Inbox, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { SITE_CONFIG } from "@/lib/utils";

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="From zero to first reply in 14 days"
        subtitle="There is no setup and you need no extra tools. Just sign up, search, check, write, and send. The full process runs inside one dashboard."
      />

      {/* The 4 steps in detail */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            <StepBlock
              number="01"
              icon={Search}
              title="Find leads"
              description="Pick a search method, type who you want to reach, and we search the live web. Every lead comes with company name, website, email, phone, and social links."
              bullets={[
                "Four search methods you can use today: Companies & Professionals, Ads Running, Ecommerce, and Web Absent.",
                "Each search knows where to look for that type of business.",
                "Up to 2,000 leads per search on the Pro plan.",
                "No repeat results from your past searches.",
                "30-day memory: if you search the same thing twice, the second search is free.",
              ]}
              example={{
                query: "\"Skincare stores in the US using a known ecommerce platform\"",
                result: "Returns 1,247 leads with email, social links, and shop platform details",
              }}
            />

            <StepBlock
              number="02"
              icon={ShieldCheck}
              title="Check emails"
              description="Every email gets a careful check. You only pay for the good ones. Risky emails are flagged instead of being silently included."
              bullets={[
                "Format check to catch typos and fake addresses.",
                "Domain and mail server check to make sure the email can receive mail.",
                "Live mailbox check to confirm the address is real and active.",
                "Throwaway email blocking, because we know which domains are temporary.",
                "Catch-all detection, because some servers say yes to everything.",
                "Role address detection for info@, sales@, support@, and more.",
                "Clear score for each email: Safe, Risky, or Will Bounce.",
              ]}
              example={{
                query: "Check 1,247 emails from the previous step",
                result: "1,089 Safe, 87 Risky, 71 Will Bounce. You only pay for the 1,089 safe ones.",
              }}
            />

            <StepBlock
              number="03"
              icon={Sparkles}
              title="Write messages"
              description="Pick a writing style and we write a short, personal message for each lead. We keep every message short so it looks like you wrote it by hand, not like a computer made it."
              bullets={[
                "Six ways to write messages that work, so you can pick the one that fits your voice.",
                "Each lead gets a unique message that fits their business.",
                "Short enough to look hand-written, long enough to say something real.",
                "Write one at a time, or write messages for your whole campaign at once.",
                "Edit any message before sending, or click to rewrite it.",
                "You get four versions per lead: email subject, email body, social message, and call script.",
              ]}
              example={{
                query: "Write messages for 1,089 leads using one of our six styles",
                result: "1,089 personal emails ready to send, in about 3 minutes.",
              }}
            />

            <StepBlock
              number="04"
              icon={Send}
              title="Send and track"
              description="Connect your email inbox and we slowly build trust for it. We send at the right time and tell you the moment someone replies. Campaigns stop on their own when a person responds."
              bullets={[
                "Trust building for your inbox: it goes from cold to trusted in 7 to 15 days.",
                "Smart switching between all your inboxes so no single one gets overworked.",
                "We never send too many emails from one address in a single day.",
                "Sending windows: we send only during business hours in the lead's time zone.",
                "Reply tracking: every reply is pulled into one inbox for you.",
                "Reply sorting: Interested, Not Interested, Out of Office, Unsubscribe, Bounce.",
                "Auto-stop: any reply stops the rest of the campaign for that lead.",
                "Block list: bounced emails and unsubscribes are never contacted again.",
              ]}
              example={{
                query: "Start a 3-step campaign to 1,000 leads from 5 trusted inboxes",
                result: "Day 1: first emails go out. Day 3: follow-ups. Day 7: final touches. Replies flow into your inbox.",
              }}
            />
          </div>
        </div>
      </section>

      {/* Additional channels */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Reach people wherever they are</h2>
            <p className="mt-4 font-medium text-gray-600">
              Email is just the start. Bad Decision also lets you send campaigns
              through WhatsApp and text message, so you can connect with customers
              on the channels they actually use.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
            <div className="card-premium p-6">
              <h3 className="text-lg font-extrabold text-gray-900">WhatsApp campaigns</h3>
              <p className="mt-2 text-sm font-medium text-gray-600">
                Connect your WhatsApp Business number and send template messages to
                contacts. Track who received, read, and replied to every message,
                all from your dashboard.
              </p>
            </div>
            <div className="card-premium p-6">
              <h3 className="text-lg font-extrabold text-gray-900">Text message campaigns</h3>
              <p className="mt-2 text-sm font-medium text-gray-600">
                Send SMS campaigns to mobile numbers with automatic sender rotation
                for better delivery. Every number is checked before sending, so you
                never pay for invalid contacts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Know exactly what is working
              </h2>
              <p className="mt-4 text-lg font-medium text-gray-300">
                Every send, every reply, and every bounce is tracked so you can see
                your open rate, reply rate, and bounce rate at a glance. No more
                guessing if your campaign is healthy.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Full view of every step: total sent, opened, clicked, replied.",
                  "Quick cards: open rate, reply rate, bounce rate.",
                  "Reply sorting: interested, not interested, out of office, unsubscribe.",
                  "Per-inbox health: trust building status, daily progress, trouble alerts.",
                  "Lead status: pending, step 1 sent, replied, bounced, unsubscribed.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Inbox className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                    <span className="font-medium text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-white/10 bg-white/5 p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Open rate", value: "62%" },
                  { label: "Reply rate", value: "8.4%" },
                  { label: "Bounce rate", value: "0.3%" },
                  { label: "Interested", value: "23" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg bg-white/5 p-4">
                    <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                    <div className="mt-1 text-xs font-medium text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg bg-white/5 p-4">
                <div className="text-sm font-bold text-white">Campaign: Q3 Skincare Outreach</div>
                <div className="mt-3 space-y-2">
                  {[
                    { stage: "Sent", pct: 100 },
                    { stage: "Opened", pct: 62 },
                    { stage: "Replied", pct: 8 },
                    { stage: "Interested", pct: 3 },
                  ].map((s) => (
                    <div key={s.stage}>
                      <div className="flex justify-between text-xs font-medium text-gray-300">
                        <span>{s.stage}</span>
                        <span>{s.pct}%</span>
                      </div>
                      <div className="mt-1 h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full bg-white"
                          style={{ width: `${s.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ready to try the full process?
          </h2>
          <p className="mt-4 text-lg font-medium text-gray-600">
            Start with a free forever plan that needs no credit card. You get 50
            leads, 100 email checks, and 50 message drafts included.
          </p>
          <Link
            href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
            className="btn-primary mt-8 inline-flex"
          >
            Get started free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function StepBlock({
  number,
  icon: Icon,
  title,
  description,
  bullets,
  example,
}: {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
  bullets: string[];
  example: { query: string; result: string };
}) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
      <div>
        <div className="flex items-center gap-4">
          <span className="text-5xl font-extrabold text-gray-200">{number}</span>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
            <Icon className="h-6 w-6 text-gray-900" />
          </div>
        </div>
        <h3 className="mt-4 text-2xl font-extrabold text-gray-900">{title}</h3>
        <p className="mt-2 text-lg font-medium text-gray-600">{description}</p>
        <ul className="mt-6 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm font-medium text-gray-700">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-900" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="card-premium p-6 lg:mt-12">
        <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
          Example
        </div>
        <div className="mt-2 rounded-lg bg-gray-50 p-4">
          <div className="text-sm font-bold text-gray-900">What you type</div>
          <div className="mt-1 text-sm font-medium text-gray-700">{example.query}</div>
        </div>
        <div className="mt-3 rounded-lg bg-gray-900 p-4">
          <div className="text-sm font-bold text-white">What you get</div>
          <div className="mt-1 text-sm font-medium text-gray-200">{example.result}</div>
        </div>
      </div>
    </div>
  );
}
