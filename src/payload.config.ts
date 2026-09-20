import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Products } from './collections/Products'
import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Orders } from './collections/Orders'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const databaseUri =
  process.env.DATABASE_URI ||
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  ''

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    suppressHydrationWarning: true,
  },
  collections: [Users, Products, Categories, Media, Orders],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'rongkotha-artisanal-secret-key-change-in-prod',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: databaseUri,
      ssl:
        databaseUri.includes('neon.tech') ||
        databaseUri.includes('pooler') ||
        databaseUri.includes('sslmode=require') ||
        process.env.NODE_ENV === 'production'
          ? { rejectUnauthorized: false }
          : undefined,
    },
  }),
  sharp,
})
