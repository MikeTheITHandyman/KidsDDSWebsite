# Kids Dentist Grayslake — Complete Site Specification

> **Purpose of this document:** A living reference for the current build state. Covers every route, component, design token, and content requirement so Claude Code can produce precise, context-rich work.

**Last updated:** 2026-07-07 — Doctor credentials corrected site-wide (all four doctors now carry "DDS, MS"); clinical accuracy pass (general anesthesia terminology corrected, removed fabricated Dr. Rutcosky anesthesia claim); "Dental Emergency" QuickActionsBar pill changed to neutral ghost style; `/services/emergency` page redesigned with `EmergencyTriage` (Yes/No patient triage widget revealing after-hours line `(847) 241-8886` for existing patients, or office hours + main number for non-patients); contact form removed from emergency page; `Footer.tsx` tagline "Dentistry" capitalized; all four doctor bios (`drProfiles` namespace) replaced with exact production text; `about` namespace short bios + `meetDentists` highlight bullets + `drProfiles` credential arrays rewritten to remove fabricated credentials (sedation certified, nitrous oxide certified, special needs fellowship, etc.) and replaced with verified facts from production bios (ABPD Diplomate, UIC residency, FAAPD Fellowship, etc.); in-network insurance list updated to 7 providers (Aetna, Cigna, Delta Dental Premier, Guardian, Lincoln Financial, Principal, United Healthcare) — Medicaid/CHIP removed from all patient-facing copy; restorative dentistry crown copy changed from "zirconia/stainless steel crowns" to "dental crowns"; FAQ expanded from 5 Qs (3 groups) to 10 Qs (4 groups) with new Orthodontics & Braces category; first-visit timeline updated to 4 steps (A Warm Welcome, A Gentle Exam, Teething & Home Care Tips, The Toy Tower Reward); Ask the Doctor "How it works" paragraph updated; all changes applied to both `en.json` and `es.json`.

**Previously (2026-07-01):** `/about/meet-the-team` built out with real staff headshots (`TeamCard.tsx`, 12-person roster, nametag pills, job titles); real headshots replace all 4 doctor photos (home page + meet-the-dentists); homepage emergency-service title fixed to "Dentistry"; mobile announcement bar stacks into two rows.

---

## 1. Business Details

| Field | Value |
|---|---|
| Practice Name | Kids Dentist |
| Address | 160 Commerce Dr #100, Grayslake, IL 60030 |
| Phone | (847) 223-1400 (text/call) |
| After-Hours Emergency | (847) 241-8886 — **existing patients only**; displayed via `EmergencyTriage` widget |
| Email | info@kidsdds.com |
| Website | kidsdds.com |
| Instagram | @kidsddsgrayslake |
| Facebook | facebook.com/kidsddsgrayslake |
| Specialty | Pediatric Dentistry **only** — no adult patients |
| Languages | English, Spanish (Hablamos Español) |

### Doctors
| Doctor | Credential | Bio Slug |
|---|---|---|
| Dr. Sonia Gutierrez | DDS, MS | `dr-sonia-gutierrez` |
| Dr. Dave Rutcosky | DDS, MS | `dr-dave-rutcosky` |
| Dr. Sahar Alrayyes | DDS, MS | `dr-sahar-alrayyes` |
| Dr. Anne-Ashley Compton | DDS, MS | `dr-anne-ashley-compton` |

All four completed their pediatric dentistry specialty at the University of Illinois at Chicago and are Diplomates of the American Board of Pediatric Dentistry. Dr. Alrayyes additionally holds FAAPD (Fellow) status. All four hold a Master of Science in Oral Sciences.

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
- In-network with Aetna, Cigna, Delta Dental Premier, Guardian, Lincoln Financial, Principal, and United Healthcare
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
| i18n | next-intl v4.13.0 — see §17 for full setup |
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

**Phase 1 overhaul 2026-06-24.** New high-energy pediatric palette. Old teal-primary replaced with purple-primary + teal-accent split.

