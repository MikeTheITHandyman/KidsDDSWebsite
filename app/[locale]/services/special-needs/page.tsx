import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Special Needs Dentistry for Children',
  description: 'Compassionate, specialized dental care for children with autism spectrum disorder, Down syndrome, cerebral palsy, ADHD, sensory processing differences, and complex medical needs in Grayslake, IL.',
  provider: {
    '@type': 'Dentist',
    name: 'Kids Dentist',
    url: 'https://kidsdds.com',
    telephone: '+1-847-223-1400',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '160 Commerce Dr #100',
      addressLocality: 'Grayslake',
      addressRegion: 'IL',
      postalCode: '60030',
      addressCountry: 'US',
    },
  },
  serviceType: 'Special Needs Pediatric Dentistry',
  areaServed: { '@type': 'City', name: 'Grayslake', containedInPlace: { '@type': 'State', name: 'Illinois' } },
  url: 'https://kidsdds.com/services/special-needs',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Special Needs Dental Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dental Care for Children with Autism (ASD)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dental Care for Children with Down Syndrome' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sedation Dentistry for Special Needs Children' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tell-Show-Do Communication Technique' } },
    ],
  },
}

export const metadata: Metadata = {
  title: 'Special Needs Pediatric Dentist | Kids Dentist Grayslake, IL',
  description:
    "Lake County's leading special needs children's dentist. Compassionate care for kids with autism, Down syndrome, cerebral palsy, ADHD, and sensory differences. Serving Grayslake, Libertyville, Waukegan, and Vernon Hills, IL.",
  alternates: { canonical: 'https://www.kidsdds.com/services/special-needs' },
  openGraph: {
    title: 'Special Needs Pediatric Dentist | Kids Dentist Grayslake, IL',
    description:
      'Every child deserves excellent dental care. Kids Dentist provides specialized care for children with autism, Down syndrome, and complex needs across Lake County, IL.',
    url: 'https://www.kidsdds.com/services/special-needs',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const WHO_WE_SERVE_META = ['🧩', '🧠', '💙', '🏃', '⚡', '🩺']

const APPROACH_META = [
  { icon: '💬', gradientFrom: '#D1FAE5', gradientTo: '#A7F3D0', accentColor: '#6BA899' },
  { icon: '😌', gradientFrom: '#DBEAFE', gradientTo: '#BAE6FD', accentColor: '#4A90A4' },
  { icon: '🤝', gradientFrom: '#FEF3C7', gradientTo: '#FDE68A', accentColor: '#D97706' },
]

export default async function SpecialNeedsDentistryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('specialNeedsPage')

  const WHO_WE_SERVE = WHO_WE_SERVE_META.map((icon, i) => ({ icon, label: t(`serve${i}`) }))

  const APPROACH = APPROACH_META.map((meta, i) => ({
    ...meta,
    title: t(`approach${i}Title`),
    body: t(`approach${i}Desc`),
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <SubPageLayout
      title={t('title')}
      subtitle={t('subtitle')}
      kicker={t('kicker')}
      gradient="green"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Answer-First summary — optimized for AI Answer Engines */}
        <div
          role="note"
          aria-label="Quick summary"
          style={{
            background: 'linear-gradient(135deg, rgba(107,168,153,0.07), rgba(74,144,164,0.09))',
            border: '1.5px solid rgba(107,168,153,0.2)',
            borderRadius: '1.25rem',
            padding: '1.25rem 1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          <span style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6BA899', marginBottom: '0.4rem' }}>
            {t('quickAnswerLabel')}
          </span>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.94rem', fontWeight: 600, color: '#4b5563', lineHeight: 1.68, margin: 0 }}>
            {t('quickAnswerBody')}
          </p>
        </div>

        {/* Back link */}
        <AnimatedSection>
          <Link
            href="/services"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#4A90A4', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', marginBottom: '2.5rem' }}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {t('backToServices')}
          </Link>
        </AnimatedSection>

        {/* Who we serve */}
        <AnimatedSection delay={0.05}>
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="section-kicker">{t('serveKicker')}</span>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', color: 'var(--brand-600)', margin: '0.5rem 0 0', lineHeight: 1.2 }}>
                {t('serveHeading')}
              </h2>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
              }}
              className="service-chips-grid"
            >
              {WHO_WE_SERVE.map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: 'linear-gradient(135deg, rgba(107,168,153,0.08), rgba(74,144,164,0.06))',
                    border: '1.5px solid rgba(107,168,153,0.2)',
                    borderRadius: '1rem',
                    padding: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <span style={{ fontSize: '1.5rem', flexShrink: 0 }} aria-hidden="true">{item.icon}</span>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.4 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Approach */}
        <AnimatedSection delay={0.05}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-kicker">{t('approachKicker')}</span>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', color: 'var(--brand-600)', margin: '0.5rem 0 0', lineHeight: 1.2 }}>
              {t('approachHeading')}
            </h2>
          </div>
        </AnimatedSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '5rem' }}>
          {APPROACH.map((block, i) => (
            <AnimatedSection key={block.title} delay={i * 0.06}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '1.5rem',
                  background: `linear-gradient(135deg, ${block.gradientFrom}55, ${block.gradientTo}33)`,
                  border: `1.5px solid ${block.accentColor}22`,
                  borderRadius: '1.5rem',
                  padding: '1.75rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '1rem',
                    background: `linear-gradient(135deg, ${block.gradientFrom}, ${block.gradientTo})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    boxShadow: `0 4px 14px ${block.accentColor}22`,
                  }}
                  aria-hidden="true"
                >
                  {block.icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.05rem', color: block.accentColor, margin: '0 0 0.5rem', lineHeight: 1.3 }}>
                    {block.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.72, color: '#6b7280', margin: 0 }}>
                    {block.body}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.1}>
          <div
            style={{
              background: 'linear-gradient(135deg, #6BA899, #4A90A4)',
              borderRadius: '2rem',
              padding: '3rem 2rem',
              textAlign: 'center',
              marginBottom: '2rem',
              boxShadow: '0 12px 40px rgba(74,144,164,0.22)',
            }}
          >
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.72)', marginBottom: '0.6rem' }}>
              {t('ctaKicker')}
            </p>
            <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: '#fff', lineHeight: 1.2, margin: '0 0 0.85rem' }}>
              {t('ctaHeading')}
            </h3>
            <p style={{ fontSize: '1rem', fontWeight: 500, color: 'rgba(255,255,255,0.88)', maxWidth: '440px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
              {t('ctaBody')}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/request-appointment"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                  background: '#E8934F', color: '#fff', fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800, fontSize: '0.95rem', padding: '0.9rem 2rem',
                  borderRadius: '100px', textDecoration: 'none',
                  boxShadow: '0 6px 22px rgba(232,147,79,0.45)',
                }}
              >
                {t('ctaAppointment')}
              </Link>
              <a
                href="tel:+18472231400"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                  background: 'rgba(255,255,255,0.15)', color: '#fff',
                  fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.95rem',
                  padding: '0.9rem 2rem', borderRadius: '100px', textDecoration: 'none',
                  border: '1.5px solid rgba(255,255,255,0.4)',
                }}
              >
                {t('ctaCall')}
              </a>
            </div>
          </div>
        </AnimatedSection>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .service-chips-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .service-chips-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SubPageLayout>
    </>
  )
}
