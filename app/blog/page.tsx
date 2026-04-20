import type { Metadata } from 'next'
import { client } from '../../sanity/lib/client'
import { allPostsQuery } from '../../sanity/lib/queries'
import BlogGrid from './BlogGrid'

export const metadata: Metadata = {
  title: 'Blog | Kids Dentist Grayslake',
  description:
    'Expert pediatric dental tips, practice news, and child health guides from the doctors at Kids Dentist in Grayslake, IL.',
  openGraph: {
    title: 'From Our Dentists — Kids Dentist Blog',
    description:
      "Real advice on children's oral health from the board-certified pediatric dentists at Kids Dentist, Grayslake IL.",
  },
}

export default async function BlogPage() {
  const posts = await client.fetch(allPostsQuery, {}, { next: { revalidate: 60 } })

  return (
    <>
      <header className="blog-hero">
        <div className="blog-hero-inner">
          <span className="section-kicker">Expert Tips for Grayslake Families</span>
          <h1 className="blog-hero-title">From Our Dentists</h1>
          <p className="blog-hero-sub">
            Real advice on children&apos;s oral health, what to expect at visits,
            and how to build a lifetime of happy smiles.
          </p>
        </div>
      </header>

      <BlogGrid posts={posts} />
    </>
  )
}
