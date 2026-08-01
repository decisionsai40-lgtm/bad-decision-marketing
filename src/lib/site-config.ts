/**
 * Site-wide configuration: brand name, domains, support email, social handles.
 *
 * Pulled out of `lib/utils.ts` (MEDIUM 4 cleanup) so that pages that only need
 * the brand metadata don't pull in the whole pricing / FAQ / addon catalogue.
 *
 * `lib/utils.ts` still re-exports SITE_CONFIG for backwards compatibility —
 * existing `import { SITE_CONFIG } from "@/lib/utils"` calls keep working.
 */

export const SITE_CONFIG = {
  name: "Bad Decision",
  domain: "baddecision.app",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://baddecision.app",
  dashboardUrl:
    process.env.NEXT_PUBLIC_DASHBOARD_URL ||
    "https://dashboard.baddecision.app",
  supportEmail:
    process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@baddecision.app",
  description:
    "Every other way of finding customers is a bad decision. Bad Decision is one platform that finds the right people, checks every email, writes your messages, sends them across email, WhatsApp, text, and phone, and books meetings when people are ready. One subscription instead of five tools that do not talk to each other.",
  social: {
    twitter: "@baddecisionapp",
    github: "https://github.com/decisionsai40-lgtm",
    linkedin: "https://www.linkedin.com/company/bad-decision-app",
  },
  foundedYear: 2025,
  legalEntityName: "Germaine 50 Technologies",
  legalJurisdiction: "Lagos, Nigeria",
} as const;

export type SiteConfig = typeof SITE_CONFIG;
