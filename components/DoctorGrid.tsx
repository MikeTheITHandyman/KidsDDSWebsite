'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { useTranslations } from 'next-intl'

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 55, damping: 14 },
  },
}

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

// Organic pebble-shapes for headshot borders — each doctor gets a distinct silhouette
const BLOB_RADII = [
  '60% 40% 55% 45% / 45% 55% 40% 60%',
  '40% 60% 45% 55% / 60% 40% 55% 45%',
  '55% 45% 60% 40% / 50% 50% 40% 60%',
  '45% 55% 40% 60% / 55% 45% 60% 40%',
]

// Soft gradient fills shown while headshots are pending
const HEADSHOT_GRADIENTS = [
  'linear-gradient(135deg, #EAE5F7 0%, rgba(107,75,200,0.30) 100%)',
  'linear-gradient(135deg, #E6F6F6 0%, rgba(61,189,189,0.35) 100%)',
  'linear-gradient(135deg, #EAE5F7 0%, rgba(255,107,138,0.22) 100%)',
  'linear-gradient(135deg, #E6F6F6 0%, rgba(107,75,200,0.22) 100%)',
]

interface DoctorCardProps {
  headshotSrc: string
  name: string
  role: string
  bio: string
  alt: string
  blobRadius: string
  gradient: string
}

function DoctorCard({ headshotSrc, name, role, bio, alt, blobRadius, gradient }: DoctorCardProps) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -6,
        boxShadow: '0 24px 54px rgba(107,75,200,0.18)',
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: 'var(--bg-lavender)',
        borderRadius: '1.75rem',
        padding: '2rem 1.75rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* Headshot — organic blob border, gradient fallback until Sara's photos arrive */}
      <div
        style={{
          width: 148,
          height: 148,
          borderRadius: blobRadius,
          background: gradient,
          overflow: 'hidden',
          position: 'relative',
          marginBottom: '1.35rem',
          flexShrink: 0,
        }}
      >
        {!imgFailed && (
          <Image
            src={headshotSrc}
            alt={alt}
            fill
            sizes="148px"
            style={{ objectFit: 'cover' }}
            onError={() => setImgFailed(true)}
          />
        )}
        {/* Placeholder icon shown until headshot loads */}
        <svg
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(107,75,200,0.35)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: imgFailed ? 1 : 0,
            transition: 'opacity 0.2s',
            pointerEvents: 'none',
          }}
        >
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </div>

      {/* Name */}
      <h3
        style={{
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 900,
          fontSize: '1.08rem',
          color: 'var(--brand-purple)',
          margin: '0 0 0.55rem',
          lineHeight: 1.25,
        }}
      >
        {name}
      </h3>

      {/* Role badge */}
      <span
        style={{
          display: 'inline-block',
          background: 'var(--accent-pink)',
          color: '#fff',
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 800,
          fontSize: '0.68rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          borderRadius: '100px',
          padding: '0.26rem 0.85rem',
          marginBottom: '1rem',
        }}
      >
        {role}
      </span>

      {/* Bio */}
      <p
        style={{
          fontSize: '0.88rem',
          fontWeight: 500,
          color: '#4b5563',
          lineHeight: 1.75,
          margin: 0,
        }}
      >
        {bio}
      </p>
    </motion.article>
  )
}

export default function DoctorGrid() {
  const t = useTranslations('about')

  return (
    <section aria-labelledby="doctors-heading">
      {/* Section header */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        style={{ textAlign: 'center', marginBottom: '2.75rem' }}
      >
        <span className="section-kicker">{t('doctorsKicker')}</span>
        <h2
          id="doctors-heading"
          style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(1.85rem, 3.5vw, 2.45rem)',
            fontWeight: 900,
            color: 'var(--brand-purple)',
            lineHeight: 1.2,
            margin: '0.65rem auto 1rem',
            maxWidth: '520px',
          }}
        >
          {t('doctorsHeading')}
        </h2>
        <p
          style={{
            fontSize: '1rem',
            fontWeight: 500,
            color: '#4b5563',
            lineHeight: 1.75,
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          {t('doctorsBody')}
        </p>
      </motion.div>

      {/* 2×2 stagger grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="doctor-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.25rem',
        }}
      >
        <DoctorCard
          headshotSrc="/brand_assets/headshot-sonia.jpg"
          name={t('soniaName')}
          role={t('soniaRole')}
          bio={t('soniaBio')}
          alt={t('soniaAlt')}
          blobRadius={BLOB_RADII[0]}
          gradient={HEADSHOT_GRADIENTS[0]}
        />
        <DoctorCard
          headshotSrc="/brand_assets/headshot-dave.jpg"
          name={t('daveName')}
          role={t('daveRole')}
          bio={t('daveBio')}
          alt={t('daveAlt')}
          blobRadius={BLOB_RADII[1]}
          gradient={HEADSHOT_GRADIENTS[1]}
        />
        <DoctorCard
          headshotSrc="/brand_assets/headshot-sahar.jpg"
          name={t('saharName')}
          role={t('saharRole')}
          bio={t('saharBio')}
          alt={t('saharAlt')}
          blobRadius={BLOB_RADII[2]}
          gradient={HEADSHOT_GRADIENTS[2]}
        />
        <DoctorCard
          headshotSrc="/brand_assets/headshot-anne-ashley.jpg"
          name={t('anneAshleyName')}
          role={t('anneAshleyRole')}
          bio={t('anneAshleyBio')}
          alt={t('anneAshleyAlt')}
          blobRadius={BLOB_RADII[3]}
          gradient={HEADSHOT_GRADIENTS[3]}
        />
      </motion.div>

      <style>{`
        @media (max-width: 600px) {
          .doctor-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
