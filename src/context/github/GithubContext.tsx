import { createContext, useReducer } from 'react'
import { GithubUser, GithubUserContextType } from 'types'
import githubReducer, { GithubActions } from './GithubReducer'

interface GithubProviderContext extends GithubUserContextType {
	dispatch: React.Dispatch<GithubActions>
}

interface GithubProviderProps {
	children: React.ReactNode
}

const GithubContext = createContext({} as GithubProviderContext)

export const GithubProvider = ({ children }: GithubProviderProps) => {
	const initialState: GithubUserContextType = {
		users: [],
		user: {} as GithubUser,
		repos: [],
		loading: false,
	}

	const [state, dispatch] = useReducer(githubReducer, initialState)

	return (
		<GithubContext.Provider
			value={{
				...state,
				dispatch,
			}}>
			{children}
		</GithubContext.Provider>
	)
}

export default GithubContext
