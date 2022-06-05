const GridTechnology = ({ url, icon, altText }) => {
	return (
		<a
			href={url}
			rel='nooppener noreferrer'
			target='_blank'
			className='flex justify-center w-full p-3 bg-white border-2 rounded-md h-fit'
			title={altText.split(' ')[0]}
		>
			<img
				src={`/icons/${icon}.svg`}
				alt={altText}
				className='w-20 h-20'
				loading='eager'
			/>
		</a>
	);
};

export default GridTechnology;
