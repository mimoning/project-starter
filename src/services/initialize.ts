import { setSettings, setSettingsDataStatus } from '../actions';
import { readSettingsFile } from './settings';

async function getInitialSettings(dispatch: Function) {
  const settings = await readSettingsFile()
    .catch(() => ({
      projectPath: '',
      ipScopes: [],
    }));
  dispatch(setSettings(settings));
  dispatch(setSettingsDataStatus(true));
}

export default function init(dispatch: Function) {
  getInitialSettings(dispatch);
}
