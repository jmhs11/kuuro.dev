import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import GridProject from '../components/GridProject';
import GridTechnology from '../components/GridTechnology';
import Header from '../components/Header';
import TECHNOLOGIES from '../data/technologies.json';
import PROJECTS from '../data/projects.json';

const Home = () => {
	return (
		<>
			<Header />
			<main>
				<section className='px-6 py-56 md:container'>
					<h1 className='pb-2 font-bold'>Hola! soy Kuuro</h1>
					<h3 className='text-[#6A6D7C] dark:text-[#ccc] pb-2 font-bold'>
						Desarrollador Frontend
					</h3>
					<p className='text-[#6A6D7C] dark:text-[#ccc] pb-4'>
						Soy Frontend developer con más de 2 años en el mundo de la
						programación, actualmente aprendiendo de forma autodidacta React
						&amp; Node.js y entusiasta de la cultura japonesa{' '}
						<img
							src='/icons/japan.png'
							alt='Japan Flag'
							className='inline w-4 h-4'
						/>
						⛩
					</p>
					<div className='flex gap-4'>
						<Link
							to='/cv'
							className='px-4 py-2 text-white bg-blue-500 rounded-md'
						>
							Ver mi CV
						</Link>
						<Link
              to="/contact"
							className='px-4 py-2 text-white rounded-md bg-slate-600'
						>
							Contáctame
						</Link>
					</div>
				</section>
				<section className='px-6 pb-20 md:container'>
					<h2 className='pb-4 font-bold'>Skills</h2>
					<div className='grid grid-cols-3 gap-6 md:grid-cols-5 lg:grid-cols-8 place-items-center'>
						{TECHNOLOGIES.map(technology => (
							<GridTechnology key={technology.icon} {...technology} />
						))}
					</div>
				</section>
				<section className='container px-6'>
					<h2 className='pb-4 font-bold'>Mis Proyectos Recientes</h2>
					<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
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
