import { createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';
import {
    selectItem,
    updateList,
    updateListSelection,
} from '../../../utils/updateListSelection';

const initialState = {
    lessonSpeak: {
        title: 'Язык преподавания',
        value: 'lessonSpeak',
        list: [
            {
                id: v1(),
                title: 'русский',
                value: 'ru',
                selected: true,
            },
            {
                id: v1(),
                title: 'украинский',
                value: 'ua',
                selected: false,
            },
            {
                id: v1(),
                title: 'английский',
                value: 'en',
                selected: false,
            },
        ],
    },
    lessonTime: {
        title: 'Время преподавания',
        value: 'lessonTime',
        list: [
            {
                id: v1(),
                title: '10:00-14:00',
                value: 'morning',
                selected: true,
            },
            {
                id: v1(),
                title: '15:00-19:00',
                value: 'evening',
                selected: false,
            },
        ],
    },
    lessonCountry: {
        title: 'Страна преподавателя',
        value: 'lessonCountry',
        list: [
            {
                id: v1(),
                title: 'Украина',
                value: 'ukraine',
                selected: true,
            },
            {
                id: v1(),
                title: 'Англия',
                value: 'england',
                selected: false,
            },
        ],
    },
    langSpeak: {
        title: 'Язык преподавания',
        value: 'langSpeak',
        list: [
            {
                id: v1(),
                title: 'русский',
                value: 'ru',
                selected: true,
            },
            {
                id: v1(),
                title: 'украинский',
                value: 'ua',
                selected: false,
            },
            {
                id: v1(),
                title: 'английский',
                value: 'en',
                selected: false,
            },
        ],
    },
    sex: {
        title: 'Пол',
        value: 'lessonSpeak',
        list: [
            {
                id: v1(),
                title: 'Оба пола',
                value: 'double',
                selected: true,
            },
            {
                id: v1(),
                title: 'Мужской',
                value: 'men',
                selected: false,
            },
            {
                id: v1(),
                title: 'Женский',
                value: 'women',
                selected: false,
            },
        ],
    },
    preparingTest: {
        title: 'Подготовка к тестам',
        value: 'lessonTime',
        list: [
            {
                id: v1(),
                title: '10:00-14:00',
                value: 'morning',
                selected: true,
            },
            {
                id: v1(),
                title: '15:00-19:00',
                value: 'evening',
                selected: false,
            },
        ],
    },
    aspectLearn: {
        title: 'Аспекты обучения',
        value: 'lessonCountry',
        list: [
            {
                id: v1(),
                title: 'Украина',
                value: 'ukraine',
                selected: true,
            },
            {
                id: v1(),
                title: 'Англия',
                value: 'england',
                selected: false,
            },
        ],
    },
    oldLearn: {
        title: 'Возраст обучения',
        value: 'langSpeak',
        list: [
            {
                id: v1(),
                title: '10-14',
                value: 'small',
                selected: true,
            },
            {
                id: v1(),
                title: '15-19',
                value: 'middle',
                selected: false,
            },
            {
                id: v1(),
                title: '20+',
                value: 'big',
                selected: false,
            },
        ],
    },
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setLessonSpeak: (state, action) => {
            state.lessonSpeak.list = updateListSelection(
                state.lessonSpeak.list,
                action.payload
            );
        },
        setLessonTime: (state, action) => {
            state.lessonTime.list = updateListSelection(
                state.lessonTime.list,
                action.payload
            );
        },
        setLessonCountry: (state, action) => {
            state.lessonCountry.list = updateListSelection(
                state.lessonCountry.list,
                action.payload
            );
        },
        setLangSpeak: (state, action) => {
            state.langSpeak.list = updateListSelection(
                state.langSpeak.list,
                action.payload
            );
        },
        setSex: (state, action) => {
            state.sex.list = updateListSelection(
                state.sex.list,
                action.payload
            );
        },
        setPreparingTest: (state, action) => {
            state.preparingTest.list = updateListSelection(
                state.preparingTest.list,
                action.payload
            );
        },
        setAspectLearn: (state, action) => {
            state.aspectLearn.list = updateListSelection(
                state.aspectLearn.list,
                action.payload
            );
        },
        setOldLearn: (state, action) => {
            state.oldLearn.list = updateListSelection(
                state.oldLearn.list,
                action.payload
            );
        },
    },
});

export const {
    setLessonSpeak,
    setLessonTime,
    setLessonCountry,
    setLangSpeak,
    setSex,
    setPreparingTest,
    setAspectLearn,
    setOldLearn,
} = filterSlice.actions;
export default filterSlice.reducer;
