'use client'

import { motion } from 'framer-motion'

const HOSTEDPAYNOW_URL = 'https://hostedpaynow.com/v2/paynowapp/processpayment'
const TOKEN = '9ec06785636346c290a5a30375d1d3af@=1328f97b14f431bdea8caaaf4f1da76f8a2bb1fe691be4d69503d020bd502c3e'

export default function PayNowForm() {
  return (
    <form
      action={HOSTEDPAYNOW_URL}
      method="post"
      target="_top"
      style={{ display: 'inline-flex' }}
    >
      <input type="hidden" name="cmd" value="_xclick" />
      <input type="hidden" name="tokenuid" value={TOKEN} />
      <motion.button
        name="submit"
        type="submit"
        whileHover={{ scale: 1.04, y: -3 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.6rem',
          background: 'linear-gradient(135deg, #E8934F 0%, #E97D63 100%)',
          color: '#fff',
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 800,
          fontSize: '1.05rem',
          padding: '1rem 2.5rem',
          borderRadius: '100px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 6px 28px rgba(232,147,79,0.40)',
          letterSpacing: '0.01em',
        }}
      >
        <svg
          width="17" height="17" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
        Pay My Bill Securely
        <svg
          width="15" height="15" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 5l7 7-7 7"/>
        </svg>
      </motion.button>
    </form>
  )
}
