import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
const initialState = {
	user: null,
	images: [],
	filterImages: [],
	imageLoading: false,
	imageError: '',
	isSignupModal: false,
};

export const fetchImages = createAsyncThunk('app/fetchImages', async (searchTerm) => {
	const { data } = await axios.get('https://api.unsplash.com/search/photos', {
		params: {
			query: searchTerm,
			per_page: 30,
		},
		headers: {
			Authorization: `Client-ID ${accessKey}`,
		},
	});
	return data;
});

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		toggleSignupModal: (state, action) => {
			state.isSignupModal = !state.isSignupModal;
		},
		filterImages: (state, action) => {
			console.log(action.payload);
			state.images = state.filterImages?.filter((image) => {
				const tags = image?.tags?.map((tag) => tag?.title?.toLowerCase());
				console.log(tags);
				if (tags.slice(0, 1).join(' ').includes(action.payload.toLowerCase())) return image;
			});
		},
	},
	extraReducers: (builders) => {
		builders.addCase(fetchImages.pending, (state, action) => {
			state.imageLoading = true;
		});
		builders.addCase(fetchImages.fulfilled, (state, action) => {
			state.images = action.payload.results;
			state.filterImages = action.payload.results;
			state.imageLoading = false;
		});
		builders.addCase(fetchImages.rejected, (state, action) => {
			state.imageError = action.payload;
			state.imageLoading = false;
		});
	},
});

export default appSlice.reducer;
export const { toggleSignupModal, filterImages } = appSlice.actions;
