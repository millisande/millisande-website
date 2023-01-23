import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { SettingsContextProvider } from './context/SettingsContext';
import { Main } from './pages';

const App = () => (
  <SettingsContextProvider>
    <GlobalStyles />
    <Main />
  </SettingsContextProvider>
);

export default App;
