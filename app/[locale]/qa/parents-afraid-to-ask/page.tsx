import type { Metadata } from 'next'
import SubPageLayout from '@/components/SubPageLayout'
import { client } from '@/sanity/lib/client'
import { allParentQuestionsQuery } from '@/sanity/lib/queries'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import QAContent from './QAContent'

interface SanityParentQuestion {
  _id: string
  question_en: string
  question_es?: string
  category: string
  answer_en: unknown[]
  answer_es?: unknown[]
}

export const metadata: Metadata = {
  title: 'Questions Parents Are Afraid to Ask | Kids Dentist Grayslake, IL',
  description:
    'Honest, judgment-free answers to the dental questions parents in Grayslake, IL are afraid to say out loud, from mom guilt to money to the 3 a.m. worries.',
  alternates: { canonical: 'https://www.kidsdds.com/qa/parents-afraid-to-ask' },
  openGraph: {
    title: 'Questions Parents Are Afraid to Ask | Kids Dentist Grayslake, IL',
    description:
      'The questions parents whisper or Google at 2 a.m., answered honestly, without judgment, by our pediatric dental team.',
    url: 'https://www.kidsdds.com/qa/parents-afraid-to-ask',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

export default async function ParentsAfraidToAskPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('qaPage')

  const questions = await client.fetch<SanityParentQuestion[]>(
    allParentQuestionsQuery,
    {},
    { next: { revalidate: 60 } }
  )

  return (
    <SubPageLayout
      kicker={t('kicker')}
      title={t('title')}
      subtitle={t('subtitle')}
      gradient="blue"
    >
      <QAContent questions={questions} />
    </SubPageLayout>
  )
}
