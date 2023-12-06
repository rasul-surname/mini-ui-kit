import React, { useEffect, useState } from 'react'
import { getVariant } from '../helpers'
import './Css/Checkbox.css'
import './Css/CheckboxVariants.css'

export type CheckboxVariants = 'styleA' | 'styleB' | 'styleC' | 'styleD'

export interface ButtonProps {
	label: string
	colorScheme: string
	variant?: CheckboxVariants
	defaultChecked?: boolean
	isDisabled?: boolean
}

export const Checkbox = ({ label, variant = 'styleA', colorScheme, defaultChecked, isDisabled, ...props }: ButtonProps) => {
	const [checked, setChecked] = useState(defaultChecked)
	const rootClasses = ['checkbox']

	useEffect(() => onChangeChecked(), [defaultChecked])

	getVariant('checkbox', variant, rootClasses)

	const onChangeChecked = () => setChecked((prev) => !prev)

	return (
		<label className={rootClasses.join(' ')}>
			<input
				type="checkbox"
				id={label}
				name={label}
				value={label}
				checked={checked}
				disabled={isDisabled}
				onChange={onChangeChecked}
				{...props}
			/>
			<div
				className="checkbox__checkmark"
				style={{ backgroundColor: colorScheme }}
			></div>
			<div className="checkbox__body">{label}</div>
		</label>
	)
}
