import { configureStore } from '@reduxjs/toolkit';
import headerSlice from './slices/headerSlice/headerSlice';
import footerSlice from './slices/footerSlice/footerSlice';
import breadcrumbSlice from './slices/breadcrumbSlice/breadcrumbSlice';
import catalogSlice from './slices/catalogSlice/catalogSlice';

export const store = configureStore({
    reducer: {
        headerSlice,
        footerSlice,
        breadcrumbSlice,
        catalogSlice,
    },
    devTools: true,
});
