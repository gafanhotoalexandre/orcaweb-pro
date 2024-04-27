import SideNav from './_components/SideNav'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <aside className="fixed hidden md:block md:w-64">
        <SideNav />
      </aside>

      <div className="md:ml-64 bg-sky-200">{children}</div>
    </div>
  )
}
