import { GithubUserRepo } from 'types'
import RepoItem from './RepoItem'

interface RepoListProps {
	list: GithubUserRepo[]
}

const RepoList = ({ list }: RepoListProps) => {
	return (
		<div className='rounded-lg shadow-lg card bg-base-100'>
			<div className='card-body'>
				<h2 className='text-3xl my-4 font-bold card-title'>
					Latest Repositories
				</h2>
				{list.map((repo: GithubUserRepo) => (
					<RepoItem key={repo.id} {...repo} />
				))}
			</div>
		</div>
	)
}
export default RepoList
