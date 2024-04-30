'use server'

import { User } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'

import { db } from '@/utils/dbConfig'
import { Budgets } from '@/utils/schema'

export async function checkUserBudgets(user: User) {
  const budgets = await db
    .select()
    .from(Budgets)
    .where(eq(Budgets.createdBy, user.primaryEmailAddress?.emailAddress!))

  return budgets
}
