import { UserButton } from '@clerk/nextjs'
import { MobileMenu } from './MobileMenu'

export default function DashboardHeader() {
  return (
    <header className="p-5 shadow-sm border-b flex justify-between items-center">
      <div>Search Bar</div>

      <div className="flex items-center gap-3">
        <UserButton />
        <MobileMenu />
      </div>
    </header>
  )
}
