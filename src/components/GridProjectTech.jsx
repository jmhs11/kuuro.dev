const GridProjectTech = ({ name, icon, className }) => {
	return (
		<img
			src={`/icons/${icon}.svg`}
			alt={name}
			className={`h-8 w-8 ${className}`}
		/>
	);
};

export default GridProjectTech;
