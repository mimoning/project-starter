import * as appUtil from '.';

describe('appUtils', () => {
  describe('validateSettings', () => {
    it('missing projectPath', () => {
      const data = {
        projectPath: '',
        ipScopes: [{
          start: '192.168.1.1',
          end: '192.168.2.1',
        }]
      }
      expect(appUtil.validateSettings(data)).toBe(false);
    })
    it('wrong ip', () => {
      const data = {
        projectPath: '',
        ipScopes: [{
          start: '1asd',
          end: '192.168.2.1',
        }]
      }
      expect(appUtil.validateSettings(data)).toBe(false);
    })
    it('empty ip scopes', () => {
      const data = {
        projectPath: '/app/asd/asd/asd',
        ipScopes: [{
          start: '',
          end: '',
        }]
      }
      expect(appUtil.validateSettings(data)).toBe(false);
    })
    it('start ip only', () => {
      const data = {
        projectPath: '/app/asd/asd/asd',
        ipScopes: [{
          start: '1.1.1.1',
          end: '',
        }]
      }
      expect(appUtil.validateSettings(data)).toBe(true);
    })
    it('complete settings', () => {
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
