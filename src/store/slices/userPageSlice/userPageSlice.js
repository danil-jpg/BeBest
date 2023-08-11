import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
};

export const userPageSlice = createSlice({
    name: 'userPage',
    initialState,
    reducers: {
        setUserPageData: (state, action) => {
            state.users = action.payload;
        },
    },
});

export const { setUserPageData } = userPageSlice.actions;
export default userPageSlice.reducer;
