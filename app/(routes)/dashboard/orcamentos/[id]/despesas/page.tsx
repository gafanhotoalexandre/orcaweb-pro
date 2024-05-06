import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

// melhorar isso aqui
import { BudgetItem } from '@/app/(routes)/dashboard/orcamentos/_components/BudgetItem'

import { getBudgetInfo } from '@/lib/actions/budget.actions'
import { getExpenseList } from '@/lib/actions/expense.actions'
import { AddExpense } from './_components/AddExpense'
import { ExpenseList } from './_components/ExpenseList'
import DeleteBudgetDialog from './_components/DeleteBudgetDialog'
import { EditBudgetDialog } from './_components/EditBudgetDialog'
import GoBack from '@/components/shared/GoBack'

interface DespesaPageParams {
  params: {
    id: number
  }
}
export default async function DespesaPage({ params }: DespesaPageParams) {
  const user = await currentUser()
  const [budgetInfo, expenses] = await Promise.all([
    getBudgetInfo({ user: user!, id: params.id }),
    getExpenseList(params.id),
  ])

  // redirecionar para not-found, talvez
  if (!budgetInfo) redirect('/dashboard/orcamentos')

  return (
    <div className="p-10">
      <section className="flex gap-3 flex-col sm:flex-row">
        {/* ArrowLeft router.back() redirect->back */}
        <div className="font-bold text-3xl flex-1 flex items-center gap-3 justify-center sm:justify-normal">
          <GoBack variant="ghost">
            <ArrowLeft size={24} className="cursor-pointer" />
          </GoBack>
          <h2>Minhas Despesas</h2>
        </div>
        <DeleteBudgetDialog budgetId={budgetInfo.id} />
        <EditBudgetDialog budget={budgetInfo} />
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
        <BudgetItem className="h-[170px]" budget={budgetInfo} />

        <AddExpense
          email={user?.primaryEmailAddress?.emailAddress!}
          budgetId={budgetInfo?.id}
        />
      </section>

      <section className="mt-4">
        <h3 className="font-bold text-lg">Últimas Despesas</h3>
        <ExpenseList expenses={expenses!} />
      </section>
    </div>
  )
}
