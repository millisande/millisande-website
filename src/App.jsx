import React from 'react';
import { ThemeProvider } from 'styled-components';
// import { Route, Switch } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { Main } from './pages';
import { light } from './utils';

const App = () => (
  <ThemeProvider theme={light}>
    <div>
      <GlobalStyles />
      <Main />
    </div>
  </ThemeProvider>
);

export default App;
