import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	type: '',
	username: '',
	password: '',
	email: ''
}


export const postData = createAsyncThunk(
	'content/postData',
	async (state) => {
		const res = await axios.post('http://bebest.pp.ua/api/auth/local/register', state);
		const data = await res
		return data
	}
)


export const registrationSlice = createSlice({
	name: 'registration',
	initialState,
	reducers: {
		setRegDataStudent: (state, action) => {
			state.type = action.payload.type
			state.username = action.payload.username
			state.password = action.payload.password
			state.email = action.payload.email
		},
		setRegDataTeacher: (state, action) => {
			state.type = action.payload.type
			state.username = action.payload.username
			state.password = action.payload.password
			state.email = action.payload.email
			state.phone = action.payload.phone
			state.passport = action.payload.passport
			state.country = action.payload.country
			state.city = action.payload.city
			state.adress = action.payload.adress
			state.edu = action.payload.edu
			state.exp = action.payload.exp
		},
		setRegDataComp: (state, action) => {
			state.type = action.payload.type
			state.username = action.payload.username
			state.password = action.payload.password
			state.email = action.payload.email
			state.phone = action.payload.phone
			state.country = action.payload.country
			state.city = action.payload.city
			state.adress = action.payload.adress
		},
		setAuthorize: (state, action) => {
			state.identifier = action.payload.identifier
			state.email = action.payload.email
		}

	},
	extraReducers: (builder) => {
		builder.addCase(postData.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(postData.fulfilled, (state) => {
			state.isLoading = false
		})
		builder.addCase(postData.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.error.message
		})

	}
})

export const { setRegDataStudent, setRegDataTeacher, setRegDataComp, setAuthorize } = registrationSlice.actions;
export default registrationSlice.reducer