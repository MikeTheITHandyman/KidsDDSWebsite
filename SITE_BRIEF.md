# Kids Dentist — Complete Site Brief
**For use with AI assistants (Google Gemini, Claude, ChatGPT, etc.)**
**Last updated: 2026-05-09 · Matches commit `2040a0d` on `master`**

---

## 1. Business Identity

| Field | Value |
|---|---|
| Practice Name | Kids Dentist |
| Production URL | https://www.kidsdds.com |
| Phone | (847) 223-1400 |
| Address | 160 Commerce Dr #100, Grayslake, IL 60030 |
| Specialty | Pediatric Dentistry only (infants through teens) |
| Google Reviews | 4.8 ★ · 650+ reviews |
| Languages | English, Spanish (Hablamos Español) |

### Doctors
| Name | Credentials | Specialty |
|---|---|---|
| Sonia Gutierrez | DDS | General pediatric dentistry |
| Dave Rutcosky | DDS | Special needs, sedation, general anesthesiology (advanced cert.) |
| Sahar Alrayyes | DDS | General pediatric dentistry |
| Anne-Ashley Compton | DDS | General pediatric dentistry |

### Office Hours (approximate — verify before editing)
| Day | Hours |
|---|---|
| Monday – Thursday | 8:00 AM – 5:00 PM |
| Friday | 8:00 AM – 2:00 PM |
| Saturday – Sunday | Closed |

### Priority Service Area (Lake County, IL)
Grayslake (primary), Waukegan, Libertyville, Mundelein, Vernon Hills, Lake Forest

---

## 2. Tech Stack

| Layer | Technology | Version / Notes |
|---|---|---|
| Framework | Next.js (App Router) | `latest` (≥15) |
| UI Library | React | `latest` (≥19) |
| Language | TypeScript | 5.9.3, strict mode |
| Styling | Tailwind CSS v4 | Utility classes + inline styles (mixed approach) |
| Animations | Framer Motion | ^12.38.0 |
| CMS | Sanity v3 | Project ID `c7522jcx`, dataset `production` |
| Email | Resend | Contact form submissions |
| Analytics | Google Analytics 4 | Via `@next/third-parties/google` |
| Deployment | Netlify | `@netlify/plugin-nextjs` ^5.15.9 |
| Video CDN | Cloudinary | Hero video |
| Image CDN | Sanity CDN (`cdn.sanity.io`) | Blog/events images |
| Misc | styled-components ^6.4.0 | Used in isolated components |

---

## 3. Repository & Deployment

### Git
- **Platform:** GitHub — `MikeTheITHandyman/KidsDDSWebsite`
- **Primary branch:** `master`
- **Deployment trigger:** Push to `master` → Netlify auto-deploy

