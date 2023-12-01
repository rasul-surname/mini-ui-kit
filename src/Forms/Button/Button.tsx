import React, { ReactNode } from 'react'
import './Css/Button.css'
import './Css/ButtonVariants.css'
import './Css/ButtonSizes.css'
import { getSize, getVariant } from '../helpers'

export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg'
export type ButtonVariants = 'solid' | 'outline' | 'ghost' | 'link'

export interface ButtonProps {
	variant?: ButtonVariants
	size?: ButtonSizes
	children: ReactNode
}

export const Button = ({ variant = 'solid', size = 'md', children, ...props }: ButtonProps) => {
	const rootClasses = ['button']

	getVariant('button', variant, rootClasses)
	getSize('button', size, rootClasses)

	return (
		<button
			className={rootClasses.join(' ')}
			{...props}
		>
			{children}
		</button>
	)
}
