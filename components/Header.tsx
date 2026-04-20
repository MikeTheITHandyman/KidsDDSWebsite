'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 50))

  return (
    <motion.header
      className="site-header"
      animate={{
        backgroundColor: scrolled ? 'rgba(250,250,248,1)' : 'rgba(250,250,248,0.95)',
        boxShadow: scrolled
          ? '0 4px 24px rgba(74,144,164,0.10), 0 1px 4px rgba(0,0,0,0.06)'
          : '0 0px 0px rgba(0,0,0,0)',
      }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="header-inner">

        {/* Logo — links home */}
        <Link href="/" className="brand-logo" aria-label="Kids Dentist — go to homepage">
          <Image
            src="/brand_assets/kids-dentist-logo.png"
            alt="Kids Dentist Grayslake IL logo"
            width={189}
            height={104}
            style={{ width: 'auto', height: '72px' }}
            unoptimized
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="site-nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/for-patients">For Patients</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <motion.a
            href="tel:+18472231400"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginRight: '0.4rem', flexShrink: 0 }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 9.8 19.79 19.79 0 0 1 1 1.18 2 2 0 0 1 2.82 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.91 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
            </svg>
            Call (847) 223-1400
          </motion.a>
          <motion.a
            href="/request-appointment"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Request Appointment
          </motion.a>
        </div>

      </div>
    </motion.header>
  )
}
