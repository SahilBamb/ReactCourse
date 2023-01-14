import React, {Component} from 'react';
import logo from './logo.svg';
import './Button.css';

class Button extends Component{
    static defaultProps = {
        buttonText : "X",
    }

    constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
      this.props.remove(this.props.value);
    }
    
  render() {
  return (
    <div className="Button">
      <button onClick={this.handleClick}>{this.props.buttonText}</button>
    </div>
  );
  }
}

export default Button;