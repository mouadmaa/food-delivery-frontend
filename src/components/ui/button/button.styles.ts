import tw, { styled } from 'twin.macro'

import { ButtonLevels } from './button.component'

interface StyledButtonProps {
	level: ButtonLevels
}

export const StyledButton = styled.button(({ level }: StyledButtonProps) => [
	tw`px-8 py-2 text-sm font-medium tracking-wider`,
	tw`shadow rounded-2xl border-0 select-none`,
	tw`transition-colors duration-300`,
	tw`focus:outline-none focus-visible:(ring ring-primary-light)`,

	level === 'Primary' && [ tw`text-white bg-primary-default`, tw`active:bg-primary-dark` ],

	level === 'Secondary' && [
		tw`text-primary-default border-2 border-primary-default`,
		tw`active:(text-white bg-primary-dark border-primary-dark)`,
		tw`dark:(border-primary-default active:border-primary-dark)`,
	],

	// level === 'SubTitle' && [
	// 	tw`text-primary-default border-2 bg-transparent border-gray-200 shadow-sm`,
	// 	tw`active:(bg-transparent border-gray-300)`,
	// 	tw`dark:(border-gray-600 active:border-gray-500)`,
	// ],
])
