# Kids Dentist Grayslake — Complete Site Specification

> **Purpose of this document:** A complete reference for generating Claude Code build prompts. Every page, component, design rule, and content requirement is documented here so an outside AI can produce precise, context-rich prompts for building out the full site.

---

## 1. Business Details

| Field | Value |
|---|---|
| Practice Name | Kids Dentist |
| Address | 160 Commerce Dr #100, Grayslake, IL 60030 |
| Phone | (847) 223-1400 |
| Website | kidsdds.com |
| Instagram | @kidsddsgrayslake |
| Facebook | facebook.com/kidsddsgrayslake |
| Specialty | Pediatric Dentistry **only** — no adult patients |
| Languages | English, Spanish (Hablamos Español) |

### Doctors
| Doctor | Credential | Slug |
|---|---|---|
| Dr. Sonia Gutierrez | DDS | `dr-sonia-gutierrez` |
| Dr. Dave Rutcosky | DDS | `dr-dave-rutcosky` |
| Dr. Sahar Alrayyes | DDS | `dr-sahar-alrayyes` |
| Dr. Anne-Ashley Compton | DDS | `dr-anne-ashley-compton` |

All four doctors are board-certified pediatric specialists.

### Office Hours
Monday – Friday: 8:00am – 5:00pm  
Saturday & Sunday: Closed

### Key Trust Signals
- 30+ years serving families
- 4.8★ Google rating with 650+ reviews
- Same-day appointments available
- Emergency pediatric visits accepted
- Board-certified pediatric specialists only

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 + custom global CSS (`styles/global.css`) |
| Animation | Framer Motion (`motion`, `AnimatePresence`, `useScroll`, etc.) |
| Images | `next/image` with `fill`, `sizes`, `priority` as needed |
| Links | `next/link` for internal navigation |
| CMS | Sanity (for blog content — `cdn.sanity.io` images are whitelisted in `next.config.ts`) |
| Fonts | Nunito (Google Fonts) — weights 400, 500, 600, 700, 800, 900 |

### Key Rules
- All interactive components use `'use client'` directive at the top.
- Server components (no `'use client'`) are preferred for static page layouts.
- All images use `next/image`. All `alt` tags must be highly descriptive.
- All pages must export a `metadata` object with `title`, `description`, and OpenGraph tags.
- Semantic HTML required: `<header>`, `<main>`, `<article>`, `<section>`, `<nav>`, `<footer>`.

---

## 3. Design System

### Color Palette (CSS Variables — defined in `styles/global.css`)

| Variable | Hex | Usage |
|---|---|---|
| `--brand-600` | `#4A90A4` | Primary teal — headings, links, borders |
| `--brand-purple` | `#78509b` | Secondary purple — badges, accents |
| `--accent-500` | `#E8934F` | Primary CTA orange — buttons, highlights |
| `--cta-coral` | `#E97D63` | Coral — button gradients, hover states |
| `--cta-yellow` | `#F4C77F` | Warm yellow — decorative accents |
| `--serene-mint` | `#6BA899` | Mint/sage green — icons, card accents |
| `--soft-sage` | `#8BA596` | Softer green — secondary accents |
| `--light-blue` | `#80d2f5` | Sky blue — backgrounds, badges |
| `--muted-700` | `#3D3D3D` | Primary body text color |
| `--bg` | `#FAFAF8` | Page background — warm off-white |
| `--max-width` | `1440px` | Max container width |

### Typography
- **Font:** Nunito, sans-serif (only font used site-wide)
- **Headings:** `font-weight: 900`, `letter-spacing: -0.02em`
- **Body:** `font-weight: 500`, `line-height: 1.65–1.72`
- **Section kickers** (small labels above headings): `font-size: 0.78rem`, `font-weight: 900`, `letter-spacing: 0.10em`, `text-transform: uppercase`, `color: var(--brand-purple)`
- **Responsive heading sizes:** Use `clamp()` — e.g., `clamp(1.9rem, 3.5vw, 2.6rem)`

### Button Variants (defined as CSS classes)

