import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../utils';

export const SettingsContext = createContext({
  toggleTheme: () => {
    console.error(
      'You are attempting to toggle theme in a component which is not wrapped in the settings context provider',
    );
  },
  isDark: false,
});

SettingsContext.displayName = 'SettingsContext';

export const useSettingsContext = () => useContext(SettingsContext);

export const SettingsContextProvider = ({ children }) => {
  const [useDark, setUseDark] = useState(false);
  const toggleTheme = () => setUseDark(!useDark);
  return (
    <>
      {/* eslint-disable-next-line */}
      <SettingsContext.Provider value={{ toggleTheme, useDark }}>
        <ThemeProvider theme={useDark ? dark : light}>{children}</ThemeProvider>
      </SettingsContext.Provider>
    </>
  );
};
