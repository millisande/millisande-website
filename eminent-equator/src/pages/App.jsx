import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { SettingsContextProvider } from '../context/SettingsContext';
import { Main } from '.';

const App = () => (
  <SettingsContextProvider client:only="react">
    <GlobalStyles client:only="react" />
    <Main client:only="react" />
  </SettingsContextProvider>
);

export default App;
