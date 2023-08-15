/** @type { import('@storybook/react').Preview } */

import React from "react";
import { MemoryRouter } from "react-router";
import "../src/styles/index.scss"


export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <Story />
    </MemoryRouter>
  ),
];

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
