import { Link } from 'react-router-dom'
import { GithubUser } from 'types'

interface UserItemProps {
	user: GithubUser
}

const UserItem = ({ user }: UserItemProps) => {
	return (
		<div className='card shadow-md compact side bg-base-100'>
			<div className='flex-row items-center space-x-4 card-body'>
				<div>
					<div className='avatar'>
						<div className='rounded-full shadow w-14 h-14'>
							<img src={user.avatar_url} alt='Profile' />
						</div>
					</div>
				</div>
				<div>
					<h2 className='card-title'>{user.login}</h2>
					<Link
						className='text-base-content text-opacity-40'
						to={`/user/${user.login}`}>
						Visit Profile
					</Link>
				</div>
			</div>
		</div>
	)
}
export default UserItem
