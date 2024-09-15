import { isAdmin, isAdminFieldLevel } from '@/access/isAdmin'
import { isAdminOrSelf } from '@/access/isAdminOrSelf'
import { error } from 'console'
import { CollectionConfig } from 'payload'
import { email } from 'payload/shared'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: isAdmin,
    read: isAdminOrSelf,
    update: isAdmin,
    delete: isAdmin,
  },
  endpoints: [
    {
      path: '/validation',
      method: 'post',
      handler: async (req: any) => {
        if (!req.user) {
          return Response.json({status: 404, error: 'User not found'})
        }
        
        try {
          const user = await req.payload.find({
            collection: 'users',
            where: {
              email: req.user.email,
            },
          })
          
          if (user) {
            return Response.json(user)
          } else {
            return Response.json({ status: 404, error: 'User not found' })
          }
        } catch (error) {
          console.error('Error fetching user:', error)
          return Response.json({ status: 500, error: 'Internal server error' })
        }
      },
    },
  ],
  auth: {
    tokenExpiration: 60 * 60 * 24 * 1, // 1 day
    maxLoginAttempts: 5,
    lockTime: 60 * 60 * 1, // 1 hour
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      // required: true,
      options: [
        {
          label: 'Startup',
          value: 'startup',
        },
        {
          label: 'Company',
          value: 'company',
        },
        {
          label: 'Developer',
          value: 'developer',
        },
      ],
      defaultValue: 'developer',
    },
    {
      name: 'phoneNumber',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      access: {
        read: () => true,
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'User',
          value: 'user',
        },
      ],
      defaultValue: 'user',
    },
    {
      name: 'githubId',
      type: 'text',
      access: {
        read: () => true,
        update: () => false,
      },
    },
  ],
}
