import { v1 } from 'uuid';
import React from 'react';
import { useSelector } from 'react-redux';
import SelectFormContainer from './SelectFormContainer';
import { selectSb } from '../../../../store/slices/filterSlice/filterSlice';

export default {
    title: 'UI/Forms/Select',
    component: SelectFormContainer,
    tags: ['autodocs'],
    argTypes: {
        title: {
            type: 'string',
            description: 'Заголовок над селектом',
        },
        list: {
            description: `Массив обьектов select: \n
            { 
                id: number | string, 
                title: string, 
                selected: boolean 
            }`
        },
        style: {
            description: 'Обьект стилей',
        },
        setItem: {
            description: 'callback',

        }
    }
}

export const Default = () => {
    const list = useSelector(state => state.filterSlice.sb);

    return <SelectFormContainer list={list} setItem={selectSb} />

}
Default.args = {
    title: ''
}

export const WithStyle = () => {
    const list = useSelector(state => state.filterSlice.sb);

    return <SelectFormContainer style={{maxWidth: '150px'}} list={list} setItem={selectSb} />

}

export const WithTitle = () => {
    const list = useSelector(state => state.filterSlice.sb);

    return <SelectFormContainer title="Select" style={{maxWidth: '150px'}} list={list} setItem={selectSb} />

}