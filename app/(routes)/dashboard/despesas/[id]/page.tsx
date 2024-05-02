import { currentUser } from '@clerk/nextjs/server'

// melhorar isso aqui
import { BudgetItem } from '@/app/(routes)/dashboard/orcamentos/_components/BudgetItem'
import { ExpenseList } from '../_components/ExpenseList'
import { AddExpense } from '../_components/AddExpense'

import { getBudgetInfo } from '@/lib/actions/budget.actions'
import { getExpenseList } from '@/lib/actions/expense.actions'

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

  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl">Minhas Despesas</h2>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
        <BudgetItem className="h-[170px]" budget={budgetInfo} />

        <AddExpense
          email={user?.primaryEmailAddress?.emailAddress!}
          budgetId={budgetInfo.id}
        />
      </section>

      <section className="mt-4">
        <h3 className="font-bold text-lg">Últimas Despesas</h3>
        <ExpenseList expenses={expenses!} />
      </section>
    </div>
  )
}
