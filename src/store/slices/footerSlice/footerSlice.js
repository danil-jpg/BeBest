import { createSlice } from '@reduxjs/toolkit';
import logo from '../../../assets/images/header/logo.svg';
import { v1 } from 'uuid';

const initialState = {
    logo,
    categories: [
        {
            id: v1(),
            title: 'Английский язык',
            to: '',
        },
        {
            id: v1(),
            title: 'Испанский язык',
            to: '',
        },
        {
            id: v1(),
            title: 'Курсы HTML',
            to: '',
        },
        {
            id: v1(),
            title: 'Курсы PHP',
            to: '',
        },
        {
            id: v1(),
            title: 'Курсы SMM',
            to: '',
        },
    ],
    infoList: [
        {
            id: v1(),
            title: 'О нас',
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
        {
            id: v1(),
            title: 'Поддержка',
            to: '',
        },
    ],
};

export const headerSlice = createSlice({
    name: 'footer',
    initialState,
    reducers: {},
});

// export const { setLang } = headerSlice.actions;
export default headerSlice.reducer;
