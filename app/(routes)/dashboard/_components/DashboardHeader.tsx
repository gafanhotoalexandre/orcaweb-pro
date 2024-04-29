import { UserButton } from '@clerk/nextjs'

export default function DashboardHeader() {
  return (
    <header className="p-5 shadow-sm border-b flex justify-between items-center">
      <div>Search Bar</div>

      <div>
        <UserButton />
      </div>
    </header>
  )
}
