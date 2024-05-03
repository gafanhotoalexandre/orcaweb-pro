import { Skeleton } from '@/components/ui/skeleton'

export default function DespesaLoading() {
  return (
    <div className="p-10">
      <Skeleton className="h-12 w-full md:w-1/3 bg-indigo-50" />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
        <Skeleton className="h-44 w-full bg-indigo-50" />
        <Skeleton className="h-64 w-full bg-indigo-50" />
      </section>

      <section className="mt-4">
        <Skeleton className="h-6 w-1/3 bg-indigo-50" />
        <Skeleton className="h-72 w-full mt-3 bg-indigo-50" />
      </section>
    </div>
  )
}
