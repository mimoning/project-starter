import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Index from './view/pages/index';
import './common.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={Index} />
      <Route path='/test' name='test' component={() => <div>This is the test page</div>} />
      <Route path="*">
        <Redirect to="/"></Redirect>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
