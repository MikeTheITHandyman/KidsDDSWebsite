import { groq } from 'next-sanity'

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    author,
    category,
    mainImage,
    publishedAt,
    excerpt,
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author,
    category,
    mainImage,
    publishedAt,
    excerpt,
    body,
  }
`

export const featuredReviewsQuery = groq`
  *[_type == "review" && featured == true] | order(date desc) [0..5] {
    _id,
    parentName,
    rating,
    reviewText,
    role,
    date,
  }
`

export const upcomingEventsQuery = groq`
  *[_type == "event" && isPublished == true && eventDate > now()] | order(eventDate asc) [0..3] {
    _id,
    title,
    "slug": slug.current,
    eventDate,
    location,
    mainImage,
    excerpt,
    registrationUrl,
  }
`

export const featuredEventQuery = groq`
  *[_type == "event" && isFeatured == true] | order(_updatedAt desc)[0] {
    title,
    "slug": slug.current,
    eventDate,
    location,
    excerpt,
  }
`
