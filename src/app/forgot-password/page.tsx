"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Loader2, Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) {
        setError("Could not send password reset email. Please try again.");
        return;
      }
      setSent(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-14 bg-slate-50/60">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#003D4D] text-white font-extrabold">
              BD
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              BadDecision
            </span>
          </Link>
          <h1 className="mt-5 text-2xl font-bold text-slate-900">
            Reset your password
          </h1>
          <p className="mt-1.5 text-sm text-slate-500">
            Enter your work email and we will send you a password reset link.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          {sent ? (
            <div className="space-y-4 text-center">
              <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
              <p className="text-sm font-semibold text-slate-900">
                Check your inbox
              </p>
              <p className="text-xs text-slate-500">
                If an account exists for <strong>{email}</strong>, we have sent a
                password reset link to your inbox.
              </p>
              <Link
                href="/sign-in"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003D4D] hover:underline"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Return to sign in
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-xs font-semibold text-rose-700">
                  {error}
                </div>
              )}
              <label className="block space-y-1.5">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                  Email Address
                </span>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white pl-10 pr-3.5 text-sm text-slate-900 outline-none focus:border-[#18B0D1]"
                  />
                </div>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#003D4D] px-4 text-sm font-bold text-white transition hover:bg-[#005066] disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-xs text-slate-500">
          <Link
            href="/sign-in"
            className="inline-flex items-center gap-1 font-semibold text-[#003D4D] hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
