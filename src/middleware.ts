import { NextRequest, NextResponse } from "next/server";

/**
 * Session hint for the marketing nav.
 *
 * The dashboard's AuthKit session cookie (`wos-app-session`) is HttpOnly and
 * scoped to `.baddecision.app`, so it is sent to marketing hosts but cannot
 * be read by JavaScript. This middleware mirrors its presence into a
 * JS-readable, non-sensitive hint cookie (`bd_session_hint=1|0`) so the
 * navbar can render the Dashboard CTA for signed-in visitors without a
 * cross-origin round trip. The value carries no identity and the hint is
 * refreshed on every navigation (including after sign-out).
 */
const SESSION_COOKIE = "wos-app-session";
const HINT_COOKIE = "bd_session_hint";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
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
