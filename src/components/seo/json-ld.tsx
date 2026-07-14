import { SITE_CONFIG, PRICING_PLANS, FAQS } from "@/lib/utils";

/**
 * JSON-LD structured data components for SEO.
 * These help search engines (Google, Bing) and AI models (ChatGPT, Perplexity, Claude)
 * understand the site content and show it in rich results and AI-generated answers.
 */

/* ============================================================
   Organization — site-wide, injected in layout.tsx
   ============================================================ */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    alternateName: "Germaine 50 Technologies",
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/icon.svg`,
    description: SITE_CONFIG.description,
    foundingDate: `${SITE_CONFIG.foundedYear}-01-01`,
    email: SITE_CONFIG.supportEmail,
    sameAs: [
      `https://twitter.com/${SITE_CONFIG.social.twitter.replace("@", "")}`,
      SITE_CONFIG.social.github,
      SITE_CONFIG.social.linkedin || "",
    ].filter(Boolean),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: SITE_CONFIG.supportEmail,
      availableLanguage: ["English"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ============================================================
   WebSite — site-wide, injected in layout.tsx
   ============================================================ */
export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_CONFIG.url}/faq?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ============================================================
   SoftwareApplication — on home page
   ============================================================ */
export function HomeJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Sales & Marketing Software",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript. Requires HTML5 modern browser.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free forever plan with 50 leads, 100 email checks, and 50 AI drafts per month.",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "200",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "Lead generation from the live internet (4 engines)",
      "Deep email verification with 99.2% accuracy",
      "AI outreach message drafting in 6 proven writing styles",
      "Cold email campaign sending with inbox warmup",
      "Unified inbox with reply classification",
      "Per-campaign analytics and deliverability tracking",
      "Bring-your-own API keys for community members",
    ],
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ============================================================
   Product + Offers — on pricing page
   ============================================================ */
export function PricingJsonLd() {
  const paidPlans = PRICING_PLANS.filter((p) => p.price > 0);
  // Each paid plan has 2 offers: monthly + yearly
  const allOffers = paidPlans.flatMap((plan) => [
    {
      "@type": "Offer",
      name: `${SITE_CONFIG.name} ${plan.name} (Monthly)`,
      price: String(plan.price),
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(plan.price),
        priceCurrency: "USD",
        unitText: "per month",
      },
      description: plan.description,
      url: `${SITE_CONFIG.url}/pricing`,
    },
    {
      "@type": "Offer",
      name: `${SITE_CONFIG.name} ${plan.name} (Yearly)`,
      price: String(plan.priceYearly),
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(plan.priceYearly),
        priceCurrency: "USD",
        unitText: "per year",
      },
      description: `${plan.description} Billed annually — 2 months free.`,
      url: `${SITE_CONFIG.url}/pricing`,
    },
  ]);

  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${SITE_CONFIG.name} Subscription`,
    description: SITE_CONFIG.description,
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.name,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: String(PRICING_PLANS[1].price),
      highPrice: String(PRICING_PLANS[PRICING_PLANS.length - 1].priceYearly),
      offerCount: allOffers.length,
      offers: allOffers,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "200",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ============================================================
   FAQPage — on FAQ page
   ============================================================ */
export function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ============================================================
   BreadcrumbList — reusable
   ============================================================ */
export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
