import { defineType, defineField } from 'sanity'

const DOCTORS = [
  { title: 'Dr. Sonia Gutierrez, DDS', value: 'Dr. Sonia Gutierrez, DDS' },
  { title: 'Dr. Dave Rutcosky, DDS', value: 'Dr. Dave Rutcosky, DDS' },
  { title: 'Dr. Sahar Alrayyes, DDS', value: 'Dr. Sahar Alrayyes, DDS' },
  { title: 'Dr. Anne-Ashley Compton, DDS', value: 'Dr. Anne-Ashley Compton, DDS' },
  { title: 'Kids Dentist Team', value: 'Kids Dentist Team' },
]

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      options: { list: DOCTORS },
      initialValue: 'Kids Dentist Team',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Dental Tips', value: 'Dental Tips' },
          { title: 'Practice News', value: 'Practice News' },
          { title: 'Child Health', value: 'Child Health' },
          { title: 'Parent Guide', value: 'Parent Guide' },
          { title: 'Behind the Scenes', value: 'Behind the Scenes' },
        ],
      },
      initialValue: 'Dental Tips',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary shown on the blog listing page (max 200 chars).',
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
            defineField({ name: 'caption', title: 'Caption', type: 'string' }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', author: 'author', media: 'mainImage' },
    prepare({ title, author, media }) {
      return { title, subtitle: author, media }
    },
  },
})
