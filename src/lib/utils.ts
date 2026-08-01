import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * lib/utils.ts — backwards-compatibility barrel.
 *
 * Originally a 314-line file mixing site config, pricing, add-ons, credit
 * packs, and FAQs. The MEDIUM 4 audit fix split it into:
 *
 *   - `lib/site-config.ts` — SITE_CONFIG (brand metadata)
 *   - `lib/pricing.ts`     — PRICING_PLANS, ENTERPRISE_PLAN, ADDONS,
 *                            CREDIT_PACKS and their types / helpers
 *   - `lib/faqs.ts`        — FAQS list
 *
 * This file now keeps only the tiny `cn()` helper (used everywhere) and
 * re-exports the moved symbols so existing `import { ... } from "@/lib/utils"`
 * calls continue to resolve. New code should import from the focused modules
 * directly — that keeps the import graph lean and the bundler happy.
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Re-export everything that previously lived here. Tree-shaking still works —
// `import { SITE_CONFIG } from "@/lib/utils"` pulls only site-config.ts code.
export { SITE_CONFIG } from "./site-config.js";
export type { SiteConfig } from "./site-config.js";

export {
  PRICING_PLANS,
  ENTERPRISE_PLAN,
  ADDONS,
  ADDON_BY_SLUG,
  addonsTotal,
  CREDIT_PACKS,
} from "./pricing.js";
export type {
  PlanFeature,
  AddonSlug,
  Addon,
  CreditPack,
} from "./pricing.js";

export { FAQS } from "./faqs.js";
export type { Faq } from "./faqs.js";
