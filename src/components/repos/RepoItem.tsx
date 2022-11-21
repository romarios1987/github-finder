import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'
import { GithubUserRepo } from 'types'

interface RepoItemProps extends GithubUserRepo {}

const RepoItem = (props: RepoItemProps) => {
	return (
		<div className='mb-2 rounded-md card bg-base-200 hover:bg-base-300'>
			<div className='card-body'>
				<h3 className='mb-2 text-xl font-semibold'>
					<a href={props.html_url}>
						<FaLink className='inline mr-1' /> {props.name}
					</a>
				</h3>
				<p className='mb-3'>{props.description}</p>
				<div>
					<div className='tooltip' data-tip='watchers_count'>
						<div className='mr-2 badge badge-info badge-lg'>
							<FaEye className='mr-2' /> {props.watchers_count}
						</div>
					</div>
					<div className='tooltip' data-tip='stargazers_count'>
						<div className='mr-2 badge badge-success badge-lg'>
							<FaStar className='mr-2' /> {props.stargazers_count}
						</div>
					</div>
					<div className='tooltip' data-tip='open_issues'>
						<div className='mr-2 badge badge-error badge-lg'>
							<FaInfo className='mr-2' /> {props.open_issues}
						</div>
					</div>
					<div className='tooltip' data-tip='forks'>
						<div className='mr-2 badge badge-warning badge-lg'>
							<FaUtensils className='mr-2' /> {props.forks}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RepoItem
