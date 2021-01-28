import tw, { css, styled } from 'twin.macro'

export const StyledCardRestaurant = styled.article(() => [ tw`min-w-full h-56 cursor-pointer` ])

export const StyledRestaurantCardPicture = styled.div(() => [
	tw`relative block pb-40 rounded-2xl shadow-lg overflow-hidden`,
	css`
		img {
			${tw`absolute h-full w-full object-cover group-hover:shadow-lg transform group-hover:scale-105 duration-500`};
		}

		div {
			${tw`absolute right-0 flex items-center justify-center w-24 h-6 bg-black bg-opacity-40 rounded-bl-2xl`};

			span {
				${tw`text-xs tracking-wide text-white`};
			}
		}
	`,
])

export const StyledRestaurantCardContent = styled.div(() => [
	tw`p-2 space-y-1`,
	css`
		> div:first-child {
			${tw`flex items-center justify-between`};

			h3 {
				${tw`text-lg font-medium tracking-wider capitalize dark:text-white`};
			}

			div {
				${tw`flex items-center justify-center space-x-1`} svg {
					${tw`w-4 h-4 text-primary-default fill-current`};
				}

				span {
					${tw`text-sm tracking-wide text-gray-600 dark:text-gray-300`};
				}
			}
		}
	`,
])

export const StyledRestaurantCardCategories = styled.div(() => [
	tw`flex items-center text-sm text-gray-600 dark:text-gray-300`,
	css`
		svg {
			${tw`w-3 h-4 fill-current`};
		}
	`,
])