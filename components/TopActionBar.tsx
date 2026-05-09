'use client'

import { usePathname } from 'next/navigation'

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

export default function TopActionBar() {
  const pathname = usePathname()
  if (pathname?.startsWith('/studio')) return null

  return (
    <div
      className="top-action-bar"
      style={{
        background: 'linear-gradient(90deg, #2a6070 0%, #4A90A4 55%, #5a9489 100%)',
        color: 'rgba(255,255,255,0.92)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.5rem',
        height: '36px',
        fontFamily: 'Nunito, sans-serif',
        zIndex: 1100,
        position: 'relative',
        gap: '0.5rem',
        flexShrink: 0,
      }}
    >
      {/* Left: location blurb — desktop only */}
      <span
        className="tab-blurb"
        style={{
          fontSize: '0.72rem',
          fontWeight: 600,
          opacity: 0.82,
          whiteSpace: 'nowrap',
          letterSpacing: '0.02em',
          flex: 1,
        }}
      >
        Pediatric Dentist · Grayslake, IL · Serving Lake County since 1994
      </span>

      {/* Right: action pills */}
      <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center', flexShrink: 0 }}>

        <a
          href="/request-appointment"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            background: '#E8934F',
            color: 'white',
            borderRadius: '100px',
            padding: '0.22rem 0.72rem',
            fontSize: '0.695rem',
            fontWeight: 800,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            letterSpacing: '0.01em',
            boxShadow: '0 2px 8px rgba(232,147,79,0.4)',
          }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          Request Appointment
        </a>

        <a
          href="/services/emergency"
          className="tab-emergency"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            background: 'rgba(220,38,38,0.82)',
            color: 'white',
            borderRadius: '100px',
            padding: '0.22rem 0.72rem',
            fontSize: '0.695rem',
            fontWeight: 800,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          Emergency
        </a>

        <a
          href="/faq"
          className="tab-ghost tab-desktop-only"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            background: 'rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.9)',
            borderRadius: '100px',
            padding: '0.22rem 0.72rem',
            fontSize: '0.695rem',
            fontWeight: 700,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          Ask the Doctor
        </a>

        <button
          onClick={downloadVCard}
          className="tab-ghost tab-desktop-only"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            background: 'rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.9)',
            borderRadius: '100px',
            padding: '0.22rem 0.72rem',
            fontSize: '0.695rem',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            border: '1px solid rgba(255,255,255,0.2)',
            cursor: 'pointer',
            fontFamily: 'Nunito, sans-serif',
            lineHeight: 1,
          }}
          aria-label="Save Kids Dentist contact to your phone"
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
            <line x1="12" y1="18" x2="12.01" y2="18"/>
          </svg>
          Save Contact
        </button>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .tab-blurb { display: none !important; }
          .tab-desktop-only { display: none !important; }
          .top-action-bar { padding: 0 0.85rem !important; height: 40px !important; }
        }
        .tab-ghost:hover { background: rgba(255,255,255,0.22) !important; }
        .tab-emergency:hover { background: rgba(220,38,38,1) !important; }
      `}</style>
    </div>
  )
}
