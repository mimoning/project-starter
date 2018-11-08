import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Index from './index';

describe('<Index />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Index />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
