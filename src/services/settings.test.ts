import * as settingsService from './settings';
import { electron, fs } from '../../test/mocks';

describe('settings service', () => {
  window.fs = fs;
  window.electron = electron;

  const MOCK_FILE_INFO = {
    '/PATH/settings.json': {
      projectPath: '',
      ipScopes: [{
        start: '',
        end: ''
      }]
    },
  }

  beforeEach(() => {
    window.fs.__setMockFiles(MOCK_FILE_INFO);
  })

  
  describe('read settings file', () => {
    test('read file ok', async () => {
      const data = await settingsService.readSettingsFile()
      expect(data).toHaveProperty('projectPath');
      expect(data).toHaveProperty('ipScopes');
    });
  });
});
