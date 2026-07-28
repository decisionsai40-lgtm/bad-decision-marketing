/**
 * Locale detection : server-side + pure helpers.
 *
 * Used to format prices and dates in the user's local currency and date format.
 * Base prices are stored in USD; conversion is for display only.
 */

export interface UserLocale {
  country: string;      // "NG", "US", "GB"
  currency: "USD" | "NGN" | "EUR" | "GBP";
  currencySymbol: string;
  timezone: string;     // "Africa/Lagos"
  locale: string;       // "en-NG"
  dateFormat: string;   // "DD/MM/YYYY"
}

const COUNTRY_CURRENCY: Record<string, { currency: UserLocale["currency"]; symbol: string; locale: string; dateFormat: string }> = {
  NG: { currency: "NGN", symbol: "\u20A6", locale: "en-NG", dateFormat: "DD/MM/YYYY" },
  US: { currency: "USD", symbol: "$",    locale: "en-US", dateFormat: "MM/DD/YYYY" },
  GB: { currency: "GBP", symbol: "\u00A3",   locale: "en-GB", dateFormat: "DD/MM/YYYY" },
  DE: { currency: "EUR", symbol: "\u20AC",   locale: "de-DE", dateFormat: "DD.MM.YYYY" },
  FR: { currency: "EUR", symbol: "\u20AC",   locale: "fr-FR", dateFormat: "DD/MM/YYYY" },
  ES: { currency: "EUR", symbol: "\u20AC",   locale: "es-ES", dateFormat: "DD/MM/YYYY" },
  IT: { currency: "EUR", symbol: "\u20AC",   locale: "it-IT", dateFormat: "DD/MM/YYYY" },
  NL: { currency: "EUR", symbol: "\u20AC",   locale: "nl-NL", dateFormat: "DD-MM-YYYY" },
  IE: { currency: "EUR", symbol: "\u20AC",   locale: "en-IE", dateFormat: "DD/MM/YYYY" },
  PT: { currency: "EUR", symbol: "\u20AC",   locale: "pt-PT", dateFormat: "DD/MM/YYYY" },
  BE: { currency: "EUR", symbol: "\u20AC",   locale: "nl-BE", dateFormat: "DD/MM/YYYY" },
  AT: { currency: "EUR", symbol: "\u20AC",   locale: "de-AT", dateFormat: "DD.MM.YYYY" },
  FI: { currency: "EUR", symbol: "\u20AC",   locale: "fi-FI", dateFormat: "DD.MM.YYYY" },
  GR: { currency: "EUR", symbol: "\u20AC",   locale: "el-GR", dateFormat: "DD/MM/YYYY" },
};

const EUR_COUNTRIES = new Set([
  "DE", "FR", "ES", "IT", "NL", "IE", "PT", "BE", "AT", "FI", "GR",
  "LU", "SK", "SI", "EE", "LV", "LT", "CY", "MT",
]);

const COUNTRY_TIMEZONE: Record<string, string> = {
  NG: "Africa/Lagos",
  US: "America/New_York",
  GB: "Europe/London",
  DE: "Europe/Berlin",
  FR: "Europe/Paris",
  ES: "Europe/Madrid",
  IT: "Europe/Rome",
  NL: "Europe/Amsterdam",
  IE: "Europe/Dublin",
  PT: "Europe/Lisbon",
  BE: "Europe/Brussels",
  AT: "Europe/Vienna",
  FI: "Europe/Helsinki",
  GR: "Europe/Athens",
};

const DEFAULT_LOCALE: UserLocale = {
  country: "US",
  currency: "USD",
  currencySymbol: "$",
  timezone: "America/New_York",
  locale: "en-US",
  dateFormat: "MM/DD/YYYY",
};

/**
 * Detect the user's locale from a server-side Request.
 *
 * Detection order:
 *   1. CF-IPCountry header (Cloudflare)
 *   2. X-Vercel-IP-Country header (Vercel)
 *   3. Accept-Language header
 *   4. Default: US / USD
 */
export function detectLocale(request: Request): UserLocale {
  const headers = request.headers;

  const cfCountry = headers.get("cf-ipcountry");
  if (cfCountry) {
    return buildLocale(cfCountry.toUpperCase());
  }

  const vercelCountry = headers.get("x-vercel-ip-country");
  if (vercelCountry) {
    return buildLocale(vercelCountry.toUpperCase());
  }

  const acceptLang = headers.get("accept-language");
  if (acceptLang) {
    const tag = acceptLang.split(",")[0]?.trim().toLowerCase();
    if (tag) {
      const region = tag.split("-")[1];
      if (region) {
        return buildLocale(region.toUpperCase());
      }
    }
  }

  return DEFAULT_LOCALE;
}

function buildLocale(country: string): UserLocale {
  const c = country.toUpperCase();
  if (COUNTRY_CURRENCY[c]) {
    const m = COUNTRY_CURRENCY[c];
    return {
      country: c,
      currency: m.currency,
      currencySymbol: m.symbol,
      timezone: COUNTRY_TIMEZONE[c] || "UTC",
      locale: m.locale,
      dateFormat: m.dateFormat,
    };
  }
  if (EUR_COUNTRIES.has(c)) {
    return {
      country: c,
      currency: "EUR",
      currencySymbol: "\u20AC",
      timezone: COUNTRY_TIMEZONE[c] || "Europe/Paris",
      locale: "en-IE",
      dateFormat: "DD/MM/YYYY",
    };
  }
  return DEFAULT_LOCALE;
}

/**
 * Format a USD amount into the user's local currency for display only.
 *
 * NOTE: We do not perform live FX conversion here. We render the local currency
 * symbol followed by the same numeric value. Real FX will be wired up in a later
 * phase; for now the goal is to show the right symbol and separators.
 */
export function formatCurrency(amount: number, locale: UserLocale): string {
  try {
    return new Intl.NumberFormat(locale.locale, {
      style: "currency",
      currency: locale.currency,
      maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
    }).format(amount);
  } catch {
    return `${locale.currencySymbol}${amount.toLocaleString("en-US")}`;
  }
}

/**
 * Format a Date using the user's locale and date format.
 */
export function formatDate(date: Date, locale: UserLocale): string {
  try {
    return new Intl.DateTimeFormat(locale.locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: locale.timezone,
    }).format(date);
  } catch {
    return date.toISOString().split("T")[0];
  }
}

export const DEFAULT_USER_LOCALE = DEFAULT_LOCALE;
