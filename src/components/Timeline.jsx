import TimelineItem from './TimelineItem';

const Timeline = ({ timeline }) => {
	return (
		<div
			className={`before:absolute before:left-1/2 before:-mt-8 before:ml-[-2px] before:h-full before:w-1 before:bg-[#333]`}
		>
			{timeline.map((t, index) => {
				console.log(t);
				return (
					<TimelineItem
						key={index}
						company={t.company}
						jobs={t.jobs}
						index={index}
					/>
				);
			})}
		</div>
	);
};

export default Timeline;
