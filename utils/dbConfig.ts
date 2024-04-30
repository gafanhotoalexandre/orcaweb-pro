import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import { cwd } from 'process'
import { loadEnvConfig } from '@next/env'

loadEnvConfig(cwd())

import * as schema from './schema'

const sql = neon(process.env.DRIZZLE_DATABASE_URL! as string)
const db = drizzle(sql, { schema })
