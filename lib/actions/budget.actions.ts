'use server'

import { User } from '@clerk/nextjs/server'
import { desc, eq, getTableColumns, sql } from 'drizzle-orm'

import { db } from '@/utils/dbConfig'
import { Budget, Expense } from '@/utils/schema'
import { revalidatePath } from 'next/cache'

export async function checkUserBudgets(user: User) {
  const budgets = await db
    .select()
    .from(Budget)
    .where(eq(Budget.createdBy, user.primaryEmailAddress?.emailAddress!))

  return budgets
}

export async function createBudget({
  name,
  amount,
  icon,
  email,
}: CreateBudgetParams) {
  const result = await db
    .insert(Budget)
    .values({
      name,
      amount: amount,
      createdBy: email,
      icon,
    })
    .returning({ insertedId: Budget.id })

  revalidatePath('/')

  return result
}

export async function getUserBudgets(user: User) {
  const budgets = await db
    .select({
      ...getTableColumns(Budget),
      totalSpend: sql<number>`sum(${Expense.amount})`.mapWith(Number),
      totalItem: sql<number>`count(${Expense.id})`.mapWith(Number),
    })
    .from(Budget)
    .leftJoin(Expense, eq(Budget.id, Expense.budgetId))
    .where(eq(Budget.createdBy, user.primaryEmailAddress?.emailAddress!))
    .groupBy(Budget.id)
    .orderBy(desc(Budget.id))

  return budgets
}
