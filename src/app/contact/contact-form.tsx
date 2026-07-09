"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

interface ContactFormProps {
  topics: { value: string; label: string }[];
}

export function ContactForm({ topics }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: topics[0]?.value || "general",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[${form.topic}] ${form.name} — Bad Decision contact form`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\n${form.message}`
    );
    window.location.href = `mailto:${SITE_CONFIG.supportEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card-premium flex h-full flex-col items-center justify-center p-8 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-success-soft)]">
          <Send className="h-6 w-6 text-[var(--color-success)]" />
        </div>
        <h2 className="mt-4 text-xl font-bold text-[var(--color-foreground)]">
          Thanks — your email client should have opened
        </h2>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          If it didn't, email us directly at{" "}
          <a
            href={`mailto:${SITE_CONFIG.supportEmail}`}
            className="text-[var(--color-primary)] hover:underline"
          >
            {SITE_CONFIG.supportEmail}
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="card-premium p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[var(--color-foreground)]">
            Your name
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-1 block w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-foreground)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
            placeholder="Ada Obi"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--color-foreground)]">
            Email
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-1 block w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-foreground)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
            placeholder="ada@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--color-foreground)]">
            Topic
          </label>
          <select
            value={form.topic}
            onChange={(e) => setForm({ ...form, topic: e.target.value })}
            className="mt-1 block w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-foreground)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
          >
            {topics.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--color-foreground)]">
            Message
          </label>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="mt-1 block w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-foreground)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
            placeholder="Tell us what you need..."
          />
        </div>
        <button type="submit" className="btn-primary w-full">
          Send message
          <Send className="h-4 w-4" />
        </button>
        <p className="text-center text-xs text-[var(--color-text-muted)]">
          This opens your email client. If you prefer, email us directly at{" "}
          <a
            href={`mailto:${SITE_CONFIG.supportEmail}`}
            className="text-[var(--color-primary)] hover:underline"
          >
            {SITE_CONFIG.supportEmail}
          </a>
        </p>
      </form>
    </div>
  );
}
