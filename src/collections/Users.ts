import { isAdmin, isAdminFieldLevel } from '@/access/isAdmin'
import { isAdminOrSelf } from '@/access/isAdminOrSelf'
import { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'name',
    group: 'Users',
  },
  access: {
    create: () => true,
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
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
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Developer', value: 'developer' },
        { label: 'Startup', value: 'startup' },
      ],
      defaultValue: 'developer',
    },
    {
      name: 'phoneNumber',
      type: 'text',
    },
    {
      name: 'type',
      type: 'select',
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
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
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
    // Developer-specific fields
    {
      name: 'developerFields',
      type: 'group',
      admin: {
        condition: (data) => data.type === 'developer',
      },
      fields: [
        {
          name: 'bio',
          type: 'textarea',
        },
        {
          name: 'dateJoined',
          type: 'date',
        },
        {
          name: 'profilePicture',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'skills',
          type: 'array',
          fields: [{ name: 'skill', type: 'text' }],
        },
        {
          name: 'experienceLevel',
          type: 'select',
          options: [
            { label: 'Junior', value: 'junior' },
            { label: 'Mid-level', value: 'mid_level' },
            { label: 'Senior', value: 'senior' },
            { label: 'Lead', value: 'lead' },
            { label: 'Architect', value: 'architect' },
          ],
        },
        {
          name: 'githubProfile',
          type: 'text',
        },
        {
          name: 'linkedinProfile',
          type: 'text',
        },
        {
          name: 'personalWebsite',
          type: 'text',
        },
        {
          name: 'primaryRole',
          type: 'select',
          options: [
            'Frontend Developer',
            'Backend Developer',
            'Full Stack Developer',
            'Mobile Developer',
            'DevOps Engineer',
            'Data Scientist',
            'UI/UX Designer',
            'QA Engineer',
            'Other',
          ],
        },
        {
          name: 'availability',
          type: 'select',
          options: [
            { label: 'Full-time', value: 'full_time' },
            { label: 'Part-time', value: 'part_time' },
            { label: 'Contract', value: 'contract' },
            { label: 'Freelance', value: 'freelance' },
            { label: 'Not Available', value: 'not_available' },
          ],
        },
        {
          name: 'preferredWorkType',
          type: 'select',
          options: [
            { label: 'Remote', value: 'remote' },
            { label: 'On-site', value: 'on_site' },
            { label: 'Hybrid', value: 'hybrid' },
          ],
        },
        {
          name: 'education',
          type: 'array',
          fields: [
            { name: 'degree', type: 'text' },
            { name: 'institution', type: 'text' },
            { name: 'graduationYear', type: 'number' },
          ],
        },
        {
          name: 'languages',
          type: 'array',
          fields: [
            { name: 'language', type: 'text' },
            {
              name: 'proficiency',
              type: 'select',
              options: ['Beginner', 'Intermediate', 'Advanced', 'Native'],
            },
          ],
        },
        {
          name: 'hourlyRate',
          type: 'number',
        },
        {
          name: 'preferredProjectDuration',
          type: 'select',
          options: [
            'Less than 1 month',
            '1-3 months',
            '3-6 months',
            '6-12 months',
            'More than 12 months',
          ],
        },
      ],
    },
    // startup fields
    {
      name: 'startupFields',
      type: 'group',
      admin: {
        condition: (data) => data.type === 'startup',
      },
      fields: [
        {
          name: 'companyName',
          label: 'Company name',
          type: 'text'
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
        },
        {
          name: 'foundingDate',
          type: 'date',
        },
        {
          name: 'cto',
          type: 'relationship',
          relationTo: 'users',
        },
        {
          name: 'fundingInformation',
          type: 'group',
          fields: [
            {
              name: 'fundingStage',
              type: 'select',
              options: ['Pre-seed', 'Seed', 'Series A', 'Series B', 'Series C+'],
            },
            { name: 'totalFundingRaised', type: 'number' },
            { name: 'lastFundingDate', type: 'date' },
          ],
        },
        {
          name: 'teamSize',
          type: 'select',
          options: ['1-10', '10-50', '50-100', '+100']
        },
        {
          name: 'productStage',
          type: 'select',
          options: ['Idea', 'Prototype', 'MVP', 'Beta', 'Launched', 'Growth'],
        },
      ],
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'linkedinProfile',
      type: 'text',
    },
    {
      name: 'contactInformation',
      type: 'group',
      fields: [
        { name: 'email', type: 'email', required: true },
        { name: 'phone', type: 'text' },
        { name: 'address', type: 'textarea' },
      ],
    },
    {
      name: 'projects',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
    },
  ],
}

export default Users