| Class | Style |
|---|---|
| `.btn-primary` | `background: linear-gradient(135deg, var(--accent-500), var(--cta-coral))` — white text |
| `.btn-secondary` | Light blue tint bg, purple text, purple border |
| `.btn-purple` | `background: linear-gradient(135deg, var(--brand-purple), #a06fc8)` — white text |
| `.btn-hero-primary` | Larger orange gradient — main hero CTA |
| `.btn-hero-call` | Transparent with teal border — secondary hero CTA |

All buttons: `border-radius: 100px`, `font-family: Nunito`, `font-weight: 700–800`, Framer Motion `whileHover` scale + lift.

### Card Patterns

**Service Card** (`.service-card`)
- `background: #a6a8d2` (purple — applied inline)
- `border-radius: 20px`
- `padding: 1.5rem`
- Icon in colored rounded square, h3 in brand-600, p in muted-700
- Bottom colored accent bar on hover

**Feature Card** (`.feature-card` / `.vp-card`)
- `border-radius: 28px`, `padding: 2.25rem 2rem 2rem`
- Subtle tinted background (blue/green/mint variants)
- Icon in 64×64 circle, h3 teal heading, gray body text
- `whileHover`: lift `-6px`, elevated box shadow

**Review Card** (`.review-card`)
- White background, `border-radius: 24px`, `padding: 2rem`
- Star rating row, quote text, author avatar + name

### Navigation Dropdowns
Dropdown menus must use a semi-opaque frosted glass effect via **inline styles** (not Tailwind classes, which can be stripped by the Framer Motion cascade in v4):
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
Tailwind utility classes such as `bg-white/95 backdrop-blur-md` must **not** be used on `motion.div` dropdown containers — inline styles are the only reliable approach.

### Animation Patterns
- **Page enter:** `initial={{ opacity: 0, y: 20–36 }}` → `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}`
- **Staggered children:** `transition={{ delay: 0, 0.1, 0.2, 0.3 }}`
- **Hover lift:** `whileHover={{ y: -6 }}` with spring `stiffness: 280, damping: 18`
- **Button press:** `whileTap={{ scale: 0.97 }}`
- **Ease curve:** `[0.22, 1, 0.36, 1]` (typed as tuple for TypeScript)

### Responsive Breakpoints
| Breakpoint | Behavior |
|---|---|
| `max-width: 540px` | Single column, stacked layouts |
| `max-width: 768px` | Mobile nav hidden, condensed hero |
| `max-width: 900px` | 2-column grids |
| `1440px` | Full desktop — 3–4 column layouts |

---

## 4. Global Layout

### Root Layout (`app/layout.tsx`)
Wraps every page. Renders:
1. `<AnnouncementBanner />` — Server Component; fetches the most recently published "Practice Event" from Sanity CMS (GROQ: `*[_type == "event" && isPublished == true] | order(dateTime desc)[0]`). Renders a purple gradient banner with event name, formatted date, optional location, and "Learn More →" link. Returns `null` when no event is published. Revalidates every 300 seconds.
2. `<Header />` — sticky top navigation
3. `{children}` — page content
4. `<Footer />` — full site footer
5. `<FloatingWidget />` — fixed bottom-right CTA

### Header (`components/Header.tsx`)
- **Top announcement banner** — thin orange gradient bar linking to `/blog`; text: "Check out our latest blog post ›"
- **Logo** — `/brand_assets/kids-dentist-logo.png`, height 72px, links to `/`
- **Nav** — horizontal flexbox; dropdowns on hover with `AnimatePresence`
- **Action buttons** — "Call (847) 223-1400" (secondary) + "Request Appointment" (primary)
- **Scroll behavior** — `useScroll` + `useMotionValueEvent`; background + shadow animate in at 50px scroll

**Full Nav Structure:**
```
Home                    → /
About                   → /about
  ├── About Us          → /about
  ├── Meet the Dentists → /about/meet-the-dentists
  ├── Meet the Team     → /about/meet-the-team
  └── Tour Our Office   → /about/tour-our-office
Services                → /services
  ├── All Services      → /services
  ├── Preventive        → /services/preventive-dentistry
  └── Sedation          → /services/sedation-dentistry
For Patients            → /for-patients
  ├── Child's First Visit → /for-patients/child-first-visit
  └── Insurance & Financing → /for-patients/insurance-info
FAQ                     → /faq
Blog                    → /blog
Contact                 → /contact
```

