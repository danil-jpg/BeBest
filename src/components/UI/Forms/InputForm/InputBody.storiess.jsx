import InputForm from './InputForm';

export default {
    title: 'UI/Input/Input',
    component: InputForm,
};

export const Default = {
    args: { type: '', ph: 'some', style: {}, classname: '' },
};

export const Password = {
    args: { type: 'password', ph: 'some', style: {}, classname: '' },
};
