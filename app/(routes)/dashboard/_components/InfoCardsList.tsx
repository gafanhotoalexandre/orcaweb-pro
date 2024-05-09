'use client'

import { useLayoutEffect, useState } from 'react'
import { PiggyBank, ReceiptText, Wallet } from 'lucide-react'

import InfoCard from './InfoCard'

interface CardInfoProps {
  budgets: Budget[]
}
export function InfoCardsList({ budgets }: CardInfoProps) {
  const [totalBudget, setTotalBudget] = useState(0)
  const [totalSpend, setTotalSpend] = useState(0)

  useLayoutEffect(() => {
    budgets && calculateCardsInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [budgets])

  function calculateCardsInfo() {
    const _totalBudget = budgets.reduce(
      (acc, budget) => acc + Number(budget.amount),
      0
    )
    const _totalSpend = budgets.reduce(
      (acc, budget) => acc + budget.totalSpend,
      0
    )
    setTotalBudget(_totalBudget)
    setTotalSpend(_totalSpend)
  }

  return (
    <section className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <InfoCard
        title="Orçamento Total"
        value={totalBudget}
        isCurrency
        icon={PiggyBank}
      />
      <InfoCard
        title="Despesas Totais"
        value={totalSpend}
        isCurrency
        icon={ReceiptText}
      />
      <InfoCard
        title="Qtd. de Orçamentos"
        value={budgets.length}
        icon={Wallet}
      />
    </section>
  )
}
