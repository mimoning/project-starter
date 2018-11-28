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

interface State {
  loading: boolean,
  ready: boolean,
}

interface Props extends PropsOrigin {
  settings: SettingsData;
  actions: {
    setSettings: Function;
  }
}

class Index extends React.Component <Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true,
      ready: false,
    }
  }

  public componentDidMount() {
    this.activate();
  }

  private activate() {
    this.setState({ loading: true });
    if (validateSettings(this.props.settings)) {
      this.setState({ ready: true, loading: false });
      return;
    }
    readSettingsFile()
      .then((data: SettingsData) => {
        if (validateSettings(data)) {
          this.setState({ ready: true, loading: false });
          this.props.actions.setSettings(data);
        } else {
          this.setState({ ready: false, loading: false });
        }
      })
      .catch(() => {
        this.setState({ ready: false, loading: false });
      })
  }

  public start(): void {
    const { ready: isReady } = this.state;
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
    const { loading } = this.state;
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

function mapStateToProps(state: { settings: SettingsData }) {
  return { settings: state.settings };
}

function mapDispatchToProps(dispatch: any) {
  return { actions: bindActionCreators({ setSettings }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
