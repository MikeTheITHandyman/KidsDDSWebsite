import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import FaqAccordion, { type FaqItem } from '@/components/FaqAccordion'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sedation Dentistry for Kids | Kids Dentist Grayslake, IL',
  description:
    'Safe, comfortable sedation dentistry for children in Grayslake, IL — nitrous oxide, oral conscious sedation, and general anesthesiology. Serving anxious children and those with special needs.',
  openGraph: {
    title: 'Sedation Dentistry for Kids | Kids Dentist Grayslake, IL',
    description:
      'No child should avoid necessary dental care because of fear or anxiety. Kids Dentist Grayslake offers three levels of sedation to meet every child\'s needs.',
    url: 'https://kidsdds.com/services/sedation-dentistry',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const WHO_ITS_FOR = [
  { icon: '😰', label: 'Children with significant dental anxiety or phobia' },
  { icon: '🧠', label: 'Kids with autism, sensory processing differences, or ADHD' },
  { icon: '🏥', label: 'Children with complex medical histories or special needs' },
  { icon: '🦷', label: 'Patients who need extensive dental work in one visit' },
  { icon: '👶', label: 'Very young children who are not yet developmentally ready to cooperate' },
  { icon: '🩺', label: 'Children who have had a traumatic dental experience in the past' },
]

const SEDATION_OPTIONS = [
  {
    number: '01',
    title: 'Nitrous Oxide',
    subtitle: 'Laughing Gas — Light Relaxation',
    description:
      'Nitrous oxide is a mild sedative inhaled through a small nose mask during treatment. It produces a pleasant, relaxed feeling — children often describe it as feeling "floaty" or "funny." It does not put your child to sleep; they remain awake and can respond to directions.',
    howItWorks: 'Effects begin within minutes and wear off completely within 5 minutes of removing the mask. Children can eat normally beforehand and return to school or activities immediately after.',
    ideal: 'Mild to moderate anxiety, short procedures, children who are cooperative but nervous.',
    accentColor: '#4A90A4',
    gradientFrom: '#DBEAFE',
    gradientTo: '#BAE6FD',
    icon: '😌',
  },
  {
    number: '02',
    title: 'Oral Conscious Sedation',
    subtitle: 'Liquid Medication — Deeper Calm',
    description:
      'Oral conscious sedation involves a liquid medication given by mouth before the appointment. Your child will become deeply relaxed — often drowsy or even sleepy — but remains able to breathe independently and respond if spoken to. It is commonly used for children with moderate to significant anxiety, or for longer procedures.',
    howItWorks: 'The medication takes 30–45 minutes to take effect. Children typically have little or no memory of the procedure. A responsible adult must drive to and from the appointment, and children must follow fasting guidelines.',
    ideal: 'Moderate to significant anxiety, longer appointments, children who struggle with needles or gagging.',
    accentColor: '#D97706',
    gradientFrom: '#FEF3C7',
    gradientTo: '#FDE68A',
    icon: '💤',
  },
  {
    number: '03',
    title: 'General Anesthesiology',
    subtitle: 'In-Office — Deepest Level of Care',
    description:
      'Our practice is one of the few in Lake County to offer in-office general anesthesiology — administered by Dr. Rutcosky, who holds advanced certification in general anesthesiology. This option allows children who require the deepest level of sedation support to receive comprehensive dental care safely, comfortably, and in a familiar environment.',
    howItWorks: 'Performed in our office with full monitoring equipment. Children are completely asleep and have no awareness or memory of the procedure. A thorough pre-operative consultation is required to review medical history and determine candidacy.',
    ideal: 'Children with severe anxiety, extensive treatment needs, special needs, complex medical backgrounds, or who have not responded to lighter sedation.',
    accentColor: '#7C3AED',
    gradientFrom: '#EDE9FE',
    gradientTo: '#DDD6FE',
    icon: '🏥',
  },
]

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Do you offer sedation for nervous kids?',
    answer:
      'Yes! We have safe, gentle options — including laughing gas (nitrous oxide) — to help kids feel completely relaxed and comfortable during their visit. For children who need a deeper level of calm, we also offer oral conscious sedation and in-office general anesthesiology administered by Dr. Rutcosky, who holds advanced certification in pediatric anesthesiology.',
  },
  {
    question: 'Is sedation safe for my child?',
    answer:
      'Absolutely. Our board-certified pediatric dentists are highly trained in safely administering and monitoring child-appropriate sedation. We follow strict American Academy of Pediatric Dentistry guidelines, conduct thorough pre-operative health screenings, use age- and weight-appropriate dosing, and monitor vital signs throughout every procedure. Safety is always our first priority.',
  },
]

