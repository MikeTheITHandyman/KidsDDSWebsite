'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/navigation'
import { motion } from 'framer-motion'

interface LanguageSwitcherProps {
  variant?: 'header' | 'hero'
}

function GlobeIcon({ size = 13, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke={color} strokeWidth="2.2"
      strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" style={{ flexShrink: 0 }}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

export default function LanguageSwitcher({ variant = 'header' }: LanguageSwitcherProps) {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [hovered, setHovered] = useState(false)

  const isSpanish = locale === 'es'
  const label = isSpanish ? 'Switch to English' : 'Cambiar a Español'
  const ariaLabel = isSpanish
    ? 'Switch this website to English'
    : 'Cambiar este sitio web al español'

  function handleSwitch() {
    // next-intl's router.replace with { locale } correctly updates the
    // NEXT_LOCALE cookie and navigates to the same page in the new locale,
    // preventing the cookie from overriding the switch on subsequent clicks.
    router.replace(pathname, { locale: isSpanish ? 'en' : 'es' })
  }

  if (variant === 'hero') {
    return (
      <motion.button
        onClick={handleSwitch}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 320, damping: 20, delay: 0.35 }}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.94 }}
        aria-label={ariaLabel}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          background: hovered
            ? 'linear-gradient(135deg, #FF6B18, #FF4A2D)'
            : 'linear-gradient(135deg, #4A90A4, #6BA899)',
          color: '#fff',
          borderRadius: '100px',
          padding: '0.38rem 1rem',
          fontSize: '0.82rem',
          fontWeight: 800,
          fontFamily: 'Nunito, sans-serif',
          letterSpacing: '0.02em',
          boxShadow: hovered
            ? '0 4px 16px rgba(255,107,24,0.35)'
            : '0 4px 14px rgba(74,144,164,0.30)',
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.22s ease, box-shadow 0.22s ease',
        }}
      >
        <GlobeIcon size={13} color="#fff" />
        {label}
      </motion.button>
    )
  }

  return (
    <motion.button
      onClick={handleSwitch}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      aria-label={ariaLabel}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        background: hovered ? '#4A90A4' : 'rgba(74,144,164,0.10)',
        color: hovered ? '#fff' : '#4A90A4',
        border: `1.5px solid ${hovered ? '#4A90A4' : 'rgba(74,144,164,0.30)'}`,
        borderRadius: '100px',
        padding: '0.5rem 1rem',
        fontSize: '0.8rem',
        fontWeight: 800,
        fontFamily: 'Nunito, sans-serif',
        letterSpacing: '0.01em',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease',
      }}
    >
      <GlobeIcon size={13} color={hovered ? '#fff' : '#4A90A4'} />
      {label}
    </motion.button>
  )
}
