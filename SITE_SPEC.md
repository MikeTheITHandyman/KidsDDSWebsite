# Kids Dentist Grayslake — Complete Site Specification

> **Purpose of this document:** A living reference for the current build state. Covers every route, component, design token, and content requirement so Claude Code can produce precise, context-rich work.

**Last updated:** 2026-05-20 — reconciled against actual source files.

---

## 1. Business Details

| Field | Value |
|---|---|
| Practice Name | Kids Dentist |
| Address | 160 Commerce Dr #100, Grayslake, IL 60030 |
| Phone | (847) 223-1400 (text/call) |
| Email | info@kidsdds.com |
| Website | kidsdds.com |
| Instagram | @kidsddsgrayslake |
| Facebook | facebook.com/kidsddsgrayslake |
| Specialty | Pediatric Dentistry **only** — no adult patients |
| Languages | English, Spanish (Hablamos Español) |

### Doctors
| Doctor | Credential | Bio Slug |
|---|---|---|
| Dr. Sonia Gutierrez | DDS | `dr-sonia-gutierrez` |
| Dr. Dave Rutcosky | DDS | `dr-dave-rutcosky` (leads Special Needs program) |
| Dr. Sahar Alrayyes | DDS | `dr-sahar-alrayyes` |
| Dr. Anne-Ashley Compton | DDS | `dr-anne-ashley-compton` |

All four are board-certified pediatric specialists.

### Office Hours
| Day | Hours (Footer display) | Hours (Schema.org) |
|---|---|---|
| Monday | 9:00 am – 5:00 pm | 08:00–17:00 |
| Tuesday | 9:00 am – 5:00 pm | 08:00–17:00 |
| Wednesday | 8:30 am – 5:00 pm | 08:00–17:00 |
| Thursday | 9:00 am – 5:00 pm | 08:00–17:00 |
| Friday | 8:00 am – 2:00 pm | 08:00–14:00 |

> **Note:** Footer display hours and Schema.org hours differ slightly. Reconcile before next audit.

### Key Trust Signals
- 650+ five-star Google reviews (4.8★)
- Same-day appointments available
- Emergency pediatric visits accepted
- In-network with Delta Dental and major PPOs + Medicaid/CHIP
- Board-certified pediatric specialists only
- Hablamos Español

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 + custom global CSS (`styles/global.css`) |
| Animation | Framer Motion (`motion`, `AnimatePresence`, `useScroll`, `useMotionValueEvent`) |
| CMS | Sanity (Studio at `/studio`) |
| Analytics | Google Analytics via `@next/third-parties/google` (`NEXT_PUBLIC_GA_ID` env var) |
| Payments | HostedPayNow (POST form in Footer; dedicated `/pay` page) |
| Images | `next/image` with descriptive `alt` tags |
| Fonts | Nunito (only font used site-wide) — weights 400–900 |

### Key Rules
- `'use client'` required at the top of any component using hooks, event handlers, or Framer Motion.
- Server components (no `'use client'`) for static page layouts — preferred for SEO and performance.
- All images use `next/image`. All `alt` tags must be highly descriptive.
- Every page exports a `metadata` object with `title`, `description`, `canonical`, and OpenGraph tags.
- Semantic HTML required: `<header>`, `<main>`, `<article>`, `<section>`, `<nav>`, `<footer>`.

---

## 3. Design System

### Color Palette (CSS Variables — `styles/global.css`)

| Variable | Hex | Usage |
|---|---|---|
| `--brand-600` | `#4A90A4` | Primary teal — headings, links, borders |
| `--brand-purple` | `#78509B` | Secondary purple — badges, section kickers |
| `--accent-500` | `#E8934F` | Primary CTA orange |
| `--cta-coral` | `#E97D63` | Coral — button gradients, hover states |
| `--cta-yellow` | `#F4C77F` | Warm yellow — decorative accents |
| `--serene-mint` | `#6BA899` | Mint/sage — icons, card accents |
| `--soft-sage` | `#8BA596` | Softer green — secondary accents |
| `--light-blue` | `#80D2F5` | Sky blue — backgrounds, badges |
| `--muted-700` | `#3D3D3D` | Primary body text |
| `--bg` | `#FAFAF8` | Page background — warm off-white (not clinical white) |
| `--max-width` | `1440px` | Max container width |

