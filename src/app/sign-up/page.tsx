"use client";

import { Suspense, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Loader2, Lock, Mail, Sparkles, User } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

function SignUpContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const inviteCode = searchParams.get("invite") || "";
  const inviteToken =
    searchParams.get("invite_token") || searchParams.get("token") || "";
  const pendingPlan = searchParams.get("plan") || "";
  const pendingBilling = searchParams.get("billing") || "monthly";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function persistOnboardingCookies() {
    const domainAttr = window.location.hostname.endsWith("baddecision.app")
      ? "; domain=.baddecision.app"
      : "";
    if (inviteCode) {
      document.cookie = `invite_code=${encodeURIComponent(inviteCode)}; path=/; max-age=1800; Secure; SameSite=Lax${domainAttr}`;
    }
    if (inviteToken) {
      document.cookie = `invite_token=${encodeURIComponent(inviteToken)}; path=/; max-age=1800; Secure; SameSite=Lax${domainAttr}`;
    }
    if (pendingPlan && pendingPlan !== "free") {
      document.cookie = `pending_plan=${encodeURIComponent(pendingPlan)}; path=/; max-age=1800; Secure; SameSite=Lax${domainAttr}`;
      document.cookie = `pending_billing=${encodeURIComponent(pendingBilling)}; path=/; max-age=1800; Secure; SameSite=Lax${domainAttr}`;
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!agreeTerms) {
      setError(
        "Please agree to the Terms of Service and Privacy Policy to continue.",
      );
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setLoading(true);
    persistOnboardingCookies();
    try {
      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          password,
          first_name: firstName.trim() || undefined,
          last_name: lastName.trim() || undefined,
          agree_terms: agreeTerms,
          marketing_opt_in: marketingOptIn,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(
          data?.detail ||
            data?.message ||
            "Could not create account. Please try again.",
        );
        return;
      }

      if (data?.verification_required) {
        const qs = new URLSearchParams();
        qs.set("email", data.email || email.trim());
        if (data.user_id) qs.set("user_id", data.user_id);
        if (data.pending_authentication_token) {
          sessionStorage.setItem(
            "bd_pending_auth_token",
            data.pending_authentication_token,
          );
        }
        router.push(`/verify-email?${qs.toString()}`);
        return;
      }

      window.location.href = `${SITE_CONFIG.dashboardUrl}/dashboard`;
    } catch {
      setError("Could not reach the authentication server. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-14 bg-slate-50/60">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#003D4D] text-white font-extrabold shadow-sm">
              BD
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              BadDecision
            </span>
          </Link>
          <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
            Create your account
          </h1>
          <p className="mt-1.5 text-sm text-slate-500">
            Start prospecting and launching multi-channel outreach in minutes.
          </p>
        </div>

        {(inviteCode || inviteToken) && (
          <div className="flex items-center gap-2.5 rounded-2xl border border-[#18B0D1]/40 bg-[#e6f7fb]/80 px-4 py-3 text-xs font-semibold text-[#003D4D]">
            <Sparkles className="h-4 w-4 shrink-0 text-[#003D4D]" />
            <span>
              Community Invite detected - your Bring-Your-Own-Keys (BYOK) tier
              will activate automatically after sign-up.
            </span>
          </div>
        )}

        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm space-y-5">
          {error && (
            <div
              role="alert"
              className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-xs font-semibold text-rose-700"
            >
              {error}
            </div>
          )}

          <button
            type="button"
            onClick={() => {
              persistOnboardingCookies();
              window.location.href = "/api/auth/google";
            }}
            className="flex h-11 w-full items-center justify-center gap-2.5 rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 transition hover:border-[#18B0D1] hover:bg-slate-50"
          >
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" aria-hidden="true">
              <path
                fill="#EA4335"
                d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.8C6.2 7.2 8.9 5 12 5z"
              />
              <path
                fill="#4285F4"
                d="M22.5 12.2c0-.8-.1-1.6-.2-2.2H12v4.3h5.9c-.3 1.4-1.1 2.6-2.3 3.4l3.6 2.8c2.1-1.9 3.3-4.8 3.3-8.3z"
              />
              <path
                fill="#FBBC05"
                d="M5.3 14.8c-.2-.8-.4-1.8-.4-2.8s.2-2 .4-2.8L1.6 6.4C.6 8.1 0 10 0 12s.6 3.9 1.6 5.6l3.7-2.8z"
              />
              <path
                fill="#34A853"
                d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.8c-1 .7-2.2 1.1-3.7 1.1-3.1 0-5.8-2.1-6.7-5L1.6 16.4C3.5 20.4 7.4 23 12 23z"
              />
            </svg>
            Sign up with Google
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-2.5 font-medium text-slate-400">
                or sign up with email
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <label className="block space-y-1.5">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                  First Name
                </span>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Sarah"
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#18B0D1]"
                  />
                </div>
              </label>
              <label className="block space-y-1.5">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                  Last Name
                </span>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Chen"
                  className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#18B0D1]"
                />
              </label>
            </div>

            <label className="block space-y-1.5">
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                Work Email
              </span>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sarah@company.com"
                  className="h-11 w-full rounded-xl border border-slate-300 bg-white pl-10 pr-3.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#18B0D1]"
                />
              </div>
            </label>

            <label className="block space-y-1.5">
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                Password (8+ characters)
              </span>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  required
                  minLength={8}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  className="h-11 w-full rounded-xl border border-slate-300 bg-white pl-10 pr-3.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#18B0D1]"
                />
              </div>
            </label>

            <div className="space-y-2.5 pt-1">
              <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-[#003D4D]"
                />
                <span>
                  I agree to the BadDecision{" "}
                  <Link
                    href="/terms"
                    target="_blank"
                    className="font-semibold text-[#003D4D] underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    target="_blank"
                    className="font-semibold text-[#003D4D] underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              <label className="flex items-start gap-2.5 text-xs text-slate-500 cursor-pointer">
                <input
                  type="checkbox"
                  checked={marketingOptIn}
                  onChange={(e) => setMarketingOptIn(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-[#003D4D]"
                />
                <span>
                  Send me product updates, outbound playbooks, and occasional
                  marketing emails (optional - unsubscribe anytime).
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#003D4D] px-4 text-sm font-bold text-white shadow-xs transition hover:bg-[#005066] disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  Create Account
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-bold text-[#003D4D] hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function SignUpPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <SignUpContent />
    </Suspense>
  );
}
