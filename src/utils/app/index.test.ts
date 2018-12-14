import { createStore } from 'redux';
import * as appUtil from '.';
import { Action } from '../../types';

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

  describe('mapStateToProps', () => {
    const state = { a: 1, b: 2 };
    test('string only', () => {
      const props = appUtil.mapStateToProps('a')(state);
      expect(props).toEqual({ a: 1 });
    });

    test('StringMap only', () => {
      const props = appUtil.mapStateToProps(['b', 'a'])(state);
      expect(props).toEqual({ b: 1 });
    });

    test('string & StringMap', () => {
      const props = appUtil.mapStateToProps('a', ['c', 'b'])(state);
      expect(props).toEqual({ a: 1, c: 2 });
    });
  })

  describe('mapDispatchToProps', () => {
    const initState = 1;
    const reducer = (state: number | undefined, action: Action): number => {
      if (!state) return initState;
      switch(action.type) {
        case 'ADD': return state + action.data;
        case 'REDUCE': return state - action.data;
        default: return state;
      }
    }
    const addAction = (data: number): Action => {
      return { type: 'ADD', data };
    }
    const reduceAction = (data: number): Action => {
      return { type: 'REDUCE', data };
    }
    const store = createStore(reducer);

    test('out put the right props', () => {
      const props = appUtil.mapDispatchToProps({ addAction })(store.dispatch);
      expect(props).toHaveProperty('actions');
      expect((props as any).actions).toHaveProperty('addAction');
    })

    test('works normally', () => {
      const props: any = appUtil.mapDispatchToProps({ add: addAction, reduce: reduceAction })(store.dispatch);
      props.actions.add(1);
      expect(store.getState()).toEqual(2);
      props.actions.reduce(2);
      expect(store.getState()).toEqual(0);
    })
  })
})
