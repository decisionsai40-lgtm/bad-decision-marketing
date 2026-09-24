import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PostHogProvider } from "@/components/posthog-provider";
import { AnnouncementBanner } from "@/components/announcement-banner";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#003D4D",
};

// ───────────────────────────────────────────────────────────────────────────
// Site-wide metadata
// ───────────────────────────────────────────────────────────────────────────
// Provides the browser tab title, meta description, Open Graph tags, and
// Twitter cards for every route. Individual pages can override `title` (the
// `%s` template suffix is appended automatically) and any other field by
// exporting their own `metadata` object.
//
// The template uses an EM DASH separator (`%s — Bad Decision`) instead of a
// pipe. Combined with the convention that page-level titles MUST NOT include
// the brand name, this guarantees we never render a duplicate like
// "Bad Decision | Bad Decision" in the browser tab.
// ───────────────────────────────────────────────────────────────────────────

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://baddecision.app";
const TITLE_DEFAULT =
  "Bad Decision — Find, reach, and book customers with AI";
const DESCRIPTION =
  "One platform to find leads, verify emails, send multi-channel outreach, and book meetings — powered by AI.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE_DEFAULT,
    template: "%s — Bad Decision",
  },
  description: DESCRIPTION,
  applicationName: "Bad Decision",
  authors: [{ name: "Bad Decision" }],
  creator: "Bad Decision",
  publisher: "Bad Decision",
  keywords: [
    "lead generation",
    "cold outreach",
    "email outreach",
    "AI voice calling",
    "WhatsApp marketing",
    "SMS marketing",
    "meeting booking",
    "sales automation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Bad Decision",
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
    creator: "@baddecisionapp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        {/* iOS home-screen icon. SVG is supported on iOS 16+; older iOS
            versions fall back to the favicon. PNG versions (180×180) should
            be added as a follow-up for older iOS — see manifest.ts note. */}
        <link rel="apple-touch-icon" href="/icon.svg" />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <PostHogProvider>
          {/* Multi-surface announcement banner (marketing surface). */}
          <AnnouncementBanner />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
