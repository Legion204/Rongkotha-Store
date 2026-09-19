import { sqliteAdapter } from '@payloadcms/db-sqlite'
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

const isPostgres = process.env.DATABASE_URI?.startsWith('postgres')

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
  db: isPostgres
    ? postgresAdapter({
        pool: {
          connectionString: process.env.DATABASE_URI || '',
        },
      })
    : sqliteAdapter({
        client: {
          url: process.env.DATABASE_URI || 'file:./payload.db',
        },
      }),
  sharp,
})
