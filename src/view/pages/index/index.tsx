import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// types
import { SettingsData, PropsOrigin } from '../../../types';

import { ReactComponent as SettingLogo } from '../../../assets/image/icons/settings.svg';
import Loading from '../../components/loading';

import { validateSettings } from '../../../utils';
import { SETTINGS, CHECK } from '../../constant';
import { readSettingsFile } from '../../../services/settings';

import './index.scss';
import { setSettings } from '../../../actions';

interface Props extends PropsOrigin {
  settings: SettingsData;
  settingsStatus: boolean;
  actions: {
    setSettings: Function;
  }
}

class Index extends React.Component <Props, any> {
  constructor(props: Props) {
    super(props);
  }

  public start(): void {
    const isReady = validateSettings(this.props.settings)
    if (isReady) {
      this.switchPage(CHECK);
    } else {
      this.switchPage(SETTINGS);
    }
  }

  public switchPage(pathname: string): void {
    this.props.history.push({ pathname });
  }

  public render() {
    const loading = !this.props.settingsStatus;
    if (loading) return <Loading/>
    return (
      <div className="App">
        <h1 className="App-title">Welcome to use <strong>DCE Starter</strong></h1>
        <button className="btn blue start-btn" onClick={() => this.start()}>Start DCE →</button>
        <div className="settings-btn" onClick={() => this.switchPage(SETTINGS)}><SettingLogo /></div>
      </div>
    );
  }
}

function mapStateToProps(state: { settings: SettingsData, settingsDataStatus: boolean }) {
  return {
    settings: state.settings,
    settingsStatus: state.settingsDataStatus
  };
}

function mapDispatchToProps(dispatch: any) {
  return { actions: bindActionCreators({ setSettings }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
