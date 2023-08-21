import Header from './Header';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'common/Header',
    component: Header,
    tags: ['autodocs'],
    argTypes: {
        home: {
            description: 'Тип header',
            defaultValue: false,
            options: [false, true],
            control: { type: 'radio' },
        },
    },
};

const Template = (arg) => <Header {...arg} />;
export const Default = Template.bind();
Default.args = {
    home: false
};

export const Home = Template.bind();
Home.args = {
    home: true
};
