import * as appUtil from '.';

describe('appUtils', () => {
  describe('validateSettings', () => {
    test('missing projectPath', () => {
      const data = {
        projectPath: '',
        ipScopes: [{
          start: '192.168.1.1',
          end: '192.168.2.1',
        }]
      }
      expect(appUtil.validateSettings(data)).toBe(false);
    })
    test('wrong ip', () => {
      const data = {
        projectPath: '',
        ipScopes: [{
          start: '1asd',
          end: '192.168.2.1',
        }]
      }
      expect(appUtil.validateSettings(data)).toBe(false);
    })
    test('empty ip scopes', () => {
      const data = {
        projectPath: '/app/asd/asd/asd',
        ipScopes: [{
          start: '',
          end: '',
        }]
      }
      expect(appUtil.validateSettings(data)).toBe(false);
    })
    test('start ip only', () => {
      const data = {
        projectPath: '/app/asd/asd/asd',
        ipScopes: [{
          start: '1.1.1.1',
          end: '',
        }]
      }
      expect(appUtil.validateSettings(data)).toBe(true);
    })
    test('complete settings', () => {
      const data = {
        projectPath: '/app/asd/asd/asd',
        ipScopes: [{
          start: '1.1.1.1',
          end: '2.2.2.2',
        }]
      }
      expect(appUtil.validateSettings(data)).toBe(true);
    })
  })
})
