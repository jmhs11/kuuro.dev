const TimelineItem = ({ company, jobs, index }) => {
	return (
		<article
			className={`mb-4 w-[45%] rounded-md border-2 bg-white p-4 dark:border-[#333] dark:bg-black
      ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}
      `}
		>
			<div
				className={`before:absolute before:-mt-4 before:w-4 before:rounded-md ${
					index % 2 === 0
						? 'before:left-1/2 before:bg-red-500'
						: 'before:right-1/2 before:bg-blue-500'
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
