"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG, cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/products", label: "Products" },
  { href: "/integrations", label: "Integrations" },
  { href: "/pricing", label: "Pricing" },
  { href: "/case-studies", label: "Case studies" },
];

const MOBILE_MENU_ID = "mobile-nav-menu";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Focus trap: when the menu opens, move focus to the first focusable element
  // inside it. When it closes, restore focus to the toggle button.
  useEffect(() => {
    if (!open) return;

    const menu = menuRef.current;
    if (!menu) return;

    // Collect focusable elements (links, buttons) in DOM order.
    const getFocusable = (): HTMLElement[] => {
      const sel = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
      return Array.from(menu.querySelectorAll<HTMLElement>(sel)).filter(
        (el) => el.offsetParent !== null || el === document.activeElement,
      );
    };

    // Move focus into the menu on open.
    const focusables = getFocusable();
    if (focusables.length > 0) {
      focusables[0].focus();
    }

    const onKeyDown = (e: KeyboardEvent) => {
      // Escape closes the menu.
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      // Tab cycles within the menu.
      if (e.key === "Tab") {
        const items = getFocusable();
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (e.shiftKey) {
          // Shift+Tab from first → wrap to last.
          if (active === first || !menu.contains(active)) {
            e.preventDefault();
            last.focus();
          }
        } else {
          // Tab from last → wrap to first.
          if (active === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // When the menu closes, restore focus to the toggle button (so keyboard
  // users land back where they were).
  useEffect(() => {
    if (!open && toggleRef.current) {
      toggleRef.current.focus();
    }
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass shadow-sm" : "bg-white"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Bad Decision home">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#18B0D1] text-white font-bold shadow-md">
            BD
          </div>
          <span className="text-lg font-extrabold tracking-tight text-gray-900">
            Bad Decision
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={SITE_CONFIG.dashboardUrl}
            className="text-sm font-bold text-gray-700 transition-colors hover:text-gray-900"
          >
            Sign in
          </Link>
          <Link
            href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-gray-800"
          >
            Start free
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          className="md:hidden rounded-md p-2 text-gray-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls={MOBILE_MENU_ID}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id={MOBILE_MENU_ID}
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="md:hidden border-t border-gray-200 bg-white"
        >
          <div className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-bold text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={close}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 space-y-2 border-t border-gray-200 pt-3">
              <Link
                href={SITE_CONFIG.dashboardUrl}
                className="block w-full rounded-md px-3 py-2 text-base font-bold text-gray-700"
                onClick={close}
              >
                Sign in
              </Link>
              <Link
                href={`${SITE_CONFIG.dashboardUrl}/sign-up`}
                className="block w-full rounded-lg bg-gray-900 px-3 py-3 text-center text-sm font-bold text-white"
                onClick={close}
              >
                Start free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
