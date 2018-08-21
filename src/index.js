import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import { Provider } from 'react-redux';
import store from './App/store';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  window.root
);
