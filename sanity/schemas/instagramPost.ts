import { defineType, defineField } from 'sanity'

export const instagramPost = defineType({
  name: 'instagramPost',
  title: 'Instagram Post',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description: 'Describe the image for screen readers',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'postUrl',
      title: 'Instagram Post URL',
      type: 'url',
      description: 'Link to the actual Instagram post (optional)',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: { title: 'altText', media: 'image' },
    prepare({ title, media }) {
      return { title: (title as string) ?? 'Instagram Post', media }
    },
  },
})
