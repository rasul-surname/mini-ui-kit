import type { StoryObj } from '@storybook/react'

import { Text, TextProps } from './Text'

const meta = {
	title: 'Typography/Text',
	component: Text,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<TextProps>

export const Default: Story = {
	args: {
		as: 'p',
		fontSize: 'lg',
		children: 'Просто текст',
	},
}
