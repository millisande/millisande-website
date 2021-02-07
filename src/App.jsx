import React from 'react';
import { Route, Switch } from 'react-router-dom';
import pages from './pages/pages';
import GlobalStyles from './GlobalStyles';
import { HeaderBar } from './components';

const App = () => (
  <div>
    <GlobalStyles />
    <HeaderBar />
    <Switch>
      <Route exact path='/' component={pages.Home} />
    </Switch>
  </div>
);

export default App;