| Variable | Hex | Role |
|---|---|---|
| `--brand-purple` | `#6B4BC8` | **Primary** — H1/H2 headings, global nav links, primary borders, footer background |
| `--brand-600` | `#6B4BC8` | Alias for `--brand-purple` — all legacy heading/nav references auto-resolve |
| `--brand-teal` | `#3DBDBD` | **Accent** — subheadings, interactive icons, service card borders, animated blobs |
| `--accent-500` | `#EF6C1A` | **Orange CTA** — reserved for high-converting points: floating widget, hero CTA, emergency callouts |
| `--cta-coral` | `#E05210` | Darker orange — gradient pair for `--accent-500` buttons |
| `--cta-yellow` | `#F5C842` | **Energy** — uppercase section kickers (+ `text-shadow`), star ratings, micro-animations |
| `--accent-pink` | `#FF6B8A` | **Playful** — "Hablamos Español" badge, nav hover states, decorative gradients |
| `--bg-lavender` | `#EAE5F7` | Secondary card backgrounds |
| `--bg-teal-tint` | `#E6F6F6` | Alternating full-width section backgrounds (ReviewBubbles, ValueProps green card) |
| `--muted-700` | `#3D3D3D` | Body text — unchanged |
| `--bg` | `#FDF8F2` | Page canvas — warm off-white, unchanged |
| `--serene-mint` | `#6BA899` | Mint — footer gradient tail |
| `--soft-sage` | `#8BA596` | Soft green — secondary accents |
| `--light-blue` | `#80D2F5` | Sky blue — legacy references |
| `--max-width` | `1440px` | Max container width |

**Accessibility:** `--brand-teal` (2.9:1) and `--accent-pink` (2.3:1) are decorative/icon/hover only — not body text. `--cta-yellow` kickers get `text-shadow` globally. `--accent-500` on large button text passes at 3:1 large-text threshold.

### Typography
- **Font:** Nunito, sans-serif (site-wide — no other font)
- **Headings:** `font-weight: 900`, `letter-spacing: -0.02em`
- **Body:** `font-weight: 500`, `line-height: 1.65–1.72`
- **Section kickers** (small label above h2): `font-size: 0.78rem`, `font-weight: 900`, `letter-spacing: 0.10em`, `text-transform: uppercase`, `color: var(--cta-yellow)`, `text-shadow: 0 1px 3px rgba(0,0,0,0.16)`
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
1. `<BannerWrapper>` → `<AnnouncementBanner />` — **purple gradient** top bar. Sanity-powered: fetches the latest featured event (`featuredEventQuery`, ISR 300s); links to `/about/recent-events/[slug]`. Returns `null` if no event is published. Hidden inside Studio via `BannerWrapper` (client component that checks pathname).
2. `<Header />` — sticky top navigation (includes its own **orange** blog announcement bar — see §5)
3. `<main className="container main-content">{children}</main>`
4. `<Footer />`
5. `<FloatingWidget />` — fixed bottom CTA
6. `<GoogleAnalytics>` — conditional on `NEXT_PUBLIC_GA_ID`

**Global JSON-LD Schema** (`Dentist` type) injected into `<head>`:
- name, url, telephone, image, medicalSpecialty, address, geo, openingHoursSpecification, sameAs, priceRange

---

## 5. Header (`components/Header.tsx`)

**Announcement bar** (rendered by `Header.tsx` itself, *above* the sticky `<motion.header>` in the JSX return): orange gradient, "Check out our latest blog post — "[post title]" ›" → `/blog`. The latest post title is fetched from Sanity and injected into the bar so visitors know what they're clicking on. Hidden when `isStudio`. This is **separate** from the purple Sanity event banner in §4 — both may appear stacked. On mobile (`≤768px`), the announcement text and the post title stack into two rows (`.announcement-link{flex-direction:column}` in `styles/global.css`) instead of the single-row layout used on desktop.

**Logo:** `/brand_assets/kids-dentist-logo.png` — 72px height, links to `/`.

