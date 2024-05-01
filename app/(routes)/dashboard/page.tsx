import { checkUserBudgets } from '@/lib/actions/budget.actions'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const user = await currentUser()

  if (!user) redirect('/sign-in')

  const userBudgets = await checkUserBudgets(user)

  if (userBudgets && userBudgets.length === 0) redirect('/dashboard/orcamentos')

  return (
    <div>
      <div>Dashboard</div>
    </div>
  )
}
