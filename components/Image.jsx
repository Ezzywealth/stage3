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
		<section ref={setNodeRef} style={style} {...attributes} {...listeners} className={`touch-auto ${isDragging ? 'opacity-100' : 'opacity-40'}`}>
			<div className='block relative xs:h-[150px] sm:h-[250px] rounded-xl shadow-lg touch-none'>
				<Image placeholder='empty' blurDataURL={image?.blur_hash || 'LJJ*esOZ?w-;~XsmaJxvT1t6jEbI'} src={image?.urls?.small} layout='fill' objectFit='cover' alt='image' className='rounded-md' />
				<ul className=''>
					{image?.tags?.map((tag) => (
						<li key={tag?.title}>{tag?.title}</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default ImageCard;
