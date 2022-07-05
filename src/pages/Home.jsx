import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import GridProject from '../components/GridProject';
import GridTechnology from '../components/GridTechnology';
import Header from '../components/Header';
import PROJECTS from '../data/projects.json';
import TECHNOLOGIES from '../data/technologies.json';

const Home = () => {
	return (
		<>
			<Header />
			<main>
				<section className='flex flex-col items-center justify-between px-6 py-16 md:container md:flex-row md:py-44'>
					<div className='order-2 basis-1/2'>
						<h1 className='pb-2 font-bold'>Hola! soy Kuuro</h1>
						<h3 className='pb-2 font-bold text-[#6A6D7C] dark:text-[#ccc]'>
							Desarrollador Frontend
						</h3>
						<p className='max-w-prose pb-4 text-[#6A6D7C] dark:text-[#ccc]'>
							Soy Frontend developer con más de 2 años en el mundo de la
							programación, actualmente aprendiendo de forma autodidacta React
							&amp; Node.js y entusiasta de la cultura japonesa{' '}
							<img
								src='/icons/japan.png'
								alt='Japan Flag'
								className='inline h-4 w-4'
							/>
							⛩
						</p>
						<div className='flex flex-gap-4'>
							<Link
								to='/'
								// to='/cv'
								className='rounded-md bg-blue-500 px-4 py-2 text-white'
							>
								Ver mi CV
							</Link>
							<Link
								to='/contact'
								className='rounded-md bg-slate-600 px-4 py-2 text-white'
							>
								Contáctame
							</Link>
						</div>
					</div>
					<div className='mb-16 flex w-full basis-1/2 justify-center md:order-2 md:m-auto md:justify-around'>
						<picture>
							<source type='image/webp' srcSet='hero.webp' />
							<img
								src='hero.jpg'
								className='aspect-square w-[25rem] rounded-full object-cover'
								alt='Kuuro Image'
							/>
						</picture>
					</div>
				</section>
				<section className='px-6 pb-20 md:container'>
					<h2 className='pb-4 font-bold'>Skills</h2>
					<div className='grid grid-cols-3 place-items-center flex-gap-6 md:grid-cols-5 lg:grid-cols-8'>
						{TECHNOLOGIES.map(technology => (
							<GridTechnology key={technology.icon} {...technology} />
						))}
					</div>
				</section>
				<section className='container px-6'>
					<h2 className='pb-4 font-bold'>Mis Proyectos Recientes</h2>
					<div className='grid grid-cols-1 flex-gap-6 md:grid-cols-2 lg:grid-cols-4'>
						{PROJECTS.map(project => (
							<GridProject key={project.name} project={project} />
						))}
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Home;
