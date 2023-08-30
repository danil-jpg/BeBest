import { configureStore } from '@reduxjs/toolkit';
import headerSlice from './slices/headerSlice/headerSlice';
import footerSlice from './slices/footerSlice/footerSlice';
import breadcrumbSlice from './slices/breadcrumbSlice/breadcrumbSlice';
import catalogSlice from './slices/catalogSlice/catalogSlice';
import filterSlice from './slices/filterSlice/filterSlice';
import tabsUserSlice from './slices/tabsUserSlice/tabsUserSlice';
import teachterFetchUsers from './slices/teachreFilterSlice/teacherFetchUsersSlice';
import userPageSlice from './slices/userPageSlice/userPageSlice';
import createLessonSlise from './slices/createLessonSlice/createLessonSlise';
import registrationSlice from './slices/registrationSlice/registrationSlice';
import forumSlice from './slices/forumSlice/forumSlice';
import authorizeSlice from './slices/authorizeSlice/authorizeSlice';
import profileSlice from './slices/profileSlice/profileSlice';
import serviceSlice from './slices/serviceSlice/serviceSlice';

export const store = configureStore({
        reducer: {
                headerSlice,
                footerSlice,
                breadcrumbSlice,
                catalogSlice,
                filterSlice,
                tabsUserSlice,
                regData: registrationSlice,
                userPageSlice,
                forumSlice,
                userContentSlice: teachterFetchUsers,
                lesson: createLessonSlise,
                authorize: authorizeSlice,
                profileSlice,
                serviceSlice
        },
        devTools: true,
});
