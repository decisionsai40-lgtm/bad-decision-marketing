import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/utils";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/seo/json-ld";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Bad Decision — Find Real Buyers. Skip The Ghost Towns.",
    template: "%s | Bad Decision",
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  keywords: [
    "lead generation",
    "B2B leads",
    "email verification",
    "cold outreach",
    "cold email",
    "sales leads",
    "lead scraping",
    "outbound sales",
    "email warmup",
    "deliverability",
    "sales engagement",
    "SDR tools",
    "cold email software",
    "outreach platform",
    "lead finder",
    "B2B lead generation",
    "cold email tool",
    "email campaign software",
    "sales pipeline",
    "outbound lead generation",
  ],
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Bad Decision — Find Real Buyers. Skip The Ghost Towns.",
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bad Decision — Find Real Buyers. Skip The Ghost Towns.",
    description: SITE_CONFIG.description,
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
