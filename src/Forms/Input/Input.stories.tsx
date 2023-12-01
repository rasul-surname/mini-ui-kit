import type { StoryObj } from '@storybook/react'

import { Input, InputProps } from './Input'

const meta = {
	title: 'Forms/Input',
	component: Input,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<InputProps>

export const Default: Story = {
	args: {
		size: 'md',
		placeholder: 'Введите ФИО',
	},
}
