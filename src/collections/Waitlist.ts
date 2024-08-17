import { isAdmin, isAdminFieldLevel } from '@/access/isAdmin'
import { isAdminOrSelf } from '@/access/isAdminOrSelf'
import type { CollectionConfig } from 'payload'

export const Waitlists: CollectionConfig = {
  slug: 'waitlists',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      label: 'Full Name',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
      required: true,
    },
    {
      name: 'userType',
      type: 'select',
      label: 'User Type',
      options: [
        { label: 'Developer', value: 'developer' },
        { label: 'Startup', value: 'startup' },
        { label: 'Other', value: 'other' },
      ],
      required: true,
    },
  ],
}
