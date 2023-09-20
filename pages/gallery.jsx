import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchImages } from '../Redux/appSlice';
import Images from '../components/Images';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Auth from '../components/Auth';

const Gallery = () => {
	const dispatch = useDispatch();
	const { data: session, status } = useSession();
	const router = useRouter();

	const query = 'cats';
	useEffect(() => {
		if (status === 'loading' || status === 'unauthenticated') return;
		dispatch(fetchImages(query));
	}, [query, dispatch, status]);

	return (
		<Auth>
			<main className='mt-[150px] md:mt-[150px] '>
				<Navbar />
				<Images />
				<Footer />
			</main>
		</Auth>
	);
};
export default Gallery;
