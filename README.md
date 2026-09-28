# Advocate Upnishad Sharma — Official Website

> **Production-ready, trilingual (English, Hindi, Punjabi) official web presence for Adv. Upnishad Sharma, Advocate practicing before the Punjab & Haryana High Court, District Court Panchkula, and Sub-Divisional Court Kalka.**

---

## 1. Quick Start

### Prerequisites
- Node.js 18.18+ or 20+
- npm 9+

### Installation
```bash
# Clone or navigate to the repository
cd "e:\UPNISHAD WEBSITE"

# Install dependencies
npm install

# Verify translation parity across EN, HI, PA (175 verified keys)
npm run verify-translations

# Run local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) (auto-redirects to `/en`).

### Production Build
```bash
npm run build
npm start
```
This builds all 72+ static multilingual routes with full SSG prerendering and zero runtime errors.

---

## 2. Core Architecture & Tech Stack

- **Framework:** Next.js 15 (App Router, strict mode, zero client hydration errors)
- **Internationalization:** `next-intl` with per-locale routing (`/en`, `/hi`, `/pa`), automatic negotiation, and cookie persistence
- **Styling:** Tailwind CSS with CSS Variables (`src/styles/tokens.css`) strictly matching the **Light Minimalist Palette**:
  - Background: `#EEF0F2` (Warm porcelain grey)
  - Text: Near-black `#0E0E10` / charcoal `#33373D`
  - Accent: Antique Bronze `#8A6A3B` / Warm Gold `#C4A576`
  - Dark container overlays: Rich charcoal `#161719`
- **Multi-Script Typography:**
  - **English:** `Manrope` (Variable geometric sans-serif)
  - **Hindi:** `Noto Sans Devanagari` (Line-height adjusted to `1.45+` to protect vowel matras from clipping)
  - **Punjabi:** `Noto Sans Gurmukhi` (Line-height adjusted to `1.45+` with explicit handling of sihari and bindi)
- **Animations:** GSAP & ScrollTrigger with hardware-accelerated smooth scrubbing and Lenis smooth scrolling
- **Forms & Validation:** Zod schema validation with client feedback, server actions, honeypot spam traps, and Devanagari/Gurmukhi UTF-8 safety
- **SEO & Compliance:**
  - Mandatory Bar Council of India (BCI) acknowledgment modal with 30-day session memory
  - Dynamic `sitemap.xml` with bidirectional `hreflang` tags across English, Hindi, Punjabi, and `x-default`
  - JSON-LD schemas: `LegalService`, `Attorney`, `BreadcrumbList`, `FAQPage`, `Article`
  - Hardened HTTP security headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options)

---

## 3. Project File Structure

```text
├── public/
│   ├── images/
│   │   ├── portrait.jpg          # Advocate's official portrait
│   │   └── statue.png            # Transparent bronze Lady Justice sculpture
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx        # Multi-script html layout, LegalService JSON-LD, skip-to-content
│   │   │   ├── page.tsx          # Homepage with reference motion sections
│   │   │   ├── about/            # Advocate biography, enrolment, and principles
│   │   │   ├── courts/           # High Court, District Court, Kalka Chambers
│   │   │   ├── practice-areas/   # 10 Practice Disciplines index
│   │   │   │   └── [slug]/       # Practice area detail with statutory context & FAQs
│   │   │   ├── fees/             # Transparent consultation tiers & Access to Justice policy
│   │   │   ├── insights/         # Legal articles index
│   │   │   │   └── [slug]/       # Full article reader with educational disclaimer & Article schema
│   │   │   ├── contact/          # Interactive form, phone, email, Google Maps embed
│   │   │   ├── disclaimer/       # Full statutory Bar Council of India disclaimer
│   │   │   ├── privacy-policy/   # Client privacy terms
│   │   │   └── terms/            # Terms of use
│   │   ├── sitemap.ts            # Multilingual sitemap generator with x-default
│   │   ├── robots.ts             # Search engine crawler policies
│   │   └── globals.css           # Core typography, highlight pill, and tokens
│   ├── components/
│   │   ├── layout/               # Navbar, Footer, DisclaimerModal, WhatsAppFloat
│   │   ├── sections/             # HeroSection, StatementSection, StatsAndPortraitShowcase
│   │   ├── seo/                  # JsonLd.tsx (LegalService, Breadcrumbs, FAQs, Article)
│   │   └── ui/                   # LaurelBadge, ScalesIcon, SocialIcons (LinkedIn, Instagram)
│   ├── features/
│   │   ├── contact/              # schema.ts, action.ts, ContactForm.tsx
│   │   ├── insights/             # insights-data.ts (3 bilingual sample guides)
│   │   └── practice-areas/       # practice-data.ts (Statutory context, steps, FAQs)
│   ├── i18n/                     # request.ts, routing.ts (locales: en, hi, pa)
│   ├── lib/
│   │   ├── site-config.ts        # SINGLE SOURCE OF TRUTH (Client facts, courts, contact info)
│   │   └── fonts.ts              # Per-locale font loader
│   └── messages/
│       ├── en.json               # 175 English UI translation keys
│       ├── hi.json               # 175 Hindi UI translation keys
│       └── pa.json               # 175 Punjabi UI translation keys
├── scripts/
│   └── verify-translations.mjs   # Translation parity validator script
├── TRANSLATION_REVIEW.md         # Full legal terminology checklist for advocate review
├── next.config.ts                # Security headers, image optimization, next-intl plugin
└── package.json
```

---

## 4. Single Source of Truth (`src/lib/site-config.ts`)

