import tw, { css, styled } from 'twin.macro'

export const StyledAvatar = styled.button(() => [
	tw`flex items-center h-10 border-2 border-l-0 border-gray-200 rounded-2xl`,
	tw`transition-colors duration-300`,
	tw`focus:outline-none focus-visible:(border-gray-300 ring-1 ring-gray-300)`,
	tw`active:border-gray-300`,
	tw`dark:(border-gray-600 active:border-gray-500 focus-visible:border-gray-500)`,
	css`
		img {
			${tw`w-10 h-full transform scale-105 object-cover rounded-2xl`};
		}
		span {
			${tw`px-3 text-sm text-gray-600 dark:text-gray-200`};
		}
	`,
])