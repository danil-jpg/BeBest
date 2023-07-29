import { configureStore } from '@reduxjs/toolkit';
import headerSlice from './slices/headerSlice/headerSlice';
import footerSlice from './slices/footerSlice/footerSlice';

export const store = configureStore({
	reducer: {
		headerSlice,
		footerSlice,
	},
	devTools: true,
})