import InputFormContainer from './InputFormContainer';

export default {
    title: 'UI/Input/InputContainer',
    component: InputFormContainer,
};

export const Default = {
    args: { title: 'text', type: '', ph: 'some', style: {}, classname: '' },
};

export const Error = {
    args: {
        title: 'text',
        type: 'password',
        ph: 'some',
        style: {},
        classname: '',
        errorMessage: 'xxx',
    },
};
