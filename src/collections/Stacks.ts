import { CollectionConfig } from 'payload'

const Stacks: CollectionConfig = {
  slug: 'stacks',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Stack Name',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'technologies',
      type: 'array',
      label: 'Technologies',
      fields: [
        {
          name: 'technology',
          type: 'text',
          required: true,
          label: 'Technology',
        },
      ],
    },
    {
      name: 'popularity',
      type: 'number',
      required: true,
      label: 'Popularity (1-10)',
    },
    {
      name: 'use_cases',
      type: 'textarea',
      label: 'Use Cases',
    },
  ],
}

export default Stacks
