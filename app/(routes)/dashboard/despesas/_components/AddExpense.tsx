'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createExpense } from '@/lib/actions/expense.actions'
import { User, currentUser } from '@clerk/nextjs/server'
import { useState } from 'react'
import { toast } from 'sonner'

interface AddExpenseProps {
  email: string
  budgetId: number
}
export function AddExpense({ email, budgetId }: AddExpenseProps) {
  const [expenseName, setExpenseName] = useState('')
  const [expenseAmount, setExpenseAmount] = useState('')

  async function handleAddExpense() {
    const newExpense = await createExpense({
      name: expenseName,
      amount: Number(expenseAmount),
      budgetId,
      email,
    })

    if (newExpense) {
      setExpenseName('')
      setExpenseAmount('')
      toast.success('Nova Despesa Adicionada!')
    }
  }
  return (
    <div className="border p-5 rounded-md">
      <h3 className="font-bold text-lg">Adicionar Despesa</h3>

      <div className="mt-2">
        <label htmlFor="expense-name" className="text-black font-medium my-1">
          Nome da Despesa:
        </label>
        <Input
          id="expense-name"
          type="text"
          required
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          placeholder="ex: Decoração do Quarto"
        />
      </div>

      <div className="mt-2">
        <label htmlFor="expense-amount" className="text-black font-medium my-1">
          Valor da Despesa:
        </label>
        <Input
          id="expense-amount"
          type="number"
          required
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
          placeholder="ex: 1000"
        />
      </div>

      <Button
        disabled={!(expenseName && expenseAmount)}
        className="mt-3 w-full"
        onClick={handleAddExpense}
      >
        Adicionar Nova Despesa
      </Button>
    </div>
  )
}