### Typography
- **Font:** Nunito, sans-serif (site-wide — no other font)
- **Headings:** `font-weight: 900`, `letter-spacing: -0.02em`
- **Body:** `font-weight: 500`, `line-height: 1.65–1.72`
- **Section kickers** (small label above h2): `font-size: 0.78rem`, `font-weight: 900`, `letter-spacing: 0.10em`, `text-transform: uppercase`, `color: var(--brand-purple)`
- **Responsive heading sizes:** `clamp()` — e.g., `clamp(1.9rem, 3.5vw, 2.6rem)`

### Button Variants (CSS classes in `global.css`)

| Class | Style |
|---|---|
| `.btn-primary` | Orange gradient `var(--accent-500)` → `var(--cta-coral)`, white text |
| `.btn-secondary` | Light blue tint bg, purple text, purple border |
| `.btn-purple` | Purple gradient `var(--brand-purple)` → `#a06fc8`, white text |
| `.btn-hero-primary` | Larger orange gradient — main hero CTA |
| `.btn-hero-call` | Transparent with teal border — secondary hero CTA |

All buttons: `border-radius: 100px`, `font-family: Nunito`, `font-weight: 700–800`, Framer Motion `whileHover` + `whileTap`.

### Card Patterns

**Service / Feature Card** (`.service-card`, `.vp-card`)
- `border-radius: 20px–28px`, `padding: 1.5rem–2.25rem`
- Soft gradient tinted background (per service/feature)
- Icon row, h3 teal heading, gray body text
- `whileHover`: lift `-5px` to `-6px`, elevated box shadow

**Review Card** (`.review-card`)
- White background, `border-radius: 24px`, `padding: 2rem`
- Star rating row, quote text, author name

### Navigation Dropdowns
Must use **inline styles** (not Tailwind utility classes) on `motion.div` containers — Tailwind v4 classes are unreliable on animated elements:
```tsx
style={{
  background: 'rgba(250,250,248,0.97)',
  backdropFilter: 'blur(14px)',
  WebkitBackdropFilter: 'blur(14px)',
  border: '1px solid rgba(74,144,164,0.14)',
  borderRadius: '1rem',
  boxShadow: '0 8px 32px rgba(74,144,164,0.18), 0 2px 8px rgba(0,0,0,0.08)',
  zIndex: 1050,
}}
```

### Animation Patterns
- **Page enter:** `initial={{ opacity: 0, y: 20–36 }}` → `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}`
- **Staggered children:** `transition={{ delay: 0, 0.1, 0.2, 0.3 }}`
- **Hover lift:** `whileHover={{ y: -6 }}`, spring `stiffness: 280, damping: 18`
- **Button press:** `whileTap={{ scale: 0.97 }}`
- **Ease curve:** `[0.22, 1, 0.36, 1]` (cast as `[number, number, number, number]` tuple for TypeScript)

### Responsive Breakpoints
| Breakpoint | Layout change |
|---|---|
| `max-width: 540px` | Single column; footer 1-col |
| `max-width: 768px` | Mobile nav (hamburger); condensed hero |
| `max-width: 900px` | 2-column footer grid |
| `1440px` | Full desktop — 3–4 column layouts |

---

## 4. Global Layout (`app/layout.tsx`)

Renders on every page in this order:
1. `<BannerWrapper>` → `<AnnouncementBanner />` — orange gradient top bar: "Check out our latest blog post ›" links to `/blog`. Hidden inside Studio.
2. `<Header />` — sticky top navigation
3. `<main className="container main-content">{children}</main>`
4. `<Footer />`
5. `<FloatingWidget />` — fixed bottom CTA
6. `<GoogleAnalytics>` — conditional on `NEXT_PUBLIC_GA_ID`

