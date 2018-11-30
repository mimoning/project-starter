import * as React from 'react';
import { shallow } from 'enzyme';
import Loading from '.';

describe('<Loading />', () => {

  test('renders without crashing', () => {
    shallow(<Loading />);
  })
  
  test('normal opening and closing', () => {
    const loading = shallow(<Loading />);
    const empty = <div></div>;
    expect(loading.find('.loading-box').length).toBe(1);
    loading.setProps({ show: false });
    expect(loading.contains(empty)).toBe(true);
  })
})
