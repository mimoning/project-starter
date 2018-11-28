import { combineReducers } from 'redux';
import { SET_SETTINGS } from '../actions';

import { Action, SettingsData } from '../types';


interface SettingsAction extends Action {
  data: SettingsData;
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

export default combineReducers({
  settings: settingsReducer,
});
