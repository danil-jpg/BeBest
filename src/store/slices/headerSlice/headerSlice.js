import { createSlice } from '@reduxjs/toolkit';
import logo from '../../../assets/images/header/logo.svg';
import ua from '../../../assets/icons/ua.svg';
import eng from '../../../assets/icons/eng.svg';
import spain from '../../../assets/icons/spain.svg';
import { v1 } from 'uuid';
import { updateListSelection } from '../../../utils/updateListSelection';

const initialState = {
    logo,
    list: [
        {
            id: v1(),
            title: 'Уроки',
            to: '/onlineLesson',
        },
        {
            id: v1(),
            title: 'О проекте',
            to: '/lol',
        },
        {
            id: v1(),
            title: 'Преподаватели',
            to: '/catalog',
        },
        {
            id: v1(),
            title: 'Компании',
            to: '/teacher',
        },
        {
            id: v1(),
            title: 'Статьи',
            to: '/article',
        },
        {
            id: v1(),
            title: 'Сообщество',
            to: '/forum',
        },
    ],
    langList: [
        {
            id: v1(),
            title: 'ua',
            icon: ua,
            selected: true,
        },
        {
            id: v1(),
            title: 'en',
            icon: eng,
            selected: false,
        },
        {
            id: v1(),
            title: 'es',
            icon: spain,
            selected: false,
        },
    ],
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setLang: (state, action) => {
            state.langList = updateListSelection(
                state.langList,
                action.payload
            );
        },
    },
});

export const { setLang } = headerSlice.actions;
export default headerSlice.reducer;
