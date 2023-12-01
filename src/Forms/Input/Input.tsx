import React from 'react'
import './Css/Input.css'
import './Css/InputSizes.css'
import './Css/InputVariants.css'
import { getSize, getVariant } from '../helpers'

export type InputSizes = 'xs' | 'sm' | 'md' | 'lg'
export type InputVariants = 'outline' | 'filled' | 'flushed' | 'unstyled'

export interface InputProps {
	size?: InputSizes
	variant: InputVariants
}

export const Input = ({ size = 'md', variant = 'outline', ...props }: InputProps) => {
	const rootClasses = ['input']

	getSize('input', size, rootClasses)
	getVariant('input', variant, rootClasses)

	return (
		<input
			className={rootClasses.join(' ')}
			{...props}
		/>
	)
}
