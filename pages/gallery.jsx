import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchImages } from '../Redux/appSlice';
import Images from '../components/Images';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Home() {
	const dispatch = useDispatch();
	const { data: session } = useSession();
	const router = useRouter();

	const query = 'cats';
	useEffect(() => {
		dispatch(fetchImages(query));
	}, [query, dispatch]);

	useEffect(() => {
		if (session?.user?.email === undefined) {
			router.push('/');
		}
	}, [session?.user?.email]);

	console.log(session?.user?.email);
	return (
		<main className='mt-[100px] md:mt-[150px] '>
			<Navbar />
			<Images />
			<Footer />
		</main>
	);
}
