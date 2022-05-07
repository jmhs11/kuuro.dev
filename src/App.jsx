const App = () => {
	return (
		<>
			<header className='container flex justify-between w-full h-20 px-6'>
				<img src='/logo.svg' alt='logo' className='w-20 h-20 -ml-4' />
				<div id='social-media' className='flex items-center gap-2'>
					<a
						href='https://github.com/jmhs11'
						rel='nooppener noreferrer'
						target='_blank'
					>
						<img src='/github-icon.svg' alt='Github Link' className='w-8 h-8' />
					</a>
					<a
						href='https://www.linkedin.com/in/jmhs11/'
						rel='nooppener noreferrer'
						target='_blank'
					>
						<img
							src='/linkedin-icon.svg'
							alt='Github Link'
							className='w-8 h-8'
						/>
					</a>
				</div>
			</header>
			<main>
				<section className='container px-6 py-56'>
					<h1 className='pb-2 font-bold'>Hola! soy Kuuro</h1>
					<h3 className='text-[#6A6D7C] pb-2 font-bold'>
						Desarrollador Frontend
					</h3>
					<p className='text-[#6A6D7C] pb-4'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
						laudantium inventore ad natus autem sed et repellat cupiditate.
					</p>
					<button
						type='button'
						className='px-4 py-2 text-white bg-blue-400 rounded-md'
					>
						Ver mi CV
					</button>
				</section>
				<section className='container px-6'>
					<h2 className='pb-4 font-bold'>Mis Proyectos Recientes</h2>
					<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
						<article className='rounded-md'>
							<img
								src='/todolist-cover.png'
								loading='eager'
								alt=''
								className='object-cover w-full h-60 rounded-t-md'
							/>
							<div className='flex flex-col px-3 pt-1 pb-3 border-2 border-t-0 rounded-b-md'>
								<h4 className='text-lg font-semibold'>TodoList</h4>
								<div id='description'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
									fugit. Maxime, ipsum non corporis tenetur voluptas libero
									facere quos deleniti possimus porro suscipit?
								</div>
								<div id='technologies' className='justify-self-end'>
									😀😀😀😀😀
								</div>
							</div>
						</article>
						<article className='rounded-md'>
							<img
								src='/todolist-cover.png'
								loading='lazy'
								alt=''
								className='object-cover w-full h-60 rounded-t-md'
							/>
							<div className='flex flex-col px-3 pt-1 pb-3 border-2 border-t-0 rounded-b-md'>
								<h4 className='text-lg font-semibold'>TodoList</h4>
								<div id='description'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
									fugit. Maxime, ipsum non corporis tenetur voluptas libero
									facere quos deleniti possimus porro suscipit?
								</div>
								<div id='technologies' className='justify-self-end'>
									😀😀😀😀😀
								</div>
							</div>
						</article>
					</div>
				</section>
			</main>
			<footer className='pt-6'></footer>
		</>
	);
};

export default App;