**Global JSON-LD Schema** (`Dentist` type) injected into `<head>`:
- name, url, telephone, image, medicalSpecialty, address, geo, openingHoursSpecification, sameAs, priceRange

---

## 5. Header (`components/Header.tsx`)

**Announcement bar** (inside Header, above nav): orange gradient, "Check out our latest blog post ›" → `/blog`. Hidden when `pathname.startsWith('/studio')`.

**Logo:** `/brand_assets/kids-dentist-logo.png` — 72px height, links to `/`.

**Desktop CTA buttons (right side of header):**
- "Text/Call us: (847) 223-1400" (`tel:+18472231400`) — fires `call_click` GA event (`location: 'header_desktop'`)
- "Directions" → Google Maps driving directions link

**Scroll behavior:** Background + shadow animate in at 50px scroll via `useScroll` + `useMotionValueEvent`.

**Mobile:** Hamburger at ≤768px. Slide-down menu with `AnimatePresence`. Body scroll locked when menu open. Mobile menu CTAs: "Text/Call us" + "Directions".

### Full Navigation Structure (actual `Header.tsx`)

```
Home                              /
About ▼
  About Us                        /about
  Meet the Dentists               /about/meet-the-dentists
  Meet the Team                   /about/meet-the-team
  Tour Our Office                 /about/tour-our-office
  Recent Events                   /about/recent-events
Services ▼
  All Services                    /services
  Preventive Dentistry            /services/preventive-dentistry
  Restorative Dentistry           /services/restorative
  Special Needs Dentistry         /services/special-needs
  Sedation Dentistry              /services/sedation-dentistry
  Emergency Dental Care           /services/emergency
For Patients ▼
  Child's First Visit             /for-patients/child-first-visit
  Insurance & Financing           /for-patients/insurance-info
FAQ                               /faq
Blog                              /blog
Contact                           /contact
```

---

## 6. Footer (`components/Footer.tsx`)

Gradient background: `--brand-purple` → `--brand-600` → `--serene-mint`. White text throughout.

**4-column grid** (2-col @ 900px, 1-col @ 540px):

**Col 1 — Brand**
- "Kids Dentist" wordmark + tagline
- Address link (Google Maps, opens in new tab) with location icon
- Phone link `tel:8472231400` — "Text/Call us: (847) 223-1400"
- Email link `info@kidsdds.com`

**Col 2 — Explore (Quick Links)**
- Our Services → `/services`
- Meet the Dentists → `/about/meet-the-dentists`
- My First Visit → `/for-patients/child-first-visit`
- Patient Forms → `/for-patients/patient-forms`
- Insurance Info → `/for-patients/insurance-info`
- Blog → `/blog`

**Col 3 — Office Hours**
Mon–Fri schedule (see Section 1 table above)

**Col 4 — Stay Connected**
- Facebook pill button → `https://www.facebook.com/kidsddsgrayslake`
- Instagram pill button → `https://www.instagram.com/kidsddsgrayslake/`
- "Book Appointment" pill → `/request-appointment`
- "Pay Now" motion button — `<form>` POST to HostedPayNow gateway (token embedded in component)
- "New patients always welcome. Hablamos Español."

**SEO service area block:** Inline paragraph naming Lake County cities (Grayslake, Waukegan, Libertyville, Mundelein, Vernon Hills, Lake Forest, Round Lake, Lindenhurst, Antioch, Gurnee, Zion).

**Bottom bar:** Copyright, Privacy Policy (`/privacy`), Sitemap (`/sitemap`).

---

## 7. Shared Components

