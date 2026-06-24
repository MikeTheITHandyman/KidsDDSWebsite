import SubPageLayout from '@/components/SubPageLayout'
import DoctorGrid from './DoctorGrid'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Meet Our Dentists | Kids Dentist Grayslake, IL',
  description:
    'Meet Dr. Sonia Gutierrez, Dr. Dave Rutcosky, Dr. Sahar Alrayyes, and Dr. Anne-Ashley Compton — four board-certified pediatric dentists serving Grayslake and Lake County, IL.',
  alternates: { canonical: 'https://www.kidsdds.com/about/meet-the-dentists' },
  openGraph: {
    title: 'Meet Our Dentists | Kids Dentist Grayslake, IL',
    description:
      "Four board-certified pediatric specialists dedicated exclusively to children's dental health in Grayslake, IL.",
    url: 'https://www.kidsdds.com/about/meet-the-dentists',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

export default async function MeetTheDentistsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('meetDentists')

  return (
    <SubPageLayout
      kicker={t('kicker')}
      title={t('title')}
      subtitle={t('subtitle')}
      gradient="blue"
    >
      <div className="mx-auto max-w-6xl px-4">
        <DoctorGrid />
      </div>
    </SubPageLayout>
  )
}
