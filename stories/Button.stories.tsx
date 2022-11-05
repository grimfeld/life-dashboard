import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from '../components/Button'

export default {
  title: "Button",
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  type: "button",
  children: "Button"
}

export const Disabled = Template.bind({})
Disabled.args = {
  type: "button",
  children: "Button",
  disabled: true
}

export const Submit = Template.bind({})
Submit.args = {
  type: "submit",
  children: "Submit"
}

export const SubmitInvalid = Template.bind({})
SubmitInvalid.args = {
  type: "submit",
  children: "Submit",
  isFormValid: false
}

export const SubmitValid = Template.bind({})
SubmitValid.args = {
  type: "submit",
  children: "Submit",
  isFormValid: true
}


export const Reset = Template.bind({})
Reset.args = {
  type: "reset",
  children: "Reset"
}




