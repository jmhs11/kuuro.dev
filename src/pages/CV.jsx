import Footer from '../components/Footer';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import info from '../data/cv.json';



const CV = () => {
	return (
		<>
			<Header />
			<main>
				<section className='px-6 py-56 md:container'>
					<h1 className='text-4xl font-bold text-center'>Curriculum Vitae</h1>
				</section>

				<section id='timeline' className='px-6 py-8 mb-20  md:container'>
					<Timeline timeline={info.experience}/>
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
