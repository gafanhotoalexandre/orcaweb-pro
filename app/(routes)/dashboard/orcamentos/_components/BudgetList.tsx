import { currentUser } from '@clerk/nextjs/server'

import { BudgetItem } from './BudgetItem'
import { CreateBudget } from './CreateBudget'

import { getUserBudgets } from '@/lib/actions/budget.actions'

export async function BudgetList() {
  const user = await currentUser()

  const budgets = await getUserBudgets(user!)

  return (
    <div className="mt-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <CreateBudget />

        {budgets.map((budget) => (
          <BudgetItem key={budget.id} />
        ))}
      </div>
    </div>
  )
}
