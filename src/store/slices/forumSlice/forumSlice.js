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
        let res = await axios.get('http://bebest.pp.ua/api/forums?populate=topics&sort=updatedAt:desc');
        return res.data.data;
    });

export const forumSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setForum: (state, action) => {
            state.forums = action.payload;
        },
        sortDate: (state) => {
            let tmp = [...state.forums];

            tmp.sort((a, b) => {
                let first = new Date(a.attributes.updateAt);
                let second = new Date(b.attributes.updateAt);

                console.log(first - second);
            })
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

export const { setForum, sortDate } = forumSlice.actions;
export default forumSlice.reducer;
