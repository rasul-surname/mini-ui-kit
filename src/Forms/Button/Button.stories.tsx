import type { StoryObj } from '@storybook/react'

import { Button, ButtonProps } from './Button'

const meta = {
	title: 'Forms/Button',
	component: Button,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<ButtonProps>

export const Default: Story = {
	args: {
		variant: 'solid',
		size: 'md',
		children: 'Нажми на меня!',
	},
}
