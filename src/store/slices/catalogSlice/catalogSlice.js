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
            let userList = [];
            let sortItems = action.payload;

            if (!sortItems.length) {
                alert('Фильтры не выбраны');
            }

            for (let item of sortItems) {
                let key = Object.keys(item)[0];

                userList = state.users.filter((user) => {
                    console.log(user[key], item[key]);
                    return user[key].includes(item[key]);
                });
            }

            state.users = userList;
        },
    },
});

export const { setUserList, setStartColor, sortUsers } = catalogSlice.actions;
export default catalogSlice.reducer;
