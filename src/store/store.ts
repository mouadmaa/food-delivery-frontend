import { AnyAction, applyMiddleware, createStore } from 'redux'
import { MakeStore, createWrapper, HYDRATE } from 'next-redux-wrapper'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import combinedReducers, { RootState } from './reducers'

const middleWares: any[] = [ thunk ]
// if (process.env.NODE_ENV !== 'production') middleWares.push(logger)

// create your reducer
const reducer = (state: RootState, action: AnyAction) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state, // use previous state
			...action.payload, // apply delta from hydration
		}
		return nextState
	} else {
		return combinedReducers(state, action)
	}
}

// create a makeStore function
const makeStore: MakeStore<RootState> = () => createStore(reducer, applyMiddleware(...middleWares))

// export an assembled wrapper
export const storeWrapper = createWrapper<RootState>(makeStore)
