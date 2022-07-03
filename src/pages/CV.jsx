import Footer from '../components/Footer';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import info from '../data/cv.json';

const CV = () => {
	return (
		<>
			<Header />
			<main>
				<section className='px-6 pt-20 pb-8 md:container'>
					<h1 className='text-4xl font-bold text-center'>Curriculum Vitae</h1>
				</section>

				<section id='sobre-mi'>
					<h2 className='mb-4 text-2xl font-bold text-center'>Sobre Mi</h2>
					<div className='relative px-6 py-8 mb-20 md:container'></div>
				</section>

				<section id='timeline'>
					<h2 className='mb-4 text-2xl font-bold text-center'>
						Experiencia Laboral
					</h2>
					<div className='relative px-6 py-8 mb-20 md:container'>
						<Timeline timeline={info.experience} />
					</div>
				</section>

				<section id='studies'>
					<h2 className='mb-4 text-2xl font-bold text-center'>Estudios</h2>
					<div className='relative px-6 py-8 mb-20 md:container'></div>
				</section>

				<section className='px-6 pb-20 text-center md:container'>
					<button
						className='px-4 py-2 bg-blue-500 rounded-md'
						onClick={() => alert('Generando PDF')}
					>
						Genera el documento PDF
					</button>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default CV;
