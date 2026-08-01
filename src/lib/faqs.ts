/**
 * FAQ entries shown on the home + FAQ pages.
 *
 * Pulled out of `lib/utils.ts` (MEDIUM 4 cleanup). `lib/utils.ts` re-exports
 * `FAQS` for backwards compatibility.
 */

export const FAQS = [
  {
    q: "What is Bad Decision?",
    a: "One platform to find leads, reach out across email and messaging and phone, and book meetings. You stop paying for five tools.",
  },
  {
    q: "How much does it cost?",
    a: "Free forever. Starter is $39, Growth is $97, Pro is $297. Add-ons for WhatsApp, SMS, and AI voice are extra.",
  },
  {
    q: "Do I need my own email?",
    a: "Yes. You connect your Gmail, Outlook, or custom email. We never send from our servers.",
  },
  {
    q: "Will my emails land in spam?",
    a: "No. Every inbox gets warmed up, every email is checked, and we send at the right times across your inboxes.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. One click in your billing settings. Your plan runs until the end of the period.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. Cancel within 7 days and we refund 100 percent. No questions.",
  },
  {
    q: "What channels can I use?",
    a: "Email on every plan. WhatsApp and SMS are add-ons on Growth and Pro. AI voice calling is a Pro add-on.",
  },
  {
    q: "Is AI calling legal?",
    a: "Yes, when done right. We check consent, the do-not-call list, and calling hours before every call. You stay compliant.",
  },
  {
    q: "Can I control it from ChatGPT or Claude?",
    a: "Yes. Connect ChatGPT, Claude, or Gemini and ask them to find leads, start campaigns, or book meetings.",
  },
  {
    q: "Do credits roll over?",
    a: "No. Monthly credits reset on your billing date. Credits you buy separately never expire.",
  },
  {
    q: "Can I bring my own leads?",
    a: "Yes. Upload a CSV and we check every email before you send.",
  },
  {
    q: "What makes this different?",
    a: "You get lead finding, email, WhatsApp, SMS, AI voice, scheduling, and automations in one tool. Everyone else makes you buy five.",
  },
] as const;

export type Faq = (typeof FAQS)[number];
