import { CollectionConfig } from 'payload'

const Company: CollectionConfig = {
  slug: 'companies',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'foundingDate',
      type: 'date',
    },
    {
      name: 'ceo',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'licenseType',
      type: 'select',
      options: [
        { label: 'Sole Proprietorship', value: 'sole_proprietorship' },
        { label: 'Partnership', value: 'partnership' },
        { label: 'Limited Liability Company (LLC)', value: 'llc' },
        { label: 'Corporation (Inc.)', value: 'corporation' },
        { label: 'Public Limited Company (PLC)', value: 'plc' },
        { label: 'Cooperative', value: 'cooperative' },
        { label: 'Nonprofit Organization', value: 'nonprofit_organization' },
        { label: 'Branch Office', value: 'branch_office' },
        { label: 'Subsidiary', value: 'subsidiary' },
        { label: 'Joint Venture', value: 'joint_venture' },
        { label: 'Franchise', value: 'franchise' },
        { label: 'Holding Company', value: 'holding_company' },
      ],
    },
    {
      name: 'licenseFile',
      type: 'relationship',
      relationTo: 'documents',
      label: 'License File',
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'industry',
      type: 'text',
    },
    {
      name: 'responsiblePerson',
      type: 'relationship',
      relationTo: 'users',
      required: true,
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
      name: 'legalInformation',
      type: 'group',
      fields: [
        { name: 'companyRegistrationNumber', type: 'text' },
        { name: 'taxIdentificationNumber', type: 'text' },
      ],
    },
    {
      name: 'financialInformation',
      type: 'group',
      fields: [
        { name: 'annualRevenue', type: 'number' },
        { name: 'numberOfEmployees', type: 'number' },
      ],
    },
    {
      name: 'teamSize',
      type: 'number',
    },
    {
      name: 'businessStage',
      type: 'select',
      options: ['Startup', 'Growth', 'Mature', 'Decline'],
    },
  ],
}

export default Company
