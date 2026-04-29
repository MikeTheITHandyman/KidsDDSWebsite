import { defineType, defineField } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Practice Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Event Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Short summary for the feed',
      validation: (rule) => rule.max(300),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'dateTime',
      title: 'Event Date & Time',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Address or "Kids Dentist Office" for in-office events.',
      initialValue: '160 Commerce Dr #100, Grayslake, IL 60030',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Feature in Top Banner?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'registrationUrl',
      title: 'Registration / Info Link',
      type: 'url',
      description: 'Optional external link for registration or more info.',
    }),
    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: 'name', date: 'dateTime', media: 'image' },
    prepare({ title, date, media }) {
      const formatted = date
        ? new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        : 'No date'
      return { title, subtitle: formatted, media }
    },
  },
})
