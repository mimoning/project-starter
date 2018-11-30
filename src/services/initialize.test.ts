import { createStore } from 'redux';

import init from './initialize';
import { SettingsData } from '../types';
import reducers from '../reducers';

import { readSettingsFile } from './settings';

jest.mock('./settings');

const data: SettingsData = {
  projectPath: '/a/a/a',
  ipScopes: [{
    start: '1.1.1.1',
    end: '2.2.2.2',
  }],
};

const store = createStore(reducers);

const initialState = reducers(undefined, { type: '' });


describe('initialize function', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  })

  test('read file error', done => {
    (readSettingsFile as jest.Mock).mockReturnValue(Promise.reject(new Error('some error')))
    init(store.dispatch);
    expect(store.getState()).toEqual(initialState);
    setTimeout(() => {
      expect(store.getState()).toEqual({
        settings: {
          projectPath: '',
          ipScopes: [],
        },
        settingsDataStatus: true,
      })
      done()
    })
  })

  test('read file right', done => {
    (readSettingsFile as jest.Mock).mockResolvedValue(data);
    init(store.dispatch);
    setTimeout(() => {
      expect(store.getState()).toEqual({
        settings: data,
        settingsDataStatus: true,
      });
      done();
    })
  })
})
