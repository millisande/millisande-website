import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
// import { Route, Switch } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { Main } from './pages';
import { light, dark } from './utils';

const App = () => {
  const [useDark, setUseDark] = useState(false);
  return (
    <ThemeProvider theme={useDark ? dark : light}>
      <div>
        <GlobalStyles />
        <Main toggleTheme={() => setUseDark(!useDark)} />
      </div>
    </ThemeProvider>
  );
};

export default App;