All advocate credentials, contact numbers, court locations, and fees are defined once in [`src/lib/site-config.ts`](file:///e:/UPNISHAD%20WEBSITE/src/lib/site-config.ts) and shared across the entire application:

- **Full Name:** Adv. Upnishad Sharma (अधिवक्ता उपनिषद शर्मा / ਐਡਵੋਕੇਟ ਉਪਨਿਸ਼ਦ ਸ਼ਰਮਾ)
- **Bar Council:** Bar Council of Punjab & Haryana
- **Enrolment Number:** `PH/13540/2025` (Enrolled 2025)
- **Mobile Phone:** `+91 70560 99998`
- **Landline:** `01733-297414`
- **Email:** `S.upnishad99@gmail.com`
- **Chambers:** Shop No. 77, Near M.C. Office, Gurbax Colony, Kalka, Distt. Panchkula, Haryana – 133302
- **Court Seat:** Seat No. 15, Sub-Divisional Judicial Court, Kalka
- **Courts of Practice:**
  1. Punjab & Haryana High Court, Chandigarh
  2. District & Sessions Court, Panchkula
  3. Sub-Divisional Judicial Court, Kalka
- **LinkedIn:** [https://www.linkedin.com/in/upnishad-sharma-481811227](https://www.linkedin.com/in/upnishad-sharma-481811227)
- **Instagram:** [https://www.instagram.com/upnishadsharmaaa](https://www.instagram.com/upnishadsharmaaa)

---

## 5. Content Editing & Translation Guide

### How to update website text
1. Open the relevant language file in `src/messages/`:
   - `en.json` for English
   - `hi.json` for Hindi
   - `pa.json` for Punjabi
2. Maintain identical key structure across all three files.
3. Run the automated parity checker:
   ```bash
   node scripts/verify-translations.mjs
   ```

### How to add or edit practice areas
- Edit `practiceAreas` in [`src/lib/site-config.ts`](file:///e:/UPNISHAD%20WEBSITE/src/lib/site-config.ts).
- Add statutory context, procedural steps, and FAQs in [`src/features/practice-areas/practice-data.ts`](file:///e:/UPNISHAD%20WEBSITE/src/features/practice-areas/practice-data.ts).

### How to add or edit legal insight articles
- Open [`src/features/insights/insights-data.ts`](file:///e:/UPNISHAD%20WEBSITE/src/features/insights/insights-data.ts).
- Add a new `ArticleContent` entry with title, excerpt, and sections in EN, HI, PA. Static detail pages and sitemap entries will generate automatically on build.

---

## 6. Deployment to Vercel

1. Push this repository to GitHub or GitLab:
   ```bash
   git init
   git add .
   git commit -m "Initial release of Adv. Upnishad Sharma legal website"
   git remote add origin https://github.com/your-username/upnishad-advocate.git
   git push -u origin main
   ```
2. In the [Vercel Dashboard](https://vercel.com):
   - Select **Add New Project** and import the repository.
   - Framework preset: **Next.js**.
   - Under **Environment Variables**, add:
     - `NEXT_PUBLIC_SITE_URL`: `https://www.advupnishadsharma.com` (or your chosen production domain)
     - `SMTP_HOST`: `smtp.gmail.com` (if connecting live email dispatch)
     - `SMTP_PORT`: `587`
     - `SMTP_USER`: `S.upnishad99@gmail.com`
     - `SMTP_PASS`: Your Google App Password (generated at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords))
     - `CONTACT_NOTIFICATION_EMAIL`: `S.upnishad99@gmail.com`
3. Click **Deploy**. Vercel will automatically build and distribute the site globally with zero configuration.

---

## 7. Placeholder Checklist (`[FILL: ...]`) & Assumptions

The following items are placeholders or assumptions clearly marked in code that Adv. Upnishad Sharma should review and update as desired:

| Location | Tag / Item | Current Setting / Value | Action Needed by Client |
| :--- | :--- | :--- | :--- |
| [`src/lib/site-config.ts`](file:///e:/UPNISHAD%20WEBSITE/src/lib/site-config.ts) | `domain` | `https://www.advupnishadsharma.com` | Replace with final purchased custom domain |
| [`src/lib/site-config.ts`](file:///e:/UPNISHAD%20WEBSITE/src/lib/site-config.ts) | `monogram` / Logo | Stylized `"US"` / Scales icon | If custom advocate crest / logo PNG is available, drop in `public/images/logo.png` |
| [`src/lib/site-config.ts`](file:///e:/UPNISHAD%20WEBSITE/src/lib/site-config.ts) | `officeHours` | Mon–Sat: 9:00 AM – 7:00 PM | Confirm or amend consultation working hours |
| [`src/lib/site-config.ts`](file:///e:/UPNISHAD%20WEBSITE/src/lib/site-config.ts) | `googleMapsUrl` | `https://maps.app.goo.gl/rfahgxwwHyqGizZA9` | Configured with verified Kalka chambers location |
| [`src/app/[locale]/about/page.tsx`](file:///e:/UPNISHAD%20WEBSITE/src/app/[locale]/about/page.tsx) | `[FILL: Education]` | Bachelor of Laws (LL.B.) | Add exact university / law college name and graduation year |
| [`src/features/insights/insights-data.ts`](file:///e:/UPNISHAD%20WEBSITE/src/features/insights/insights-data.ts) | Educational Guides | 3 sample articles with `SAMPLE: REVIEW BEFORE PUBLISHING` banners | Review content or replace with advocate's personal commentary |
| `.env.example` | SMTP Credentials | Google App Password | Configure SMTP environment variables on production hosting |

---

## 8. Compliance & Ethics Notice
In strict accordance with the **Bar Council of India Rules (Rule 36, Section IV, Chapter II, Part VI)**:
- No solicitation, advertising, or fee touting is conducted on this site.
- No client testimonials, case win rates, or boastful superlatives are displayed.
- The interactive BCI compliance modal requires explicit visitor consent acknowledging that information is sought voluntarily.
