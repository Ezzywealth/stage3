import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';
import Form from './Form';
import { fetchImages } from '../Redux/appSlice';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
const searchTerms = [
	'sunrise',
	'sunset',
	'ocean',
	'forest',
	'mountain',
	'urban',
	'night',
	'daytime',
	'vintage',
	'modern',
	'workspace',
	'technology',
	'people',
	'friends',
	'family',
	'love',
	'holiday',
	'adventure',
	'relaxation',
	'cooking',
	'sports',
	'fitness',
	'yoga',
	'health',
	'education',
	'books',
	'artistic',
	'vibrant',
	'minimalistic',
	'aerial',
	'space',
	'stars',
	'animals',
	'birds',
	'flowers',
	'architecture',
	'cars',
	'bicycles',
	'street',
	'market',
	'restaurant',
	'coffee',
	'dessert',
	'summer',
	'winter',
	'spring',
	'autumn',
	'waterfall',
	'lakeside',
	'island',
	'traveler',
	'exploration',
	'history',
	'culture',
	'vintage cars',
	'beauty',
	'fashion',
	'wedding',
	'party',
	'celebration',
	'vintage fashion',
	'music',
	'concert',
	'performance',
	'rain',
	'snow',
	'fireworks',
	'underwater',
	'wildlife',
	'farm',
	'agriculture',
	'industry',
	'city skyline',
	'architecture',
	'national park',
	'beach vacation',
	'camping',
	'hiking',
	'skiing',
	'gaming',
	'technology',
	'coding',
	'office',
	'home office',
	'remote',
	'animals',
	'cars',
	'footballers',
	'phones',
	'gadgets',
];

// You can use these search terms to fetch images from Unsplash.

const Navbar = () => {
	const [height, setHeight] = useState(0);
	const [openForm, setOpenForm] = useState(false);
	const dispatch = useDispatch();
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
								<h1 className={`text-white w-full text-sm md:text-[20px] font-bold`}>Ziks Gallery</h1>
							</div>
						</Link>
					</div>
					<div className='hidden md:flex rounded-lg'>
						<Form />
					</div>

					<select defaultValue='' className='focus:outline-none w-[100px] md:w-auto border-none px-4 py-1 transition-all duration-300 ease-linear  rounded-lg' onChange={(e) => dispatch(fetchImages(e.target.value))}>
						<option value='' disabled>
							Select a category
						</option>
						{searchTerms.map((item) => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
					</select>

					<button onClick={handleSignout} className='cursor-pointer  font-semibold text-white'>
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
