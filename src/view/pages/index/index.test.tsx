import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { createHashHistory } from 'history';
import { Index } from '.';

import { SettingsData } from '../../../types';

describe('<Index />', () => {
  const history = createHashHistory();

  let indexPage: ShallowWrapper;

  const initProps = {
    history,
    settings: {} as SettingsData,
    settingsStatus: false,
    actions: {
      setSettings: () => {},
    }
  }

  const NO_LOADING_PROPS = { settingsStatus: true };
  const SETTINGS_COMPLETE_PROPS = {
    settingsStatus: true,
    settings: {
      projectPath: '/a/a/a',
      ipScopes: [{ start: '1.1.1.1', end: '2.2.2.2' }],
    },
  };
  const SETTINGS_INCOMPLETE_PROPS = {
    settingsStatus: true,
    settings: {},
  };

  beforeEach(() => {
    indexPage = shallow(
      <Index {...initProps} />
    );
  })

  test('renders without crashing', () => {});

  test('switch to settings page', () => {
    indexPage.setProps(NO_LOADING_PROPS);
    const settingsBtn = indexPage.find('div.settings-btn');
    settingsBtn.simulate('click');
    expect(history.location.pathname).toEqual('/settings');
  })

  test('settings complete', () => {
    indexPage.setProps(SETTINGS_COMPLETE_PROPS);
    const startBtn = indexPage.find('button.start-btn');
    startBtn.simulate('click');
    expect(history.location.pathname).toEqual('/check');
  })

  test('settings error or empty', () => {
    indexPage.setProps(SETTINGS_INCOMPLETE_PROPS);
    const startBtn = indexPage.find('button.start-btn');
    startBtn.simulate('click');
    expect(history.location.pathname).toEqual('/settings');
  })
})
