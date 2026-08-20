import type { Metadata } from 'next'
import SubPageLayout from '@/components/SubPageLayout'
import { client } from '@/sanity/lib/client'
import { allPostsQuery, searchPostsQuery } from '@/sanity/lib/queries'
import BlogGrid from './BlogGrid'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Pediatric Dental Blog | Kids Dentist Grayslake, IL',
  description:
    'Expert pediatric dental tips, practice news, and child health guides from the board-certified doctors at Kids Dentist in Grayslake, IL.',
  openGraph: {
    title: 'Pediatric Dental Blog | Kids Dentist Grayslake, IL',
    description:
      "Real advice on children's oral health from the board-certified pediatric dentists at Kids Dentist, Grayslake IL.",
    url: 'https://kidsdds.com/blog',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const t = await getTranslations('blogPage')
  const { q } = await searchParams
  const searchQuery = q?.trim() ?? ''

  const posts = searchQuery
    ? await client.fetch(
        searchPostsQuery,
        { searchTerm: `*${searchQuery}*` },
        { next: { revalidate: 60 } }
      )
    : await client.fetch(allPostsQuery, {}, { next: { revalidate: 60 } })

  return (
    <SubPageLayout
      kicker={t('kicker')}
      title={t('title')}
      subtitle={t('subtitle')}
      gradient="green"
    >
      <BlogGrid posts={posts} searchQuery={searchQuery} />
    </SubPageLayout>
  )
}
