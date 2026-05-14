'use client'

import Link from 'next/link'

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

export default function QuickActionsBar() {
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
        className="flex flex-row flex-wrap justify-center px-4 py-2"
        style={{
          maxWidth: '900px',
          margin: '0 auto',
        }}
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
          Dental Emergency
        </Link>

        {/* Ask the Doctor */}
        <Link
          href="/ask-the-doctor"
          className="qa-btn qa-doctor"
          style={{
            display: 'inline-flex',
            marginLeft: '2.5rem',
            alignItems: 'center',
            gap: '0.35rem',
            background: 'linear-gradient(135deg, #78509b 0%, #9b6dc5 100%)',
            color: '#fff',
            borderRadius: '100px',
            padding: '0.45rem 0.9rem',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 900,
            fontSize: '0.78rem',
            textDecoration: 'none',
            letterSpacing: '0.01em',
            boxShadow: '0 3px 12px rgba(120,80,155,0.26)',
            transition: 'all 0.2s cubic-bezier(0.25,0.46,0.45,0.94)',
            whiteSpace: 'nowrap',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          </svg>
          Ask the Doctor
        </Link>

        {/* Save Contact */}
        <button
          onClick={downloadVCard}
          className="qa-btn qa-contact"
          style={{
            display: 'inline-flex',
            marginLeft: '2.5rem',
            alignItems: 'center',
            gap: '0.35rem',
            background: 'transparent',
            color: '#4A90A4',
            border: '1.5px solid #4A90A4',
            borderRadius: '100px',
            padding: '0.43rem 0.9rem',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 900,
            fontSize: '0.78rem',
            cursor: 'pointer',
            letterSpacing: '0.01em',
            transition: 'all 0.2s cubic-bezier(0.25,0.46,0.45,0.94)',
            whiteSpace: 'nowrap',
          }}
          aria-label="Save Kids Dentist contact to your phone"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
            <line x1="12" y1="18" x2="12.01" y2="18"/>
          </svg>
          Save Contact
        </button>

      </div>

      <style>{`
        .qa-btn:hover {
          transform: translateY(-2px);
        }
        .qa-emergency:hover {
          box-shadow: 0 8px 26px rgba(220,38,38,0.48) !important;
          background: linear-gradient(135deg, #b91c1c 0%, #dc2626 100%) !important;
        }
        .qa-doctor:hover {
          box-shadow: 0 8px 26px rgba(120,80,155,0.48) !important;
          background: linear-gradient(135deg, #6b3f8e 0%, #8b5cbf 100%) !important;
        }
        .qa-contact:hover {
          background: #4A90A4 !important;
          color: #fff !important;
          box-shadow: 0 8px 26px rgba(74,144,164,0.38) !important;
        }
      `}</style>
    </div>
  )
}
