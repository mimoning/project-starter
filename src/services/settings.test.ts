import * as settingsService from './settings';
import { electron, fs } from '../../test/mocks';

describe('settings service', () => {
  window.fs = fs;
  window.electron = electron;
  const MOCK_FILE_INFO = {
    '/PATH/userdata.json': `
      "projectPath": ""
      "ipScopes": [{
        start: "",
        end: ""
      }]
    `,
  }

  beforeEach(() => {
    window.fs.__setMockFiles(MOCK_FILE_INFO);
  })

  
  describe('read settings file', () => {
    it('read file ok', () => {
      settingsService.readSettingsFile()
        .then((data) => {
          expect(data).toHaveProp('projectPath');
          expect(data).toHaveProp('isScopes');
        })
    });
  });
});
