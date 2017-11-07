import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer);

const Root = (props) => (
  <Provider store={store}> 
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
