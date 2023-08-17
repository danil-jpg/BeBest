import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	'type': '',
	'login': '',
	'password': '',
	'email': ''
}

export const registrationSlice = createSlice({
	name: 'registration',
	initialState,
	reducers: {
		setRegDataStudent: (state, action) => {
			console.log(action)
			state.type = action.payload.type
		}
	}
})

export const { setRegDataStudent } = registrationSlice.actions;
export default registrationSlice.reducer