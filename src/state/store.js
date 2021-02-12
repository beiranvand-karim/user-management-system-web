import { createStore, applyMiddleware } from "redux"

export const ADD_USER = "ADD_USER"
export const DELETE_USER = "DELETE_USER"

export const store = createStore(
	(state, { type, payload }) => {
		switch (type) {
			case ADD_USER:
				if (!state) return (state = [payload])
				return (state = [...state, payload])
			case DELETE_USER:
				const stateAfterUserRemoval = state.filter(
					(user) => user.id !== payload
				)
				if (stateAfterUserRemoval.length === 0) return (state = null)
				return stateAfterUserRemoval
			default:
				return state
		}
	},
	null,
	applyMiddleware(() => {
		return (next) => (action) => {
			return next(action)
		}
	})
)

export default store
