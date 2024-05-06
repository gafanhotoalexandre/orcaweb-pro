'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

interface GoBackProps {
  children: React.ReactNode
  variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
  asChild?: boolean
}
export default function GoBack({
  children,
  variant,
  asChild = false,
}: GoBackProps) {
  const router = useRouter()
  return (
    <Button asChild={asChild} variant={variant} onClick={() => router.back()}>
      {children}
    </Button>
  )
}
