import { NextRequest, NextResponse } from "next/server";

/**
 * Marketing edge middleware.
 *
 * 1. Canonical host: the apex (baddecision.app) permanently redirects to
 *    www.baddecision.app.
 * 2. Session hint: the dashboard's AuthKit session cookie
 *    (`wos-app-session`) is HttpOnly and scoped to `.baddecision.app`, so it
 *    reaches marketing hosts but cannot be read by JavaScript. Its presence
 *    is mirrored into a JS-readable, non-sensitive hint cookie
 *    (`bd_session_hint=1|0`) so the navbar can render the Dashboard CTA for
 *    signed-in visitors. The hint carries no identity and refreshes on every
 *    navigation (including after sign-out).
 * 3. Security headers: mirrors vercel.json so the same CSP / HSTS / frame
 *    protections apply when the site is served from the Cloudflare Worker.
 */
const SESSION_COOKIE = "wos-app-session";
const HINT_COOKIE = "bd_session_hint";
const APEX_HOST = "baddecision.app";
const CANONICAL_HOST = "www.baddecision.app";

const SECURITY_HEADERS: Record<string, string> = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
  "Content-Security-Policy":
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://us.posthog.com https://app.posthog.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'self'; base-uri 'self'; form-action 'self' https:; object-src 'none'",
};

function applySecurityHeaders(response: NextResponse): void {
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    response.headers.set(key, value);
  }
}

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") || "").split(":")[0].toLowerCase();

  if (host === APEX_HOST) {
    const url = request.nextUrl.clone();
    url.host = CANONICAL_HOST;
    url.protocol = "https:";
    const redirect = NextResponse.redirect(url, 308);
    // Permanently redirecting, but never let a client pin a stale decision:
    // browsers cache 308s by default, and an old pre-cutover apex response
    // must not outlive it.
    redirect.headers.set("Cache-Control", "no-store");
    applySecurityHeaders(redirect);
    return redirect;
  }

  const response = NextResponse.next();
  applySecurityHeaders(response);

  const desired = request.cookies.has(SESSION_COOKIE) ? "1" : "0";
  if (request.cookies.get(HINT_COOKIE)?.value !== desired) {
    response.cookies.set(HINT_COOKIE, desired, {
      path: "/",
      sameSite: "lax",
      secure: true,
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 30,
    });
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
