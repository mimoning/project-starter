import * as React from 'react';
import Loading from '../../components/loading';

import './index.scss';

import logo from './logo.svg';

type Props = {}

type State = {
  loading: boolean,
}

class App extends React.Component <Props, State> {
  constructor(props: Props) {
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
        <button className="btn start-btn">Start DCE →</button>
        <Loading show={this.state.loading} />
      </div>
    );
  }
}

export default App;
