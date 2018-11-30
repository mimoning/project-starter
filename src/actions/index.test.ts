import * as Actions from './index';

describe('actions', () => {
  test(Actions.SET_SETTINGS, () => {
    const data = {
      projectPath: '/a/a/a',
      ipScopes: [{
        start: '1.1.1.1',
        end: '2.2.2.2',
      }]
    }

    expect(Actions.setSettings()).toEqual({ type: '', data: null });
    expect(Actions.setSettings(data)).toEqual({ type: Actions.SET_SETTINGS, data });
  })

  test(Actions.SETTINGS_DATA_STATUS, () => {
    expect(Actions.setSettingsDataStatus(true)).toEqual({ type: Actions.SETTINGS_DATA_STATUS, data: true });
  })
})
