import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pediatric Dental Services | Kids Dentist Grayslake, IL',
  description:
    'Explore all pediatric dental services at Kids Dentist Grayslake — preventive care, restorative treatments, sedation dentistry, special needs care, and emergency visits.',
  openGraph: {
    title: 'Pediatric Dental Services | Kids Dentist Grayslake, IL',
    description:
      'Every service we offer is designed exclusively for children — from routine cleanings to complex restorative work and special needs care.',
    url: 'https://kidsdds.com/services',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const SERVICES = [
  {
    title: 'Preventive Dentistry',
    tagline: 'Stop problems before they start.',
    description:
      'Routine cleanings, fluoride treatments, sealants, and digital X-rays form the foundation of a lifetime of healthy smiles. We recommend visits every six months starting at age one.',
    href: '/services/preventive-dentistry',
    gradient: 'linear-gradient(135deg, #DBEAFE, #BAE6FD)',
    accentColor: '#4A90A4',
    icon: '🦷',
  },
  {
    title: 'Restorative Dentistry',
    tagline: 'Fix it early — protect it for life.',
    description:
      'Tooth-colored fillings, pediatric crowns, pulp therapy, and extractions — all performed with the gentle approach and honest communication children and parents deserve.',
    href: '/services/restorative-dentistry',
    gradient: 'linear-gradient(135deg, #D1FAE5, #A7F3D0)',
    accentColor: '#6BA899',
    icon: '✨',
  },
  {
    title: 'Sedation Dentistry',
    tagline: 'Calm, comfortable care for anxious kids.',
    description:
      'Nitrous oxide, oral conscious sedation, and in-office general anesthesiology — because no child should ever avoid necessary dental care due to fear or anxiety.',
    href: '/services/sedation-dentistry',
    gradient: 'linear-gradient(135deg, #FEF3C7, #FDE68A)',
    accentColor: '#D97706',
    icon: '😌',
  },
  {
    title: 'Special Needs Dentistry',
    tagline: 'Every child deserves excellent care.',
    description:
      'Specialized experience treating children with autism, Down syndrome, cerebral palsy, and sensory processing differences. Dr. Rutcosky leads our special needs program.',
    href: '/services/sedation-dentistry',
    gradient: 'linear-gradient(135deg, #EDE9FE, #DDD6FE)',
    accentColor: '#7C3AED',
    icon: '💜',
  },
  {
    title: 'Emergency Dentistry',
    tagline: 'Fast care when your child needs it most.',
    description:
      'Knocked-out tooth, sudden toothache, or dental trauma — call us immediately. Same-day emergency appointments are available for our patients and for new families in need.',
    href: '/request-appointment',
    gradient: 'linear-gradient(135deg, #FFE4E6, #FECDD3)',
    accentColor: '#E97D63',
    icon: '🚨',
  },
]

const INSURANCES = [
  'Delta Dental',
  'BlueCross BlueShield',
  'Cigna',
  'Aetna',
  'United Healthcare',
  'Humana',
  'Medicaid (All Kids)',
]

export default function ServicesPage() {
  return (
    <SubPageLayout
      title="Our Services"
      subtitle="100% pediatric dentistry — because children aren't just small adults."
      gradient="blue"
    >
      <div className="mx-auto max-w-5xl px-4">

        {/* Intro */}
        <AnimatedSection>
          <p
            style={{
              textAlign: 'center',
              fontSize: '1.05rem',
              fontWeight: 500,
              color: '#6b7280',
              maxWidth: '640px',
              margin: '0 auto 4rem',
              lineHeight: 1.78,
            }}
          >
            Our practice is{' '}
            <strong style={{ color: '#4A90A4' }}>strictly limited to pediatric dentistry</strong>{' '}
            — meaning every doctor, every team member, every piece of equipment, and every inch of
            this office exists to serve children and their families. Nothing else.
          </p>
        </AnimatedSection>

        {/* Services grid — 5 cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '5rem',
          }}
        >
          {SERVICES.map((svc, i) => (
            <AnimatedSection key={svc.title} delay={i * 0.07}>
              <Link href={svc.href} style={{ display: 'block', textDecoration: 'none', height: '100%' }}>
                <div
                  className="service-card"
                  style={{
                    background: svc.gradient,
                    borderRadius: '1.75rem',
                    padding: '2rem 1.75rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ fontSize: '2.25rem', lineHeight: 1 }} aria-hidden="true">
                    {svc.icon}
                  </span>
                  <div>
                    <h2
                      style={{
                        fontFamily: 'Nunito, sans-serif',
                        fontWeight: 900,
                        fontSize: '1.2rem',
                        color: svc.accentColor,
                        margin: '0 0 0.35rem',
                        lineHeight: 1.25,
                      }}
                    >
                      {svc.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: 'Nunito, sans-serif',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        color: svc.accentColor,
                        margin: 0,
                        opacity: 0.8,
                      }}
                    >
                      {svc.tagline}
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.68,
                      color: '#6b7280',
                      margin: 0,
                      flexGrow: 1,
                    }}
                  >
                    {svc.description}
                  </p>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      color: svc.accentColor,
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      marginTop: '0.5rem',
                    }}
                  >
                    Learn More
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* Insurance teaser strip */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(74,144,164,0.06), rgba(107,168,153,0.08))',
              border: '1.5px solid rgba(74,144,164,0.14)',
              borderRadius: '2rem',
              padding: '3rem 2rem',
              marginBottom: '4rem',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'Nunito, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 900,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#6BA899',
                marginBottom: '0.6rem',
              }}
            >
              Insurance &amp; Billing
            </span>
            <h2
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(1.4rem, 3vw, 1.85rem)',
                color: '#4A90A4',
                margin: '0 0 0.75rem',
              }}
            >
              In-Network with Most Major PPOs
            </h2>
            <p
              style={{
                color: '#6b7280',
                fontSize: '0.95rem',
                lineHeight: 1.7,
                maxWidth: '520px',
                margin: '0 auto 1.75rem',
                fontWeight: 500,
              }}
            >
              We accept most major dental insurance plans including Medicaid (All Kids). Our team
              handles the billing paperwork — you focus on your child.
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.6rem',
                justifyContent: 'center',
                marginBottom: '1.75rem',
              }}
            >
              {INSURANCES.map((ins) => (
                <span
                  key={ins}
                  style={{
                    background: '#fff',
                    border: '1.5px solid rgba(74,144,164,0.2)',
                    borderRadius: '100px',
                    padding: '0.4rem 1rem',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: '#4A90A4',
                    fontFamily: 'Nunito, sans-serif',
                  }}
                >
                  {ins}
                </span>
              ))}
            </div>
            <Link
              href="/insurance-and-forms"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#4A90A4',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none',
                padding: '0.65rem 1.5rem',
                borderRadius: '100px',
                border: '2px solid rgba(74,144,164,0.3)',
              }}
            >
              View All Accepted Plans
            </Link>
          </div>
        </AnimatedSection>

        {/* Bottom CTA */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: '#4A90A4',
                marginBottom: '1.25rem',
              }}
            >
              Not sure which service your child needs? We will help you figure it out.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/request-appointment"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  background: 'linear-gradient(135deg, #E8934F, #E97D63)',
                  color: '#fff',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  padding: '0.85rem 2rem',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  boxShadow: '0 6px 22px rgba(232,147,79,0.35)',
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
                  color: '#4A90A4',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  padding: '0.85rem 2rem',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  border: '2px solid rgba(74,144,164,0.3)',
                }}
              >
                Call (847) 223-1400
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>

      <style>{`
        .service-card {
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.10);
        }
      `}</style>
    </SubPageLayout>
  )
}
