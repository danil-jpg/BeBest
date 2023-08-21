/** @type { import('@storybook/react').Preview } */
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { store } from '../src/store/store';
import '../src/styles/index.scss';

export const decorators = [
    (Story) => (
        <Provider store={store}>
            <MemoryRouter initialEntries={['/']}>
                <Story />
            </MemoryRouter>
        </Provider>
    ),
];

const preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
