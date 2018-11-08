import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  MemoryRouter as Router,
  Route,
} from 'react-router';
import Index from './view/pages/index';
import './common.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Route path='/' component={Index} />
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
