import { combineReducers } from 'redux';
import { SET_SETTINGS, SETTINGS_DATA_STATUS } from '../actions';

import { Action, SettingsData } from '../types';


interface SettingsAction extends Action {
  data: SettingsData;
}

interface StatusAction extends Action {
  data: boolean;
}

const initialSettingsState = {
  projectPath: '',
  ipScopes: [{
    start: '',
    end: '',
  }],
}

function settingsReducer(state: SettingsData | undefined, action: SettingsAction): SettingsData {
  if (!state) return initialSettingsState;

  switch (action.type) {
    case SET_SETTINGS: return action.data;
    default: return state;
  }
}

function settingsDataStatusReducer(state: boolean | undefined, action: StatusAction): boolean {
  if (state === undefined) return false;
  switch (action.type) {
    case SETTINGS_DATA_STATUS: return action.data;
    default: return state;
  }
}

export default combineReducers({
  settings: settingsReducer,
  settingsDataStatus: settingsDataStatusReducer,
});
