import * as React from 'react';
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
      ipScopes: [],
    }
  }

  public render() {
    return (
      <section className="settings">
        <div className="form-item project-path">
          <label className="form-item-label" htmlFor="projectPath">Project Path</label>
          <div className="form-item-content">
            <input type="text" id="projectPath" value={this.state.projectPath}/>
          </div>
        </div>
        <div className="form-item ip-scope">
          <label className="form-item-label">IP scopes</label>
          <div className="form-item-content">
            {
              this.state.ipScopes.map((scope, i) =>
                (<input className="scope-input" type="text" value={scope.start}/>)
                + '-' +
                (<input className="scope-input" type="text" value={scope.end}/>)
                +
                (<div className="scope-btn icon"><Minus /></div>)
              )
            }
            <div className="scope-btn icon"><Plus /></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Settings;