**Nav alignment:** Nav links are **left-justified** (immediately after the logo), with `SiteSearch` pushed to the far right via `header-actions`. `margin-left: auto` is on `.header-actions`, not on `.site-nav`.

**Two-row desktop layout** (stacks inside `motion.header`):
- **Row 1 — Utility bar** (`.header-utility-bar-track`): right-aligned, slim (`0.42rem` padding). Contains `LanguageSwitcher`, phone CTA, and Directions CTA. Separated from Row 2 by a `1px` teal hairline border. Hidden at ≤768px. Buttons use `.utility-btn` modifier — compact padding (`0.42rem 1.1rem`), `0.82rem` font, `white-space: nowrap` (fixes phone number word-wrap).
- **Row 2 — Main nav** (`.header-inner`): Logo + nav links + `SiteSearch` pill. Vertical padding reduced to `0.7rem` to keep combined header height reasonable.

**Desktop CTAs (utility bar, Row 1):**
- "Text/Call us: (847) 223-1400" (`tel:+18472231400`) — fires `call_click` GA event (`location: 'header_desktop'`)
- "Directions" → Google Maps driving directions link

**Scroll behavior:** Background + shadow animate in at 50px scroll via `useScroll` + `useMotionValueEvent`. Applies to the entire `motion.header` (both rows).

**Mobile:** Utility bar hidden. Hamburger at ≤768px. Slide-down menu with `AnimatePresence`. Body scroll locked when menu open. Mobile menu CTAs: "Text/Call us" + "Directions". A search icon button sits left of the hamburger — tapping it toggles the mobile search panel (mutually exclusive with the nav menu).

**Global Site Search** (`components/SiteSearch.tsx` — rendered in `Header.tsx`):
- Desktop: compact pill input (175–215px), sole item in `.header-actions` (Row 2, right side)
- Mobile: icon button toggles a spring-animated slide-down search panel above the nav drawer
- Static 30-item index covering all service, FAQ, about, patient, and contact routes
- Weighted scoring: title = 4pt, category = 2pt, keywords = 1pt, description = 0.5pt; top 6 results shown
- Framer Motion spring dropdown (`stiffness: 420, damping: 30`), `backdrop-filter: blur(18px)`, per-category SVG icons
- Full keyboard navigation: ↑↓ navigate results, Enter navigates, Escape closes; ARIA `role="combobox"` / `role="listbox"`
- `variant?: 'desktop' | 'mobile'`; `onNavigate?: () => void` callback to close parent panel
- Empty/no-results state with "Contact us for help →" fallback link

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

