declare type CreateBudgetParams = {
  name: string
  amount: any
  icon: string
  email: string
}

declare type CreateExpenseParams = {
  name: string
  amount: any
  budgetId: number
  email: string
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
