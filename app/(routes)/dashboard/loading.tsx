import { Skeleton } from '@/components/ui/skeleton'

export default function DashboardLoading() {
  return (
    <div className="p-10">
      <Skeleton className="h-12 w-full md:w-1/3 bg-indigo-50" />
      <Skeleton className="mt-2 h-6 w-full md:w-3/4 bg-indigo-50" />

      <section className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="h-28 w-full bg-indigo-50" />
        ))}
      </section>
    </div>
  )
}
