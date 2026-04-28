import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import FaqAccordion, { type FaqItem } from '@/components/FaqAccordion'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Restorative Dentistry for Kids | Kids Dentist Grayslake, IL',
  description:
    'Gentle restorative dental care for children in Grayslake, IL — tooth-colored fillings, pediatric crowns, pulp therapy, and extractions. Treating cavities early protects your child\'s smile.',
  openGraph: {
    title: 'Restorative Dentistry for Kids | Kids Dentist Grayslake, IL',
    description:
      'When a cavity or dental injury needs treatment, Kids Dentist Grayslake provides gentle, child-centered restorative care that protects your child\'s long-term dental health.',
    url: 'https://kidsdds.com/services/restorative-dentistry',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const TREATMENTS = [
  {
    number: '01',
    title: 'Tooth-Colored Fillings',
    description:
      'When a cavity is caught early, a tooth-colored composite filling is all that\'s needed. We use composite resin that matches your child\'s natural tooth shade — no silver amalgam, no visible metal. The procedure is quick, gentle, and often surprises both kids and parents with how easy it is.',
    whatToExpect: 'Typically completed in a single visit. Mild numbing, quick cleanup of decay, and a perfectly matched restoration. Most kids leave ready for lunch.',
    accentColor: '#6BA899',
    gradientFrom: '#D1FAE5',
    gradientTo: '#A7F3D0',
    icon: '✨',
  },
  {
    number: '02',
    title: 'Pediatric Crowns',
    description:
      'When decay is more advanced or a tooth is significantly weakened, a crown provides full coverage protection. We use tooth-colored zirconia crowns for front teeth and durable stainless steel crowns for back molars — both designed to last until the baby tooth naturally falls out.',
    whatToExpect: 'Usually completed in one appointment. We prioritize making the experience as comfortable as possible — children are often surprised by how manageable it is.',
    accentColor: '#4A90A4',
    gradientFrom: '#DBEAFE',
    gradientTo: '#BAE6FD',
    icon: '👑',
  },
  {
    number: '03',
    title: 'Pulp Therapy (Pediatric Root Canal)',
    description:
      'When decay reaches the nerve of a baby tooth, pulp therapy — sometimes called a pediatric root canal — removes the infected tissue to save the tooth. Preserving baby teeth is important: they hold space for permanent teeth and are essential for proper speech and chewing development.',
    whatToExpect: 'The term "root canal" sounds intimidating, but pediatric pulp therapy is far simpler than an adult procedure. We perform it with gentle technique and appropriate anesthesia to keep your child comfortable throughout.',
    accentColor: '#D97706',
    gradientFrom: '#FEF3C7',
    gradientTo: '#FDE68A',
    icon: '🩺',
  },
  {
    number: '04',
    title: 'Tooth Extractions',
    description:
      'Sometimes a tooth is too damaged to save, or a baby tooth needs to be removed to make room for an erupting permanent tooth. When an extraction is necessary, we perform it with care, precision, and appropriate anesthesia — ensuring your child feels nothing beyond a pressure sensation.',
    whatToExpect: 'We will walk you and your child through exactly what to expect before, during, and after. Space maintainers are discussed when needed to protect alignment for the incoming permanent tooth.',
    accentColor: '#7C3AED',
    gradientFrom: '#EDE9FE',
    gradientTo: '#DDD6FE',
    icon: '🫧',
  },
]

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Why fill a cavity in a baby tooth if it\'s going to fall out anyway?',
    answer:
      'Untreated cavities in baby teeth can cause severe pain, lead to dangerous infections, and directly affect the development and spacing of the permanent teeth growing underneath. Baby teeth are not just placeholders — they support speech, nutrition, and jaw development. Leaving a cavity untreated is never the safe choice.',
  },
  {
    question: 'Are your fillings and crowns safe?',
    answer:
      'Yes. We use safe, mercury-free, tooth-colored composite fillings and high-quality crowns to restore your child\'s smile safely and beautifully. Our restorative materials are chosen specifically for pediatric patients — durable, biocompatible, and virtually invisible in your child\'s smile.',
  },
]

