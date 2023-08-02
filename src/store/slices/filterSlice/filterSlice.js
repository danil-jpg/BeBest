import { createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';
import { selectItem } from '../../../utils/selectItem';

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
                value: '',
                selected: true,
            },
            {
                id: v1(),
                title: '15:00-19:00',
                value: '',
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
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setLessonSpeak: (state, action) => {
            state.lessonSpeak.list.forEach((el) => {
                if (el.id === action.payload) {
                    el.selected = true;
                } else {
                    el.selected = false;
                }
            });
        },
        setLessonTime: (state, action) => {
            state.lessonTime.list.forEach((el) => {
                if (el.id === action.payload) {
                    el.selected = true;
                } else {
                    el.selected = false;
                }
            });
        },
        setLessonCountry: (state, action) => {
            state.lessonCountry.list.forEach((el) => {
                if (el.id === action.payload) {
                    el.selected = true;
                } else {
                    el.selected = false;
                }
            });
        },
        setLangSpeak: (state, action) => {
            state.langSpeak.list.forEach((el) => {
                if (el.id === action.payload) {
                    el.selected = true;
                } else {
                    el.selected = false;
                }
            });
        },
    },
});

export const { setLessonSpeak, setLessonTime, setLessonCountry, setLangSpeak } =
    filterSlice.actions;
export default filterSlice.reducer;
