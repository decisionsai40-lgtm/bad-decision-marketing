import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/utils";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/seo/json-ld";
import { PostHogProvider } from "@/components/posthog-provider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Bad Decision — Cold Email & Lead Generation Platform",
    template: "%s | Bad Decision",
  },
  description: "Bad Decision is the all-in-one outbound sales platform. Find leads with multiple search engines, verify emails with 6-layer accuracy, write messages with AI, and send from your inbox with warmup. Instantly and Smartlead alternative.",
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  keywords: [
    "cold email software",
    "lead generation",
    "Instantly alternative",
    "Smartlead alternative",
    "email verification",
    "cold outreach",
    "outbound sales",
    "email warmup",
    "deliverability",
    "sales engagement",
    "SDR tools",
    "cold email tool",
    "B2B lead generation",
    "email campaign software",
    "outbound lead generation",
    "lead finder",
    "sales pipeline",
    "outreach platform",
  ],
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Bad Decision — Cold Email & Lead Generation Platform",
    description: "Find leads, verify emails, write with AI, and send from your inbox. The Instantly and Smartlead alternative with built-in lead generation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bad Decision — Cold Email & Lead Generation Platform",
    description: "Find leads, verify emails, write with AI, and send from your inbox.",
    creator: SITE_CONFIG.social.twitter,
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
  category: "technology",
  // Google Search Console verification — replace with your verification code
  // Format: google-site-verification=YOUR_CODE_HERE
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#00a8cc",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans antialiased">
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <PostHogProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
