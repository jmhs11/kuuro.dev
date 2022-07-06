const TimelineItem = ({ company, jobs, index }) => {
	return (
		<article
			className={`mb-4 w-[90%] md:w-[45%] mx-auto rounded-md border-2 bg-white p-4 dark:border-[#333] dark:bg-black
      ${index % 2 === 0 ? 'md:mr-[inherit] md:ml-auto' : 'md:ml-[inherit] md:mr-auto'}
      `}
		>
			<div
				className={`before:absolute before:-mt-4 before:w-4 before:rounded-md ${
					index % 2 === 0
						? 'before:left-1/2'
						: 'before:right-1/2'
				}`}
			>
				<h4 className='mb-4 text-xl font-bold'>{company}</h4>
				{jobs.map(job => (
					<div key={job.position} className='mb-4'>
						<small>
							{new Date(job.startDate).toLocaleString('es-ES', {
								month: 'short',
								year: 'numeric'
							})}{' '}
							-{' '}
							{job.endDate
								? ` ${new Date(job.endDate).toLocaleString('es-ES', {
										month: 'short',
										year: 'numeric'
								  })}`
								: 'Actualmente'}
						</small>
						<p className='font-bold'>
							{job.position}
							{job.subtitle ? `- ${job.subtitle}` : null}
						</p>
						<p className='text-sm'>{job.details}</p>
					</div>
				))}
			</div>
		</article>
	);
};

export default TimelineItem;
