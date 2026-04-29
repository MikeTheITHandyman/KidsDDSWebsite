import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'kids-dentist',
  title: 'Kids Dentist Studio',
  basePath: '/studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Blog Posts').schemaType('post').child(S.documentTypeList('post')),
            S.listItem().title('Parent Reviews').schemaType('review').child(S.documentTypeList('review')),
            S.listItem().title('Practice Events').schemaType('event').child(S.documentTypeList('event')),
            S.listItem().title('Instagram Posts').schemaType('instagramPost').child(S.documentTypeList('instagramPost')),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
