import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';
import axios from 'axios';

const initialState = {
    forums: [],
    status: null,
    error: null,
};

export const fetchForums = createAsyncThunk(
    'forum/fetchForums',
    async () => {
        let res = await axios.get('http://bebest.pp.ua/api/forums?populate=*');
        return res.data.data;
    });

export const forumSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setForum: (state, action) => {
            state.forums = action.payload;
        },
        sortForum: (state, action) => {
            state.forums = [...state.forums].sort((a,b) => {a - b})
        }
    },
    extraReducers: {
        [fetchForums.pending]: (state) => {
            state.status = 'loading';
            state.error = null;

            console.log('pending')
        },
        [fetchForums.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.forums = action.payload;
        },
        [fetchForums.rejected]: (state) => {


            console.log('reject');
        },
    },
});

export const { setForum } = forumSlice.actions;
export default forumSlice.reducer;