### Netlify Configuration (`netlify.toml`)
```toml
[build]
  command = "npm install && npm run build"
  publish = ".next"

[build.environment]
  NEXT_PUBLIC_SANITY_PROJECT_ID  = "c7522jcx"
  NEXT_PUBLIC_SANITY_DATASET     = "production"
  NEXT_PUBLIC_HERO_VIDEO_URL     = "https://res.cloudinary.com/dkrbvqzlw/video/upload/q_auto:low,w_1280/v1777343603/hero-video_oznoe1.mp4"
  CONTACT_EMAIL_TO               = "mike@miketheithandyman.com"
  CONTACT_EMAIL_FROM             = "Kids Dentist <noreply@kidsdds.com>"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Next.js Configuration (`next.config.ts`)
```ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io', pathname: '/images/**' },
    ],
  },
}
```

---

## 4. Environment Variables

### Local (`.env.local`) — DO NOT COMMIT
| Variable | Purpose | Status |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID | `c7522jcx` |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset | `production` |
| `NEXT_PUBLIC_HERO_VIDEO_URL` | Hero section video source | Local: `/brand_assets/hero-video.mp4` |
| `RESEND_API_KEY` | Email API key (Resend) | Set in `.env.local` — keep secret |
| `CONTACT_EMAIL_TO` | Contact form recipient | `mike@miketheithandyman.com` |
| `CONTACT_EMAIL_FROM` | Contact form sender | `Kids Dentist <noreply@kidsdds.com>` |
| `NEXT_PUBLIC_GA_ID` | **Google Analytics 4 Measurement ID** | **⚠️ NOT YET SET — must add to Netlify env vars** |

### Netlify Environment Variables
All `NEXT_PUBLIC_*` and server-side variables above (except `NEXT_PUBLIC_GA_ID`) are configured in `netlify.toml`. The GA4 ID must be added manually in the Netlify dashboard under **Site settings → Environment variables**.

---

## 5. Full Route Map

### Core Pages
| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Homepage — Hero, ServicesGrid, InsuranceBanner, MeetOurDoctors, ReviewBubbles, ValueProps |
| `/services` | `app/services/page.tsx` | Services hub/index |
| `/about` | `app/about/page.tsx` | About the practice |
| `/contact` | `app/contact/page.tsx` | Contact form + office info |
| `/faq` | `app/faq/page.tsx` | FAQ accordion |
| `/blog` | `app/blog/page.tsx` | Blog listing (Sanity-powered) |
| `/blog/[...slug]` | `app/blog/[...slug]/page.tsx` | Dynamic blog post detail |
| `/reviews` | `app/reviews/page.tsx` | Reviews landing (stub) |
| `/request-appointment` | `app/request-appointment/page.tsx` | Appointment request form |
| `/pay` | `app/pay/page.tsx` | Online payment |
| `/studio/[[...tool]]` | `app/studio/[[...tool]]/page.tsx` | Sanity Studio (admin CMS) |

### Services
| Route | File | SEO Title |
|---|---|---|
| `/services` | `app/services/page.tsx` | Children's Dental Services · Pediatric Dentist Grayslake, IL |
| `/services/preventive-dentistry` | `app/services/preventive-dentistry/page.tsx` | Preventive Dentistry for Kids |
| `/services/restorative` | `app/services/restorative/page.tsx` | Restorative Dentistry for Kids |
| `/services/emergency` | `app/services/emergency/page.tsx` | Emergency Pediatric Dentist Grayslake, IL · Same-Day |
| `/services/special-needs` | `app/services/special-needs/page.tsx` | Special Needs Pediatric Dentist |
| `/services/sedation-dentistry` | `app/services/sedation-dentistry/page.tsx` | Sedation Dentistry for Kids |
| `/services/restorative-dentistry` | `app/services/restorative-dentistry/page.tsx` | Alias/legacy route |
| `/services/checkups-and-cleanings` | `app/services/checkups-and-cleanings/page.tsx` | |
| `/services/pulp-therapy` | `app/services/pulp-therapy/page.tsx` | |
| `/services/tooth-extractions` | `app/services/tooth-extractions/page.tsx` | |
| `/services/orthodontics` | `app/services/orthodontics/page.tsx` | |
| `/services/general-anesthesiology` | `app/services/general-anesthesiology/page.tsx` | |

### About
| Route | File |
|---|---|
| `/about` | `app/about/page.tsx` |
| `/about/meet-the-dentists` | `app/about/meet-the-dentists/page.tsx` |
| `/about/meet-the-dentists/dr-sonia-gutierrez` | `app/about/meet-the-dentists/dr-sonia-gutierrez/page.tsx` |
| `/about/meet-the-dentists/dr-dave-rutcosky` | `app/about/meet-the-dentists/dr-dave-rutcosky/page.tsx` |
| `/about/meet-the-dentists/dr-sahar-alrayyes` | `app/about/meet-the-dentists/dr-sahar-alrayyes/page.tsx` |
| `/about/meet-the-dentists/dr-anne-ashley-compton` | `app/about/meet-the-dentists/dr-anne-ashley-compton/page.tsx` |
| `/about/meet-the-team` | `app/about/meet-the-team/page.tsx` |
| `/about/tour-our-office` | `app/about/tour-our-office/page.tsx` |
| `/about/recent-events` | `app/about/recent-events/page.tsx` |
| `/about/recent-events/[slug]` | `app/about/recent-events/[slug]/page.tsx` | Dynamic, Sanity-powered |
| `/about/why-choose-us` | `app/about/why-choose-us/page.tsx` |
| `/about/community-involvement` | `app/about/community-involvement/page.tsx` |

### For Patients
| Route | File |
|---|---|
| `/for-patients` | `app/for-patients/page.tsx` |
| `/for-patients/child-first-visit` | `app/for-patients/child-first-visit/page.tsx` |
| `/for-patients/insurance-info` | `app/for-patients/insurance-info/page.tsx` |
| `/for-patients/patient-forms` | `app/for-patients/patient-forms/page.tsx` |
| `/for-patients/dental-financing` | `app/for-patients/dental-financing/page.tsx` |
| `/for-patients/patient-info` | `app/for-patients/patient-info/page.tsx` |

### Who We Treat
| Route | File |
|---|---|
| `/who-we-treat` | `app/who-we-treat/page.tsx` |
| `/who-we-treat/childrens-dentistry` | `app/who-we-treat/childrens-dentistry/page.tsx` |
| `/who-we-treat/dentistry-for-toddlers` | `app/who-we-treat/dentistry-for-toddlers/page.tsx` |
| `/who-we-treat/advanced-dental-technology` | `app/who-we-treat/advanced-dental-technology/page.tsx` |

### Reviews
| Route | File |
|---|---|
| `/reviews` | `app/reviews/page.tsx` |
| `/reviews/written-reviews` | `app/reviews/written-reviews/page.tsx` |
| `/reviews/video-testimonials` | `app/reviews/video-testimonials/page.tsx` |

### Short-URL / SEO Landing Pages (root-level duplicates for direct search traffic)
| Route | File |
|---|---|
| `/preventive-dentistry` | `app/preventive-dentistry/page.tsx` |
| `/special-needs-dentistry` | `app/special-needs-dentistry/page.tsx` |
| `/nitrous-oxide-sedation` | `app/nitrous-oxide-sedation/page.tsx` |
| `/emergency-dentistry` | `app/emergency-dentistry/page.tsx` |

---

## 6. Component Library

All reusable components live in `/components/`. None require props except as noted.

| Component | File | Type | Purpose |
|---|---|---|---|
| `Header` | `components/Header.tsx` | `'use client'` | Sticky nav with dropdown menus, mobile hamburger, call + directions CTA buttons. Tracks `call_click` GA events. |
| `Footer` | `components/Footer.tsx` | Server | Site-wide footer with address, phone, nav links. |
| `Hero` | `components/Hero.tsx` | `'use client'` | Homepage hero — H1, tagline, CTA buttons, trust bar, autoplay video blob, decorative shapes. |
| `FloatingWidget` | `components/FloatingWidget.tsx` | `'use client'` | Fixed bottom-right sticky CTA. Expands on hover to reveal phone. Shows trust micro-badges. Tracks GA events. Hidden on `/studio` routes. |
| `AnnouncementBanner` | `components/AnnouncementBanner.tsx` | Server | Top-of-page orange banner. Pulls featured event from Sanity. |
| `BannerWrapper` | `components/BannerWrapper.tsx` | `'use client'` | Hides AnnouncementBanner on Studio routes. |
| `ServicesGrid` | `components/ServicesGrid.tsx` | Server | Homepage services card grid. |
| `InsuranceBanner` | `components/InsuranceBanner.tsx` | Server | Insurance logos / accepted plans strip. |
| `MeetOurDoctors` | `components/MeetOurDoctors.tsx` | Server | Doctor profile cards with photos from `/brand_assets/`. |
| `ReviewBubbles` | `components/ReviewBubbles.tsx` | `'use client'` | Animated review carousel. Accepts `sanityReviews` prop; falls back to static data. Has category badge system (Anxious Child Success, Emergency Visit, Special Needs). |
| `ValueProps` | `components/ValueProps.tsx` | Server | "Why Kids Dentist" feature callout section. |
| `ValueProposition` | `components/ValueProposition.tsx` | Server | Alternate value prop variant. |
| `SubPageLayout` | `components/SubPageLayout.tsx` | Server | Wraps all interior pages. Props: `title`, `subtitle`, `kicker`, `gradient` (`"blue"` \| `"amber"` \| `"green"`). |
| `AnimatedSection` | `components/AnimatedSection.tsx` | `'use client'` | Scroll-reveal fade/slide wrapper. Prop: `delay` (number). |
| `FaqAccordion` | `components/FaqAccordion.tsx` | `'use client'` | Collapsible FAQ list. Props: `items: FaqItem[]`, `accentColor`. |
| `FirstVisitTimeline` | `components/FirstVisitTimeline.tsx` | Server | Step-by-step timeline for first-visit page. |
| `Button` | `components/Button.tsx` | Server | Reusable button primitive. |
| `InstagramFeed` | `components/InstagramFeed.tsx` | — | Legacy component — not used on any page. |

---

## 7. Sanity CMS

### Connection
- **Project ID:** `c7522jcx`
- **Dataset:** `production`
- **Studio URL (local):** `http://localhost:3000/studio`
- **Studio URL (production):** `https://www.kidsdds.com/studio`
- **Client file:** `sanity/lib/client.ts`

### Content Schemas (`sanity/schemas/`)
| Schema | Type | Fields |
|---|---|---|
| `post` | Blog post | `title`, `slug`, `author`, `category`, `mainImage`, `publishedAt`, `excerpt`, `body` (Portable Text) |
| `review` | Patient review | `parentName`, `rating`, `reviewText`, `role`, `date`, `featured` (boolean) |
| `event` | Community event | `title`/`name`, `slug`, `mainImage`/`image`, `excerpt`/`description`, `body`, `eventDate`/`dateTime`, `location`, `registrationUrl`, `isPublished`, `isFeatured` |

### GROQ Queries (`sanity/lib/queries.ts`)
| Export | Purpose |
|---|---|
| `allPostsQuery` | All blog posts, ordered by date desc |
| `postBySlugQuery` | Single blog post by slug |
| `featuredReviewsQuery` | Up to 6 featured reviews, ordered by date — used on homepage |
| `allEventsQuery` | All events, ordered by date desc |
| `eventBySlugQuery` | Single event by slug |
| `upcomingEventsQuery` | Published events in the future, max 3 — used by AnnouncementBanner |
| `featuredEventQuery` | Single featured event for banner |

### Notes
- Blog posts use Portable Text (`@portabletext/react`) for rendering.
- Reviews fetched on the homepage with `{ next: { revalidate: 60 } }` — refreshes every 60 seconds.
- The `review.featured` flag controls which reviews appear in the carousel. If no featured reviews exist in Sanity, the component falls back to the hardcoded `STATIC_REVIEWS` array in `ReviewBubbles.tsx`.

---

## 8. SEO Infrastructure

### Canonical URL Strategy
- **`metadataBase`** is set globally in `app/layout.tsx` to `https://www.kidsdds.com`.
- Every priority page has an explicit `alternates.canonical` pointing to the `www.kidsdds.com` version.

### Page Metadata Summary
| Page | Title | Canonical |
|---|---|---|
| `/` | Pediatric Dentist Grayslake, IL \| Kids Dentist | `https://www.kidsdds.com/` |
| `/services` | Children's Dental Services \| Pediatric Dentist Grayslake, IL | `https://www.kidsdds.com/services` |
| `/services/preventive-dentistry` | Preventive Dentistry for Kids \| Pediatric Dentist Grayslake, IL | `https://www.kidsdds.com/services/preventive-dentistry` |
| `/services/restorative` | Restorative Dentistry for Kids \| Children's Dentist Grayslake, IL | `https://www.kidsdds.com/services/restorative` |
| `/services/emergency` | Emergency Pediatric Dentist Grayslake, IL \| Same-Day Kids Dentist | `https://www.kidsdds.com/services/emergency` |
| `/services/special-needs` | Special Needs Pediatric Dentist \| Kids Dentist Grayslake, IL | `https://www.kidsdds.com/services/special-needs` |
| `/services/sedation-dentistry` | Sedation Dentistry for Kids \| Pediatric Dentist Grayslake, IL | `https://www.kidsdds.com/services/sedation-dentistry` |
| `/about` | About Our Pediatric Dental Practice \| Kids Dentist Grayslake, IL | `https://www.kidsdds.com/about` |
| `/contact` | Contact a Pediatric Dentist in Grayslake, IL \| Kids Dentist | `https://www.kidsdds.com/contact` |

### Title Template
Root layout uses `title.template: '%s | Kids Dentist'` — child page titles are inserted into `%s` automatically.

### JSON-LD Structured Data

#### `Dentist` Schema (global — injected in `<head>` via `app/layout.tsx`)
```json
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Kids Dentist",
  "url": "https://kidsdds.com",
  "telephone": "+1-847-223-1400",
  "medicalSpecialty": "Pediatric Dentistry",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "160 Commerce Dr #100",
    "addressLocality": "Grayslake",
    "addressRegion": "IL",
    "postalCode": "60030",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 42.3417, "longitude": -88.0403 },
  "openingHoursSpecification": [
    { "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday"], "opens": "08:00", "closes": "17:00" },
    { "dayOfWeek": ["Friday"], "opens": "08:00", "closes": "14:00" }
  ],
  "priceRange": "$$"
}
```

#### `Service` Schema (page-level — on restorative, emergency, special-needs pages)
Each page defines a `serviceSchema` constant and injects it via `<script type="application/ld+json">`. Fields: `name`, `description`, `provider` (nested Dentist), `serviceType`, `areaServed`, `url`, `hasOfferCatalog` with `itemListElement` list of treatments.

### Answer-First Summaries (AI Answer Engine Optimization)
Two pages have a styled "Quick Answer" box as the **first element** in the page content — no animation wrapper — ensuring AI Answer Engines (Google SGE, Perplexity, ChatGPT Search) read and quote the practice's own language:
- `/services/sedation-dentistry` — covers all 3 sedation levels + Dr. Rutcosky's cert
- `/services/special-needs` — covers all 6 patient categories + adapted environment approach

---

## 9. Google Analytics 4

### Implementation
- **Package:** `@next/third-parties` (^16.2.6)
- **Component:** `<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />` in `app/layout.tsx`
- **Gating:** Component only renders when `NEXT_PUBLIC_GA_ID` is defined — builds succeed without it.

### ⚠️ Action Required
`NEXT_PUBLIC_GA_ID` is **not yet set** in Netlify environment variables. Analytics will not fire until this is added. Go to: **Netlify Dashboard → Site settings → Environment variables → Add variable → `NEXT_PUBLIC_GA_ID` = `G-XXXXXXXXXX`**.

### Conversion Events (via `sendGAEvent`)
| Event Name | Parameters | Trigger Location |
|---|---|---|
| `appointment_click` | `{ location: 'floating_widget' }` | FloatingWidget "Request Appointment" button |
| `call_click` | `{ location: 'floating_widget' }` | FloatingWidget phone reveal |
| `call_click` | `{ location: 'header_desktop' }` | Header desktop "Call" button |
| `call_click` | `{ location: 'header_mobile' }` | Header mobile nav "Call" button |

---

## 10. Design System

### Color Palette
| Token | Value | Use |
|---|---|---|
| `--brand-600` | `#4A90A4` | Primary teal — links, borders, brand text |
| `--accent-500` | `#E8934F` | Warm orange — CTAs, accents |
| `--cta-coral` | `#E97D63` | Coral — CTA gradient endpoint |
| `6BA899` | `#6BA899` | Sage green — secondary accents |
| Background | `#FAFAF8` | Warm ivory — site background (never pure white) |

### Typography
- **Font Family:** `Nunito` (Google Fonts) — rounded, friendly, highly legible
- **Body weight:** 500–600
- **Heading weight:** 900 (extra-bold)
- **H1 size:** `clamp(2.2rem, 5vw, 3.5rem)` (set in global CSS)

### Animations
- **Library:** Framer Motion ^12.38.0
- **Scroll reveals:** `AnimatedSection` wrapper — fade + slide up, `viewport: { once: true }`
- **CTA springs:** `{ type: 'spring', stiffness: 400, damping: 20 }` on all buttons
- **FloatingWidget:** Spring entrance with `y: 120 → 0`, 800ms delay after mount
- **ReviewBubbles carousel:** Slide left/right with custom easing `[0.22, 1, 0.36, 1]`
- **Header:** Framer `animate` on background and shadow on scroll

### Layout Conventions
- **Mobile-first.** All breakpoints use `@media (min-width: ...)`.
- **Container:** `.container` class, max-width ~1200px, horizontal padding `1.5rem`.
- **Service pages:** All wrapped in `<SubPageLayout>` with a `gradient` prop (`"blue"` | `"amber"` | `"green"`).
- **No cold white backgrounds.** Background is always `#FAFAF8` or a tinted gradient.
- **Blob shapes:** Decorative blobs are CSS `border-radius` shapes or SVG path elements — not images.

### Brand Assets (`/public/brand_assets/`)
| File | Used In |
|---|---|
| `kids-dentist-logo.png` | Header (189×104px, displayed at 72px height) |
| `index-dr-sonia.jpg` | MeetOurDoctors component |
| `index-dr-dave.jpg` | MeetOurDoctors component |
| `index-dr-alrayyes.jpg` | MeetOurDoctors component |
| `index-dr-ashley.jpg` | MeetOurDoctors component |
| `hero-video.mp4` | Hero section (local fallback only — production uses Cloudinary URL) |

---

## 11. Conversion Architecture

### FloatingWidget (fixed, bottom-right)
- Appears 800ms after page load via spring animation
- Primary CTA: "Request Appointment" → `/request-appointment`
- Secondary (hover-expand): Phone link `tel:8472231400`
- Trust micro-badges (always visible below CTA):
  - "Emergency Visits Available Today"
  - "In-Network with Delta Dental"
  - "Most Kids Seen Within Days"
- Hidden on all `/studio/*` routes
- GA events on both CTA and phone click

### Hero Trust Bar
Four items rendered below the primary CTA buttons:
1. 4.8★ · 650+ Reviews
2. Emergency Visits Available Today
3. In-Network with Delta Dental
4. Most Kids Seen Within Days

### ReviewBubbles Trust Signals
- Rating badge: Large `4.8` numeral + `650+` Google Reviews in a glass-morphism card
- Section heading: "650+ Families Trust Kids Dentist"
- Category badges on individual reviews: `Anxious Child Success` (purple), `Emergency Visit` (amber), `Special Needs` (teal)
- Static reviews include two placeholder testimonials targeting specific conversion contexts (anxious child and emergency visit journeys)

---

## 12. CMS Content Workflow

### Adding a Blog Post
1. Go to `https://www.kidsdds.com/studio`
2. Create a new `Post` document
3. Fill in: title, slug, author, category, mainImage (Sanity asset), publishedAt, excerpt, body (Portable Text)
4. Publish → appears at `/blog` and `/blog/[slug]` on next revalidation (ISR)

### Adding a Featured Review to the Carousel
1. Go to Studio → `Review` → New Review
2. Fill in: parentName, rating (1–5), reviewText, role, date
3. Toggle `featured: true`
4. Publish → replaces static fallback reviews on homepage within 60 seconds

### Adding a Community Event / Announcement Banner
1. Go to Studio → `Event` → New Event
2. Fill in all fields including `isFeatured: true` to surface it in the announcement banner
3. Set `isPublished: true` to include in upcoming events queries

---

## 13. Email / Contact Form

- **Provider:** Resend (`resend.com`)
- **API Key:** Stored in `RESEND_API_KEY` env var (never commit)
- **Recipient:** `CONTACT_EMAIL_TO` (currently `mike@miketheithandyman.com` — should be updated to practice email for production)
- **Sender domain:** `noreply@kidsdds.com` — requires DNS verification in Resend dashboard before emails will deliver from the production domain
- **Form component:** `app/request-appointment/AppointmentForm.tsx`

---

## 14. Known Gaps & Next Actions

### Immediate (blocking production launch)
- [ ] **Set `NEXT_PUBLIC_GA_ID`** in Netlify environment variables — analytics is wired but not firing
- [ ] **Verify `kidsdds.com` domain** in Resend dashboard so contact form emails deliver from `noreply@kidsdds.com`
- [ ] **Update `CONTACT_EMAIL_TO`** in Netlify env vars to the practice's actual inbox

### SEO Backlog
- [ ] Add `alternates.canonical` to remaining pages not yet covered (for-patients, about sub-pages, who-we-treat, reviews, blog)
- [ ] Add `LocalBusiness` / `MedicalOrganization` breadcrumb schema to interior pages
- [ ] Generate and submit an XML sitemap (`next-sitemap` package recommended)
- [ ] Add individual doctor pages (`/about/meet-the-dentists/dr-*`) to the structured `Person` schema

### Content Backlog
- [ ] `/reviews/page.tsx` is a stub (placeholder H1/P only) — needs full page build
- [ ] `/about/community-involvement/page.tsx` — needs content
- [ ] `/about/why-choose-us/page.tsx` — needs content
- [ ] Doctor individual pages need full bio content and professional headshots
- [ ] Real patient photos / office tour photos to replace brand_assets placeholders

### Technical
- [ ] Confirm production domain is `www.kidsdds.com` and `kidsdds.com` redirects to `www` (configure in Netlify domain settings)
- [ ] Set up Resend domain authentication (SPF/DKIM for `kidsdds.com`)
- [ ] Add `robots.txt` and confirm `X-Robots-Tag` is not blocking indexation on Netlify
- [ ] Consider `next-sitemap` for automated sitemap generation on build

---

## 15. Recent Commit History

```
2040a0d  SEO and conversion infrastructure: GA4, schema, Lake County targeting, Answer-First summaries
8cc6b2b  Remove placeholder boxes from Restorative and Special Needs service pages
c6d7c81  Update footer address link to direct Google Maps listing for Kids Dentist
a927e3a  Add Special Needs, Restorative, and Emergency service pages; wire nav and homepage
9f450b0  Remove all em-dashes from UI copy across app and components
9cb4982  Polish pass: services insurance, UI scale, reviews compression, and content updates
347824a  Fix MeetOurDoctors grid centering and 4th card cutoff
1d7331c  Mobile responsiveness sweep: carousel, hamburger menu, card padding
```

---

## 16. Instructions for AI Assistants

When working on this codebase, follow these rules without exception:

1. **Design Skill First.** Before writing any front-end component or visual update, invoke the `frontend-design` skill to ensure non-generic, high-quality output.
2. **Mobile-first always.** Every layout decision must be verified at 375px width before 1280px.
3. **No cold white.** Background colors must use `#FAFAF8`, tinted gradients, or warm neutrals. Never `#FFFFFF` as a page background.
4. **Preserve Framer Motion.** All existing animations (`AnimatedSection`, `FloatingWidget`, `ReviewBubbles` carousel, `Header` scroll effects) must be maintained. Do not remove `motion.*` components.
5. **Preserve blob shapes.** Decorative organic shapes are structural to the brand design. Do not flatten them to rectangles.
6. **No auto-push.** Commit locally and wait for an explicit "push" instruction.
7. **Sanity for dynamic content.** Blog posts, reviews, and events are CMS-driven. Hardcode only structural/permanent content in TSX files.
8. **Semantic HTML.** Use `<section>`, `<article>`, `<header>`, `<main>`, `<nav>`, `<aside>` correctly. Every `<section>` should have an `aria-labelledby` or `aria-label`.
9. **SEO on every new page.** Any new `page.tsx` must export a `metadata` object with `title`, `description`, `alternates.canonical`, and `openGraph` block.
10. **No comments** in code unless the WHY is non-obvious (hidden constraint, workaround, subtle invariant).