### Footer (`components/Footer.tsx`)
4-column grid on desktop, 2-column tablet, 1-column mobile.

**Column 1 — Brand**
- Practice name, tagline
- Address link (Google Maps) with underline-on-hover
- Phone number link

**Column 2 — Explore (Quick Links)**
- Our Services → `/services`
- Meet the Dentists → `/about/meet-the-dentists`
- My First Visit → `/for-patients/child-first-visit`
- Patient Forms → `/for-patients/patient-forms`
- Insurance Info → `/for-patients/insurance-info`
- Blog → `/blog`

**Column 3 — Office Hours**
Monday–Friday: 8:00am – 5:00pm (Saturday/Sunday not shown)

**Column 4 — Stay Connected**
- Facebook + Instagram icon buttons
- "Book Appointment" pill button → `/request-appointment`
- "Pay Now" pill button (amber tint) → `/pay-now`
- "New patients always welcome. Hablamos Español." text

**Bottom bar:** Copyright, Privacy Policy link, Sitemap link

### Floating Widget (`components/FloatingWidget.tsx`)
Fixed bottom-right. Always shows "Request Appointment". Expands on hover to also show phone link.

---

## 5. Homepage (`app/page.tsx`)

The homepage composes these components in order:

```
<Hero />
<ServicesGrid />
<MeetOurDoctors />
<ReviewBubbles />
<ValueProps />
<InstagramFeed />
<InsuranceBanner />
```

### Hero (`components/Hero.tsx`)
- **Left:** Badge ("Pediatric Dentist · Grayslake, IL"), H1 headline, sub-headline, two CTA buttons, four trust-signal chips
- **Right:** Blob-shaped container with looping `hero-video.mp4` + decorative floating circles
- **Trust chips:** "4.8★ Google Reviews" | "Same-Day Available" | "Emergency Visits" | "Hablamos Español"
- **Background:** Animated radial gradient blobs (CSS `@keyframes blob-float`)

### ServicesGrid (`components/ServicesGrid.tsx`)
Auto-rotating carousel (4s interval, pauses on hover). Shows 3 of 5 cards at a time.

**5 Services:**
| Title | Description | Button Text | href |
|---|---|---|---|
| Preventive Dentistry | Regular check-ups, cleanings, and fluoride treatments to keep your child's smile healthy and stop problems before they start. | Preventative Care | `/services/preventive-dentistry` |
| Restorative Dentistry | Expert, gentle treatment for cavities and broken teeth to restore healthy smiles using child-friendly techniques. | Restorative Care | `/services/restorative-dentistry` |
| Special Needs Dentistry | Compassionate, specialized care for children with diverse needs. | Special Needs Care | `/services` |
| Sedation Dentistry | Gentle sedation options for nervous kids and more complex procedures, including nitrous oxide and general anesthesia. | Sedation Options | `/services/sedation-dentistry` |
| Emergency Pediatric Dentist | When your child has a toothache, knocked-out tooth, or dental injury, we'll get them in as soon as possible. | Emergency Dental Care | `/services` |

Carousel controls: prev/next arrow buttons + dot indicators.

### MeetOurDoctors (`components/MeetOurDoctors.tsx`)
- Section kicker: "Get to Know Us"
- H2: "Meet Our Doctors"
- Sub-headline: "Four pediatric specialists who genuinely love what they do. Get to know the team your family will see at every visit."
- 4-column grid of doctor cards
- Each card: **256×256px** blob-shaped headshot, doctor name, role, individual "Meet Dr. [FirstName] ›" link

**Doctor Bio Links:**
| Doctor | First Name (used in card CTA) | Bio URL |
|---|---|---|
| Dr. Sonia Gutierrez | Sonia | `/about/meet-the-dentists/dr-sonia-gutierrez` |
| Dr. Dave Rutcosky | Dave | `/about/meet-the-dentists/dr-dave-rutcosky` |
| Dr. Sahar Alrayyes | Sahar | `/about/meet-the-dentists/dr-sahar-alrayyes` |
| Dr. Anne-Ashley Compton | **Ashley** | `/about/meet-the-dentists/dr-anne-ashley-compton` |

