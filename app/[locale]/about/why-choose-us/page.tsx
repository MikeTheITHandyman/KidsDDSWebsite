import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import FaqAccordion, { type FaqItem } from '@/components/FaqAccordion'
import { Link } from '@/navigation'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getPracticeAge } from '@/lib/practiceAge'

export const metadata: Metadata = {
  title: "Why Choose Kids Dentist? | Lake County's Longest-Serving Pediatric Practice",
  description:
    "Kids Dentist has been Grayslake's dedicated pediatric-only dental practice since 1994 — four board-certified specialists, generations of Lake County families, bilingual care.",
  alternates: { canonical: 'https://www.kidsdds.com/about/why-choose-us' },
  openGraph: {
    title: "Why Choose Kids Dentist? | Lake County's Longest-Serving Pediatric Practice",
    description:
      "Open since 1994 and pediatric-only from day one — four board-certified specialists serving generations of Lake County families.",
    url: 'https://www.kidsdds.com/about/why-choose-us',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const DIFFERENTIATOR_META = [
  { icon: '🦷', accentColor: '#4A90A4', gradientFrom: '#DBEAFE', gradientTo: '#BAE6FD' },
  { icon: '🎓', accentColor: '#6BA899', gradientFrom: '#D1FAE5', gradientTo: '#A7F3D0' },
  { icon: '👨‍👩‍👧‍👦', accentColor: '#D97706', gradientFrom: '#FEF3C7', gradientTo: '#FDE68A' },
  { icon: '💬', accentColor: '#7C3AED', gradientFrom: '#EDE9FE', gradientTo: '#DDD6FE' },
]

export default async function WhyChooseUsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('whyChooseUsPage')

  const { years, months } = getPracticeAge()

  const DIFFERENTIATORS = DIFFERENTIATOR_META.map((meta, i) => ({
    ...meta,
    title: t(`diff${i}Title`),
    desc: t(`diff${i}Desc`),
  }))

  const FAQ_ITEMS: FaqItem[] = [
    { question: t('faq0q'), answer: t('faq0a') },
    { question: t('faq1q'), answer: t('faq1a') },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <SubPageLayout
      kicker={t('kicker')}
      title={t('title')}
      subtitle={t('subtitle')}
      gradient="blue"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <div className="mx-auto max-w-5xl px-4">

        {/* Tenure stat block */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, #4A90A4, #6BA899)',
              borderRadius: '2rem',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              color: '#fff',
              marginBottom: '3.5rem',
              boxShadow: '0 12px 40px rgba(74,144,164,0.24)',
            }}
          >
            <p style={{ fontSize: '1.05rem', fontWeight: 600, lineHeight: 1.7, margin: '0 auto', maxWidth: '640px' }}>
              {t('tenurePrefix')}{' '}
              <strong style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.3rem' }}>
                {t('tenureYears', { years, months })}
              </strong>{' '}
              {t('tenureSuffix')}
            </p>
          </div>
        </AnimatedSection>

        {/* Differentiators */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          {DIFFERENTIATORS.map((d, i) => (
            <AnimatedSection key={d.title} delay={i * 0.07}>
              <div
                style={{
                  background: '#fff',
                  border: '1.5px solid rgba(74,144,164,0.12)',
                  borderRadius: '1.75rem',
                  padding: '2rem 1.75rem',
                  height: '100%',
                  boxShadow: '0 4px 20px rgba(74,144,164,0.07)',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: `linear-gradient(135deg, ${d.gradientFrom}, ${d.gradientTo})`,
                    fontSize: '1.4rem',
                    marginBottom: '1.25rem',
                  }}
                  aria-hidden="true"
                >
                  {d.icon}
                </span>
                <h3
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 900,
                    fontSize: '1.05rem',
                    color: d.accentColor,
                    margin: '0 0 0.6rem',
                    lineHeight: 1.3,
                  }}
                >
                  {d.title}
                </h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#6b7280', margin: 0 }}>
                  {d.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* FAQ */}
        <AnimatedSection delay={0.1}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="section-kicker">{t('faqKicker')}</span>
              <h2
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                  color: 'var(--brand-600)',
                  margin: '0.5rem 0 0',
                }}
              >
                {t('faqHeading')}
              </h2>
            </div>
            <FaqAccordion items={FAQ_ITEMS} accentColor="#4A90A4" />
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.16}>
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
