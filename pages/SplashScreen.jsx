import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { RotatingLines } from 'react-loader-spinner';
import SignIn from '../components/SignIn';

const SplashScreen = () => {

	return (
		<main>
			<div className='flex items-center justify-center h-screen bg-blue-400'>
				<div className='text-white text-center'>
					<h1 className='text-4xl font-bold mb-4'>Welcome to My Ziks Gallery</h1>
					<p className='text-lg'>Explore beautiful images from around the world.</p>
				</div>
			</div>
			<SignIn />
		</main>
	);
};

export default SplashScreen;
