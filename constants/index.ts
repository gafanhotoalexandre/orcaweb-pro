import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react'

export const navLinks = [
  {
    id: 1,
    name: 'Dashboard',
    icon: LayoutGrid,
    path: '/dashboard',
  },
  {
    id: 2,
    name: 'Orçamentos',
    icon: PiggyBank,
    path: '/dashboard/orcamentos',
  },
  {
    id: 3,
    name: 'Despesas',
    icon: ReceiptText,
    path: '/dashboard/despesas',
  },
  {
    id: 4,
    name: 'Upgrade',
    icon: ShieldCheck,
    path: '/dashboard/upgrade',
  },
]
