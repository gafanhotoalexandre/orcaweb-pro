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

export async function createBudget({
  name,
  amount,
  icon,
  email,
}: CreateBudgetParams) {
  const result = await db
    .insert(Budgets)
    .values({
      name,
      amount,
      createdBy: email,
      icon,
    })
    .returning({ insertedId: Budgets.id })

  return result
}
