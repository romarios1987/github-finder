import axios from 'axios'
import { GithubUser, GithubUserRepo } from 'types'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
	baseURL: GITHUB_URL,
	headers: { Authorization: `token ${GITHUB_TOKEN}` },
})

export const searchUsers = async (text: string): Promise<GithubUser[]> => {
	const params = new URLSearchParams({ q: text })
	const { data } = await github.get(`/search/users?${params}`)
	return data.items
}

export const getGithubUser = async (login: string): Promise<GithubUser> => {
	const { data: user } = await github.get<GithubUser>(`/users/${login}`)
	return user
}
export const getGithubUserRepos = async (
	login: string
): Promise<GithubUserRepo[]> => {
	const { data: repos } = await github.get<GithubUserRepo[]>(
		`/users/${login}/repos?sort=pushed`
	)
	return repos
}
