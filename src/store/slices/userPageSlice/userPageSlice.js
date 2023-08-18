import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userId: '',
};

export const userPageSlice = createSlice({
    name: 'userPage',
    initialState,
    reducers: {
        setUserPageId: (state, action) => {
            state.userId = action.payload;
        },
    },
});

export const { setUserPageId } = userPageSlice.actions;
export default userPageSlice.reducer;
