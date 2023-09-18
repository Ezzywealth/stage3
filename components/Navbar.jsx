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
				<div className='container mx-auto flex justify-between items-center'>
					<div className='text-white text-2xl font-bold'>
						<Link href='/'>
							<div className='md:p-2 text-xl flex items-center gap-3 font-bold'>
								<Image src='/assets/images/logo.svg' alt='image' layout='intrisic' height={25} width={25} />
								<h1 className={`${height >= 150 ? 'text-[#333]' : 'text-white'} text-[20px] font-bold`}>Zik Gallery</h1>
							</div>
						</Link>
					</div>
					<div className='md:flex space-x-4 hidden  rounded-lg'>
						<div className='relative  rounded-lg'>
							<Form />
						</div>
					</div>

					<div className={`${height >= 150 ? 'text-[#333]' : 'text-white'}`}>
						<Link href='/signin' className='font-semibold hidden md:flex'>
							Sign out
						</Link>
						<button onClick={handleMenu} type='button' className='flex md:hidden bg-[#BE123C] p-1 text-white rounded-full'>
							{openForm ? <AiOutlineClose size={20} /> : <AiOutlineMenuUnfold size={20} />}
						</button>
					</div>
				</div>
				{openForm && (
					<section className='absolute left-0 transition-all duration-300 ease-linear mt-8 w-[350px] flex justify-center '>
						<Form />
					</section>
				)}
			</section>
		</nav>
	);
};

export default Navbar;
