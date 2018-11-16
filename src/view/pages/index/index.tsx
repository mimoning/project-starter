import * as React from 'react';

import { ReactComponent as SettingLogo } from '../../../assets/image/icons/settings.svg';

import { validateSettings } from '../../../utils';
import { SETTINGS, CHECK } from '../../constant';
import { readSettingsFile } from '../../../services/settings';

import './index.scss';

interface State {
  loading: boolean,
}

class Index extends React.Component <any, State> {
  constructor(props: any) {
    super(props);
    this.state = { loading: false }
  }

  public start(): void {
    readSettingsFile(data => {
      if (validateSettings(data)) {
        this.switchPage(CHECK);
      } else {
        this.switchPage(SETTINGS);
      }
    }, () => {
      this.switchPage(SETTINGS);
    })
  }

  public switchPage(pathname: string): void {
    this.props.history.push({ pathname });
  }

  public render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to use <strong>DCE Starter</strong></h1>
        <button className="btn blue start-btn" onClick={() => this.start()}>Start DCE →</button>
        <div className="settings-btn" onClick={() => this.switchPage(SETTINGS)}><SettingLogo /></div>
      </div>
    );
  }
}

export default Index;
