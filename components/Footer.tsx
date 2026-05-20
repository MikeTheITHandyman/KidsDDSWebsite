'use client'

import { motion } from 'framer-motion'

const QUICK_LINKS = [
  { label: 'Our Services', href: '/services' },
  { label: 'Meet the Dentists', href: '/about/meet-the-dentists' },
  { label: 'My First Visit', href: '/for-patients/child-first-visit' },
  { label: 'Patient Forms', href: '/for-patients/patient-forms' },
  { label: 'Insurance Info', href: '/for-patients/insurance-info' },
  { label: 'Blog', href: '/blog' },
]

const HOURS = [
  { day: 'Monday', time: '9:00 am – 5:00 pm' },
  { day: 'Tuesday', time: '9:00 am – 5:00 pm' },
  { day: 'Wednesday', time: '8:30 am – 5:00 pm' },
  { day: 'Thursday', time: '9:00 am – 5:00 pm' },
  { day: 'Friday', time: '8:00 am – 2:00 pm' },
]

export default function Footer() {
  return (
    <footer
      className="site-footer"
      style={{
        background: 'linear-gradient(135deg, var(--brand-purple) 0%, var(--brand-600) 50%, var(--serene-mint) 100%)',
        color: '#fff',
        marginTop: '4rem',
        paddingBottom: 0,
      }}
    >
      {/* Main grid */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '3.5rem 2rem 2.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2.5rem',
        }}
        className="footer-main-grid"
      >
        {/* Column 1: Brand */}
        <div>
          <div
            style={{
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 900,
              fontSize: '1.35rem',
              letterSpacing: '-0.01em',
              marginBottom: '0.6rem',
              color: 'white',
            }}
          >
            Kids Dentist
          </div>
          <p
            style={{
              opacity: 0.82,
              fontSize: '0.88rem',
              fontWeight: 500,
              lineHeight: 1.65,
              margin: '0 0 1.25rem',
            }}
          >
            Pediatric dentistry in Grayslake, IL - where every visit ends with a smile.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a
              href="https://www.google.com/maps/place/Kids+Dentist+-+Sonia+Gutierrez+%26+Associates/@42.3419457,-88.0259721,17z/data=!3m1!5s0x880f9a88cfcc67a9:0x23f796d9c9c7f91b!4m15!1m8!3m7!1s0x880f9a88cfc9ba3f:0xd8a23f74d95d12b9!2s160+Commerce+Dr+Ste+100,+Grayslake,+IL+60030!3b1!8m2!3d42.3419457!4d-88.0233972!16s%2Fg%2F11ftmhv5g6!3m5!1s0x880f9a88ce354f15:0x91e0950a0a5955cb!8m2!3d42.3419328!4d-88.0233294!16s%2Fg%2F1td619xy?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-address-link"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.45rem',
                color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: 500,
                lineHeight: 1.55,
                transition: 'color 0.2s, text-decoration-color 0.2s',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              160 Commerce Dr #100<br/>Grayslake, IL 60030
            </a>
            <a
              href="tel:8472231400"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: 700,
                transition: 'color 0.2s',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              Text/Call us: (847) 223-1400
            </a>
            <a
              href="mailto:info@kidsdds.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: 600,
                transition: 'color 0.2s',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              info@kidsdds.com
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4
            style={{
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 900,
              fontSize: '0.78rem',
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              opacity: 0.65,
              margin: '0 0 1rem',
              color: 'white',
            }}
          >
            Explore
          </h4>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    color: 'rgba(255,255,255,0.82)',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    transition: 'color 0.2s, opacity 0.2s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Hours */}
        <div>
          <h4
            style={{
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 900,
              fontSize: '0.78rem',
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              opacity: 0.65,
              margin: '0 0 1rem',
              color: 'white',
            }}
          >
            Office Hours
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.42rem' }}>
            {HOURS.map(({ day, time }) => (
              <div
                key={day}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  opacity: time === 'Closed' ? 0.5 : 0.85,
                }}
              >
                <span style={{ fontWeight: 600 }}>{day}</span>
                <span
                  style={{
                    color: time === 'Closed' ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.9)',
                    fontStyle: time === 'Closed' ? 'italic' : 'normal',
                    textAlign: 'right',
                  }}
                >
                  {time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 4: Connect */}
        <div>
          <h4
            style={{
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 900,
              fontSize: '0.78rem',
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              opacity: 0.65,
              margin: '0 0 1rem',
              color: 'white',
            }}
          >
            Stay Connected
          </h4>

          {/* Social icon buttons — with labels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.5rem' }}>
            <motion.a
              href="https://www.facebook.com/kidsddsgrayslake"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kids Dentist on Facebook"
              whileHover={{ scale: 1.03, x: 2 }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'rgba(255,255,255,0.13)',
                border: '1.5px solid rgba(255,255,255,0.22)',
                borderRadius: '100px',
                padding: '0.48rem 1rem',
                color: 'white',
                textDecoration: 'none',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: '0.82rem',
                backdropFilter: 'blur(6px)',
                transition: 'background 0.2s',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
              Facebook · kidsddsgrayslake
            </motion.a>

            <motion.a
              href="https://www.instagram.com/kidsddsgrayslake/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kids Dentist on Instagram"
              whileHover={{ scale: 1.03, x: 2 }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'rgba(255,255,255,0.13)',
                border: '1.5px solid rgba(255,255,255,0.22)',
                borderRadius: '100px',
                padding: '0.48rem 1rem',
                color: 'white',
                textDecoration: 'none',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: '0.82rem',
                backdropFilter: 'blur(6px)',
                transition: 'background 0.2s',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Instagram · @kidsddsgrayslake
            </motion.a>
          </div>

          {/* CTA buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.6rem', marginBottom: '0.85rem' }}>
            <motion.a
              href="/request-appointment"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                background: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(8px)',
                border: '1.5px solid rgba(255,255,255,0.35)',
                color: 'white',
                borderRadius: '100px',
                padding: '0.65rem 1.35rem',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 800,
                fontSize: '0.88rem',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Book Appointment
            </motion.a>

            <form
              action="https://hostedpaynow.com/v2/paynowapp/processpayment"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_xclick" />
              <input type="hidden" name="tokenuid" value="9ec06785636346c290a5a30375d1d3af@=1328f97b14f431bdea8caaaf4f1da76f8a2bb1fe691be4d69503d020bd502c3e" />
              <motion.button
                name="submit"
                type="submit"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  background: 'rgba(245,158,11,0.22)',
                  backdropFilter: 'blur(8px)',
                  border: '1.5px solid rgba(245,158,11,0.55)',
                  color: 'white',
                  borderRadius: '100px',
                  padding: '0.65rem 1.35rem',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                </svg>
                Pay Now
              </motion.button>
            </form>
          </div>

          <div
            style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              opacity: 0.65,
              lineHeight: 1.55,
            }}
          >
            We see kids from infants through teens. Hablamos Español.
          </div>
        </div>
      </div>

      {/* SEO service area block */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1.25rem 2rem 0',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            opacity: 0.55,
            lineHeight: 1.7,
            margin: 0,
            fontFamily: 'Nunito, sans-serif',
          }}
        >
          Pediatric dentistry in Grayslake, IL. Serving Lake County families since 1994.
        </p>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', maxWidth: '1200px', margin: '1.25rem auto 0' }} />

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1.1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}
        className="footer-bottom-bar"
      >
        <span style={{ opacity: 0.65, fontSize: '0.82rem', fontWeight: 500 }}>
          © {new Date().getFullYear()} Kids Dentist · Grayslake, IL · All rights reserved
        </span>
        <div style={{ display: 'flex', gap: '1.25rem', opacity: 0.65 }}>
          <a href="/privacy" style={{ color: 'white', fontSize: '0.82rem', fontWeight: 500, textDecoration: 'none' }}>Privacy Policy</a>
          <a href="/sitemap" style={{ color: 'white', fontSize: '0.82rem', fontWeight: 500, textDecoration: 'none' }}>Sitemap</a>
        </div>
      </div>

      {/* Responsive overrides */}
      <style>{`
        .footer-address-link:hover {
          text-decoration: underline;
          text-decoration-color: rgba(255,255,255,0.6);
          text-underline-offset: 3px;
          color: white !important;
        }
        @media (max-width: 900px) {
          .footer-main-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .footer-main-grid { grid-template-columns: 1fr !important; }
          .footer-bottom-bar { flex-direction: column; align-items: flex-start !important; }
        }
      `}</style>
    </footer>
  )
}
