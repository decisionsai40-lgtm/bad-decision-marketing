"use client";

import { useEffect, useState } from "react";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://bad-decision-api-933906758268.europe-west1.run.app";

interface Announcement {
  id: string;
  title: string;
  message: string;
  link_url: string | null;
  link_text: string | null;
  banner_type: string;
}

const DISMISSED_KEY = "bd-dismissed-announcements";

const BANNER_STYLES: Record<string, string> = {
  info: "bg-[#003D4D] text-white",
  warning: "bg-amber-500 text-white",
  success: "bg-emerald-600 text-white",
  critical: "bg-red-600 text-white",
};

/**
 * Dismissible top banner for active announcements (marketing surface).
 * Dismissed ids are cached in localStorage so banners never reappear.
 */
export function AnnouncementBanner() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [dismissed, setDismissed] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(DISMISSED_KEY);
      setDismissed(raw ? (JSON.parse(raw) as string[]) : []);
    } catch {
      setDismissed([]);
    }

    let cancelled = false;
    fetch(`${API_URL}/api/v1/announcements/active?surface=marketing`, {
      cache: "no-store",
    })
      .then((res) => (res.ok ? res.json() : { announcements: [] }))
      .then((data) => {
        if (!cancelled) setAnnouncements(data.announcements ?? []);
      })
      .catch(() => {
        /* banners are best-effort — never break the page */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  function dismiss(id: string) {
    const next = [...dismissed, id];
    setDismissed(next);
    try {
      window.localStorage.setItem(DISMISSED_KEY, JSON.stringify(next));
    } catch {
      /* storage may be unavailable */
    }
  }

  const active = announcements.filter((a) => !dismissed.includes(a.id));
  if (active.length === 0) return null;

  const announcement = active[0];
  return (
    <div
      role="status"
      className={`relative flex items-center justify-center gap-3 px-4 py-2.5 text-sm font-medium ${
        BANNER_STYLES[announcement.banner_type] ?? BANNER_STYLES.info
      }`}
    >
      <p className="text-center">
        <span className="font-extrabold">{announcement.title}:</span>{" "}
        {announcement.message}
        {announcement.link_url && (
          <>
            {" "}
            <a
              href={announcement.link_url}
              className="underline font-bold"
              target={
                announcement.link_url.startsWith("http") ? "_blank" : undefined
              }
              rel={
                announcement.link_url.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              {announcement.link_text || "Learn more"}
            </a>
          </>
        )}
      </p>
      <button
        type="button"
        aria-label="Dismiss announcement"
        onClick={() => dismiss(announcement.id)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full px-2 py-0.5 text-base font-bold opacity-80 hover:opacity-100"
      >
        ×
      </button>
    </div>
  );
}
