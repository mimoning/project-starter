import { SettingsData } from '../types';


export const SET_SETTINGS = 'set_settings';

export function setSettings(data?: SettingsData) {
  if (!data) return { type: '', data: null };
  return { type: SET_SETTINGS, data };
}
