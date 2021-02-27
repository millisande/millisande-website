/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const renderApp = Root => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    ReactDOM.render(<Root />, rootElement);
  } else {
    console.log(
      'Check your public index.js file. Looks like you are missing the indentifier',
    );
  }
};

renderApp(App);
