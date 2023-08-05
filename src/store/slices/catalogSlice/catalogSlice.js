import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';
import axios from 'axios';

const initialState = {
    users: [],
    stars: [
        {
            id: v1(),
            selected: false,
        },
        {
            id: v1(),
            selected: false,
        },
        {
            id: v1(),
            selected: false,
        },
        {
            id: v1(),
            selected: false,
        },
        {
            id: v1(),
            selected: false,
        },
    ],
};

export const getUsers = createAsyncThunk(
    'catalog/getUsers',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const res = await axios.get(
                'http://bebest.pp.ua/api/users/?populate=*'
            );
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setStartColor: (state, action) => {
            let counter = 1;
            let amount = action.payload;

            for (let star of state.stars) {
                if (counter <= amount) {
                    star.selected = true;
                } else {
                    star.selected = false;
                }
            }
        },
    },

    extraReducers: {
        [getUsers.fulfilled]: (state, action) => {
            console.log('getUsers >', 'fulfilled');
            state.users = action.payload;
        },
        [getUsers.pending]: () => console.log('getUsers >', 'pending'),
        [getUsers.rejected]: () => console.log('getUsers >', 'rejected'),
    },
});

export const { setUsers, setStartColor } = catalogSlice.actions;
export default catalogSlice.reducer;
