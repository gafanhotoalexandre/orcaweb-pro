'use server'

import { db } from '@/utils/dbConfig'
import { Budget, Expense } from '@/utils/schema'
import { desc, eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'

export async function createExpense({
  name,
  amount,
  budgetId,
  email,
}: CreateExpenseParams) {
  try {
    const newExpense = await db
      .insert(Expense)
      .values({
        name,
        amount,
        budgetId,
        createdAt: email,
      })
      .returning({ insertedId: Budget.id })

    revalidatePath('/')
    return newExpense
  } catch (error) {
    console.error(error)
  }
}

export async function getExpenseList(id: number) {
  try {
    const expenses = await db
      .select()
      .from(Expense)
      .where(eq(Expense.budgetId, id))
      .orderBy(desc(Expense.id))

    return expenses
  } catch (error) {
    console.error(error)
  }
}
