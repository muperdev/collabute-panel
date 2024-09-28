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
    afterChange: [
      async ({ doc, req, operation }) => {
        if (operation === 'create') {
          const { email } = doc;

          // Check if the email exists in the User collection
          const existingUser = await req.payload.find({
            collection: 'users',
            where: {
              email: {
                equals: email,
              },
            },
          });
          console.log(existingUser);
          if (existingUser.totalDocs > 0) {
            // If the email exists, return a 400 error
            throw {
              status: 400,
              message: 'Email already exists in the User collection',
            };
          }

          // If the email doesn't exist, return a success response
          return {
            status: 200,
            message: 'Email is available',
          };
        }
      },
    ],
  },
};
