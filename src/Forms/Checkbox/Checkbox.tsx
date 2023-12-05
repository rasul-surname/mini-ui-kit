import React, { useEffect, useState } from 'react'
import './Css/Checkbox.css'

export interface ButtonProps {
	label: string
	colorScheme: string
	defaultChecked?: boolean
	isDisabled?: boolean
}

export const Checkbox = ({ label, colorScheme, defaultChecked, isDisabled, ...props }: ButtonProps) => {
	const [checked, setChecked] = useState(defaultChecked)
	const rootClasses = ['checkbox']

	useEffect(() => onChangeChecked(), [defaultChecked])

	const onChangeChecked = () => setChecked((prev) => !prev)

	return (
		<label>
			<input
				className={rootClasses.join(' ')}
				type="checkbox"
				id={label}
				name={label}
				value={label}
				checked={checked}
				disabled={isDisabled}
				onChange={onChangeChecked}
				{...props}
			/>
			<span>{label}</span>
		</label>
	)
}
