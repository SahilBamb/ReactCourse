import React, {Component} from 'react';
import logo from './logo.svg';
import './Box.css';

class Box extends Component{
    static defaultProps = {
        color : "green",
        possibleColors : ["green","blue","red","yellow","pink","black","gray","indigo","purple"]
    }
    constructor(props){
        super(props);
        this.state = {
            color : this.props.color
        };
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(){
        const randIdx = Math.floor(Math.random()*this.props.possibleColors.length);
        const newColor = this.props.possibleColors[randIdx];
        console.log(newColor);
        this.setState({color : newColor});
    }
  render() {
    
  return (
    <div onClick={this.changeColor} id="square" className={this.state.color}>
    </div>
  );
  }
}

export default Box;

