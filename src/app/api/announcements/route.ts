/**
 * Same-origin announcements proxy (marketing surface).
 *
 * The banner used to fetch the raw API origin directly from the browser,
 * which the edge origin defense now rejects with HTTP 403 for browser
 * requests. This route fetches server-side (with the shared
 * X-Origin-Verification-Secret) and caches the payload for 30s, so the
 * browser only ever calls https://www.baddecision.app/api/announcements.
 *
 * Fail-open: any backend/network error returns an empty list so a marketing
 * page never breaks because of a banner.
 */
import { NextResponse } from "next/server";
import { apiBaseUrl, originVerificationHeaders } from "@/lib/origin-guard";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const surface =
    new URL(request.url).searchParams.get("surface") || "marketing";
  const empty = NextResponse.json({ surface, announcements: [] });
  empty.headers.set("Cache-Control", "public, max-age=30, stale-while-revalidate=120");

  try {
    const response = await fetch(
      `${apiBaseUrl()}/api/v1/announcements/active?surface=${encodeURIComponent(surface)}`,
      {
        cache: "no-store",
        signal: AbortSignal.timeout(8000),
        headers: originVerificationHeaders(),
      },
    );
    if (!response.ok) return empty;
    const data = await response.json();
    const result = NextResponse.json({
      surface: data.surface ?? surface,
      announcements: data.announcements ?? [],
    });
    result.headers.set(
      "Cache-Control",
      "public, max-age=30, stale-while-revalidate=120",
    );
    return result;
  } catch {
    return empty;
  }
}
