import React from 'react'

export default function BlogPost({ params }: { params: { slug: string[] } }) {
  return (
    <article>
      <h1>Blog Post</h1>
      <p>Dynamic blog post route: {params.slug.join('/')}</p>
    </article>
  )
}
