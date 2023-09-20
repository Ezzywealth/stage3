import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = ({ children }) => {
	return (
		<>
			<ToastContainer position='bottom-center' />
			<main className='w-full'>{children}</main>
		</>
	);
};
