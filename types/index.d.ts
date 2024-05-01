declare type CreateBudgetParams = {
  name: string
  amount: any
  icon: string
  email: User
}

declare type Budget = {
  id: number
  icon?: string | null
  name: string
  amount: number | string
  createdBy: string
  totalSpend: number
  totalItem: number
}
