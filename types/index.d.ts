declare type CreateBudgetParams = {
  name: string
  amount: any
  icon: string
  email: string
}

declare type UpdateBudgetParams = {
  budgetId: number
  name: string
  amount: string | number
  icon: string
}

declare type CreateExpenseParams = {
  name: string
  amount: any
  budgetId: number
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

declare type Expense = {
  id: number
  name: string
  amount: string
  budgetId: number | null
  createdAt: string
}
