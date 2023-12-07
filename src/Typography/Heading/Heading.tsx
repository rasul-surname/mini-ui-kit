import React, { createElement, ReactNode } from 'react'
import { getSize } from '../../Forms/helpers'
import './Css/HeadingFontSizes.css'

export type HeadingAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type HeadingFontSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'

export interface HeadingProps {
	as?: HeadingAs
	fontSize?: HeadingFontSizes
	children: ReactNode
}

export const Heading = ({ as = 'h1', fontSize, children, ...props }: HeadingProps) => {
	const rootClasses = ['heading']

	getSize('heading', fontSize, rootClasses)

	return createElement(
		as as string,
		{
			className: rootClasses.join(' '),
			...props,
		},
		children,
	)
}