| Component | Path | Description |
|---|---|---|
| `Header` | `components/Header.tsx` | Sticky nav, mobile hamburger, scroll-reactive |
| `Footer` | `components/Footer.tsx` | 4-col footer, social links, Pay Now form |
| `Hero` | `components/Hero.tsx` | Homepage hero with headline + CTAs |
| `QuickActionsBar` | `components/QuickActionsBar.tsx` | Fast-action strip (top of homepage, below hero) |
| `ServicesGrid` | `components/ServicesGrid.tsx` | Auto-rotating services carousel (4s, pauses on hover) |
| `MeetOurDoctors` | `components/MeetOurDoctors.tsx` | Homepage doctor cards (4-col grid) |
| `ReviewBubbles` | `components/ReviewBubbles.tsx` | Rotating testimonial carousel (Sanity-fed) |
| `ValueProps` | `components/ValueProps.tsx` | Homepage differentiator cards |
| `InsuranceBanner` | `components/InsuranceBanner.tsx` | Insurance highlight strip |
| `Button` | `components/Button.tsx` | Shared button primitive (variant, size, href/onClick) |
| `SubPageLayout` | `components/SubPageLayout.tsx` | Inner-page wrapper with gradient hero band; props: `kicker`, `title`, `subtitle`, `gradient` (`'blue'`\|`'green'`\|`'amber'`) |
| `AnimatedSection` | `components/AnimatedSection.tsx` | Scroll-triggered Framer Motion fade-in wrapper (prop: `delay`) |
| `FaqAccordion` | `components/FaqAccordion.tsx` | Expand/collapse FAQ list |
| `FirstVisitTimeline` | `components/FirstVisitTimeline.tsx` | 6-step animated first-visit timeline |
| `AnnouncementBanner` | `components/AnnouncementBanner.tsx` | Orange top bar linking to blog |
| `BannerWrapper` | `components/BannerWrapper.tsx` | Client wrapper for AnnouncementBanner |
| `FloatingWidget` | `components/FloatingWidget.tsx` | Persistent bottom-screen CTA widget |
| `InstagramFeed` | `components/InstagramFeed.tsx` | Instagram highlight grid (6 Story Highlight boxes) |
| `ValueProposition` | `components/ValueProposition.tsx` | Modular value prop card (alternate/standalone variant) |

### SubPageLayout gradient variants
- `'blue'` — teal/blue tones (default for most service + about pages)
- `'green'` — mint/green tones (insurance, preventive pages)
- `'amber'` — warm orange tones (emergency, urgent pages)

### FirstVisitTimeline steps
1. Welcome & Check-In
2. Meet the Team
3. Initial Exam
4. Fun Cleaning
5. Treatment Plan
6. Happy Goodbye

---

## 8. Homepage (`app/page.tsx`)

Renders these sections **in order**:

```
<QuickActionsBar />       ← fast-access action strip
<Hero />                  ← main hero + CTAs
<ServicesGrid />          ← rotating services carousel
<InsuranceBanner />       ← insurance highlight strip
<MeetOurDoctors />        ← doctor cards
<ReviewBubbles />         ← Sanity-fetched reviews (ISR 60s)
<ValueProps />            ← differentiator cards
```

**Note:** `InstagramFeed` component exists but is **not** currently rendered on the homepage.

**SEO (homepage):**
- Title: "Pediatric Dentist Grayslake, IL | Kids Dentist"
- Description: "Grayslake's trusted pediatric dentist serving families from Waukegan, Libertyville, Mundelein, Vernon Hills, and Lake Forest. 650+ five-star reviews. Emergency visits available. In-Network with Delta Dental. Call (847) 223-1400."
- Canonical: `https://www.kidsdds.com/`

### Hero (`components/Hero.tsx`)
- Left: Badge ("Pediatric Dentist · Grayslake, IL"), H1 headline, sub-headline, two CTA buttons, trust chips
- Right: Blob-shaped video container with looping `/brand_assets/hero-video.mp4` + decorative circles
- Trust chips: "4.8★ Google Reviews" | "Same-Day Available" | "Emergency Visits" | "Hablamos Español"
- Background: animated radial gradient blobs (`@keyframes blob-float`)

### ServicesGrid (`components/ServicesGrid.tsx`)
Auto-rotating carousel (4s interval, pauses on hover). Shows 3 of 5 cards at a time. Prev/next arrows + dot indicators.

