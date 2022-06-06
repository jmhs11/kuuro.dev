const GridProjectTech = ({ name, icon, className }) => {
	return <img src={`/icons/${icon}.svg`} alt={name} className={`w-8 h-8 ${className}`} />;
};

export default GridProjectTech;
