import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className='w-full mt-[150px] mb-[50px]'>{children}</main>
			<Footer />
		</>
	);
};
