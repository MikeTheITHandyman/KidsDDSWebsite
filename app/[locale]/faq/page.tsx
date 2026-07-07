import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import FaqAccordion, { type FaqItem } from '@/components/FaqAccordion'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Kids Dentist Grayslake, IL',
  description:
    'Answers to the questions parents ask most about pediatric dental care at Kids Dentist Grayslake - first visits, X-ray safety, emergencies, and more.',
  openGraph: {
    title: 'Frequently Asked Questions | Kids Dentist Grayslake, IL',
    description:
      'Everything parents ask about pediatric dentistry - answered clearly and honestly by the Kids Dentist Grayslake team.',
    url: 'https://kidsdds.com/faq',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const GROUP_META: { icon: string; accentColor: string; itemCount: number }[] = [
  { icon: '👋', accentColor: '#4A90A4', itemCount: 3 },
  { icon: '🛡️', accentColor: '#6BA899', itemCount: 3 },
  { icon: '🦷', accentColor: '#6B4BC8', itemCount: 2 },
  { icon: '🚨', accentColor: '#E97D63', itemCount: 2 },
]

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('faqPage')

  const GROUPS: { label: string; icon: string; accentColor: string; items: FaqItem[] }[] =
    GROUP_META.map((meta, gi) => ({
      icon: meta.icon,
      accentColor: meta.accentColor,
      label: t(`group${gi}Label`),
      items: Array.from({ length: meta.itemCount }, (_, ii) => ({
        question: t(`group${gi}q${ii}`),
        answer: t(`group${gi}a${ii}`),
      })),
    }))

  return (
    <SubPageLayout
      kicker={t('kicker')}
      title={t('title')}
      subtitle={t('subtitle')}
      gradient="blue"
    >
      <div className="mx-auto max-w-3xl px-4">

        {/* Ask the Doctor prompt — top of FAQ */}
        <AnimatedSection>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              background: 'linear-gradient(135deg, rgba(120,80,155,0.07), rgba(74,144,164,0.07))',
              border: '1.5px solid rgba(120,80,155,0.18)',
              borderRadius: '1.5rem',
              padding: '1.25rem 1.6rem',
              marginBottom: '2.5rem',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 900,
                  fontSize: '0.92rem',
                  color: '#78509b',
                  margin: '0 0 0.2rem',
                }}
              >
                {t('askPromptTitle')}
              </p>
              <p style={{ fontSize: '0.82rem', color: '#6b7280', fontWeight: 500, margin: 0 }}>
                {t('askPromptBody')}
              </p>
            </div>
            <Link
              href="/ask-the-doctor"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'linear-gradient(135deg, #78509b, #9b6dc5)',
                color: '#fff',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 800,
                fontSize: '0.875rem',
                padding: '0.72rem 1.4rem',
                borderRadius: '100px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 16px rgba(120,80,155,0.28)',
                flexShrink: 0,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              {t('askButton')}
            </Link>
          </div>
        </AnimatedSection>

        {GROUPS.map((group, gi) => (
          <AnimatedSection key={group.label} delay={gi * 0.08}>
            <div style={{ marginBottom: '3rem' }}>
              {/* Group header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                }}
              >
                <span
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '0.75rem',
                    background: `${group.accentColor}18`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  {group.icon}
                </span>
                <h2
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 900,
                    fontSize: '0.78rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.10em',
                    color: group.accentColor,
                    margin: 0,
                  }}
                >
                  {group.label}
                </h2>
              </div>

              <FaqAccordion items={group.items} accentColor={group.accentColor} />
            </div>
          </AnimatedSection>
        ))}

        {/* Still have questions CTA */}
        <AnimatedSection delay={0.24}>
          <div
            style={{
              background: 'linear-gradient(135deg, #EFF6FF, #E0F2FE)',
              border: '1.5px solid rgba(74,144,164,0.15)',
              borderRadius: '2rem',
              padding: '2.5rem',
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            <p
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 900,
                fontSize: '1.15rem',
                color: '#4A90A4',
                margin: '0 0 0.5rem',
              }}
            >
              {t('stillHaveTitle')}
            </p>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#6b7280',
                fontWeight: 500,
                margin: '0 0 1.5rem',
                lineHeight: 1.65,
              }}
            >
              {t('stillHaveBody')}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
              <Link
                href="tel:+18472231400"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  background: 'linear-gradient(135deg, #E8934F, #E97D63)',
                  color: '#fff',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  padding: '0.8rem 1.75rem',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(232,147,79,0.32)',
                }}
              >
                {t('ctaCall')}
              </Link>
              <Link
                href="/ask-the-doctor"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  background: 'linear-gradient(135deg, #78509b, #9b6dc5)',
                  color: '#fff',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  padding: '0.8rem 1.75rem',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(120,80,155,0.28)',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                {t('ctaAsk')}
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </SubPageLayout>
  )
}
