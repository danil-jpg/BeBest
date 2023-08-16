import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
	defUsers: [],
	users: [],
	usersByLessonNum: [],
	usersBySex: [],
	isLoading: false,
	isSuccLoaded: false,
	error: null,
}

export const fetchAllUsers = createAsyncThunk(
	'content/fetchContent',
	async () => {
		const res = await axios.get('http://bebest.pp.ua/api/reviews/?populate=*');
		const data = await res.data.data[0].attributes.review
		return data
	}
)

const teacherFilterSlice = createSlice({
	name: 'content',
	initialState,
	reducers: {
		filteredUsersByLessonNum: (state, action) => {
			state.users.sort((p1, p2) => p1.lessonNum < p2.lessonNum ? 1 : p1.lessonNum > p2.lessonNum ? -1 : 0);
		},
		filteredUsersBySex: (state, action) => {
			state.users = state.users.filter((p1) => p1.sex === 'мужской');
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAllUsers.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
			state.isLoading = false
			state.isSuccLoaded = true
			state.defUsers = action.payload
			state.users = action.payload
		})
		builder.addCase(fetchAllUsers.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.error.message
		})
	}
})

export const { filteredUsersByLessonNum, filteredUsersBySex } = teacherFilterSlice.actions
export default teacherFilterSlice.reducer;