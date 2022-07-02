const GridTechnology = ({ url, icon, altText, className }) => {
	return (
		<a
			href={url}
			rel='nooppener noreferrer'
			target='_blank'
			className='flex h-fit w-full justify-center rounded-md border-2 bg-white p-3 dark:border-[#333] dark:bg-black'
			title={altText.split(' ')[0]}
		>
			<img
				src={`/icons/${icon}.svg`}
				alt={altText}
				className={`h-20 w-20 ${className}`}
				loading='eager'
			/>
		</a>
	);
};

export default GridTechnology;
