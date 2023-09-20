import Image from 'next/image';
import React from 'react';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
const ImageCard = ({ image }) => {
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: image.id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};
	return (
		<div ref={setNodeRef} style={style} {...attributes} {...listeners} key={image.id} className='block relative xs:h-[150px] sm:h-[250px] rounded-xl  shadow-lg '>
			<Image placeholder='empty' blurDataURL={image?.blur_hash || 'LJJ*esOZ?w-;~XsmaJxvT1t6jEbI'} src={image?.urls?.small} layout='fill' objectFit='cover' alt='image' className='cursor-move rounded-md' />
		</div>
	);
};

export default ImageCard;
