import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';
import axios from 'axios';

const initialState = {
    forums: [],
};

const fetchForums = createAsyncThunk('forum/fetchForums', async () => {
    const response = await fetch('http://bebest.pp.ua/api/forum?populate=*');
    const data = await response.json();
    return data;
});

export const forumSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        test: (state, action) => {},
    },
    extraReducers: {
        [fetchForums.fulfilled]: (state) => {
            
            fetchForums();
        },
    },
});

export const { test } = forumSlice.actions;
export default forumSlice.reducer;
