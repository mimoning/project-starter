import * as React from 'react';
import { shallow } from 'enzyme';
import { createHashHistory } from 'history';
import Index from './index';

describe('<Index />', () => {
  it('renders without crashing', () => {
    shallow(<Index />);
  });

  it('switch to other page', () => {
    const history = createHashHistory()
    const index = shallow(<Index history={history} />);
    expect(index.find('.start-btn').length).toBe(1);
    const btn = index.find('button.start-btn');
    btn.simulate('click');
    expect(history.location.pathname).toEqual('/test');
  })
})
