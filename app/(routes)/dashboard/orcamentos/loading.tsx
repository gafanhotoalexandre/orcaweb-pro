import { Skeleton } from '@/components/ui/skeleton'

export default function OrcamentosLoading() {
  return (
    <div className="p-10">
      <Skeleton className="h-12 w-full md:w-1/2 bg-indigo-50"></Skeleton>

      <div className="mt-7">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="w-full h-36 bg-indigo-50" />

          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="w-full h-44 bg-indigo-50" />
          ))}
        </div>
      </div>
    </div>
  )
}
