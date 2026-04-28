import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import FaqAccordion, { type FaqItem } from '@/components/FaqAccordion'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preventive Dentistry for Kids | Kids Dentist Grayslake, IL',
  description:
    'Comprehensive preventive dental care for children in Grayslake, IL — cleanings, fluoride treatments, dental sealants, digital X-rays, and early orthodontic screening. Starting at age one.',
  openGraph: {
    title: 'Preventive Dentistry for Kids | Kids Dentist Grayslake, IL',
    description:
      'Prevention is the most powerful tool in pediatric dentistry. Learn how Kids Dentist Grayslake keeps your child cavity-free and healthy at every age.',
    url: 'https://kidsdds.com/services/preventive-dentistry',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const SERVICES_COVERED = [
  {
    icon: '🪥',
    title: 'Cleanings & Comprehensive Exams',
    description:
      'Professional cleanings remove tartar and plaque that brushing at home cannot reach. Every cleaning includes a thorough exam of teeth, gums, bite, jaw, and soft tissues — catching small issues before they become big ones.',
    accentColor: '#4A90A4',
    gradientFrom: '#DBEAFE',
    gradientTo: '#BAE6FD',
  },
  {
    icon: '💧',
    title: 'Fluoride Treatments',
    description:
      'Fluoride is nature\'s cavity fighter. A quick professional fluoride treatment after each cleaning strengthens enamel, reverses early-stage decay, and dramatically reduces the likelihood of cavities — especially during high-risk growth years.',
    accentColor: '#6BA899',
    gradientFrom: '#D1FAE5',
    gradientTo: '#A7F3D0',
  },
  {
    icon: '🛡️',
    title: 'Dental Sealants',
    description:
      'The chewing surfaces of back molars are full of grooves where bacteria hide and thrive. Sealants are a thin, protective coating that bonds into those grooves and acts as a shield — proven to reduce cavity risk by up to 80% in the treated teeth.',
    accentColor: '#D97706',
    gradientFrom: '#FEF3C7',
    gradientTo: '#FDE68A',
  },
  {
    icon: '📡',
    title: 'Digital X-Rays',
    description:
      'Our digital X-ray system uses up to 90% less radiation than traditional film X-rays. Images are available instantly on-screen, so we can show you exactly what we see — and explain everything clearly — right during your visit.',
    accentColor: '#7C3AED',
    gradientFrom: '#EDE9FE',
    gradientTo: '#DDD6FE',
  },
  {
    icon: '🦷',
    title: 'Early Orthodontic Screening',
    description:
      'The American Association of Orthodontists recommends a first orthodontic screening at age 7. Catching alignment issues early means simpler, shorter, and less expensive treatment — and avoids problems that compound as the jaw grows.',
    accentColor: '#E97D63',
    gradientFrom: '#FFE4E6',
    gradientTo: '#FECDD3',
  },
]

const AGE_STAGES = [
  {
    range: '0 – 2',
    label: 'First Tooth to Age 2',
    detail:
      'The first dental visit should happen when the first tooth appears or by your child\'s first birthday — whichever comes first. We check for early decay, advise on feeding habits, and set the stage for a lifetime of healthy routines.',
    color: '#4A90A4',
  },
  {
    range: '3 – 5',
    label: 'Toddler & Preschool Years',
    detail:
      'Baby teeth matter more than many parents realize — they hold space for permanent teeth and affect speech development. We focus on cavity prevention and making every visit a positive, low-stress experience.',
    color: '#6BA899',
  },
  {
    range: '6 – 11',
    label: 'School-Age & Mixed Dentition',
    detail:
      'The transition from baby teeth to permanent teeth is one of the most important periods in dental development. We monitor eruption patterns, apply sealants to new molars, and perform early orthodontic screening.',
    color: '#D97706',
  },
  {
    range: '12+',
    label: 'Teen Years',
    detail:
      'Teens face unique challenges: orthodontic changes, increased sugar and sports drink exposure, and reduced parental supervision of home care habits. We provide honest, age-appropriate guidance without judgment.',
    color: '#7C3AED',
  },
]

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Is fluoride safe for kids?',
    answer:
      'Yes! Fluoride strengthens enamel and prevents cavities — it is one of the most well-studied and safe tools in pediatric dentistry. We recommend a tiny smear of fluoride toothpaste for kids under 3, and a pea-sized amount for older children. Professional fluoride treatments at each cleaning visit provide an extra layer of protection exactly where your child needs it most.',
  },
  {
    question: 'What are dental sealants?',
    answer:
      'Dental sealants are a thin protective coating painted directly onto the chewing surfaces of back teeth — the molars where cavities most often start. The sealant flows into the grooves and hardens, acting as a shield against bacteria and food particles. The procedure is quick, easy, and completely pain-free, and sealants have been shown to reduce cavity risk in treated teeth by up to 80%.',
  },
  {
    question: 'How often should my child visit the dentist?',
    answer:
      'The American Academy of Pediatric Dentistry recommends a routine checkup and cleaning every 6 months to maintain optimal oral health. Some children with higher cavity risk may benefit from more frequent visits — we will give you a personalized recommendation at your child\'s first exam.',
  },
]