**5 Services:**
| Title | href |
|---|---|
| Preventive Dentistry | `/services/preventive-dentistry` |
| Restorative Dentistry | `/services/restorative-dentistry` |
| Special Needs Dentistry | `/services` |
| Sedation Dentistry | `/services/sedation-dentistry` |
| Emergency Pediatric Dentist | `/services` |

### MeetOurDoctors (`components/MeetOurDoctors.tsx`)
- 4-column doctor grid; each card: blob-shaped headshot, name, role, "Meet Dr. [FirstName] ›" link
- Section CTAs: "Meet the Dentists" (orange) → `/about/meet-the-dentists` | "Meet the Team" (teal border) → `/about/meet-the-team`

**Doctor card CTA names:**
| Doctor | CTA first name | Bio URL |
|---|---|---|
| Dr. Sonia Gutierrez | Sonia | `/about/meet-the-dentists/dr-sonia-gutierrez` |
| Dr. Dave Rutcosky | Dave | `/about/meet-the-dentists/dr-dave-rutcosky` |
| Dr. Sahar Alrayyes | Sahar | `/about/meet-the-dentists/dr-sahar-alrayyes` |
| Dr. Anne-Ashley Compton | **Ashley** | `/about/meet-the-dentists/dr-anne-ashley-compton` |

### ReviewBubbles (`components/ReviewBubbles.tsx`)
Rotating testimonial carousel. Pulls featured reviews from Sanity via `featuredReviewsQuery`. Displays 4.8★ badge + 650+ count. Link to Google reviews + CTA to leave a review. Accepts `sanityReviews` prop (type `SanityReview[]`).

---

## 9. Full Route Inventory

### Status key
- **Built** — complete, production-ready
- **Exists** — file exists, needs content
- **Redirect** — route exists as legacy; should 301 to canonical

---

### About Section
| Route | Status | Notes |
|---|---|---|
| `/about` | Exists | Practice overview, history, mission |
| `/about/meet-the-dentists` | Exists | Doctor listing grid |
| `/about/meet-the-dentists/dr-sonia-gutierrez` | Exists | Individual bio |
| `/about/meet-the-dentists/dr-dave-rutcosky` | Exists | Individual bio |
| `/about/meet-the-dentists/dr-sahar-alrayyes` | Exists | Individual bio |
| `/about/meet-the-dentists/dr-anne-ashley-compton` | Exists | Individual bio |
| `/about/meet-the-team` | Exists | Staff page |
| `/about/tour-our-office` | Exists | Office photo tour |
| `/about/recent-events` | Exists | Events grid (Sanity-powered) |
| `/about/recent-events/[slug]` | Exists | Individual event detail |
| `/about/community-involvement` | Exists | Community page |
| `/about/why-choose-us` | Exists | Differentiators page |

**Legacy / duplicate doctor bio paths (redirect candidates):**
- `app/about/sonia-gutierrez-dds/` → `/about/meet-the-dentists/dr-sonia-gutierrez`
- `app/about/dave-rutcosky-dds/` → `/about/meet-the-dentists/dr-dave-rutcosky`
- `app/about/sahar-alrayyes-dds/` → `/about/meet-the-dentists/dr-sahar-alrayyes`
- `app/about/anne-ashley-compton-dds/` → `/about/meet-the-dentists/dr-anne-ashley-compton`
- `app/about/meet-the-dentists/sonia-gutierrez-dds/` → same
- `app/about/meet-the-dentists/dave-rutcosky-dds/` → same
- `app/about/meet-the-dentists/sahar-alrayyes-dds/` → same
- `app/about/meet-the-dentists/anne-ashley-compton-dds/` → same

---

