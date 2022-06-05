const GridProject = () => {
	return (
		<article className='rounded-md'>
			<img
				src='/todolist-cover.png'
				loading='eager'
				alt=''
				className='object-cover w-full h-60 rounded-t-md'
			/>
			<div className='flex flex-col px-3 pt-1 pb-3 bg-white border-2 border-t-0 rounded-b-md'>
				<h4 className='text-lg font-semibold'>TodoList</h4>
				<div id='description'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, fugit.
					Maxime, ipsum non corporis tenetur voluptas libero facere quos
					deleniti possimus porro suscipit?
				</div>
				<div id='technologies' className='mt-3 justify-self-end'>
					😀😀😀😀😀
				</div>
			</div>
		</article>
	);
};

export default GridProject;
