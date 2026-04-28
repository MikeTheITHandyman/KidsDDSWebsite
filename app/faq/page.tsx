import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import FaqAccordion, { type FaqItem } from '@/components/FaqAccordion'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Kids Dentist Grayslake, IL',
  description:
    'Answers to the questions parents ask most about pediatric dental care at Kids Dentist Grayslake — first visits, X-ray safety, emergencies, and more.',
  openGraph: {
    title: 'Frequently Asked Questions | Kids Dentist Grayslake, IL',
    description:
      'Everything parents ask about pediatric dentistry — answered clearly and honestly by the Kids Dentist Grayslake team.',
    url: 'https://kidsdds.com/faq',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const GROUPS: { label: string; icon: string; accentColor: string; items: FaqItem[] }[] = [
  {
    label: 'General Practice & First Visit',
    icon: '👋',
    accentColor: '#4A90A4',
    items: [
      {
        question: 'When should my child have their first dental visit?',
        answer:
          'The American Academy of Pediatric Dentistry recommends that a child go to the dentist by age 1, or within six months after their first tooth erupts. Starting early helps build trust and sets the foundation for a lifetime of healthy smiles.',
      },
      {
        question: 'Can I stay with my child during their appointment?',
        answer:
          'Absolutely! We have an open-door policy. You are always welcome to accompany your child into the treatment area to help them feel secure and comfortable. We believe a relaxed parent makes for a relaxed child.',
      },
    ],
  },
  {
    label: 'Safety & Treatments',
    icon: '🛡️',
    accentColor: '#6BA899',
    items: [
      {
        question: 'Are dental X-rays safe for children?',
        answer:
          'Yes. We use state-of-the-art digital X-rays that reduce radiation exposure by up to 90% compared to traditional film X-rays. X-rays are an essential diagnostic tool for finding hidden cavities and monitoring the development of permanent teeth — and we only take them when clinically necessary.',
      },
      {
        question: "Why fix a cavity in a baby tooth if it's going to fall out anyway?",
        answer:
          'Baby teeth are crucial for proper chewing, speech development, and saving space for permanent teeth. Untreated cavities can cause severe pain, lead to dangerous infections, and permanently damage the adult teeth growing underneath. "It will fall out anyway" is one of the most common misconceptions we address — and one of the most important to correct.',
      },
    ],
  },
  {
    label: 'Dental Emergencies',
    icon: '🚨',
    accentColor: '#E97D63',
    items: [
      {
        question: 'What should I do if my child knocks out a permanent tooth?',
        answer:
          'Find the tooth and hold it by the crown — the top part, not the root. Gently rinse it with cold water. If possible, carefully reinsert it into the socket and have your child hold it in place. If you cannot reinsert it, place the tooth in a cup of cold milk and call us immediately. Time is critical — the sooner we see your child, the better the chance of saving the tooth.',
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <SubPageLayout
      kicker="Got Questions?"
      title="Frequently Asked Questions"
      subtitle="Everything parents ask — answered clearly and honestly."
      gradient="blue"
    >
      <div className="mx-auto max-w-3xl px-4">

        {GROUPS.map((group, gi) => (
          <AnimatedSection key={group.label} delay={gi * 0.08}>
            <div style={{ marginBottom: '3rem' }}>
              {/* Group header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                }}
              >
                <span
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '0.75rem',
                    background: `${group.accentColor}18`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  {group.icon}
                </span>
                <h2
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 900,
                    fontSize: '0.78rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.10em',
                    color: group.accentColor,
                    margin: 0,
                  }}
                >
                  {group.label}
                </h2>
              </div>

              <FaqAccordion items={group.items} accentColor={group.accentColor} />
            </div>
          </AnimatedSection>
        ))}

        {/* Still have questions CTA */}
        <AnimatedSection delay={0.24}>
          <div
            style={{
              background: 'linear-gradient(135deg, #EFF6FF, #E0F2FE)',
              border: '1.5px solid rgba(74,144,164,0.15)',
              borderRadius: '2rem',
              padding: '2.5rem',
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            <p
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 900,
                fontSize: '1.15rem',
                color: '#4A90A4',
                margin: '0 0 0.5rem',
              }}
            >
              Still have questions?
            </p>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#6b7280',
                fontWeight: 500,
                margin: '0 0 1.5rem',
                lineHeight: 1.65,
              }}
            >
              Our friendly team is happy to chat. Give us a call or send us a message.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
              <Link
                href="tel:+18472231400"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  background: 'linear-gradient(135deg, #E8934F, #E97D63)',
                  color: '#fff',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  padding: '0.8rem 1.75rem',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(232,147,79,0.32)',
                }}
              >
                Call (847) 223-1400
              </Link>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: '#4A90A4',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  padding: '0.8rem 1.75rem',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  border: '1.5px solid rgba(74,144,164,0.28)',
                  background: '#fff',
                }}
              >
                Send a Message →
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </SubPageLayout>
  )
}
