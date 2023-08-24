import TextareaForm from './TextareaForm.jsx';

export default {
    title: 'UI/Forms/TextareaForm',
    component: TextareaForm,
    tags: ['autodocs'],
    argTypes: {
        title: {
            description: 'Текст над формой',
            defaultValue: '',
            control: { type: 'text' },
        },
        ph: {
            description: 'Placeholder',
            default: '',
            control: {type: 'text'}
        },
        name: {
            description: 'Textarea name',
            default: '',
            control: {type: 'text'}
		},
		maxWidth: {
            description: 'Установить максимальную ширину кнопки',
            defaultValue: '100%',
            options: ['100%', '50%'],
            control: {type: 'text'}
        },
        mb: {
            description: 'margin-bottom',
            defaultValue: '0px'
		},
		value: {
            description: 'textarea value',
            default: '',
            control: {type: 'text'}
		},
        setValue: {
            description: 'Setter value state (example: useSate)',
            defaultValue: '0px'
        }
    },
};

const Template = (arg) => <TextareaForm {...arg}/>;

export const Default = Template.bind();
Default.args = {
	title: 'Example',
	ph: 'placeholder...'
};