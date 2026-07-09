import Link from "next/link";
import { Mail, Twitter, Github } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

const FOOTER_LINKS = {
  Product: [
    { href: "/how-it-works", label: "How it works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/case-studies", label: "Case studies" },
    { href: "/faq", label: "FAQ" },
    { href: "/guarantee", label: "Guarantee" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/refund", label: "Refund Policy" },
    { href: "/cookie-policy", label: "Cookie Policy" },
    { href: "/dpa", label: "DPA" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[var(--color-card)] text-[var(--color-card-foreground)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white font-bold">
                BD
              </div>
              <span className="text-lg font-bold">Bad Decision</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-card-foreground)]/75 max-w-xs">
              Find real buyers. Skip the ghost towns. The all-in-one platform for lead
              generation, email verification, and cold outreach — built for founders and
              agencies who actually need to close deals.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={`mailto:${SITE_CONFIG.supportEmail}`}
                aria-label="Email us"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-white/20"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={`https://twitter.com/${SITE_CONFIG.social.twitter.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-white/20"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-white/20"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-card-foreground)]/90">
                {category}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-card-foreground)]/75 transition-colors hover:text-[var(--color-primary)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-[var(--color-card-foreground)]/75">
            © {new Date().getFullYear()} {SITE_CONFIG.legalEntityName}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-card-foreground)]/75">
            Built for founders who refuse to waste another dollar on dead lead lists.
          </p>
        </div>
      </div>
    </footer>
  );
}