Section-level CTAs (two side-by-side buttons):
- "Meet the Dentists" (orange gradient) → `/about/meet-the-dentists`
- "Meet the Team" (transparent teal border) → `/about/meet-the-team`

### ReviewBubbles (`components/ReviewBubbles.tsx`)
Rotating testimonial carousel with 4.8★ badge and 650+ reviews count. Links to Google reviews. CTA to leave a review.

### ValueProps (`components/ValueProps.tsx`)
- Section kicker: "Why Families Choose Us"
- H2: "A Practice Built Around Your Child"
- 3 cards: Same-Day Appointments | Parent-Centric Communication | Specialized Pediatric Experts
- Card style: `.vp-card` — 28px border-radius, tinted backgrounds, icon + title + body

### InstagramFeed (`components/InstagramFeed.tsx`)
- Header row: Instagram icon + @kidsddsgrayslake handle, Facebook/Instagram icon buttons, "Follow Us" button
- 3×2 grid of 6 highlight boxes, each linking to a specific Story Highlight URL

**6 Highlight Boxes (in order):**
| # | Caption | Emoji | Story Highlight URL |
|---|---|---|---|
| 1 | 30 Years | 🎉 | `https://www.instagram.com/stories/highlights/17921848187970850/` |
| 2 | Patients | 🦷 | `https://www.instagram.com/stories/highlights/17944704293205150/` |
| 3 | Reviews | ⭐ | `https://www.instagram.com/stories/highlights/17955813938005134/` |
| 4 | Office | 🏥 | `https://www.instagram.com/stories/highlights/17922452591442880/` |
| 5 | The Team | 👨‍👩‍👧‍👦 | `https://www.instagram.com/stories/highlights/17939421410484510/` |
| 6 | Community | 💜 | `https://www.instagram.com/stories/highlights/17956960870875491/` |

Box style: gradient backgrounds, 28px border-radius, 260px min-height, emoji centered, hover overlay with caption.

### InsuranceBanner (`components/InsuranceBanner.tsx`)
Thin strip: shield icon + "In-Network with Most Major PPOs" + link to `/for-patients/insurance-info`

---

## 6. Reusable Components

### SubPageLayout (`components/SubPageLayout.tsx`)
Generic hero header for interior pages. Props:
- `kicker` — small label above heading (e.g., "Our Practice")
- `title` — H1 page title
- `subtitle` — optional supporting paragraph
- `variant` — color variant: `'blue'` | `'green'` | `'amber'`

Used by nearly every interior page. Renders a gradient hero band with ambient blob decorations.

### FirstVisitTimeline (`components/FirstVisitTimeline.tsx`)
6-step animated timeline showing what happens on a child's first visit:
1. Welcome & Check-In
2. Meet the Team
3. Initial Exam
4. Fun Cleaning
5. Treatment Plan
6. Happy Goodbye

Each step has an emoji icon, title, and description. CTA at bottom: "Request Your First Appointment"

### Button (`components/Button.tsx`)
Reusable button. Props: `variant` (primary/secondary), `size` (sm/md/lg), `href` or `onClick`.

---

## 7. Full Page Inventory & Build Requirements

Below is every route in the site with its current status and what it needs to contain when built.

---

### `/` — Homepage
**Status:** Built  
**Components:** Hero, ServicesGrid, MeetOurDoctors, ReviewBubbles, ValueProps, InstagramFeed, InsuranceBanner

---

### `/about` — About Us
**Status:** Exists (needs content)  
**Purpose:** Practice overview — history, mission, values, office environment  
**Must include:**
- SubPageLayout hero (kicker: "Our Practice", title: "About Kids Dentist")
- Practice story / 30+ year history
- Mission statement — child-focused, compassionate care
- Why we're pediatric-only section
- Office environment highlights (warmth, child-friendly design)
- Team overview teaser (4 doctors — links to `/about/meet-the-dentists`)
- CTA: Request Appointment

