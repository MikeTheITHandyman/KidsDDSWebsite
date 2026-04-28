import SubPageLayout from '@/components/SubPageLayout'
import ContactContent from './ContactContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Our Office | Kids Dentist Grayslake, IL',
  description:
    'Contact Kids Dentist Grayslake at (847) 223-1400. Located at 160 Commerce Dr #100, Grayslake, IL. Office hours Monday–Friday 8am–5pm.',
  openGraph: {
    title: 'Contact Our Office | Kids Dentist Grayslake, IL',
    description:
      'Send us a message or call (847) 223-1400. We respond within one business day.',
    url: 'https://kidsdds.com/contact',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <SubPageLayout
      kicker="We're Here for You"
      title="Contact Our Office"
      subtitle="Questions, comments, or ready to book — we would love to hear from you."
      gradient="blue"
    >
      <ContactContent />
    </SubPageLayout>
  )
}
