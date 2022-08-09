const GridProjectTech = ({ name, icon, className, isPNG }) => {
	return (
		<img
			src={`/icons/${icon}.${isPNG ? 'png' : 'svg'}`}
			alt={name}
			className={`h-8 w-8 ${className}`}
		/>
	);
};

export default GridProjectTech;
