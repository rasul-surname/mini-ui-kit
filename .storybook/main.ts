import type { StorybookConfig } from '@storybook/react-webpack5'

// TODO: Посмотреть почему не работает типизация
// @ts-ignore
const config: StorybookConfig = {
	'stories': ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	'addons': ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-onboarding', '@storybook/addon-interactions'],
	'framework': {
		'name': '@storybook/react-webpack5',
		'options': {
			'builder': {
				'useSWC': true,
			},
		},
	},
	'docs': {
		'autodocs': 'tag',
	},
}
export default config
