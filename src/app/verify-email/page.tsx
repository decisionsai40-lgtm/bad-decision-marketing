"use client";

import { Suspense, useState, type FormEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Loader2, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const userId = searchParams.get("user_id") || "";

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const pendingToken =
        typeof window !== "undefined"
          ? sessionStorage.getItem("bd_pending_auth_token")
          : null;
      const res = await fetch("/api/auth/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: code.trim(),
          email: email || undefined,
          user_id: userId || undefined,
          pending_authentication_token: pendingToken || undefined,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(
          data?.detail ||
            data?.message ||
            "Invalid or expired verification code.",
        );
        return;
      }
      if (data?.access_token) {
        window.location.href = `${SITE_CONFIG.dashboardUrl}/dashboard`;
      } else {
        window.location.href = "/sign-in";
      }
    } catch {
      setError("Could not verify code. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-14 bg-slate-50/60">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#003D4D] text-white">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-slate-900">
            Check your email
          </h1>
          <p className="mt-1.5 text-sm text-slate-500">
            We sent a 6-digit verification code to{" "}
            <strong className="text-slate-800">{email || "your inbox"}</strong>.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm space-y-4"
        >
          {error && (
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-xs font-semibold text-rose-700">
              {error}
            </div>
          )}

          <label className="block space-y-1.5">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-600">
              Verification Code
            </span>
            <input
              type="text"
              required
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="123456"
              maxLength={10}
              className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-center font-mono text-xl font-bold tracking-widest text-slate-900 outline-none focus:border-[#18B0D1]"
              autoFocus
            />
          </label>

          <button
            type="submit"
            disabled={loading || code.trim().length < 4}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#003D4D] px-4 text-sm font-bold text-white transition hover:bg-[#005066] disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                Verify &amp; Continue
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-xs text-slate-500">
          <Link href="/sign-in" className="font-semibold text-[#003D4D] hover:underline">
            Back to sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <VerifyEmailContent />
    </Suspense>
  );
}
