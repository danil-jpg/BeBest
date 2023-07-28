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
			to: ''
		},
		{
			id: v1(),
			title: 'Уроки',
			to: ''
		},
		{
			id: v1(),
			title: 'О проекте',
			to: ''
		},
		{
			id: v1(),
			title: 'Преподаватели',
			to: ''
		},
		{
			id: v1(),
			title: 'Компании',
			to: ''
		},
		{
			id: v1(),
			title: 'Статьи',
			to: ''
		},
		{
			id: v1(),
			title: 'Сообщество',
			to: ''
		},
	],
	langList: [
		{
			id: v1(),
			title: 'ua',
			icon: ua,
			value: 'ua'
		},
		{
			id: v1(),
			title: 'eng',
			icon: eng,
			value: 'eng'
		},
		{
			id: v1(),
			title: 'es',
			icon: spain,
			value: 'es'
		},
	]
}

export const headerSlice = createSlice({
	name: 'header',
	initialState,
	reducers: {
		setLang: (state, action) => {
			console.log(state);
		}
	}
})



export const { setLang } = headerSlice.actions;
export default headerSlice.reducer;