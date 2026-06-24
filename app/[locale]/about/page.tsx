import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import ReviewBubbles from '@/components/ReviewBubbles'
import DoctorGrid from '@/components/DoctorGrid'
import OfficeTourPreview from '@/components/OfficeTourPreview'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { client } from '@/sanity/lib/client'
import { featuredReviewsQuery } from '@/sanity/lib/queries'
import type { SanityReview } from '@/components/ReviewBubbles'

export const metadata: Metadata = {
  title: 'About Our Pediatric Dental Practice | Kids Dentist Grayslake, IL',
  description:
    'Kids Dentist has served Grayslake and Lake County families since 1994. Four board-certified pediatric specialists and a practice built entirely around children.',
  alternates: { canonical: 'https://www.kidsdds.com/about' },
  openGraph: {
    title: 'About Our Pediatric Dental Practice | Kids Dentist Grayslake, IL',
    description:
      "Grayslake's most trusted pediatric dental practice since 1994. Four specialists. Care built entirely around your child.",
    url: 'https://www.kidsdds.com/about',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const STAT_VALUES = ['30+', '4', '650+']

const OFFICE_SLIDE_META = [
  {
    gradient: 'linear-gradient(135deg, rgba(234,229,247,0.85) 0%, rgba(107,75,200,0.18) 100%)',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="var(--brand-purple)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    gradient: 'linear-gradient(135deg, rgba(230,246,246,0.85) 0%, rgba(61,189,189,0.28) 100%)',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="var(--brand-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    gradient: 'linear-gradient(135deg, rgba(245,200,66,0.15) 0%, rgba(239,108,26,0.18) 100%)',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="var(--accent-500)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
  },
  {
    gradient: 'linear-gradient(135deg, rgba(234,229,247,0.65) 0%, rgba(255,107,138,0.18) 100%)',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="var(--accent-pink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
]

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('about')
  const tPage = await getTranslations('aboutPage')

  const stats = STAT_VALUES.map((value, i) => ({
    value,
    label: tPage(`stat${i}Label` as Parameters<typeof tPage>[0]),
  }))
  const officeSlides = OFFICE_SLIDE_META.map((meta, i) => ({
    ...meta,
    label: tPage(`slide${i}Label` as Parameters<typeof tPage>[0]),
    caption: tPage(`slide${i}Caption` as Parameters<typeof tPage>[0]),
  }))

  const reviews = await client.fetch<SanityReview[]>(
    featuredReviewsQuery,
    {},
    { next: { revalidate: 60 } },
  )

  return (
    <SubPageLayout
      kicker={t('kicker')}
      title={t('title')}
      gradient="blue"
    >

      {/* ── Inner container ─────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4">

        {/* ── Philosophy block ──────────────────────────────────── */}
        <AnimatedSection>
          <div style={{ marginBottom: '4.5rem', textAlign: 'center' }}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'Nunito, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 900,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--brand-teal)',
                marginBottom: '1rem',
              }}
            >
              {t('philosophyKicker')}
            </span>
            <p
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)',
                fontWeight: 700,
                color: '#374151',
                lineHeight: 1.75,
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              {t('philosophyBody')}
            </p>
          </div>
        </AnimatedSection>

        {/* ── Stat Bar ──────────────────────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginBottom: '5rem',
          }}
          className="about-stat-grid"
        >
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div
                style={{
                  background: 'var(--bg)',
                  border: '1.5px solid rgba(107,75,200,0.12)',
                  borderRadius: '1.5rem',
                  padding: '1.75rem 1.25rem',
                  textAlign: 'center',
                  boxShadow: '0 2px 14px rgba(107,75,200,0.07)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                    fontWeight: 900,
                    color: 'var(--brand-purple)',
                    lineHeight: 1,
                    marginBottom: '0.4rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: '#6b7280',
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ── Doctor 2×2 Grid ───────────────────────────────────── */}
        <div style={{ marginBottom: '4.5rem' }}>
          <DoctorGrid />
        </div>

      </div>{/* end inner container */}

      {/* ── Office Tour Preview — full-bleed teal-tint ────────── */}
      <OfficeTourPreview />

      {/* ── Inner container (continued) ─────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4">

        {/* ── Special Needs ─────────────────────────────────────── */}
        <AnimatedSection>
          <div style={{ marginTop: '5rem', marginBottom: '4.5rem' }}>
            <div style={{ borderLeft: '4px solid var(--brand-purple)', paddingLeft: '1.75rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 900,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--brand-purple)',
                  marginBottom: '0.75rem',
                }}
              >
                {tPage('specialNeedsKicker')}
              </span>
              <h2
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                  fontWeight: 900,
                  color: '#1e3a5f',
                  lineHeight: 1.3,
                  margin: '0 0 1rem',
                  maxWidth: '620px',
                }}
              >
                {tPage('specialNeedsHeading')}
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#4b5563',
                  lineHeight: 1.78,
                  maxWidth: '660px',
                  margin: 0,
                }}
              >
                {tPage('specialNeedsBody')}
              </p>
              <Link
                href="/services/special-needs"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: 'var(--brand-purple)',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  marginTop: '1.25rem',
                  borderBottom: '2px solid rgba(107,75,200,0.25)',
                  paddingBottom: '2px',
                }}
              >
                {tPage('specialNeedsLink')}
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* ── Comfort & Sedation ────────────────────────────────── */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, #fffbeb 0%, #fef9ec 100%)',
              border: '1.5px solid rgba(245,158,11,0.18)',
              borderRadius: '2rem',
              padding: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '4.5rem',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'Nunito, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 900,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#D97706',
                marginBottom: '0.75rem',
              }}
            >
              {tPage('sedationKicker')}
            </span>
            <h2
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                fontWeight: 900,
                color: '#92400e',
                lineHeight: 1.3,
                margin: '0 0 1rem',
                maxWidth: '600px',
              }}
            >
              {tPage('sedationHeading')}
            </h2>
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: '#78350f',
                lineHeight: 1.78,
                maxWidth: '660px',
                margin: 0,
                opacity: 0.85,
              }}
            >
              {tPage('sedationBody')}
            </p>
            <Link
              href="/services/sedation-dentistry"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: '#D97706',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 800,
                fontSize: '0.88rem',
                textDecoration: 'none',
                marginTop: '1.25rem',
                borderBottom: '2px solid rgba(217,119,6,0.3)',
                paddingBottom: '2px',
              }}
            >
              {tPage('sedationLink')}
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </AnimatedSection>

        {/* ── Insurance & Payment ───────────────────────────────── */}
        <AnimatedSection>
          <div style={{ marginBottom: '5rem' }}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'Nunito, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 900,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--brand-teal)',
                marginBottom: '0.85rem',
              }}
            >
              {tPage('insuranceKicker')}
            </span>
            <h2
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                fontWeight: 900,
                color: '#1e3a5f',
                lineHeight: 1.3,
                margin: '0 0 1rem',
                maxWidth: '580px',
              }}
            >
              {tPage('insuranceHeading')}
            </h2>
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: '#4b5563',
                lineHeight: 1.78,
                maxWidth: '660px',
                margin: '0 0 1.25rem',
              }}
            >
              {tPage('insuranceBody')}
            </p>
            <Link
              href="/for-patients/insurance-info"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--brand-purple)',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 800,
                fontSize: '0.88rem',
                textDecoration: 'none',
                borderBottom: '2px solid rgba(107,75,200,0.28)',
                paddingBottom: '2px',
              }}
            >
              {tPage('insuranceLink')}
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </AnimatedSection>

      </div>{/* end inner container */}

      {/* ── Reviews — full-bleed ──────────────────────────────── */}
      <div
        style={{
          margin: '2rem -1rem 0',
          width: 'calc(100% + 2rem)',
        }}
      >
        <ReviewBubbles sanityReviews={reviews} />
      </div>

      {/* ── Office carousel + Events + CTA ───────────────────────── */}
      <div className="mx-auto max-w-5xl px-4">

        {/* Office section */}
        <AnimatedSection>
          <div style={{ margin: '5rem 0 3rem' }}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'Nunito, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 900,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--brand-purple)',
                marginBottom: '0.85rem',
              }}
            >
              {tPage('spaceKicker')}
            </span>
            <h2
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: 'clamp(1.65rem, 3vw, 2.2rem)',
                fontWeight: 900,
                color: '#1e3a5f',
                lineHeight: 1.25,
                margin: '0 0 0.75rem',
              }}
            >
              {tPage('spaceHeading')}
            </h2>
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: '#6b7280',
                lineHeight: 1.72,
                maxWidth: '540px',
                margin: '0 0 2rem',
              }}
            >
              {tPage('spaceBody')}
            </p>
          </div>
        </AnimatedSection>

        {/* CSS scroll-snap photo carousel */}
        <AnimatedSection>
          <div
            className="office-carousel"
            role="region"
            aria-label="Office photo tour"
            style={{
              display: 'flex',
              overflowX: 'auto',
              gap: '1rem',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              borderRadius: '1.5rem',
              marginBottom: '1rem',
              paddingBottom: '0.25rem',
            }}
          >
            {officeSlides.map((slide) => (
              <div
                key={slide.label}
                style={{
                  flex: '0 0 clamp(260px, 75%, 400px)',
                  scrollSnapAlign: 'start',
                  background: slide.gradient,
                  borderRadius: '1.5rem',
                  aspectRatio: '4 / 3',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.85rem',
                  padding: '2rem',
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.55)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  {slide.icon}
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 900,
                      fontSize: '1.05rem',
                      color: '#1e3a5f',
                      marginBottom: '0.3rem',
                    }}
                  >
                    {slide.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#4b5563',
                      lineHeight: 1.55,
                    }}
                  >
                    {slide.caption}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#9ca3af',
                    marginTop: '0.25rem',
                  }}
                >
                  {tPage('photoComingSoon')}
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.78rem', color: '#9ca3af', fontWeight: 600, textAlign: 'center', margin: 0 }}>
            {tPage('swipeToExplore')}
          </p>
        </AnimatedSection>

        {/* Tour link */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', margin: '1.5rem 0 5rem' }}>
            <Link
              href="/about/tour-our-office"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--brand-purple)',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 800,
                fontSize: '0.9rem',
                textDecoration: 'none',
                borderBottom: '2px solid rgba(107,75,200,0.28)',
                paddingBottom: '2px',
              }}
            >
              {tPage('tourLink')}
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </AnimatedSection>

        {/* ── Recent Events ─────────────────────────────────────── */}
        <AnimatedSection>
          <div style={{ margin: '5rem 0 4rem' }}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'Nunito, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 900,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--brand-teal)',
                marginBottom: '0.85rem',
              }}
            >
              {tPage('eventsKicker')}
            </span>
            <h2
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: 'clamp(1.65rem, 3vw, 2.2rem)',
                fontWeight: 900,
                color: '#1e3a5f',
                lineHeight: 1.25,
                margin: '0 0 0.75rem',
              }}
            >
              {tPage('eventsHeading')}
            </h2>
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: '#6b7280',
                lineHeight: 1.72,
                maxWidth: '560px',
                margin: '0 0 2rem',
              }}
            >
              {tPage('eventsBody')}
            </p>

            <div className="events-placeholder-grid">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  style={{
                    background: 'var(--bg)',
                    border: '1.5px dashed rgba(107,75,200,0.20)',
                    borderRadius: '1.5rem',
                    padding: '2.5rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.85rem',
                    aspectRatio: '4 / 3',
                    textAlign: 'center',
                  }}
                >
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(107,75,200,0.30)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                    <line x1="8" y1="14" x2="16" y2="14"/>
                    <line x1="8" y1="18" x2="12" y2="18"/>
                  </svg>
                  <span
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'rgba(107,75,200,0.38)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {tPage('eventPhotoComingSoon')}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <Link
                href="/about/recent-events"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: 'var(--brand-purple)',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  borderBottom: '2px solid rgba(107,75,200,0.28)',
                  paddingBottom: '2px',
                }}
              >
                {tPage('eventsLink')}
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* ── Final CTA ─────────────────────────────────────────── */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, var(--brand-purple) 0%, #8B6BD8 50%, var(--brand-teal) 100%)',
              borderRadius: '2rem',
              padding: 'clamp(2.5rem, 5vw, 3.5rem) clamp(2rem, 5vw, 4rem)',
              textAlign: 'center',
              marginBottom: '2rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              aria-hidden="true"
              style={{ position: 'absolute', top: '-40px', right: '-40px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', pointerEvents: 'none' }}
            />
            <div
              aria-hidden="true"
              style={{ position: 'absolute', bottom: '-60px', left: '-30px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }}
            />
            <p
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 900,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.75)',
                marginBottom: '0.85rem',
              }}
            >
              {tPage('ctaKicker')}
            </p>
            <h2
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                fontWeight: 900,
                color: '#fff',
                lineHeight: 1.25,
                margin: '0 0 0.85rem',
              }}
            >
              {tPage('ctaHeading')}
            </h2>
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.85)',
                maxWidth: '440px',
                margin: '0 auto 2rem',
                lineHeight: 1.72,
              }}
            >
              {tPage('ctaBody')}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/request-appointment"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  background: 'rgba(255,255,255,0.18)',
                  border: '2px solid rgba(255,255,255,0.5)',
                  color: '#fff',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  padding: '0.85rem 2rem',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  backdropFilter: 'blur(6px)',
                }}
              >
                {tPage('ctaAppointment')}
              </Link>
              <Link
                href="tel:+18472231400"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: 'rgba(255,255,255,0.9)',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  padding: '0.85rem 2rem',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  border: '2px solid rgba(255,255,255,0.25)',
                }}
              >
                (847) 223-1400
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>

      <style>{`
        .office-carousel::-webkit-scrollbar { display: none; }
        .events-placeholder-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 640px) {
          .events-placeholder-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 540px) {
          .about-stat-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 541px) and (max-width: 768px) {
          .about-stat-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

    </SubPageLayout>
  )
}
