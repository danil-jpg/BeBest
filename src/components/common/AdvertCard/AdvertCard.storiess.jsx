import ArticleCard from './ArticleCard';

export default {
    title: 'common/ArticleCard',
    component: ArticleCard,
    tags: ['autodocs'],
    argTypes: {
        image: {
            description: 'URL Image',
            defaultValue: 'red',
            control: { type: 'text' },
        },

        style: {
            description: 'Object styles css',
        },
        title: {
            description: 'Card title',
            control: { type: 'text' },

        },
        text: {
            description: 'Card text',
            control: { type: 'text' },

        },
        maxWidth: {
            description: 'Max width card',
            control: {type: 'text'}
        },
    },
}
const Template = (arg) => <ArticleCard {...arg} />;

export const Default = Template.bind();
Default.args = {
    image: '/uploads/thumbnail_article_2_a1c2b2f2a9.jpg',
    maxWidth: '350px',
    title: 'Example title',
    text: 'LoEu laborum deserunt et sint. Exercitation dolore eiusmod ut amet id velit ea duis cupidatat id sit. Nostrud labore ea sint ex non enim eu.'
};