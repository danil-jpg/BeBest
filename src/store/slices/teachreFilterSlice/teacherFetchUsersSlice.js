import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { v1 } from 'uuid';
import { updateListSelection } from '../../../utils/updateListSelection';

const initialState = {
	defUsers: [],
	users: [],
	usersByLessonNum: [],
	selects: [
		[
			{ id: v1(), title: 'По возростанию', clicked: false },
			{ id: v1(), title: 'По убыванию', clicked: false }
		],
		[
			{ id: v1(), title: 'Мужской', clicked: false },
			{ id: v1(), title: 'Женский', clicked: false }
		]
	],
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
		},
		selectSort: (state, action) => {
			state.selects[0] = updateListSelection(
				state.selects[0],
				action.payload
			);

			state.selects[1] = updateListSelection(
				state.selects[1],
				action.payload
			);

			let res = state.selects[0].map(el => el.id === action.payload)
			if (res[0] === true) {
				state.users = state.defUsers
				state.users = state.users.sort((p1, p2) => p1.lessonNum < p2.lessonNum ? 1 : p1.lessonNum > p2.lessonNum ? -1 : 0);
			} else {
				state.users = state.defUsers
				state.users = state.users.sort((p1, p2) => p1.lessonNum > p2.lessonNum ? 1 : p1.lessonNum < p2.lessonNum ? -1 : 0);
			}

			let resSex = state.selects[1].map(el => el.id === action.payload)
			if (resSex[0] === true) {
				state.users = state.defUsers
				state.users = state.users.filter((p1) => p1.sex === 'мужской');
			} else {
				state.users = state.defUsers
				state.users = state.users.filter((p1) => p1.sex === 'женский');
			}
		},
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

export const { filteredUsersByLessonNum, filteredUsersBySex, selectSort } = teacherFilterSlice.actions
export default teacherFilterSlice.reducer;