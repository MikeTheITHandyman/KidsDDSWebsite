import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import FaqAccordion, { type FaqItem } from '@/components/FaqAccordion'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Pediatric Orthodontic Evaluations',
  description: "Orthodontic evaluations and referrals for children in Grayslake, IL. We monitor bite and jaw growth and refer to a trusted local orthodontist for braces or Invisalign — we do not provide orthodontic treatment in-house.",
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
  serviceType: 'Orthodontic Evaluation & Referral',
  areaServed: { '@type': 'City', name: 'Grayslake', containedInPlace: { '@type': 'State', name: 'Illinois' } },
  url: 'https://kidsdds.com/services/orthodontics',
}

export const metadata: Metadata = {
  title: 'Orthodontic Evaluations for Kids | Pediatric Dentist Grayslake, IL',
  description:
    "Orthodontic evaluations and referrals for braces and Invisalign in Grayslake, IL. We monitor your child's bite and jaw growth starting around age 7 and refer to a trusted local orthodontist when treatment is needed. Kids Dentist Grayslake, IL.",
  alternates: { canonical: 'https://www.kidsdds.com/services/orthodontics' },
  openGraph: {
    title: 'Orthodontic Evaluations for Kids | Pediatric Dentist Grayslake, IL',
    description:
      "We catch alignment and jaw-growth issues early and refer Lake County families to a trusted local orthodontist for braces or Invisalign — right at the moment it's needed.",
    url: 'https://www.kidsdds.com/services/orthodontics',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const WE_DO_META = [
  { icon: '👀', accentColor: '#4A90A4' },
  { icon: '🗓️', accentColor: '#6BA899' },
  { icon: '🦷', accentColor: '#4A90A4' },
  { icon: '🤝', accentColor: '#6BA899' },
]

const WE_DONT_META = [
  { icon: '🚫' },
  { icon: '🚫' },
  { icon: '🚫' },
]

export default async function OrthodonticsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('orthodonticsPage')

  const WE_DO = WE_DO_META.map((meta, i) => ({ ...meta, text: t(`weDo${i}`) }))
  const WE_DONT = WE_DONT_META.map((meta, i) => ({ ...meta, text: t(`weDont${i}`) }))

  const FAQ_ITEMS: FaqItem[] = [
    { question: t('faq0q'), answer: t('faq0a') },
    { question: t('faq1q'), answer: t('faq1a') },
    { question: t('faq2q'), answer: t('faq2a') },
  ]

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
        gradient="blue"
      >
        <div className="mx-auto max-w-6xl px-4">

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

          {/* How it works: evaluation & referral, not in-house treatment */}
          <AnimatedSection delay={0.05}>
            <div style={{ textAlign: 'center', marginBottom: '2rem', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
              <span className="section-kicker">{t('howKicker')}</span>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', color: 'var(--brand-600)', margin: '0.5rem 0 1rem', lineHeight: 1.2 }}>
                {t('howHeading')}
              </h2>
              <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.75, fontWeight: 500, margin: 0 }}>
                {t('howBody')}
              </p>
            </div>
          </AnimatedSection>

          {/* What we do / what we don't do */}
          <div
            className="ortho-scope-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '5rem' }}
          >
            <AnimatedSection delay={0.08} direction="left">
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(74,144,164,0.06), rgba(107,168,153,0.08))',
                  border: '1.5px solid rgba(74,144,164,0.16)',
                  borderRadius: '1.75rem',
                  padding: '2rem',
                  height: '100%',
                }}
              >
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.05rem', color: '#4A90A4', margin: '0 0 1.25rem' }}>
                  {t('weDoTitle')}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  {WE_DO.map((item) => (
                    <div key={item.text} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.1rem', lineHeight: 1.4, flexShrink: 0 }} aria-hidden="true">{item.icon}</span>
                      <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: '#4b5563', fontWeight: 500, margin: 0 }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1} direction="right">
              <div
                style={{
                  background: 'rgba(107,114,128,0.05)',
                  border: '1.5px solid rgba(107,114,128,0.16)',
                  borderRadius: '1.75rem',
                  padding: '2rem',
                  height: '100%',
                }}
              >
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.05rem', color: '#4b5563', margin: '0 0 1.25rem' }}>
                  {t('weDontTitle')}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  {WE_DONT.map((item) => (
                    <div key={item.text} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.1rem', lineHeight: 1.4, flexShrink: 0 }} aria-hidden="true">{item.icon}</span>
                      <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: '#6b7280', fontWeight: 500, margin: 0 }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* CTA */}
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#4A90A4', marginBottom: '1.25rem' }}>
                {t('ctaText')}
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  href="/request-appointment"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'linear-gradient(135deg, #E8934F, #E97D63)', color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.95rem', padding: '0.85rem 2rem', borderRadius: '100px', textDecoration: 'none', boxShadow: '0 6px 22px rgba(232,147,79,0.35)' }}
                >
                  {t('ctaAppointment')}
                </Link>
                <Link
                  href="tel:+18472231400"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: '#4A90A4', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.95rem', padding: '0.85rem 2rem', borderRadius: '100px', textDecoration: 'none', border: '2px solid rgba(74,144,164,0.3)' }}
                >
                  {t('ctaCall')}
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* FAQ */}
          <AnimatedSection delay={0.05}>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span className="section-kicker">{t('faqKicker')}</span>
                <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: 'var(--brand-600)', margin: '0.5rem 0 0' }}>
                  {t('faqHeading')}
                </h2>
              </div>
              <FaqAccordion items={FAQ_ITEMS} accentColor="#4A90A4" />
            </div>
          </AnimatedSection>

        </div>

        <style>{`
          @media (max-width: 768px) {
            .ortho-scope-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </SubPageLayout>
    </>
  )
}
