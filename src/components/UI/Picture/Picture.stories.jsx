import Picture from './Picture';
import image from '../../../assets/images/catalog/article_1.jpg';
import imageWebp from '../../../assets/images/catalog/article_1.webp';

export default {
  title: 'UI/Picture',
  component: Picture,
  tags: ['autodocs'],
  argTypes: {
    img: {
      description: 'URL Image',
      defaultValue: 'red',
      control: { type: 'text' },
    },
    webp: {
      description: 'URL ImageWebp',
      defaultValue: 'red',
      control: { type: 'text' },
    },
    alt: {
      description: 'Attribute image alt',
      defaultValue: 'image',
      control: { type: 'text' },
    },
    style: {
      description: 'Object styles css',
    },
    lazy: {
      description: 'Attribute loading',
      defaultValue: 'auto',
      options: ['lazy', 'auto'],
      control: { type: 'radio' },

    },
    width: {
      description: 'Attribute image width',
      defaultValue: '',
      control: { type: 'text' }
    },
    height: {
      description: 'Attribute image height',
      defaultValue: '',
      control: { type: 'text' }
    },
    className: {
      description: 'CSS/SCSS class',
      defaultValue: '',
      control: { type: 'text' }
    },
  },
}

const Template = (arg) => <Picture {...arg}></Picture>;

export const Default = Template.bind();
Default.args = {
  img: image,
  webp: imageWebp,
};