const About = () => {
	return (
		<>
			<h1 className='text-6xl mb-4'>Github Finder</h1>
			<p className=' text-2xl font-light'>
				A React app to search GitHub profiles and see profile details.
			</p>
			<p className='mb-4 text-2xl font-light'>
				This project is part of the
				<a
					href='https://www.udemy.com/course/react-front-to-back-2022/'
					className='underline mx-2'
					target='_blank'
					rel='noreferrer'>
					React Front To Back
				</a>
				Udemy course by {''}
				<strong>
					<a href='https://traversymedia.com' target='_blank' rel='noreferrer'>
						Brad Traversy
					</a>
				</strong>
				.
			</p>

			<p className='text-lg text-gray-400'>
				Version <span className='text-white'>1.0.1</span>
			</p>
			<p className='text-lg text-gray-400'>
				Layout By:{' '}
				<a
					className='text-white'
					href='https://twitter.com/hassibmoddasser'
					target='_blank'
					rel='noreferrer'>
					Hassib Moddasser
				</a>
			</p>
		</>
	)
}

export default About
