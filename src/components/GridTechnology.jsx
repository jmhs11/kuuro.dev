const GridTechnology = ({ url, icon, isPNG, altText, className }) => {
	return (
		<a
			href={url}
			rel='nooppener noreferrer'
			target='_blank'
			className={`flex ${
				isPNG ? 'h-full md:h-min' : 'h-fit'
			} w-full justify-center rounded-md border-2 bg-white p-3 dark:border-[#333] dark:bg-black`}
			title={altText.split(' ')[0]}
		>
			<img
				src={`/icons/${icon}.${isPNG ? 'png' : 'svg'}`}
				alt={altText}
				className={`${
					isPNG ? 'my-auto h-fit w-full md:h-20 md:object-contain' : 'h-20 w-20'
				} ${className}`}
				loading='eager'
			/>
		</a>
	);
};

export default GridTechnology;
