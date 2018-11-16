import * as React from 'react';
import { shallow } from 'enzyme';
import { createHashHistory } from 'history';
import Index from '.';

describe('<Index />', () => {
  it('renders without crashing', () => {
    shallow(<Index />);
  });

  // it('switch to other page', () => {
  //   window.electron = electron
  //   const history = createHashHistory()
  //   const index = new ReactWrapper(<Index history={history} />);
  //   const startBtn = index.find('button.start-btn');
  //   const settingsBtn = index.find('div.settings-btn');
  //   startBtn.simulate('click');
  //   expect(history.location.pathname).toEqual('/check');
  //   settingsBtn.simulate('click');
  //   expect(history.location.pathname).toEqual('/settings');
  // })
})
