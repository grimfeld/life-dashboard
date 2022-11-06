import { ComponentMeta, ComponentStory } from '@storybook/react'
import Input from '../components/Input'

export default {
  title: 'Input',
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Text = Template.bind({})
Text.args = {
  type: 'text',
  label: 'Text',
  suffix: 'test'
}

export const Email = Template.bind({})
Email.args = {
  type: 'email'
}

export const Password = Template.bind({})
Password.args = {
  type: 'password'
}

export const Number = Template.bind({})
Number.args = {
  type: 'number'
}

export const Currency = Template.bind({})
Currency.args = {
  type: 'number',
  currency: '$',
  suffix: '$'
}

export const File = Template.bind({})
File.args = {
  type: 'file'
}

export const Date = Template.bind({})
Date.args = {
  type: 'date'
}

export const Time = Template.bind({})
Time.args = {
  type: 'time'
}

export const Phone = Template.bind({})
Phone.args = {
  type: 'tel'
}

// export const Location = Template.bind({})
// Location.args = {
//   type: 'location'
// }

export const Color = Template.bind({})
Color.args = {
  type: 'color'
}

export const Checkbox = Template.bind({})
Checkbox.args = {
  type: 'checkbox'
}

export const Radio = Template.bind({})
Radio.args = {
  type: 'radio'
}

export const Range = Template.bind({})
Range.args = {
  type: 'range'
}

export const Month = Template.bind({})
Month.args = {
  type: 'month'
}

export const Search = Template.bind({})
Search.args = {
  type: 'search'
}

export const Tel = Template.bind({})
Tel.args = {
  type: 'tel'
}

export const Url = Template.bind({})
Url.args = {
  type: 'url'
}

export const Week = Template.bind({})
Week.args = {
  type: 'week'
}
