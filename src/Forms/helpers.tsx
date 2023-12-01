export function getVariant(component, variant, rootClasses) {
	rootClasses.push(`${component}__variant-${variant}`)
}

export function getSize(component, size, rootClasses) {
	rootClasses.push(`${component}__size-${size}`)
}
