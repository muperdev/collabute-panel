import { isAdminOrSelf } from '@/access/isAdminOrSelf'
import { CollectionConfig, FieldHook } from 'payload'

const formatSlug: FieldHook = async ({ value, data }) => {
  if (typeof data?.title === 'string') {
    return data.title.replace(/ /g, '-').toLowerCase()
  }
  return value
}

const Project: CollectionConfig = {
  slug: 'projects',
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
      label: 'Project Title',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Project Description',
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
      label: 'Project Slug',
    },
    {
      name: 'projectType',
      type: 'select',
      options: [
        {
          label: 'Normal',
          value: 'normal',
        },
        {
          label: 'Urgent',
          value: 'urgent',
        },
        {
          label: 'Featured',
          value: 'featured',
        },
        {
          label: 'Trending',
          value: 'trending',
        },
      ],
      label: 'Project Type',
    },
    {
      name: 'tasks',
      label: 'Tasks',
      type: 'array',
      fields: [
        {
          name: 'task',
          type: 'text',
          label: 'Task',
        },
        {
          name: 'status',
          type: 'select',
          options: [
            {
              label: 'Not Started',
              value: 'not-started',
            },
            {
              label: 'In Progress',
              value: 'in-progress',
            },
            {
              label: 'Completed',
              value: 'completed',
            },
          ],
          label: 'Status',
        },
        {
          name: 'dueDate',
          type: 'date',
          label: 'Due Date',
        },
        {
          name: 'assignee',
          type: 'relationship',
          relationTo: 'users',
          label: 'Assignee',
        },
        {
          name: 'priority',
          type: 'select',
          options: [
            {
              label: 'Low',
              value: 'low',
            },
            {
              label: 'Medium',
              value: 'medium',
            },
            {
              label: 'High',
              value: 'high',
            },
          ],
        },
        {
          name: 'notes',
          type: 'textarea',
          label: 'Notes',
        },
        {
          name: 'attachments',
          type: 'relationship',
          relationTo: 'documents',
        },
      ],
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
      label: 'Start Date',
    },
    {
      name: 'endDate',
      type: 'date',
      label: 'End Date',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Planned',
          value: 'planned',
        },
        {
          label: 'In Progress',
          value: 'in-progress',
        },
        {
          label: 'Completed',
          value: 'completed',
        },
        {
          label: 'On Hold',
          value: 'on-hold',
        },
      ],
      required: true,
      label: 'Project Status',
    },
    {
      name: 'budget',
      type: 'number',
      label: 'Project Budget',
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
      label: 'Project Tags',
    },
    {
      name: 'collabuters',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
      label: 'Collabuters',
    },
    {
      name: 'issues',
      type: 'relationship',
      relationTo: 'issues',
      hasMany: true,
      label: 'Issues',
    },
  ],
}

export default Project
