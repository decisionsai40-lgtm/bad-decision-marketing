"use client";

import { useEffect, useState } from "react";
import {
  type UserLocale,
  DEFAULT_USER_LOCALE,
} from "@/lib/locale";

/**
 * Client-side locale detection.
 *
 * Uses `navigator.language` for the locale tag and
 * `Intl.DateTimeFormat().resolvedOptions().timeZone` for the timezone.
 *
 * The detected locale is cached in localStorage so it stays stable across
 * page navigations and reloads.
 */
export function useLocale(): UserLocale {
  const [locale, setLocale] = useState<UserLocale>(DEFAULT_USER_LOCALE);

  useEffect(() => {
    try {
      const cached = typeof window !== "undefined"
        ? window.localStorage.getItem("bd-locale")
        : null;
      if (cached) {
        setLocale(JSON.parse(cached));
        return;
      }
    } catch {
      // ignore parse errors
    }

    if (typeof navigator === "undefined") return;

    const lang = navigator.language || "en-US";
    let timezone = "America/New_York";
    try {
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || timezone;
    } catch {
      // keep default
    }

    const region = lang.split("-")[1]?.toUpperCase();
    const detected = buildClientLocale(region, lang, timezone);
    setLocale(detected);

    try {
      window.localStorage.setItem("bd-locale", JSON.stringify(detected));
    } catch {
      // ignore
    }
  }, []);

  return locale;
}

function buildClientLocale(
  region: string | undefined,
  lang: string,
  timezone: string,
): UserLocale {
  const EUR_COUNTRIES = new Set([
    "DE", "FR", "ES", "IT", "NL", "IE", "PT", "BE", "AT", "FI", "GR",
    "LU", "SK", "SI", "EE", "LV", "LT", "CY", "MT",
  ]);

  const SYMBOLS: Record<string, string> = {
    USD: "$",
    NGN: "\u20A6",
    EUR: "\u20AC",
    GBP: "\u00A3",
  };

  const DATE_FORMATS: Record<string, string> = {
    USD: "MM/DD/YYYY",
    NGN: "DD/MM/YYYY",
    EUR: "DD/MM/YYYY",
    GBP: "DD/MM/YYYY",
  };

  let currency: UserLocale["currency"] = "USD";
  let country = "US";

  if (region === "NG") {
    currency = "NGN";
    country = "NG";
  } else if (region === "GB") {
    currency = "GBP";
    country = "GB";
  } else if (region && EUR_COUNTRIES.has(region)) {
    currency = "EUR";
    country = region;
  } else if (region) {
    country = region;
  }

  return {
    country,
    currency,
    currencySymbol: SYMBOLS[currency],
    timezone,
    locale: lang,
    dateFormat: DATE_FORMATS[currency],
  };
}
