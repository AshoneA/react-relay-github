import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router
  history={browserHistory}
  routes={routes}
/>,
  document.getElementById('root'));
registerServiceWorker();
