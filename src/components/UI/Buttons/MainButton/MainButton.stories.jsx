import MainButton from './MainButton';

export default {
    title: 'UI/Buttons/MainButton',
    component: MainButton,
    tags: ['autodocs'],
    argTypes: {
        type: {
            description: 'Тип кнопки',
            defaultValue: 'red',
            options: ['white', 'red'],
            control: { type: 'radio' },
        },
        size: {
            description: 'Размер кнопки',
            default: 'middle',
            options: ['small', 'middle'],
            control: { type: 'radio' },
        },
        children: {
            type:'string',
            name: 'label',
            defaultValue: 'Click me'
        },
        to: {
            description: 'Путь перехода при клике',
            defaultValue: ' ',
        },
        width: {
            description: 'Ширина кнопки',
            defaultValue: 'full',
            options: ['full', 'content'],
            control: {type:'radio'}
            
        },
        style: {
            description: 'Обьект стилей css',
        },
        onClick: {
            description: 'callback',
        }
    },
};

const Template = (arg) => <MainButton {...arg}></MainButton>;

export const Default = Template.bind();
Default.args = {
    children: 'Click me',
};
export const Small = Template.bind();
Small.args = {
    children: 'Click me',
    size: 'small'
};
export const Transparent = Template.bind();
Transparent.args = {
    children: 'Click me',
    type: 'white'
};
