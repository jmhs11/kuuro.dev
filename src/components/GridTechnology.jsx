const GridTechnology = ({ url, icon, altText, className }) => {
	return (
		<a
			href={url}
			rel='nooppener noreferrer'
			target='_blank'
			className='flex justify-center w-full p-3 bg-white border-2 dark:border-[#333] rounded-md dark:bg-black h-fit'
			title={altText.split(' ')[0]}
		>
			<img
				src={`/icons/${icon}.svg`}
				alt={altText}
				className={`w-20 h-20 ${className}`}
				loading='eager'
			/>
		</a>
	);
};

export default GridTechnology;
