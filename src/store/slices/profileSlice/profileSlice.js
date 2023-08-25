import { createSlice } from '@reduxjs/toolkit';
import { addListSelectionProfile, updateListSelection, updateListSelectionProfile } from '../../../utils/updateListSelection';
import { addSelectItems } from '../../../utils/addSelectItem';
import { v1, v4 } from 'uuid';

const initialState = {
    lessonLangSpeak: {
        title: 'Языки общения',
        value: 'lang',
        lists: [
            [
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
        ],
    },
    langSpeak: {
        title: 'Языки обучения',
        value: 'CommunicationLang',
        lists: [
            [
                {
                    id: v1(),
                    title: 'испанский',
                    selected: true,
                },
                {
                    id: v1(),
                    title: 'английский',
                    selected: false,
                },
                {
                    id: v1(),
                    title: 'немецкий',
                    selected: false,
                },
            ],
        ],
    },
    ageStudents: {
        title: 'Возраст учеников',
        value: 'time',
        lists: [
            [
                {
                    id: v1(),
                    title: '10-15 лет',
                    selected: true,
                },
                {
                    id: v1(),
                    title: '16+',
                    selected: false,
                },
            ],
        ],
    },
    lessonLearn: {
        title: 'Предметы обучения',
        value: 'country',
        lists: [
            [
                {
                    id: v1(),
                    title: 'математка',
                    selected: true,
                },
                {
                    id: v1(),
                    title: 'география',
                    selected: false,
                },
                {
                    id: v1(),
                    title: 'лол',
                    selected: false,
                },
            ],
        ],
    },
    levelLearn: {
        title: 'Уровень обучения',
        value: 'sex',
        lists: [
            [
                {
                    id: v1(),
                    title: 'начинающий',
                    selected: true,
                },
                {
                    id: v1(),
                    title: 'средний',
                    selected: false,
                },
                {
                    id: v1(),
                    title: 'высокий',
                    selected: false,
                },
            ],
        ],
    },
    education: {
        title: 'Образования',
        value: 'preparingTest',
        lists: [
            [
                {
                    id: v1(),
                    title: 'школа',
                    selected: true,
                },
                {
                    id: v1(),
                    title: 'универ',
                    selected: false,
                },
            ],
        ],
    },
    accents: {
        title: 'Разговорные акценты',
        value: 'aspectLearn',
        lists: [
            [
                {
                    id: v1(),
                    title: 'обычный',
                    selected: true,
                },
                {
                    id: v1(),
                    title: 'не обычный',
                    selected: false,
                },
            ],
        ],
    },
    profit: {
        title: 'Опыт работы',
        value: 'yearLearn',
        lists: [
            [
                {
                    id: v1(),
                    title: 'до 5 лет',
                    selected: true,
                },
                {
                    id: v1(),
                    title: '5-10 лет',
                    selected: false,
                },
                {
                    id: v1(),
                    title: 'более 10 лет',
                    selected: false,
                },
            ],
        ],
    },
};

export const profileSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addLessonLangSpeak: (state) => {
            addListSelectionProfile(state.lessonLangSpeak.lists)
        },
        selectLessonLangSpeak: (state, action) => {
            updateListSelectionProfile(state.lessonLangSpeak.lists, action.payload);
        },
        addLangSpeak: (state) => {
            addListSelectionProfile(state.langSpeak.lists)
        },
        selectLangSpeak: (state, action) => {
            updateListSelectionProfile(state.langSpeak.lists, action.payload);
        },
        addAgeStudents: (state) => {
            addListSelectionProfile(state.ageStudents.lists)
        },
        selectAgeStudents: (state, action) => {
            updateListSelectionProfile(state.ageStudents.lists, action.payload);
        },
        addLessonLearn: (state) => {
            addListSelectionProfile(state.lessonLearn.lists)
        },
        selectLessonLearn: (state, action) => {
            updateListSelectionProfile(state.lessonLearn.lists, action.payload);
        },
        addLevelLearn: (state) => {
            addListSelectionProfile(state.levelLearn.lists)
        },
        selectLevelLearn: (state, action) => {
            updateListSelectionProfile(state.levelLearn.lists, action.payload);
        },
        addEducation: (state) => {
            addListSelectionProfile(state.education.lists)
        },
        selectEducation: (state, action) => {
            updateListSelectionProfile(state.education.lists, action.payload);
        },
        addAccents: (state) => {
            addListSelectionProfile(state.accents.lists)
        },
        selectAccents: (state, action) => {
            updateListSelectionProfile(state.accents.lists, action.payload);
        },
        addProfit: (state) => {
            addListSelectionProfile(state.profit.lists)
        },
        selectProfit: (state, action) => {
            updateListSelectionProfile(state.profit.lists, action.payload);
        },

    }
});

export const {
    addLessonLangSpeak,
    addLangSpeak,
    addAgeStudents,
    addLessonLearn,
    addLevelLearn,
    addEducation,
    addAccents,
    addProfit,
    selectLessonLangSpeak,
    selectLangSpeak,
    selectAgeStudents,
    selectLessonLearn,
    selectLevelLearn,
    selectEducation,
    selectAccents,
    selectProfit,
} = profileSlice.actions;
export default profileSlice.reducer;
