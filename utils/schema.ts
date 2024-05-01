import { integer, numeric, pgTable, serial, varchar } from 'drizzle-orm/pg-core'

export const Expense = pgTable('expenses', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  amount: numeric('amount').notNull(),
  budgetId: integer('budget_id').references(() => Budget.id),
  createdAt: varchar('created_at').notNull(),
})

export const Budget = pgTable('budgets', {
  id: serial('id').primaryKey(),
  icon: varchar('icon'),
  name: varchar('name').notNull(),
  amount: numeric('amount').notNull(),
  createdBy: varchar('created_by').notNull(),
})
