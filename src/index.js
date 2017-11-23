import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { configureStore } from './store';
import { Root } from './features/root';
import 'semantic-ui-css/semantic.min.css';

const store = configureStore();

ReactDOM.render(
  <Root store={store} />, 
  document.getElementById('root')
);
