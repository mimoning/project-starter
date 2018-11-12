import * as React from 'react';
import Input from '../../components/input';
import { ReactComponent as Plus } from '../../../assets/image/icons/plus.svg';
import { ReactComponent as Minus } from '../../../assets/image/icons/minus.svg';

import './settings.scss';

interface Props {

}

interface State {
  projectPath: string,
  ipScopes: {
    start: string,
    end: string,
  }[],
}

class Settings extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      projectPath: '',
      ipScopes: [{
        start: '',
        end: '',
      }],
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
            />
          </div>
        </div>
        <div className="form-item">
          <label className="form-item-label">IP scopes</label>
          <div className="form-item-content">
            {
              this.state.ipScopes.map((scope, i) => (
                <div className="scope-box" key={i}>
                  <Input className="scope-input" type="text" value={scope.start}/>
                  ～
                  <Input className="scope-input" type="text" value={scope.end}/>
                  <span className="scope-btn icon"><Minus /></span>
                </div>
              ))
            }
            <span className="scope-btn plus icon"><Plus /></span>
          </div>
        </div>
      </section>
    );
  }
}

export default Settings;
