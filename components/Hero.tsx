'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import LanguageSwitcher from '@/components/LanguageSwitcher'

const springBtn = { type: 'spring', stiffness: 400, damping: 20 } as const

export default function Hero() {
  return (
    <section className="hero overflow-x-hidden">
      <div className="hero-outer">
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
              Pediatric Dentistry · Grayslake &amp; Lake County, IL
            </div>

            <LanguageSwitcher variant="hero" />
          </div>

          {/* Headline */}
          <h1>
            Grayslake&apos;s{' '}
            <span className="highlight">Pediatric Dentist</span>
            {' '}Since 1994.
          </h1>

          {/* Tagline */}
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            High-quality pediatric and children&apos;s dental care that kids actually look forward to — serving families throughout Lake County.
          </motion.p>

          {/* Trusted 30 years banner */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="hero-trust-banner"
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
              maxWidth: '100%',
              boxSizing: 'border-box',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A90A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="8" r="6"/>
              <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
            </svg>
            <span style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--brand-600)' }}>
              Serving Lake County for Over 30 Years · Est. 1994
            </span>
          </motion.div>

          {/* CTAs */}
          <div className="hero-ctas flex flex-col sm:flex-row gap-4 items-start">
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
              Text/Call us: (847) 223-1400
            </motion.a>
          </div>

        </div>

        {/* ── Right: Video ── */}
        <div className="hero-right-col">

          {/* Video blob — decorative */}
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
                <source
                  src="/brand_assets/hero-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="hero-deco-1 hidden md:block"/>
            <div className="hero-deco-2 hidden md:block"/>
            <div className="hero-deco-3 hidden md:block"/>
          </div>

        </div>

      </div>

      </div>{/* end hero-outer */}

      <style>{`
        /* Tighten hero section bottom padding */
        .hero {
          padding-top: 0.25in;
          padding-bottom: 2.5rem;
        }

        /* Button row: allow wrap so buttons never burst out of narrow screens */
        .hero .hero-ctas {
          flex-wrap: wrap;
          margin-bottom: 0;
        }
        @media (max-width: 639px) {
          .hero .hero-ctas {
            flex-direction: column;
            align-items: flex-start;
          }
          /* Let button text wrap on very small screens instead of overflowing */
          .hero .btn-hero-primary,
          .hero .btn-hero-call {
            white-space: normal;
            text-align: left;
          }
          /* Trust banner: fill width and let text wrap naturally */
          .hero .hero-trust-banner {
            display: flex;
            width: 100%;
          }
          .hero .hero-trust-banner span {
            white-space: normal;
          }
        }
        @media (min-width: 640px) {
          .hero .hero-ctas {
            flex-direction: row;
            align-items: center;
          }
        }

        /* Outer wrapper: clips any child that escapes the grid on narrow screens */
        .hero-outer {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          position: relative;
          z-index: 2;
        }

        /* Right column: video only */
        .hero-right-col {
          display: flex;
          flex-direction: column;
          min-width: 0;
          max-width: 100%;
        }

        /* Ensure video blob never bursts its container */
        .hero-image-blob {
          max-width: 100%;
        }

        /* Scale the video blob ~25% larger on desktop; section overflow:hidden clips the bleed */
        @media (min-width: 1024px) {
          .hero-visual {
            transform: scale(1.25);
            transform-origin: center center;
          }
        }

      `}</style>
    </section>
  )
}
