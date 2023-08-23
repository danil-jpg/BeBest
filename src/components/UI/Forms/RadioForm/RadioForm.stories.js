import { useState } from 'react';
import RadioForm from './RadioForm';

export default {
    title: 'UI/Forms/RadioForm',
    component: RadioForm,
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
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState('test');

    return (
        <RadioForm title='text' checked={checked} setChecked={setChecked} value={value} />
    )

}
Default.args = {
    title: ''
}

