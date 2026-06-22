import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = {
  title: "Your Child's First Dental Visit | Kids Dentist Grayslake, IL",
  description:
    "Everything you need to know about your child's first dental visit at Kids Dentist Grayslake. Gentle, fun, and stress-free from the very first appointment.",
  openGraph: {
    title: "Your Child's First Dental Visit | Kids Dentist Grayslake, IL",
    description:
      "First visits should be fun. Learn what to expect at Kids Dentist Grayslake - welcoming, gentle, and designed for tiny patients from age one.",
    url: 'https://kidsdds.com/for-patients/child-first-visit',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const STEP_META = [
  { number: '01', icon: '👋', gradientFrom: '#DBEAFE', gradientTo: '#BAE6FD', accentColor: '#4A90A4' },
  { number: '02', icon: '🔍', gradientFrom: '#D1FAE5', gradientTo: '#A7F3D0', accentColor: '#6BA899' },
  { number: '03', icon: '🪥', gradientFrom: '#FEF3C7', gradientTo: '#FDE68A', accentColor: '#D97706' },
  { number: '04', icon: '🎁', gradientFrom: '#EDE9FE', gradientTo: '#DDD6FE', accentColor: '#7C3AED' },
]

export default async function ChildFirstVisitPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('firstVisit')

  const STEPS = STEP_META.map((meta, i) => ({
    ...meta,
    title: t(`step${i}Title`),
    description: t(`step${i}Desc`),
  }))

  const WHAT_TO_BRING = [t('bring0'), t('bring1'), t('bring2'), t('bring3'), t('bring4')]

  return (
    <SubPageLayout
      kicker={t('kicker')}
      title={t('title')}
      subtitle={t('subtitle')}
      gradient="blue"
    >
      <div className="mx-auto max-w-5xl px-4">

        {/* Age 1 rule */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(74,144,164,0.07), rgba(107,168,153,0.09))',
              border: '2px solid rgba(74,144,164,0.18)',
              borderRadius: '2rem',
              padding: '2.25rem 2rem',
              marginBottom: '4rem',
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '1.5rem',
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '1.1rem',
                background: 'linear-gradient(135deg, #4A90A4, #6BA899)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.65rem',
                flexShrink: 0,
                boxShadow: '0 6px 20px rgba(74,144,164,0.28)',
              }}
              aria-hidden="true"
            >
              🦷
            </div>
            <div>
              <h2
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)',
                  color: '#4A90A4',
                  margin: '0 0 0.6rem',
                  lineHeight: 1.3,
                }}
              >
                {t('ageRuleHeading')}
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: '#6b7280', margin: 0, fontWeight: 500 }}>
                {t('ageRuleBodyPrefix')}{' '}
                <strong style={{ color: '#4A90A4' }}>
                  {t('ageRuleBodyBold')}
                </strong>{' '}
                {t('ageRuleBodySuffix')}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Video placeholder */}
        <AnimatedSection>
          <div style={{ marginBottom: '5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 900,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#78509b',
                  marginBottom: '0.35rem',
                }}
              >
                {t('videoKicker')}
              </span>
              <h2
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                  color: '#3D3D3D',
                  margin: 0,
                }}
              >
                {t('videoHeading')}
              </h2>
            </div>
            {/* 16:9 video block */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                borderRadius: '1.75rem',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #DBEAFE, #BAE6FD 45%, #D1FAE5)',
                boxShadow: '0 12px 40px rgba(74,144,164,0.13)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.90)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 28px rgba(74,144,164,0.22)',
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    fill="#4A90A4"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    style={{ marginLeft: '3px' }}
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 900,
                      fontSize: '1.05rem',
                      color: '#4A90A4',
                      margin: '0 0 0.25rem',
                    }}
                  >
                    {t('videoTitle')}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      color: '#9ca3af',
                      margin: 0,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {t('videoComingSoon')}
                  </p>
                </div>
              </div>
            </div>
            <p
              style={{
                textAlign: 'center',
                fontSize: '0.875rem',
                color: '#9ca3af',
                marginTop: '0.85rem',
                fontWeight: 500,
              }}
            >
              {t('videoLinkPrefix')}{' '}
              <Link
                href="/about/tour-our-office"
                style={{ color: '#4A90A4', fontWeight: 700, textDecoration: 'none' }}
              >
                {t('videoLink')}
              </Link>
            </p>
          </div>
        </AnimatedSection>

        {/* Step-by-step */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'Nunito, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 900,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#78509b',
                marginBottom: '0.4rem',
              }}
            >
              {t('stepsKicker')}
            </span>
            <h2
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: '#3D3D3D',
                margin: 0,
              }}
            >
              {t('stepsHeading')}
            </h2>
          </div>
        </AnimatedSection>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(258px, 1fr))',
            gap: '1.25rem',
            marginBottom: '5rem',
          }}
        >
          {STEPS.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.08}>
              <div
                style={{
                  background: `linear-gradient(160deg, ${step.gradientFrom}, ${step.gradientTo})`,
                  borderRadius: '1.75rem',
                  padding: '2rem 1.75rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.9rem',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.06)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '2rem', lineHeight: 1 }} aria-hidden="true">
                    {step.icon}
                  </span>
                  <span
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 900,
                      fontSize: '2.25rem',
                      color: step.accentColor,
                      opacity: 0.15,
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 900,
                    fontSize: '1.05rem',
                    color: step.accentColor,
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.72, color: '#6b7280', margin: 0 }}>
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* What to bring */}
        <AnimatedSection>
          <div
            style={{
              background: '#fff',
              border: '1.5px solid rgba(74,144,164,0.12)',
              borderRadius: '2rem',
              padding: '2.5rem',
              marginBottom: '4rem',
              boxShadow: '0 4px 24px rgba(74,144,164,0.06)',
            }}
          >
            <h2
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)',
                color: '#4A90A4',
                margin: '0 0 1.5rem',
              }}
            >
              {t('bringHeading')}
            </h2>
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
              }}
            >
              {WHAT_TO_BRING.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    fontSize: '0.92rem',
                    color: '#6b7280',
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#6BA899"
                    strokeWidth="2.5"
                    style={{ flexShrink: 0, marginTop: '1px' }}
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ lineHeight: 1.6, fontWeight: 500 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Quote */}
        <AnimatedSection>
          <blockquote
            style={{
              background: 'linear-gradient(135deg, rgba(74,144,164,0.05), rgba(107,168,153,0.07))',
              border: '1.5px solid rgba(74,144,164,0.11)',
              borderRadius: '2rem',
              padding: '2.5rem',
              margin: '0 0 4rem',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                color: '#4A90A4',
                fontStyle: 'italic',
                lineHeight: 1.7,
                margin: '0 0 1rem',
              }}
            >
              &ldquo;{t('quote')}&rdquo;
            </p>
            <cite
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#9ca3af',
                fontStyle: 'normal',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
              }}
            >
              {t('quoteCite')}
            </cite>
          </blockquote>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: '#4A90A4',
                marginBottom: '1.25rem',
              }}
            >
              {t('ctaText')}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/request-appointment"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  background: 'linear-gradient(135deg, #E8934F, #E97D63)',
                  color: '#fff',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  padding: '0.85rem 2rem',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  boxShadow: '0 6px 22px rgba(232,147,79,0.35)',
                }}
              >
                {t('ctaAppointment')}
              </Link>
              <Link
                href="tel:+18472231400"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: '#4A90A4',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  padding: '0.85rem 2rem',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  border: '2px solid rgba(74,144,164,0.3)',
                }}
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
