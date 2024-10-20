import { isAdminOrSelf } from '@/access/isAdminOrSelf'
import { CollectionConfig, FieldHook } from 'payload'

const formatSlug: FieldHook = async ({ value, data }) => {
  if (typeof data?.title === 'string') {
    return data.title.replace(/ /g, '-').toLowerCase()
  }
  return value
}

const Issues: CollectionConfig = {
  slug: 'issues',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    create: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdminOrSelf,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      hooks: {
        beforeChange: [formatSlug],
      },
      label: 'Issue Slug',
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
