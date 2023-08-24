import Pagination from './Pagination';

export default {
    title: 'common/Pagination',
    component: Pagination,
    tags: ['autodocs'],
    argTypes: {
        itemsPerPage: {
            description: 'Amount item on page',
            control: { type: 'number' },
        },
        totalUsers: {
            description: 'Amount items',
            control: { type: 'number' },
        },
        currentPage: {
            description: 'Current Page',
            control: { type: 'number' },
        },
        mb: {
            description: 'margin-bottom',
            defaultValue: '0px'
        }
    },
};

const Template = (arg) => <Pagination {...arg} />;
export const Default = Template.bind();
Default.args = {
    itemsPerPage: 5,
    totalUsers: 10,
    currentPage: 1
};

