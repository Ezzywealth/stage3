import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import LoaderWrapper from './LoaderWrapper';
import ImageCard from './Image';
import { DndContext, closestCenter, KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy, reactSwappingStrategy } from '@dnd-kit/sortable';

const Images = () => {
	const { images, imageLoading, imageError } = useSelector((state) => state.app);
	const [items, setItems] = React.useState([]);
	const mouseSensor = useSensor(MouseSensor);
	const touchSensor = useSensor(TouchSensor);
	const keyboardSensor = useSensor(KeyboardSensor);

	const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

	useEffect(() => {
		setItems(images);
		console.log(items);
	}, [images]);

	const handleDragEnd = (event) => {
		const { active, over } = event;
		const oldIndex = items.findIndex((p) => p.id === active.id);
		const newIndex = items.findIndex((p) => p.id === over.id);
		setItems((items) => arrayMove(items, oldIndex, newIndex));
	};

	console.log(images);

	return (
		<main className='w-full min-h-screen'>
			{imageLoading ? (
				<section className='w-full flex justify-center'>
					<SkeletonTheme inline={true} baseColor='#202020' width={300} highlightColor='#444' wrapper={LoaderWrapper}>
						<Skeleton className='m-2' inline={true} height={250} count={25} />
					</SkeletonTheme>
				</section>
			) : (
				<>
					{items?.length === 0 ? (
						<section>
							<h1 className='text-2xl font-bold text-center mt-10'>No images found. Search another!!!</h1>
						</section>
					) : (
						<DndContext autoScroll={{ acceleration: 1 }} TouchSensor collisionDetection={closestCenter} onDragEnd={handleDragEnd} sensors={sensors}>
							<SortableContext items={images} strategy={reactSwappingStrategy}>
								<section className='grid xs:grid-cols-2 sm:grid-cols-3 touch-pan-y md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full justify-center px-8 md:px-12 lg:px-20'>
									{items?.map((image, index) => (
										<ImageCard key={image.id} image={image} />
									))}
								</section>
							</SortableContext>
						</DndContext>
					)}
				</>
			)}
		</main>
	);
};

export default Images;
