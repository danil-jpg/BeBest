import Footer from './Footer';

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'common/Footer',
    component: Footer,
    tags: ['autodocs'],
    argTypes: {

    },
};

const Template = (arg) => <Footer {...arg} />;
export const Default = Template.bind();
Default.args = {
};

