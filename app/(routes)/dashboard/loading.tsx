import { Skeleton } from '@/components/ui/skeleton'

export default function DashboardLoading() {
  return (
    <div className="p-10">
      <Skeleton className="h-12 w-full md:w-1/3 bg-indigo-50" />
    </div>
  )
}
