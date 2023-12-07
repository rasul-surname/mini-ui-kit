import React, { createElement, ReactNode } from 'react'
import { getSize } from '../../Forms/helpers'
import './Css/TextFontSizes.css'

export type TextAs = 'p' | 'span' | 'b' | 'i' | 'abbr' | 'cite' | 'del' | 'em' | 'ins' | 'kbd' | 'mark' | 's' | 'samp' | 'sub' | 'sup'
export type TextFontSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'

export interface TextProps {
	as?: TextAs
	fontSize?: TextFontSizes
	children: ReactNode
}

export const Text = ({ as = 'p', fontSize, children, ...props }: TextProps) => {
	const rootClasses = ['text']

	getSize('text', fontSize, rootClasses)

	return createElement(
		as as string,
		{
			className: rootClasses.join(' '),
			...props,
		},
		children,
	)
}
