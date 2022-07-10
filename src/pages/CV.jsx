import Contact from '../components/Contact';
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
					<div className='px-6 py-8 mb-20 md:container'>
						<p className='mx-auto text-center'>
							Soy Frontend Developer con más de 3 años en el mundo de la
							programación, me considero una persona muy curiosa, proactiva y me
							encanta aprender cosas nuevas, por ello sigo aprendiendo de forma
							autodidacta desarrollando proyectos asegurándome de garantizar la
							mayor calidad posible en el producto final.
						</p>
					</div>
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
					<div className='px-6 py-8 mb-20 md:container'>
						{info.education.map((studies, index) => (
							<div key={index}>
								<small>
									{new Date(studies.startDate).toLocaleString('es-ES', {
										month: 'short',
										year: 'numeric'
									})}{' '}
									-{' '}
									{studies.endDate
										? ` ${new Date(studies.endDate).toLocaleString('es-ES', {
												month: 'short',
												year: 'numeric'
										  })}`
										: 'Actualmente'}
								</small>
								<p>{studies.title}</p>
								<p>{studies.institution}</p>
								<p>{studies.certificate}</p>
							</div>
						))}
					</div>
				</section>

				<section className='px-6 pb-20 md:container'>
					<h2 className='mb-4 text-2xl font-bold text-center'>Skills</h2>
				</section>

				<section className='px-6 pb-20 text-center md:container'>
					<a
						className='px-4 py-2 bg-blue-500 rounded-md'
						href='/docs/Jose_Maria_Herrero_CV.pdf'
						download
					>
						Descargar CV
					</a>
				</section>
				<Contact />
			</main>
			<Footer />
		</>
	);
};

export default CV;
