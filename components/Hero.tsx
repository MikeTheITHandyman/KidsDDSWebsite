'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from '@/components/LanguageSwitcher'

const springBtn = { type: 'spring', stiffness: 400, damping: 20 } as const

export default function Hero() {
  const t = useTranslations('hero')
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section className="hero relative isolate overflow-hidden">

      {/*
        NOTE: Tailwind v4 is now installed and compiling (see styles/global.css),
        so the `className` utility strings below are live. The inline `style`
        fallbacks are kept anyway — they were added when Tailwind wasn't wired up
        and removing them isn't necessary for this to render correctly.
      */}

      {/* ── Full-bleed background video ──
          Source comes from NEXT_PUBLIC_HERO_VIDEO_URL, which resolves
          differently per environment: netlify.toml sets it to a Cloudinary
          URL for production (proper video CDN — adaptive quality, real
          Range-request/streaming support), while .env.local overrides it to
          the local /brand_assets/hero-video.mp4 for dev. Do not hardcode a
          local path here — this exact class of bug (video unreliable for
          some visitors when served as a plain Netlify static asset) already
          happened once in this project's history (see commit 2819701) and
          was fixed the same way. */}
      <video
        ref={videoRef}
        src={
          process.env.NEXT_PUBLIC_HERO_VIDEO_URL ||
          'https://res.cloudinary.com/dkrbvqzlw/video/upload/q_auto:low,w_1280/v1777343603/hero-video_oznoe1.mp4'
        }
        poster="/brand_assets/hero-photo.jpg"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover -z-20"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -20,
        }}
      />

      {/* ── Readability overlay ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/20 -z-10"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: -10,
          backgroundColor: 'rgba(0,0,0,0.2)',
        }}
      />

      <div
        className="hero-outer relative z-10 w-full container mx-auto"
        style={{ position: 'relative', zIndex: 10, width: '100%' }}
      >
      <div className="hero-inner">

        {/* ── Text Content (overlaid on the video) ── */}
        <div className="hero-content">

          {/* Badges row: location + language switcher */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.4rem' }}>
            <div className="hero-badge" style={{ margin: 0 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {t('badgeLocation')}
            </div>

            <LanguageSwitcher variant="hero" />
          </div>

          {/* Headline */}
          <h1>
            {t('headlinePrefix')}{' '}
            <span className="highlight">{t('headlineHighlight')}</span>
            {' '}{t('headlineSuffix')}
          </h1>

          {/* Tagline */}
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            {t('tagline')}
          </motion.p>

        </div>

      </div>
      </div>{/* end hero-outer */}

      {/* ── Top-right corner group: trust banner + call CTA (bottom, full-width on mobile) ── */}
      <div className="hero-corner">
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="hero-trust-banner"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'rgba(255,255,255,0.12)',
            border: '1.5px solid rgba(255,255,255,0.32)',
            borderRadius: '16px',
            padding: '0.6rem 1.1rem',
            fontFamily: 'Nunito, sans-serif',
            maxWidth: '100%',
            boxSizing: 'border-box',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cta-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="8" r="6"/>
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
          </svg>
          <span style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--cta-yellow)' }}>
            {t('trustBanner')}
          </span>
        </motion.div>

        <motion.a
          href="tel:+18472231400"
          className="btn-hero-call"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={springBtn}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 9.8 19.79 19.79 0 0 1 1 1.18 2 2 0 0 1 2.82 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.91 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
          </svg>
          {t('ctaCall')}
        </motion.a>
      </div>

      <style>{`
        .hero {
          padding-top: 0;
          padding-bottom: 0;
          min-height: 74vh;
          background: #140C28;
          position: relative;
          isolation: isolate;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .hero { min-height: 90vh; }
        }
        .hero-corner {
          position: absolute;
          top: 4rem;
          right: 2.5rem;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
          max-width: 320px;
        }
        @media (max-width: 768px) {
          /* Below this width, hero-corner drops out of absolute positioning and
             flows in-document right after the text column — pinning it to the
             hero's bottom edge would collide with FloatingWidget.tsx's fixed
             bottom-right CTA pill on initial page load. */
          .hero { flex-direction: column; align-items: stretch; }
          .hero-corner {
            position: static;
            max-width: none;
            align-items: stretch;
            margin: 0 1.5rem 2rem;
          }
          .hero .btn-hero-call { white-space: normal; text-align: left; justify-content: center; }
          .hero .hero-trust-banner { display: flex; width: 100%; box-sizing: border-box; }
          .hero .hero-trust-banner span { white-space: normal; }
        }
        .hero-outer { display: flex; flex-direction: column; width: 100%; overflow-x: hidden; position: relative; z-index: 10; }
        .hero .hero-inner {
          display: block;
          max-width: 680px;
          width: 100%;
          margin: 0;
          padding: 4rem 2.5rem;
          text-align: left;
        }
        @media (max-width: 768px) {
          .hero .hero-inner { padding: 3.5rem 1.5rem; }
        }
        .hero .hero-badge {
          color: #fff;
          background: rgba(255,255,255,0.14);
          border-color: rgba(255,255,255,0.35);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .hero .hero-content h1 {
          color: #fff;
          text-shadow: 0 2px 20px rgba(0,0,0,0.35);
        }
        .hero .hero-sub {
          color: rgba(255,255,255,0.92);
          text-shadow: 0 1px 14px rgba(0,0,0,0.30);
        }
        .hero .btn-hero-call {
          color: #fff;
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.55);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .hero .btn-hero-call:hover {
          background: rgba(255,255,255,0.22);
          border-color: #fff;
        }
      `}</style>
    </section>
  )
}
