import * as React from 'react';
import SettingsPage from './index';
import { shallow } from 'enzyme';

import { electron, fs } from '../../../../test/mocks';

describe('<Settings />', () => {
  window.electron = electron;
  window.fs = fs;
  it('renders without crashing', () => {
    shallow(<SettingsPage />)
  })
})
