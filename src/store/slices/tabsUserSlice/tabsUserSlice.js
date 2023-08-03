import { createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';

const initialState = {
    tabs: [
        {
            id: v1(),
            title: 'Видеоприветствие',
            value: 'video',
            clicked: true,
        },
        {
            id: v1(),
            title: 'Описание',
            value: 'description',
            clicked: false,
        },
        {
            id: v1(),
            title: 'Календарь',
            value: 'calendar',
            clicked: false,
        },
    ],
};

export const tabsUserSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setTab: (state, action) => {
			let draftState = [ ...state.tabs ];
			state.tabs = draftState.map(el => {
				if (el.id === action.payload) {
					el.clicked = true;
				} else {
					el.clicked = false;
				} 

				return el;
			})
        },
    },
});

export const { setTab } = tabsUserSlice.actions;
export default tabsUserSlice.reducer;
