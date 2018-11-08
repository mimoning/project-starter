import * as React from 'react';
import './App.scss';
import Loading from './view/components/loading';

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
      <div className="App" onClick={() => this.clickHandler()}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Loading show={this.state.loading} />
      </div>
    );
  }
}

export default App;
