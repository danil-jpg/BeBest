import { configureStore } from '@reduxjs/toolkit';
import headerSlice from './slices/headerSlice/headerSlice';

export const store = configureStore({
	reducer: {
		setLang: headerSlice,
	},
	devTools: true,
})