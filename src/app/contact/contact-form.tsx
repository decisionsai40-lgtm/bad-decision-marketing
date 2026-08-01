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
      `[${form.topic}] ${form.name}, Bad Decision contact form`
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
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
          <Send className="h-6 w-6 text-green-600" />
        </div>
        <h2 className="mt-4 text-xl font-extrabold text-gray-900">
          Thanks. Your email client should have opened.
        </h2>
        <p className="mt-2 text-sm font-medium text-gray-600">
          If it did not, email us directly at{" "}
          <a
            href={`mailto:${SITE_CONFIG.supportEmail}`}
            className="font-bold text-gray-900 hover:underline"
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
          <label htmlFor="contact-name" className="block text-sm font-bold text-gray-900">
            Your name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-1 block w-full rounded-lg border-2 border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none"
            placeholder="Ada Obi"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-bold text-gray-900">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-1 block w-full rounded-lg border-2 border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none"
            placeholder="ada@example.com"
          />
        </div>
        <div>
          <label htmlFor="contact-topic" className="block text-sm font-bold text-gray-900">
            Topic
          </label>
          <select
            id="contact-topic"
            name="topic"
            value={form.topic}
            onChange={(e) => setForm({ ...form, topic: e.target.value })}
            className="mt-1 block w-full rounded-lg border-2 border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 focus:border-gray-900 focus:outline-none"
          >
            {topics.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-bold text-gray-900">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="mt-1 block w-full rounded-lg border-2 border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none"
            placeholder="Tell us what you need..."
          />
        </div>
        <button type="submit" className="btn-primary w-full">
          Send message
          <Send className="h-4 w-4" />
        </button>
        <p className="text-center text-xs font-medium text-gray-500">
          This opens your email client. If you prefer, email us directly at{" "}
          <a
            href={`mailto:${SITE_CONFIG.supportEmail}`}
            className="font-bold text-gray-900 hover:underline"
          >
            {SITE_CONFIG.supportEmail}
          </a>
        </p>
      </form>
    </div>
  );
}
