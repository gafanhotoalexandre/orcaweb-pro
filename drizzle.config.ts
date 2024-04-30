import { defineConfig } from 'drizzle-kit'
import { cwd } from 'process'
import { loadEnvConfig } from '@next/env'

loadEnvConfig(cwd())

export default defineConfig({
  schema: './utils/schema.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DRIZZLE_DATABASE_URL! as string,
  },
  verbose: true,
  strict: true,
})
