import TimelineItem from './TimelineItem';

const Timeline = ({ timeline }) => {
	return (
		<div
			className={`before:absolute before:-mt-8 before:ml-[-2px] before:h-full before:w-1 before:bg-[#333] md:before:left-1/2`}
		>
			{timeline.map((t, index) => (
				<TimelineItem
					key={index}
					company={t.company}
					jobs={t.jobs}
					index={index}
				/>
			))}
		</div>
	);
};

export default Timeline;
