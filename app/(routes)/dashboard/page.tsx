import { checkUserBudgets, getUserBudgets } from '@/lib/actions/budget.actions'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { InfoCardsList } from './_components/InfoCardsList'

export default async function Dashboard() {
  const user = await currentUser()

  if (!user) redirect('/sign-in')

  // const userBudgets = await checkUserBudgets(user)
  const budgetList = await getUserBudgets(user)

  if (budgetList && budgetList.length === 0) redirect('/dashboard/orcamentos')

  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl">Olá, {user.firstName} &#x270C;</h2>
      <p className="text-gray-500">
        Veja o que está acontecendo com seu dinheiro. Vamos gerenciar seus
        gastos.
      </p>

      <InfoCardsList budgets={budgetList} />
    </div>
  )
}