export default function PreventiveDentistryPage() {
  return (
    <SubPageLayout
      title="Preventive Dentistry"
      subtitle="The best dental treatment is the kind that never needs to happen."
      gradient="blue"
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
          <p style={{ textAlign: 'center', fontSize: '1.05rem', fontWeight: 500, color: '#6b7280', maxWidth: '620px', margin: '0 auto 1.5rem', lineHeight: 1.78 }}>
            Preventive dentistry is the foundation of everything we do. When we catch small problems early — or stop them from forming in the first place — your child avoids pain, avoids complex treatment, and builds a healthy, confident relationship with dental care that lasts a lifetime.
          </p>
          <p style={{ textAlign: 'center', fontSize: '0.95rem', fontWeight: 600, color: '#4A90A4', margin: '0 auto 4rem', maxWidth: '400px' }}>
            We recommend visits every 6 months, starting at age one.
          </p>
        </AnimatedSection>

        {/* Services covered */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4A90A4', marginBottom: '0.5rem' }}>
              What We Cover
            </span>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#3D3D3D', margin: 0 }}>
              Five Pillars of Preventive Care
            </h2>
          </div>
        </AnimatedSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '5rem' }}>
          {SERVICES_COVERED.map((svc, i) => (
            <AnimatedSection key={svc.title} delay={i * 0.06}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '1.5rem',
                  background: `linear-gradient(135deg, ${svc.gradientFrom}55, ${svc.gradientTo}33)`,
                  border: `1.5px solid ${svc.accentColor}22`,
                  borderRadius: '1.5rem',
                  padding: '1.75rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '1rem',
                    background: `linear-gradient(135deg, ${svc.gradientFrom}, ${svc.gradientTo})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    boxShadow: `0 4px 14px ${svc.accentColor}22`,
                  }}
                  aria-hidden="true"
                >
                  {svc.icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.05rem', color: svc.accentColor, margin: '0 0 0.5rem', lineHeight: 1.3 }}>
                    {svc.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.72, color: '#6b7280', margin: 0 }}>
                    {svc.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Age stages */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(74,144,164,0.05), rgba(107,168,153,0.07))',
              border: '1.5px solid rgba(74,144,164,0.10)',
              borderRadius: '2rem',
              padding: '3rem 2.5rem',
              marginBottom: '5rem',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
              <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#78509b', marginBottom: '0.5rem' }}>
                Preventive Care by Age
              </span>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: '#4A90A4', margin: 0 }}>
                What to Expect at Every Stage
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.1rem' }}>
              {AGE_STAGES.map((stage) => (
                <div
                  key={stage.range}
                  style={{
                    background: '#fff',
                    borderRadius: '1.25rem',
                    padding: '1.4rem 1.25rem',
                    boxShadow: '0 2px 12px rgba(74,144,164,0.07)',
                    borderTop: `3px solid ${stage.color}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 900,
                      fontSize: '1.5rem',
                      color: stage.color,
                      marginBottom: '0.2rem',
                      lineHeight: 1,
                    }}
                  >
                    {stage.range}
                  </div>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.82rem', color: '#3D3D3D', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {stage.label}
                  </div>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: '#6b7280', margin: 0 }}>
                    {stage.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ */}
        <AnimatedSection>
          <div style={{ marginBottom: '5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4A90A4', marginBottom: '0.5rem' }}>
                Common Questions
              </span>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: '#3D3D3D', margin: 0 }}>
                Parents Ask, We Answer
              </h2>
            </div>
            <FaqAccordion items={FAQ_ITEMS} accentColor="#4A90A4" />
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#4A90A4', marginBottom: '1.25rem' }}>
              Ready to set your child up for a lifetime of healthy smiles?
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/request-appointment"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'linear-gradient(135deg, #E8934F, #E97D63)', color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.95rem', padding: '0.85rem 2rem', borderRadius: '100px', textDecoration: 'none', boxShadow: '0 6px 22px rgba(232,147,79,0.35)' }}
              >
                Schedule a Cleaning
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
