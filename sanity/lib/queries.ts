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
  *[_type == "event"] | order(dateTime desc) {
    _id,
    "title": name,
    "slug": slug.current,
    "mainImage": image,
    "excerpt": description,
    "eventDate": dateTime,
  }
`

export const eventBySlugQuery = groq`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    "title": name,
    "slug": slug.current,
    "mainImage": image,
    "excerpt": description,
    body,
    "eventDate": dateTime,
    location,
    registrationUrl,
  }
`

export const upcomingEventsQuery = groq`
  *[_type == "event" && isPublished == true && dateTime > now()] | order(dateTime asc) [0..3] {
    _id,
    "title": name,
    "slug": slug.current,
    "eventDate": dateTime,
    location,
    "mainImage": image,
    "excerpt": description,
    registrationUrl,
  }
`

export const featuredEventQuery = groq`
  *[_type == "event" && isFeatured == true] | order(_updatedAt desc)[0] {
    "title": name,
    "slug": slug.current,
    "eventDate": dateTime,
    location,
    "excerpt": description,
  }
`
