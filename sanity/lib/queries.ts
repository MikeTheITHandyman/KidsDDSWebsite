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

export const instagramPostsQuery = groq`
  *[_type == "instagramPost"] | order(publishedAt desc)[0...4] {
    _id,
    image,
    altText,
    postUrl,
  }
`

export const upcomingEventsQuery = groq`
  *[_type == "event" && isPublished == true && dateTime > now()] | order(dateTime asc) [0..3] {
    _id,
    name,
    dateTime,
    location,
    image,
    description,
    registrationUrl,
  }
`
