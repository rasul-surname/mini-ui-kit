import type { StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from './Heading'

const meta = {
	title: 'Typography/Heading',
	component: Heading,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<HeadingProps>

export const Default: Story = {
	args: {
		as: 'h1',
		fontSize: 'lg',
		children: 'Просто заголовок',
	},
}
