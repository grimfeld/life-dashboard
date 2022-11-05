import { ComponentMeta, ComponentStory } from '@storybook/react'
import ExpenseForm from '../app/forms/expense/page'
import "../styles/globals.css"

export default {
  title: 'Forms/Expense',
  component: ExpenseForm
} as ComponentMeta<typeof ExpenseForm>

const Template: ComponentStory<typeof ExpenseForm> = (args) => <ExpenseForm {...args} />

export const Default = Template.bind({})