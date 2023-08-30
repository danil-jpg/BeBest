import { createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';
import { updateListSelection } from '../../../utils/updateListSelection';

const initialState = {
    cards: [
        {
            id: v1(),
            title: 'Реклама профиля на главной странице сайта',
            price: 19840
        },
        {
            id: v1(),
            title: 'Реклама профиля на главной странице сайта',
            price: 10000
        },
        {
            id: v1(),
            title: 'Реклама профиля на главной странице сайта',
            price: 9750
        },
    ],
    period: {
        title: 'Период',
        titleSum: 'Суммарная стоимость:',
        titleBtn: 'Заборнировать урок',
        list: [
            {
                id: v1(),
                title: '1 день',
                selected: true,
                price: 200
            },
            {
                id: v1(),
                title: '3 дня',
                selected: false,
                price: 550
            },
            {
                id: v1(),
                title: '1 неделя',
                selected: false,
                price: 1000
            },
            {
                id: v1(),
                title: '1 месяц',
                selected: false,
                price: 2500
            },
        ]
    },
};

export const serviceSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        selectCard: (state, action) => {
            state.period.list = updateListSelection(
                state.period.list,
                action.payload
            );
        },
    }
});

export const { selectCard } = serviceSlice.actions;
export default serviceSlice.reducer;
