import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { sortRestaurants } from '@/store/restaurant/restaurant.actions'
import { sortRestaurantsSelector } from '@/store/restaurant/restaurant.selectors'
import { Dropdown } from '@/components/ui'
import { StyledSortBy } from './sort-by.styles'
import { SortBySvg } from './sort-by.svg'
import { sortRestaurantsByData } from './sort-by.data'

const SortBy: FC = () => {
	const dispatch = useDispatch()
	const sortBy = useSelector(sortRestaurantsSelector)

	const [ showDropdown, setShowDropdown ] = useState(false)

	const onSelect = (item: string) => {
		const sortBy = sortRestaurantsByData.find((sort) => sort.name === item)
		dispatch(sortRestaurants(sortBy))
	}

	const itemsDropdown = sortRestaurantsByData.map((sortBy) => sortBy.name)

	return (
		<StyledSortBy>
			<div>
				<span>Sort by:</span>
				<button onClick={() => setShowDropdown(!showDropdown)}>
					<span>{sortBy.name}</span>
					<SortBySvg />
				</button>
			</div>

			<Dropdown show={showDropdown} onHide={() => setShowDropdown(false)} items={itemsDropdown} onSelect={onSelect} />
		</StyledSortBy>
	)
}

export default SortBy