---

### `/about/meet-the-dentists` — Meet the Dentists (Listing)
**Status:** Exists (needs content)  
**Purpose:** All 4 doctors in a grid with bios and individual page links  
**Must include:**
- SubPageLayout hero (kicker: "Our Team", title: "Meet Our Doctors")
- 4-column (desktop) / 2-column (mobile) grid of doctor cards
- Each card: large photo, name, credentials, short bio (2–3 sentences), "Learn More" link to individual bio page
- CTA section: "Ready to meet us in person? Request an appointment."

---

### `/about/meet-the-dentists/dr-sonia-gutierrez` — Dr. Sonia Gutierrez Bio
**Status:** Exists (needs content)  
**Purpose:** Individual doctor bio page  
**Must include:**
- SubPageLayout hero (kicker: "Meet the Doctor", title: "Dr. Sonia Gutierrez, DDS")
- Large portrait photo (`/brand_assets/index-dr-sonia.jpg`)
- Full biography (education, why pediatric dentistry, personal interests)
- Credentials / education list
- Philosophy of care quote block
- "Book with Dr. Sonia" CTA → `/request-appointment`
- Back link → `/about/meet-the-dentists`

---

### `/about/meet-the-dentists/dr-dave-rutcosky` — Dr. Dave Rutcosky Bio
**Status:** Exists (needs content)  
**Must include:** Same structure as Dr. Sonia's page, photo: `/brand_assets/index-dr-dave.jpg`

---

### `/about/meet-the-dentists/dr-sahar-alrayyes` — Dr. Sahar Alrayyes Bio
**Status:** Exists (needs content)  
**Must include:** Same structure as Dr. Sonia's page, photo: `/brand_assets/index-dr-alrayyes.jpg`

---

### `/about/meet-the-dentists/dr-anne-ashley-compton` — Dr. Anne-Ashley Compton Bio
**Status:** Exists (needs content)  
**Must include:** Same structure as Dr. Sonia's page, photo: `/brand_assets/index-dr-ashley.jpg`

---

### `/about/tour-our-office` — Tour Our Office
**Status:** Exists (needs content)  
**Purpose:** Show parents and kids the friendly, welcoming environment before their visit  
**Must include:**
- SubPageLayout hero (kicker: "Come See Us", title: "Tour Our Office")
- Photo gallery or image grid of office spaces (waiting room, treatment rooms, etc.) — use placeholder `next/image` components pointing to `/brand_assets/` paths
- Descriptive copy for each area — waiting room, treatment rooms, sterilization standards
- "What to expect" comfort notes (TVs, fun décor, no scary equipment visible)
- CTA: Request Your First Appointment

---

### `/services` — All Services (Overview)
**Status:** Exists (needs content)  
**Purpose:** Hub page listing all services with links to detail pages  
**Must include:**
- SubPageLayout hero (kicker: "What We Do", title: "Our Dental Services")
- Intro paragraph: practice limited to pediatric dentistry only
- Grid of service cards (5–6 cards): Preventive, Restorative, Special Needs, Sedation, Emergency, Orthodontics (if applicable)
- Each card links to its detail page
- Insurance teaser strip
- CTA: Request Appointment

---

### `/services/preventive-dentistry` — Preventive Dentistry
**Status:** Exists (needs content)  
**Purpose:** Detail page for preventive care  
**Must include:**
- SubPageLayout hero (kicker: "Prevention First", title: "Preventive Dentistry")
- What is preventive dentistry (for parents)
- Services covered: exams, cleanings, fluoride treatments, sealants, X-rays
- How often should children visit (every 6 months)
- Age-appropriate guidance (infants → teens)
- FAQ accordion (3–5 questions)
- CTA: Schedule a Cleaning

---

### `/services/restorative-dentistry` — Restorative Dentistry
**Status:** Exists (needs content)  
**Must include:**
- SubPageLayout hero (kicker: "Restoring Smiles", title: "Restorative Dentistry")
- Composite fillings, stainless steel crowns, tooth-colored crowns
- Pulp therapy / baby root canals
- Space maintainers
- Child-friendly language explaining each procedure
- "Don't wait — cavities grow" urgency section
- FAQ accordion
- CTA: Book an Appointment

