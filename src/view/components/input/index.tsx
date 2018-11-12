import * as React from 'react';
import './input.scss';

interface P extends React.DetailedHTMLProps <React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

class Input extends React.Component <P, {}> {
  public render() {
    return (
      <div className={`input-box ${this.props.className || ''}`}>
        <input { ...this.props }
          className="input"
        />
        {
          this.props.className && this.props.className.indexOf('bbo') > -1 ?
          <span className="bbo-border">{ this.props.value }</span>
          : ''
        }
      </div>
    );
  }
}

export default Input;
