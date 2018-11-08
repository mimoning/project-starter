import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Loading from '../../components/loading';

import './index.scss';

import logo from './logo.svg';

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

  public render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to use <strong>DCE Starter</strong></h1>
        <button className="btn blue start-btn" onClick={() => this.props.history.push({ pathname: 'test' })}>Start DCE →</button>
        <Loading show={this.state.loading} />
      </div>
    );
  }
}

export default App;
