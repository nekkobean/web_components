/// <reference path="../src/declaration.d.ts" />
import type { Preview } from '@storybook/nextjs-vite'
// .storybook/preview.js
import {withThemeByDataAttribute} from '@storybook/addon-themes';
import '../src/tailwind.css'; 

 
export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  decorators,
};

export default preview;