### Services Section
| Route | Status | Notes |
|---|---|---|
| `/services` | Built | 5-card grid + insurance teaser + CTAs |
| `/services/preventive-dentistry` | Exists | Cleanings, fluoride, sealants, X-rays |
| `/services/restorative` | Exists | Fillings, crowns, pulp therapy, extractions |
| `/services/restorative-dentistry` | Redirect | Duplicate of `/services/restorative` |
| `/services/sedation-dentistry` | Exists | Nitrous, oral sedation, general anesthesia |
| `/services/special-needs` | Exists | Autism, Down syndrome, CP, SPD |
| `/services/emergency` | Exists | Same-day emergency visits |
| `/services/checkups-and-cleanings` | Exists | Preventive detail |
| `/services/orthodontics` | Exists | Orthodontics |
| `/services/general-anesthesiology` | Exists | General anesthesia detail |
| `/services/pulp-therapy` | Exists | Pulp therapy detail |
| `/services/tooth-extractions` | Exists | Extractions detail |

**Legacy top-level service routes (redirect candidates):**
- `/preventive-dentistry` → `/services/preventive-dentistry`
- `/special-needs-dentistry` → `/services/special-needs`
- `/nitrous-oxide-sedation` → `/services/sedation-dentistry`
- `/emergency-dentistry` → `/services/emergency`

---

### For Patients Section
| Route | Status | Notes |
|---|---|---|
| `/for-patients` | Exists | Hub page |
| `/for-patients/child-first-visit` | Exists | Uses `FirstVisitTimeline`; reassure parents/kids |
| `/for-patients/patient-info` | Exists | Patient info hub |
| `/for-patients/patient-forms` | Exists | Downloadable/embedded forms |
| `/for-patients/insurance-info` | Built | In-network providers, financing, Medicaid |
| `/for-patients/dental-financing` | Exists | CareCredit / financing detail |

**Insurance page (Built) details:**
- In-network: Aetna, Cigna, Delta Dental, Guardian, UnitedHealthcare + Medicaid/CHIP
- Out-of-network and CareCredit sections
- "No Insurance? No Problem." callout
- CTA: Call + View Patient Forms

---

### Who We Treat Section
| Route | Status |
|---|---|
| `/who-we-treat` | Exists |
| `/who-we-treat/childrens-dentistry` | Exists |
| `/who-we-treat/dentistry-for-toddlers` | Exists |
| `/who-we-treat/advanced-dental-technology` | Exists |

---

### Reviews Section
| Route | Status |
|---|---|
| `/reviews` | Exists |
| `/reviews/written-reviews` | Exists |
| `/reviews/video-testimonials` | Exists |

---

### Blog
| Route | Status | Notes |
|---|---|---|
| `/blog` | Built | Listing page with Sanity CMS; `BlogGrid.tsx` client component |
| `/blog/[...slug]` | Built | Individual post; Sanity portable text rendering |

---

### Conversion & Utility Routes
| Route | Status | Notes |
|---|---|---|
| `/contact` | Exists | Uses `ContactContent.tsx`; split contact info + form |
| `/contact/office-info` | Exists | Office detail page |
| `/request-appointment` | Exists | Uses `AppointmentForm.tsx`; primary conversion page |
| `/faq` | Exists | Uses `FaqAccordion`; 10–15 questions, categorized |
| `/ask-the-doctor` | Exists | AI-powered Q&A; uses `AskDoctorForm.tsx` |
| `/pay` | Exists | Online bill payment page |
| `/studio` | Built | Sanity Studio (hidden from Header when in Studio) |

---

## 10. API Routes

| Route | File | Purpose |
|---|---|---|
| `POST /api/appointment` | `app/api/appointment/route.ts` | Appointment form handler |
| `POST /api/contact` | `app/api/contact/route.ts` | Contact form handler |
| `POST /api/ask-doctor` | `app/api/ask-doctor/route.ts` | Ask the Doctor AI endpoint |

---

## 11. Sanity CMS Integration

- Client: `sanity/lib/client.ts`
- Queries: `sanity/lib/queries.ts`
- Studio: `/studio` route
- **Homepage reviews:** `featuredReviewsQuery`, ISR `revalidate: 60`
- **Blog posts:** `[...slug]` dynamic route
- **Recent Events:** `EventsGrid.tsx` (`app/about/recent-events/`)

