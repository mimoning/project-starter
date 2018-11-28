import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppReducers from './reducers';

import App from './App';
import './common.scss';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(AppReducers);

Object.defineProperty(window, 'store', { value: store });

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
