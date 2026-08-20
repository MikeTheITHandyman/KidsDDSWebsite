import { defineType, defineField } from 'sanity'

export const parentQuestion = defineType({
  name: 'parentQuestion',
  title: 'Parent Question',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Parent Guilt', value: 'Parent Guilt' },
          { title: 'Fear of Being Judged', value: 'Fear of Being Judged' },
          { title: 'The 3 a.m. Questions', value: 'The 3 a.m. Questions' },
          { title: 'Money', value: 'Money' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: 'question', subtitle: 'category' },
  },
})
