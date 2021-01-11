import React, { FC } from 'react'
import tw, { css, styled } from 'twin.macro'

import Burger from './burger/burger.component'
import Logo from './logo/logo.component'
import MobileSignInOut from './mobile-sign-in-out/mobile-sign-in-out.component'
import SearchForm from './search-form/search-form.component'

const Header: FC = () => {
	return (
		<StyledHeader>
			<div>
				<Burger />
				<Logo />
				<MobileSignInOut />
			</div>
			<SearchForm />
		</StyledHeader>
	)
}

export default Header

const StyledHeader = styled.header(() => [
	tw`
		font-body text-md text-gray-700 bg-white flex items-center justify-between h-16 px-4 md:(px-8 h-20) border-b-2 border-gray-200 dark:text-gray-50 dark:(bg-gray-900 border-gray-600)
	`,
	css`
		> div:first-child {
			${tw`flex items-center justify-between w-full md:(w-auto space-x-3)`};
		}
	`,
])
