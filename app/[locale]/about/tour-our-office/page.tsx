import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Tour Our Office | Kids Dentist Grayslake, IL',
  description:
    'Take a virtual tour of Kids Dentist Grayslake. See our welcoming lobby, child-friendly treatment rooms, play area, and advanced digital technology suite.',
  openGraph: {
    title: 'Tour Our Office | Kids Dentist Grayslake, IL',
    description: 'See inside the Kids Dentist office in Grayslake, IL - designed from the ground up to make children and parents feel at home.',
    url: 'https://kidsdds.com/about/tour-our-office',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const COMFORT_META = [
  { icon: '📺', labelKey: 'comfort0Label' },
  { icon: '🌿', labelKey: 'comfort1Label' },
  { icon: '💡', labelKey: 'comfort2Label' },
  { icon: '🧸', labelKey: 'comfort3Label' },
  { icon: '🎮', labelKey: 'comfort4Label' },
  { icon: '🔬', labelKey: 'comfort5Label' },
]

const SPACE_META = [
  {
    number: '01',
    nameKey: 'space0Name',
    descKey: 'space0Desc',
    featureKeys: ['space0Feature0', 'space0Feature1', 'space0Feature2'],
    imagePath: '/brand_assets/office-tour-lobby.jpg',
    altKey: 'space0Alt',
    gradientFrom: '#DBEAFE',
    gradientTo: '#BAE6FD',
    accentColor: '#4A90A4',
    icon: '🛋️',
    flip: false,
  },
  {
    number: '02',
    nameKey: 'space1Name',
    descKey: 'space1Desc',
    featureKeys: ['space1Feature0', 'space1Feature1', 'space1Feature2'],
    imagePath: '/brand_assets/office-tour-treatment.jpg',
    altKey: 'space1Alt',
    gradientFrom: '#D1FAE5',
    gradientTo: '#A7F3D0',
    accentColor: '#6BA899',
    icon: '🦷',
    flip: true,
  },
  {
    number: '03',
    nameKey: 'space2Name',
    descKey: 'space2Desc',
    featureKeys: ['space2Feature0', 'space2Feature1', 'space2Feature2'],
    imagePath: '/brand_assets/office-tour-play.jpg',
    altKey: 'space2Alt',
    gradientFrom: '#FEF3C7',
    gradientTo: '#FDE68A',
    accentColor: '#D97706',
    icon: '🎈',
    flip: false,
  },
  {
    number: '04',
    nameKey: 'space3Name',
    descKey: 'space3Desc',
    featureKeys: ['space3Feature0', 'space3Feature1', 'space3Feature2'],
    imagePath: '/brand_assets/office-tour-tech.jpg',
    altKey: 'space3Alt',
    gradientFrom: '#EDE9FE',
    gradientTo: '#DDD6FE',
    accentColor: '#7C3AED',
    icon: '📡',
    flip: true,
  },
]

export default async function TourOurOfficePage() {
  const t = await getTranslations('tourOurOfficePage')

  const COMFORT_FEATURES = COMFORT_META.map((meta) => ({ ...meta, label: t(meta.labelKey) }))

  const SPACES = SPACE_META.map((meta) => ({
    ...meta,
    name: t(meta.nameKey),
    description: t(meta.descKey),
    features: meta.featureKeys.map((k) => t(k)),
    imageAlt: t(meta.altKey),
  }))

  return (
    <SubPageLayout
      title={t('title')}
      subtitle={t('subtitle')}
      gradient="green"
    >
      <div className="mx-auto max-w-5xl px-4">

        {/* Intro */}
        <AnimatedSection>
          <p style={{ textAlign: 'center', fontSize: '1.05rem', fontWeight: 500, color: '#6b7280', maxWidth: '620px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            {t('introPrefix')} <em style={{ color: '#4A90A4', fontStyle: 'normal', fontWeight: 700 }}>{t('introEmphasis')}</em>
          </p>
        </AnimatedSection>

        {/* Photo carousel */}
        <AnimatedSection>
          <div
            className="office-carousel"
            style={{
              display: 'flex',
              gap: '1.25rem',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              paddingBottom: '0.5rem',
              marginBottom: '4rem',
            }}
          >
            {SPACES.map((space) => (
              <div
                key={space.number}
                style={{
                  flexShrink: 0,
                  width: 'clamp(260px, 38vw, 420px)',
                  scrollSnapAlign: 'start',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  background: `linear-gradient(135deg, ${space.gradientFrom}, ${space.gradientTo})`,
                  boxShadow: '0 6px 28px rgba(0,0,0,0.09)',
                  position: 'relative',
                }}
              >
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', overflow: 'hidden' }}>
                  <Image
                    src={space.imagePath}
                    alt={space.imageAlt}
                    fill
                    sizes="(max-width: 640px) 90vw, 420px"
                    style={{ objectFit: 'cover' }}
                  />
                  {/* Fallback icon overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      opacity: 0.5,
                      pointerEvents: 'none',
                    }}
                  >
                    <span style={{ fontSize: '2.5rem', lineHeight: 1 }} aria-hidden="true">{space.icon}</span>
                  </div>
                  {/* Room number badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.9)',
                      backdropFilter: 'blur(6px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 900,
                      fontSize: '0.75rem',
                      color: space.accentColor,
                    }}
                  >
                    {space.number}
                  </div>
                </div>
                <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
                  <p
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 900,
                      fontSize: '0.95rem',
                      color: space.accentColor,
                      margin: 0,
                    }}
                  >
                    {space.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Room sections - alternating layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', marginBottom: '5rem' }}>
          {SPACES.map((space) => (
            <div
              key={space.number}
              className={`grid items-center gap-12 md:grid-cols-2 ${space.flip ? 'office-flip' : ''}`}
            >
              {/* 16:9 Strict Box image placeholder */}
              <AnimatedSection direction={space.flip ? 'right' : 'left'}>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16 / 9',
                    borderRadius: '1.75rem',
                    overflow: 'hidden',
                    background: `linear-gradient(135deg, ${space.gradientFrom}, ${space.gradientTo})`,
                    boxShadow: '0 12px 40px rgba(0,0,0,0.10)',
                  }}
                >
                  <Image
                    src={space.imagePath}
                    alt={space.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                  {/* Fallback overlay - shows when image is missing */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem',
                      opacity: 0.55,
                      pointerEvents: 'none',
                    }}
                  >
                    <span style={{ fontSize: '2.75rem', lineHeight: 1 }} aria-hidden="true">{space.icon}</span>
                    <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6b7280' }}>
                      {t('photoComingSoon')}
                    </span>
                  </div>
                  {/* Room number badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.88)',
                      backdropFilter: 'blur(6px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 900,
                      fontSize: '0.8rem',
                      color: space.accentColor,
                    }}
                  >
                    {space.number}
                  </div>
                </div>
              </AnimatedSection>

              {/* Text content */}
              <AnimatedSection direction={space.flip ? 'left' : 'right'} delay={0.14}>
                <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: space.accentColor, marginBottom: '0.6rem' }}>
                  {t('spaceLabel', { number: space.number })}
                </span>
                <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)', color: '#4A90A4', lineHeight: 1.25, margin: '0 0 1rem' }}>
                  {space.name}
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.78, color: '#6b7280', marginBottom: '1.25rem' }}>
                  {space.description}
                </p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {space.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#6b7280' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: space.accentColor, flexShrink: 0, marginTop: '6px' }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          ))}
        </div>

        {/* Comfort features grid */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(74,144,164,0.05), rgba(107,168,153,0.07))',
              border: '1.5px solid rgba(74,144,164,0.10)',
              borderRadius: '2rem',
              padding: '3rem 2.5rem',
              marginBottom: '3.5rem',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
              <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#78509b', marginBottom: '0.5rem' }}>
                {t('builtForComfort')}
              </span>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#4A90A4', margin: '0', lineHeight: 1.2 }}>
                {t('everyDetail')}
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.1rem' }}>
              {COMFORT_FEATURES.map(f => (
                <div
                  key={f.label}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                    background: '#fff',
                    borderRadius: '1.25rem',
                    padding: '1rem 1.1rem',
                    boxShadow: '0 2px 12px rgba(74,144,164,0.07)',
                  }}
                >
                  <span style={{ fontSize: '1.4rem', lineHeight: 1, flexShrink: 0 }} aria-hidden="true">{f.icon}</span>
                  <p style={{ fontSize: '1rem', fontWeight: 600, color: '#6b7280', margin: 0, lineHeight: 1.55 }}>{f.label}</p>
                </div>
              ))}
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
                {t('scheduleVisit')}
              </Link>
              <Link
                href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: '#4A90A4', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.95rem', padding: '0.85rem 2rem', borderRadius: '100px', textDecoration: 'none', border: '2px solid rgba(74,144,164,0.3)' }}
              >
                {t('getDirections')}
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .office-flip { direction: rtl; }
          .office-flip > * { direction: ltr; }
        }
        .office-carousel::-webkit-scrollbar { display: none; }
      `}</style>
    </SubPageLayout>
  )
}
