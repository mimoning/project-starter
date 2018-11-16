import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Index from './view/pages/index';
import Settings from './view/pages/settings';
import './common.scss';
import registerServiceWorker from './registerServiceWorker';
import { INDEX, CHECK, SETTINGS } from './view/constant';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' name={INDEX} component={Index} />
      <Route path='/check' name={CHECK} component={() => <div>This is the test page</div>} />
      <Route path='/settings' name={SETTINGS} component={Settings}/>
      <Route path="*">
        <Redirect to="/"></Redirect>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
