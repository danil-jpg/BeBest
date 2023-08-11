import { createSlice } from '@reduxjs/toolkit'

const init = {};

const teacherFilterSlice = createSlice({
	name: 'teacherFilterSlice',
	initialState: init,
	reducers: {
		setUserList: (state, action) => {
			state.users = action.payload
		}
		// setTeacherFilterSlice: (state, action) => {
		// obj?.data?.data[0].attributes.review.sort((p1, p2) => {
		// 	return p1.lessonNum < p2.lessonNum ? 1 : p1.lessonNum > p2.lessonNum ? -1 : 0;
		// });
		// }
	}
})

export const { setUserList } = teacherFilterSlice.actions
export default teacherFilterSlice.reducer;