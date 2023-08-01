import { createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';
import { selectItem } from '../../../utils/selectItem';

const initialState = {
    langList: [
        {
            id: v1(),
            title: 'русский',
            selected: true,
        },
        {
            id: v1(),
            title: 'украинский',
            selected: false,
        },
        {
            id: v1(),
            title: 'английский',
            selected: false,
        },
    ],
};

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setLangSpeak: (state, action) => {
            state.langList.forEach((el) => {
                if (el.id === action.payload) {
                    el.selected = true;
                } else {
                    el.selected = false;
                }
            });
        },
    },
});

export const { setLangSpeak } = catalogSlice.actions;
export default catalogSlice.reducer;
