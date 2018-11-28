import * as React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { History } from 'history';

import AppReducers from '../../../reducers';
import SettingsPage from './index';

import { electron, fs } from '../../../../test/mocks';

describe('<Settings />', () => {
  window.electron = electron;
  window.fs = fs;
  const store = createStore(AppReducers);
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <SettingsPage history={{} as History} />
      </Provider>
    )
  })
})
