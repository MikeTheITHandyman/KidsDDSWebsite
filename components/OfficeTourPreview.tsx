'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const FEATURES = [
  {
    key: 0 as const,
    imgSrc: '/brand_assets/office-waiting-room.jpg',
    gradient: 'linear-gradient(135deg, rgba(61,189,189,0.18) 0%, rgba(107,75,200,0.12) 100%)',
  },
  {
    key: 1 as const,
    imgSrc: '/brand_assets/office-treatment-bay.jpg',
    gradient: 'linear-gradient(135deg, rgba(107,75,200,0.12) 0%, rgba(61,189,189,0.22) 100%)',
  },
]

function TourImageCard({
  feature,
  delay,
  headingKey,
  bodyKey,
  altKey,
}: {
  feature: (typeof FEATURES)[number]
  delay: number
  headingKey: string
  bodyKey: string
  altKey: string
}) {
  const t = useTranslations('about')
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    >
      {/* Image block */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4 / 3',
          borderRadius: '1.75rem',
          overflow: 'hidden',
          background: feature.gradient,
          marginBottom: '1.35rem',
        }}
      >
        {!imgFailed && (
          <Image
            src={feature.imgSrc}
            alt={t(altKey as Parameters<typeof t>[0])}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            onError={() => setImgFailed(true)}
          />
        )}
        {/* Photo coming soon overlay — shown while gradient is the visual */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            pointerEvents: 'none',
            opacity: imgFailed ? 1 : 0.65,
            transition: 'opacity 0.2s',
          }}
        >
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="rgba(107,75,200,0.38)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.68rem', fontWeight: 700, color: 'rgba(107,75,200,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Photo Coming Soon
          </span>
        </div>
      </div>

      {/* Caption */}
      <h3
        style={{
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 900,
          fontSize: '1.1rem',
          color: 'var(--brand-purple)',
          margin: '0 0 0.6rem',
          lineHeight: 1.3,
        }}
      >
        {t(headingKey as Parameters<typeof t>[0])}
      </h3>
      <p
        style={{
          fontSize: '0.93rem',
          fontWeight: 500,
          color: '#374151',
          lineHeight: 1.75,
          margin: 0,
        }}
      >
        {t(bodyKey as Parameters<typeof t>[0])}
      </p>
    </motion.div>
  )
}

export default function OfficeTourPreview() {
  const t = useTranslations('about')

  return (
    <div
      style={{
        background: 'var(--bg-teal-tint)',
        width: 'calc(100% + 2rem)',
        marginLeft: '-1rem',
        marginRight: '-1rem',
        padding: 'clamp(3.5rem, 7vw, 5.5rem) clamp(1.25rem, 5vw, 4rem)',
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <span className="section-kicker">{t('tourKicker')}</span>
          <h2
            style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(1.85rem, 3.5vw, 2.45rem)',
              fontWeight: 900,
              color: 'var(--brand-purple)',
              lineHeight: 1.2,
              margin: '0.65rem auto 1rem',
              maxWidth: '580px',
            }}
          >
            {t('tourHeading')}
          </h2>
          <p
            style={{
              fontSize: '1rem',
              fontWeight: 500,
              color: '#374151',
              lineHeight: 1.75,
              maxWidth: '580px',
              margin: '0 auto',
            }}
          >
            {t('tourBody')}
          </p>
        </motion.div>

        {/* Two whileInView slide-up image + description blocks */}
        <div
          className="tour-preview-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.75rem',
            marginBottom: '2.5rem',
          }}
        >
          {FEATURES.map((feature) => (
            <TourImageCard
              key={feature.key}
              feature={feature}
              delay={feature.key * 0.15}
              headingKey={`tourFeature${feature.key}Heading`}
              bodyKey={`tourFeature${feature.key}Body`}
              altKey={`tourFeature${feature.key}Alt`}
            />
          ))}
        </div>

        {/* Full tour link */}
        <div style={{ textAlign: 'center' }}>
          <Link
            href="/about/tour-our-office"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--brand-purple)',
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 800,
              fontSize: '0.92rem',
              textDecoration: 'none',
              borderBottom: '2px solid rgba(107,75,200,0.28)',
              paddingBottom: '2px',
            }}
          >
            {t('tourLink')}
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

      </div>

      <style>{`
        @media (max-width: 600px) {
          .tour-preview-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
