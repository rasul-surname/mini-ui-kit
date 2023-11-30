export function getButtonVariant(variant, rootClasses) {
	rootClasses.push(`button__variant-${variant}`)
}

export function getButtonSize(size, rootClasses) {
	rootClasses.push(`button__size-${size}`)
}

export function getButtonColorScheme(colorScheme, variant, rootClasses) {
	rootClasses.push(`button__variant-${variant}-${colorScheme}`)
}
