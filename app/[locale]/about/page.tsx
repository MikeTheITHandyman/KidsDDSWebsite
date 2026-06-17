import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import ReviewBubbles from '@/components/ReviewBubbles'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Our Pediatric Dental Practice | Kids Dentist Grayslake, IL',
  description:
    "Kids Dentist has served Grayslake and Lake County families since 1994. Four board-certified pediatric specialists, 650+ five-star reviews, and a practice built entirely around children.",
  alternates: { canonical: 'https://www.kidsdds.com/about' },
  openGraph: {
    title: 'About Our Pediatric Dental Practice | Kids Dentist Grayslake, IL',
    description:
      "Grayslake's most trusted pediatric dental practice since 1994. Four specialists. 650+ five-star reviews. Care built entirely around your child.",
    url: 'https://www.kidsdds.com/about',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const STATS = [
  { value: '30+', label: 'Years in Grayslake' },
  { value: '4', label: 'Pediatric Specialists on Staff' },
  { value: '650+', label: 'Google Reviews · 4.8 Stars' },
]

const OFFICE_SLIDES = [
  {
    label: 'Waiting Room',
    caption: 'Colorful, kid-scaled, and never clinical',
    gradient: 'linear-gradient(135deg, #DBEAFE 0%, #BAE6FD 100%)',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#4A90A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    label: 'Treatment Rooms',
    caption: 'TVs in every operatory — kids choose what they watch',
    gradient: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#6BA899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    label: 'Play Zone',
    caption: 'A dedicated space to ease nerves before any appointment',
    gradient: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
  },
  {
    label: 'Our Team',
    caption: 'Hired for warmth as much as their clinical skill',
    gradient: 'linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%)',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <SubPageLayout
      kicker="Since 1994 · Grayslake, IL"
      title="Thirty Years of Taking Care of Lake County Kids"
      gradient="blue"
    >

      {/* ── Inner container ─────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4">

        {/* ── Who We Are ────────────────────────────────────────── */}
        <AnimatedSection>
          <div
            style={{
              marginBottom: '5rem',
              display: 'grid',
              gap: '2.5rem',
              gridTemplateColumns: '1fr',
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 900,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--brand-purple)',
                  marginBottom: '1rem',
                }}
              >
                Who We Are
              </span>
              <p
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                  fontWeight: 700,
                  color: '#374151',
                  lineHeight: 1.65,
                  maxWidth: '720px',
                  margin: 0,
                }}
              >
                Kids Dentist opened in Grayslake in 1994. We&apos;ve watched this community grow up.
                We&apos;ve treated kids who now bring their own kids in. Our four doctors have spent
                their entire careers focused on one thing: pediatric dentistry.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* ── The Team ──────────────────────────────────────────── */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
              border: '1.5px solid rgba(74,144,164,0.14)',
              borderRadius: '2rem',
              padding: 'clamp(2.5rem, 5vw, 3.5rem)',
              marginBottom: '2rem',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'Nunito, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 900,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--brand-600)',
                marginBottom: '0.85rem',
              }}
            >
              The Team
            </span>
            <h2
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: 'clamp(1.65rem, 3vw, 2.2rem)',
                fontWeight: 900,
                color: '#1e3a5f',
                lineHeight: 1.25,
                margin: '0 0 1.1rem',
                maxWidth: '560px',
              }}
            >
              Four Doctors. All Pediatric Specialists.
            </h2>
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: '#4b5563',
                lineHeight: 1.78,
                maxWidth: '620px',
                margin: '0 0 1.75rem',
              }}
            >
              Every doctor at Kids Dentist completed a pediatric dental residency after dental school,
              which means extra training specifically in treating children, including kids with anxiety,
              sensory sensitivities, and special needs.
            </p>
            <Link
              href="/about/meet-the-dentists"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                background: 'linear-gradient(135deg, #E8934F, #E97D63)',
                color: '#fff',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 800,
                fontSize: '0.95rem',
                padding: '0.75rem 1.85rem',
                borderRadius: '100px',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(232,147,79,0.35)',
              }}
            >
              Meet the Dentists
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </AnimatedSection>

        {/* ── Stat Bar ──────────────────────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginBottom: '5rem',
          }}
          className="about-stat-grid"
        >
          {STATS.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div
                style={{
                  background: '#fff',
                  border: '1.5px solid rgba(74,144,164,0.12)',
                  borderRadius: '1.5rem',
                  padding: '1.75rem 1.25rem',
                  textAlign: 'center',
                  boxShadow: '0 2px 14px rgba(74,144,164,0.07)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                    fontWeight: 900,
                    color: 'var(--brand-600)',
                    lineHeight: 1,
                    marginBottom: '0.4rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: '#6b7280',
                    lineHeight: 1.4,
                    letterSpacing: '0.01em',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ── Special Needs ─────────────────────────────────────── */}
        <AnimatedSection>
          <div style={{ marginBottom: '4.5rem', display: 'grid', gap: '0', gridTemplateColumns: '1fr' }}>
            <div
              style={{
                borderLeft: '4px solid #7C3AED',
                paddingLeft: '1.75rem',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 900,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#7C3AED',
                  marginBottom: '0.75rem',
                }}
              >
                Special Needs Dentistry
              </span>
              <h2
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                  fontWeight: 900,
                  color: '#1e3a5f',
                  lineHeight: 1.3,
                  margin: '0 0 1rem',
                  maxWidth: '620px',
                }}
              >
                Experienced Care for Children with Special Needs
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#4b5563',
                  lineHeight: 1.78,
                  maxWidth: '660px',
                  margin: 0,
                }}
              >
                Some children need a little more time, a quieter environment, or a gentler approach.
                Our team has been caring for children with special needs since 1994 and we know how
                to adjust to meet each child where they are. If your child has had a hard time at
                the dentist before, please reach out before scheduling. We would love the chance to
                make this a better experience for them.
              </p>
              <Link
                href="/services/special-needs"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: '#7C3AED',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  marginTop: '1.25rem',
                  borderBottom: '2px solid rgba(124,58,237,0.25)',
                  paddingBottom: '2px',
                }}
              >
                Learn about our Special Needs program
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* ── Comfort & Sedation ────────────────────────────────── */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, #fffbeb 0%, #fef9ec 100%)',
              border: '1.5px solid rgba(245,158,11,0.18)',
              borderRadius: '2rem',
              padding: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '4.5rem',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'Nunito, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 900,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#D97706',
                marginBottom: '0.75rem',
              }}
            >
              Comfort &amp; Sedation
            </span>
            <h2
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                fontWeight: 900,
                color: '#92400e',
                lineHeight: 1.3,
                margin: '0 0 1rem',
                maxWidth: '600px',
              }}
            >
              We Take Dental Anxiety Seriously
            </h2>
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: '#78350f',
                lineHeight: 1.78,
                maxWidth: '660px',
                margin: 0,
                opacity: 0.85,
              }}
            >
              Many children feel nervous before a dental visit, and that is completely normal. Our
              team is experienced in working with anxious patients and takes the time to build trust
              before beginning any treatment. For children who need additional support, we offer
              nitrous oxide and general anesthesia. We will always discuss the options with you
              beforehand and recommend only what is appropriate for your child.
            </p>
            <Link
              href="/services/sedation-dentistry"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: '#D97706',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 800,
                fontSize: '0.88rem',
                textDecoration: 'none',
                marginTop: '1.25rem',
                borderBottom: '2px solid rgba(217,119,6,0.3)',
                paddingBottom: '2px',
              }}
            >
              Learn about our sedation options
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </AnimatedSection>

        {/* ── Insurance & Payment ───────────────────────────────── */}
        <AnimatedSection>
          <div style={{ marginBottom: '5rem' }}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'Nunito, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 900,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--serene-mint)',
                marginBottom: '0.85rem',
              }}
            >
              Insurance &amp; Payment
            </span>
            <h2
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                fontWeight: 900,
                color: '#1e3a5f',
                lineHeight: 1.3,
                margin: '0 0 1rem',
                maxWidth: '580px',
              }}
            >
              We Work with Your Insurance So You Don&apos;t Have To
            </h2>
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: '#4b5563',
                lineHeight: 1.78,
                maxWidth: '660px',
                margin: '0 0 1.25rem',
              }}
            >
              We&apos;re in-network with most major PPOs. If you&apos;re not sure whether we take
              your plan, call or text us. Our front desk handles the paperwork and will tell you
              exactly what&apos;s covered before we start any treatment. No surprise bills.
            </p>
            <Link
              href="/for-patients/insurance-info"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--brand-600)',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 800,
                fontSize: '0.88rem',
                textDecoration: 'none',
                borderBottom: '2px solid rgba(74,144,164,0.3)',
                paddingBottom: '2px',
              }}
            >
              View accepted insurance plans
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </AnimatedSection>

      </div>{/* end inner container */}

      {/* ── Reviews — full-bleed ──────────────────────────────── */}
      <div
        style={{
          margin: '2rem -1rem 0',
          width: 'calc(100% + 2rem)',
        }}
      >
        <ReviewBubbles />
      </div>

      {/* ── Office carousel + CTA ─────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4">

        {/* Office section */}
        <AnimatedSection>
          <div style={{ margin: '5rem 0 3rem' }}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'Nunito, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 900,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--brand-purple)',
                marginBottom: '0.85rem',
              }}
            >
              Our Space
            </span>
            <h2
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: 'clamp(1.65rem, 3vw, 2.2rem)',
                fontWeight: 900,
                color: '#1e3a5f',
                lineHeight: 1.25,
                margin: '0 0 0.75rem',
              }}
            >
              An Office Built for Children
            </h2>
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: '#6b7280',
                lineHeight: 1.72,
                maxWidth: '540px',
                margin: '0 0 2rem',
              }}
            >
              Step inside and you will instantly feel the difference — warm, colorful, and designed
              from the ground up with little ones in mind.
            </p>
          </div>
        </AnimatedSection>

        {/* CSS scroll-snap photo carousel */}
        <AnimatedSection>
          <div
            className="office-carousel"
            role="region"
            aria-label="Office photo tour"
            style={{
              display: 'flex',
              overflowX: 'auto',
              gap: '1rem',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              borderRadius: '1.5rem',
              marginBottom: '1rem',
              paddingBottom: '0.25rem',
            }}
          >
            {OFFICE_SLIDES.map((slide) => (
              <div
                key={slide.label}
                style={{
                  flex: '0 0 clamp(260px, 75%, 400px)',
                  scrollSnapAlign: 'start',
                  background: slide.gradient,
                  borderRadius: '1.5rem',
                  aspectRatio: '4 / 3',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.85rem',
                  padding: '2rem',
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.55)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  {slide.icon}
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 900,
                      fontSize: '1.05rem',
                      color: '#1e3a5f',
                      marginBottom: '0.3rem',
                    }}
                  >
                    {slide.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#4b5563',
                      lineHeight: 1.55,
                    }}
                  >
                    {slide.caption}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#9ca3af',
                    marginTop: '0.25rem',
                  }}
                >
                  Photo coming soon
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.78rem', color: '#9ca3af', fontWeight: 600, textAlign: 'center', margin: 0 }}>
            Swipe to explore &rsaquo;
          </p>
        </AnimatedSection>

        {/* Tour link */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', margin: '1.5rem 0 5rem' }}>
            <Link
              href="/about/tour-our-office"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--brand-600)',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 800,
                fontSize: '0.9rem',
                textDecoration: 'none',
                borderBottom: '2px solid rgba(74,144,164,0.3)',
                paddingBottom: '2px',
              }}
            >
              Take a full office tour
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </AnimatedSection>

        {/* ── Final CTA ─────────────────────────────────────────── */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, #4A90A4 0%, #6BA899 100%)',
              borderRadius: '2rem',
              padding: 'clamp(2.5rem, 5vw, 3.5rem) clamp(2rem, 5vw, 4rem)',
              textAlign: 'center',
              marginBottom: '2rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              aria-hidden="true"
              style={{ position: 'absolute', top: '-40px', right: '-40px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', pointerEvents: 'none' }}
            />
            <div
              aria-hidden="true"
              style={{ position: 'absolute', bottom: '-60px', left: '-30px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }}
            />
            <p
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 900,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.75)',
                marginBottom: '0.85rem',
              }}
            >
              Ready to Visit?
            </p>
            <h2
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                fontWeight: 900,
                color: '#fff',
                lineHeight: 1.25,
                margin: '0 0 0.85rem',
              }}
            >
              New patients are always welcome.
            </h2>
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.85)',
                maxWidth: '440px',
                margin: '0 auto 2rem',
                lineHeight: 1.72,
              }}
            >
              Request an appointment online and we&apos;ll call you within one business day to confirm.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/request-appointment"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  background: 'rgba(255,255,255,0.18)',
                  border: '2px solid rgba(255,255,255,0.5)',
                  color: '#fff',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  padding: '0.85rem 2rem',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  backdropFilter: 'blur(6px)',
                }}
              >
                Request Appointment
              </Link>
              <Link
                href="tel:+18472231400"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: 'rgba(255,255,255,0.9)',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  padding: '0.85rem 2rem',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  border: '2px solid rgba(255,255,255,0.25)',
                }}
              >
                Text/Call us: (847) 223-1400
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>

      <style>{`
        .office-carousel::-webkit-scrollbar { display: none; }
        @media (max-width: 540px) {
          .about-stat-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 541px) and (max-width: 768px) {
          .about-stat-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

    </SubPageLayout>
  )
}
