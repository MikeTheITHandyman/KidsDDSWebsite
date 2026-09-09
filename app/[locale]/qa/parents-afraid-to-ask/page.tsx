import type { Metadata } from 'next'
import SubPageLayout from '@/components/SubPageLayout'
import { client } from '@/sanity/lib/client'
import { allParentQuestionsQuery } from '@/sanity/lib/queries'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { ogLocale, localizedUrl, localeAlternates } from '@/lib/seo'
import QAContent from './QAContent'

interface SanityParentQuestion {
  _id: string
  question_en: string
  question_es?: string
  category: string
  answer_en: unknown[]
  answer_es?: unknown[]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'qaPage' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: { canonical: localizedUrl('/qa/parents-afraid-to-ask', locale), languages: localeAlternates('/qa/parents-afraid-to-ask') },
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      url: localizedUrl('/qa/parents-afraid-to-ask', locale),
      siteName: 'Kids Dentist',
      locale: ogLocale(locale),
      type: 'website',
    },
  }
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
