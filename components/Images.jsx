import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import LoaderWrapper from './LoaderWrapper';
import ImageCard from './Image';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

const Images = () => {
	const { images, imageLoading, imageError } = useSelector((state) => state.app);
	const [items, setItems] = React.useState([]);

	useEffect(() => {
		setItems(images);
	}, [images]);

	const handleDragEnd = (event) => {
		const { active, over } = event;
		const oldIndex = items.findIndex((p) => p.id === active.id);
		const newIndex = items.findIndex((p) => p.id === over.id);
		setItems((items) => arrayMove(items, oldIndex, newIndex));
	};
	return (
		<DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
			<main className='w-full flex flex-col items-center'>
				{imageLoading ? (
					<section className='w-full flex justify-center'>
						<SkeletonTheme inline={true} baseColor='#202020' width={300} highlightColor='#444' wrapper={LoaderWrapper}>
							<Skeleton className='m-2' inline={true} height={250} count={25} />
						</SkeletonTheme>
					</section>
				) : (
					<SortableContext items={images} strategy={verticalListSortingStrategy}>
						<section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full justify-center px-4 md:px-12 lg:px-20'>
							{items?.map((image, index) => (
								<ImageCard key={image.id} image={image} />
							))}
						</section>
					</SortableContext>
				)}
			</main>
		</DndContext>
	);
};

export default Images;
