import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';
import Form from './Form';

const Navbar = () => {
	const [height, setHeight] = useState(0);
	const [openForm, setOpenForm] = useState(false);
	const { imageLoading } = useSelector((state) => state.app);

	// an effect to cal windows scroll height
	useEffect(() => {
		const handleScroll = () => {
			setHeight(window.scrollY);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [height]);

	useEffect(() => {
		if (imageLoading) {
			setOpenForm(false);
		}
	}, [imageLoading]);

	const handleMenu = () => {
		setOpenForm(!openForm);
	};

	return (
		<nav className={`px-4 md:px-8 py-4 z-[999999999] bg-zinc-900 shadow-md transition-all duration-300 ease-in-out fixed top-0 left-0 w-full ${height >= 150 ? 'bg-white' : 'bg-none'}`}>
			<section className='relative'>
				<div className=' flex justify-between items-center'>
					<div className='text-white font-bold'>
						<Link href='/'>
							<div className='md:p-2 text-xl flex items-center gap-3 font-bold'>
								<Image src='/assets/images/logo.svg' alt='image' layout='intrisic' height={25} width={25} />
								<h1 className={`text-white text-sm md:text-[20px] font-bold`}>Ziks Gallery</h1>
							</div>
						</Link>
					</div>
					<div className='hidden md:flex rounded-lg'>
						<Form />
					</div>
					<Link href='/signin' className='font-semibold text-white'>
						Sign out
					</Link>
				</div>
				<div className='flex md:hidden rounded-lg w-full'>
					<Form />
				</div>
			</section>
		</nav>
	);
};

export default Navbar;
