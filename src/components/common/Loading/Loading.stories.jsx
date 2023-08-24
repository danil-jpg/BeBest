import Loading from './Loading';

export default {
    title: 'common/Loading',
    component: Loading,
    tags: ['autodocs'],
    argTypes: {

    },
};

const Template = (arg) => <Loading {...arg} />;
export const Default = Template.bind();
Default.args = {
};

