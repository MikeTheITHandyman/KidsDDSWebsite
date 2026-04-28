'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingWidget() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 800)
    return () => clearTimeout(timer)
  }, [])

  if (pathname?.startsWith('/studio')) return null

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 340, damping: 28, mass: 0.9 }}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 1200,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '10px',
          }}
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
        >
          {/* Expandable phone option */}
          <AnimatePresence>
            {expanded && (
              <motion.a
                href="tel:8472231400"
                initial={{ opacity: 0, y: 12, scale: 0.88 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.88 }}
                transition={{ type: 'spring', stiffness: 400, damping: 26 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  background: 'white',
                  color: 'var(--brand-600)',
                  border: '1.5px solid rgba(74,144,164,0.25)',
                  borderRadius: '100px',
                  padding: '0.65rem 1.25rem',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(74,144,164,0.18)',
                  whiteSpace: 'nowrap',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                </svg>
                (847) 223-1400
              </motion.a>
            )}
          </AnimatePresence>

          {/* Primary CTA pill */}
          <motion.a
            href="/request-appointment"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 380, damping: 22 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, var(--accent-500) 0%, var(--cta-coral) 100%)',
              color: 'white',
              borderRadius: '100px',
              padding: '0.85rem 1.6rem',
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 800,
              fontSize: '0.95rem',
              textDecoration: 'none',
              boxShadow: '0 8px 28px rgba(232,147,79,0.48)',
              whiteSpace: 'nowrap',
            }}
            aria-label="Request an appointment"
          >
            {/* Calendar icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Request Appointment
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
