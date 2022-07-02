import { useEffect, useRef, useState } from 'react';

const TimelineItem = ({ company, jobs, index }) => {
	// ? 'ml-[55%] before:rounded-md before:-left-10 before:h-full before:absolute before:w-2 before:-mt-4 before:bg-blue-500'
	// 				: 'mr-auto after:rounded-md after:-right-0 after:top-14 after:h-full after:absolute after:w-2 after:-mt-14 after:bg-red-500'

	const [height, setHeight] = useState('0px');
	const ref = useRef(null);

	useEffect(() => {
		if (ref.current.clientHeight) {
			setTimeout(() => {
				console.log(height);
				setHeight(ref.current.offsetHeight + 'px');
				console.log(ref);
			}, 1000);
		}
	});

	return (
		<article
			ref={ref}
			className={`mb-4 w-[45%] rounded-md border-2 border-[#333] p-4
      ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}
      `}
		>
			<div
				className={`before:absolute before:-mt-4 before:w-4 before:rounded-md ${
					index % 2 === 0
						? 'before:left-1/2 before:bg-red-500'
						: 'before:right-1/2 before:bg-blue-500'
				}`}
			>
				<h4 className='mb-4 text-xl'>{company}</h4>
				{jobs.map(job => (
					<p key={job.position}>{job.position}</p>
				))}
			</div>
		</article>
	);
};

export default TimelineItem;
