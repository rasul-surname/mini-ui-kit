import React, { ReactNode } from 'react'
import './Css/Button.css'
import './Css/ButtonVariants.css'
import './Css/ButtonSizes.css'
import './Css/ButtonColorScheme.css'
import { getButtonColorScheme, getButtonSize, getButtonVariant } from '../helpers'

export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg'
export type ButtonVariants = 'solid' | 'outline' | 'ghost' | 'link'
export type ButtonColorScheme = 'linkedin' | 'facebook' | 'messenger' | 'whatsapp' | 'twitter' | 'telegram'

export interface ButtonProps {
	variant?: ButtonVariants
	size?: ButtonSizes
	colorScheme?: ButtonColorScheme
	children: ReactNode
}

export const Button = ({ variant = 'solid', size = 'md', colorScheme, children, ...props }: ButtonProps) => {
	const rootClasses = ['button']

	getButtonVariant(variant, rootClasses)
	getButtonSize(size, rootClasses)
	getButtonColorScheme(colorScheme, variant, rootClasses)

	return (
		<button
			className={rootClasses.join(' ')}
			{...props}
		>
			{children}
		</button>
	)
}
