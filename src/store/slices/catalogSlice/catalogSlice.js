import { createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';

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

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setUserList: (state, action) => {
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
        sortUsers: (state, action) => {
            console.log(action.payload)
        },
    },
});

export const { setUserList, setStartColor, sortUsers } = catalogSlice.actions;
export default catalogSlice.reducer;
