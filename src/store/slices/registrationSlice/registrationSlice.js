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
		},
		setRegDataTeacher: (state, action) => {
			// state.type = action.payload.type
			// state.login = action.payload.login
			// state.password = action.payload.password
			// state.email = action.payload.email
			// state.phone = action.payload.phone
			// state.passport = action.payload.passport
			// state.county = action.payload.country
			// state.city = action.payload.city
			// state.adress = action.payload.adress
			// state.edu = action.payload.edu
			// state.exp = action.payload.exp
		}
	}
})

export const { setRegDataStudent, setRegDataTeacher } = registrationSlice.actions;
export default registrationSlice.reducer