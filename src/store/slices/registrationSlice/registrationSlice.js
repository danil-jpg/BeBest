import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	type: '',
	login: '',
	password: '',
	email: ''
}

export const registrationSlice = createSlice({
	name: 'registration',
	initialState,
	reducers: {
		setRegDataStudent: (state, action) => {
			state.type = action.payload.type
			state.login = action.payload.login
			state.password = action.payload.password
			state.email = action.payload.email
		}
	}
})

export const { setRegDataStudent } = registrationSlice.actions;
export default registrationSlice.reducer