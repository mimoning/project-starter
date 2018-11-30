import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { shallow, ShallowWrapper } from 'enzyme';
import { createHashHistory } from 'history';
import Index from '.';
import AppReducers from '../../../reducers';

import { electron, fs } from '../../../../test/mocks';

describe('<Index />', () => {
  window.electron = electron;
  window.fs = fs;
  const store = createStore(AppReducers);
  const history = createHashHistory();

  let indexPage: ShallowWrapper;

  beforeEach(() => {
    indexPage = shallow(
      <Provider store={store}>
        <Index history={history} />
      </Provider>
    )
  })

  test('renders without crashing', () => {});

  test('switch to settings page', () => {
    setTimeout(() => {
      const settingsBtn = indexPage.find('div.settings-btn');
      settingsBtn.simulate('click');
      expect(history.location.pathname).toEqual('/settings');
    })
  })

  test('settings complete', () => {
    setTimeout(() => {
      const startBtn = indexPage.find('button.start-btn');
      startBtn.simulate('click');
      setTimeout(() => {
        expect(history.location.pathname).toEqual('/check');
      })
    })
  })

  test('settings error or empty', () => {
    setTimeout(() => {
      const startBtn = indexPage.find('button.start-btn');
      startBtn.simulate('click');
      expect(history.location.pathname).toEqual('/settings');
    })
  })
})
