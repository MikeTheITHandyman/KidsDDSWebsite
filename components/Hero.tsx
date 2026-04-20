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

          {/* Location badge */}
          <div className="hero-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Pediatric Dentistry · Grayslake, IL
          </div>

          {/* Headline */}
          <h1>
            A Dental Home for{' '}
            <span className="highlight">Happy Kids</span>
            {' '}in Grayslake.
          </h1>

          {/* Subheadline */}
          <p className="hero-sub">
            Step into our world, where we turn dental visits into big adventures.
            We specialize in exceptional, high-quality pediatric care.
          </p>

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

          {/* Trust signals */}
          <div className="hero-trust">
            <div className="trust-item">
              <div className="trust-dot" aria-hidden="true"/>
              4.9★ Google Rating
            </div>
            <div className="trust-item">
              <div className="trust-dot" aria-hidden="true"/>
              Same-Day Available
            </div>
            <div className="trust-item">
              <div className="trust-dot" aria-hidden="true"/>
              Delta Dental In-Network
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
