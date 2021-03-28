import React from 'react';
import { ThemeProvider } from 'styled-components';
import { light } from '../src/utils';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [(Story) => (<ThemeProvider theme={light}><Story /></ThemeProvider>)]