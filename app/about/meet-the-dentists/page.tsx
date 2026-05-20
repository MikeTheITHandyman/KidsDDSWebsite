import SubPageLayout from '@/components/SubPageLayout'
import DoctorGrid from './DoctorGrid'
import type { Metadata } from 'next'

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

export default function MeetTheDentistsPage() {
  return (
    <SubPageLayout
      kicker="Our Doctors"
      title="Meet Our Dentists"
      subtitle="Four pediatric specialists who genuinely love what they do. Click any card to learn more."
      gradient="blue"
    >
      <div className="mx-auto max-w-6xl px-4">
        <DoctorGrid />
      </div>
    </SubPageLayout>
  )
}
