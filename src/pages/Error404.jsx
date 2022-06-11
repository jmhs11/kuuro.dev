import Header from '../components/Header';

const Error404 = () => {
	return (
		<div className='md:container'>
			<Header className='h-[5vh]' />
			<div className='grid h-[90vh] place-content-center'>
				<img className='mb-4' src='/404.webp' alt='Error 404' />
				<div className='px-4'>
					<h1 className='mb-6 text-6xl font-bold'>404</h1>
					<h4 className='mb-4 text-3xl font-bold'>Página No Encontrada</h4>
					<p>La página que estás buscando no existe o ha sido movida.</p>
				</div>
			</div>
		</div>
	);
};

export default Error404;
