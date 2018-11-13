import * as React from 'react';
import './input.scss';

interface P extends React.DetailedHTMLProps <React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  status?: 'error' | 'success' | '',
  message?: string,
}

class Input extends React.Component <P, {}> {
  public render() {
    const inputBoxClassName = `input-box ${this.props.className || ''}`;
    const inputClassName = `input ${this.props.status || ''}`;
    const borderBottom = this.props.className && this.props.className.indexOf('bbo') > -1
      ?<span className="bbo-border">{ this.props.value }</span>
      : '';
    const message = this.props.message && this.props.status
      ? <span className={`input-message ${this.props.status}`}>{this.props.message}</span>
      : '';
    return (
      <div className={inputBoxClassName}>
        <input { ...this.props }
          className={inputClassName}
        />
        { borderBottom }
        { message }
      </div>
    );
  }
}

export default Input;
