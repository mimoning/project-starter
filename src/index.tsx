import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  MemoryRouter as Router,
  Route,
} from 'react-router';
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Route path='/' component={App} />
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
