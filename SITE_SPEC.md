# Kids Dentist Grayslake — Complete Site Specification

> **Purpose of this document:** A living reference for the current build state. Covers every route, component, design token, data model, and integration so Claude Code can produce precise, context-rich work — and so this document, combined with its two companion files, can serve as a rebuild specification for the entire site.

## 0. How to Use This Document to Rebuild the Site

This file is the **architecture and structure** half of a rebuild prompt. The **exact copy** (every English and Spanish string on the site) lives in `messages/en.json` and `messages/es.json` — those two files are the canonical content source and are deliberately *not* duplicated into this document (they're ~1,270 lines each; inlining them here would just create a second copy that goes stale the moment either file is edited).

**To rebuild this site in one prompt, provide a fresh Claude Code session with all three:**
1. This document (`SITE_SPEC.md`) — architecture, routes, components, design tokens, data models, integrations.
2. `messages/en.json` and `messages/es.json` in full — every piece of copy on the site, keyed by the namespaces documented in §18.
3. The binary assets referenced in §13 (`public/brand_assets/`, `public/forms/`) — logo, doctor/staff photos, hero video, QR code, insurance logos, office/event photos, patient form PDFs. **Text cannot regenerate these** — they must be re-uploaded to the new project's `public/` folder at the paths listed in §13.

**Realistic expectations:** even with all three, a fresh AI-driven rebuild will not be byte-identical — inline style objects, exact whitespace, and minor layout decisions will vary run to run, the way any two implementations of the same spec differ. What this document *does* guarantee, if followed, is the same architecture (Next.js 15 App Router + next-intl bilingual routing), the same design tokens (§3), the same page inventory and content (§9 + the JSON files), the same data models (Sanity schemas, §11), and the same integrations (email, analytics, payments). That's sufficient for a functionally and visually near-identical result.

**Also out of scope for any prompt, by design — set these up separately after rebuild, never paste them into a shared document:**
- `.env.local` secrets (`RESEND_API_KEY`, `SANITY_API_WRITE_TOKEN`) — see §15 for the full variable list, values excluded.
- Netlify site-level env vars and DNS/domain configuration.
- The Sanity project itself (dataset content — blog posts, events, reviews, parent questions — lives in Sanity, not in this repo; a rebuild gets an *empty* dataset with the same schemas unless content is separately migrated via the Sanity CLI/export).

---

## Changelog

**Last updated:** 2026-09-09 (SITE_SPEC.md rebuild-grade overhaul) — Rewrote this document from a well-maintained changelog-plus-reference into a document explicitly structured to support single-prompt rebuilds (see new §0 above). Corrected several inaccuracies that had drifted in from recent work not yet reflected here: every app route lives under `app/[locale]/...`, not `app/...` as several older entries stated; the Header's flat "FAQ" nav item became a "Q&A" dropdown (General FAQ + Questions Parents Are Afraid to Ask) back in the 2026-08-20 pass but the nav-structure diagram in old §5 still showed the flat version; `/ask-the-doctor` was fully renamed to `/ask-us-a-question` (component `AskQuestionForm.tsx`) with the old path now a 301 redirect, but the route inventory and i18n table still referenced the old path/component; `/qa/parents-afraid-to-ask` (built 2026-08-20) had no row in the route inventory at all. Also folded in four small fixes made since the last changelog entry that hadn't been logged yet: **1.** `MeetOurDoctors.tsx` and the Meet-the-Dentists `DoctorGrid.tsx` — entire doctor cards are now clickable links to the bio page (previously only a small "Meet Dr. X ›" text link was), using a real `Link` wrapper so the links stay crawlable, with nested interactive elements (the read-bio toggle, the inline "Request Appointment" action) converted to `stopPropagation`-guarded controls so they don't also trigger card navigation. **2.** `ServicesGrid.tsx` — same full-card-click treatment for the homepage services grid. **3.** `SaveContactQR.tsx` — the "Save Our Contact Info" link now downloads a static vCard (`public/brand_assets/kids-dentist-contact.vcf`) instead of opening the Linktree URL; the QR *image* itself is unchanged and still encodes the Linktree URL when scanned by a phone camera, so the two intentionally point to different places now. **4.** `ReviewBubbles.tsx`'s "Share Your Experience" CTA now points at the same Linktree URL as the QR code (previously a hardcoded, imprecise Google Maps place link); `tour-our-office/page.tsx`'s "Get Directions" button now opens the practice's actual Google Maps place link (previously pointed at `/contact`). Added net-new sections that didn't exist before: §2.1 exact dependency table, §11 full Sanity schema field reference (all 6 schema files), §14.1 GA4 event catalog, §15 full `netlify.toml`/`next.config.ts` contents, §16 full file/folder structure. Renumbered sections 4 through 18 to accommodate.

**Previously (2026-08-31, blog post crash fix — bilingual title/excerpt rendered as raw objects):** `post.title`/`post.excerpt` are `localizedString`/`localizedText` objects (`{en, es}`) per the Sanity schema, but `BlogGrid.tsx`, `blog/[...slug]/page.tsx`, and the "latest post" announcement banner in the root layout (`app/[locale]/layout.tsx` → `Header.tsx`'s `latestPostTitle` prop) all rendered the field directly as if it were a plain string. This bug had been dormant because the only post in the dataset predated the bilingual schema migration and still stored `title` as a plain string; the first post authored through the current Studio schema crashed SSR rendering wherever its title was touched — including the root layout, which runs on every route — with React's "Objects are not valid as a React child." Because Next's ISR keeps serving the last successfully-built page when a background regeneration throws, the site appeared "stuck" on the old post for a full day rather than erroring outright, until a cache entry finally expired with nothing to fall back to and surfaced a hard 500 on `kidsddswebsite.netlify.app/blog`. Fixed by resolving `title`/`excerpt` to the requested `$locale` inside the GROQ queries themselves (`sanity/lib/queries.ts`: `allPostsQuery`, `searchPostsQuery`, `postBySlugQuery`, `latestPostQuery`), each via `coalesce(field[$locale], field.en, field)` — the trailing raw-field fallback covers legacy posts whose title/excerpt are still plain strings. `$locale` threaded through every call site: `blog/page.tsx` (previously didn't receive `params` at all), `blog/[...slug]/page.tsx` (`generateMetadata` and the page component), and `layout.tsx`'s `latestPostQuery` fetch.

**Previously (2026-08-21, homepage/layout polish + real office tour photos):** Two same-day passes. **Homepage/layout:** `ServicesGrid` container widened 1280px → 1440px; `MeetOurDoctors` cards switched to `align-items: start` so Anne-Ashley's 2-line name doesn't skew the row, then widened further (container max-width, grid gap, card padding) so "Anne-Ashley Compton, DDS, MS" fits on one line across common desktop widths (1366px–1920px verified with a real browser); `hero.trustBanner` split into prefix/suffix i18n keys so the trust banner text breaks onto two lines after "for"/"por"; `Hero.tsx` now spans the true viewport width edge-to-edge via the `100vw`/`-50vw` breakout technique instead of being capped by the page's centered `.container` (max-width 1440px); new brand-purple "New: Questions Parents Are Afraid to Ask" banner added above the existing blog announcement banner, matching its structure/positioning; `Footer.tsx` social links now read "Facebook"/"Instagram" only (handles removed); fixed cropped headshots in `/about`'s `DoctorGrid.tsx` by adding `objectPosition: 'top center'` (already present in the sibling `MeetOurDoctors.tsx`, just missing here); `/for-patients/patient-forms` title now breaks after "&" ("Patient Forms &" / "Pre-Visit Portals"), which required widening `SubPageLayout`'s `title` prop to accept `ReactNode`, not just `string`. **Office tour photos:** `/about/tour-our-office` — removed the top row of small "photo carousel" cards (duplicated the same 4 spaces already shown in the main alternating-layout sections below, just as smaller placeholder boxes); added real photos for all 4 spaces (Welcome Lobby, Treatment Rooms, Kids Play & Waiting Area — custom-cropped from a portrait phone photo to keep the XBOX signage and both screens in frame, not a plain center-crop — and the Digital Technology Suite); removed the unconditional "Photo Coming Soon" overlay that previously sat on top of every room image regardless of whether a real photo existed; removed now-orphaned space icon fields and the unused `photoComingSoon` i18n key. **Also added later, same general period (documented here retroactively):** real photos wired into the homepage's small office-photo carousel (`about/page.tsx`'s `officeSlides`) for 3 of its 4 slides (Waiting Room, Treatment Rooms, Play Zone — "Our Team" stayed a placeholder, no team photo supplied), `OfficeTourPreview.tsx`'s two feature images fixed from dead paths (`office-waiting-room.jpg`/`office-treatment-bay.jpg`, neither file ever existed) to the real `office-tour-lobby.jpg`/`office-tour-treatment.jpg`, and the `/about` Recent Events teaser grid replaced 3 dashed "Event Photo Coming Soon" placeholders with 4 real community event photos (`public/brand_assets/events/event-photo-1..4.jpg`).

**Previously (2026-08-20, parentQuestion CMS + Sanity-backed blog search + Q&A pillar page + header search surfacing):** Three-commit pass building out a "Questions Parents Are Afraid to Ask" feature end-to-end. **1. Schema + pillar page:** new `parentQuestion` Sanity schema (question/category/answer) registered in `schemaTypes` and the Studio desk structure; new `/qa/parents-afraid-to-ask` pillar page fetches `parentQuestion` docs from Sanity, filters by category via tilted "note card" tabs, and reveals answers (Portable Text) in Framer Motion accordions matching the site's existing `FaqAccordion` interaction; `Header.tsx`'s flat FAQ link became a "Q&A" dropdown (General FAQ + Questions Parents Are Afraid to Ask), reusing the existing `NavEntry.children` pattern for both desktop and mobile nav; new `qaPage` i18n namespace with real Spanish translations. Same commit also added `searchPostsQuery` (GROQ), wired into `/blog` via a `?q=` param with a search box and results/no-results states in `BlogGrid.tsx`. **2. Bilingual follow-up:** `parentQuestion`'s single `question`/`answer` fields split into per-language pairs (`question_en`/`question_es`, `answer_en`/`answer_es` — English required, Spanish optional); `allParentQuestionsQuery` and `QAContent.tsx` updated to match, picking the Spanish field via `useLocale()` and falling back to English when a Spanish translation isn't filled in yet. **3. Header search surfacing:** the header search bar (`SiteSearch.tsx`) had been a fully static, hardcoded index of ~31 site pages that never queried Sanity — none of the Q&A content was findable (e.g. searching "breastfeeding" returned nothing). New `allParentQuestionsSearchQuery` (GROQ), a lean plain-text projection (`pt::text()` on both answer languages, since search only needs matchable strings, not renderable Portable Text); `layout.tsx` fetches it (same `revalidate: 60` window as the Q&A page) and resolves each question/answer to the current locale server-side, following the same server-fetch-in-layout pattern already used for the blog announcement banner; `SiteSearch.tsx` merges these Sanity-sourced results with the existing static index behind a new `dynamic` flag; new "Q&A" search category (icon + `catQA` label, en/es).

**Previously (2026-08-18, in-network insurance provider logos):** Sourced official wordmark logos (Aetna, Delta Dental Premier, Guardian, Principal, United Healthcare) from Wikimedia Commons, re-exported as transparent PNGs, and added to `public/brand_assets/insurance-logos/`. `/for-patients/insurance-info/page.tsx`'s `IN_NETWORK_PROVIDERS` array gains an optional `logo: { src, width, height }` field per provider; cards render the `next/image` logo (fixed `LOGO_DISPLAY_HEIGHT = 28`px, width computed from the source aspect ratio) when present, falling back to the plain-text provider name otherwise. Cigna and Lincoln Financial keep the text-only treatment — no usable free logo was found for either.

**Previously (2026-08-18, Save Our Contact QR + patient forms/insurance/For Patients rebuild):** Four-part pass. **1. Save Our Contact QR:** new `components/SaveContactQR.tsx` renders a QR code (`public/brand_assets/linktree-qr-code.png`) with a "Save Our Contact Info" label below it; added to `AppointmentForm.tsx`, `ContactContent.tsx`, and `ask-us-a-question/page.tsx`. **2. Patient Forms downloads:** replaced the prior 4-card layout with a 2-card layout: New Patient Registration and Dental History Questionnaire only, backed by real files at `public/forms/`. **3. Insurance page:** Cigna's card gained a `cignaNote` ("Total DPPO only") in place of the stale Aetna DMO note; provider list restyled to plain white cards. **4. For Patients landing page:** `/for-patients` rebuilt from an unstyled stub to match the site's landing-page pattern.

**Previously (2026-08-17, Patient Forms nav link + copy tweaks):** `Header.tsx`'s "For Patients" dropdown gained a "Patient Forms" item; Ask Us a Question's placeholder reworded; Contact form's success message softened from a specific one-business-day commitment to "very soon."

**Previously (2026-08-17, dual-email auto-responder system):** Every form submission (`/api/appointment`, `/api/contact`, `/api/ask-doctor`) fires two emails in parallel via `Promise.allSettled`: an internal office alert (`emails/InternalOfficeAlert.tsx`) and a bilingual parent auto-responder (`emails/ParentAutoResponder.tsx`), both from `EMAIL_CONFIG.noreplyFrom`. Locale detected server-side via `lib/getLocaleFromRequest.ts` (Referer path, then `NEXT_LOCALE` cookie). Office-alert failure returns an error; auto-responder failure is logged but non-fatal.

**Previously (2026-08-17, dead Patient Manager portal link fix):** `/for-patients/patient-forms`'s portal button pointed at a placeholder `#patient-portal` fragment; repointed to the real portal URL, opening in a new tab.

**Previously (2026-08-16, global FAQ expansion + `/about` headshot fix):** Added 8 AI-optimized Q&A pairs to `/faq` as two new groups (Orthodontics & Cost; Parenting & Hidden Anxiety), bringing the page to 6 groups / 17 questions. Fixed `/about`'s `DoctorGrid.tsx` pointing at nonexistent headshot files, silently rendering blank placeholders.

**Previously (2026-08-14, Orthodontic Evaluations surfaced in global nav + homepage services grid):** Added "Orthodontic Evaluations" as a 6th nav item and 6th services-grid card. Corrected long-stale documentation claiming `ServicesGrid` was an auto-rotating carousel — it never has been; it's a static grid.

**Previously (2026-08-14, AI-optimized FAQ rollout + Orthodontics page built out):** Added answer-first FAQ blocks to four service pages for AI answer-engine extraction. Built out `/services/orthodontics` from an "Under Construction" placeholder to a full page — evaluation-and-referral framing only, no in-house braces/Invisalign.

**Previously (2026-07-27, hero video reliability fixes):** Fixed a black-frame bug (video paused before first frame decoded for `prefers-reduced-motion` users, no poster set) by adding a poster image and gating `.play()` correctly; then, per client feedback that a competitor's site autoplays regardless of the OS setting, removed `prefers-reduced-motion` handling entirely — the hero video now always autoplays. Overlay opacity lowered twice (50% → 30% → 20% black) for brightness.

**Previously (2026-07-26, Cloudinary hero video sourcing):** `Hero.tsx`'s video `src` was hardcoded to a local path that only worked because `.env.local` happened to match; production (which points `NEXT_PUBLIC_HERO_VIDEO_URL` at Cloudinary via `netlify.toml`) was never actually reading that env var. Fixed to read `process.env.NEXT_PUBLIC_HERO_VIDEO_URL` with the Cloudinary URL as a literal fallback. This exact bug had happened once before in this project.

**Previously (2026-07-25, hero video Netlify deploy fix):** The hero previously pointed at a 92.5MB file excluded by `.gitignore`'s blanket `*.mp4` rule — Netlify deployed with no video at all. Re-encoded to 9.1MB with no visible quality loss.

**Previously (2026-07-26, Tailwind CSS v4 installed):** Root-caused a long-standing gap: `tailwindcss`/`@tailwindcss/postcss`/`postcss` were never actually installed despite hundreds of Tailwind utility classNames already written across components — they were silently inert, working only where a parallel inline `style` or custom CSS class also existed. Installed and configured properly, **deliberately omitting Tailwind's `preflight.css`** reset since it would fight the extensive hand-written base CSS in `global.css`.

**Previously (2026-07-25, i18n completeness pass):** Two-part localization cleanup. Spanish terminology swapped from "dentista" to "odontólogo/odontóloga" throughout (preserving grammatical gender per doctor); audited every component/page for hardcoded English strings and wired ~30 files into next-intl, including `Footer.tsx` and `SiteSearch.tsx` which had been 100% hardcoded regardless of locale. Fixed a real bug where `MeetOurDoctors.tsx` sourced doctor names from a separate hardcoded English array instead of the localized `about.*Name` keys, so female doctors showed "Dr." instead of "Dra." even in Spanish. Fixed hardcoded `'en-US'` date formatting on blog/event pages. Deliberately left untranslated: `ReviewBubbles`' fallback testimonial quotes (translating a purported direct quote would mean inventing words for a named person), Sanity CMS-authored content, and page `metadata`/JSON-LD (still English-only sitewide — a known gap).

**Previously (2026-07-07, v3 certified content remediation):** Two-pass clinical content audit against doctor-provided/CEO-confirmed source facts. Corrected fabricated credentials and biographical details across all four doctor bios; added preparation-tips section to First Visit page; added Aetna DMO-under-7 note to insurance page (later removed 2026-08-18 as no longer current).

**Previously (2026-07-07, earlier pass):** Doctor credentials standardized to "DDS, MS" site-wide; clinical accuracy pass removing fabricated claims; `/services/emergency` redesigned with the `EmergencyTriage` Yes/No widget; in-network insurance list updated to 7 providers, Medicaid/CHIP removed from patient-facing copy; FAQ expanded to 10 Qs / 4 groups.

**Previously (2026-07-01):** `/about/meet-the-team` built out with real staff headshots; real headshots replace all 4 doctor photos site-wide; mobile announcement bar stacks into two rows.

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
| Linktree | linktr.ee/Kidsdentistgrayslake — destination for the QR code and "Share Your Experience"/"Save Our Contact Info" links |
| Patient portal | csintake.patientengagepro.com/new/e6gqsw/clqaik (Sensei Patient Manager, opens in a new tab from `/for-patients/patient-forms`) |
| Specialty | Pediatric Dentistry **only** — no adult patients |
| Languages | English, Spanish (Hablamos Español) |

### Doctors
| Doctor | Credential | Bio Slug |
|---|---|---|
| Dr. Sonia Gutierrez | DDS, MS | `dr-sonia-gutierrez` |
| Dr. Dave Rutcosky | DDS, MS | `dr-dave-rutcosky` |
| Dr. Sahar Alrayyes | DDS, MS | `dr-sahar-alrayyes` |
| Dr. Anne-Ashley Compton | DDS, MS | `dr-anne-ashley-compton` |

All four completed their pediatric dentistry specialty at the University of Illinois at Chicago and are Diplomates of the American Board of Pediatric Dentistry. Dr. Alrayyes additionally holds FAAPD (Fellow) status. All four hold a Master of Science in Oral Sciences. Full certified bio text (education, personality, family narrative) lives in `drProfiles.*` in the message files — do not invent or alter it; see §18.

### Office Hours
| Day | Hours (Footer display) | Hours (Schema.org) |
|---|---|---|
| Monday | 9:00 am – 5:00 pm | 08:00–17:00 |
| Tuesday | 9:00 am – 5:00 pm | 08:00–17:00 |
| Wednesday | 8:30 am – 5:00 pm | 08:00–17:00 |
| Thursday | 9:00 am – 5:00 pm | 08:00–17:00 |
| Friday | 8:00 am – 2:00 pm | 08:00–14:00 |

> **Note:** Footer display hours and Schema.org hours differ slightly (Monday/Tuesday/Thursday show 8am in Schema.org vs. 9am in the Footer). Reconcile before next audit — not yet fixed as of this writing.

### Key Trust Signals
- 650+ five-star Google reviews (4.8★)
- Same-day appointments available
- Emergency pediatric visits accepted
- In-network with Aetna, Cigna, Delta Dental Premier, Guardian, Lincoln Financial, Principal, and United Healthcare (Cigna is Total DPPO only — noted on `/for-patients/insurance-info`)
- Board-certified pediatric specialists only
- Hablamos Español
- Practice open since 1994 — homepage `Hero.tsx` computes exact years/months/days via `lib/practiceAge.ts` rather than a hardcoded "30+ years"

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router), invoked via `next-intl/plugin` in `next.config.ts` |
| Language | TypeScript 5.9.3 |
| UI Library | React 19 (installed as `"latest"`) |
| Styling | Tailwind CSS v4 (utilities + theme only, **no preflight reset** — see changelog 2026-07-26) + extensive hand-written custom CSS in `styles/global.css`. Most component visual styling is inline `style={{...}}` objects, not Tailwind classNames — Tailwind is a secondary/supplementary styling layer here, not primary. |
| Animation | Framer Motion (`motion`, `AnimatePresence`, `useScroll`, `useMotionValueEvent`) |
| i18n | next-intl v4.13.0 — see §18 for full setup |
| CMS | Sanity v5.21.0 (Studio mounted at `/studio`, locale-independent route) — see §11 |
| Analytics | Google Analytics 4 via `@next/third-parties/google`'s `<GoogleAnalytics>` (`NEXT_PUBLIC_GA_ID` env var); custom events via `lib/gtag.ts`'s `sendGAEvent` pushing to `window.dataLayer` directly (not `window.gtag()` — a deliberate fix for a timing bug where events fired before gtag.js finished initializing) — see §14.1 for the full event catalog |
| Email | Resend + React Email (`react-email`, `@react-email/components`) — dual-send per form submission, see §10 |
| Payments | HostedPayNow (POST form embedded in `Footer.tsx` and `/pay`'s `PayNowForm.tsx`) |
| Images | `next/image` everywhere, with descriptive `alt` tags; remote pattern allowlist for `cdn.sanity.io/images/**` only (`next.config.ts`) |
| Fonts | Nunito (only font used site-wide) — weights 400–900, loaded via Google Fonts `@import` in `styles/global.css` |
| Hosting | Netlify, via `@netlify/plugin-nextjs` — see §15 for the full `netlify.toml` |

### 2.1 Exact Dependency Versions (`package.json`)

```json
{
  "dependencies": {
    "@next/third-parties": "^16.2.6",
    "@portabletext/react": "^6.0.3",
    "@react-email/components": "^1.0.12",
    "framer-motion": "^12.38.0",
    "next": "latest",
    "next-intl": "^4.13.0",
    "next-sanity": "^12.3.0",
    "react": "latest",
    "react-dom": "latest",
    "resend": "^6.12.2",
    "sanity": "^5.21.0",
    "styled-components": "^6.4.0"
  },
  "devDependencies": {
    "@netlify/plugin-nextjs": "^5.15.9",
    "@tailwindcss/postcss": "^4.3.3",
    "@types/node": "latest",
    "@types/react": "latest",
    "heic-convert": "^2.1.0",
    "postcss": "^8.5.23",
    "react-email": "^6.9.2",
    "tailwindcss": "^4.3.3",
    "typescript": "5.9.3"
  }
}
```

**Notes:**
- `styled-components` is installed but **not actually imported anywhere in the codebase** — every component uses inline styles or plain `<style>` blocks instead. It's a vestigial dependency; a rebuild doesn't need to wire it up to match current behavior, though removing it entirely would also be a faithful match.
- `heic-convert` is a local tooling dependency used ad hoc when processing raw `.HEIC` phone photos into web-ready JPEGs before they're checked into `public/brand_assets/` (via one-off `sharp`+`heic-convert` scripts, not a build-time dependency of the site itself).
- `next`/`react`/`react-dom` are pinned to `"latest"` rather than a fixed version — a rebuild done at a different point in time will pull whatever is current then, which may include breaking changes Next.js/React have shipped since. This is a deliberate existing choice in this repo, not a rebuild artifact to avoid.

### Key Rules
- `'use client'` required at the top of any component using hooks, event handlers, or Framer Motion.
- Server components (no `'use client'`) for static page layouts — preferred for SEO and performance.
- All images use `next/image`. All `alt` tags must be highly descriptive.
- Every page exports a `metadata` object with `title`, `description`, `alternates.canonical`, and OpenGraph tags.
- Semantic HTML required: `<header>`, `<main>`, `<article>`, `<section>`, `<nav>`, `<footer>`.
- **Internal links must use the locale-aware `Link`/`useRouter`/`usePathname` from `@/navigation` (a thin wrapper over `next-intl/navigation`), never `next/link` or `next/navigation` directly.** This was a real, sitewide bug fixed in `Header.tsx` — plain `next/link` `href`s drop the `/es` prefix when clicked from a Spanish page, and next-intl's locale-detection middleware then produces inconsistent "sometimes switches language" behavior depending on cookie state. `tel:`, `mailto:`, and external (`https://...`) links correctly stay as plain `<a>` tags — they're not internal routes.

---

## 3. Design System

### Color Palette (CSS Variables — `styles/global.css`)

**Phase 1 overhaul 2026-06-24.** High-energy pediatric palette — purple-primary + teal-accent split (replaced an older teal-primary palette).

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
| `--muted-700` | `#3D3D3D` | Body text |
| `--bg` | `#FDF8F2` | Page canvas — warm off-white |
| `--serene-mint` | `#6BA899` | Mint — footer gradient tail |
| `--soft-sage` | `#8BA596` | Soft green — secondary accents |
| `--light-blue` | `#80D2F5` | Sky blue — legacy references |
| `--max-width` | `1440px` | Max container width |

Other colors used inline (not CSS variables, appear directly as hex literals in component `style` objects) that recur often enough to be de-facto tokens: `#4A90A4` (a teal used as the default accent on many `SubPageLayout` sub-pages before the Phase 2 brand-purple pass — still present in many service-page inline styles), `#E8934F`/`#E97D63` (orange gradient used for most "primary" form-submit buttons, distinct from `--accent-500`/`--cta-coral`), `#78509b` (purple used for Q&A/Ask-a-Question theming), `#D97706` (amber, used for the sedation page and financing/CareCredit theming), `#6b7280`/`#9ca3af` (gray body/muted text), `#1e3a5f`/`#1e2d3d` (dark navy headings on some cards).

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

Many form-submit and card CTA buttons instead use an inline gradient (`linear-gradient(135deg, #E8934F, #E97D63)`) rather than the `.btn-primary` class — both read as the same visual "orange CTA" language; treat them as equivalent when rebuilding, not a discrepancy to fix.

### Card Patterns

**Service / Feature Card** (`.service-card`, `.vp-card`)
- `border-radius: 20px–28px`, `padding: 1.5rem–2.25rem`
- Soft gradient tinted background (per service/feature)
- Icon row, h3 teal heading, gray body text
- `whileHover`: lift `-5px` to `-6px`, elevated box shadow
- As of 2026-09, the **entire card** is a real `Link` to the service page (see §8) — not just a small "Learn More"-style text link at the bottom.

**Review Card** (`.review-card`)
- White background, `border-radius: 24px`, `padding: 2rem`
- Star rating row, quote text, author name

**Full-card-click pattern** (established across `ServicesGrid`, `MeetOurDoctors`, and the Meet-the-Dentists `DoctorGrid`): wrap the card's inner content in a locale-aware `Link` (`display: flex/block`, `flex: 1` or `height: 100%`, `text-decoration: none`, `color: inherit`) rather than making only a small text/icon element clickable, while the outer `motion.div`/`motion.article` keeps the hover/tap animation. Any nested interactive element that must do something *other* than navigate to the card's own href (an expand/collapse toggle, a differently-targeted CTA) needs `onClick={(e) => e.stopPropagation()}` — and if that nested element is itself a navigable link, it must be a `<button onClick={() => router.push(...)}>` rather than a second `<a>`/`Link`, since an anchor cannot validly nest another anchor (browsers silently break the outer tag if you try). Existing CSS descendant selectors (e.g. `.service-card p`, `.service-card:hover .service-link`) keep working through the `Link` wrapper since descendant selectors don't require a direct parent-child relationship.

### Navigation Dropdowns
Uses **inline styles** (not Tailwind utility classes) on `motion.div` containers.
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
| `max-width: 480px` | Single column on the tightest grids (e.g. events teaser) |
| `max-width: 540px` | Single column; footer 1-col |
| `max-width: 768px` | Mobile nav (hamburger); condensed hero |
| `max-width: 900px` | 2-column footer grid; 2-column tablet step-down on wider grids |
| `1440px` | Full desktop — 3–6 column layouts depending on the grid |

---

## 4. Global App Structure

Next.js requires a root layout outside any dynamic segment; the actual site chrome lives one level down, in the `[locale]` segment, so every real page gets `params.locale` and can call `setRequestLocale`/`getTranslations`.

**`app/layout.tsx`** (root, locale-independent) — intentionally minimal:
```tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
```

**`app/[locale]/layout.tsx`** — the real layout, renders on every non-Studio page in this order:
1. `<BannerWrapper>` → `<AnnouncementBanner />` — **purple gradient** top bar. Sanity-powered: fetches the latest featured event (`featuredEventQuery`, ISR 300s); links to `/about/recent-events/[slug]`. Returns `null` if no event is published. Hidden inside Studio via `BannerWrapper` (client component that checks pathname).
2. `<Header />` — sticky top navigation. `Header.tsx` itself renders two more banners above its own sticky nav (see §5): the Q&A banner and the blog-post banner.
3. `<main className="container main-content">{children}</main>`
4. `<Footer />`
5. `<FloatingWidget />` — fixed bottom CTA
6. `<GoogleAnalytics>` — conditional on `NEXT_PUBLIC_GA_ID`

The layout also server-fetches `latestPostQuery` (ISR 300s) and `allParentQuestionsSearchQuery` (ISR 60s) and passes their results down as props to `Header` (`latestPostTitle`/`latestPostSlug`, `qaSearchItems`) rather than having `Header` or its children fetch Sanity data themselves.

**`app/studio/[[...tool]]/page.tsx`** + **`app/studio/layout.tsx`** — Sanity Studio, mounted **outside** the `[locale]` segment entirely (no locale prefix ever applies to `/studio`).

**Global JSON-LD Schema** (`Dentist` type) injected into `<head>` by `app/[locale]/layout.tsx`:
- name, url, telephone, image, medicalSpecialty, address, geo, openingHoursSpecification, sameAs, priceRange

---

## 5. Header (`components/Header.tsx`)

**Two announcement banners** render above the sticky header itself, both hidden when `isStudio`:
1. **Q&A banner** (brand-purple background) — "New: Questions Parents Are Afraid to Ask ›" → `/qa/parents-afraid-to-ask`. Added 2026-08-20, matches the structure/positioning of banner 2.
2. **Blog banner** (orange gradient) — "Check out our latest blog post — "[post title]" ›" → `/blog/[slug]` (or bare `/blog` if no post yet). Post title comes from the `latestPost` prop fetched in the parent layout. On mobile (`≤768px`) the announcement text and post title stack into two rows instead of one.

**Logo:** `/brand_assets/kids-dentist-logo.png` — 72px height, links to `/` (locale-aware — resolves to `/es` when browsing Spanish, not a bare `/`).

**Nav alignment:** Nav links are **left-justified** (immediately after the logo), with `SiteSearch` pushed to the far right via `header-actions` (`margin-left: auto` lives on `.header-actions`, not `.site-nav`).

**Two-row desktop layout** (stacks inside `motion.header`):
- **Row 1 — Utility bar** (`.header-utility-bar-track`): right-aligned, slim. Contains `LanguageSwitcher`, phone CTA, and Directions CTA. Separated from Row 2 by a `1px` teal hairline border. Hidden at ≤768px.
- **Row 2 — Main nav** (`.header-inner`): Logo + nav links + `SiteSearch` pill.

**Desktop CTAs (utility bar, Row 1):**
- "Call/Text:" label + "(847) 223-1400" (`tel:+18472231400`) — fires `call_click` GA event (`location: 'header_desktop'`)
- "Directions" → Google Maps driving directions link (external, plain `<a target="_blank">`)

**Scroll behavior:** Background + shadow animate in at 50px scroll via `useScroll` + `useMotionValueEvent`.

**Mobile:** Utility bar hidden. Hamburger at ≤768px. Slide-down menu with `AnimatePresence`, body scroll locked while open. A search icon button sits left of the hamburger — toggles the mobile search panel (mutually exclusive with the nav menu).

**Global Site Search** (`components/SiteSearch.tsx`):
- Desktop: compact pill input, sole item in `.header-actions`
- Mobile: icon button toggles a spring-animated slide-down search panel
- Static ~31-item index covering service/FAQ/about/patient/contact routes, **merged at render time** with the Sanity-sourced `parentQuestion` results passed down from the layout (a `dynamic` flag distinguishes the two: static entries resolve display text via a compile-time `t(\`item${idx}Title\`)` i18n key lookup, Sanity-sourced entries already carry literal localized text)
- Weighted scoring: title = 4pt, category = 2pt, keywords = 1pt, description = 0.5pt; top 6 results shown
- Full keyboard navigation: ↑↓ navigate results, Enter navigates, Escape closes; ARIA `role="combobox"`/`role="listbox"`
- `variant?: 'desktop' | 'mobile'`; `onNavigate?: () => void` callback; `extraItems?: SearchItem[]` for the Sanity-sourced results

### Full Navigation Structure (`NAV` array in `Header.tsx`, shared by desktop + mobile)

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
  Orthodontic Evaluations         /services/orthodontics
For Patients ▼
  Child's First Visit             /for-patients/child-first-visit
  Patient Forms                   /for-patients/patient-forms
  Insurance & Financing           /for-patients/insurance-info
Q&A ▼
  General FAQ                     /faq
  Questions Parents Are Afraid to Ask   /qa/parents-afraid-to-ask
Blog                              /blog
Contact                           /contact
```

Every `href` in this tree is a `NavEntry`/`NavChild` object rendered through the locale-aware `Link` — see the §2 Key Rules note on why this matters.

---

## 6. Footer (`components/Footer.tsx`)

Gradient background: `--brand-purple` → `--brand-600` → `--serene-mint`. White text throughout.

**4-column grid** (2-col @ 900px, 1-col @ 540px):

**Col 1 — Brand**
- "Kids Dentist" wordmark + tagline
- Address link (Google Maps, opens in new tab) with location icon
- Phone link `tel:+18472231400` — "Text/Call us: (847) 223-1400"
- Email link `info@kidsdds.com`

**Col 2 — Explore (Quick Links)**
- Our Services → `/services`
- Meet the Dentists → `/about/meet-the-dentists`
- My First Visit → `/for-patients/child-first-visit`
- Patient Forms → `/for-patients/patient-forms`
- Insurance Info → `/for-patients/insurance-info`
- Blog → `/blog`

**Col 3 — Office Hours**
Mon–Fri schedule (see §1 table above)

**Col 4 — Stay Connected**
- "Facebook" pill button (label only, no handle) → `https://www.facebook.com/kidsddsgrayslake`
- "Instagram" pill button (label only, no handle) → `https://www.instagram.com/kidsddsgrayslake/`
- "Book Appointment" pill → `/request-appointment`
- "Pay Now" motion button — `<form>` POST to HostedPayNow gateway (token embedded in component; fires `payment_portal_clicked` GA event, `location: 'footer'`)
- "New patients always welcome. Hablamos Español."

**SEO service area block:** Inline paragraph naming Lake County cities (Grayslake, Waukegan, Libertyville, Mundelein, Vernon Hills, Lake Forest, Round Lake, Lindenhurst, Antioch, Gurnee, Zion).

**Bottom bar:** Copyright (`{year}` interpolated), Privacy Policy (`/privacy`), Sitemap (`/sitemap`).

---

## 7. Shared Components

| Component | Path | Description |
|---|---|---|
| `Header` | `components/Header.tsx` | Sticky nav, mobile hamburger, scroll-reactive, two announcement banners — see §5 |
| `Footer` | `components/Footer.tsx` | 4-col footer, social links, Pay Now form — see §6 |
| `Hero` | `components/Hero.tsx` | Homepage hero — full-bleed autoplay video background + overlaid text — see §8 |
| `QuickActionsBar` | `components/QuickActionsBar.tsx` | Fast-action strip (top of homepage, below hero); all pills use a neutral ghost style, no red "emergency" styling |
| `ServicesGrid` | `components/ServicesGrid.tsx` | Responsive 6-card services grid, static (not a carousel — see §8); entire card is a `Link` |
| `MeetOurDoctors` | `components/MeetOurDoctors.tsx` | Homepage doctor cards (4-col grid); entire card is a `Link` to the bio page |
| `ReviewBubbles` | `components/ReviewBubbles.tsx` | Rotating testimonial carousel (Sanity-fed); "Share Your Experience" CTA links to the practice Linktree |
| `ValueProps` | `components/ValueProps.tsx` | Homepage differentiator cards |
| `InsuranceBanner` | `components/InsuranceBanner.tsx` | Insurance highlight strip |
| `Button` | `components/Button.tsx` | Shared button primitive (variant, size, href/onClick) |
| `SubPageLayout` | `components/SubPageLayout.tsx` | Inner-page wrapper with gradient hero band; props: `kicker`, `title` (`ReactNode`, not just `string` — needed for pages that break the title across a `<br/>` or `&`), `subtitle`, `gradient` (`'blue'`\|`'green'`\|`'amber'`) |
| `AnimatedSection` | `components/AnimatedSection.tsx` | Scroll-triggered Framer Motion fade-in wrapper (props: `delay`, `direction`) |
| `FaqAccordion` | `components/FaqAccordion.tsx` | Expand/collapse FAQ list; prop `accentColor` lets each page theme it |
| `FirstVisitTimeline` | `components/FirstVisitTimeline.tsx` | 4-step animated first-visit timeline |
| `AnnouncementBanner` | `components/AnnouncementBanner.tsx` | **Purple** Sanity-powered top bar; fetches featured event (`featuredEventQuery`, ISR 300s); links to `/about/recent-events/[slug]`; returns `null` if no event |
| `BannerWrapper` | `components/BannerWrapper.tsx` | Client wrapper; hides `AnnouncementBanner` on `/studio` paths |
| `FloatingWidget` | `components/FloatingWidget.tsx` | Persistent bottom-screen CTA widget; call + appointment pills fire GA events; hides the appointment CTA specifically on `/request-appointment` |
| `InstagramFeed` | `components/InstagramFeed.tsx` | Instagram highlight grid (6 Story Highlight boxes) — built but **not rendered** on the homepage |
| `ValueProposition` | `components/ValueProposition.tsx` | Modular value prop card (alternate/standalone variant) |
| `SiteSearch` | `components/SiteSearch.tsx` | Global site search pill — see §5 |
| `LanguageSwitcher` | `components/LanguageSwitcher.tsx` | EN/ES toggle; `variant?: 'header' | 'hero'`; uses `useLocale()` + `@/navigation`'s `router.replace(pathname, { locale })` — see §18 |
| `PayNowForm` | `app/[locale]/pay/PayNowForm.tsx` | HostedPayNow POST form button (Framer Motion, orange gradient); fires `payment_portal_clicked` (`location: 'pay_page'`) |
| `SaveContactQR` | `components/SaveContactQR.tsx` | QR code (`linktree-qr-code.png`, scans to the Linktree) + "Save Our Contact Info" link that **downloads a vCard** (`public/brand_assets/kids-dentist-contact.vcf`) — the link and the QR image intentionally point to two different destinations. Fires GA event `save_contact_clicked`. Embedded in `AppointmentForm.tsx` (sidebar, above the "Why Families Choose Us" card), `ContactContent.tsx`, and `ask-us-a-question/page.tsx` |
| `DoctorGrid` (in `components/`) | `components/DoctorGrid.tsx` | 2×2 Framer Motion stagger grid for the `/about` page — `--bg-lavender` cards, blob-radius headshot frames, real photos (`index-dr-*.jpg`) |
| `DoctorGrid` (co-located) | `app/[locale]/about/meet-the-dentists/DoctorGrid.tsx` | **Distinct component, same name** — 4-card expandable listing for `/about/meet-the-dentists`. Entire card is a `Link` to the bio page (photo, name, role all navigate); nested "Read Bio"/"Close" toggle and inline "Request Appointment" button both `stopPropagation` so they don't also trigger the card's own navigation — see the full-card-click pattern in §3 |
| `OfficeTourPreview` | `components/OfficeTourPreview.tsx` | `'use client'` — full-bleed `--bg-teal-tint` section on `/about` with two `whileInView` slide-up image blocks (Waiting Room, Treatment Bays), each with an `onError`-driven "Photo Coming Soon" fallback overlay; links to `/about/tour-our-office` |
| `TeamCard` | `components/TeamCard.tsx` | Staff roster card for `/about/meet-the-team`: uniform rounded-square photo (top-anchored crop), nametag pill (accent color cycles per card), job title below |
| `EmergencyTriage` | `components/EmergencyTriage.tsx` | Yes/No patient triage widget on `/services/emergency`. "Are you currently a patient of Kids Dentist?" — Yes reveals the after-hours line; No reveals apology + office hours + main number. No contact forms. |

### SubPageLayout gradient variants
- `'blue'` — teal/blue tones (default for most service + about pages)
- `'green'` — mint/green tones (insurance, preventive pages)
- `'amber'` — warm orange tones (emergency, urgent pages)

`SubPageLayout`'s H1 text, kicker text, and dot-grid decoration use `var(--brand-purple)`. The `subtitle` prop has been removed from all doctor profile pages (taglines eliminated).

### First Visit steps (`firstVisit` namespace — 4 steps)
1. A Warm Welcome
2. A Gentle Exam
3. Cleaning & Fluoride
4. The Toy Tower & Prize Box

Also includes a 5-item preparation-tips section (`prepHeading` + `prep0`–`prep4`) shown before the CTA, and an embedded Instagram video link from Dr. Sonia under the "Age One Dental Visit" section.

---

## 8. Homepage (`app/[locale]/page.tsx`)

Renders these sections **in order**:

```
<QuickActionsBar />       ← fast-access action strip
<Hero />                  ← main hero + CTAs
<ServicesGrid />          ← services grid, full-card links
<InsuranceBanner />       ← insurance highlight strip
<MeetOurDoctors />        ← doctor cards, full-card links
<ReviewBubbles />         ← Sanity-fetched reviews (ISR 60s)
<ValueProps />            ← differentiator cards
```

**Note:** `InstagramFeed` exists but is **not** currently rendered on the homepage.

**SEO (homepage):**
- Title: "Pediatric Dentist Grayslake, IL | Kids Dentist"
- Description: "Grayslake's trusted pediatric dentist serving families from Waukegan, Libertyville, Mundelein, Vernon Hills, and Lake Forest. 650+ five-star reviews. Emergency visits available. In-Network with Delta Dental. Call (847) 223-1400."
- Canonical: `https://www.kidsdds.com/`

### Hero (`components/Hero.tsx`)
Full-bleed autoplay background video with text overlaid on top (`min-height: 74vh` mobile / `90vh` ≥768px, dark `#140C28` base while the video loads).

- **Background video:** `<video autoPlay loop muted playsInline>` fills the section (`absolute inset-0`, `object-cover`, `-z-20`). `src` reads `process.env.NEXT_PUBLIC_HERO_VIDEO_URL` (Cloudinary URL in production per `netlify.toml`; local `/brand_assets/hero-video.mp4` via `.env.local`) with the Cloudinary URL as a literal code fallback — **never hardcode a local path here**, this exact bug has happened twice in this project's history. `poster="/brand_assets/hero-photo.jpg"` covers any paused/blocked/slow-loading state. Always autoplays — deliberately ignores `prefers-reduced-motion`.
- **Readability overlay:** flat `rgba(0,0,0,0.2)` (20% black) layer between the video and the text, `-z-10`.
- **Text content** (overlaid, `max-width: 680px`, left-aligned):
  - **Badge row:** location pill ("Pediatric Dentistry · Grayslake & Lake County, IL") + `LanguageSwitcher` (`variant="hero"`)
  - **H1:** "Grayslake's [Pediatric Dentist] Since 1994." (`<span class="highlight">` wraps "Pediatric Dentist")
  - **Tagline:** "High-quality pediatric and children's dental care that kids actually look forward to — serving families throughout Lake County."
- **Corner group** (`.hero-corner`, top-right on desktop; drops to static in-flow below the tagline on mobile ≤768px — deliberately not pinned to the section's bottom edge, which would collide with `FloatingWidget`):
  - **Trust banner:** translucent pill — medal icon + dynamic "Serving Lake County for [X years, Y months] · Est. 1994" computed by `lib/practiceAge.ts` from Sept 14, 1994, split into prefix/suffix i18n keys so it wraps onto two lines after "for"/"por"
  - **Call CTA:** "Text/Call us: (847) 223-1400" (`btn-hero-call`, `tel:+18472231400`)
- No primary CTA button in the hero itself — `QuickActionsBar` above it and `FloatingWidget` cover that role. No trust chips, no animated gradient blobs (removed in the video redesign).

### ServicesGrid (`components/ServicesGrid.tsx`)
A static, responsive CSS grid — `SERVICE_CONFIG.map(...)` over `grid-template-columns` with breakpoints (6 → 3 → 2 → 1). No carousel behavior of any kind. Entire card (icon, title, description) is now a `Link` to the service page.

**6 Services (`SERVICE_CONFIG` order):**
| Title | href | Icon accent | Notes |
|---|---|---|---|
| Preventive Dentistry | `/services/preventive-dentistry` | `#4A90A4` teal | |
| Restorative Dentistry | `/services/restorative` | `#FF6B18` orange | |
| Sedation Dentistry | `/services/sedation-dentistry` | `#4A90A4` teal | |
| Special Needs Dentistry | `/services/special-needs` | `#78509b` purple | `featured: true` — purple ring/glow styling |
| Emergency Pediatric Dentistry | `/services/emergency` | `#FF4A2D` red-orange | |
| Orthodontic Evaluations | `/services/orthodontics` | `#4A90A4` teal | evaluation/referral framing, not in-house treatment |

### MeetOurDoctors (`components/MeetOurDoctors.tsx`)
- 4-column doctor grid; each card: blob-shaped headshot (`blobRadius` per doctor, unique organic shape), name, role. **Entire card is a `Link` to the bio page** — photo, name, and role all navigate, not just the "Meet Dr. [FirstName] ›" line at the bottom (which is now a `<span>` inside the card-wide `Link`, not its own anchor).
- Section CTAs: "Meet the Dentists" (orange) → `/about/meet-the-dentists` | "Meet the Team" (teal border) → `/about/meet-the-team`
- Photos: real professional headshots (`index-dr-*.jpg`), `objectPosition: 'top center'` cover-crop inside the blob container
- Card names source from `about.*Name` (via `nameKey` in the `DOCTORS` array), not a separate hardcoded array — this is what makes "Dra." render correctly for female doctors in Spanish.

**`DOCTORS` array (`MeetOurDoctors.tsx`):**
| nameKey | firstName | bioHref | photo |
|---|---|---|---|
| `soniaName` | Sonia | `/about/meet-the-dentists/dr-sonia-gutierrez` | `index-dr-sonia.jpg` |
| `daveName` | Dave | `/about/meet-the-dentists/dr-dave-rutcosky` | `index-dr-dave.jpg` |
| `saharName` | Sahar | `/about/meet-the-dentists/dr-sahar-alrayyes` | `index-dr-alrayyes.jpg` |
| `anneAshleyName` | Ashley | `/about/meet-the-dentists/dr-anne-ashley-compton` | `index-dr-ashley.jpg` |

### Meet the Team (`app/[locale]/about/meet-the-team/page.tsx` + `TeamCard.tsx`)
- 12-person staff roster, alphabetical by first name, real headshots
- Grid: 4 cols desktop / 3 tablet (≤900px) / 2 mobile (≤580px)
- Each `TeamCard`: rounded-square photo (top-anchored crop), overlapping nametag pill (accent color cycles through 5 brand tokens), job title below
- Titles: Don = "Business Manager", Eva = "Office Manager" (standardized from earlier, less specific labels)

### ReviewBubbles (`components/ReviewBubbles.tsx`)
Rotating testimonial carousel. Pulls featured reviews from Sanity via `featuredReviewsQuery` (`review` documents where `featured == true`). Displays 4.8★ badge + 650+ count. "Share Your Experience" CTA links to the practice's Linktree (`https://linktr.ee/Kidsdentistgrayslake?utm_source=linktree_profile_share`) — the **same destination** as the `SaveContactQR` QR code image, kept in sync deliberately (comment in the source notes this). Accepts `sanityReviews` prop (type `SanityReview[]`); falls back to a hardcoded `STATIC_REVIEWS` array if Sanity returns nothing, whose testimonial quotes/names/roles are intentionally **not** translated (see changelog, 2026-07-25).

---

## 9. Full Route Inventory

All routes below live under `app/[locale]/` unless noted otherwise (only `/studio` sits outside the locale segment).

### Status key
- **Built** — complete, production-ready, real content
- **Exists** — file exists, may still need content/polish
- **Redirect** — legacy route; 301s to the canonical route in both `next.config.ts` and `netlify.toml`

---

### About Section
| Route | Status | Notes |
|---|---|---|
| `/about` | **Built** | Philosophy block + `DoctorGrid` + office-photo mini-carousel (3 of 4 slides have real photos) + `OfficeTourPreview` + Recent Events teaser (4 real event photos) |
| `/about/meet-the-dentists` | **Built** | 4-card doctor listing; co-located `DoctorGrid.tsx`; entire card links to the bio page |
| `/about/meet-the-dentists/dr-sonia-gutierrez` | **Built** | Async server component; full i18n via `drProfiles` + `about` |
| `/about/meet-the-dentists/dr-dave-rutcosky` | **Built** | Async server component; full i18n via `drProfiles` + `about` |
| `/about/meet-the-dentists/dr-sahar-alrayyes` | **Built** | Async server component; full i18n via `drProfiles` + `about` |
| `/about/meet-the-dentists/dr-anne-ashley-compton` | **Built** | Async server component; full i18n via `drProfiles` + `about` |
| `/about/meet-the-team` | **Built** | 12-person staff roster grid |
| `/about/tour-our-office` | **Built** | 4-space alternating layout, all real photos; "Get Directions" opens the real Google Maps place link |
| `/about/recent-events` | Exists | `EventsGrid.tsx`, Sanity-powered (`event` documents) — likely an empty state today since no events have been published yet |
| `/about/recent-events/[slug]` | Exists | Individual event detail |
| `/about/community-involvement` | Exists | Community page |
| `/about/why-choose-us` | Exists | Differentiators page |

**Legacy / duplicate doctor bio paths (redirect candidates, not yet redirected):**
- `app/[locale]/about/sonia-gutierrez-dds/` → should redirect to `/about/meet-the-dentists/dr-sonia-gutierrez`
- `app/[locale]/about/dave-rutcosky-dds/` → should redirect to `/about/meet-the-dentists/dr-dave-rutcosky`
- `app/[locale]/about/sahar-alrayyes-dds/` → should redirect to `/about/meet-the-dentists/dr-sahar-alrayyes`
- `app/[locale]/about/anne-ashley-compton-dds/` → should redirect to `/about/meet-the-dentists/dr-anne-ashley-compton`
- `app/[locale]/about/meet-the-dentists/sonia-gutierrez-dds/` → same
- `app/[locale]/about/meet-the-dentists/dave-rutcosky-dds/` → same
- `app/[locale]/about/meet-the-dentists/sahar-alrayyes-dds/` → same
- `app/[locale]/about/meet-the-dentists/anne-ashley-compton-dds/` → same

---

### Services Section
| Route | Status | Notes |
|---|---|---|
| `/services` | Built | 6-card grid + insurance teaser + CTAs |
| `/services/preventive-dentistry` | Exists | Cleanings, fluoride, sealants, X-rays; has 2 FAQ blocks (`faq0-2` mid-page + `moreFaq0-2` at the bottom) |
| `/services/restorative` | Exists | Fillings, crowns, pulp therapy, extractions; `faq0-2` at the bottom |
| `/services/restorative-dentistry` | Redirect candidate | Duplicate of `/services/restorative`, still a real page (`restorativeDentistryPage` namespace) — not yet 301'd |
| `/services/sedation-dentistry` | Exists | Nitrous, oral sedation, general anesthesia; in-office anesthesiologist mention moved high on the page; `faq0-2` at the bottom |
| `/services/special-needs` | Exists | Autism, Down syndrome, CP, SPD |
| `/services/emergency` | **Built** | `EmergencyTriage` widget; no contact forms; emergency-type list (plain, not button-styled); "Knocked-Out Tooth" elevated with a bold "Act Within 30 Minutes" label |
| `/services/checkups-and-cleanings` | Exists | Preventive detail |
| `/services/orthodontics` | **Built** | Evaluation-and-referral only — no in-house braces/Invisalign; "What We Do"/"What We Don't Do" comparison + 3-question FAQ |
| `/services/general-anesthesiology` | Exists | General anesthesia detail |
| `/services/pulp-therapy` | Exists | Pulp therapy detail |
| `/services/tooth-extractions` | Exists | Extractions detail |

**Legacy top-level service routes (real duplicate pages, redirect candidates, not yet redirected):**
- `app/[locale]/preventive-dentistry/page.tsx` → should redirect to `/services/preventive-dentistry`
- `app/[locale]/special-needs-dentistry/page.tsx` → should redirect to `/services/special-needs`
- `app/[locale]/nitrous-oxide-sedation/page.tsx` → should redirect to `/services/sedation-dentistry`
- `app/[locale]/emergency-dentistry/page.tsx` → should redirect to `/services/emergency`

(These are distinct from the `.html`-suffixed legacy URLs in §12.1, which *are* already redirected — these extension-less duplicates are not.)

---

### For Patients Section
| Route | Status | Notes |
|---|---|---|
| `/for-patients` | **Built** | `SubPageLayout` + 3 gradient resource cards (First Visit / Patient Forms / Insurance) + bottom CTA |
| `/for-patients/child-first-visit` | Exists | Uses `FirstVisitTimeline`; includes a Dr. Sonia Instagram video embed |
| `/for-patients/patient-info` | Exists | Patient info hub |
| `/for-patients/patient-forms` | **Built** | Express Check-In orange callout → real Patient Manager portal URL, opens in new tab; 2 PDF download cards (New Patient Registration, Dental History Questionnaire); PDFs at `public/forms/` |
| `/for-patients/insurance-info` | **Built** | In-network providers (5 with real wordmark logos, 2 text-only), financing, "Don't see your plan?" callout under the page subtitle |
| `/for-patients/dental-financing` | Exists | CareCredit / financing detail |

**Insurance page details:**
- In-network (7 providers): Aetna, Cigna, Delta Dental Premier, Guardian, Lincoln Financial, Principal, United Healthcare — **no Medicaid/CHIP**. Real wordmark logos for Aetna, Delta Dental Premier, Guardian, Principal, United Healthcare (`public/brand_assets/insurance-logos/`); Cigna carries a `cignaNote` ("Total DPPO only"); Lincoln Financial is name-only.
- Out-of-network and CareCredit sections (some interest-free financing options noted).
- "No Insurance? No Problem." callout.
- CTA: Call + View Patient Forms.

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

### Q&A / Blog
| Route | Status | Notes |
|---|---|---|
| `/faq` | **Built** | `FaqAccordion`; 17 Qs across 6 groups: General Practice & First Visit (2), Safety & Treatments (3), Orthodontics & Braces (2), Dental Emergencies (2), Orthodontics & Cost (4), Parenting & Hidden Anxiety (4) |
| `/qa/parents-afraid-to-ask` | **Built** | Sanity-backed (`parentQuestion` documents); category tabs; Framer Motion accordion answers (Portable Text); added 2026-08-20 |
| `/blog` | Built | Listing page, Sanity-backed (`post` documents); `BlogGrid.tsx`; supports `?q=` search |
| `/blog/[...slug]` | Built | Individual post; Sanity Portable Text rendering |

---

### Conversion & Utility Routes
| Route | Status | Notes |
|---|---|---|
| `/contact` | Exists | Uses `ContactContent.tsx`; split contact info + form + `SaveContactQR`; office info card shows the QR to the right of the address |
| `/contact/office-info` | Exists | Office detail page |
| `/request-appointment` | Exists | Uses `AppointmentForm.tsx`; primary conversion page. Sidebar order: "Prefer to call?"/QR card **first**, "Why Families Choose Us" card second |
| `/ask-us-a-question` | **Built** | Uses `AskQuestionForm.tsx`. **Renamed from `/ask-the-doctor`** — the old path is a 301 redirect (see §12.1), old component was `AskDoctorForm.tsx`. Medical-emergency disclaimer at top; `SaveContactQR` sidebar box |
| `/pay` | **Built** | Dedicated online payment page — `SubPageLayout`, `PayNowForm` (HostedPayNow POST), trust badges, phone fallback |
| `/referral-portal` | **Built** | B2B partner referral portal — `ReferralForm.tsx`, HIPAA live-status indicator, Resend email, GA event `partner_referral_submitted` |
| `/studio` | Built | Sanity Studio, outside the `[locale]` segment |

---

## 10. API Routes & Email System

| Route | File | Purpose |
|---|---|---|
| `POST /api/appointment` | `app/api/appointment/route.ts` | Appointment form handler |
| `POST /api/contact` | `app/api/contact/route.ts` | Contact form handler |
| `POST /api/ask-doctor` | `app/api/ask-doctor/route.ts` | Ask Us a Question handler (route path kept as `ask-doctor` even after the frontend page renamed to `/ask-us-a-question` — no reason to rename it, it's an internal implementation detail) |
| `POST /api/referral` | `app/api/referral/route.ts` | Partner referral intake; subject `[Priority Partner Referral] from {providerName}`; HTML-escapes all inputs; single email, not dual-send |

**Dual-email system:** `/api/appointment`, `/api/contact`, and `/api/ask-doctor` each fire two Resend emails in parallel via `Promise.allSettled`:
1. **Internal office alert** (`emails/InternalOfficeAlert.tsx`, React Email) — formats the submitted form data for staff, sent to `EMAIL_CONFIG.to` (`CONTACT_EMAIL_TO` env var).
2. **Parent auto-responder** (`emails/ParentAutoResponder.tsx`, React Email) — branded (purple `#6B4BC8`/orange `#EF6C1A`), bilingual, includes office hours and a patient-forms CTA button, sent to the submitter's own email.

Both legs send from `EMAIL_CONFIG.noreplyFrom` (`Kids Dentist <noreply@kidsdds.com>` — requires that domain to be Resend-verified). Locale for the auto-responder is detected server-side by `lib/getLocaleFromRequest.ts`, since API routes carry no locale segment of their own: it checks the `Referer` header's path (`/es/...` vs. unprefixed) first, then falls back to the `NEXT_LOCALE` cookie.

**Failure handling is asymmetric by design:** if the office alert fails, the route returns `{ ok: false }` with a 500 (the lead would otherwise be silently lost); if only the parent auto-responder fails, it's logged via `console.error` but the request still returns `{ ok: true }`, since the office already has the lead.

`lib/emailConfig.ts` exports `EMAIL_CONFIG` (`to`, `from`, `noreplyFrom`) reading from `CONTACT_EMAIL_TO`/`CONTACT_EMAIL_FROM` env vars (see §15).

---

## 11. Sanity CMS Integration

- Client: `sanity/lib/client.ts` — `createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: process.env.NODE_ENV === 'production' })`
- Image URL builder: `sanity/lib/image.ts` — exports `urlFor(source)`
- Queries: `sanity/lib/queries.ts` (GROQ, via `next-sanity`'s `groq` tag)
- Studio: `/studio` route, schema registered in `sanity/schemas/index.ts`
- Env vars: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET` (defaults to `'production'` if unset), `SANITY_API_WRITE_TOKEN` (Studio write access)

### 11.1 Schemas (`sanity/schemas/*.ts`)

**`localizedFields.ts`** — two reusable object types, not documents themselves:
```ts
localizedString = { type: 'object', fields: [ {name:'en', type:'string'}, {name:'es', type:'string'} ] }
localizedText   = { type: 'object', fields: [ {name:'en', type:'text', rows:3}, {name:'es', type:'text', rows:3} ] }
```
GROQ queries must resolve these to a plain string for the requested locale — e.g. `coalesce(title[$locale], title.en, title)` — never return the raw object to a component expecting a string; that crashes React ("Objects are not valid as a React child") the way `post.title`/`post.excerpt` once did (see changelog, 2026-08-31).

**`post.ts`** (name: `post`, title: "Blog Post"):
| Field | Type | Notes |
|---|---|---|
| `title` | `localizedString` | required |
| `slug` | `slug` | required, source `title.en` |
| `author` | `string` | required, dropdown of the 4 doctors + "Kids Dentist Team" |
| `mainImage` | `image` (hotspot) | sub-fields `alt` (required, English), `altEs` (optional, Spanish) |
| `category` | `string` | dropdown: Dental Tips / Practice News / Child Health / Parent Guide / Behind the Scenes; default "Dental Tips" |
| `publishedAt` | `datetime` | default now |
| `excerpt` | `localizedText` | shown on the blog listing |
| `body` | `array` of `block`/`image` | English body |
| `bodyEs` | `array` of `block`/`image` | Spanish body |

**`parentQuestion.ts`** (name: `parentQuestion`, title: "Parent Question"):
| Field | Type | Notes |
|---|---|---|
| `question_en` | `string` | required |
| `question_es` | `string` | optional |
| `category` | `string` | dropdown: Parent Guilt / Fear of Being Judged / The 3 a.m. Questions / Money; required |
| `answer_en` | `array` of `block` | required |
| `answer_es` | `array` of `block` | optional |

**`event.ts`** (name: `event`, title: "Practice Event"):
| Field | Type | Notes |
|---|---|---|
| `title` | `string` | required |
| `slug` | `slug` | required, source `title` |
| `mainImage` | `image` (hotspot) | sub-field `alt` |
| `excerpt` | `text` (3 rows, max 300 chars) | feed summary |
| `body` | `array` of `block` | |
| `eventDate` | `datetime` | required |
| `location` | `string` | default "160 Commerce Dr #100, Grayslake, IL 60030" |
| `isFeatured` | `boolean` | default false — drives the purple `AnnouncementBanner` |
| `registrationUrl` | `url` | optional |
| `isPublished` | `boolean` | default true |
| `name`, `dateTime`, `image`, `description` | *(hidden legacy fields)* | kept only so older documents authored before a field rename still validate |

**`review.ts`** (name: `review`, title: "Parent Review"):
| Field | Type | Notes |
|---|---|---|
| `parentName` | `string` | required |
| `rating` | `number` | 1–5, dropdown with star-emoji labels, default 5 |
| `reviewText` | `text` (4 rows, 20–500 chars) | required |
| `role` | `string` | e.g. "Mom of 3"; default "Parent" |
| `featured` | `boolean` | default false — toggles homepage display |
| `date` | `date` | default today |

**`index.ts`** registers all of them: `schemaTypes = [localizedString, localizedText, post, review, event, parentQuestion]`.

### 11.2 Key Queries (`sanity/lib/queries.ts`)
- `allPostsQuery` / `searchPostsQuery` / `postBySlugQuery` / `latestPostQuery` — all resolve `title`/`excerpt` via the `coalesce($locale, .en, raw)` pattern above; accept a `$locale` GROQ param threaded from every call site.
- `allParentQuestionsQuery` — all `parentQuestion` docs ordered by category then creation date; resolution to the display locale happens in the consuming component (`QAContent.tsx`) via `useLocale()`, not in the query.
- `allParentQuestionsSearchQuery` — lean plain-text projection using `pt::text()` on both answer languages, for the header search index.
- `featuredReviewsQuery` — `review` docs where `featured == true`, ordered by date desc, capped `[0..5]`.
- `allEventsQuery` / `eventBySlugQuery` / `upcomingEventsQuery` / `featuredEventQuery` — all use `coalesce()` to bridge the legacy hidden fields (`name`↔`title`, `dateTime`↔`eventDate`, `image`↔`mainImage`, `description`↔`excerpt`) so both old- and new-shape documents render correctly.

### 11.3 Where Sanity Data Is Fetched
| Data | Query | ISR window | Consumer |
|---|---|---|---|
| Homepage reviews | `featuredReviewsQuery` | 60s | `app/[locale]/page.tsx` → `ReviewBubbles` |
| Blog listing/search | `allPostsQuery`/`searchPostsQuery` | 60s | `blog/page.tsx` |
| Blog post | `postBySlugQuery` | 60s | `blog/[...slug]/page.tsx` |
| Latest post banner | `latestPostQuery` | 300s | `app/[locale]/layout.tsx` → `Header` |
| Q&A search index | `allParentQuestionsSearchQuery` | 60s | `app/[locale]/layout.tsx` → `Header`/`SiteSearch` |
| Q&A pillar page | `allParentQuestionsQuery` | (page-level) | `qa/parents-afraid-to-ask/page.tsx` |
| Featured event banner | `featuredEventQuery` | 300s | `AnnouncementBanner` |
| Recent events | `allEventsQuery`/`eventBySlugQuery` | (page-level) | `about/recent-events/*` |

---

## 12. SEO Requirements (Every Page)

```typescript
export const metadata: Metadata = {
  title: '[Page Title] | Kids Dentist',
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

**Global schema:** `Dentist` JSON-LD in `app/[locale]/layout.tsx` — covers name, address, geo, phone, hours, medicalSpecialty, sameAs.

**Known SEO issues to address:**
- Multiple duplicate doctor bio routes and duplicate service routes (see §9) — not yet redirected, only the `.html`-suffixed legacy set is.
- Schema.org hours vs. Footer hours discrepancy (§1).
- Page `metadata`/JSON-LD is English-only sitewide — a known, not-yet-addressed gap (every other piece of UI copy is bilingual).

### 12.1 Legacy → Modern 301 Redirect Map

Implemented in **both** `netlify.toml` (CDN edge, `force = true`) and `next.config.ts` (`permanent: true` via a `LEGACY_REDIRECTS` array) — kept in sync manually, not generated from one source. See §15 for the full file contents.

| Legacy URL | Destination |
|---|---|
| `/services.html` | `/services` |
| `/pediatric-dentistry.html` | `/services/preventive-dentistry` |
| `/restorative-care.html` | `/services/restorative` |
| `/emergency-dental.html` | `/services/emergency` |
| `/sedation.html` | `/services/sedation-dentistry` |
| `/meet-the-doctors.html` | `/about/meet-the-dentists` |
| `/contact-us.html` | `/contact` |
| `/ask-the-doctor` | `/ask-us-a-question` |
| `/es/ask-the-doctor` | `/es/ask-us-a-question` |

---

## 13. Brand Assets (`/public/brand_assets/`)

| File | Usage |
|---|---|
| `favicon.ico` | Browser tab icon — placed at `app/favicon.ico`; Next.js App Router serves it automatically site-wide |
| `kids-dentist-logo.png` | Header logo (189×104px source, rendered 72px tall) |
| `hero-video.mp4` | Hero looping background video (local dev fallback; production uses the Cloudinary URL in `netlify.toml`) |
| `hero-photo.jpg` | Hero `poster` fallback image |
| `index-dr-sonia.jpg` | Dr. Sonia Gutierrez headshot — real photo, resized ~900px wide via `sharp` |
| `index-dr-dave.jpg` | Dr. Dave Rutcosky headshot — real photo, resized ~900px wide via `sharp` |
| `index-dr-alrayyes.jpg` | Dr. Sahar Alrayyes headshot — real photo, resized ~900px wide via `sharp` |
| `index-dr-ashley.jpg` | Dr. Anne-Ashley Compton headshot — real photo, resized ~900px wide via `sharp` |
| `team/headshot-<firstname>.jpg` | 12 staff headshots for `/about/meet-the-team` |
| `office-tour-lobby.jpg`, `office-tour-treatment.jpg`, `office-tour-play.jpg`, `office-tour-tech.jpg` | Real office photos for `/about/tour-our-office`'s 4 alternating sections, and reused for 3 of the 4 slides in `about/page.tsx`'s mini-carousel and both of `OfficeTourPreview.tsx`'s feature images |
| `events/event-photo-1.jpg` … `event-photo-4.jpg` | Real community-event photos, resized to 1600px wide/compressed via `sharp`; used in the `/about` Recent Events teaser grid |
| `linktree-qr-code.png` | QR code linking to the practice's Linktree; rendered by `SaveContactQR.tsx` |
| `kids-dentist-contact.vcf` | Static vCard (name, phone, address, email, URL) downloaded by `SaveContactQR.tsx`'s "Save Our Contact Info" link |
| `insurance-logos/aetna.png`, `delta-dental.png`, `guardian.png`, `principal.png`, `united-healthcare.png` | In-network provider wordmark logos, sourced from Wikimedia Commons and re-exported as transparent PNGs; Cigna and Lincoln Financial remain text-only (no usable free logo found for either) |

**`/public/forms/`** (not under `brand_assets/`): patient-facing downloadable PDFs served directly to `/for-patients/patient-forms` — `new-patient-registration.pdf` and `dental-history-questionnaire.pdf`.

Source doctor/staff photos land in repo-root `brand_assets/New Headshots - Doctors/` and `brand_assets/New Headshots - Staff/` (last-name-keyed filenames, full-resolution, **not served publicly** — this folder is gitignored). When promoting one to `public/brand_assets/`, resize/compress first (originals run 18–24MB) using the same `sharp` one-liner pattern used throughout this project's history.

---

## 14. Conversion Architecture

**Primary CTA (orange/accent — most prominent):**
- "Request Appointment" → `/request-appointment`
- Hero section, Services page bottom CTA, doctor bio pages

**Secondary CTA (teal/brand):**
- "Text/Call us: (847) 223-1400" — `tel:+18472231400`
- "Directions" → Google Maps driving link

**Persistent CTAs:**
- `FloatingWidget` — bottom-screen, site-wide
- Header desktop utility bar: phone + directions
- Header mobile menu: phone + directions
- Footer: Book Appointment + Pay Now
- `SaveContactQR` (QR + vCard download) — Request Appointment, Contact, Ask Us a Question

**Payment flow:**
- Footer "Pay Now" button → HostedPayNow POST form (token embedded in `Footer.tsx`)
- `/pay` page — dedicated online payment page, same HostedPayNow form via `PayNowForm.tsx`

### 14.1 GA4 Event Catalog

All custom events fire via `lib/gtag.ts`'s `sendGAEvent(eventName, params?)`, which pushes directly to `window.dataLayer` rather than calling `window.gtag()` — a deliberate fix for a timing bug where events fired before `gtag.js` finished initializing and silently no-op'd.

```ts
export const sendGAEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: eventName, ...params })
}
```

| Event | Params | Fired from |
|---|---|---|
| `call_click` | `{ location: 'header_desktop' \| 'header_mobile' \| 'floating_widget' }` | `Header.tsx` (×2), `FloatingWidget.tsx` |
| `appointment_click` | `{ location: 'floating_widget' }` | `FloatingWidget.tsx` |
| `appointment_submitted` | `{ reason, preferred_dentist }` | `AppointmentForm.tsx` on successful submit |
| `ask_doctor_submitted` | `{ preferred_dentist }` | `AskQuestionForm.tsx` on successful submit |
| `partner_referral_submitted` | `{ referral_reason }` | `ReferralForm.tsx` on successful submit |
| `payment_portal_clicked` | `{ location: 'footer' \| 'pay_page' }` | `Footer.tsx`, `PayNowForm.tsx` |
| `form_download` | `{ file_name }` | `for-patients/patient-forms/FormDownloadLink.tsx` |
| `save_contact_clicked` | *(none)* | `SaveContactQR.tsx` |

The contact form (`ContactContent.tsx`) does not currently fire a dedicated GA event on submit — an inconsistency with the other three form handlers, not a deliberate omission.

---

## 15. Environment Variables & Deployment Config

| Variable | Purpose | Where set |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID | `.env.local` (dev) + Netlify env (prod) |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name (`production`) | `.env.local` + Netlify env |
| `SANITY_API_WRITE_TOKEN` | Studio write access | `.env.local` only — never commit |
| `NEXT_PUBLIC_HERO_VIDEO_URL` | Hero background video source | `.env.local` (local mp4 path) + `netlify.toml` (Cloudinary URL) |
| `RESEND_API_KEY` | Resend transactional email API key | `.env.local` + Netlify env |
| `CONTACT_EMAIL_TO` | Office-alert recipient(s), comma-separated for multiple | `.env.local` + `netlify.toml` |
| `CONTACT_EMAIL_FROM` | Legacy single-sender address (superseded by `EMAIL_CONFIG.noreplyFrom` for the actual dual-send, but still read as a fallback) | `.env.local` + `netlify.toml` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID | `.env.local` + Netlify env |

**None of these values should ever be pasted into a shared document or prompt** — provision them directly in the new project's `.env.local` and Netlify site settings after rebuild.

### `netlify.toml` (full contents, redirect map excluded from prose above but shown here in full)

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

# ── Legacy → Modern 301 redirect map ────────────────────────────────────────
[[redirects]]
  from   = "/services.html"
  to     = "/services"
  status = 301
  force  = true

[[redirects]]
  from   = "/pediatric-dentistry.html"
  to     = "/services/preventive-dentistry"
  status = 301
  force  = true

[[redirects]]
  from   = "/restorative-care.html"
  to     = "/services/restorative"
  status = 301
  force  = true

[[redirects]]
  from   = "/emergency-dental.html"
  to     = "/services/emergency"
  status = 301
  force  = true

[[redirects]]
  from   = "/sedation.html"
  to     = "/services/sedation-dentistry"
  status = 301
  force  = true

[[redirects]]
  from   = "/meet-the-doctors.html"
  to     = "/about/meet-the-dentists"
  status = 301
  force  = true

[[redirects]]
  from   = "/contact-us.html"
  to     = "/contact"
  status = 301
  force  = true

[[redirects]]
  from   = "/ask-the-doctor"
  to     = "/ask-us-a-question"
  status = 301
  force  = true

[[redirects]]
  from   = "/es/ask-the-doctor"
  to     = "/es/ask-us-a-question"
  status = 301
  force  = true
```

**IMPORTANT — as of this writing, `www.kidsdds.com` is not actually pointed at this Netlify deployment.** DNS/domain cutover for the production domain is a separate, outstanding step from the codebase itself; verify against the live Netlify URL (`kidsddswebsite.netlify.app` at time of writing), not the custom domain, when checking whether a change has deployed.

### `next.config.ts` (full contents)

```typescript
import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n.ts')

const LEGACY_REDIRECTS = [
  { source: '/services.html',            destination: '/services' },
  { source: '/pediatric-dentistry.html', destination: '/services/preventive-dentistry' },
  { source: '/restorative-care.html',    destination: '/services/restorative' },
  { source: '/emergency-dental.html',    destination: '/services/emergency' },
  { source: '/sedation.html',            destination: '/services/sedation-dentistry' },
  { source: '/meet-the-doctors.html',    destination: '/about/meet-the-dentists' },
  { source: '/contact-us.html',          destination: '/contact' },
  { source: '/ask-the-doctor',           destination: '/ask-us-a-question' },
  { source: '/es/ask-the-doctor',        destination: '/es/ask-us-a-question' },
]

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io', pathname: '/images/**' },
    ],
  },
  async redirects() {
    return LEGACY_REDIRECTS.map((r) => ({ ...r, permanent: true }))
  },
}

export default withNextIntl(nextConfig)
```

---

## 16. File / Folder Structure

```
app/
  layout.tsx                          ← root layout (minimal, locale-independent)
  favicon.ico
  api/
    appointment/route.ts
    contact/route.ts
    ask-doctor/route.ts
    referral/route.ts
  studio/
    layout.tsx                        ← Sanity Studio, outside [locale]
    [[...tool]]/page.tsx
  [locale]/
    layout.tsx                        ← real site layout (Header/Footer/banners/GA)
    page.tsx                          ← homepage
    about/                            ← §9 About Section routes
    services/                         ← §9 Services Section routes
    for-patients/                     ← §9 For Patients Section routes
    who-we-treat/
    reviews/
    faq/page.tsx
    qa/parents-afraid-to-ask/
    blog/
      page.tsx
      [...slug]/page.tsx
    contact/
    request-appointment/
    ask-us-a-question/
    pay/
    referral-portal/
    (+ legacy top-level duplicate routes — see §9)

components/                           ← shared components, see §7 for the full table

emails/
  InternalOfficeAlert.tsx
  ParentAutoResponder.tsx

lib/
  gtag.ts                             ← sendGAEvent
  emailConfig.ts                      ← EMAIL_CONFIG
  getLocaleFromRequest.ts             ← locale detection for API routes
  practiceAge.ts                      ← years/months/days since 1994-09-14

sanity/
  lib/
    client.ts
    image.ts                          ← urlFor()
    queries.ts                        ← all GROQ queries
  schemas/
    index.ts                          ← schemaTypes export
    post.ts
    parentQuestion.ts
    event.ts
    review.ts
    localizedFields.ts                ← localizedString / localizedText object types

messages/
  en.json                             ← ~1,270 lines, every namespace in §18
  es.json                             ← same structure, Spanish

public/
  brand_assets/                       ← see §13
  forms/                              ← patient PDF downloads

styles/
  global.css                          ← CSS variables, custom classes, Tailwind imports

routing.ts                            ← next-intl defineRouting — single source of truth
navigation.ts                         ← createNavigation(routing) — Link/useRouter/usePathname/redirect
proxy.ts                              ← createMiddleware(routing), used as Next.js middleware
i18n.ts                               ← getRequestConfig, loads messages/{locale}.json
i18n.config.ts                        ← locales + defaultLocale constants
next.config.ts
netlify.toml
sanity.config.ts
package.json
tsconfig.json
postcss.config.mjs
```

---

## 17. Prompt-Writing Guide for Claude Code

Structure prompts like this:

```
Build the [Page Name] page at [route] for the Kids Dentist Grayslake website.

Context:
- Next.js 15 App Router, TypeScript, Tailwind CSS v4, Framer Motion, next-intl.
- All routes live under app/[locale]/... — see site_spec.md §16 for the full structure.
- ALWAYS invoke the frontend-design skill before writing any component code (per CLAUDE.md).
- Design tokens: CSS vars from global.css (see site_spec.md §3).
- Use <SubPageLayout kicker="[kicker]" title="[title]" gradient="[variant]" /> for the page hero.
- Internal links/navigation MUST use Link/useRouter/usePathname from '@/navigation', never next/link or next/navigation directly (see §2 Key Rules).
- Reuse existing components where possible — see site_spec.md §7 for the full list.

This page must include:
[Specific sections from §9 of site_spec.md]

Copy: pull every string from the [namespaceName] namespace in messages/en.json / messages/es.json — do not invent or paraphrase copy that already exists there.

SEO: export metadata with title "[Title] | Kids Dentist" and a 150-char description targeting [keywords].
Include alternates.canonical for https://www.kidsdds.com/[route].
```

---

## 18. Internationalization (i18n)

**Library:** next-intl v4.13.0
**Locales:** `en` (default, no URL prefix) and `es` (`/es/*`)
**Strategy:** `localePrefix: 'as-needed'` — English routes have no locale segment (`/about`, `/services`), Spanish routes use `/es/` (`/es/about`, `/es/services`).

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

### Translation Namespaces (44 top-level keys in both files, same order)

| Namespace | Page / Component |
|---|---|
| `nav` | Header navigation, CTAs, announcement bars, Q&A dropdown labels |
| `hero` | Homepage hero — includes `trustBannerPrefix`/`trustBannerSuffix` for the dynamic practice-age banner |
| `services` | Homepage services grid |
| `insurance` | Homepage insurance strip |
| `doctors` | Homepage doctor cards |
| `valueProps` | Homepage value proposition cards |
| `floating` | Floating CTA widget |
| `quickActions` | Quick Actions bar |
| `footer` | Footer — tagline, phone CTA, explore-links, hours heading + day0–day4, connect heading, Facebook/Instagram aria-labels, Pay Now, copyright (`{year}`), Privacy Policy, Sitemap |
| `common` | Shared strings (loading, error, learn more) + `saveContactLabel`/`saveContactAlt` for `SaveContactQR.tsx` |
| `siteSearch` | `SiteSearch.tsx` — placeholders, aria-labels, no-results, keyboard hints, 7 category labels (including `catQA`), 31 `item{N}Title`/`item{N}Desc` pairs |
| `reviewBubbles` | `ReviewBubbles.tsx` UI chrome (rating label, kicker, heading, share CTA, aria-labels) — `STATIC_REVIEWS` fallback testimonials themselves are NOT translated |
| `aboutPage` | `/about` page-level strings — office-slide labels/captions, events teaser, `photoComingSoon`, `eventPhotoAlt` |
| `about` | Philosophy block, `DoctorGrid` bios/names/tooltips, `OfficeTourPreview` copy — shared with `meet-the-dentists` |
| `servicesPage` | `/services` overview |
| `firstVisit` | `/for-patients/child-first-visit` |
| `insurancePage` | `/for-patients/insurance-info` — includes `cignaNote` |
| `faqPage` | `/faq` — 6 groups (`group0`–`group5`), 17 Qs total |
| `contactPage` | `/contact` + `ContactContent.tsx` |
| `preventivePage` | `/services/preventive-dentistry` — two FAQ blocks (`faq0–2` + `moreFaq0–2`) |
| `restorativePage` | `/services/restorative` — `faq0–2` |
| `sedationPage` | `/services/sedation-dentistry` — `faq0–2` |
| `specialNeedsPage` | `/services/special-needs` |
| `emergencyPage` | `/services/emergency` — includes `EmergencyTriage.tsx`'s `triage*` keys, `faq0–2` |
| `about` *(again — see above, single namespace shared across About-family pages)* | |
| `appointmentForm` | `/request-appointment` — sections, field labels/placeholders, day names, trust signals, visit reasons, success/error states; `DENTIST_OPTIONS` reuses `about.*Name` |
| `referralPortal` | `/referral-portal/page.tsx` — kicker/title/subtitle, steps, sidebar cards |
| `referralForm` | `/referral-portal/ReferralForm.tsx` — validation messages, section tags, fields, success/error states |
| `payPage` | `/pay/page.tsx` + `PayNowForm.tsx` — kicker/title, trust badges, pay button, phone-fallback copy |
| `askDoctorPage` | `/ask-us-a-question/page.tsx` — disclaimer, "how it works" (embedded link to appointment form) |
| `askDoctorForm` | `/ask-us-a-question/AskQuestionForm.tsx` — section labels, fields, dentist dropdown, validation errors, success state |
| `restorativeDentistryPage` | `/services/restorative-dentistry` (SEO-duplicate route) |
| `tourOurOfficePage` | `/about/tour-our-office` — intro, 4 spaces, comfort-features grid, CTA |
| `meetTeamPage` | `/about/meet-the-team` — title/subtitle/kicker, headshot alt template, staff role labels |
| `forPatientsPage` | `/for-patients` — kicker/title/subtitle, 3 resource-card sets, bottom CTA |
| `patientFormsPage` | `/for-patients/patient-forms` — Express Check-In callout, 2 downloadable form cards, tips, bottom CTA |
| `recentEventsPage` | `/about/recent-events/page.tsx` — kicker/title/subtitle |
| `eventsGrid` | `/about/recent-events/EventsGrid.tsx` — empty state, "View Details" |
| `eventDetailPage` | `/about/recent-events/[slug]/page.tsx` — back link, category badge, coming-soon fallback, register CTA |
| `blogPage` | `/blog/page.tsx` — kicker/title/subtitle |
| `blogGrid` | `/blog/BlogGrid.tsx` — empty state, schedule-instead CTA |
| `blogPostPage` | `/blog/[...slug]/page.tsx` — back link, no-body fallback |
| `meetDentists` | `/about/meet-the-dentists` — kicker/title/subtitle, Read Bio/Close/Request Appointment UI, CTA block, 12 doctor highlight bullets |
| `drProfiles` | Individual doctor profile pages — back link, role label, credentials heading, book button, hero heading, 3 bio paragraphs, quote, 7 credential bullets per doctor |
| `orthodonticsPage` | `/services/orthodontics` — kicker/title/subtitle, "How It Works", `weDo0–3`/`weDont0–2`, `faq0–2`, CTA |
| `qaPage` | `/qa/parents-afraid-to-ask` — kicker/title/subtitle, category tab labels, empty state |

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

**Locale-aware navigation** (import from `@/navigation`, not `next/navigation` or `next/link` — see §2 Key Rules):
```tsx
import { Link, useRouter, usePathname } from '@/navigation'
```

**Language switcher** (`components/LanguageSwitcher.tsx`):
- Uses `useLocale()` from `next-intl` to detect current locale (not pathname parsing)
- Uses `router.replace(pathname, { locale: 'en' | 'es' })` from `@/navigation` — atomically navigates AND updates the `NEXT_LOCALE` cookie

**Data arrays in pages:** Non-translatable parts (icons, colors, gradients, hrefs, step numbers) stay in TypeScript `*_META` constants. Translatable text is pulled from `t()` via `.map()`:
```tsx
const STEP_META = [{ number: '01', icon: '👋', accentColor: '#4A90A4', ... }]
const steps = STEP_META.map((meta, i) => ({ ...meta, title: t(`step${i}Title`), description: t(`step${i}Desc`) }))
```

**Locale-aware date formatting:** Blog and Events pages each have a local `formatDate(iso, locale)` helper — pass `useLocale()` (client) or `params.locale` (server) through and branch `toLocaleDateString(locale === 'es' ? 'es' : 'en-US', {...})`. Never hardcode `'en-US'` in new date-formatting code.

**Bilingual Sanity fields:** `localizedString`/`localizedText` object fields (`{en, es}`) must be resolved to a plain string **in the GROQ query** via `coalesce(field[$locale], field.en, field)`, not left as a raw object for the component to handle — see §11.1's warning and the 2026-08-31 changelog entry for what happens if you don't.

**Not translated:** Insurance company proper nouns, phone number, address, URLs, doctor/staff first names, "Studio" (Sanity Studio product name). Also intentionally not translated: `ReviewBubbles`' fallback testimonial quotes/authors/roles, Sanity CMS-authored content (blog/event bodies), page `metadata`/JSON-LD (English-only sitewide — a known gap, not a design decision).

---

*Reference CLAUDE.md for Claude Code-specific rules (design skill, component structure, SEO warnings).*
