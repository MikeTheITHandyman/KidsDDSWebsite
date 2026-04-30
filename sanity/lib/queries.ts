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

export const allEventsQuery = groq`
  *[_type == "event"] | order(coalesce(eventDate, dateTime) desc) {
    _id,
    "title":     coalesce(title, name),
    "slug":      slug.current,
    "mainImage": coalesce(mainImage, image),
    "excerpt":   coalesce(excerpt, description),
    "eventDate": coalesce(eventDate, dateTime),
  }
`

export const eventBySlugQuery = groq`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    "title":     coalesce(title, name),
    "slug":      slug.current,
    "mainImage": coalesce(mainImage, image),
    "excerpt":   coalesce(excerpt, description),
    body,
    "eventDate": coalesce(eventDate, dateTime),
    location,
    registrationUrl,
  }
`

export const upcomingEventsQuery = groq`
  *[_type == "event" && isPublished == true && coalesce(eventDate, dateTime) > now()] | order(coalesce(eventDate, dateTime) asc) [0..3] {
    _id,
    "title":     coalesce(title, name),
    "slug":      slug.current,
    "eventDate": coalesce(eventDate, dateTime),
    location,
    "mainImage": coalesce(mainImage, image),
    "excerpt":   coalesce(excerpt, description),
    registrationUrl,
  }
`

export const featuredEventQuery = groq`
  *[_type == "event" && isFeatured == true] | order(_updatedAt desc)[0] {
    "title":     coalesce(title, name),
    "slug":      slug.current,
    "eventDate": coalesce(eventDate, dateTime),
    location,
    "excerpt":   coalesce(excerpt, description),
  }
`
