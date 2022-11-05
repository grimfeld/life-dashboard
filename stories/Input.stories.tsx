import { ComponentMeta, ComponentStory } from '@storybook/react'
import Input from '../components/Input'

export default {
  title: "Input",
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Text = Template.bind({})

export const Email = Template.bind({})

Email.args = {
  type: "email"
}

export const Password = Template.bind({})

Password.args = {
  type: "password"
}

export const Number = Template.bind({})

export const File = Template.bind({})

