'use client'

import { Progress } from '@/components/ui/progress'

interface BudgetItemProps {
  budget: Budget
}
export function BudgetItem({ budget }: BudgetItemProps) {
  return (
    <section className="p-5 border rounded-md transition hover:shadow-md cursor-pointer">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <span
            aria-label="ícone do orçamento"
            className="text-2xl p-3 bg-slate-100 rounded-full"
          >
            {budget.icon}
          </span>
          <div>
            <h3 className="font-bold">{budget.name}</h3>

            <span className="text-sm text-gray-500">
              {budget.totalItem} Item
            </span>
          </div>
        </div>
        <span className="font-bold text-primary text-lg">
          R${budget.amount}
        </span>
      </div>

      {/* progress bar */}
      <div className="mt-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-slate-400">
            Gasto: R${budget.totalSpend ?? 0}
          </span>

          <span className="text-sm text-slate-400">
            Restante: R${Number(budget.amount) - budget.totalSpend}
          </span>
        </div>
        <Progress value={50} className="w-full" />
      </div>
    </section>
  )
}
