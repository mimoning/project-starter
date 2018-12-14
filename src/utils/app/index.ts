import { bindActionCreators, ActionCreatorsMapObject } from 'redux';

import { isIP } from '../ip';
import { StateProperties } from '../../reducers';

export function validateSettings(data: string | object): boolean {
  let settings: any;
  if (typeof data === 'string') {
    settings = JSON.parse(data);
  } else {
    settings = data;
  }
  if (!settings.projectPath) return false;
  if (!settings.ipScopes.some((v: any) => !!((v.start && isIP(v.start)) || (v.end && isIP(v.end))))) return false;
  return true;
}

type StringMap = [string, StateProperties];

/**
 * @param keys (string | StringMap)[], If key is string, You set the
 * state prop to the components accordingly. If key is StringMap, You set
 * the first string as the prop, and the second string is a prop from state
 */
export function mapStateToProps(...keys: (StateProperties|StringMap)[]) {
  return function (state: any): {} {
    const props = {} as {
      [index: string]: any;
    };
    keys.forEach(k => {
      if (typeof k === 'string') {
        props[k] = state[k];
      } else {
        props[k[0]] = state[k[1]];
      }
    });
    return props;
  }
}


/**
 * @param actions This is the actions Object;
 */
export function mapDispatchToProps(actions: ActionCreatorsMapObject) {
  return function (dispatch: any): {} {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  };
}
