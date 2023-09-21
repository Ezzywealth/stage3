import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../Redux/appSlice';
import Images from '../components/Images';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Auth from '../components/Auth';
import { RotatingLines } from 'react-loader-spinner';

const Gallery = () => {
	const dispatch = useDispatch();
	const { imageLoading } = useSelector((state) => state.app);
	const { data: session, status } = useSession();
	const router = useRouter();

	const query = 'animals';
	useEffect(() => {
		if (status === 'authenticated') {
			dispatch(fetchImages(query));
		}
	}, [dispatch, status]);

	if (status === 'loading') {
		return (
			<section className='h-screen flex w-full justify-center items-center'>
				<RotatingLines height='80' width='80' color='#4fa94d' ariaLabel='bars-loading' wrapperStyle={{}} wrapperClass='' visible={true} />
			</section>
		);
	}

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
