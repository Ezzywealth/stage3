import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';
import Form from './Form';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const Navbar = () => {
	const [height, setHeight] = useState(0);
	const [openForm, setOpenForm] = useState(false);
	const { imageLoading } = useSelector((state) => state.app);
	const router = useRouter();

	useEffect(() => {
		if (imageLoading) {
			setOpenForm(false);
		}
	}, [imageLoading]);

	const handleSignout = async () => {
		await signOut({
			redirect: false,
			callbackUrl: '/',
		});
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
					<button onClick={handleSignout} className='cursor-pointer z-[1000] font-semibold text-white'>
						Sign out
					</button>
				</div>
				<div className='flex md:hidden rounded-lg w-full'>
					<Form />
				</div>
			</section>
		</nav>
	);
};

export default Navbar;
