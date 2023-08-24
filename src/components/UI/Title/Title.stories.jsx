import Title from './Title';

export default {
    title: 'UI/Title',
    component: Title,
    tags: ['autodocs'],
    argTypes: {
        align: {
            description: 'Text align',
            defaultValue: 'left',
            options: ['left', 'center', 'right'],
            control: { type: 'radio' },
        },
        style: {
            description: 'Object styles css',
        },
        type: {
            description: 'Attribute loading',
            defaultValue: '',
            options: ['subtitle'],
            control: { type: 'check' },

        },
        children: {
            name: 'label',
            description: 'Title text',
            defaultValue: '',
            control: { type: 'text' }
        },
    },
}

const Template = (arg) => <Title {...arg}></Title>;

export const Default = Template.bind();
Default.args = {
    children: 'Example'
};