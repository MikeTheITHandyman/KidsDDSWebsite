import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import FaqAccordion, { type FaqItem } from '@/components/FaqAccordion'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Preventive Dentistry for Kids | Pediatric Dentist Grayslake, IL',
  description:
    "Children's preventive dental care near Libertyville, Mundelein, Vernon Hills, and Waukegan — cleanings, fluoride, sealants, digital X-rays, and early orthodontic screening starting at age one. Kids Dentist Grayslake, IL.",
  alternates: { canonical: 'https://www.kidsdds.com/services/preventive-dentistry' },
  openGraph: {
    title: 'Preventive Dentistry for Kids | Pediatric Dentist Grayslake, IL',
    description:
      'Keeping Lake County kids cavity-free since 1990. Cleanings, fluoride, sealants, and age-one first visits at Kids Dentist in Grayslake, IL.',
    url: 'https://www.kidsdds.com/services/preventive-dentistry',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const SERVICES_COVERED_META = [
  { icon: '🪥', accentColor: '#4A90A4', gradientFrom: '#DBEAFE', gradientTo: '#BAE6FD' },
  { icon: '💧', accentColor: '#6BA899', gradientFrom: '#D1FAE5', gradientTo: '#A7F3D0' },
  { icon: '🛡️', accentColor: '#D97706', gradientFrom: '#FEF3C7', gradientTo: '#FDE68A' },
  { icon: '📡', accentColor: '#7C3AED', gradientFrom: '#EDE9FE', gradientTo: '#DDD6FE' },
  { icon: '🦷', accentColor: '#E97D63', gradientFrom: '#FFE4E6', gradientTo: '#FECDD3' },
]

const AGE_STAGE_META = [
  { range: '0 – 2', color: '#4A90A4' },
  { range: '3 – 5', color: '#6BA899' },
  { range: '6 – 11', color: '#D97706' },
  { range: '12+', color: '#7C3AED' },
]

export default async function PreventiveDentistryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('preventivePage')

  const SERVICES_COVERED = SERVICES_COVERED_META.map((meta, i) => ({
    ...meta,
    title: t(`service${i}Title`),
    description: t(`service${i}Desc`),
  }))

  const AGE_STAGES = AGE_STAGE_META.map((meta, i) => ({
    ...meta,
    label: t(`age${i}Label`),
    detail: t(`age${i}Detail`),
  }))

  const FAQ_ITEMS: FaqItem[] = [
    { question: t('faq0q'), answer: t('faq0a') },
    { question: t('faq1q'), answer: t('faq1a') },
    { question: t('faq2q'), answer: t('faq2a') },
  ]

  return (
    <SubPageLayout
      title={t('title')}
      subtitle={t('subtitle')}
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

        {/* Services covered */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4A90A4', marginBottom: '0.5rem' }}>
              {t('coveredKicker')}
            </span>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#4A90A4', margin: 0 }}>
              {t('coveredHeading')}
            </h2>
          </div>
        </AnimatedSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '5rem' }}>
          {SERVICES_COVERED.map((svc, i) => (
            <AnimatedSection key={svc.title} delay={i * 0.06}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '1.5rem',
                  background: `linear-gradient(135deg, ${svc.gradientFrom}55, ${svc.gradientTo}33)`,
                  border: `1.5px solid ${svc.accentColor}22`,
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
                    background: `linear-gradient(135deg, ${svc.gradientFrom}, ${svc.gradientTo})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    boxShadow: `0 4px 14px ${svc.accentColor}22`,
                  }}
                  aria-hidden="true"
                >
                  {svc.icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.05rem', color: svc.accentColor, margin: '0 0 0.5rem', lineHeight: 1.3 }}>
                    {svc.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.72, color: '#6b7280', margin: 0 }}>
                    {svc.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Age stages */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(74,144,164,0.05), rgba(107,168,153,0.07))',
              border: '1.5px solid rgba(74,144,164,0.10)',
              borderRadius: '2rem',
              padding: '3rem 2.5rem',
              marginBottom: '5rem',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
              <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#78509b', marginBottom: '0.5rem' }}>
                {t('agesKicker')}
              </span>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: '#4A90A4', margin: 0 }}>
                {t('agesHeading')}
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.1rem' }}>
              {AGE_STAGES.map((stage) => (
                <div
                  key={stage.range}
                  style={{
                    background: '#fff',
                    borderRadius: '1.25rem',
                    padding: '1.4rem 1.25rem',
                    boxShadow: '0 2px 12px rgba(74,144,164,0.07)',
                    borderTop: `3px solid ${stage.color}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 900,
                      fontSize: '1.5rem',
                      color: stage.color,
                      marginBottom: '0.2rem',
                      lineHeight: 1,
                    }}
                  >
                    {stage.range}
                  </div>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.82rem', color: '#3D3D3D', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {stage.label}
                  </div>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: '#6b7280', margin: 0 }}>
                    {stage.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ */}
        <AnimatedSection>
          <div style={{ marginBottom: '5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4A90A4', marginBottom: '0.5rem' }}>
                {t('faqKicker')}
              </span>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: '#3D3D3D', margin: 0 }}>
                {t('faqHeading')}
              </h2>
            </div>
            <FaqAccordion items={FAQ_ITEMS} accentColor="#4A90A4" />
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

      </div>
    </SubPageLayout>
  )
}
