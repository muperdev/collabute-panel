import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Waitlists } from './collections/Waitlist'
import Blogs from './collections/Blog'
import { seoPlugin } from '@payloadcms/plugin-seo'
import Documents from './collections/Documents'
import Project from './collections/Project'
import Stacks from './collections/Stacks'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Users, 
    Project,
    Media, 
    Blogs, 
    Waitlists, 
    Documents,
    Stacks,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  cors: ['https://contribunation.com'],
  csrf: ['https://contribunation.com'],
  serverURL: process.env.SERVER_URL,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        [Media.slug]: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
    seoPlugin({
      collections: ['blogs'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `Contribunation.com — ${doc.title}`,
      generateDescription: ({ doc }) => doc.description,
    }),
  ],
})
