import { createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';

const initialState = {
    list: [
        {
            id: v1(),
            path: '/catalog',
            data: [
                {
					id: v1(),
					title: '',
					to:''
                },
                {
                    
                }
            ],
        },
    ],
};

export const breadcrumbSlice = createSlice({
    name: 'breadcrumbs',
    initialState,
    reducers: {},
});

// export const { setLang } = headerSlice.actions;
export default breadcrumbSlice.reducer;
