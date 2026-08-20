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

// $searchTerm must include GROQ wildcards (e.g. "*puppy*") — match() does not
// wildcard-expand automatically. Title is a localizedString ({en, es}); body
// content lives in separate `body` (EN) / `bodyEs` (ES) portable-text arrays,
// so each side of the OR checks both locales independently.
export const searchPostsQuery = groq`
  *[_type == "post" && defined(slug.current) && (
    title.en match $searchTerm ||
    title.es match $searchTerm ||
    pt::text(body) match $searchTerm ||
    pt::text(bodyEs) match $searchTerm
  )] | order(publishedAt desc) {
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

export const allParentQuestionsQuery = groq`
  *[_type == "parentQuestion"] | order(category asc, _createdAt asc) {
    _id,
    question_en,
    question_es,
    category,
    answer_en,
    answer_es,
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

export const latestPostQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0] {
    title,
    "slug": slug.current,
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
