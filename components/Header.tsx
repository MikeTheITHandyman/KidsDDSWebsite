'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'

const NAV = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Meet the Dentists', href: '/about/meet-the-dentists' },
      { label: 'Tour Our Office', href: '/about/tour-our-office' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'All Services', href: '/services' },
      { label: 'Preventive Dentistry', href: '/services/preventive-dentistry' },
      { label: 'Sedation Dentistry', href: '/services/sedation-dentistry' },
    ],
  },
  {
    label: 'For Patients',
    href: '/for-patients',
    children: [
      { label: "Child's First Visit", href: '/for-patients/child-first-visit' },
      { label: 'Insurance & Financing', href: '/for-patients/insurance-info' },
    ],
  },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const linkStyle: React.CSSProperties = {
  color: 'var(--muted-700)',
  fontWeight: 600,
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'color 0.3s',
  fontFamily: 'Nunito, sans-serif',
}

function NavItem({ item }: { item: (typeof NAV)[0] }) {
  const [open, setOpen] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const onEnter = () => {
    if (timer.current) clearTimeout(timer.current)
    setOpen(true)
  }
  const onLeave = () => {
    timer.current = setTimeout(() => setOpen(false), 130)
  }

  if (!('children' in item) || !item.children) {
    return (
      <a href={item.href} style={linkStyle} className="nav-link-hover">
        {item.label}
      </a>
    )
  }

  return (
    // Key fix: display:flex + alignItems:center so this div behaves identically
    // to the plain <a> siblings inside the site-nav flexbox row.
    <div
      style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <a
        href={item.href}
        style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '3px' }}
        className="nav-link-hover"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.label}
        {/* Plain SVG — no motion here so it can't affect parent layout */}
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          style={{
            transition: 'transform 0.2s ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            flexShrink: 0,
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>

      <AnimatePresence>
        {open && (
          <motion.div
            // No scale — only opacity + y so the element never temporarily
            // occupies a different footprint that could shift surrounding elements.
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            // Inline style for position so Tailwind cascade can't override it.
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              marginTop: '10px',
              zIndex: 1001,
              minWidth: '210px',
              transformOrigin: 'top left',
            }}
            className="overflow-hidden rounded-2xl border border-[#4A90A4]/10 bg-white shadow-[0_8px_32px_rgba(74,144,164,0.16)]"
          >
            {item.children.map((child) => (
              <a
                key={child.href}
                href={child.href}
                style={{
                  display: 'block',
                  padding: '11px 18px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#4b5563',
                  textDecoration: 'none',
                  fontFamily: 'Nunito, sans-serif',
                  transition: 'background 0.15s, color 0.15s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(74,144,164,0.06)'
                  e.currentTarget.style.color = '#4A90A4'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = ''
                  e.currentTarget.style.color = '#4b5563'
                }}
              >
                {child.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

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

        <nav className="site-nav" aria-label="Main navigation">
          {NAV.map((item) => (
            <NavItem key={item.href} item={item} />
          ))}
        </nav>

        <div className="header-actions">
          <motion.a
            href="tel:+18472231400"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginRight: '0.4rem', flexShrink: 0 }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 9.8 19.79 19.79 0 0 1 1 1.18 2 2 0 0 1 2.82 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.91 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
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

      <style>{`
        .nav-link-hover:hover { color: var(--brand-600) !important; }
      `}</style>
    </motion.header>
  )
}
