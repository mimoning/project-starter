import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { createHashHistory } from 'history';
import Index from '.';

import { electron, fs } from '../../../../test/mocks';

describe('<Index />', () => {
  window.electron = electron;
  window.fs = fs;
  it('renders without crashing', () => {
    shallow(<Index />);
  });

  it('switch to settings page', () => {
    const history = createHashHistory()
    const index = mount(<Index history={history} />);
    const settingsBtn = index.find('div.settings-btn');
    settingsBtn.simulate('click');
    expect(history.location.pathname).toEqual('/settings');
  })

  it('settings complete', () => {
    const history = createHashHistory()
    const index = mount(<Index history={history} />);
    const startBtn = index.find('button.start-btn');
    startBtn.simulate('click');
    setTimeout(() => {
      expect(history.location.pathname).toEqual('/check');
    })
  })

  it('settings empty', () => {
    const history = createHashHistory()
    const index = mount(<Index history={history} />);
    const startBtn = index.find('button.start-btn');
    startBtn.simulate('click');
    expect(history.location.pathname).toEqual('/settings');
  })

  it('settings error', () => {
    const history = createHashHistory()
    const index = mount(<Index history={history} />);
    const startBtn = index.find('button.start-btn');
    startBtn.simulate('click');
    expect(history.location.pathname).toEqual('/settings');
  })
  
})
