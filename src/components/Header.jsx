const Header = () => {
  return (
    <header className='flex justify-between w-full h-20 px-6 md:container'>
				<img src='/logo.svg' alt='logo' className='w-20 h-20 -ml-4' />
				<div id='social-media' className='flex items-center gap-2'>
					<a
						href='https://github.com/jmhs11'
						rel='nooppener noreferrer'
						target='_blank'
					>
						<img
							src='/icons/github-icon.svg'
							alt='Github Link'
							className='w-8 h-8'
						/>
					</a>
					<a
						href='https://www.linkedin.com/in/jmhs11/'
						rel='nooppener noreferrer'
						target='_blank'
					>
						<img
							src='/icons/linkedin-icon.svg'
							alt='Github Link'
							className='w-8 h-8'
						/>
					</a>
				</div>
			</header>
  )
}

export default Header