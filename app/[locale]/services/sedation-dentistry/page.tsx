import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import FaqAccordion, { type FaqItem } from '@/components/FaqAccordion'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Sedation Dentistry for Kids | Pediatric Dentist Grayslake, IL',
  description:
    "Lake County's only pediatric practice with in-office general anesthesiology. Nitrous oxide and general anesthesiology for anxious children and special needs patients. Serving Grayslake, Libertyville, Waukegan, Mundelein, Vernon Hills, and Lake Forest, IL.",
  alternates: { canonical: 'https://www.kidsdds.com/services/sedation-dentistry' },
  openGraph: {
    title: 'Sedation Dentistry for Kids | Pediatric Dentist Grayslake, IL',
    description:
      "No child should avoid dental care because of fear. Kids Dentist Grayslake offers three levels of sedation — including in-office general anesthesiology — for Lake County children.",
    url: 'https://www.kidsdds.com/services/sedation-dentistry',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const WHO_ITS_FOR_META = ['😰', '🧠', '🏥', '🦷', '👶', '🩺']

const SEDATION_OPTION_META = [
  { number: '01', accentColor: '#4A90A4', gradientFrom: '#DBEAFE', gradientTo: '#BAE6FD', icon: '😌' },
  { number: '02', accentColor: '#7C3AED', gradientFrom: '#EDE9FE', gradientTo: '#DDD6FE', icon: '🏥' },
]

export default async function SedationDentistryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('sedationPage')

  const WHO_ITS_FOR = WHO_ITS_FOR_META.map((icon, i) => ({ icon, label: t(`who${i}`) }))

  const SEDATION_OPTIONS = SEDATION_OPTION_META.map((meta, i) => ({
    ...meta,
    title: t(`option${i}Title`),
    subtitle: t(`option${i}Subtitle`),
    description: t(`option${i}Desc`),
    howItWorks: t(`option${i}How`),
    ideal: t(`option${i}Ideal`),
  }))

  const FAQ_ITEMS: FaqItem[] = [
    { question: t('faq0q'), answer: t('faq0a') },
    { question: t('faq1q'), answer: t('faq1a') },
  ]

  return (
    <SubPageLayout
      title={t('title')}
      subtitle={t('subtitle')}
      gradient="amber"
    >
      <div className="mx-auto max-w-6xl px-4">

        {/* Answer-First summary — optimized for AI Answer Engines */}
        <div
          role="note"
          aria-label="Quick summary"
          style={{
            background: 'linear-gradient(135deg, rgba(217,119,6,0.06), rgba(232,147,79,0.08))',
            border: '1.5px solid rgba(217,119,6,0.16)',
            borderRadius: '1.25rem',
            padding: '1.25rem 1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          <span style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D97706', marginBottom: '0.4rem' }}>
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

        {/* Who it's for */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(217,119,6,0.05), rgba(232,147,79,0.07))',
              border: '1.5px solid rgba(217,119,6,0.12)',
              borderRadius: '2rem',
              padding: '2.75rem 2.5rem',
              marginBottom: '5rem',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D97706', marginBottom: '0.5rem' }}>
                {t('whoKicker')}
              </span>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: '#4A90A4', margin: 0 }}>
                {t('whoHeading')}
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              {WHO_ITS_FOR.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                    background: '#fff',
                    borderRadius: '1.1rem',
                    padding: '1rem 1.1rem',
                    boxShadow: '0 2px 10px rgba(217,119,6,0.07)',
                  }}
                >
                  <span style={{ fontSize: '1.35rem', lineHeight: 1, flexShrink: 0 }} aria-hidden="true">{item.icon}</span>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#6b7280', margin: 0, lineHeight: 1.55 }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Sedation options */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D97706', marginBottom: '0.5rem' }}>
              {t('optionsKicker')}
            </span>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#3D3D3D', margin: 0 }}>
              {t('optionsHeading')}
            </h2>
          </div>
        </AnimatedSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '5rem' }}>
          {SEDATION_OPTIONS.map((opt) => (
            <AnimatedSection key={opt.title} delay={0.05}>
              <div
                style={{
                  background: `linear-gradient(135deg, ${opt.gradientFrom}44, ${opt.gradientTo}22)`,
                  border: `1.5px solid ${opt.accentColor}20`,
                  borderRadius: '1.75rem',
                  overflow: 'hidden',
                }}
              >
                {/* Header bar */}
                <div
                  style={{
                    background: `linear-gradient(135deg, ${opt.gradientFrom}, ${opt.gradientTo})`,
                    padding: '1.25rem 1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <span style={{ fontSize: '1.75rem', lineHeight: 1 }} aria-hidden="true">{opt.icon}</span>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '0.7rem', color: opt.accentColor, letterSpacing: '0.06em' }}>
                        {t('optionLabel')} {opt.number}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.2rem', color: opt.accentColor, margin: '0.1rem 0 0.1rem', lineHeight: 1.2 }}>
                      {opt.title}
                    </h3>
                    <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: opt.accentColor, margin: 0, opacity: 0.75 }}>
                      {opt.subtitle}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '1.5rem 1.75rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ fontSize: '0.93rem', lineHeight: 1.75, color: '#6b7280', margin: 0 }}>
                    {opt.description}
                  </p>
                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <div style={{ background: 'rgba(255,255,255,0.8)', borderRadius: '0.85rem', padding: '0.85rem 1rem', display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke={opt.accentColor} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p style={{ fontSize: '0.855rem', lineHeight: 1.6, color: '#6b7280', margin: 0 }}>
                        <strong style={{ color: opt.accentColor }}>{t('howItWorksLabel')} </strong>
                        {opt.howItWorks}
                      </p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.8)', borderRadius: '0.85rem', padding: '0.85rem 1rem', display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke={opt.accentColor} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p style={{ fontSize: '0.855rem', lineHeight: 1.6, color: '#6b7280', margin: 0 }}>
                        <strong style={{ color: opt.accentColor }}>{t('idealLabel')} </strong>
                        {opt.ideal}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Parent FAQ */}
        <AnimatedSection>
          <div style={{ marginBottom: '5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D97706', marginBottom: '0.5rem' }}>
                {t('faqKicker')}
              </span>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: '#3D3D3D', margin: 0 }}>
                {t('faqHeading')}
              </h2>
            </div>
            <FaqAccordion items={FAQ_ITEMS} accentColor="#D97706" />
          </div>
        </AnimatedSection>

        {/* Dr. Dave callout */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(107,168,153,0.07), rgba(74,144,164,0.07))',
              border: '1.5px solid rgba(107,168,153,0.18)',
              borderRadius: '2rem',
              padding: '2.5rem',
              marginBottom: '4rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ flexShrink: 0, width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, #D1FAE5, #A7F3D0)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem' }} aria-hidden="true">
              🩺
            </div>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.05rem', color: '#6BA899', margin: '0 0 0.5rem' }}>
                {t('drHeading')}
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.72, color: '#6b7280', margin: '0 0 1rem' }}>
                {t('drBody')}
              </p>
              <Link
                href="/about/meet-the-dentists/dr-dave-rutcosky"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#6BA899', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.875rem', textDecoration: 'none' }}
              >
                {t('drLink')}
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
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
