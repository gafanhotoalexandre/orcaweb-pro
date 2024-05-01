import DashboardHeader from './_components/DashboardHeader'
import SideNav from './_components/SideNav'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <aside className="fixed hidden md:block md:w-64">
        <SideNav />
      </aside>

      <div className="md:ml-64">
        <DashboardHeader />
        <main>{children}</main>
      </div>
    </div>
  )
}
