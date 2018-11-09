import * as React from 'react';
import { ReactComponent as SettingLogo } from '../../../assets/image/icons/settings.svg';

import './index.scss';

interface State {
  loading: boolean,
}

class App extends React.Component <any, State> {
  constructor(props: any) {
    super(props);
    this.state = { loading: false }
  }

  public clickHandler(): void {
    this.setState({
      loading: !this.state.loading
    })
  }

  public switchPage(pathname: string): void {
    this.props.history.push({ pathname });
  }

  public render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to use <strong>DCE Starter</strong></h1>
        <button className="btn blue start-btn" onClick={() => this.switchPage('test')}>Start DCE →</button>
        <div className="settings-btn" onClick={() => this.switchPage('settings')}><SettingLogo /></div>
      </div>
    );
  }
}

export default App;
