import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { OAuth2Plugin } from 'payload-oauth2'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Waitlists } from './collections/Waitlist'
import Blogs from './collections/Blog'
import { seoPlugin } from '@payloadcms/plugin-seo'
import Documents from './collections/Documents'
import Project from './collections/Project'
import Stacks from './collections/Stacks'
import Cto from './collections/Cto'
import Startup from './collections/Startup'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      afterLogin: ['src/component/oauth-login-button/index.tsx#OAuthLoginButton'],
    },
  },
  collections: [Users, Project, Startup, Cto, Media, Blogs, Waitlists, Documents, Stacks],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  cors: ['https://collabute.com'],
  csrf: ['https://collabute.com'],
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    OAuth2Plugin({
      enabled: true,
      serverURL: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
      authCollection: 'users',
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
      tokenEndpoint: 'https://github.com/login/oauth/access_token',
      scopes: ['user:email'],
      providerAuthorizationUrl: 'https://github.com/login/oauth/authorize',

      getUserInfo: async (accessToken: string) => {
        const response = await fetch('https://api.github.com/user', {
          headers: {
            Authorization: `token ${accessToken}`,
            Accept: 'application/json',
          },
        })
        const responseEmailData = await fetch('https://api.github.com/user/emails', {
          headers: {
            Authorization: `token ${accessToken}`,
            Accept: 'application/json',
          },
        })

        const user = await response.json()
        const emails = await responseEmailData.json()
        const primaryEmail = emails?.find((email: any) => email?.primary === true)
        return {
          email: primaryEmail.email,
          sub: user.id.toString(),
          name: user?.login,
          githubId: user?.id,
        }
      },
      successRedirect: (req) => {
        console.log('successRedirect', req)
        return 'https://collabute.com'
      },
      failureRedirect: (req, err) => {
        return 'https://collabute.com/auth'
      },
    }),
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
