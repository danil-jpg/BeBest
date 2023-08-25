import { createSlice } from '@reduxjs/toolkit';
import { updateListSelection } from '../../../utils/updateListSelection';
import { addSelectItems } from '../../../utils/addSelectItem';
import { v1 } from 'uuid';

const initialState = {
    lessonLangSpeak: {
        title: 'Языки общения',
        value: 'lang',
        list: [
            {
                id: v1(),
                title: 'русский',
                selected: true,
            },
            {
                id: v1(),
                title: 'украинский',
                selected: false,
            },
            {
                id: v1(),
                title: 'английский',
                selected: false,
            },
        ],
    },
    langSpeak: {
        title: 'Языки обучения',
        value: 'CommunicationLang',
        list: [
            {
                id: v1(),
                title: 'русский',
                selected: true,
            },
            {
                id: v1(),
                title: 'украинский',
                selected: false,
            },
            {
                id: v1(),
                title: 'английский',
                selected: false,
            },
        ],
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
    sb: {
        title: 'Возраст обучения',
        value: 'yearLearn',
        list: [
            { id: v1(), title: 'first', selected: false },
            { id: v1(), title: 'second', selected: false }
        ],
    },
};

export const profileSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        selectLessonLangSpeak: (state, action) => {
            state.lessonSpeak.list = updateListSelection(
                state.lessonSpeak.list,
                action.payload
            );
        }
    }
});

export const { selectLessonLangSpeak } = profileSlice.actions;
export default profileSlice.reducer;
