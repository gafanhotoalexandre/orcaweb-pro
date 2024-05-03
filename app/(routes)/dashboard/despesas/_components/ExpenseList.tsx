'use client'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { deleteExpense } from '@/lib/actions/expense.actions'
import { XIcon } from 'lucide-react'
import { toast } from 'sonner'
import DeleteExpenseDialog from './DeleteExpenseDialog'

interface ExpenseListProps {
  expenses: Expense[]
}
export function ExpenseList({ expenses }: ExpenseListProps) {
  function formatToCurrency(amount: string) {
    return Number(amount).toFixed(2).replace('.', ',')
  }
  return (
    <Table className="mt-3">
      <TableCaption>Uma Lista de suas Despesas Recentes</TableCaption>
      <TableHeader className="bg-slate-200">
        <TableRow className="text-lg">
          <TableHead>Nome</TableHead>
          <TableHead>Valor</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Ação</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {expenses.length === 0 ? (
          <TableRow>
            <TableCell className="text-center text-base" colSpan={4}>
              Ainda não há despesas registradas
            </TableCell>
          </TableRow>
        ) : (
          expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.name}</TableCell>
              <TableCell>R${formatToCurrency(expense.amount)}</TableCell>
              <TableCell>{expense.createdAt}</TableCell>
              <TableCell>
                <DeleteExpenseDialog expenseId={expense.id} />
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}
