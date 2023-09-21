import Image from 'next/image';
import React from 'react';
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoInstagramAlt, BiLogoYoutube } from 'react-icons/bi';

const Footer = () => {
	return (
		<footer className='bg-white text-white py-4 mt-12'>
			<div className='container mx-auto flex gap-4 flex-col justify-center '>
				<div className='space-x-4 flex w-full justify-center gap-4 '>
					<a href='#' className='text-gray-300 hover:text-white'>
						<BiLogoFacebookCircle className='w-6 h-6' />
					</a>
					<a href='#' className='text-gray-300 hover:text-white'>
						<BiLogoTwitter className='w-6 h-6' />
					</a>
					<a href='#' className='text-gray-300 hover:text-white'>
						<BiLogoInstagramAlt className='w-6 h-6' />
					</a>
					<a href='#' className='text-gray-300 hover:text-white'>
						<BiLogoYoutube className='w-6 h-6' />
					</a>
				</div>
				<div className='flex flex-col md:flex-row gap:3 items-center md:gap-8 text-[#111827] font-bold text-sm md:text-lg justify-center'>
					<p>Conditions of Use</p>
					<p>Privacy & Policy</p>
					<p>Press Room</p>
				</div>
				<div className='flex mb-8 text-[#6B7280] font-bold text-sm md:text-lg justify-center'>&copy; {new Date().getFullYear()} Ziks Gallery by Ezzywealth</div>
			</div>
		</footer>
	);
};

export default Footer;
