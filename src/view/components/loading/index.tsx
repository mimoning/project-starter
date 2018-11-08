import * as React from 'react';
import './loading.scss'

type Props = {
  show?: boolean,
}

class Loading extends React.Component <Props, {}> {
  static defaultProps = {
    show: true,
  }
  public render() {
    if (this.props.show) {
      return (
        <div className="loading-box">
          <span className="leaf top-left"></span>
          <span className="leaf top-right"></span>
          <span className="leaf bot-left"></span>
          <span className="leaf bot-right"></span>
        </div>
      )
    }
    return <div></div>
  }
}

export default Loading;
