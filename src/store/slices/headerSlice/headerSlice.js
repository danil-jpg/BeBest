import { createSlice } from '@reduxjs/toolkit';
import logo from '../../../assets/images/header/logo.svg';
import ua from '../../../assets/icons/ua.svg';
import eng from '../../../assets/icons/eng.svg';
import spain from '../../../assets/icons/spain.svg';
import { v1 } from 'uuid';

const initialState = {
    logo,
    list: [
        {
            id: v1(),
            title: 'Курсы',
            to: '',
        },
        {
            id: v1(),
            title: 'Уроки',
            to: '',
        },
        {
            id: v1(),
            title: 'О проекте',
            to: '',
        },
        {
            id: v1(),
            title: 'Преподаватели',
            to: '',
        },
        {
            id: v1(),
            title: 'Компании',
            to: '',
        },
        {
            id: v1(),
            title: 'Статьи',
            to: '',
        },
        {
            id: v1(),
            title: 'Сообщество',
            to: '',
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
            state.langList.forEach(el => {
                if (el.id === action.payload) {
                    el.selected = true;
                } else {
                    el.selected = false;
                }
            })
        },
    },
});

export const { setLang } = headerSlice.actions;
export default headerSlice.reducer;