---

### `/services/sedation-dentistry` — Sedation Dentistry
**Status:** Exists (needs content)  
**Must include:**
- SubPageLayout hero (kicker: "Calm & Comfortable", title: "Sedation Dentistry")
- Who sedation is for (anxious kids, complex procedures, special needs)
- Nitrous oxide (laughing gas) — how it works, safety, recovery
- Oral conscious sedation
- General anesthesia — when used, hospital setting, safety protocols
- Parent FAQ — "Is sedation safe for my child?"
- CTA: Talk to Us About Sedation Options

---

### `/for-patients/child-first-visit` — Child's First Visit
**Status:** Exists (needs content)  
**Purpose:** Reassure nervous parents and children before appointment #1  
**Must include:**
- SubPageLayout hero (kicker: "Welcome!", title: "Your Child's First Visit")
- `<FirstVisitTimeline />` component (already built — 6 steps)
- "What to bring" checklist (insurance card, photo ID, patient forms)
- "What to tell your child" coaching tips for parents
- Age recommendations (first visit by age 1 or first tooth)
- Video/photo of friendly office environment (placeholder)
- CTA: Request Your Child's First Appointment

---

### `/for-patients/insurance-info` — Insurance & Financing
**Status:** Built  
**In-Network Providers (equal-weight card grid, 5 cards):**
1. Aetna Dental
2. Cigna Dental
3. Delta Dental
4. Guardian Dental
5. UnitedHealthcare Dental

**Sections:**
- SubPageLayout hero (kicker: "Financial Peace of Mind", title: "Insurance & Financing", gradient: "green")
- Intro paragraph
- 5-card in-network provider grid (`auto-fit, minmax(160px, 1fr)`) — "Other Accepted Plans" section has been removed
- Out-of-Network Patients card + Flexible Financing / CareCredit card (side-by-side)
- "No Insurance? No Problem." purple-accent callout
- CTA row: Call + View Patient Forms

---

### `/for-patients/patient-forms` — Patient Forms
**Status:** Exists (needs content)  
**Must include:**
- SubPageLayout hero (kicker: "Save Time", title: "Patient Forms")
- Intro: "Complete forms before your visit to save time at check-in"
- New patient forms (downloadable PDF links or embedded form)
- HIPAA authorization
- Medical history form
- Insurance information form
- "Questions? Call us" section
- CTA: Request an Appointment

---

### `/contact` — Contact Page
**Status:** Exists (needs content)  
**Must include:**
- SubPageLayout hero (kicker: "Say Hello", title: "Contact Us")
- Split layout: contact info left, map/form right
- Address: 160 Commerce Dr #100, Grayslake, IL 60030 (embedded Google Map)
- Phone: (847) 223-1400 (click-to-call)
- Office hours table (Mon–Fri 8am–5pm)
- Contact form: Name, Phone, Email, Message, Submit
- Bilingual note: Hablamos Español

---