export default function SedationDentistryPage() {
  return (
    <SubPageLayout
      title="Sedation Dentistry"
      subtitle="Because every child deserves dental care that is calm, safe, and completely manageable."
      gradient="amber"
    >
      <div className="mx-auto max-w-5xl px-4">

        {/* Back link */}
        <AnimatedSection>
          <Link
            href="/services"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#4A90A4', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', marginBottom: '2.5rem' }}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Services
          </Link>
        </AnimatedSection>

        {/* Intro */}
        <AnimatedSection>
          <p style={{ textAlign: 'center', fontSize: '1.05rem', fontWeight: 500, color: '#6b7280', maxWidth: '620px', margin: '0 auto 4rem', lineHeight: 1.78 }}>
            Dental anxiety is real — and it is more common than most parents realize. The last thing we want is for fear to stand between your child and the care they need. That is why we offer three levels of sedation, tailored to each child's situation, so that every patient can receive treatment comfortably and without trauma.
          </p>
        </AnimatedSection>

        {/* Who it's for */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(217,119,6,0.05), rgba(232,147,79,0.07))',
              border: '1.5px solid rgba(217,119,6,0.12)',
              borderRadius: '2rem',
              padding: '2.75rem 2.5rem',
              marginBottom: '5rem',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D97706', marginBottom: '0.5rem' }}>
                Is This Right for Your Child?
              </span>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: '#4A90A4', margin: 0 }}>
                Sedation May Be Appropriate If Your Child…
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              {WHO_ITS_FOR.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                    background: '#fff',
                    borderRadius: '1.1rem',
                    padding: '1rem 1.1rem',
                    boxShadow: '0 2px 10px rgba(217,119,6,0.07)',
                  }}
                >
                  <span style={{ fontSize: '1.35rem', lineHeight: 1, flexShrink: 0 }} aria-hidden="true">{item.icon}</span>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#6b7280', margin: 0, lineHeight: 1.55 }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Sedation options */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D97706', marginBottom: '0.5rem' }}>
              Three Levels of Comfort
            </span>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#3D3D3D', margin: 0 }}>
              Sedation Options We Offer
            </h2>
          </div>
        </AnimatedSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '5rem' }}>
          {SEDATION_OPTIONS.map((opt) => (
            <AnimatedSection key={opt.title} delay={0.05}>
              <div
                style={{
                  background: `linear-gradient(135deg, ${opt.gradientFrom}44, ${opt.gradientTo}22)`,
                  border: `1.5px solid ${opt.accentColor}20`,
                  borderRadius: '1.75rem',
                  overflow: 'hidden',
                }}
              >
                {/* Header bar */}
                <div
                  style={{
                    background: `linear-gradient(135deg, ${opt.gradientFrom}, ${opt.gradientTo})`,
                    padding: '1.25rem 1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <span style={{ fontSize: '1.75rem', lineHeight: 1 }} aria-hidden="true">{opt.icon}</span>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '0.7rem', color: opt.accentColor, letterSpacing: '0.06em' }}>
                        Option {opt.number}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.2rem', color: opt.accentColor, margin: '0.1rem 0 0.1rem', lineHeight: 1.2 }}>
                      {opt.title}
                    </h3>
                    <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: opt.accentColor, margin: 0, opacity: 0.75 }}>
                      {opt.subtitle}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '1.5rem 1.75rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ fontSize: '0.93rem', lineHeight: 1.75, color: '#6b7280', margin: 0 }}>
                    {opt.description}
                  </p>
                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <div style={{ background: 'rgba(255,255,255,0.8)', borderRadius: '0.85rem', padding: '0.85rem 1rem', display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke={opt.accentColor} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p style={{ fontSize: '0.855rem', lineHeight: 1.6, color: '#6b7280', margin: 0 }}>
                        <strong style={{ color: opt.accentColor }}>How it works: </strong>
                        {opt.howItWorks}
                      </p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.8)', borderRadius: '0.85rem', padding: '0.85rem 1rem', display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke={opt.accentColor} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p style={{ fontSize: '0.855rem', lineHeight: 1.6, color: '#6b7280', margin: 0 }}>
                        <strong style={{ color: opt.accentColor }}>Ideal for: </strong>
                        {opt.ideal}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Parent FAQ */}
        <AnimatedSection>
          <div style={{ marginBottom: '5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D97706', marginBottom: '0.5rem' }}>
                Parent FAQ
              </span>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: '#3D3D3D', margin: 0 }}>
                Questions We Hear from Every Parent
              </h2>
            </div>
            <FaqAccordion items={FAQ_ITEMS} accentColor="#D97706" />
          </div>
        </AnimatedSection>

        {/* Dr. Dave callout */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(107,168,153,0.07), rgba(74,144,164,0.07))',
              border: '1.5px solid rgba(107,168,153,0.18)',
              borderRadius: '2rem',
              padding: '2.5rem',
              marginBottom: '4rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ flexShrink: 0, width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, #D1FAE5, #A7F3D0)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem' }} aria-hidden="true">
              🩺
            </div>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.05rem', color: '#6BA899', margin: '0 0 0.5rem' }}>
                Led by Dr. Dave Rutcosky, DDS
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.72, color: '#6b7280', margin: '0 0 1rem' }}>
                Dr. Rutcosky holds advanced certification in general anesthesiology and has over 20 years of experience treating children with complex needs. He leads our sedation program and personally oversees every general anesthesiology case performed in our office. Families throughout Lake County trust him to provide care that is truly impossible to access elsewhere.
              </p>
              <Link
                href="/about/meet-the-dentists/dr-dave-rutcosky"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#6BA899', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.875rem', textDecoration: 'none' }}
              >
                Meet Dr. Dave
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#4A90A4', marginBottom: '1.25rem' }}>
              Not sure where to start? Let's talk through your child's situation together.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/request-appointment"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'linear-gradient(135deg, #E8934F, #E97D63)', color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.95rem', padding: '0.85rem 2rem', borderRadius: '100px', textDecoration: 'none', boxShadow: '0 6px 22px rgba(232,147,79,0.35)' }}
              >
                Talk to Us About Sedation Options
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
    </SubPageLayout>
  )
}
