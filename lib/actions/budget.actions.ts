'use server'

import { User } from '@clerk/nextjs/server'
import { and, desc, eq, getTableColumns, sql } from 'drizzle-orm'

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

export async function deleteBudget(id: number) {
  try {
    const deletedBudgetExpenses = await db
      .delete(Expense)
      .where(eq(Expense.budgetId, id))
      .returning()

    if (deletedBudgetExpenses) {
      const deletedBudget = await db
        .delete(Budget)
        .where(eq(Budget.id, id))
        .returning()

      revalidatePath('/')
      return deletedBudget
    }

    return new Error('Não foi possível excluir o orçamento!')
  } catch (error) {
    console.error(error)
  }
}

export async function getUserBudgets(user: User) {
  const budgets: Budget[] = await db
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

export async function getBudgetInfo({ user, id }: { user: User; id: number }) {
  const budgetInfo: Budget[] = await db
    .select({
      ...getTableColumns(Budget),
      totalSpend: sql<number>`sum(${Expense.amount})`.mapWith(Number),
      totalItem: sql<number>`count(${Expense.id})`.mapWith(Number),
    })
    .from(Budget)
    .leftJoin(Expense, eq(Budget.id, Expense.budgetId))
    .where(
      and(
        eq(Budget.createdBy, user.primaryEmailAddress?.emailAddress!),
        eq(Budget.id, id)
      )
    )
    .groupBy(Budget.id)

  return budgetInfo[0]
}