Gradient background: `--brand-purple` → `--brand-600` → `--serene-mint`. White text throughout. Top padding on the footer main grid is `2.25rem` (reduced from previous `3rem` to tighten the gap between the gradient top edge and the first row of content).

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
| `QuickActionsBar` | `components/QuickActionsBar.tsx` | Fast-action strip (top of homepage, below hero); "Dental Emergency" pill is neutral ghost style (white/gray) matching "Ask the Doctor" — no red styling |
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
| `AnnouncementBanner` | `components/AnnouncementBanner.tsx` | **Purple** Sanity-powered top bar; fetches featured event (`featuredEventQuery`, ISR 300s); links to `/about/recent-events/[slug]`; returns `null` if no event |
| `BannerWrapper` | `components/BannerWrapper.tsx` | Client wrapper; hides `AnnouncementBanner` on `/studio` paths |
| `FloatingWidget` | `components/FloatingWidget.tsx` | Persistent bottom-screen CTA widget |
| `InstagramFeed` | `components/InstagramFeed.tsx` | Instagram highlight grid (6 Story Highlight boxes) |
| `ValueProposition` | `components/ValueProposition.tsx` | Modular value prop card (alternate/standalone variant) |
| `SiteSearch` | `components/SiteSearch.tsx` | Global site search pill; `variant: 'desktop' \| 'mobile'`; 30-item static index with weighted scoring |
| `PayNowForm` | `app/[locale]/pay/PayNowForm.tsx` | `'use client'` — HostedPayNow POST form button (Framer Motion, orange gradient) |
| `DoctorGrid` | `components/DoctorGrid.tsx` | `'use client'` — 2×2 Framer Motion stagger grid for About page; `--bg-lavender` cards, `--brand-purple` names, `--accent-pink` role badges, blob-radius headshot placeholders (`next/image` ready); i18n via `about` namespace |
| `OfficeTourPreview` | `components/OfficeTourPreview.tsx` | `'use client'` — full-bleed `--bg-teal-tint` section with `--cta-yellow` kicker, two `whileInView` slide-up image placeholder blocks; links to `/about/tour-our-office` |
| `TeamCard` | `components/TeamCard.tsx` | Staff roster card for `/about/meet-the-team`: uniform rounded-square `next/image` photo (`objectPosition: 'top'` to avoid cropping heads), nametag pill (accent color cycles per card), job title below |
| `EmergencyTriage` | `components/EmergencyTriage.tsx` | `'use client'` — Yes/No patient triage widget on `/services/emergency`. Asks "Are you currently a patient of Kids Dentist?" — Yes reveals after-hours line `(847) 241-8886` (teal panel); No reveals apology + office hours table + main number `(847) 223-1400` (amber panel). `AnimatePresence mode="wait"` transitions. No contact forms. |

### SubPageLayout gradient variants
- `'blue'` — teal/blue tones (default for most service + about pages)
- `'green'` — mint/green tones (insurance, preventive pages)
- `'amber'` — warm orange tones (emergency, urgent pages)

> **Phase 2 update:** `SubPageLayout` H1 text, kicker text, and dot-grid decoration now use `var(--brand-purple)` instead of the old hardcoded `#4A90A4` teal — applies brand-wide to all sub-pages. The `subtitle` prop has been removed from all doctor profile pages (taglines eliminated).

### First Visit steps (`firstVisit` namespace — 4 steps)
1. A Warm Welcome
2. A Gentle Exam
3. Teething & Home Care Tips
4. The Toy Tower Reward

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
- Left column:
  - **Badge row** (flex, wrapping): location pill ("Pediatric Dentistry · Grayslake & Lake County, IL") + animated orange gradient "Hablamos Español" pill (Framer Motion spring entry)
  - **H1:** "Grayslake's [Pediatric Dentist] Since 1994." (`<span class="highlight">` wraps "Pediatric Dentist")
  - **Tagline:** "High-quality pediatric and children's dental care that kids actually look forward to — serving families throughout Lake County."
  - **Trust banner:** teal-bordered pill — medal icon + "Serving Lake County for Over 30 Years · Est. 1994" (replaces old trust chips)
  - **CTA buttons:** "Request Appointment" (`btn-hero-primary` → `/request-appointment`) + "Text/Call us: (847) 223-1400" (`btn-hero-call`, `tel:+18472231400`) — stack vertically on mobile, row on ≥640px
- Right column: blob-shaped video container with looping `/brand_assets/hero-video.mp4` (MP4 only, no fallback source) + decorative circles (hidden on mobile: `hidden md:block`)
- Desktop: video blob scaled 1.25× via `transform: scale(1.25)` at `min-width: 1024px`
- ~~Trust chips~~ — **removed** (no "4.8★ Google Reviews", "Same-Day Available", "Emergency Visits" chips)
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
| Emergency Pediatric Dentistry | `/services` |

### MeetOurDoctors (`components/MeetOurDoctors.tsx`)
- 4-column doctor grid; each card: blob-shaped headshot, name, role, "Meet Dr. [FirstName] ›" link
- Section CTAs: "Meet the Dentists" (orange) → `/about/meet-the-dentists` | "Meet the Team" (teal border) → `/about/meet-the-team`
- Photos: real professional headshots (`index-dr-*.jpg`, see Image Assets), `objectPosition: 'top center'` cover-crop inside the blob container

