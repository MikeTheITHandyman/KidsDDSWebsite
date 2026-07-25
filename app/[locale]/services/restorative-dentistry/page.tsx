import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import FaqAccordion, { type FaqItem } from '@/components/FaqAccordion'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Restorative Dentistry for Kids | Kids Dentist Grayslake, IL',
  description:
    'Gentle restorative dental care for children in Grayslake, IL - tooth-colored fillings, pediatric crowns, pulp therapy, and extractions. Treating cavities early protects your child\'s smile.',
  openGraph: {
    title: 'Restorative Dentistry for Kids | Kids Dentist Grayslake, IL',
    description:
      'When a cavity or dental injury needs treatment, Kids Dentist Grayslake provides gentle, child-centered restorative care that protects your child\'s long-term dental health.',
    url: 'https://kidsdds.com/services/restorative-dentistry',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const TREATMENT_META = [
  { titleKey: 'treatment0Title', descKey: 'treatment0Desc', expectKey: 'treatment0Expect', accentColor: '#6BA899', gradientFrom: '#D1FAE5', gradientTo: '#A7F3D0', icon: '✨' },
  { titleKey: 'treatment1Title', descKey: 'treatment1Desc', expectKey: 'treatment1Expect', accentColor: '#4A90A4', gradientFrom: '#DBEAFE', gradientTo: '#BAE6FD', icon: '👑' },
  { titleKey: 'treatment2Title', descKey: 'treatment2Desc', expectKey: 'treatment2Expect', accentColor: '#D97706', gradientFrom: '#FEF3C7', gradientTo: '#FDE68A', icon: '🩺' },
  { titleKey: 'treatment3Title', descKey: 'treatment3Desc', expectKey: 'treatment3Expect', accentColor: '#7C3AED', gradientFrom: '#EDE9FE', gradientTo: '#DDD6FE', icon: '🫧' },
]

export default async function RestorativeDentistryPage() {
  const t = await getTranslations('restorativeDentistryPage')

  const TREATMENTS = TREATMENT_META.map((meta, i) => ({
    ...meta,
    number: String(i + 1).padStart(2, '0'),
    title: t(meta.titleKey),
    description: t(meta.descKey),
    whatToExpect: t(meta.expectKey),
  }))

  const FAQ_ITEMS: FaqItem[] = [
    { question: t('faq0Question'), answer: t('faq0Answer') },
    { question: t('faq1Question'), answer: t('faq1Answer') },
  ]

  return (
    <SubPageLayout
      title={t('title')}
      subtitle={t('subtitle')}
      gradient="green"
    >
      <div className="mx-auto max-w-5xl px-4">

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

        {/* Intro */}
        <AnimatedSection>
          <p style={{ textAlign: 'center', fontSize: '1.05rem', fontWeight: 500, color: '#6b7280', maxWidth: '620px', margin: '0 auto 4rem', lineHeight: 1.78 }}>
            {t('introText')}
          </p>
        </AnimatedSection>

        {/* Urgency callout */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(233,125,99,0.08), rgba(232,147,79,0.08))',
              border: '2px solid rgba(233,125,99,0.25)',
              borderRadius: '1.5rem',
              padding: '1.75rem 2rem',
              marginBottom: '4rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.25rem',
            }}
          >
            <span style={{ fontSize: '2rem', lineHeight: 1, flexShrink: 0 }} aria-hidden="true">⚠️</span>
            <div>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.1rem', color: '#E97D63', margin: '0 0 0.5rem' }}>
                {t('urgencyHeading')}
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#6b7280', margin: 0 }}>
                {t('urgencyBody')}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Treatment types */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6BA899', marginBottom: '0.5rem' }}>
              {t('treatmentsKicker')}
            </span>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#3D3D3D', margin: 0 }}>
              {t('treatmentsHeading')}
            </h2>
          </div>
        </AnimatedSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '5rem' }}>
          {TREATMENTS.map((tx, i) => (
            <AnimatedSection key={tx.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={0.05}>
              <div
                style={{
                  background: `linear-gradient(135deg, ${tx.gradientFrom}44, ${tx.gradientTo}22)`,
                  border: `1.5px solid ${tx.accentColor}20`,
                  borderRadius: '1.75rem',
                  padding: '2rem 2rem 2rem',
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.4rem',
                    flexShrink: 0,
                    width: '56px',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '1.1rem',
                      background: `linear-gradient(135deg, ${tx.gradientFrom}, ${tx.gradientTo})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.6rem',
                      boxShadow: `0 4px 14px ${tx.accentColor}22`,
                    }}
                    aria-hidden="true"
                  >
                    {tx.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 900,
                      fontSize: '0.7rem',
                      color: tx.accentColor,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {tx.number}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.15rem', color: tx.accentColor, margin: '0 0 0.65rem', lineHeight: 1.3 }}>
                    {tx.title}
                  </h3>
                  <p style={{ fontSize: '0.93rem', lineHeight: 1.75, color: '#6b7280', margin: '0 0 1rem' }}>
                    {tx.description}
                  </p>
                  <div
                    style={{
                      background: 'rgba(255,255,255,0.7)',
                      borderRadius: '0.85rem',
                      padding: '0.85rem 1rem',
                      display: 'flex',
                      gap: '0.65rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke={tx.accentColor} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p style={{ fontSize: '0.855rem', lineHeight: 1.6, color: '#6b7280', margin: 0, fontStyle: 'italic' }}>
                      <strong style={{ color: tx.accentColor, fontStyle: 'normal' }}>{t('whatToExpectLabel')}</strong>
                      {tx.whatToExpect}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Pulp Therapy section */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(217,119,6,0.06), rgba(232,147,79,0.07))',
              border: '1.5px solid rgba(217,119,6,0.16)',
              borderRadius: '2rem',
              padding: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '5rem',
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '1.5rem',
              alignItems: 'flex-start',
            }}
            className="pulp-therapy-grid"
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '1rem',
                background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                flexShrink: 0,
                boxShadow: '0 4px 14px rgba(217,119,6,0.18)',
              }}
              aria-hidden="true"
            >
              🩺
            </div>
            <div>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', color: '#D97706', margin: '0 0 1rem', lineHeight: 1.25 }}>
                {t('pulpHeading')}
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#6b7280', margin: 0, fontWeight: 500 }}>
                {t('pulpBody1')}
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#6b7280', margin: '0.85rem 0 0', fontWeight: 500 }}>
                {t('pulpBody2')}
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#6b7280', margin: '0.85rem 0 0', fontWeight: 500 }}>
                {t('pulpBody3')}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ */}
        <AnimatedSection>
          <div style={{ marginBottom: '5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6BA899', marginBottom: '0.5rem' }}>
                {t('faqKicker')}
              </span>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: '#3D3D3D', margin: 0 }}>
                {t('faqHeading')}
              </h2>
            </div>
            <FaqAccordion items={FAQ_ITEMS} accentColor="#6BA899" />
          </div>
        </AnimatedSection>

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
                {t('bookAppointment')}
              </Link>
              <Link
                href="tel:+18472231400"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: '#4A90A4', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.95rem', padding: '0.85rem 2rem', borderRadius: '100px', textDecoration: 'none', border: '2px solid rgba(74,144,164,0.3)' }}
              >
                {t('callUs')}
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>

      <style>{`
        @media (max-width: 540px) {
          .pulp-therapy-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SubPageLayout>
  )
}
