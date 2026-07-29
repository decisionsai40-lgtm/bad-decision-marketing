import Link from "next/link";
import {
  Search,
  ShieldCheck,
  Sparkles,
  Send,
  Inbox,
  ArrowRight,
  Calendar,
  Phone,
  MessageSquare,
  Bot,
  Workflow,
  BarChart3,
} from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { SITE_CONFIG } from "@/lib/utils";

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="From I need customers to meetings booked"
        subtitle="The whole journey lives in one dashboard. You search for the right people, check their emails, write the message, send it across the channels they use, and book the meeting when they are ready. No extra tools, no guessing, no copy-paste between tabs."
      />

      {/* The 4 steps in detail */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            <StepBlock
              number="01"
              icon={Search}
              title="Find the right people"
              description="You tell us who you want to reach and we search the live web. Every lead comes with company name, website, email, phone, and social links, ready to use the moment you find them."
              bullets={[
                "Four search engines cover different kinds of businesses: companies and pros, businesses running ads, online stores, and businesses with no website.",
                "Type a query like real estate agents in Lagos or skincare stores in the United States, pick a country, and we bring back fresh leads in minutes.",
                "Every lead includes email, phone, website, industry, city, and tech stack, so you know who you are reaching before you reach out.",
                "Re-run the same search within 30 days and it is free, because we cache the results for you.",
                "Export any search to a spreadsheet and take your leads anywhere you want.",
              ]}
              example={{
                query: '"Skincare stores in the United States using a known online store platform"',
                result: "1,247 leads with email, social links, and the shop platform each one runs on.",
              }}
            />

            <StepBlock
              number="02"
              icon={ShieldCheck}
              title="Check every email before you send"
              description="Every email gets a careful check so you know it is real. You only pay for the good ones, and risky addresses are flagged instead of being silently included."
              bullets={[
                "Format check catches typos and obvious fakes.",
                "Domain and mail server check confirms the address can actually receive mail.",
                "Live mailbox check confirms the inbox is real and active, not a dead end.",
                "Throwaway email blocking, because we know which domains are temporary.",
                "Role address detection for info@, sales@, support@, and other shared inboxes.",
                "A clear answer for every email: safe to send, risky, or will bounce.",
                "Anyone who bounces is auto-added to your block list and never contacted again.",
              ]}
              example={{
                query: "Check 1,247 emails from the previous step.",
                result: "1,089 safe, 87 risky, 71 will bounce. You only send to the 1,089 safe ones.",
              }}
            />

            <StepBlock
              number="03"
              icon={Sparkles}
              title="Write the message in your voice"
              description="Pick a writing style and we draft a short, personal message for each lead. We keep every message short so it looks like you wrote it by hand, not like a computer made it."
              bullets={[
                "Six proven writing styles to choose from, each based on a famous copywriter.",
                "Every lead gets a unique email, social message, and call script that fits their business.",
                "Short enough to look hand-written, long enough to say something real.",
                "Draft one lead at a time, or write messages for your whole list in one click.",
                "Edit any message before sending, or click to rewrite it if the first try is not right.",
                "Reply sentiment tagging tells you which inbound reply is interested, negative, out of office, or a meeting booked.",
              ]}
              example={{
                query: "Write messages for 1,089 leads using one of our six styles.",
                result: "1,089 personal emails ready to send, in about 3 minutes.",
              }}
            />

            <StepBlock
              number="04"
              icon={Send}
              title="Reach out and book the meeting"
              description="You send from your own inbox and we slowly build its trust. When someone is ready to talk, they pick a time on your booking page and every other message for that lead pauses on its own."
              bullets={[
                "Trust building takes your inbox from cold to trusted in 7 to 15 days.",
                "We send only during the hours you choose, in the lead's time zone.",
                "Smart switching between all your inboxes so no single one gets overworked.",
                "Every reply lands in one inbox, sorted by who is interested and who asked to leave.",
                "Any reply stops the rest of the campaign for that lead automatically.",
                "When a meeting is booked, every email, WhatsApp, text, and voice sequence for that lead pauses.",
                "If the meeting is cancelled, the paused sequences resume on their own so you can re-engage a no-show.",
              ]}
              example={{
                query: "Start a 3-step campaign to 1,000 leads from 5 trusted inboxes.",
                result: "Day 1: first emails go out. Day 3: follow-ups. Day 7: final touch. Replies flow into one inbox, and bookings pause the rest.",
              }}
            />
          </div>
        </div>
      </section>

      {/* More channels */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Reach people on the channels they actually use
            </h2>
            <p className="mt-4 text-lg font-medium text-gray-600">
              Email is the start. Bad Decision also sends WhatsApp campaigns,
              text message campaigns, and AI voice calls, so you meet your
              leads where they already are instead of hoping they check their
              inbox.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: MessageSquare,
                title: "WhatsApp campaigns",
                body: "Connect a WhatsApp Business number, pick a template, and send bulk campaigns with delivery and reply tracking. Numbers that are not on WhatsApp are skipped before you pay for them.",
              },
              {
                icon: Phone,
                title: "Text message campaigns",
                body: "Register your brand, buy a sender number, and send SMS campaigns with delivery tracking. Landlines are skipped automatically so you never pay for a text that cannot be read.",
              },
              {
                icon: Phone,
                title: "AI voice calling",
                body: "An AI voice engine picks up the phone and has a real conversation. It books meetings on the call, schedules callbacks, respects do-not-call lists, and writes a note after every call.",
              },
              {
                icon: Bot,
                title: "Control from your AI assistant",
                body: "Connect ChatGPT, Claude, or Gemini. Ask your assistant to find leads, verify emails, launch a campaign, book a meeting, or pull your numbers. Every call is logged for you to review.",
              },
            ].map((c) => (
              <div key={c.title} className="card-premium p-6">
                <c.icon className="h-8 w-8 text-gray-900" />
                <h3 className="mt-3 text-lg font-extrabold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm font-medium text-gray-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation + Analytics */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Build follow-up flows without code
              </h2>
              <p className="mt-4 text-lg font-medium text-gray-300">
                A drag-and-drop canvas lets you chain steps together: when a
                lead is added, send an email, wait two days, then call them. Or
                describe the flow in plain English and let our AI build the
                graph for you. Every run is logged step by step.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Trigger on lead added, email opened, SMS replied, call completed, booking made, or manually.",
                  "Send email, WhatsApp, text, or trigger a voice call from any step.",
                  "Branch with if-else logic or split by percentage for A/B tests.",
                  "Watch every execution step by step, with logs and per-node analytics.",
                  "Pause, resume, or archive a flow without losing its history.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Workflow className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
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
                  { label: "Meetings booked", value: "23" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg bg-white/5 p-4">
                    <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                    <div className="mt-1 text-xs font-medium text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg bg-white/5 p-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-white" />
                  <div className="text-sm font-bold text-white">Campaign: Q3 Skincare Outreach</div>
                </div>
                <div className="mt-3 space-y-2">
                  {[
                    { stage: "Sent", pct: 100 },
                    { stage: "Opened", pct: 62 },
                    { stage: "Replied", pct: 8 },
                    { stage: "Booked", pct: 3 },
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
            Ready to find your first lead?
          </h2>
          <p className="mt-4 text-lg font-medium text-gray-600">
            Start free, no credit card needed. You get 50 lead discoveries, 50
            email checks, and 50 AI message drafts to try the whole flow. Upgrade
            only when you are ready to send real campaigns.
          </p>
          <Link
            href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
            className="btn-primary mt-8 inline-flex"
          >
            Find your first lead
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
