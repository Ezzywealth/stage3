import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';

const Images = () => {
	const images = useSelector((state) => state.app.images);
	console.log(images);
	return (
		<main className='w-full flex flex-col items-center'>
			<section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full justify-center px-4'>
				{images.map((image, index) => (
					<div key={image.id} className='block relative xs:h-[150px] sm:h-[300px] rounded-xl  shadow-lg '>
						<Image placeholder='blur' blurDataURL={image.blur_hash} src={image?.urls?.small} layout='fill' objectFit='cover' alt='image' className='cursor-move rounded-md' />
					</div>
				))}
			</section>
		</main>
	);
};

export default Images;