### Meet the Team (`app/[locale]/about/meet-the-team/page.tsx` + `TeamCard.tsx`)
- 12-person staff roster, alphabetical by first name, real headshots (`public/brand_assets/team/headshot-*.jpg`)
- Grid: 4 cols desktop / 3 tablet (≤900px) / 2 mobile (≤580px)
- Each `TeamCard`: rounded-square photo (top-anchored crop), overlapping nametag pill (accent color cycles through 5 brand tokens), job title below
- Two staff headshots were initially both labeled "Michelle" in the source files; confirmed as two different people and captioned "Michelle" and "Stephenie"

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
| `/about` | **Built** | Philosophy block + `DoctorGrid` + `OfficeTourPreview`; i18n via `about` namespace |
| `/about/meet-the-dentists` | **Built** | 4-card doctor listing; `DoctorGrid.tsx` (co-located client component); i18n via `meetDentists` + `about` namespaces; no taglines |
| `/about/meet-the-dentists/dr-sonia-gutierrez` | **Built** | Async server component; full i18n via `drProfiles` + `about` namespaces; no subtitle |
| `/about/meet-the-dentists/dr-dave-rutcosky` | **Built** | Async server component; full i18n via `drProfiles` + `about` namespaces; no subtitle |
| `/about/meet-the-dentists/dr-sahar-alrayyes` | **Built** | Async server component; full i18n via `drProfiles` + `about` namespaces; no subtitle |
| `/about/meet-the-dentists/dr-anne-ashley-compton` | **Built** | Async server component; full i18n via `drProfiles` + `about` namespaces; no subtitle |
| `/about/meet-the-team` | **Built** | 12-person staff roster grid (`TeamCard.tsx`); real headshots + job titles, alphabetized by first name |
| `/about/tour-our-office` | Exists | Office photo tour |
| `/about/recent-events` | Exists | Events grid (Sanity-powered) |
| `/about/recent-events/[slug]` | Exists | Individual event detail |
| `/about/community-involvement` | Exists | Community page |
| `/about/why-choose-us` | Exists | Differentiators page |

> **Note:** `app/[locale]/about/meet-the-dentists/DoctorGrid.tsx` is a **co-located** client component (not in `/components/`) that renders the 4-card expandable listing on the Meet the Dentists index page. It is distinct from `components/DoctorGrid.tsx` (the 2×2 grid on the About page). Doctor tagline/subtitle strings have been removed from all cards and profile pages.

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
| `/services/emergency` | **Built** | `EmergencyTriage` widget (patient Yes/No triage → after-hours line or office hours); no contact forms; 8-chip emergency type grid; 3-step action guide; knocked-out tooth tip; bottom CTA (phone only, during-hours framing) |
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
| `/for-patients/patient-forms` | **Built** | Express Check-In orange callout → Patient Manager portal; 4 PDF download cards (New Patient Reg, HIPAA, Dental History, School Form); 2-col grid; accessible `aria-label` + `download` attributes; PDFs expected at `public/forms/` |
| `/for-patients/insurance-info` | Built | In-network providers, financing |
| `/for-patients/dental-financing` | Exists | CareCredit / financing detail |

**Insurance page (Built) details:**
- In-network (7 providers): Aetna, Cigna, Delta Dental Premier, Guardian, Lincoln Financial, Principal, United Healthcare — **no Medicaid/CHIP**
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
| `/faq` | **Built** | Uses `FaqAccordion`; 10 Qs across 4 groups: General Practice & First Visit (3), Safety & Treatments (3), Orthodontics & Braces (2), Dental Emergencies (2) |
| `/ask-the-doctor` | Exists | AI-powered Q&A; uses `AskDoctorForm.tsx` |
| `/pay` | **Built** | Dedicated online payment page — `SubPageLayout`, `PayNowForm` (HostedPayNow POST), trust badges, phone fallback |
| `/referral-portal` | **Built** | B2B partner referral portal — `ReferralForm.tsx` (client), HIPAA live-status indicator, Resend email, GA event `partner_referral_submitted` |
| `/studio` | Built | Sanity Studio (hidden from Header when in Studio) |

