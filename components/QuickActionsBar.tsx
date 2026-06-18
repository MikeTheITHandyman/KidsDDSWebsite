'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

function downloadVCard() {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Kids Dentist',
    'ORG:Kids Dentist',
    'TEL;TYPE=WORK,VOICE:+18472231400',
    'ADR;TYPE=WORK:;;160 Commerce Dr #100;Grayslake;IL;60030;USA',
    'URL:https://www.kidsdds.com',
    'EMAIL:info@kidsdds.com',
    'NOTE:Pediatric Dentist serving Grayslake and Lake County, IL',
    'END:VCARD',
  ]
  const blob = new Blob([lines.join('\r\n')], { type: 'text/vcard' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'kids-dentist-grayslake.vcf'
  a.click()
  URL.revokeObjectURL(url)
}

// Suppress unused warning — kept for future use
void downloadVCard

export default function QuickActionsBar() {
  const t = useTranslations('quickActions')

  return (
    <div
      style={{
        margin: '0 -1rem',
        background: 'linear-gradient(180deg, #ffffff 0%, #fafaf8 100%)',
        borderBottom: '1.5px solid rgba(74,144,164,0.12)',
        paddingTop: '0.25in',
        paddingBottom: '0.5rem',
      }}
    >
      <div
        className="flex flex-row flex-wrap gap-3 justify-center md:justify-end px-4 md:px-8 py-2"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >

        {/* Emergency */}
        <Link
          href="/services/emergency"
          className="qa-btn qa-emergency"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            background: 'linear-gradient(135deg, #c81f1f 0%, #e53535 100%)',
            color: '#fff',
            borderRadius: '100px',
            padding: '0.45rem 0.9rem',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 900,
            fontSize: '0.78rem',
            textDecoration: 'none',
            letterSpacing: '0.01em',
            boxShadow: '0 3px 12px rgba(220,38,38,0.28)',
            transition: 'all 0.2s cubic-bezier(0.25,0.46,0.45,0.94)',
            whiteSpace: 'nowrap',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          {t('emergency')}
        </Link>

        {/* Ask the Doctor */}
        <Link
          href="/ask-the-doctor"
          className="qa-btn qa-doctor"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            background: 'rgba(255,255,255,0.55)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            color: '#4b5563',
            border: '1px solid rgba(209,213,219,0.5)',
            borderRadius: '100px',
            padding: '0.45rem 0.9rem',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 600,
            fontSize: '0.78rem',
            textDecoration: 'none',
            letterSpacing: '0.01em',
            transition: 'all 0.2s cubic-bezier(0.25,0.46,0.45,0.94)',
            whiteSpace: 'nowrap',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          </svg>
          {t('askDoctor')}
        </Link>

      </div>

      <style>{`
        .qa-btn:hover { transform: translateY(-2px); }
        .qa-emergency:hover {
          box-shadow: 0 8px 26px rgba(220,38,38,0.48) !important;
          background: linear-gradient(135deg, #b91c1c 0%, #dc2626 100%) !important;
        }
        .qa-doctor:hover {
          background: rgba(255,255,255,0.8) !important;
          color: #374151 !important;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08) !important;
        }
      `}</style>
    </div>
  )
}
