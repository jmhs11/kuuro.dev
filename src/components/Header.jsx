import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='flex h-20 w-full justify-between px-6 md:container'>
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
						className='dark-mode-icon h-8 w-8'
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
						className='h-8 w-8 rounded bg-white'
					/>
				</a>
			</div>
		</header>
	);
};

export default Header;
