import { BudgetList } from './_components/BudgetList'

export default function OrcamentosPage() {
  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl">Meus Orçamentos</h2>

      <BudgetList />
    </div>
  )
}
