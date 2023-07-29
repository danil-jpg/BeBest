import { configureStore } from '@reduxjs/toolkit';
import headerSlice from './slices/headerSlice/headerSlice';
import footerSlice from './slices/footerSlice/footerSlice';
import breadcrumbSlice from './slices/breadcrumbSlice/breadcrumbSlice';

export const store = configureStore({
    reducer: {
        headerSlice,
        footerSlice,
        breadcrumbSlice,
    },
    devTools: true,
});
