import Image from 'next/image';
import React from 'react';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';

const ImageCard = ({ image }) => {
	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: image.id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};
	return (
		<section ref={setNodeRef} style={style} {...attributes} {...listeners} className={`touch-auto ${isDragging ? 'opacity-[150]' : 'opacity-100'} shadow-md p-2 cursor-grab touch-none`}>
			<div className='block relative xs:h-[150px] sm:h-[250px] rounded-xl shadow-lg '>
				<Image placeholder='empty' blurDataURL={image?.blur_hash || 'LJJ*esOZ?w-;~XsmaJxvT1t6jEbI'} src={image?.urls?.small} layout='fill' objectFit='cover' alt='image' className='rounded-md' />
			</div>
			<ul className='flex w-full bg-white gap-3 justify-start flex-nowrap'>
				{image?.tags?.slice(0, 2).map((tag) => (
					<li key={tag?.title.slice(0, 7)} className='shadow-md text-[12px] rounded-md border border-gray-200 md:text-[14px] lg:text-base p-1 py-0 mt-1'>
						{tag?.title.slice(0, 10)}
					</li>
				))}
			</ul>
		</section>
	);
};

export default ImageCard;
