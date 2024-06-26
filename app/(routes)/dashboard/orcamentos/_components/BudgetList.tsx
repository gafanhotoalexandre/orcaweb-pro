import { currentUser } from '@clerk/nextjs/server'

import { BudgetItem } from './BudgetItem'
import { CreateBudget } from './CreateBudget'

import { getUserBudgets } from '@/lib/actions/budget.actions'
import Link from 'next/link'

export async function BudgetList() {
  const user = await currentUser()

  const budgets = await getUserBudgets(user!)

  return (
    <div className="mt-7">
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <CreateBudget />

        {budgets.map((budget) => (
          <Link
            key={budget.id}
            href={`/dashboard/orcamentos/${budget.id}/despesas`}
          >
            <BudgetItem budget={budget} />
          </Link>
        ))}
      </div>
    </div>
  )
}