---

## 10. API Routes

| Route | File | Purpose |
|---|---|---|
| `POST /api/appointment` | `app/api/appointment/route.ts` | Appointment form handler |
| `POST /api/contact` | `app/api/contact/route.ts` | Contact form handler |
| `POST /api/ask-doctor` | `app/api/ask-doctor/route.ts` | Ask the Doctor AI endpoint |
| `POST /api/referral` | `app/api/referral/route.ts` | Partner referral intake; subject `[Priority Partner Referral] from {providerName}`; HTML-escapes all inputs |

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
- Schema.org hours vs Footer hours discrepancy

### 12.1 Legacy → Modern 301 Redirect Map

Implemented in both `netlify.toml` (CDN edge, `force = true`) and `next.config.ts` (`permanent: true` via `LEGACY_REDIRECTS` array). All destination routes carry matching `alternates.canonical` tags.

| Legacy URL | Destination |
|---|---|
| `/services.html` | `/services` |
| `/pediatric-dentistry.html` | `/services/preventive-dentistry` |
| `/restorative-care.html` | `/services/restorative` |
| `/emergency-dental.html` | `/services/emergency` |
| `/sedation.html` | `/services/sedation-dentistry` |
| `/meet-the-doctors.html` | `/about/meet-the-dentists` |
| `/contact-us.html` | `/contact` |

---

## 13. Brand Assets (`/public/brand_assets/`)

