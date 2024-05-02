'use server'

import { db } from '@/utils/dbConfig'
import { Budget, Expense } from '@/utils/schema'
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
