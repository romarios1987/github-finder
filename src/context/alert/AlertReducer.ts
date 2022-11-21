import { Alert } from 'types/alert'

export const SET_ALERT = 'SET_ALERT'
export const REMOVE_ALERT = 'REMOVE_ALERT'

export type AlertActions =
	| { type: typeof SET_ALERT; payload: Alert }
	| { type: typeof REMOVE_ALERT }

const alertReducer = (state: Alert, action: AlertActions) => {
	switch (action.type) {
		case SET_ALERT:
			return action.payload
		case REMOVE_ALERT:
			return null
		default:
			return state
	}
}

export default alertReducer
