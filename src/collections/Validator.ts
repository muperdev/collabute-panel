import { CollectionConfig } from 'payload';

export const Validator: CollectionConfig = {
  slug: 'validator',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        const { email } = data;

        // Check if the email exists in the User collection
        const existingUser = await req.payload.find({
          collection: 'users',
          where: {
            email: {
              equals: email,
            },
          },
        });

        if (existingUser.totalDocs === 0) {
          throw new Error('Email does not exist in the User collection');
        }

        // If the email exists, allow the record to be created
        return data;
      },
    ],
  },
};