| File | Usage |
|---|---|
| `favicon.ico` | Browser tab icon — placed at `app/favicon.ico`; Next.js App Router serves it automatically site-wide |
| `kids-dentist-logo.png` | Header logo (189×104px source, rendered 72px tall) |
| `hero-video.mp4` | Hero looping background video |
| `hero-photo.jpg` | Hero fallback image |
| `index-dr-sonia.jpg` | Dr. Sonia Gutierrez headshot — real photo, resized to 900px wide / ~85KB via `sharp` |
| `index-dr-dave.jpg` | Dr. Dave Rutcosky headshot — real photo, resized to 900px wide / ~88KB via `sharp` |
| `index-dr-alrayyes.jpg` | Dr. Sahar Alrayyes headshot — real photo, resized to 900px wide / ~111KB via `sharp` |
| `index-dr-ashley.jpg` | Dr. Anne-Ashley Compton headshot — real photo, resized to 900px wide / ~89KB via `sharp` |
| `team/headshot-<firstname>.jpg` | 12 staff headshots for `/about/meet-the-team` (see §5's Meet the Team notes for the full roster) |

Source doctor/staff photos land in repo-root `brand_assets/New Headshots - Doctors/` and `brand_assets/New Headshots - Staff/` (last-name-keyed filenames, full-resolution, **not served publicly**). When promoting one to `public/brand_assets/`, resize/compress first (originals have been 18–24MB) — see the `sharp` one-liner pattern used for the doctor headshots.

Additional office photos and service illustrations go into `/public/brand_assets/` as available. Use descriptive `next/image` placeholders when assets aren't yet ready.

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

---

## 17. Internationalization (i18n)

**Library:** next-intl v4.13.0  
**Locales:** `en` (default, no URL prefix) and `es` (`/es/*`)  
**Strategy:** `localePrefix: 'as-needed'` — English routes have no locale segment in the URL (`/about`, `/services`), Spanish routes use `/es/` prefix (`/es/about`, `/es/services`).

### Key Files

| File | Purpose |
|---|---|
| `routing.ts` | `defineRouting({ locales, defaultLocale, localePrefix: 'as-needed' })` — single source of truth |
| `navigation.ts` | `createNavigation(routing)` — exports locale-aware `useRouter`, `usePathname`, `Link`, `redirect` |
| `proxy.ts` | `createMiddleware(routing)` — acts as Next.js middleware; matcher excludes `/api`, `/_next`, `/_vercel`, `/studio`, static files |
| `i18n.ts` | `getRequestConfig` — loads `messages/{locale}.json` per request |
| `i18n.config.ts` | Exports `locales` and `defaultLocale` constants |
| `messages/en.json` | English translations (all namespaces) |
| `messages/es.json` | Spanish translations (matching structure) |

### Translation Namespaces

| Namespace | Page |
|---|---|
| `nav` | Header navigation, CTAs, announcement bar |
| `hero` | Homepage hero section |
| `services` | Homepage services grid |
| `insurance` | Homepage insurance strip |
| `doctors` | Homepage doctor cards |
| `valueProps` | Homepage value proposition cards |
| `floating` | Floating CTA widget |
| `quickActions` | Quick Actions bar |
| `footer` | Footer text |
| `common` | Shared strings (loading, error, learn more, etc.) |
| `about` | `/about` (philosophy block, DoctorGrid bios, OfficeTourPreview copy) + `meet-the-dentists` page shared strings |
| `aboutPage` | `/about` (legacy namespace — superseded by `about` for new components; retain if still referenced) |
| `meetDentists` | `/about/meet-the-dentists` — page kicker/title/subtitle, Read Bio / Close / Request Appointment UI, CTA block, 12 doctor highlight bullets (3 per doctor); highlights use verified facts only (ABPD Diplomate, UIC residency, FAAPD, UofM, etc.) — no fabricated clinical certifications |
| `drProfiles` | Individual doctor profile pages — back link, role label, credentials heading, book button, hero heading, 3 bio paragraphs (bio0/bio1/bio2), quote, 7 credential bullets per doctor (cred0–cred6); all content is production-accurate per doctor-provided bios — no fabricated credentials |
| `servicesPage` | `/services` overview |
| `firstVisit` | `/for-patients/child-first-visit` |
| `insurancePage` | `/for-patients/insurance-info` |
| `faqPage` | `/faq` |
| `contactPage` | `/contact` + `ContactContent.tsx` |
| `preventivePage` | `/services/preventive-dentistry` |
| `restorativePage` | `/services/restorative` |
| `sedationPage` | `/services/sedation-dentistry` |
| `specialNeedsPage` | `/services/special-needs` |
| `emergencyPage` | `/services/emergency` |

### Patterns

**Server components** (most sub-pages):
```tsx
import { getTranslations, setRequestLocale } from 'next-intl/server'

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('namespaceName')
  // t('key') replaces hardcoded strings
}
```

**Client components** (`ContactContent.tsx`, etc.):
```tsx
import { useTranslations } from 'next-intl'
const t = useTranslations('namespaceName')
```

**Locale-aware navigation** (import from `@/navigation`, not `next/navigation`):
```tsx
import { useRouter, usePathname } from '@/navigation'
```

**Language switcher** (`components/LanguageSwitcher.tsx`):
- Uses `useLocale()` from `next-intl` to detect current locale (not pathname parsing)
- Uses `router.replace(pathname, { locale: 'en' | 'es' })` from `@/navigation` — atomically navigates AND updates the `NEXT_LOCALE` cookie, preventing the cookie-stale intermittent bug

**Data arrays in pages:** Non-translatable parts (icons, colors, gradients, hrefs, step numbers) stay in TypeScript `*_META` constants. Translatable text is pulled from `t()` via `.map()`:
```tsx
const STEP_META = [{ number: '01', icon: '👋', accentColor: '#4A90A4', ... }]
const steps = STEP_META.map((meta, i) => ({ ...meta, title: t(`step${i}Title`), description: t(`step${i}Desc`) }))
```

**Not translated:** Insurance company proper nouns (Aetna, Cigna, Delta Dental Premier, Guardian, Lincoln Financial, Principal, United Healthcare, CareCredit), phone number, address, URLs.

---

*Reference CLAUDE.md for Claude Code-specific rules (design skill, component structure, SEO warnings).*
