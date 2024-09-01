import { CollectionConfig } from 'payload';

const Documents: CollectionConfig = {
  slug: 'documents',
  admin: {
    useAsTitle: 'title',
  },
  upload: true,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Document Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Document Description',
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
          label: 'Tag',
        },
      ],
      label: 'Document Tags',
    },
    {
      name: 'stacks',
      type: 'relationship',
      relationTo: 'stacks',
      label: 'Stacks',
    },
  ],
};

export default Documents;
