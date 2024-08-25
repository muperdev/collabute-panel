import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { CollectionConfig, FieldHook } from 'payload'

const formatSlug: FieldHook = async ({ value, data }) => {
  return data?.slug?.replace(/ /g, '-').toLowerCase() ?? value
}

const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'title',
  },
  versions: { drafts: true },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      admin: { position: 'sidebar' },
      hooks: {
        beforeChange: [formatSlug],
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Featured Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      unique: false,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'richtext',
      type: 'richText',
      editor: lexicalEditor({}),
    },
    {
      name: 'faq',
      type: 'array',
      fields: [
        {
          label: 'Question',
          name: 'question',
          type: 'text',
        },
        {
          label: 'Answer',
          name: 'answer',
          type: 'text',
        },
      ],
    },
  ],
}

export default Blogs
