import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='flex justify-between w-full h-20 px-6 md:container'>
			<Link to='/'>
				<img src='/logo.svg' alt='logo' className='h-full ' />
			</Link>
			<div id='social-media' className='flex items-center gap-2'>
				<a
					href='https://github.com/jmhs11'
					rel='nooppener noreferrer'
					target='_blank'
				>
					<img
						src='/icons/github-icon.svg'
						alt='Github Link'
						className='w-8 h-8 dark-mode-icon'
					/>
				</a>
				<a
					href='https://www.linkedin.com/in/jmhs11/'
					rel='nooppener noreferrer'
					target='_blank'
				>
					<img
						src='/icons/linkedin-icon.svg'
						alt='LinkedIn Link'
						className='w-8 h-8 bg-white rounded'
					/>
				</a>
			</div>
		</header>
	);
};

export default Header;
