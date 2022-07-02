import Footer from '../components/Footer';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import info from '../data/cv.json';

const CV = () => {
	return (
		<>
			<Header />
			<main>
				<section className='px-6 pt-56 pb-8 md:container'>
					<h1 className='text-center text-4xl font-bold'>Curriculum Vitae</h1>
				</section>

				<section
					id='timeline'
					className='relative mb-20 px-6 py-8 md:container'
				>
					<Timeline timeline={info.experience} />
				</section>

				<section className='px-6 pb-20 text-center md:container'>
					<button
						className='rounded-md bg-blue-500 px-4 py-2'
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
