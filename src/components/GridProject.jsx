import GridProjectTech from './GridProjectTech';

const GridProject = ({ project }) => {
	const { name, imageUrl, description, url, technologies } = project;

	return (
		<article className='rounded-md'>
			<a href={url} rel='nooppener noreferrer' target='_blank'>
				<img
					src={imageUrl}
					loading='lazy'
					alt=''
					className='h-60 w-full rounded-t-md object-cover'
				/>
				<div className='flex flex-col rounded-b-md border-2 border-t-0 bg-white px-3 pt-1 pb-3 dark:border-[#333] dark:bg-black'>
					<h4 className='text-lg font-semibold'>{name}</h4>
					<div id='description' className='text-[#6A6D7C] dark:text-[#ccc]'>
						{description}
					</div>
					<div
						id='technologies'
						className='mt-3 flex flex-wrap justify-self-end'
					>
						{technologies.map(technology => (
							<GridProjectTech
								key={technology.name}
								title={technology.name}
								{...technology}
							/>
						))}
					</div>
				</div>
			</a>
		</article>
	);
};

export default GridProject;
