import { createSlice } from '@reduxjs/toolkit';
import {
    updateListSelection,
} from '../../../utils/updateListSelection';
import { addSelectItems } from '../../../utils/addSelectItem';

const initialState = {
    lessonSpeak: {
        title: 'Язык преподавания',
        value: 'lang',
        list: [],
    },
    lessonTime: {
        title: 'Время преподавания',
        value: 'time',
        list: [],
    },
    lessonCountry: {
        title: 'Страна преподавателя',
        value: 'country',
        list: [],
    },
    langSpeak: {
        title: 'Язык преподавания',
        value: 'CommunicationLang',
        list: [],
    },
    sex: {
        title: 'Пол',
        value: 'sex',
        list: [],
    },
    preparingTest: {
        title: 'Подготовка к тестам',
        value: 'preparingTest',
        list: [],
    },
    aspectLearn: {
        title: 'Аспекты обучения',
        value: 'aspectLearn',
        list: [],
    },
    yearLearn: {
        title: 'Возраст обучения',
        value: 'yearLearn',
        list: [],
    },
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setLessonSpeak: (state, action) => {
            addSelectItems(state.lessonSpeak.list, action.payload);
        },
        selectLessonSpeak: (state, action) => {
            state.lessonSpeak.list = updateListSelection(
                state.lessonSpeak.list,
                action.payload
            );
        },
        setLessonTime: (state, action) => {
            addSelectItems(state.lessonTime.list, action.payload);
        },
        selectLessonTime: (state, action) => {
            state.lessonTime.list = updateListSelection(
                state.lessonTime.list,
                action.payload
            );
        },
        setLessonCountry: (state, action) => {
            addSelectItems(state.lessonCountry.list, action.payload);
        },
        selectLessonCountry: (state, action) => {
            state.lessonCountry.list = updateListSelection(
                state.lessonCountry.list,
                action.payload
            );
        },
        setLangSpeak: (state, action) => {
            addSelectItems(state.langSpeak.list, action.payload);
        },
        selectLangSpeak: (state, action) => {
            state.langSpeak.list = updateListSelection(
                state.langSpeak.list,
                action.payload
            );
        },
        setSex: (state, action) => {
            addSelectItems(state.sex.list, action.payload);
        },
        selectSex: (state, action) => {
            state.sex.list = updateListSelection(
                state.sex.list,
                action.payload
            );
        },
        setPreparingTest: (state, action) => {
            addSelectItems(state.preparingTest.list, action.payload);
        },
        selectPreparingTest: (state, action) => {
            state.preparingTest.list = updateListSelection(
                state.preparingTest.list,
                action.payload
            );
        },
        setAspectLearn: (state, action) => {
            addSelectItems(state.aspectLearn.list, action.payload);
        },
        selectAspectLearn: (state, action) => {
            state.aspectLearn.list = updateListSelection(
                state.aspectLearn.list,
                action.payload
            );
        },
        setYearLearn: (state, action) => {
            addSelectItems(state.yearLearn.list, action.payload);
        },
        selectYearLearn: (state, action) => {
            state.yearLearn.list = updateListSelection(
                state.yearLearn.list,
                action.payload
            );
        },
        clearFilter: (state, action) => {
            for (let item in state) {
                let obj = { ...state[item] };
                obj.list.forEach((el) => {
                    el.selected = false;
                });

                state[item] = obj;
            }
        },
    },
});

export const {
    selectLessonSpeak,
    selectLessonTime,
    selectLessonCountry,
    selectLangSpeak,
    selectSex,
    selectPreparingTest,
    selectAspectLearn,
    selectYearLearn,
    setLessonSpeak,
    setLessonTime,
    setLessonCountry,
    setLangSpeak,
    setSex,
    setPreparingTest,
    setAspectLearn,
    setYearLearn,
    clearFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
