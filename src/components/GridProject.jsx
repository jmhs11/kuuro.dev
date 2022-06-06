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
					className='object-cover w-full h-60 rounded-t-md'
				/>
				<div className='flex flex-col px-3 pt-1 pb-3 bg-white border-2 dark:border-[#333] border-t-0 dark:bg-black rounded-b-md'>
					<h4 className='text-lg font-semibold'>{name}</h4>
					<div id='description' className='text-[#6A6D7C] dark:text-[#ccc]'>
						{description}
					</div>
					<div
						id='technologies'
						className='flex flex-wrap mt-3 justify-self-end'
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
