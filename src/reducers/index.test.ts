import { SET_SETTINGS, SETTINGS_DATA_STATUS } from '../actions';
import reducers from './index';

describe('reducers', () => {
  test.each`
    props
    ${'settings'}
    ${'settingsDataStatus'}
  `('initial state data should have $props property', ({ props }) => {
    expect(reducers(undefined, { type: '' })).toHaveProperty(props)
  })

  const initialState = reducers(undefined, { type: '' });

  it('change settings', () => {
    
    const data = {
      projectPath: '/a/a/a/a',
      ipScopes: [{
        start: '10.6.180.100',
        end: '10.6.180.200',
      }]
    }

    expect(
      reducers(initialState, { type: SET_SETTINGS, data }),
    ).toEqual({
      settings: data,
      settingsDataStatus: initialState.settingsDataStatus,
    });
  })

  it('change settings data status', () => {
    expect(
      reducers(initialState, { type: SETTINGS_DATA_STATUS, data: true }),
    ).toEqual({
      settings: initialState.settings,
      settingsDataStatus: true,
    });
  })
})
