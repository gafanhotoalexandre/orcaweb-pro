import { currentUser } from '@clerk/nextjs/server'

// melhorar isso aqui
import { BudgetItem } from '@/app/(routes)/dashboard/orcamentos/_components/BudgetItem'

import { getBudgetInfo } from '@/lib/actions/budget.actions'
import { AddExpense } from '../_components/AddExpense'

interface DespesaPageParams {
  params: {
    id: number
  }
}
export default async function DespesaPage({ params }: DespesaPageParams) {
  const user = await currentUser()
  const budgetInfo = await getBudgetInfo({ user: user!, id: params.id })

  console.log(budgetInfo)
  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl">Minhas Despesas</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
        <BudgetItem className="h-[170px]" budget={budgetInfo} />

        <AddExpense
          email={user?.primaryEmailAddress?.emailAddress!}
          budgetId={budgetInfo.id}
        />
      </section>
    </div>
  )
}
