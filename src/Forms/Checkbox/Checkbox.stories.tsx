import type { StoryObj } from '@storybook/react'

import { ButtonProps, Checkbox } from './Checkbox'

const meta = {
	title: 'Forms/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<ButtonProps>

export const Default: Story = {
	args: {
		label: 'Нажми на меня!',
		defaultChecked: true,
		isDisabled: true,
	},
}
