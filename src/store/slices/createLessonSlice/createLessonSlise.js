import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    title: '',
    date: '',
    duration: '',
    selectedCountry: '',
  },
  createdLesson: null,
};

const lessonSlice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    createLesson: (state, action) => {
      state.createdLesson = action.payload;
    },
  },
});

export const { updateFormData, createLesson } = lessonSlice.actions;
export default lessonSlice.reducer;
