import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Kids Dentist Grayslake, IL',
  description:
    'Meet the pediatric dental practice that has served Grayslake and Lake County families for 30+ years. Our mission: expert, compassionate care for every child.',
  openGraph: {
    title: 'About Us | Kids Dentist Grayslake, IL',
    description:
      'Meet the pediatric dental practice that has served Grayslake and Lake County families for 30+ years.',
    url: 'https://kidsdds.com/about',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const WHY_ITEMS = [
  {
    icon: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="#4A90A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: '2–3 Years of Extra Training',
    body: 'After dental school, our doctors completed a dedicated pediatric residency — learning child development, behavior management, and how to treat conditions specific to growing teeth and jaws.',
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="#6BA899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Child Psychology Focus',
    body: 'Our specialty training includes deep study of child behavior and anxiety. We know how to communicate with a nervous 5-year-old very differently from a confident teenager.',
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="#E8934F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Patients from Infancy Through Teens',
    body: 'We see patients from their very first tooth through their teenage years, maintaining continuity of care that general dentists who treat all ages simply cannot replicate.',
  },
]

const DOCTORS_TEASER = [
  { name: 'Dr. Sonia Gutierrez', role: 'Gentle Care Specialist', photo: '/brand_assets/index-dr-sonia.jpg', href: '/about/meet-the-dentists/dr-sonia-gutierrez', initials: 'SG', grad: 'from-[#DBEAFE] to-[#BAE6FD]' },
  { name: 'Dr. Dave Rutcosky', role: 'Special Needs Champion', photo: '/brand_assets/index-dr-dave.jpg', href: '/about/meet-the-dentists/dr-dave-rutcosky', initials: 'DR', grad: 'from-[#D1FAE5] to-[#A7F3D0]' },
  { name: 'Dr. Sahar Alrayyes', role: 'Preventive Care Leader', photo: '/brand_assets/index-dr-alrayyes.jpg', href: '/about/meet-the-dentists/dr-sahar-alrayyes', initials: 'SA', grad: 'from-[#FEF3C7] to-[#FDE68A]' },
  { name: 'Dr. Anne-Ashley Compton', role: 'Restorative Arts Expert', photo: '/brand_assets/index-dr-ashley.jpg', href: '/about/meet-the-dentists/dr-anne-ashley-compton', initials: 'AC', grad: 'from-[#EDE9FE] to-[#DDD6FE]' },
]

export default function AboutPage() {
  return (
    <SubPageLayout
      title="About Kids Dentist"
      subtitle="Grayslake's most trusted pediatric dental practice — where little smiles are our big mission."
      gradient="blue"
    >
      <div className="mx-auto max-w-5xl px-4">

        {/* ── Our Story ─────────────────────────────────────────── */}
        <div className="mb-24 grid items-center gap-12 md:grid-cols-2">
          <AnimatedSection direction="left">
            <div
              style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '1.75rem', overflow: 'hidden' }}
              className="shadow-xl"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#DBEAFE] to-[#BAE6FD]"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', opacity: 0.55 }}>
                  <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="#4A90A4" strokeWidth="1.4" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6b7280' }}>
                    Office Photo Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.12}>
            <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#E8934F', marginBottom: '0.75rem' }}>
              Our Story
            </span>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 900, color: '#4A90A4', lineHeight: 1.2, marginBottom: '1.1rem' }}>
              30+ Years of Smiles in Grayslake
            </h2>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: '#6b7280', marginBottom: '1rem' }}>
              Kids Dentist has been a cornerstone of the Grayslake community since the early 1990s — built on the simple belief that every child deserves dental care that is kind, expert, and never scary.
            </p>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: '#6b7280', marginBottom: '0' }}>
              What began as a small neighborhood practice has grown into one of Lake County's most trusted pediatric dental homes, serving thousands of families across Grayslake, Libertyville, Waukegan, and beyond — while never losing the warmth and personal attention that defines who we are.
            </p>
            <div style={{ marginTop: '1.5rem', height: '3px', width: '64px', borderRadius: '100px', background: 'linear-gradient(90deg, #E8934F, #F4C77F)' }} />
          </AnimatedSection>
        </div>

        {/* ── Mission Statement ──────────────────────────────────── */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, #4A90A4 0%, #6BA899 100%)',
              borderRadius: '2rem',
              padding: 'clamp(2.5rem, 5vw, 3.5rem) clamp(2rem, 5vw, 4rem)',
              textAlign: 'center',
              marginBottom: '5.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              aria-hidden="true"
              style={{ position: 'absolute', top: '-40px', right: '-40px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', pointerEvents: 'none' }}
            />
            <div
              aria-hidden="true"
              style={{ position: 'absolute', bottom: '-60px', left: '-30px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', pointerEvents: 'none' }}
            />
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', marginBottom: '1.1rem' }}>
              Our Mission
            </p>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(1.35rem, 3vw, 1.85rem)', fontWeight: 900, color: '#fff', lineHeight: 1.4, maxWidth: '700px', margin: '0 auto 1.25rem' }}>
              "To be the dental practice parents trust and children actually look forward to visiting."
            </p>
            <p style={{ fontSize: '1rem', fontWeight: 500, color: 'rgba(255,255,255,0.85)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              We achieve this through specialized pediatric training, a team hired for their warmth as much as their skill, and an environment designed from the ground up with little ones in mind.
            </p>
          </div>
        </AnimatedSection>

        {/* ── Why Pediatric-Only ─────────────────────────────────── */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#78509b', marginBottom: '0.6rem' }}>
              Why We Specialize
            </span>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 900, color: '#4A90A4', lineHeight: 1.2, margin: '0 0 0.75rem' }}>
              Why Pediatric-Only?
            </h2>
            <p style={{ fontSize: '1rem', fontWeight: 500, color: '#6b7280', maxWidth: '540px', margin: '0 auto', lineHeight: 1.72 }}>
              Pediatric dentistry is a recognized specialty requiring years of advanced training beyond dental school. Here is what that means for your child.
            </p>
          </div>
        </AnimatedSection>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '5.5rem' }}
        >
          {WHY_ITEMS.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div
                style={{
                  background: '#fff',
                  border: '1.5px solid rgba(74,144,164,0.10)',
                  borderRadius: '1.75rem',
                  padding: '2rem',
                  height: '100%',
                  boxShadow: '0 2px 16px rgba(74,144,164,0.07)',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                }}
                className="about-why-card"
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #dcf0ee, #b8e0da)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  {item.icon}
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#4A90A4', marginBottom: '0.6rem', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.93rem', color: '#6b7280', lineHeight: 1.7, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ── Our Environment ───────────────────────────────────── */}
        <div className="mb-24 grid items-center gap-12 md:grid-cols-2">
          <AnimatedSection direction="right">
            <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#E8934F', marginBottom: '0.75rem' }}>
              Our Space
            </span>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 900, color: '#4A90A4', lineHeight: 1.2, marginBottom: '1.1rem' }}>
              An Office Built for Children
            </h2>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: '#6b7280', marginBottom: '1rem' }}>
              Step inside and you will instantly feel the difference. No clinical cold whites or intimidating equipment in plain sight — our office is warm, colorful, and filled with details that make kids smile before they even sit in the chair.
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['Child-scaled furnishings throughout', 'Sensory-friendly lighting in all treatment rooms', 'TVs in every operatory — kids choose what they watch', 'HEPA air purification', 'Dedicated kids play zone in the waiting area'].map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.93rem', color: '#6b7280' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6BA899', flexShrink: 0 }} />
                  {f}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '1.75rem' }}>
              <Link
                href="/about/tour-our-office"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#4A90A4', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid rgba(74,144,164,0.3)', paddingBottom: '2px' }}
              >
                Take a Virtual Tour
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.12}>
            <div
              style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '1.75rem', overflow: 'hidden' }}
              className="shadow-xl"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0]"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', opacity: 0.55 }}>
                  <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="#6BA899" strokeWidth="1.4" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6b7280' }}>
                    Office Photo Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ── Team Teaser ───────────────────────────────────────── */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#78509b', marginBottom: '0.6rem' }}>
              Get to Know Us
            </span>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 900, color: '#4A90A4', lineHeight: 1.2, margin: '0 0 0.75rem' }}>
              Meet the Four Specialists Behind Every Smile
            </h2>
            <p style={{ fontSize: '1rem', fontWeight: 500, color: '#6b7280', maxWidth: '500px', margin: '0 auto', lineHeight: 1.72 }}>
              Four board-certified pediatric dentists. One shared passion for making every child feel safe, seen, and cared for.
            </p>
          </div>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
          {DOCTORS_TEASER.map((doc, i) => (
            <AnimatedSection key={doc.name} delay={i * 0.08}>
              <Link
                href={doc.href}
                style={{ display: 'block', textDecoration: 'none' }}
                className="doctor-teaser-card"
              >
                <div
                  style={{
                    background: '#fff',
                    border: '1.5px solid rgba(74,144,164,0.10)',
                    borderRadius: '1.5rem',
                    padding: '1.5rem 1.25rem',
                    textAlign: 'center',
                    boxShadow: '0 2px 16px rgba(74,144,164,0.07)',
                    transition: 'box-shadow 0.3s, transform 0.3s',
                  }}
                >
                  <div style={{ position: 'relative', width: '88px', height: '88px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1rem' }}>
                    <Image
                      src={doc.photo}
                      alt={`Headshot of ${doc.name}`}
                      fill
                      sizes="88px"
                      style={{ objectFit: 'cover', objectPosition: 'top center' }}
                    />
                  </div>
                  <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.92rem', color: '#4A90A4', margin: '0 0 0.25rem', lineHeight: 1.3 }}>
                    {doc.name}
                  </p>
                  <p style={{ fontSize: '0.78rem', fontWeight: 600, color: '#9ca3af', margin: '0 0 0.75rem', letterSpacing: '0.02em' }}>
                    {doc.role}
                  </p>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#E8934F', fontFamily: 'Nunito, sans-serif' }}>
                    Meet Dr. {doc.name.split(' ')[1]} ›
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <Link
              href="/about/meet-the-dentists"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #E8934F, #E97D63)',
                color: '#fff',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 800,
                fontSize: '0.95rem',
                padding: '0.85rem 2.25rem',
                borderRadius: '100px',
                textDecoration: 'none',
                boxShadow: '0 6px 22px rgba(232,147,79,0.38)',
              }}
            >
              Meet the Full Team
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>

        {/* ── Big CTA ───────────────────────────────────────────── */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(180deg, #FDFCF8 0%, #EFF6FF 100%)',
              border: '1.5px solid rgba(74,144,164,0.12)',
              borderRadius: '2rem',
              padding: '3rem 2rem',
              textAlign: 'center',
              marginBottom: '2rem',
              marginTop: '3rem',
            }}
          >
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#78509b', marginBottom: '0.75rem' }}>
              Ready to Visit?
            </p>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: '#4A90A4', lineHeight: 1.2, marginBottom: '0.85rem' }}>
              New patients always welcome.
            </h2>
            <p style={{ fontSize: '1rem', fontWeight: 500, color: '#6b7280', maxWidth: '440px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
              Request an appointment online — we will call you within one business day to confirm. Same-day appointments available.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/request-appointment"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'linear-gradient(135deg, #E8934F, #E97D63)', color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.95rem', padding: '0.85rem 2rem', borderRadius: '100px', textDecoration: 'none', boxShadow: '0 6px 22px rgba(232,147,79,0.35)' }}
              >
                Request Appointment
              </Link>
              <Link
                href="tel:+18472231400"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: '#4A90A4', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.95rem', padding: '0.85rem 2rem', borderRadius: '100px', textDecoration: 'none', border: '2px solid rgba(74,144,164,0.3)' }}
              >
                Call (847) 223-1400
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>

      <style>{`
        .about-why-card:hover { box-shadow: 0 16px 42px rgba(74,144,164,0.14) !important; transform: translateY(-4px); }
        .doctor-teaser-card > div:hover { box-shadow: 0 12px 36px rgba(74,144,164,0.14) !important; transform: translateY(-4px); }
      `}</style>
    </SubPageLayout>
  )
}