### `/request-appointment` — Request Appointment Form
**Status:** Exists (needs content)  
**Purpose:** Primary conversion page — all CTAs site-wide point here  
**Must include:**
- Clean, prominent form layout (not buried under content)
- Fields: Parent Name, Child's Name, Child's Age/DOB, Phone, Email, Preferred Date/Time, Insurance Provider, Message/Reason for Visit
- "What happens next" reassurance text (we'll call within 1 business day)
- Office phone as alternative
- Trust signals sidebar: 4.8★, Same-Day, Hablamos Español

---

### `/faq` — Frequently Asked Questions
**Status:** Exists (needs content)  
**Must include:**
- SubPageLayout hero (kicker: "Got Questions?", title: "Frequently Asked Questions")
- Accordion-style FAQ list, organized by category:
  - **First Visit:** When should my child first see a dentist? What should I bring?
  - **Treatments:** Are X-rays safe? Does my child need sealants?
  - **Sedation:** Is nitrous oxide safe? What is general anesthesia?
  - **Insurance:** Do you accept Medicaid? What if I have no insurance?
  - **Emergency:** What do I do if my child knocks out a tooth?
- Minimum 10–15 questions total
- CTA at bottom: Still have questions? Call us.

---

### `/blog` — Blog Listing
**Status:** Built (Sanity-powered)  
**Notes:** Dynamic content via Sanity CMS. Featured post card + 3-column grid. Already fully styled. No build work needed unless adding static placeholder posts.

---

### `/blog/[...slug]` — Blog Post
**Status:** Built (Sanity-powered)  
**Notes:** Dynamic route. Already handles rendering blog post body from Sanity portable text. No build work needed.

---

### `/reviews` — Reviews Overview
**Status:** Exists (needs content)  
**Must include:**
- SubPageLayout hero (kicker: "What Parents Say", title: "Patient Reviews")
- 4.8★ aggregate rating badge
- Grid of written testimonials (8–12 cards) — `.review-card` style
- Google Reviews embed or CTA to view on Google
- CTA: Leave us a review on Google

---

### `/reviews/written-reviews` — Written Testimonials
**Status:** Exists (needs content)  
**Must include:** Full paginated list of written reviews; same card style as ReviewBubbles component

---

### `/reviews/video-testimonials` — Video Testimonials
**Status:** Exists (needs content)  
**Must include:** Grid of embedded video testimonials (YouTube or Vimeo iframes in styled containers)

---

### `/pay-now` — Pay Now (Placeholder)
**Status:** Linked from footer "Pay Now" button — page may not exist yet  
**Must include:** Simple page with payment portal link or embedded payment widget

---

## 8. SEO Requirements (Apply to Every Page)

Every page file must export a `metadata` object:

```typescript
export const metadata = {
  title: '[Page Title] | Kids Dentist Grayslake, IL',
  description: '[Unique 140–160 character description with local keywords]',
  openGraph: {
    title: '[Page Title] | Kids Dentist Grayslake, IL',
    description: '[OG description]',
    url: 'https://kidsdds.com/[route]',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}
```

**Local SEO keywords to weave in naturally:**
- "pediatric dentist Grayslake IL"
- "kids dentist Grayslake"
- "children's dentist Lake County IL"
- "pediatric dental care Grayslake"
- "dentist for kids near me"
- Service-specific: "sedation dentistry for kids", "emergency pediatric dentist", etc.

---

## 9. Brand Assets Reference

All assets live in `/public/brand_assets/`:

| File | Usage |
|---|---|
| `kids-dentist-logo.png` | Header logo (189×104px source, rendered at 72px height) |
| `hero-video.mp4` | Hero section looping background video |
| `hero-photo.jpg` | Fallback hero image |
| `index-dr-sonia.jpg` | Dr. Sonia Gutierrez headshot |
| `index-dr-dave.jpg` | Dr. Dave Rutcosky headshot |
| `index-dr-alrayyes.jpg` | Dr. Sahar Alrayyes headshot |
| `index-dr-ashley.jpg` | Dr. Anne-Ashley Compton headshot |

Additional assets (office photos, team photos, service illustrations) will be added to `/public/brand_assets/` as they become available. Use descriptive placeholder components in the meantime.

---

## 10. Prompt-Writing Guide for Claude Code

When generating prompts using this document, structure each prompt like this:

```
Build the [Page Name] page at [route] for the Kids Dentist Grayslake website.

Context:
- This is a Next.js 15 App Router project with TypeScript, Tailwind CSS, and Framer Motion.
- The design system is documented in SITE_SPEC.md — use the colors, font (Nunito), button classes, and animation patterns defined there.
- Always invoke the frontend-design skill before writing any component code.
- Use SubPageLayout component for the hero section with kicker="[kicker]" and title="[title]".

This page must include:
[Bullet list of specific sections from Section 7 of SITE_SPEC.md]

SEO: Export a metadata object with title "[Page Title] | Kids Dentist Grayslake, IL" and a 150-character description targeting [relevant keywords].

Do not create new components unless necessary — prefer composing existing ones.
```

---

*Last updated: April 29, 2026. Reference CLAUDE.md for Claude Code-specific rules.*
