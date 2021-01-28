import { Category } from 'redux/category/category.types'

export interface Restaurant {
	id: string
	name: string
	favorites: number
	categories: Category[]
}

export interface RestaurantState {
	restaurants: Restaurant[]
}

export const SET_RESTAURANTS = 'SET_RESTAURANTS'

interface SetRestaurantsAction {
	type: typeof SET_RESTAURANTS
	payload: {
		restaurants: Restaurant[]
		categories: Category[]
	}
}

export type RestaurantAction = SetRestaurantsAction
