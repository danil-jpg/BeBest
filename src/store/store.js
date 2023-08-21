import { configureStore } from '@reduxjs/toolkit';
import headerSlice from './slices/headerSlice/headerSlice';
import footerSlice from './slices/footerSlice/footerSlice';
import breadcrumbSlice from './slices/breadcrumbSlice/breadcrumbSlice';
import catalogSlice from './slices/catalogSlice/catalogSlice';
import filterSlice from './slices/filterSlice/filterSlice';
import tabsUserSlice from './slices/tabsUserSlice/tabsUserSlice';
import teachterFetchUsers from './slices/teachreFilterSlice/teacherFetchUsersSlice';
import userPageSlice from './slices/userPageSlice/userPageSlice';
import forumSlice from './slices/forumSlice/forumSlice';

export const store = configureStore({
    reducer: {
        headerSlice,
        footerSlice,
        breadcrumbSlice,
        catalogSlice,
        filterSlice,
        tabsUserSlice,
        teacherFilterSlice,
        userPageSlice,
        forumSlice,
        userContentSlice: teachterFetchUsers,

    },
    devTools: true,
});
