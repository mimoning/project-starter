import { Dispatch } from 'redux';
import { History } from 'history';

export interface Action {
  type: string;
  data: any;
}

export interface IPScope {
  start: string;
  end: string;
}

export interface SettingsData {
  projectPath: string;
  ipScopes: IPScope[];
}

export interface PropsOrigin {
  history: History;
  dispatch?: Dispatch;
}
