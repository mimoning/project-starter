import * as React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

// pages
import Index from './view/pages/index';
import Settings from './view/pages/settings';
import Check from './view/pages/check';

import { INDEX, CHECK, SETTINGS } from './view/constant';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' name={INDEX} component={Index} />
          <Route path='/check' name={CHECK} component={Check} />
          <Route path='/settings' name={SETTINGS} component={Settings}/>
          <Route path="*">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
