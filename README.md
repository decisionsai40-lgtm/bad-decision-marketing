# Bad Decision Marketing

The public marketing site for Bad Decision — the all-in-one platform for outbound sales. Deployed to `baddecision.app`.

## What this is

- Next.js 15 (App Router) + TypeScript + Tailwind CSS v4
- Pure static + server-rendered marketing pages — no backend, no database
- Full legal pages: Privacy, Terms, Refund, Cookie Policy, DPA
- SEO: sitemap.xml, robots.txt, manifest, OG metadata
- 9 pages: Home, Pricing, How it works, Case studies, Guarantee, About, Contact, FAQ, + 5 legal pages

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Environment variables

Copy `.env.example` to `.env.local`. All vars are optional for the marketing site:

- `NEXT_PUBLIC_SITE_URL` — production URL (default: https://baddecision.app)
- `NEXT_PUBLIC_DASHBOARD_URL` — dashboard URL for CTAs (default: https://dashboard.baddecision.app)
- `NEXT_PUBLIC_SUPPORT_EMAIL` — support email shown in footer/contact (default: support@baddecision.app)

## Deployment (Vercel)

1. Push to `main` branch on GitHub
2. Vercel auto-deploys to `baddecision.app`
3. Set environment variables in Vercel dashboard (Project Settings → Environment Variables)

## Brand

- Primary color: #00a8cc (vibrant teal)
- Deep teal: #003d4d (footer, hero overlays)
- Font: Plus Jakarta Sans
- Card style: white cards on soft teal-tinted background

## Architecture

```
src/
├── app/
│   ├── layout.tsx              # Root layout: Navbar + main + Footer
│   ├── page.tsx                # Home (hero, social proof, problem/solution, engines, how it works, pipeline, features, pricing preview, FAQ, final CTA)
│   ├── globals.css             # Tailwind v4 + brand design system
│   ├── not-found.tsx           # 404
│   ├── sitemap.ts              # Auto-generated sitemap.xml
│   ├── robots.ts               # Auto-generated robots.txt
│   ├── manifest.ts             # PWA manifest
│   ├── icon.svg                # Favicon
│   ├── pricing/                # Pricing page + comparison table
│   ├── how-it-works/           # 4-step walkthrough
│   ├── case-studies/           # 3 testimonials with stats
│   ├── guarantee/              # 7-day money-back
│   ├── about/                  # Company story
│   ├── contact/                # Contact form (mailto fallback)
│   ├── faq/                    # Full FAQ grouped by category
│   ├── privacy/                # Privacy Policy (GDPR, CCPA, NDPA compliant)
│   ├── terms/                  # Terms of Service (with AUP)
│   ├── refund/                 # Refund Policy
│   ├── cookie-policy/          # Cookie Policy with cookie table
│   └── dpa/                    # Data Processing Addendum (GDPR Art 28)
├── components/
│   └── sections/
│       ├── navbar.tsx          # Sticky responsive navbar
│       ├── footer.tsx          # Dark teal footer with legal links
│       ├── page-header.tsx     # Shared page header
│       └── legal-layout.tsx    # Shared layout for legal pages
└── lib/
    └── utils.ts                # cn() helper + SITE_CONFIG + PRICING_PLANS + FAQS
```

## License

Proprietary — © Bad Decision. All rights reserved.
