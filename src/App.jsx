import Footer from './components/Footer';
import GridProject from './components/GridProject';
import GridTechnology from './components/GridTechnology';
import Header from './components/Header';

const PROJECTS = [
	{
		name: 'Todo List',
		imageUrl: '/projects/todolist-cover.png',
		description:
			'Aplicación para listar tareas pendientes con persistencia en Firebase Realtime Database',
		url: 'https://todo-list.kuuro.dev',
		technologies: [
			{
				name: 'Angular',
				icon: 'angular-icon'
			},
			{
				name: 'TailwindCSS',
				icon: 'tailwindcss-icon'
			},
			{
				name: 'Firebase',
				icon: 'firebase-icon'
			},
			{
				name: 'Vercel',
				icon: 'vercel-icon',
				className: 'dark-mode-icon'
			}
		]
	}
	// {
	// 	name: 'Proyecto 2',
	// 	imageUrl: '/projects/todolist-cover.png',
	// 	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laudantium inventore ad natus autem sed et repellat cupiditate.',
	// 	url: 'https://todo-list.kuuro.dev',
	// 	technologies: [
	// 		{
	// 			name: 'React1',
	// 			icon: 'react-icon',
	// 		},
	// 		{
	// 			name: 'React2',
	// 			icon: 'react-icon',
	// 		},
	// 		{
	// 			name: 'React3',
	// 			icon: 'react-icon',
	// 		},
	// 		{
	// 			name: 'React4',
	// 			icon: 'react-icon'
	// 		}
	// 	]
	// },
	// {
	// 	name: 'Proyecto 3',
	// 	imageUrl: '/projects/todolist-cover.png',
	// 	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laudantium inventore ad natus autem sed et repellat cupiditate.',
	// 	url: 'https://todo-list.kuuro.dev',
	// 	technologies: [
	// 		{
	// 			name: 'React1',
	// 			icon: 'react-icon',
	// 		},
	// 		{
	// 			name: 'React2',
	// 			icon: 'react-icon',
	// 		},
	// 		{
	// 			name: 'React3',
	// 			icon: 'react-icon',
	// 		},
	// 		{
	// 			name: 'React4',
	// 			icon: 'react-icon'
	// 		}
	// 	]
	// },
	// {
	// 	name: 'Proyecto 4',
	// 	imageUrl: '/projects/todolist-cover.png',
	// 	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laudantium inventore ad natus autem sed et repellat cupiditate.',
	// 	url: 'https://todo-list.kuuro.dev',
	// 	technologies: [
	// 		{
	// 			name: 'React1',
	// 			icon: 'react-icon',
	// 		},
	// 		{
	// 			name: 'React2',
	// 			icon: 'react-icon',
	// 		},
	// 		{
	// 			name: 'React3',
	// 			icon: 'react-icon',
	// 		},
	// 		{
	// 			name: 'React4',
	// 			icon: 'react-icon'
	// 		}
	// 	]
	// },
];

const TECHNOLOGIES = [
	{
		url: 'https://www.reactjs.org/',
		icon: 'react-icon',
		altText: 'React Link'
	},
	{
		url: 'https://angular.io',
		icon: 'angular-icon',
		altText: 'Angular Link'
	},
	{
		url: 'https://www.javascript.com',
		icon: 'javascript-icon',
		altText: 'JavaScript Link'
	},
	{
		url: 'https://www.typescriptlang.org',
		icon: 'typescript-icon',
		altText: 'TypeScript Link'
	},
	{
		url: 'https://developer.mozilla.org/es/docs/Web/HTML',
		icon: 'html-icon',
		altText: 'HTML Link'
	},
	{
		url: 'https://developer.mozilla.org/es/docs/Web/CSS',
		icon: 'css-3-icon',
		altText: 'CSS Link'
	},
	{
		url: 'https://tailwindcss.com',
		icon: 'tailwindcss-icon',
		altText: 'Tailwind Link'
	},
	{
		url: 'https://git-scm.com',
		icon: 'git-icon',
		altText: 'Git Link'
	},
	{
		url: 'https://firebase.google.com',
		icon: 'firebase-icon',
		altText: 'Firebase Link'
	},
	{
		url: 'https://vercel.com',
		icon: 'vercel-icon',
		altText: 'Vercel Link',
		className: 'dark-mode-icon'
	}
	// {
	// 	url: '',
	// 	icon: '',
	// 	altText: ''
	// }
];

const App = () => {
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
						<button
							type='button'
							className='px-4 py-2 text-white bg-blue-400 rounded-md'
						>
							Ver mi CV
						</button>
						<button
							type='button'
							className='px-4 py-2 text-white bg-blue-200 rounded-md'
						>
							Contáctame
						</button>
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

export default App;
