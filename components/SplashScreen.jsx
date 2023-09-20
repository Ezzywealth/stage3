import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { RotatingLines } from 'react-loader-spinner';
import SignIn from './SignIn';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSignupModal } from '../Redux/appSlice';
import SignInBtn from './SignInBtn';

const SplashScreen = () => {
	const isSignupModal = useSelector((state) => state.app.isSignupModal);
	const dispatch = useDispatch();

	const handleSignIn = () => {
		dispatch(toggleSignupModal());
	};

	return (
		<main className='flex flex-col items-center gap-4 h-screen bg-blend-color' style={{ background: 'url(/assets/images/cars-bg.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,0.6)' }}>
			<div className='flex flex-col items-center h-screen justify-center  z-0'>
				<div className='text-white text-center px-4'>
					<h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>
						Welcome to Ziks <br /> Gallery
					</h1>
					<p className='text-base md:text-lg'>
						Explore beautiful images from <br className='flex md:hidden' /> around the world.
					</p>
				</div>
				<SignInBtn onClick={handleSignIn} />
			</div>
			{isSignupModal && (
				<section className='show fixed top-0 left-0 w-full flex justify-center items-center'>
					<SignIn />
				</section>
			)}
		</main>
	);
};

export default SplashScreen;
