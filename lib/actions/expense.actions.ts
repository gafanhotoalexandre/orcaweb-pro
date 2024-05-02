'use server'

import { desc, eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import dayjs from 'dayjs'

import { db } from '@/utils/dbConfig'
import { Budget, Expense } from '@/utils/schema'

export async function createExpense({
  name,
  amount,
  budgetId,
}: CreateExpenseParams) {
  try {
    const newExpense = await db
      .insert(Expense)
      .values({
        name,
        amount,
        budgetId,
        createdAt: dayjs().format('DD-MM-YYYY'),
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

    return expenses.map((expense) => ({
      ...expense,
      createdAt: dayjs(expense.createdAt).format('DD/MM/YYYY'),
    }))
  } catch (error) {
    console.error(error)
  }
}
