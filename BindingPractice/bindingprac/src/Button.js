import React, {Component} from 'react';
import logo from './logo.svg';
import './Button.css';

class Button extends Component{
    static defaultProps = {
        buttonText : "Click on me!",
        color : "pink"
    }
  render() {
  return (
    <div className="Button">
      <button style={{backgroundColor: this.props.color}}>{this.props.buttonText}</button>
    </div>
  );
  }
}

export default Button;