---

## 12. SEO Requirements (Every Page)

```typescript
export const metadata: Metadata = {
  title: '[Page Title] | Kids Dentist',           // template adds " | Kids Dentist" automatically
  description: '[140–160 char unique description with local keywords]',
  alternates: { canonical: 'https://www.kidsdds.com/[route]' },
  openGraph: {
    title: '[Page Title] | Kids Dentist Grayslake, IL',
    description: '[OG description]',
    url: 'https://www.kidsdds.com/[route]',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}
```

**Local SEO keywords:**
- "pediatric dentist Grayslake IL" / "kids dentist Grayslake"
- "children's dentist Lake County IL"
- "dentist for kids near me"
- Service-level: "sedation dentistry for kids", "emergency pediatric dentist", "special needs dentistry"

**Global schema:** `Dentist` JSON-LD in `app/layout.tsx` — covers name, address, geo, phone, hours, medicalSpecialty, sameAs.

**Known SEO issues to address:**
- Multiple duplicate doctor bio routes — needs canonical tags or 301 redirects in `next.config.ts`
- Legacy top-level service routes — same
- Schema.org hours vs Footer hours discrepancy

---

## 13. Brand Assets (`/public/brand_assets/`)

| File | Usage |
|---|---|
| `kids-dentist-logo.png` | Header logo (189×104px source, rendered 72px tall) |
| `hero-video.mp4` | Hero looping background video |
| `hero-photo.jpg` | Hero fallback image |
| `index-dr-sonia.jpg` | Dr. Sonia Gutierrez headshot |
| `index-dr-dave.jpg` | Dr. Dave Rutcosky headshot |
| `index-dr-alrayyes.jpg` | Dr. Sahar Alrayyes headshot |
| `index-dr-ashley.jpg` | Dr. Anne-Ashley Compton headshot |

Additional office photos, team photos, and service illustrations go into `/public/brand_assets/` as available. Use descriptive `next/image` placeholders when assets aren't yet ready.

---

## 14. Conversion Architecture

**Primary CTA (orange/accent — most prominent):**
- "Request Appointment" → `/request-appointment`
- Hero section buttons, Services page bottom CTA

**Secondary CTA (teal/brand):**
- "Text/Call us: (847) 223-1400" — `tel:+18472231400`
- GA event `call_click` tracked (location: `header_desktop` or `header_mobile`)
- "Directions" → Google Maps driving link

**Persistent CTAs:**
- `FloatingWidget` — bottom-screen, site-wide
- Header desktop: phone + directions
- Header mobile menu: phone + directions
- Footer: Book Appointment + Pay Now

**Payment flow:**
- Footer "Pay Now" button → HostedPayNow POST form (token embedded in `Footer.tsx`)
- `/pay` page — dedicated online payment page

---

## 15. Environment Variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID |
| Sanity vars | Studio/client connection (standard Sanity Next.js env setup) |

---

## 16. Prompt-Writing Guide for Claude Code

Structure prompts like this:

```
Build the [Page Name] page at [route] for the Kids Dentist Grayslake website.

Context:
- Next.js 15 App Router, TypeScript, Tailwind CSS v4, Framer Motion.
- ALWAYS invoke the frontend-design skill before writing any component code (per CLAUDE.md).
- Design tokens: CSS vars from global.css (see site_spec.md §3).
- Use <SubPageLayout kicker="[kicker]" title="[title]" gradient="[variant]" /> for the page hero.
- Reuse existing components where possible — see site_spec.md §7 for the full list.

This page must include:
[Specific sections from §9 of site_spec.md]

SEO: export metadata with title "[Title] | Kids Dentist" and a 150-char description targeting [keywords].
Include alternates.canonical for https://www.kidsdds.com/[route].
```

---

*Reference CLAUDE.md for Claude Code-specific rules (design skill, component structure, SEO warnings).*
