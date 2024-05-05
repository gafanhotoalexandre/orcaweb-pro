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

import { deleteBudget } from '@/lib/actions/budget.actions'
import { useRouter } from 'next/navigation'

interface Props {
  budgetId: number
}
export default function DeleteBudgetDialog({ budgetId }: Props) {
  const router = useRouter()
  async function handleDeleteBudget(budgetId: number) {
    const deletedExpense = await deleteBudget(budgetId)
    if (deletedExpense) {
      toast.success('Orçamento excluído com sucesso')
      router.replace('/dashboard/orcamentos')
    }
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
