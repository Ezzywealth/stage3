import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchImages } from '../Redux/appSlice';
import Images from '../components/Images';
import SplashScreen from '../components/SplashScreen';

export default function Home() {
	return (
		<main className=''>
			<SplashScreen />
		</main>
	);
}
