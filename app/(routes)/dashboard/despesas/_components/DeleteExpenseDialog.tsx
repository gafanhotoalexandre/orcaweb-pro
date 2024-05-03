import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { deleteExpense } from '@/lib/actions/expense.actions'
import { XIcon } from 'lucide-react'
import { toast } from 'sonner'

interface Props {
  expenseId: number
}
export default function DeleteExpenseDialog({ expenseId }: Props) {
  async function handleDeleteExpense(expenseId: number) {
    const deletedExpense = await deleteExpense(expenseId)

    if (deletedExpense) {
      toast.success('Despesa excluída com sucesso')
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size={'icon'}>
          <XIcon className="text-rose-500 cursor-pointer" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você está certo disso?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. Isto irá eliminar permanentemente
            esta despesa dos nossos servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            className="bg-rose-500 hover:bg-rose-400 duration-300"
            onClick={() => handleDeleteExpense(expenseId)}
          >
            Excluir
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
