import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
const initialState = {
	user: null,
	images: [],
	imageLoading: false,
	imageError: '',
};

export const fetchImages = createAsyncThunk('app/fetchImages', async (searchTerm) => {
	const { data } = await axios.get(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${accessKey}`);
	console.log(data);
	return data;
});

export const searchImages = createAsyncThunk('app/searchImages', async (searchTerm) => {
	const { data } = await axios.get(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${accessKey}`);
	console.log(data);
	return data;
});

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {},
	extraReducers: (builders) => {
		builders.addCase(fetchImages.pending, (state, action) => {
			state.imageLoading = true;
		});
		builders.addCase(fetchImages.fulfilled, (state, action) => {
			state.images = action.payload.results;
			state.imageLoading = false;
		});
		builders.addCase(fetchImages.rejected, (state, action) => {
			state.imageError = action.payload;
			state.imageLoading = false;
		});
		builders.addCase(searchImages.pending, (state, action) => {
			state.imageLoading = true;
		});
		builders.addCase(searchImages.fulfilled, (state, action) => {
			state.images = action.payload;
			state.imageLoading = false;
		});
		builders.addCase(searchImages.rejected, (state, action) => {
			state.imageError = action.payload;
			state.imageLoading = false;
		});
	},
});

export default appSlice.reducer;