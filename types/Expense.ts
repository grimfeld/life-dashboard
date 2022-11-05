export type ExpenseCategory = 'food' | 'transport' | 'entertainment' | 'other'

export interface Expense {
  id: string
  name: string
  amount: number
  date: Date
  category: ExpenseCategory
  isSubscription: boolean
  attachment: string
}