export default function RestorativeDentistryPage() {
  return (
    <SubPageLayout
      title="Restorative Dentistry"
      subtitle="Gentle, precise care that repairs damage and protects your child's long-term dental health."
      gradient="green"
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
            When decay or damage reaches a tooth, early treatment is always the right call. A small cavity treated today is a filling. A cavity ignored for six months becomes a crown. A crown ignored becomes an extraction. We will always be honest about where your child stands — and we treat problems at the earliest possible stage.
          </p>
        </AnimatedSection>

        {/* Urgency callout */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(233,125,99,0.08), rgba(232,147,79,0.08))',
              border: '2px solid rgba(233,125,99,0.25)',
              borderRadius: '1.5rem',
              padding: '1.75rem 2rem',
              marginBottom: '4rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.25rem',
            }}
          >
            <span style={{ fontSize: '2rem', lineHeight: 1, flexShrink: 0 }} aria-hidden="true">⚠️</span>
            <div>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.1rem', color: '#E97D63', margin: '0 0 0.5rem' }}>
                Don't Wait — Cavities Grow
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#6b7280', margin: 0 }}>
                Tooth decay does not pause between appointments. What starts as a minor cavity in enamel can reach the nerve within months, turning a quick filling into a much more involved procedure. If your child has been overdue for a visit, or if you have noticed sensitivity, discoloration, or visible spots, now is the time to schedule.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Treatment types */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6BA899', marginBottom: '0.5rem' }}>
              Treatments We Provide
            </span>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#3D3D3D', margin: 0 }}>
              Four Restorative Solutions
            </h2>
          </div>
        </AnimatedSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '5rem' }}>
          {TREATMENTS.map((tx, i) => (
            <AnimatedSection key={tx.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={0.05}>
              <div
                style={{
                  background: `linear-gradient(135deg, ${tx.gradientFrom}44, ${tx.gradientTo}22)`,
                  border: `1.5px solid ${tx.accentColor}20`,
                  borderRadius: '1.75rem',
                  padding: '2rem 2rem 2rem',
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.4rem',
                    flexShrink: 0,
                    width: '56px',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '1.1rem',
                      background: `linear-gradient(135deg, ${tx.gradientFrom}, ${tx.gradientTo})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.6rem',
                      boxShadow: `0 4px 14px ${tx.accentColor}22`,
                    }}
                    aria-hidden="true"
                  >
                    {tx.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 900,
                      fontSize: '0.7rem',
                      color: tx.accentColor,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {tx.number}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.15rem', color: tx.accentColor, margin: '0 0 0.65rem', lineHeight: 1.3 }}>
                    {tx.title}
                  </h3>
                  <p style={{ fontSize: '0.93rem', lineHeight: 1.75, color: '#6b7280', margin: '0 0 1rem' }}>
                    {tx.description}
                  </p>
                  <div
                    style={{
                      background: 'rgba(255,255,255,0.7)',
                      borderRadius: '0.85rem',
                      padding: '0.85rem 1rem',
                      display: 'flex',
                      gap: '0.65rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke={tx.accentColor} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p style={{ fontSize: '0.855rem', lineHeight: 1.6, color: '#6b7280', margin: 0, fontStyle: 'italic' }}>
                      <strong style={{ color: tx.accentColor, fontStyle: 'normal' }}>What to expect: </strong>
                      {tx.whatToExpect}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* FAQ */}
        <AnimatedSection>
          <div style={{ marginBottom: '5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6BA899', marginBottom: '0.5rem' }}>
                Common Questions
              </span>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: '#3D3D3D', margin: 0 }}>
                What Parents Want to Know
              </h2>
            </div>
            <FaqAccordion items={FAQ_ITEMS} accentColor="#6BA899" />
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#4A90A4', marginBottom: '1.25rem' }}>
              Early treatment is simpler, faster, and far less costly. Let us take a look.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/request-appointment"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'linear-gradient(135deg, #E8934F, #E97D63)', color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.95rem', padding: '0.85rem 2rem', borderRadius: '100px', textDecoration: 'none', boxShadow: '0 6px 22px rgba(232,147,79,0.35)' }}
              >
                Book an Appointment
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
