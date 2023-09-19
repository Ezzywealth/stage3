import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import LoaderWrapper from './LoaderWrapper';
const Images = () => {
	const { images, imageLoading } = useSelector((state) => state.app);
	console.log(images);
	console.log(imageLoading);

	return (
		<main className='w-full flex flex-col items-center'>
			{imageLoading ? (
				<section className='w-full flex justify-center'>
					<SkeletonTheme inline={true} baseColor='#202020' width={300} highlightColor='#444' wrapper={LoaderWrapper}>
						<Skeleton className='m-2' inline={true} height={250} count={25} />
					</SkeletonTheme>
				</section>
			) : (
				<section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full justify-center px-4 md:px-12 lg:px-20'>
					{images.map((image, index) => (
						<div key={image.id} className='block relative xs:h-[150px] sm:h-[250px] rounded-xl  shadow-lg '>
							<Image placeholder='empty' blurDataURL={image?.blur_hash || 'LJJ*esOZ?w-;~XsmaJxvT1t6jEbI'} src={image?.urls?.small} layout='fill' objectFit='cover' alt='image' className='cursor-move rounded-md' />
						</div>
					))}
				</section>
			)}
		</main>
	);
};

export default Images;
