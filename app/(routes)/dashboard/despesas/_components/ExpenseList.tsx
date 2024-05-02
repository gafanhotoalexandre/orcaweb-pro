import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { XIcon } from 'lucide-react'

interface ExpenseListProps {
  expenses: Expense[]
}
export function ExpenseList({ expenses }: ExpenseListProps) {
  return (
    <Table className="mt-3">
      <TableHeader className="bg-slate-200">
        <TableRow className="text-lg">
          <TableHead>Nome</TableHead>
          <TableHead>Valor</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Ação</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {expenses.map((expense) => (
          <TableRow key={expense.id}>
            <TableCell>{expense.name}</TableCell>
            <TableCell>{expense.amount}</TableCell>
            <TableCell>{expense.createdAt}</TableCell>
            <TableCell>
              <XIcon className="text-rose-500" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
