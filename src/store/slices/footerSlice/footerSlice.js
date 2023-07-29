import { createSlice } from '@reduxjs/toolkit';
import logo from '../../../assets/images/header/logo.svg';
import { v1 } from 'uuid';

const initialState = {
    logo,
    titleInfo: 'О портале',
    titleCategories: 'Категории обучения',
    copyright: 'Unsounded ©  2021',
    socialList: [
        {
            id: v1(),
            value: 'facebook',
        },
        {
            id: v1(),
            value: 'instagram',
        },
        {
            id: v1(),
            value: 'twitter',
        },
    ],
    messengerList: [
        {
            id: v1(),
            value: 'whatsup',
        },
        {
            id: v1(),
            value: 'telegram',
        },
        {
            id: v1(),
            value: 'viber',
        },
    ],
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
            title: 'Немецкий язык',
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

export const footerSlice = createSlice({
    name: 'footer',
    initialState,
    reducers: {},
});

// export const { setLang } = headerSlice.actions;
export default footerSlice.reducer;
