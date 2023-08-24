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
        style: {
            description: 'Обьект стилей css',
        },
        onClick: {
            description: 'callback',
        },
        maxWidth: {
            description: 'Установить максимальную ширину кнопки',
            defaultValue: '100%',
            control: {type: 'text'}
        },
        mb: {
            description: 'Установить нижний отступ',
            defaultValue: '0px'
        }
    },
};

const Template = (arg) => <MainButton {...arg}></MainButton>;

export const Default = Template.bind();
Default.args = {
    children: 'Click me',
    maxWidth: '161px',
};
export const Small = Template.bind();
Small.args = {
    children: 'Click me',
    maxWidth: '161px',
    size: 'small'
};
export const Transparent = Template.bind();
Transparent.args = {
    children: 'Click me',
    maxWidth: '161px',
    type: 'white'
};
