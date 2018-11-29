import { SettingsData } from '../types';


export const SET_SETTINGS = 'set_settings';
export const SETTINGS_DATA_STATUS = 'settings_data_status';

export function setSettings(data?: SettingsData) {
  if (!data) return { type: '', data: null };
  return { type: SET_SETTINGS, data };
}

export function setSettingsDataStatus(status: boolean) {
  return { type: SETTINGS_DATA_STATUS, data: status };
}
