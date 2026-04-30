import { defineType, defineField } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Practice Event',
  type: 'document',
  fields: [
    // ── Primary fields ──────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Event Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Event Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
      ],
    }),
    defineField({
      name: 'excerpt',
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
      name: 'eventDate',
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

    // ── Legacy fields (hidden) — keeps older documents valid ─────────
    defineField({ name: 'name',        title: 'Name (legacy)',        type: 'string',   hidden: true }),
    defineField({ name: 'dateTime',    title: 'Date/Time (legacy)',   type: 'datetime', hidden: true }),
    defineField({ name: 'image',       title: 'Image (legacy)',       type: 'image',    hidden: true }),
    defineField({ name: 'description', title: 'Description (legacy)', type: 'text',     hidden: true }),
  ],
  preview: {
    select: { t1: 'title', t2: 'name', date1: 'eventDate', date2: 'dateTime', media: 'mainImage' },
    prepare({ t1, t2, date1, date2, media }) {
      const title = t1 ?? t2 ?? 'Untitled'
      const date = date1 ?? date2
      const formatted = date
        ? new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        : 'No date'
      return { title, subtitle: formatted, media }
    },
  },
})
