import { createContext, useReducer } from 'react'
import { Alert } from 'types/alert'
import alertReducer, { REMOVE_ALERT, SET_ALERT } from './AlertReducer'

interface AlertProviderContext {
	alert: Alert
	setAlert: (msg: string, type: string) => void
}

interface AlertProviderProps {
	children: React.ReactNode
}

const AlertContext = createContext({} as AlertProviderContext)

export const AlertProvider = ({ children }: AlertProviderProps) => {
	const initialState: Alert = null

	const [state, dispatch] = useReducer(alertReducer, initialState)

	const setAlert = (msg: string, type: string): void => {
		dispatch({ type: SET_ALERT, payload: { msg, type } })
		setTimeout(() => dispatch({ type: REMOVE_ALERT }), 10000)
	}

	return (
		<AlertContext.Provider value={{ alert: state, setAlert }}>
			{children}
		</AlertContext.Provider>
	)
}

export default AlertContext
