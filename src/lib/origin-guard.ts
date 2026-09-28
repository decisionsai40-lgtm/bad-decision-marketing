/**
 * Server-side helpers for talking to bad-decision-api from the marketing site.
 *
 * The API rejects direct browser traffic to the raw *.run.app origin with HTTP
 * 403 (edge origin verification). Marketing pages and proxies therefore call
 * the API server-side and present `X-Origin-Verification-Secret`; the browser
 * only ever talks to same-origin routes (e.g. /api/announcements).
 */

/** Resolve the API base URL at runtime (Worker var) with a build-time fallback. */
export function apiBaseUrl(): string {
  const base =
    process.env.API_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    "https://bad-decision-api-933906758268.europe-west1.run.app";
  return base.replace(/\/+$/, "");
}

/**
 * Edge origin-verification header. Empty when the secret is not configured so
 * local dev and preview builds keep working.
 */
export function originVerificationHeaders(): Record<string, string> {
  const secret = process.env.ORIGIN_VERIFICATION_SECRET;
  return secret ? { "X-Origin-Verification-Secret": secret } : {};
}
