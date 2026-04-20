import React from 'react'

export default function InsuranceBanner() {
  return (
    <section className="insurance-strip">
      <div className="insurance-strip-inner">

        {/* Shield icon */}
        <div className="insurance-icon" aria-hidden="true">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <polyline points="9 12 11 14 15 10"/>
          </svg>
        </div>

        {/* Text */}
        <div className="insurance-text">
          <strong>In-Network with Most Major PPOs</strong>
          <span>We accept most major dental insurance plans to make care affordable for your family.</span>
        </div>

        {/* CTA link */}
        <a href="/for-patients/insurance-info" className="insurance-link">
          View Insurance Info
        </a>

      </div>
    </section>
  )
}
