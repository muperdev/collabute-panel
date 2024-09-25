import { CollectionConfig } from 'payload'

const Issues: CollectionConfig = {
  slug: 'issues',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Open', value: 'open' },
        { label: 'In Progress', value: 'in_progress' },
        { label: 'Resolved', value: 'resolved' },
        { label: 'Closed', value: 'closed' },
      ],
      defaultValue: 'open',
      required: true,
    },
    {
      name: 'priority',
      type: 'select',
      options: [
        { label: 'Low', value: 'low' },
        { label: 'Medium', value: 'medium' },
        { label: 'High', value: 'high' },
        { label: 'Critical', value: 'critical' },
      ],
      required: true,
    },
    {
      name: 'budget',
      type: 'number',
      label: 'Budget',
    },
    {
      name: 'assignee',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'reporter',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'createdAt',
      type: 'date',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'updatedAt',
      type: 'date',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'project',
      type: 'relationship',
      relationTo: 'projects',
      required: true,
    },
    {
      name: 'labels',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
      ],
    },
  ],
}

export default Issues
