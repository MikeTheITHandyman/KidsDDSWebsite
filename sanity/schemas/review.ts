import { defineType, defineField } from 'sanity'

export const review = defineType({
  name: 'review',
  title: 'Parent Review',
  type: 'document',
  fields: [
    defineField({
      name: 'parentName',
      title: 'Parent / Patient Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Star Rating',
      type: 'number',
      options: {
        list: [
          { title: '⭐⭐⭐⭐⭐ — 5 Stars', value: 5 },
          { title: '⭐⭐⭐⭐ — 4 Stars', value: 4 },
          { title: '⭐⭐⭐ — 3 Stars', value: 3 },
          { title: '⭐⭐ — 2 Stars', value: 2 },
          { title: '⭐ — 1 Star', value: 1 },
        ],
      },
      initialValue: 5,
      validation: (rule) => rule.required().min(1).max(5),
    }),
    defineField({
      name: 'reviewText',
      title: 'Review Text',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required().min(20).max(500),
    }),
    defineField({
      name: 'role',
      title: 'Role / Relationship',
      type: 'string',
      description: 'e.g. "Mom of 3", "Father", "Grandparent"',
      initialValue: 'Parent',
    }),
    defineField({
      name: 'featured',
      title: 'Show on Homepage',
      type: 'boolean',
      description: 'Toggle on to display this review in the homepage "Happy Parents" section.',
      initialValue: false,
    }),
    defineField({
      name: 'date',
      title: 'Review Date',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
    }),
  ],
  preview: {
    select: { title: 'parentName', rating: 'rating', subtitle: 'reviewText' },
    prepare({ title, rating, subtitle }) {
      const stars = '★'.repeat(rating ?? 5)
      return { title: `${stars} ${title}`, subtitle }
    },
  },
})
