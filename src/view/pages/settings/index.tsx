import * as React from 'react';

import { isIP } from '../../../utils';

// components
import Input from '../../components/input';
import { ReactComponent as Plus } from '../../../assets/image/icons/plus.svg';
import { ReactComponent as Minus } from '../../../assets/image/icons/minus.svg';

import './settings.scss';

interface State {
  projectPath: string,
  ipScopes: {
    start: string,
    end: string,
  }[],
}

class Settings extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      projectPath: '',
      ipScopes: [{
        start: '',
        end: '',
      }],
    }
  }

  public handleProjectPathChange(value: string):void {
    this.setState({
      projectPath: value,
    });
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
    const ipScopes = this.state.ipScopes;
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


  public render() {
    return (
      <section className="settings">
        <div className="form-item">
          <label className="form-item-label" htmlFor="projectPath">Project Path</label>
          <div className="form-item-content">
            <Input type="text"
              className="bbo"
              id="projectPath"
              value={this.state.projectPath}
              onChange={e => this.handleProjectPathChange(e.target.value)}
            />
          </div>
        </div>
        <div className="form-item">
          <label className="form-item-label">IP scopes</label>
          <div className="form-item-content">
            {
              this.state.ipScopes.map((scope, i) => (
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
      </section>
    );
  }
}

export default Settings;
