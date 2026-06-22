import SubPageLayout from '@/components/SubPageLayout'
import ContactContent from './ContactContent'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Contact a Pediatric Dentist in Grayslake, IL | Kids Dentist',
  description:
    'Contact Kids Dentist Grayslake — serving Libertyville, Mundelein, Waukegan, Vernon Hills, and Lake Forest. Call (847) 223-1400. 160 Commerce Dr #100, Grayslake, IL. Emergency visits available.',
  alternates: { canonical: 'https://www.kidsdds.com/contact' },
  openGraph: {
    title: 'Contact a Pediatric Dentist in Grayslake, IL | Kids Dentist',
    description:
      'Call (847) 223-1400 or send a message. Serving families from Grayslake, Libertyville, Mundelein, and throughout Lake County, IL.',
    url: 'https://www.kidsdds.com/contact',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('contactPage')

  return (
    <SubPageLayout
      kicker={t('kicker')}
      title={t('title')}
      subtitle={t('subtitle')}
      gradient="blue"
    >
      <ContactContent />
    </SubPageLayout>
  )
}
