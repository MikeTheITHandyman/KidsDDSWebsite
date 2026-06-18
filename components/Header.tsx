'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { sendGAEvent } from '@next/third-parties/google'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from '@/components/LanguageSwitcher'

interface NavChild {
  label: string
  href: string
}

interface NavEntry {
  label: string
  href: string
  children?: NavChild[]
}

const linkStyle: React.CSSProperties = {
  color: 'var(--muted-700)',
  fontWeight: 600,
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'color 0.3s',
  fontFamily: 'Nunito, sans-serif',
}

function NavItem({ item }: { item: NavEntry }) {
  const [open, setOpen] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const onEnter = () => {
    if (timer.current) clearTimeout(timer.current)
    setOpen(true)
  }
  const onLeave = () => {
    timer.current = setTimeout(() => setOpen(false), 130)
  }

  if (!item.children) {
    return (
      <a href={item.href} style={linkStyle} className="nav-link-hover">
        {item.label}
      </a>
    )
  }

  return (
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
        <svg
          width="11" height="11" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5"
          style={{ transition: 'transform 0.2s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            style={{
              position: 'absolute', top: '100%', left: 0, marginTop: '10px',
              zIndex: 1050, minWidth: '210px', transformOrigin: 'top left',
              background: 'rgba(253,248,242,0.97)', backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              border: '1px solid rgba(74,144,164,0.14)', borderRadius: '1rem',
              boxShadow: '0 8px 32px rgba(74,144,164,0.18), 0 2px 8px rgba(0,0,0,0.08)',
            }}
            className="overflow-hidden"
          >
            {item.children.map((child) => (
              <a
                key={child.href}
                href={child.href}
                style={{ display: 'block', padding: '11px 18px', fontSize: '0.875rem', fontWeight: 600, color: '#4b5563', textDecoration: 'none', fontFamily: 'Nunito, sans-serif', transition: 'background 0.15s, color 0.15s', whiteSpace: 'nowrap' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(74,144,164,0.06)'; e.currentTarget.style.color = '#4A90A4' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '#4b5563' }}
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
  const pathname = usePathname()
  const isStudio = pathname?.startsWith('/studio')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const t = useTranslations('nav')

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 50))
  useEffect(() => { setMenuOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const NAV: NavEntry[] = [
    { label: t('home'), href: '/' },
    {
      label: t('about'),
      href: '/about',
      children: [
        { label: t('aboutUs'), href: '/about' },
        { label: t('meetDentists'), href: '/about/meet-the-dentists' },
        { label: t('meetTeam'), href: '/about/meet-the-team' },
        { label: t('tourOffice'), href: '/about/tour-our-office' },
        { label: t('recentEvents'), href: '/about/recent-events' },
      ],
    },
    {
      label: t('services'),
      href: '/services',
      children: [
        { label: t('allServices'), href: '/services' },
        { label: t('preventive'), href: '/services/preventive-dentistry' },
        { label: t('restorative'), href: '/services/restorative' },
        { label: t('specialNeeds'), href: '/services/special-needs' },
        { label: t('sedation'), href: '/services/sedation-dentistry' },
        { label: t('emergency'), href: '/services/emergency' },
      ],
    },
    {
      label: t('forPatients'),
      href: '/for-patients',
      children: [
        { label: t('firstVisit'), href: '/for-patients/child-first-visit' },
        { label: t('insurance'), href: '/for-patients/insurance-info' },
      ],
    },
    { label: t('faq'), href: '/faq' },
    { label: t('blog'), href: '/blog' },
    { label: t('contact'), href: '/contact' },
  ]

  return (
    <>
      {/* Announcement banner */}
      {!isStudio && (
        <div
          style={{
            background: 'linear-gradient(90deg, #FF6B18 0%, #FF9A00 100%)',
            color: 'white', textAlign: 'center', padding: '0.48rem 1rem',
            fontSize: '0.8rem', fontFamily: 'Nunito, sans-serif',
            fontWeight: 700, letterSpacing: '0.015em',
            zIndex: 1100, position: 'relative',
          }}
        >
          <a
            href="/blog"
            style={{ color: 'white', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', opacity: 0.97 }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm1 14.93V15a1 1 0 00-2 0v1.93A8.001 8.001 0 014.07 11H5a1 1 0 000-2h-.93A8.001 8.001 0 0111 4.07V5a1 1 0 002 0v-.93A8.001 8.001 0 0119.93 9H19a1 1 0 000 2h.93A8.001 8.001 0 0113 16.93z"/>
            </svg>
            {t('announcement')} &nbsp;&rsaquo;
          </a>
        </div>
      )}

      <motion.header
        className="site-header"
        animate={{
          backgroundColor: scrolled ? 'rgba(253,248,242,1)' : 'rgba(253,248,242,0.95)',
          boxShadow: scrolled
            ? '0 4px 24px rgba(74,144,164,0.10), 0 1px 4px rgba(0,0,0,0.06)'
            : '0 0px 0px rgba(0,0,0,0)',
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <div className="header-inner">
          <Link href="/" className="brand-logo" aria-label="Kids Dentist - go to homepage">
            <Image
              src="/brand_assets/kids-dentist-logo.png"
              alt="Kids Dentist Grayslake IL logo"
              width={189} height={104}
              style={{ width: 'auto', height: '72px' }}
              unoptimized priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="site-nav" aria-label="Main navigation">
            {NAV.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
          </nav>

          {/* Desktop CTA buttons */}
          <div className="header-actions">
            <LanguageSwitcher variant="header" />
            <motion.a
              href="tel:+18472231400"
              className="btn btn-secondary"
              onClick={() => sendGAEvent('event', 'call_click', { location: 'header_desktop' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginRight: '0.4rem', flexShrink: 0 }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 9.8 19.79 19.79 0 0 1 1 1.18 2 2 0 0 1 2.82 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.91 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
              </svg>
              {t('callNumber')}
            </motion.a>
            <motion.a
              href="https://www.google.com/maps/dir/?api=1&destination=160+Commerce+Drive,+Grayslake,+IL+60030"
              target="_blank" rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              {t('directions')}
            </motion.a>
          </div>

          {/* Hamburger - mobile only */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? t('closeMenu') : t('openMenu')}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span className={`hamburger-icon ${menuOpen ? 'is-open' : ''}`} aria-hidden="true">
              <span /><span /><span />
            </span>
          </button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              style={{ overflow: 'hidden' }}
              aria-label="Mobile navigation"
            >
              <div className="mobile-nav-inner">
                {NAV.map((item) => (
                  <div key={item.href} className="mobile-nav-group">
                    <a href={item.href} className="mobile-nav-parent" onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </a>
                    {item.children && (
                      <div className="mobile-nav-children">
                        {item.children.map((child) => (
                          <a key={child.href} href={child.href} className="mobile-nav-child" onClick={() => setMenuOpen(false)}>
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* CTAs at bottom of mobile menu */}
                <div className="mobile-nav-ctas">
                  <div onClick={() => setMenuOpen(false)} style={{ display: 'flex' }}>
                    <LanguageSwitcher variant="header" />
                  </div>
                  <a
                    href="tel:+18472231400"
                    className="mobile-nav-cta-call"
                    onClick={() => { setMenuOpen(false); sendGAEvent('event', 'call_click', { location: 'header_mobile' }) }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 9.8 19.79 19.79 0 0 1 1 1.18 2 2 0 0 1 2.82 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.91 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
                    </svg>
                    {t('callNumber')}
                  </a>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=160+Commerce+Drive,+Grayslake,+IL+60030"
                    target="_blank" rel="noopener noreferrer"
                    className="mobile-nav-cta-directions"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t('directions')}
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      <style>{`
        .nav-link-hover:hover { color: var(--brand-600) !important; }

        .mobile-menu-btn { display: none; background: none; border: none; cursor: pointer; padding: 8px; border-radius: 10px; transition: background 0.2s; flex-shrink: 0; margin-left: auto; }
        .mobile-menu-btn:hover { background: rgba(74,144,164,0.08); }
        .hamburger-icon { display: flex; flex-direction: column; gap: 5px; width: 22px; }
        .hamburger-icon span { display: block; height: 2px; width: 22px; background: var(--muted-700); border-radius: 2px; transition: transform 0.25s ease, opacity 0.2s ease; transform-origin: center; }
        .hamburger-icon.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger-icon.is-open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger-icon.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .mobile-nav-inner { padding: 0.75rem 1.25rem 1.25rem; border-top: 1px solid rgba(74,144,164,0.12); display: flex; flex-direction: column; gap: 0.1rem; max-height: calc(100svh - 80px); overflow-y: auto; }
        .mobile-nav-group { display: flex; flex-direction: column; }
        .mobile-nav-parent { font-family: Nunito, sans-serif; font-weight: 800; font-size: 1rem; color: var(--brand-600); text-decoration: none; padding: 0.65rem 0.5rem 0.35rem; }
        .mobile-nav-parent:hover { color: var(--accent-500); }
        .mobile-nav-children { display: flex; flex-direction: column; padding-left: 1rem; border-left: 2px solid rgba(74,144,164,0.15); margin-left: 0.5rem; margin-bottom: 0.4rem; }
        .mobile-nav-child { font-family: Nunito, sans-serif; font-weight: 600; font-size: 0.9rem; color: #6b7280; text-decoration: none; padding: 0.45rem 0.75rem; }
        .mobile-nav-child:hover { color: var(--brand-600); }
        .mobile-nav-ctas { display: flex; flex-direction: column; gap: 0.65rem; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(74,144,164,0.12); }
        .mobile-nav-cta-call, .mobile-nav-cta-directions { display: inline-flex; align-items: center; justify-content: center; gap: 0.45rem; border-radius: 100px; padding: 0.85rem 1.5rem; font-family: Nunito, sans-serif; font-weight: 800; font-size: 0.95rem; text-decoration: none; transition: opacity 0.2s; width: 100%; }
        .mobile-nav-cta-call { background: rgba(128,210,245,0.12); color: var(--brand-purple); border: 1.5px solid rgba(120,80,155,0.28); }
        .mobile-nav-cta-directions { background: linear-gradient(135deg, var(--accent-500), #E97D63); color: white; border: none; }
        .mobile-nav-cta-call:hover, .mobile-nav-cta-directions:hover { opacity: 0.88; }

        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex; align-items: center; justify-content: center; }
          .header-inner { flex-direction: row !important; justify-content: space-between; align-items: center; padding: 0.875rem 1.25rem !important; gap: 0 !important; }
          .site-nav { display: none !important; }
          .header-actions { display: none !important; }
        }
      `}</style>
    </>
  )
}
