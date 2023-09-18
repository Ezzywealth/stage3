import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchImages } from '../Redux/appSlice';
import Images from '../components/Images';

export default function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchImages('cats'));
	}, []);
	return (
		<main className='text-red-500'>
			<Images />
		</main>
	);
}
