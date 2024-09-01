import { CollectionConfig } from 'payload'

const Cto: CollectionConfig = {
  slug: 'cto',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'CTO Name',
    },
    {
      name: 'experience',
      type: 'number',
      required: true,
      label: 'Years of Experience',
    },
    {
      name: 'specialization',
      type: 'text',
      required: true,
      label: 'Specialization',
    },
    {
      name: 'projects',
      type: 'relationship',
      label: 'Projects',
      relationTo: 'projects',
      hasMany: true,
    },
    {
      name: 'availability',
      type: 'checkbox',
      label: 'Available for New Projects',
    },
  ],
}

export default Cto
