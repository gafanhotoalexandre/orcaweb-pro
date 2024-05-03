'use client'

import { XIcon } from 'lucide-react'
import { toast } from 'sonner'

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

interface Props {
  budgetId: number
}
export default function DeleteBudgetDialog({ budgetId }: Props) {
  async function handleDeleteBudget(budgetId: number) {
    alert('Teste')
    // const deletedExpense = await deleteBudget(budgetId)
    // if (deletedExpense) {
    //   toast.success('Despesa excluída com sucesso')
    // }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="space-x-1">
          <XIcon />
          <p>Remover</p>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você está certo disso?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. Isto irá eliminar permanentemente
            este orçamento e seus respectivos dados dos nossos servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            className="bg-rose-500 hover:bg-rose-400 duration-300"
            onClick={() => handleDeleteBudget(budgetId)}
          >
            Excluir
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
