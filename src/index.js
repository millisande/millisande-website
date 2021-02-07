/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';

const history = createBrowserHistory();

const renderApp = (Root) => {
  ReactDOM.render(
    <Router history={history}>
      <Root />
    </Router>,
    document.getElementById('root'),
  );
};

renderApp(App);
