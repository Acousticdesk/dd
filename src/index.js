import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  window.root
);
