import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Dr. Dave Rutcosky, DDS | Kids Dentist Grayslake, IL',
  description:
    'Meet Dr. Dave Rutcosky — board-certified pediatric dentist and general anesthesiologist specializing in special needs dentistry at Kids Dentist Grayslake, IL.',
  openGraph: {
    title: 'Dr. Dave Rutcosky, DDS | Kids Dentist Grayslake, IL',
    description: 'Specialist in special needs dentistry and general anesthesiology for children. Serving Grayslake, IL.',
    url: 'https://kidsdds.com/about/meet-the-dentists/dr-dave-rutcosky',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'profile',
  },
}

export default async function DrDavePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('drProfiles')

  const credentials = Array.from({ length: 7 }, (_, i) =>
    t(`dave_cred${i}` as Parameters<typeof t>[0])
  )

  return (
    <SubPageLayout
      title="Dr. Dave Rutcosky, DDS"
      gradient="green"
    >
      <div className="mx-auto max-w-5xl px-4">

        <AnimatedSection>
          <Link
            href="/about/meet-the-dentists"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--brand-purple)', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', marginBottom: '2.5rem' }}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {t('backLink')}
          </Link>
        </AnimatedSection>

        <div className="mb-16 grid items-start gap-12 md:grid-cols-[1fr_1.6fr]">

          <AnimatedSection direction="left">
            <div style={{ position: 'sticky', top: '6rem', maxWidth: '380px', margin: '0 auto' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: '2rem',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #D1FAE5, #A7F3D0)',
                  boxShadow: '0 16px 48px rgba(61,189,189,0.20)',
                }}
              >
                <Image
                  src="/brand_assets/index-dr-dave.jpg"
                  alt="Dr. Dave Rutcosky, pediatric dentist and anesthesiologist at Kids Dentist Grayslake IL"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  priority
                />
              </div>

              <div
                style={{ marginTop: '1.25rem', background: '#fff', border: '1.5px solid rgba(107,75,200,0.12)', borderRadius: '1.5rem', padding: '1.25rem 1.5rem', boxShadow: '0 2px 16px rgba(107,75,200,0.07)' }}
              >
                <Link
                  href="/request-appointment?dentist=dr-dave-rutcosky"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem', background: 'linear-gradient(135deg, #E8934F, #E97D63)', color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.9rem', padding: '0.8rem 1.5rem', borderRadius: '100px', textDecoration: 'none', boxShadow: '0 4px 16px rgba(232,147,79,0.35)', marginBottom: '0.75rem' }}
                >
                  {t('dave_bookBtn')}
                </Link>
                <Link
                  href="tel:+18472231400"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: 'var(--brand-purple)', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', padding: '0.65rem', borderRadius: '100px', border: '1.5px solid rgba(107,75,200,0.22)' }}
                >
                  (847) 223-1400
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.12}>
            <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-teal)', marginBottom: '0.6rem' }}>
              {t('roleLabel')}
            </span>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', color: 'var(--brand-purple)', lineHeight: 1.2, margin: '0 0 1.5rem' }}>
              {t('dave_heroHeading')}
            </h2>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.78, color: '#6b7280', marginBottom: '1.1rem' }}>
              {t('dave_bio0')}
            </p>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.78, color: '#6b7280', marginBottom: '1.1rem' }}>
              {t('dave_bio1')}
            </p>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.78, color: '#6b7280', marginBottom: '2rem' }}>
              {t('dave_bio2')}
            </p>

            <blockquote
              style={{ borderLeft: '4px solid var(--brand-teal)', background: 'linear-gradient(135deg, rgba(61,189,189,0.06), rgba(107,75,200,0.06))', borderRadius: '0 1.25rem 1.25rem 0', padding: '1.25rem 1.5rem', margin: '0 0 2.25rem' }}
            >
              <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: 'var(--brand-purple)', fontStyle: 'italic', lineHeight: 1.65, margin: '0 0 0.6rem' }}>
                &ldquo;{t('dave_quote')}&rdquo;
              </p>
              <cite style={{ fontSize: '0.82rem', fontWeight: 800, color: '#9ca3af', fontStyle: 'normal', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                — Dr. Dave Rutcosky, DDS
              </cite>
            </blockquote>

            <div>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, color: 'var(--brand-purple)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.78rem' }}>
                {t('credentialsHeading')}
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {credentials.map((c) => (
                  <li key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.92rem', color: '#6b7280' }}>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="var(--brand-teal)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </SubPageLayout>
  )
}
