import { NextRequest, NextResponse } from "next/server";
import { apiBaseUrl, originVerificationHeaders } from "@/lib/origin-guard";

export const dynamic = "force-dynamic";

function cookieDomain(host: string): string | undefined {
  const clean = host.split(":")[0].toLowerCase();
  if (clean === "baddecision.app" || clean.endsWith(".baddecision.app")) {
    return ".baddecision.app";
  }
  return undefined;
}

function attachSessionCookies(
  response: NextResponse,
  host: string,
  payload: {
    access_token?: string;
    refresh_token?: string;
    organization_id?: string | null;
    user?: {
      id?: string;
      email?: string;
      first_name?: string | null;
      last_name?: string | null;
    } | null;
  },
) {
  if (!payload.access_token) return;
  const domain = cookieDomain(host);
  const secure = host.includes("baddecision.app");
  const maxAge = 60 * 60 * 24 * 7; // 7 days

  response.cookies.set("bd-session-token", payload.access_token, {
    path: "/",
    domain,
    httpOnly: true,
    secure,
    sameSite: "lax",
    maxAge,
  });

  if (payload.refresh_token) {
    response.cookies.set("bd-refresh-token", payload.refresh_token, {
      path: "/",
      domain,
      httpOnly: true,
      secure,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
    });
  }

  if (payload.user) {
    const userSummary = JSON.stringify({
      userId: payload.user.id || "",
      email: payload.user.email || "",
      firstName: payload.user.first_name ?? null,
      lastName: payload.user.last_name ?? null,
      orgId: payload.organization_id ?? undefined,
    });
    response.cookies.set("bd-session-user", userSummary, {
      path: "/",
      domain,
      httpOnly: true,
      secure,
      sameSite: "lax",
      maxAge,
    });
  }

  response.cookies.set("bd_session_hint", "1", {
    path: "/",
    domain,
    httpOnly: false,
    secure,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ action: string[] }> },
) {
  const { action } = await context.params;
  const step = action?.[0] || "";

  if (step === "google") {
    const res = await fetch(
      `${apiBaseUrl()}/api/v1/auth/custom/google-url`,
      {
        headers: {
          ...originVerificationHeaders(),
        },
        cache: "no-store",
      },
    );
    const data = (await res.json().catch(() => ({}))) as { url?: string };
    if (data?.url) {
      return NextResponse.redirect(data.url);
    }
    return NextResponse.redirect(new URL("/sign-in?error=oauth", request.url));
  }

  return NextResponse.json({ error: "Not found" }, { status: 404 });
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ action: string[] }> },
) {
  const { action } = await context.params;
  const step = action?.[0] || "";
  const allowed = new Set([
    "sign-in",
    "sign-up",
    "verify-email",
    "forgot-password",
    "reset-password",
  ]);
  if (!allowed.has(step)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const body = await request.json().catch(() => ({}));
  const upstream = await fetch(
    `${apiBaseUrl()}/api/v1/auth/custom/${step}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...originVerificationHeaders(),
      },
      body: JSON.stringify(body),
    },
  );

  const data = await upstream.json().catch(() => ({}));
  const response = NextResponse.json(data, { status: upstream.status });

  if (upstream.ok && data?.access_token) {
    const host = request.headers.get("host") || "www.baddecision.app";
    attachSessionCookies(response, host, data);
  }

  return response;
}
