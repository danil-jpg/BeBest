import { configureStore } from '@reduxjs/toolkit';
import headerSlice from './slices/headerSlice/headerSlice';
import footerSlice from './slices/footerSlice/footerSlice';
import breadcrumbSlice from './slices/breadcrumbSlice/breadcrumbSlice';
import catalogSlice from './slices/catalogSlice/catalogSlice';
import filterSlice from './slices/filterSlice/filterSlice';
import tabsUserSlice from './slices/tabsUserSlice/tabsUserSlice';
import teacherFilterSlice from './slices/teachreFilterSlice/teacherFilterSlice';
import userPageSlice from './slices/userPageSlice/userPageSlice';

export const store = configureStore({
    reducer: {
        headerSlice,
        footerSlice,
        breadcrumbSlice,
        catalogSlice,
        filterSlice,
        tabsUserSlice,
        teacherFilterSlice,
        userPageSlice
    },
    devTools: true,
});
