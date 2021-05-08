import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import ContextProvider from './context/Context';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Router />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
