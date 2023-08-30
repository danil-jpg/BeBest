import { createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';

const initialState = {
	isLogedIn: false
};

export const authorizeSlice = createSlice({
	name: 'breadcrumbs',
	initialState,
	reducers: {
		setAuthorizeState: (state, action) => {
			state.isLogedIn = action.payload
		}
	},
});

export default authorizeSlice.reducer;
export const { setAuthorizeState } = authorizeSlice.actions 