import { Card, CardContent } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface InfoCardProps {
  title: string
  value: number
  icon: LucideIcon
  isCurrency?: boolean
}
export default function InfoCard({
  title,
  value,
  icon: Icon,
  isCurrency,
}: InfoCardProps) {
  return (
    <Card>
      <CardContent className="py-7 px-5 flex items-center">
        <div className="flex-1">
          <h3 className="text-sm">{title}</h3>
          <span className="font-bold text-xl">
            {isCurrency
              ? value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              : value}
          </span>
        </div>
        <Icon className="bg-primary text-white h-12 w-12 p-3 rounded-full" />
      </CardContent>
    </Card>
  )
}
