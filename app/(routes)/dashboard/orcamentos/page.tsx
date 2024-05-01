import { BudgetList } from './_components/BudgetList'

export default function OrcamentosPage() {
  return (
    <div className="p-10">
      <div className="font-bold text-3xl">Meus Orçamentos</div>

      <BudgetList />
    </div>
  )
}
