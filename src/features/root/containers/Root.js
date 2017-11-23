import React from 'react';
import { App } from '../../app';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

export default Root;