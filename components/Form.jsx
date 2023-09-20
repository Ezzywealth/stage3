import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { searchImages } from '../Redux/appSlice';

const Form = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(searchImages(searchQuery));
		setSearchQuery('');
	};
	return (
		<form action='' onSubmit={handleSubmit} className='rounded-lg w-full mt-2'>
			<div className='flex items-center w-full relative rounded-lg'>
				<input type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search for any image ? ' className='placeholder:text-sm px-4 py-2 w-full md:w-[500px] rounded-lg border focus:outline-none focus:ring focus:border-blue-300  bg-none' />
				<button type='submit' className='absolute inset-y-0 right-0   items-center pr-3'>
					<BsSearch size={17} />
				</button>
			</div>
		</form>
	);
};

export default Form;
