import RatingStars from './RatingStars';

export default {
    title: 'common/RatingStars',
    component: RatingStars,
    tags: ['autodocs'],
    argTypes: {
        amountStars: {
            description: 'Amount star rating',
            control: { type: 'number' },
        },
        mb: {
            description: 'margin-bottom in px',
			defaultValue: 0,
            control: { type: 'number' },
        }
    },
};

const Template = (arg) => <RatingStars {...arg} />;
export const Default = Template.bind();
Default.args = {
    amountStars: 4,
};

