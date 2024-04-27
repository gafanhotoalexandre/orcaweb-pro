import { UserButton } from '@clerk/nextjs'

export default function Dashboard() {
  return (
    <div>
      <div className="p-5">
        <UserButton />
      </div>
    </div>
  )
}
