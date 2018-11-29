import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { isIP, validateSettings } from '../../../utils';
import { CHECK } from '../../constant';

// types
import { PropsOrigin, SettingsData } from '../../../types';

// components
import Input from '../../components/input';
import { ReactComponent as Plus } from '../../../assets/image/icons/plus.svg';
import { ReactComponent as Minus } from '../../../assets/image/icons/minus.svg';

import './settings.scss';
import { setSettings } from '../../../actions';

interface State extends SettingsData {}

interface Props extends PropsOrigin {
  settings: SettingsData;
  actions: {
    setSettings: Function;
  }
}

class Settings extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { ...props.settings };
  }

  public componentWillReceiveProps(nextProps: Props) {
    if (!validateSettings(nextProps.settings)) return;
    if (JSON.stringify(this.state) !== JSON.stringify(nextProps.settings)) {
      this.setState({
        ...nextProps.settings
      })
    }
  }

  private userDataPath = `${window.electron.remote.app.getPath('userData')}/settings.json`;

  public handleProjectPathChange(value: string):void {
    this.setState({
      projectPath: value,
    });
  }

  public handleProjectPathFocus(el: EventTarget & HTMLInputElement): void {
    const paths = window.electron.remote.dialog.showOpenDialog({
      title: 'Project path',
      properties: [
        'openDirectory',
        'createDirectory',
        'treatPackageAsDirectory',
      ],
    });
    if (paths) {
      this.setState({
        projectPath: paths.join('/'),
      });
    }
    el.blur();
  }

  public generateIPInputStatus(ip: string): 'error' | '' {
    if (ip && !isIP(ip)) return 'error';
    return '';
  }

  public handleIpScopeChange(value: string, index: number, isStart: boolean = false):void {
    const ipScopes = this.state.ipScopes.map((v, i) => {
      if (i === index) {
        const scope = { ...v };
        scope[isStart ? 'start' : 'end'] = value;
        return scope;
      }
      return v;
    });
    this.setState({
      ipScopes,
    })
  }

  public handleIpScopeRowChange(index?: number): void {
    const { ipScopes } = this.state;
    const initScope = {
      start: '',
      end: '',
    }
    if (index === undefined) {
      this.setState({
        ipScopes: [...ipScopes, initScope],
      })
    } else {
      this.setState({
        ipScopes: ipScopes.filter((v, i) => i !== index),
      })
    }
  }

  public save() {
    const data = JSON.stringify(this.state);
    if (!validateSettings(this.state)) {
      window.electron.remote.dialog.showMessageBox({
        type: 'error',
        message: 'You need to improve form input.'
      })
      return;
    }
    window.fs.writeFile(this.userDataPath, data, (err: any) => {
      if (err) {
        window.electron.remote.dialog.showMessageBox({
          type: 'error',
          message: err.message
        })
        return;
      }
      this.props.actions.setSettings(this.state);
      this.props.history.push({ pathname: CHECK });
    })
  }

  public render() {
    const { projectPath, ipScopes } = this.state;
    return (
      <section className="settings">
        <div className="form-item">
          <label className="form-item-label" htmlFor="projectPath">Project Path</label>
          <div className="form-item-content">
            <Input type="text"
              className="bbo"
              id="projectPath"
              value={projectPath}
              onFocus={e => this.handleProjectPathFocus(e.target)}
              onChange={e => this.handleProjectPathChange(e.target.value)}
            />
          </div>
        </div>
        <div className="form-item">
          <label className="form-item-label">IP scopes</label>
          <div className="form-item-content">
            {
              ipScopes.map((scope, i) => (
                <div className="scope-box" key={i}>
                  <Input className="scope-input" type="text"
                    value={scope.start}
                    status={this.generateIPInputStatus(scope.start)}
                    message="IP 地址格式验证错误"
                    onChange={e => this.handleIpScopeChange(e.target.value, i, true)}/>
                  ～
                  <Input className="scope-input" type="text"
                    value={scope.end}
                    status={this.generateIPInputStatus(scope.end)}
                    message="IP 地址格式验证错误"
                    onChange={e => this.handleIpScopeChange(e.target.value, i)}/>
                  <span className="scope-btn icon" onClick={() => this.handleIpScopeRowChange(i)} ><Minus /></span>
                </div>
              ))
            }
            <span className="scope-btn plus icon" onClick={() => this.handleIpScopeRowChange()}><Plus /></span>
          </div>
        </div>
        <div className="form-item">
          <button className="btn blue" onClick={() => this.save()}>Save</button>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state: { settings: SettingsData }) {
  return { settings: state.settings };
}

function mapDispatchToProps(dispatch: any) {
  return { actions: bindActionCreators({ setSettings }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
