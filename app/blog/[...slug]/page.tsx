import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { client } from '../../../sanity/lib/client'
import { postBySlugQuery } from '../../../sanity/lib/queries'
import { urlFor } from '../../../sanity/lib/image'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  author: string
  category?: string
  mainImage?: { asset: { _ref: string }; alt?: string }
  publishedAt?: string
  excerpt?: string
  body?: unknown[]
}

interface Props {
  params: Promise<{ slug: string[] }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post: Post | null = await client.fetch(postBySlugQuery, { slug: slug[0] })
  if (!post) return { title: 'Post Not Found' }
  return {
    title: `${post.title} | Kids Dentist Blog`,
    description: post.excerpt,
  }
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="blog-pt-p">{children}</p>,
    h2: ({ children }) => <h2 className="blog-pt-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="blog-pt-h3">{children}</h3>,
    h4: ({ children }) => <h4 className="blog-pt-h4">{children}</h4>,
    blockquote: ({ children }) => <blockquote className="blog-pt-blockquote">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="blog-pt-ul">{children}</ul>,
    number: ({ children }) => <ol className="blog-pt-ol">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="blog-pt-li">{children}</li>,
    number: ({ children }) => <li className="blog-pt-li">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="blog-pt-strong">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => <code className="blog-pt-code">{children}</code>,
    link: ({ value, children }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="blog-pt-link">
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <figure className="blog-pt-figure">
          <div className="blog-pt-image-wrap">
            <Image
              src={urlFor(value).width(900).url()}
              alt={value.alt ?? ''}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          {value.caption && (
            <figcaption className="blog-pt-caption">{value.caption}</figcaption>
          )}
        </figure>
      )
    },
  },
}

function formatDate(iso?: string) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  })
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post: Post | null = await client.fetch(
    postBySlugQuery,
    { slug: slug[0] },
    { next: { revalidate: 60 } },
  )

  if (!post) notFound()

  return (
    <article className="blog-post-article">

      {/* ── Back link ── */}
      <div className="blog-post-back-wrap">
        <Link href="/blog" className="blog-post-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* ── Header ── */}
      <header className="blog-post-header">
        {post.category && (
          <span className="blog-post-category">{post.category}</span>
        )}
        <h1 className="blog-post-title">{post.title}</h1>
        <div className="blog-post-meta">
          <span className="blog-card-author">{post.author}</span>
          {post.publishedAt && (
            <span className="blog-card-date">{formatDate(post.publishedAt)}</span>
          )}
        </div>
      </header>

      {/* ── Cover image ── */}
      {post.mainImage && (
        <div className="blog-post-image-wrap">
          <Image
            src={urlFor(post.mainImage).width(1200).height(560).url()}
            alt={post.mainImage.alt ?? post.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      )}

      {/* ── Body ── */}
      <div className="blog-post-body">
        {post.excerpt && (
          <p className="blog-post-excerpt">{post.excerpt}</p>
        )}
        {post.body && post.body.length > 0 ? (
          <PortableText value={post.body as any} components={portableTextComponents} />
        ) : (
          <p className="blog-post-coming-soon">No body content yet — add it in the Studio.</p>
        )}
      </div>

    </article>
  )
}
