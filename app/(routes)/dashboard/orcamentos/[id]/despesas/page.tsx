import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

// melhorar isso aqui
import { BudgetItem } from '@/app/(routes)/dashboard/orcamentos/_components/BudgetItem'

import { getBudgetInfo } from '@/lib/actions/budget.actions'
import { getExpenseList } from '@/lib/actions/expense.actions'
import { AddExpense } from './_components/AddExpense'
import { ExpenseList } from './_components/ExpenseList'

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
      <h2 className="font-bold text-3xl">Minhas Despesas</h2>
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
