'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const springBtn = { type: 'spring', stiffness: 400, damping: 20 } as const

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">

        {/* ── Left: Text Content ── */}
        <div className="hero-content">

          {/* Badges row: location + Hablamos Español */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.4rem' }}>
            <div className="hero-badge" style={{ margin: 0 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Pediatric Dentistry · Grayslake, IL
            </div>

            {/* Hablamos Español bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 320, damping: 20, delay: 0.35 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: 'linear-gradient(135deg, #E8934F, #E97D63)',
                color: '#fff',
                borderRadius: '100px',
                padding: '0.38rem 1rem',
                fontSize: '0.82rem',
                fontWeight: 800,
                fontFamily: 'Nunito, sans-serif',
                letterSpacing: '0.02em',
                boxShadow: '0 4px 14px rgba(232,147,79,0.35)',
              }}
              aria-label="We speak Spanish"
            >
              Hablamos Español
            </motion.div>
          </div>

          {/* Headline */}
          <h1>
            A Dental Home for{' '}
            <span className="highlight">Happy Kids</span>
            {' '}in Grayslake.
          </h1>

          {/* Tagline — below the headline */}
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            High-quality pediatric care that kids actually look forward to.
          </motion.p>

          {/* Trusted 30 years — prominent inline banner */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(74,144,164,0.08)',
              border: '1.5px solid rgba(74,144,164,0.22)',
              borderRadius: '16px',
              padding: '0.6rem 1.1rem',
              marginBottom: '1.5rem',
              fontFamily: 'Nunito, sans-serif',
            }}
          >
            {/* Medal icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A90A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="8" r="6"/>
              <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
            </svg>
            <span style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--brand-600)' }}>
              Trusted by Families for Over 30 Years
            </span>
          </motion.div>

          {/* CTAs */}
          <div className="hero-ctas">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={springBtn}
              style={{ display: 'inline-flex' }}
            >
              <Link href="/request-appointment" className="btn-hero-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="3"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Request Appointment
              </Link>
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
              (847) 223-1400
            </motion.a>
          </div>

          {/* Trust signals — Delta Dental stays prominent */}
          <div className="hero-trust">
            <div className="trust-item">
              <div className="trust-dot" aria-hidden="true"/>
              4.9★ Google Rating
            </div>
            <div className="trust-item">
              <div className="trust-dot" aria-hidden="true"/>
              Same-Day Available
            </div>
            <div className="trust-item" style={{ fontWeight: 800 }}>
              <div className="trust-dot" aria-hidden="true"/>
              Emergency Visits
            </div>
          </div>
        </div>

        {/* ── Right: Organic Image Visual ── */}
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-image-blob">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="hero-video"
              aria-hidden="true"
            >
              <source src="/brand_assets/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-deco-1"/>
          <div className="hero-deco-2"/>
          <div className="hero-deco-3"/>
        </div>

      </div>
    </section>
  )
}
